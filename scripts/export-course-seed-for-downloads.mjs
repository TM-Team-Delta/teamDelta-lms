import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { enrichCourses } from '../src/data/courseCurriculum.js';
import { fileURLToPath as urlToPath, pathToFileURL } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, '..');
const sourceFile = path.join(projectRoot, 'src', 'data', 'courseData.js');
const sourceDir = path.dirname(sourceFile);

const normalizeToPosix = (value) => value.split(path.sep).join('/');

const flattenMaybeGrouped = (value) => {
  if (!Array.isArray(value)) return [];
  if (value.length === 1 && Array.isArray(value[0])) return value[0];
  return value;
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const parseAssetImports = (code) => {
  const importRegex =
    /^import\s+([A-Za-z_$][\w$]*)\s+from\s+['"]([^'"]+\.(?:png|jpe?g|webp|svg))['"];\s*$/gim;

  const assets = [];
  let match;

  while ((match = importRegex.exec(code))) {
    assets.push({ ident: match[1], importPath: match[2] });
  }

  const nextCode = code.replace(importRegex, '');
  return { assets, code: nextCode };
};

const resolveAssetRelative = (importPathValue) => {
  const absPath = path.resolve(sourceDir, importPathValue);
  const relPath = path.relative(projectRoot, absPath);
  return normalizeToPosix(relPath);
};

const stripEnrichImportAndMutation = (code) => {
  let nextCode = code;

  nextCode = nextCode.replace(
    /^import\s+\{\s*enrichCourses\s*\}\s+from\s+['"]\.\/courseCurriculum['"];\s*$/gim,
    ''
  );

  nextCode = nextCode.replace(
    /^\s*courses\s*\[\s*0\s*\]\s*=\s*enrichCourses\s*\([\s\S]*?\)\s*;\s*$/gim,
    ''
  );

  return nextCode;
};

const replaceAssetIdentsWithPaths = (code, assets) => {
  let nextCode = code;

  for (const asset of assets) {
    const literal = JSON.stringify(resolveAssetRelative(asset.importPath));
    const identRegex = new RegExp(`\\b${escapeRegExp(asset.ident)}\\b`, 'g');
    nextCode = nextCode.replace(identRegex, literal);
  }

  return nextCode;
};

const toTitleCase = (value) => {
  if (!value || typeof value !== 'string') return value;
  return value
    .split(/[\s-_]+/g)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(' ');
};

const mapDownloadAssetToItem = ({ asset, itemType }) => ({
  type: itemType,
  title: asset?.title || '',
  // Option A: inline contents (no hosting/upload needed).
  src: null,
  time: asset?.duration || '',
  fileName: asset?.fileName || null,
  mimeType: asset?.mimeType || 'text/plain',
  content: asset?.content || '',
});

const mapLessonToExampleShape = ({ lesson }) => {
  const videoItem = lesson?.video?.url
    ? [
        {
          type: 'video',
          title: lesson.video.title || lesson.title,
          src: lesson.video.url,
          time: lesson.video.duration || lesson.duration || '',
        },
      ]
    : [];

  const documentItems = (lesson?.materials?.documents || []).map((asset) =>
    mapDownloadAssetToItem({ asset, itemType: 'document' })
  );

  const assignmentItems = (lesson?.materials?.assignments || []).map((asset) =>
    mapDownloadAssetToItem({ asset, itemType: 'assignment' })
  );

  // In your curriculum builder, assignments also exist as `assignmentDescription`.
  // Keep that as a text-only assignment entry for completeness.
  const textAssignment =
    lesson?.assignmentDescription
      ? [
          {
            type: 'assignment',
            title: lesson.assignmentDescription,
            src: null,
            time: '',
          },
        ]
      : [];

  return {
    id: lesson.id,
    title: lesson.title,
    description: lesson.description || '',
    time: lesson.duration || '',
    tutor: lesson.mentorName || 'Trueminds Mentor',
    learn: [...videoItem, ...documentItems],
    assignment: [...assignmentItems, ...textAssignment],
  };
};

const mapUnitsFromCourse = ({ course }) => {
  const modules = course?.courseOutline || [];
  let unitCounter = 0;
  const units = [];

  for (const module of modules) {
    for (const unit of module.units || []) {
      unitCounter += 1;

      const primarySection = (unit.sections || [])[0] || null;
      const lessons = (primarySection?.learnItems || []).map((lesson) =>
        mapLessonToExampleShape({ lesson })
      );

      units.push({
        id: unitCounter,
        title: `Unit ${unitCounter}`,
        subtitle: unit.title,
        moduleTitle: module.title,
        description: unit.about || unit.lessonPage?.description || '',
        lessons,
      });
    }
  }

  return units;
};

const mapCourseToExampleShape = ({ course, mentor }) => {
  const units = mapUnitsFromCourse({ course });

  return {
    id: course.id,
    name: course.title,
    category: toTitleCase(course.category),
    level: (course.level || '').toLowerCase(),
    duration: course.duration?.label || '',
    image: course.coverImage,
    description: course.shortDescription || course.overview?.about || '',
    mentor: mentor
      ? {
          name: mentor.name,
          role: mentor.title,
          bio: mentor.bio,
          image: mentor.avatar,
          mentorProfile: {
            title: mentor.title,
            email: mentor.email,
            totalStudents: mentor.stats?.students ?? 0,
            totalCourses: mentor.stats?.courses ?? 0,
            rating: mentor.stats?.rating ?? 0,
            skills: mentor.skills || [],
            recentReviews: (mentor.reviews || []).map((review, index) => ({
              id: review.id || index + 1,
              name: review.reviewer,
              image: review.avatar,
              message: review.comment,
              date: review.createdAt || null,
            })),
          },
        }
      : null,
    whatYouLearn: course.overview?.whatYouWillLearn || [],
    tools: course.overview?.toolsNeeded || [],
    prerequisites: course.overview?.prerequisites || [],
    benefits: course.overview?.benefits || [],
    discussion: course.discussion?.enabled
      ? course.discussion?.channels || []
      : [],
    units,
  };
};

const main = async () => {
  const original = await fs.readFile(sourceFile, 'utf8');
  const parsed = parseAssetImports(original);

  let transformed = parsed.code;
  transformed = stripEnrichImportAndMutation(transformed);
  transformed = replaceAssetIdentsWithPaths(transformed, parsed.assets);
  transformed = transformed.replace(
    /import\s+\{\s*enrichCourses\s*\}\s+from\s+['"]\.\/courseCurriculum['"]\s*;/g,
    "import { enrichCourses } from './courseCurriculum.js';"
  );

  transformed += '\nexport default { skillLevels, filters, mentors, courses };';

  // Import via a temp file next to the original so relative imports work.
  const tmpModule = path.join(sourceDir, '.courseData.export.forDownloads.mjs');
  await fs.writeFile(tmpModule, transformed, 'utf8');

  const mod = await import(pathToFileURL(tmpModule).href);

  const rawMentors = flattenMaybeGrouped(mod.default.mentors);
  const rawCourses = flattenMaybeGrouped(mod.default.courses);

  const enrichedCourses = enrichCourses(rawCourses, rawMentors);
  const mentorById = new Map(rawMentors.map((mentor) => [mentor.id, mentor]));

  const coursesCatalog = enrichedCourses.map((course) =>
    mapCourseToExampleShape({
      course,
      mentor: mentorById.get(course.mentorId) || null,
    })
  );

  const payload = {
    generatedAt: new Date().toISOString(),
    source: {
      courseData: 'src/data/courseData.js',
      curriculum: 'src/data/courseCurriculum.js',
    },
    coursesCatalog,
  };

  const downloadsDir = path.resolve(
    'C:/Users/RAWFILE/Downloads/CourseDataEdited/CourseDataEdited/CourseData'
  );
  const outFile = path.join(downloadsDir, 'trueminds-courses-catalog.json');
  await fs.writeFile(outFile, JSON.stringify(payload, null, 2), 'utf8');

  try {
    await fs.unlink(tmpModule);
  } catch {}

  process.stdout.write(
    `Wrote ${normalizeToPosix(path.relative(projectRoot, outFile))}\n`
  );
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
