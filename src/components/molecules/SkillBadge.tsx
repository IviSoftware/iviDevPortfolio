import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  level: string;
  icon?: string;
  delay?: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  level,
  icon,
  delay = 0,
}) => {


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 100 
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-200`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span className="font-medium text-sm">{name}</span>
      <span className="text-xs opacity-75">({level})</span>
    </motion.div>
  );
};

export default SkillBadge;