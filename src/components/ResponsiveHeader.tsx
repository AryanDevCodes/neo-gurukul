
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const ResponsiveHeader = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (isHomePage) {
    return null;
  }

  const navigationItems = [
    {
      title: 'Learning Portals',
      items: [
        { name: 'Student Portal', href: '/student-dashboard', description: 'Access courses and track progress' },
        { name: 'Teacher Dashboard', href: '/teacher-dashboard', description: 'Manage classes and students' },
        { name: 'Parent Dashboard', href: '/parent-dashboard', description: 'Monitor child\'s development' },
      ]
    },
    {
      title: 'Knowledge Systems',
      items: [
        { name: 'Knowledge Base', href: '/knowledge-base', description: 'Ancient texts and modern resources' },
        { name: 'Teacher Specializations', href: '/teacher-specializations', description: 'Expert Acharyas in various fields' },
        { name: 'Sanskrit Teachers', href: '/teachers/sanskrit', description: 'Learn from Sanskrit masters' },
      ]
    },
    {
      title: 'Special Programs',
      items: [
        { name: 'Veerata Vidya 🛡️', href: '/veerata-vidya', description: 'Self-defense and warrior training' },
        { name: 'Assessment System', href: '/assessment-system', description: 'Holistic evaluation methods' },
        { name: 'Community Hub', href: '/community-hub', description: 'Connect with fellow learners' },
      ]
    }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-md border-b border-orange-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-lg font-bold">ॐ</span>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                Neo-Gurukul
              </span>
              <div className="text-xs text-gray-500 -mt-1">Ancient Wisdom • Modern Learning</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {navigationItems.map((category) => (
                  <NavigationMenuItem key={category.title}>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                      {category.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-80 p-4">
                        <div className="grid gap-3">
                          {category.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block p-3 rounded-lg hover:bg-orange-50 transition-colors group"
                            >
                              <div className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-sm text-gray-600 mt-1">
                                {item.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <Separator orientation="vertical" className="h-8 mx-4 bg-gray-300" />
            
            <div className="flex items-center gap-3">
              <Button variant="outline" asChild className="border-orange-300 hover:bg-orange-50">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <Link to="/register">🚀 Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="border-orange-300"
            >
              <span className="text-lg">{mobileMenuOpen ? '✕' : '☰'}</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-orange-200">
            <div className="space-y-4 pt-4">
              {navigationItems.map((category) => (
                <div key={category.title}>
                  <h3 className="font-semibold text-gray-800 mb-2">{category.title}</h3>
                  <div className="space-y-2 ml-4">
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block text-gray-600 hover:text-orange-600 transition-colors py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <Button variant="outline" asChild className="border-orange-300">
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600">
                  <Link to="/register" onClick={() => setMobileMenuOpen(false)}>🚀 Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default ResponsiveHeader;
