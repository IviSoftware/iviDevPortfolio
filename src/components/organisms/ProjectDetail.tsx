import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Card from '../atoms/Card';

interface ProjectDetailProps {
  title: string;
  description: string;
  videoUrl: string;
  technologies: string[];
  liveUrl?: string;
  challenges: string[];
  results: string[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  title,
  description,
  videoUrl,
  technologies,
  liveUrl,
  challenges,
  results,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoReady(true);
      // Auto-play immediately when video is ready
      video.play().catch((error) => {
        console.error('Error playing video:', error);
      });
    };

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;
      
      // Pause just before the end (0.3 seconds before) to leave a static frame
      if (duration - currentTime <= 0.3 && !video.paused) {
        video.pause();
      }
    };

    const handleLoadedData = () => {
      setIsVideoReady(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  const handleContactClick = () => {
    window.location.href = '/#contacto';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-sage-50">
      {/* Hero Video Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video Container */}
        <motion.div
          className="relative w-full max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black mb-12">
            <video
              ref={videoRef}
              className="w-full h-auto max-h-[70vh] object-cover"
              muted
              playsInline
              preload="auto"
              autoPlay
            >
              <source src={videoUrl} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          {/* Project Info */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Typography variant="h2" className="mb-4">
              {title}
            </Typography>
            <Typography variant="body" className="text-warm-600 mb-6 mt-12 max-w-3xl mx-auto text-lg">
              {description}
            </Typography>
            
            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm text-warm-700 rounded-full font-medium border border-cream-200 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {liveUrl && (
                <Button href={liveUrl} variant="primary" size="lg">
                  Ver Proyecto Live
                </Button>
              )}
              <Button onClick={handleContactClick} variant="ghost" size="lg">
                Discutir Proyecto
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-warm-400" />
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-peach-200/30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage-200/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* Sidebar with Challenges and Results */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <Typography variant="h5" className="mb-6 text-peach-600">
                  Desafíos Técnicos
                </Typography>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-peach-100 text-peach-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <Typography variant="body" className="text-warm-600 text-sm">
                        {challenge}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-gradient-to-br from-sage-50 to-peach-50">
                <Typography variant="h5" className="mb-6 text-sage-600">
                  Resultados Clave
                </Typography>
                <ul className="space-y-4">
                  {results.map((result, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 text-sage-600">✨</span>
                      <Typography variant="body" className="text-warm-700 text-sm">
                        {result}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {liveUrl && (
                <Button href={liveUrl} variant="primary" size="md" className="w-full">
                  🚀 Ver Live
                </Button>
              )}
              <Button onClick={handleContactClick} variant="ghost" size="md" className="w-full">
                💬 Discutir Proyecto
              </Button>
            </motion.div>
          </div>

          {/* Main Content Area - This will be filled by Markdown */}
          <div className="lg:col-span-3">
            {/* This space is intentionally left for Markdown content */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;