import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Card from '../atoms/Card';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  projectId: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  liveUrl,
  projectId,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-cream-50 shadow-lg hover:shadow-2xl transition-all duration-700">
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          
          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            animate={{
              opacity: isHovered ? 0.8 : 0.4,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Floating Action Button */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute top-6 right-6"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {liveUrl && (
                  <motion.a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} className="text-warm-700" />
                  </motion.a>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Project Number */}
          <div className="absolute top-6 left-6">
            <motion.div
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
              animate={{
                backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              }}
              transition={{ duration: 0.3 }}
            >
              <Typography variant="h6" className="text-white font-semibold">
                {String(index + 1).padStart(2, '0')}
              </Typography>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <motion.div
            animate={{
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Typography variant="h4" className="mb-4 line-clamp-2">
              {title}
            </Typography>

            <Typography variant="body" className="text-warm-600 mb-6 line-clamp-3 leading-relaxed">
              {description}
            </Typography>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-8">
              {technologies.slice(0, 4).map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 bg-sage-100 text-sage-700 text-sm rounded-full font-medium"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * techIndex }}
                >
                  {tech}
                </motion.span>
              ))}
              {technologies.length > 4 && (
                <span className="px-3 py-1.5 bg-cream-200 text-warm-600 text-sm rounded-full font-medium">
                  +{technologies.length - 4}
                </span>
              )}
            </div>

            {/* Action Button */}
            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0.7,
              }}
              transition={{ duration: 0.3 }}
            >
              <Button
                href={`/proyecto/${projectId}`}
                variant="ghost"
                size="md"
                className="group/btn w-full justify-between"
              >
                <span>Explorar Proyecto</span>
                <motion.div
                  animate={{
                    x: isHovered ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;