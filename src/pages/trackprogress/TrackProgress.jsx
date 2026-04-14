import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Clock,
  MoreHorizontal,
  CheckCircle2,
  FileText,
  Award,
} from "lucide-react";
import { trackProgressService } from "../../services/trackProgressService";

const TrackProgress = () => {
  const [overview, setOverview] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
  const fetchProgress = async () => {
    try {
      setLoading(true);

      const data = await trackProgressService.getProgressOverview();

      const courses = data?.courses || [];
      const overallProgress = data?.overallProgress || 0;

      setOverview({
        totalCompleted: overallProgress,
        totalCourses: courses.length,
      });

      setCourses(courses);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to load progress");
    } finally {
      setLoading(false);
    }
  };

  fetchProgress();
}, []);

  if (loading) return <p className="p-4">Loading progress...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <section className="min-h-[calc(100vh-92px)] p-4 sm:p-5 md:p-6">
      <h2 className="text-xl font-semibold mb-4">Progress Tracking</h2>

      {/* OVERVIEW CARD */}
      <div className="bg-brand-primary text-white p-6 rounded-2xl mb-8 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Overall Progress</h3>
          <p className="text-sm opacity-80">
            You have completed {overview?.totalCompleted ?? 0}% of your courses
          </p>
        </div>
      </div>

      {/* COURSES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {courses.map((course, i) => (
          <div key={i} className="bg-white rounded-2xl border overflow-hidden">
            {/* TOP */}
            <div className="bg-gray-100 h-28 flex items-center justify-center relative">
              <MoreHorizontal
                className="absolute top-3 right-3 text-gray-400"
                size={16}
              />
              <BookOpen className="text-gray-400" />
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <h4 className="text-sm font-semibold">{course.title}</h4>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-200">
                  {course.progress < 100 ? "In Progress" : "Completed"}
                </span>
              </div>

              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full mb-3">
  <div
    className="bg-brand-secondary h-2 rounded-full"
    style={{ width: `${course.progress}%` }}
  />
</div>

              <div className="flex justify-between items-center">
                <span className="text-xs flex items-center gap-1">
                  <Clock size={12} />
                  Today
                </span>
                <button className="bg-brand-primary text-white text-xs px-3 py-1 rounded-full">
                  {course.progress < 100 ? "Continue" : "View"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrackProgress;