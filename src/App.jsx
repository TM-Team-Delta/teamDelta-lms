import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/public/Home';

import Dashboard from './pages/dashboard/Dashboard';
import Notifications from './pages/notifications/Notifications';
import Assignments from './pages/assignment/AssignmentPage';
import TrackProgress from './pages/trackprogress/TrackProgress';
import Certificates from './pages/certificate/Certificates';
import Team from './pages/team/Team';

import Chat from './pages/chat/Chat';
import Profile from './pages/dashboard/Profile';
import SettingsPage from './pages/dashboard/Settings';
import PrivacySecurityPage from './components/settings/PrivacySecurity';
import LanguageRegionPage from './components/settings/LanguageRegion';
import AppearancePage from './components/settings/Appearance';

import UserLayout from './layouts/UserLayout';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import VerifyEmail from './pages/auth/VerifyEmail';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import GoogleCallback from './pages/auth/GoogleCallback';

import CourseCatalog from './pages/courses/CourseCatalog';
import CourseDetail from './pages/courses/CourseDetail';
import CourseUnitDetail from './pages/courses/CourseUnitDetail';
import CourseLessonDetail from './pages/courses/CourseLessonDetail';
import CourseCertificate from './pages/courses/CourseCertificate';

const App = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Navigate to='/' replace />} />
      </Route>

      {/* AUTH */}
      <Route element={<AuthLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='verify-email' element={<VerifyEmail />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='reset-password/:token' element={<ResetPassword />} />
        <Route path='api/auth/google/callback' element={<GoogleCallback />} />
      </Route>

      {/* USER DASHBOARD (PROTECTED) */}
      <Route element={<DashboardLayout />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='/dashboard/courses' element={<CourseCatalog />} />
        <Route path='/dashboard/team' element={<Team />} />
        <Route path='/dashboard/profile' element={<Profile />} />
        <Route path='/dashboard/track-progress' element={<TrackProgress />} />
        <Route path='/dashboard/certificate' element={<Certificates />} />
        <Route path='/dashboard/courses' element={<CourseCatalog />} />
        <Route
          path='/dashboard/course-detail/:courseId'
          element={<CourseDetail />}
        />
        <Route
          path='/dashboard/course-detail/:courseId/modules/:moduleId/items/:itemIndex'
          element={<CourseUnitDetail />}
        />
        <Route
          path='/dashboard/course-detail/:courseId/modules/:moduleId/items/:itemIndex/sections/:sectionIndex/lessons/:lessonIndex'
          element={<CourseLessonDetail />}
        />
        <Route
          path='/dashboard/course-detail/:courseId/modules/:moduleId/units/:unitId'
          element={<CourseUnitDetail />}
        />
        <Route
          path='/dashboard/course-detail/:courseId/certificate'
          element={<CourseCertificate />}
        />
        <Route path='dashboard/notifications' element={<Notifications />} />
        <Route path='dashboard/assignment' element={<Assignments />} />
        <Route path='chat' element={<Chat />} />
        <Route path='/dashboard/settings' element={<SettingsPage />} />
        <Route
          path='/dashboard/settings/appearance'
          element={<AppearancePage />}
        />
        <Route
          path='/dashboard/settings/privacy-security'
          element={<PrivacySecurityPage />}
        />
        <Route
          path='/dashboard/settings/language-region'
          element={<LanguageRegionPage />}
        />
      </Route>

      {/* ADMIN (ROLE PROTECTED) */}
      <Route element={<AdminLayout />}></Route>
    </Routes>
  );
};

export default App;
