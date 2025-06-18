
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
            <div className="flex items-center gap-6 px-6">
              <Link to="/student-dashboard" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Student Portal
              </Link>
              <Link to="/teacher-dashboard" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Teacher Portal
              </Link>
              <Link to="/parent-dashboard" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Parent Portal
              </Link>
              <Link to="/knowledge-base" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Knowledge Base
              </Link>
            </div>
            
            {/* Separator */}
            <Separator orientation="vertical" className="h-8 mx-4 bg-gray-300" />
            
            {/* Auth Buttons */}
            <div className="flex items-center gap-3 pl-2">
              <Button variant="outline" asChild className="border-orange-300 hover:bg-orange-50">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
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
