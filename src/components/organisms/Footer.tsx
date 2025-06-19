import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Typography from '../atoms/Typography';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-50 border-t border-cream-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <Typography variant="handwriting" className="text-3xl">
            Portafolio
          </Typography>
          
          <Typography variant="body" className="max-w-2xl mx-auto">
            Developer apasionado por crear experiencias web 
            excepcionales que combinan funcionalidad y belleza.
          </Typography>
          
          <div className="flex items-center justify-center space-x-2 pt-4">
            <Typography variant="caption">
              Hecho con
            </Typography>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <Heart size={16} className="text-peach-500 fill-current" />
            </motion.div>
            <Typography variant="caption">
              y mucho ☕ • © {currentYear}
            </Typography>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;