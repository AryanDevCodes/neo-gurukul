import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster as HotToaster } from 'react-hot-toast';
import { AuthProvider } from "./contexts/AuthContext";
import FuturisticHeader from "./components/FuturisticHeader";
import FuturisticIndex from "./pages/FuturisticIndex";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import KnowledgeBase from "./pages/KnowledgeBase";
import TeacherDashboard from "./pages/TeacherDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import TeacherSpecializations from "./pages/TeacherSpecializations";
import SanskritTeachers from "./pages/SanskritTeachers";
import VeerataVidya from "./pages/VeerataVidya";
import AssessmentSystem from "./pages/AssessmentSystem";
import CommunityHub from "./pages/CommunityHub";
import Courses from "./pages/Courses";
import LearningAnalytics from "./pages/LearningAnalytics";
import MediaManagement from "./pages/MediaManagement";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";
import { ThemeProvider } from "./components/ui/ThemeProvider";



const App = () => (
  <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <HotToaster position="top-right" />
          <BrowserRouter>
          <FuturisticHeader />
          <Routes>
          <Route path="/" element={<FuturisticIndex />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student-dashboard" element={
            <ProtectedRoute requiredRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          } />
          <Route path="/teacher-dashboard" element={
            <ProtectedRoute requiredRole="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          } />
          <Route path="/parent-dashboard" element={
            <ProtectedRoute requiredRole="parent">
              <ParentDashboard />
            </ProtectedRoute>
          } />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/teacher-specializations" element={<TeacherSpecializations />} />
          <Route path="/teachers/sanskrit" element={<SanskritTeachers />} />
          <Route path="/veerata-vidya" element={<VeerataVidya />} />
          <Route path="/assessment-system" element={<AssessmentSystem />} />
          <Route path="/community-hub" element={<CommunityHub />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/analytics" element={
            <ProtectedRoute>
              <LearningAnalytics />
            </ProtectedRoute>
          } />
          <Route path="/media-management" element={<MediaManagement />} />
          {/* Placeholder routes for other teacher specializations */}
          <Route path="/teachers/philosophy" element={<div className="p-8 text-center">Philosophy Teachers - Coming Soon</div>} />
          <Route path="/teachers/scriptures" element={<div className="p-8 text-center">Scripture Teachers - Coming Soon</div>} />
          <Route path="/teachers/yoga" element={<div className="p-8 text-center">Yoga Teachers - Coming Soon</div>} />
          <Route path="/teachers/ayurveda" element={<div className="p-8 text-center">Ayurveda Teachers - Coming Soon</div>} />
          <Route path="/teachers/arts" element={<div className="p-8 text-center">Arts Teachers - Coming Soon</div>} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </AuthProvider>
);

export default App;
