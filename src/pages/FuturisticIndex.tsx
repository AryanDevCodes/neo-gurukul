import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Zap, 
  Network, 
  Sparkles, 
  ArrowRight, 
  Globe, 
  BookOpen,
  Users,
  TrendingUp,
  Shield,
  Cpu,
  Bot,
  Database,
  Layers
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FuturisticHomepage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: 'Neural Learning',
      description: 'AI-powered adaptive learning paths that evolve with your understanding',
      color: 'text-cyber-purple',
      gradient: 'gradient-cyber'
    },
    {
      icon: Network,
      title: 'Quantum Knowledge',
      description: 'Interconnected wisdom networks spanning ancient texts to modern insights',
      color: 'text-cyber-cyan',
      gradient: 'gradient-dharma'
    },
    {
      icon: Globe,
      title: 'Global Nexus',
      description: 'Connect with seekers worldwide in immersive virtual environments',
      color: 'text-cyber-green',
      gradient: 'gradient-matrix'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Neural Pathways', icon: Brain },
    { value: '500+', label: 'Wisdom Modules', icon: BookOpen },
    { value: '50K+', label: 'Active Minds', icon: Users },
    { value: '99.9%', label: 'Enlightenment Rate', icon: TrendingUp }
  ];

  const learningPaths = [
    {
      title: 'Sanskrit Neural Interface',
      level: 'Quantum',
      students: '2.1K',
      rating: 4.9,
      image: '/api/placeholder/300/200',
      technologies: ['AI', 'VR', 'Quantum'],
      description: 'Experience Sanskrit through advanced neural interfaces'
    },
    {
      title: 'Dharma Algorithm Design',
      level: 'Advanced',
      students: '1.8K',
      rating: 4.8,
      image: '/api/placeholder/300/200',
      technologies: ['Blockchain', 'AI', 'Ethics'],
      description: 'Build ethical AI systems based on dharmic principles'
    },
    {
      title: 'Consciousness Computing',
      level: 'Expert',
      students: '1.2K',
      rating: 5.0,
      image: '/api/placeholder/300/200',
      technologies: ['Quantum', 'Consciousness', 'Computing'],
      description: 'Explore the intersection of consciousness and computation'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-matrix opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-neural opacity-20"></div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-8"
          >
            <Badge className="mb-6 glassmorphism border-primary/30 text-primary" variant="outline">
              <Sparkles className="w-3 h-3 mr-2" />
              Neural Academy v2.0 - Now Live
            </Badge>
            
            <h1 className="text-4xl md:text-7xl font-orbitron font-bold mb-6 leading-tight">
              <span className="text-cyber bg-gradient-cyber bg-clip-text text-transparent">
                Dharma Neural
              </span>
              <br />
              <span className="text-dharma bg-gradient-dharma bg-clip-text text-transparent">
                Academy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Where <span className="text-primary font-semibold">Ancient Wisdom</span> meets{' '}
              <span className="text-secondary font-semibold">Quantum Intelligence</span>. 
              Experience the future of learning through neural interfaces, AI companions, and immersive digital realms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              size="lg" 
              className="gradient-cyber hover:shadow-cyber text-white border-0 px-8 py-4 text-lg font-semibold"
              onClick={() => navigate('/courses')}
            >
              <Brain className="w-5 h-5 mr-2" />
              Enter Neural Network
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="neon-border hover:shadow-neon px-8 py-4 text-lg"
              onClick={() => navigate('/knowledge-base')}
            >
              <Database className="w-5 h-5 mr-2" />
              Explore Knowledge Base
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glassmorphism p-6 rounded-lg text-center"
                whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-cyber)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary animate-neural-pulse" />
                <div className="text-2xl md:text-3xl font-orbitron font-bold text-cyber">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-cyber bg-gradient-cyber bg-clip-text text-transparent">
                Neural Features
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience learning like never before with our cutting-edge neural interfaces
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10 }}
              >
                <Card className="glassmorphism border-primary/20 h-full hover:shadow-hologram transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${feature.gradient} flex items-center justify-center shadow-cyber`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold mb-4 text-cyber">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-dharma bg-gradient-dharma bg-clip-text text-transparent">
                Neural Pathways
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your learning adventure in our quantum-enhanced curriculum
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="glassmorphism border-secondary/20 overflow-hidden hover:shadow-neon transition-all duration-500">
                  <div className="h-48 gradient-hologram flex items-center justify-center">
                    <Layers className="w-16 h-16 text-white/80" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-primary border-primary/30">
                        {path.level}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {path.students}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-orbitron font-bold mb-3 text-cyber">
                      {path.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {path.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {path.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full gradient-cyber hover:shadow-cyber text-white border-0"
                      onClick={() => navigate('/courses')}
                    >
                      <Bot className="w-4 h-4 mr-2" />
                      Begin Neural Journey
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glassmorphism p-12 rounded-2xl max-w-4xl mx-auto"
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary animate-neural-pulse" />
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
              <span className="text-cyber bg-gradient-cyber bg-clip-text text-transparent">
                Ready to Transcend?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of digital seekers on the path to enlightenment through technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-dharma hover:shadow-dharma text-white border-0 px-8 py-4 text-lg"
                onClick={() => navigate('/register')}
              >
                <Cpu className="w-5 h-5 mr-2" />
                Initialize Neural Link
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="neon-border hover:shadow-neon px-8 py-4 text-lg"
                onClick={() => navigate('/community-hub')}
              >
                <Network className="w-5 h-5 mr-2" />
                Join the Collective
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FuturisticHomepage;