import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../atoms/Button';
import { menuItems, contactButton } from '../../tools/menu';


const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (href: string) => {
    console.log('Menu click:', href); // Debug log
    setIsMobileMenuOpen(false);
    
    // Handle smooth scrolling for anchor links
    if (href.startsWith('#')) {
      // Wait a bit for the menu to close, then scroll
      setTimeout(() => {
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        
        console.log('Looking for element:', targetId, element); // Debug log
        
        if (element) {
          // Calculate offset for fixed header
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          // Fallback: try with querySelector
          const fallbackElement = document.querySelector(href);
          if (fallbackElement) {
            const headerOffset = 80;
            const elementPosition = fallbackElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 300);
    } else {
      // For external links
      window.location.href = href;
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.button
            className="text-2xl font-handwriting text-peach-600 cursor-pointer bg-transparent border-none p-0"
            whileHover={{ scale: 1.05 }}
            onClick={handleLogoClick}
          >
            <img src='/logo.png' style={{width:'80px'}} />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleMenuClick(item.href)}
                className="text-warm-700 hover:text-peach-600 transition-colors duration-200 bg-transparent border-none cursor-pointer font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.button>
            ))}
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => handleMenuClick(contactButton.href)}
            >
              {contactButton.label}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-warm-700 hover:text-peach-600 p-2 bg-transparent border-none cursor-pointer"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-white rounded-xl shadow-lg mt-2 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-2 space-y-2">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleMenuClick(item.href)}
                    className="block w-full text-left py-3 text-warm-700 hover:text-peach-600 transition-colors duration-200 bg-transparent border-none cursor-pointer font-medium"
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="pt-2 pb-4">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="w-full"
                    onClick={() => handleMenuClick(contactButton.href)}
                  >
                    {contactButton.label}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;