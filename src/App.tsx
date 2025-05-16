import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { TourLMSProvider } from "./contexts/TourLMSContext";
import AdminDashboard from "./pages/admin/Dashboard";
import { GoogleOAuthProvider } from '@react-oauth/google';
import FacilitatorDashboard from "./pages/facilitator/Dashboard";
import StudentDashboard from "./pages/student/Dashboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Welcome from "./pages/auth/Welcome";
import { Toaster } from "@/components/ui/toaster";
import { NavigationProvider } from "./contexts/NavigationContext";
import Layout from "./components/layout/Layout";
import CreateCourse from "./pages/facilitator/CreateCourse";
import EditCourse from "./pages/facilitator/EditCourse";
import CourseGrid from "./pages/facilitator/CourseGrid";
import CourseDetail from "./pages/facilitator/CourseDetail";
import DraftCourses from "./pages/facilitator/DraftCourses";
import StudentCourses from "./pages/student/StudentCourses";
import StudentCourseDetail from "./pages/student/CourseDetail";
import Forum from "./pages/student/Forum";
import GeneralForum from "./components/forum/GeneralForum";
import FacilitatorAnalytics from "./components/analytics/FacilitatorAnalytics";
import Students from "./pages/facilitator/Students";
import UserAccount from "./pages/common/UserAccount";
import Security from "./pages/common/Security";
import Index from "./pages/Index";
import {clientID} from './lib/basic';
import Events from "./pages/student/Events";
import EventDetail from "./pages/student/EventDetail";
import MyTeams from "./pages/student/MyTeams";
import { GamificationRoutes } from './routes/gamification';
import { GamificationNav } from './components/gamification/GamificationNav';
import Challenges from '@/pages/student/Challenges';
import Challenge from '@/pages/student/Challenge';
import ChallengeTeams from '@/pages/student/ChallengeTeams';

const App = () => {
  return (
    <GoogleOAuthProvider clientId={clientID}>
    <TourLMSProvider>
      <AuthProvider>
        <NavigationProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                  <GamificationNav />
                </div>
              </header>

              <main className="container py-6">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/welcome" element={<Welcome />} />
                  
                  {/* Protected Routes */}
                  <Route path="/admin" element={<Layout userType="admin" />}>
                    <Route index element={<AdminDashboard />} />
                  </Route>
                  
                  <Route path="/facilitator" element={<Layout userType="facilitator" />}>
                    <Route index element={<FacilitatorDashboard />} />
                    <Route path="create-course" element={<CreateCourse />} />
                    <Route path="edit-course/:id" element={<EditCourse />} />
                    <Route path="courses" element={<CourseGrid />} />
                    <Route path="courses/:id" element={<CourseDetail />} />
                    <Route path="drafts" element={<DraftCourses />} />
                    <Route path="forum" element={<GeneralForum />} />
                    <Route path="analytics" element={<FacilitatorAnalytics />} />
                    <Route path="students" element={<Students />} />
                    <Route path="account" element={<UserAccount userType="facilitator" />} />
                    <Route path="security" element={<Security />} />
                  </Route>
                  
                  <Route path="/student" element={<Layout userType="student" />}>
                    <Route index element={<StudentDashboard />} />
                    <Route path="courses" element={<StudentCourses />} />
                    <Route path="courses/:id" element={<StudentCourseDetail />} />
                    <Route path="forum" element={<Forum />} />
                    <Route path="events" element={<Events />} />
                    <Route path="events/:id" element={<EventDetail />} />
                    <Route path="events/my-teams" element={<MyTeams />} />
                    <Route path="account" element={<UserAccount userType="student" />} />
                    <Route path="security" element={<Security />} />
                    <Route path="challenges" element={<Challenges />} />
                    <Route path="challenges/:id" element={<Challenge />} />
                    <Route path="challenges/:id/teams" element={<ChallengeTeams />} />
                  </Route>

                  {/* Oracle (Admin) Routes */}
                  <Route path="/oracle" element={<Layout userType="admin" />}>
                    <Route index element={<AdminDashboard />} />
                  </Route>

                  <Route path="/progress/*" element={<GamificationRoutes />} />
                  <Route path="/courses/:courseId/*" element={<GamificationRoutes />} />
                  <Route path="/achievements/*" element={<GamificationRoutes />} />
                  <Route path="/leaderboard/*" element={<GamificationRoutes />} />
                </Routes>
                <Toaster />
              </main>
            </div>
          </BrowserRouter>
        </NavigationProvider>
      </AuthProvider>
    </TourLMSProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
