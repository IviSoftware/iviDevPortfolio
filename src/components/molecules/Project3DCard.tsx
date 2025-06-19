import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import Typography from '../atoms/Typography';

interface Project3DCardProps {
  title: string;
  description: string;
  technologies: string[];
  mockupImage: string;
  liveUrl?: string;
  projectId: string;
  index: number;
  isActive?: boolean;
  primaryTech?: string;
}

// Technology icons mapping
const getTechIcon = (tech: string) => {
  const icons: { [key: string]: string } = {
    'React': '⚛️',
    'Next.js': '▲',
    'Node.js': '💚',
    'Astro': '🚀',
    'Vue': '💚',
    'Angular': '🅰️',
    'TypeScript': '🔷',
    'JavaScript': '💛',
    'Python': '🐍',
    'PHP': '🐘',
    'Laravel': '🔴',
    'Django': '🎯',
    'PostgreSQL': '🐘',
    'MongoDB': '🍃',
    'MySQL': '🐬',
    'Firebase': '🔥',
    'Supabase': '⚡',
    'AWS': '☁️',
    'Docker': '🐳',
    'Kubernetes': '⚙️',
  };
  
  return icons[tech] || '💻';
};

const Project3DCard: React.FC<Project3DCardProps> = ({
  title,
  description,
  technologies,
  mockupImage,
  liveUrl,
  projectId,
  index,
  isActive = false,
  primaryTech,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(x * 0.5);
    mouseY.set(y * 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent navigation if clicking on external link
    if ((e.target as HTMLElement).closest('a[target="_blank"]')) {
      return;
    }
    
    // Navigate to project detail page
    window.location.href = `/proyecto/${projectId}`;
  };

  // Get primary technology (first one or specified)
  const mainTech = primaryTech || technologies[0];
  const techIcon = getTechIcon(mainTech);

  return (
    <motion.div
      ref={cardRef}
      className="relative group perspective-1000 cursor-pointer"
      initial={{ opacity: 0, y: 100, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 1.2,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-white via-cream-50 to-sage-50 shadow-2xl"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: isActive ? 1.05 : isHovered ? 1.02 : 1,
          z: isHovered ? 20 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Technology Icon Badge */}
        <motion.div
          className="absolute top-6 right-6 z-10 w-16 h-16 bg-gradient-to-br from-peach-400 to-peach-600 rounded-2xl flex items-center justify-center shadow-lg"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? [0, 5, -5, 0] : 0,
          }}
          transition={{ 
            duration: isHovered ? 2 : 0.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          <span className="text-2xl filter drop-shadow-sm">
            {techIcon}
          </span>
        </motion.div>

        {/* Mockup Container with 3D effect */}
        <div className="relative h-72 overflow-hidden">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotateY: isHovered ? [0, 5, -5, 0] : 0,
              rotateX: isHovered ? [0, -2, 2, 0] : 0,
            }}
            transition={{ 
              duration: 6,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <img
              src={mockupImage}
              alt={`${title} mockup`}
              className="w-80 h-auto object-contain drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
              }}
            />
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full opacity-20"
            animate={{
              y: isHovered ? [5, -5, 5] : 0,
              x: isHovered ? [-2, 2, -2] : 0,
            }}
            transition={{ 
              duration: 4,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut",
              delay: 1
            }}
          />

          <motion.div
            className="absolute top-12 right-12 w-8 h-8 bg-gradient-to-br from-peach-400 to-peach-600 rounded-full opacity-15"
            animate={{
              y: isHovered ? [-3, 3, -3] : 0,
              x: isHovered ? [1, -1, 1] : 0,
            }}
            transition={{ 
              duration: 5,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <motion.div
            animate={{
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Project number */}
            <motion.div
              className="inline-flex items-center justify-center w-10 h-10 bg-peach-500 text-white rounded-full text-sm font-bold mb-4"
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 180 : 0,
              }}
              transition={{ duration: 0.8 }}
            >
              {String(index + 1).padStart(2, '0')}
            </motion.div>

            <Typography variant="h4" className="mb-3 line-clamp-2">
              {title}
            </Typography>

            <Typography variant="body" className="text-warm-600 mb-4 line-clamp-2 text-sm leading-relaxed">
              {description}
            </Typography>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.slice(0, 3).map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-white/80 backdrop-blur-sm text-warm-700 text-xs rounded-full font-medium border border-cream-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * techIndex }}
                >
                  {tech}
                </motion.span>
              ))}
              {technologies.length > 3 && (
                <span className="px-3 py-1 bg-sage-100 text-sage-700 text-xs rounded-full font-medium">
                  +{technologies.length - 3}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Play size={16} className="text-peach-600" />
                <Typography variant="caption" className="text-peach-600 font-medium">
                  Ver Proceso Creativo
                </Typography>
              </div>

              {liveUrl && (
                <motion.a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-warm-600 hover:text-peach-600 transition-colors z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={18} />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          animate={{
            x: isHovered ? ['-100%', '100%'] : '-100%',
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />

        {/* Click indicator overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-peach-500/5 to-sage-500/5 rounded-3xl"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Project3DCard;