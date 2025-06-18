
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/parent-dashboard" element={<ParentDashboard />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/teacher-specializations" element={<TeacherSpecializations />} />
          <Route path="/teachers/sanskrit" element={<SanskritTeachers />} />
          <Route path="/veerata-vidya" element={<VeerataVidya />} />
          <Route path="/assessment-system" element={<AssessmentSystem />} />
          <Route path="/community-hub" element={<CommunityHub />} />
          {/* Placeholder routes for other teacher specializations */}
          <Route path="/teachers/philosophy" element={<div className="p-8 text-center">Philosophy Teachers - Coming Soon</div>} />
          <Route path="/teachers/scriptures" element={<div className="p-8 text-center">Scripture Teachers - Coming Soon</div>} />
          <Route path="/teachers/yoga" element={<div className="p-8 text-center">Yoga Teachers - Coming Soon</div>} />
          <Route path="/teachers/ayurveda" element={<div className="p-8 text-center">Ayurveda Teachers - Coming Soon</div>} />
          <Route path="/teachers/arts" element={<div className="p-8 text-center">Arts Teachers - Coming Soon</div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
