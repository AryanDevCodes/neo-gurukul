import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Zap, 
  BookOpen, 
  Users, 
  Settings, 
  Search,
  Menu,
  X,
  Cpu,
  Network,
  Globe,
  Sparkles,
  Bot,
  Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthContext } from '@/contexts/AuthContext';

const FuturisticHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { user, signOut } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Neural Hub', path: '/', icon: Brain },
    { name: 'Knowledge Base', path: '/knowledge-base', icon: BookOpen },
    { name: 'Courses', path: '/courses', icon: Zap },
    { name: 'Community', path: '/community-hub', icon: Users },
    { name: 'Analytics', path: '/analytics', icon: Network },
    { name: 'Media Lab', path: '/media-management', icon: Globe },
  ];

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glassmorphism shadow-hologram border-b border-white/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="matrix-rain opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full gradient-cyber flex items-center justify-center shadow-cyber">
                <Brain className="w-6 h-6 text-white animate-neural-pulse" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 neon-border animate-glow"></div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-orbitron font-bold text-cyber bg-gradient-cyber bg-clip-text text-transparent">
                Dharma Neural
              </h1>
              <p className="text-xs text-muted-foreground font-mono">Academy v2.0</p>
            </div>
          </motion.div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group ${
                      isActive
                        ? 'bg-primary/20 text-primary shadow-cyber'
                        : 'text-foreground/80 hover:text-primary hover:bg-primary/10'
                    }`
                  }
                >
                  <item.icon className="w-4 h-4 group-hover:animate-neural-pulse" />
                  <span className="font-medium">{item.name}</span>
                  <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <motion.button
              className="p-2 rounded-lg glassmorphism hover:shadow-neon transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Actions */}
            {user ? (
              <div className="flex items-center space-x-3">
                <motion.div
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg glassmorphism"
                  whileHover={{ scale: 1.05 }}
                >
                  <Bot className="w-4 h-4 text-primary animate-neural-pulse" />
                  <span className="text-sm font-medium">{user.firstName}</span>
                  <Badge variant="outline" className="text-xs">
                    {user.role}
                  </Badge>
                </motion.div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="neon-border hover:shadow-neon"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/login')}
                  className="hover:shadow-neon"
                >
                  Access Portal
                </Button>
                <Button
                  size="sm"
                  onClick={() => navigate('/register')}
                  className="gradient-cyber hover:shadow-cyber text-white border-0"
                >
                  <Cpu className="w-4 h-4 mr-2" />
                  Neural Link
                </Button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <motion.button
              className="lg:hidden p-2 rounded-lg glassmorphism"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="lg:hidden mt-4 p-4 rounded-lg glassmorphism"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                          isActive
                            ? 'bg-primary/20 text-primary shadow-cyber'
                            : 'text-foreground/80 hover:text-primary hover:bg-primary/10'
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Scan Line Effect */}
      <div className="scan-line absolute inset-0 pointer-events-none"></div>
    </motion.header>
  );
};

export default FuturisticHeader;