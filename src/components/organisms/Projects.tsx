import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Project3DCard from '../molecules/Project3DCard';

interface ProjectsProps {
  projects: Array<{
    id: string;
    data: {
      title: string;
      description: string;
      technologies: string[];
      primaryTech?: string;
      mockupImage?: string;
      liveUrl?: string;
      featured: boolean;
      order: number;
    };
    slug: string;
  }>;
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(0);

  // Sort projects by order and filter published ones
  const sortedProjects = projects
    .sort((a, b) => a.data.order - b.data.order);

  // Only show navigation dots if there are more than 4 projects
  const showNavigation = sortedProjects.length > 4;

  const handleContactClick = () => {
    const element = document.getElementById('contacto');
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
    <div className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <div className="flex items-center justify-center mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 text-peach-500 mr-4" />
          </motion.div>
          <Typography variant="handwriting" className="text-3xl">
            Proyectos que Inspiran
          </Typography>
        </div>
        
        <Typography variant="h2" className="mb-8 max-w-4xl mx-auto">
          Creando Experiencias{' '}
          <span className="bg-gradient-to-r from-peach-500 via-sage-500 to-warm-600 bg-clip-text text-transparent">
            Extraordinarias
          </span>
        </Typography>
        
        <Typography variant="body" className="max-w-3xl mx-auto text-xl leading-relaxed">
        “El diseño no es solo cómo se ve o cómo se siente. El diseño es cómo funciona.” <br />
        —Steve Jobs
        </Typography>
      </motion.div>

      {/* 3D Projects Showcase */}
      <div className="relative">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-peach-200/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              onHoverStart={() => setActiveProject(index)}
            >
              <Project3DCard
                title={project.data.title}
                description={project.data.description}
                technologies={project.data.technologies}
                primaryTech={project.data.primaryTech}
                mockupImage={project.data.mockupImage || '/assets/projectsIntroduction/ProjectSample.png'}
                liveUrl={project.data.liveUrl}
                projectId={project.slug}
                index={index}
                isActive={activeProject === index}
              />
            </motion.div>
          ))}
        </div>

        {/* Interactive Navigation - Only show if more than 4 projects */}
        {showNavigation && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16"
          >
            <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-lg rounded-full px-8 py-4 shadow-lg">
              {sortedProjects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeProject 
                      ? 'bg-peach-500 w-8' 
                      : 'bg-warm-300 hover:bg-warm-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: index === activeProject ? 1.2 : 1,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="relative bg-gradient-to-br from-peach-50 via-white to-sage-50 rounded-3xl p-12 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-peach-200/30 to-sage-200/30 rounded-full blur-3xl -translate-y-32 translate-x-32" />
          
          <div className="relative z-10">
            <Typography variant="h4" className="mb-6">
              ¿Listo para Crear Algo Extraordinario?
            </Typography>
            <Typography variant="body" className="mb-8 max-w-2xl mx-auto text-lg">
              Cada gran proyecto comienza con una conversación. Hablemos sobre 
              cómo podemos transformar tu visión en una realidad digital excepcional.
            </Typography>
            <Button size="lg" onClick={handleContactClick} className="shadow-xl group">
              <span>Iniciar Conversación</span>
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;