import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const handleScrollToProjects = () => {
    const element = document.getElementById('proyectos');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToAbout = () => {
    const element = document.getElementById('sobre-mi');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-peach-200/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage-200/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cream-300/20 rounded-full blur-3xl animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <Typography variant="handwriting" className="text-2xl mb-4">
              ¡Hola! Soy
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="h1" className="max-w-4xl mx-auto">
              Desarrollador{' '}
              <span className="bg-gradient-to-r from-peach-500 to-sage-500 bg-clip-text text-transparent">
                Web/ios
              </span>
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="body" className="max-w-2xl mx-auto text-lg">
              Creo experiencias digitales cautivadoras que combinan código elegante 
              con diseño intuitivo, transformando ideas en soluciones web/mobile excepcionales.
            </Typography>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" onClick={handleScrollToProjects}>
              Ver Mi Trabajo
            </Button>
            <Button variant="ghost" size="lg" onClick={handleScrollToAbout}>
              Conoce Más Sobre Mí
            </Button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center pt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <ChevronDown className="w-8 h-8 text-warm-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;