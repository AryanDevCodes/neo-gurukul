
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    return null; // Don't show header on home page
  }

  return (
    <header className="bg-white shadow-md border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">ॐ</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Neo-Gurukul
            </span>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-4 px-6">
              <Link to="/student-dashboard" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">
                Student Portal
              </Link>
              <Link to="/teacher-dashboard" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">
                Teachers
              </Link>
              <Link to="/parent-dashboard" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">
                Parents
              </Link>
              <Link to="/knowledge-base" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">
                Knowledge
              </Link>
              <Link to="/veerata-vidya" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">
                🛡️ Veerata Vidya
              </Link>
              <Link to="/assessment-system" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">
                Assessment
              </Link>
              <Link to="/community-hub" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">
                Community
              </Link>
            </div>
            
            {/* Separator with better spacing */}
            <Separator orientation="vertical" className="h-8 mx-6 bg-gray-300" />
            
            {/* Auth Buttons with improved spacing */}
            <div className="flex items-center gap-3">
              <Button variant="outline" asChild className="border-orange-300 hover:bg-orange-50 text-sm">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-sm">
                <Link to="/register">Get Started</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="outline" size="icon">
              <span className="text-lg">☰</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
