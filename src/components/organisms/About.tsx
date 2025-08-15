import React from 'react';
import { motion } from 'framer-motion';
import { Scale3d, Code, Gamepad2, Globe, Smartphone } from 'lucide-react';
import Typography from '../atoms/Typography';
import Card from '../atoms/Card';
import SkillBadge from '../molecules/SkillBadge';


const About: React.FC = () => {
  const skills = {
    frontend: [
      { name: 'React', level: '2 años' as const, icon: '⚛️' },
      { name: 'TypeScript', level: '2 años' as const, icon: '🔷' },
      { name: 'Astro', level: '2 años' as const, icon: '🚀' },
      { name: 'Tailwind CSS', level: '2 años' as const, icon: '🎨' },
      { name: 'Wordpress', level: '2 años' as const, icon: '🅦' },
      { name: 'Framer Motion', level: '2 años' as const, icon: '✨' },
    ],
    backend: [
      { name: 'Node.js', level: '2 años' as const, icon: '🟩' },
      { name: 'Express', level: '2 años' as const, icon: '🚏' },
      { name: 'MySQL', level: '2 años' as const, icon: '🐬' },
    ],
    tools: [
      { name: 'Git', level: '2 años' as const, icon: '📋' },
      { name: 'Figma', level: '2 años' as const, icon: '🎯' },
      { name: 'VS Code', level: '2 años' as const, icon: '💻' },
    ],
  };

  const experience = [
    {
      role: "Software Developer - Cautiva Producciones",
      company: "Cautiva Producciones Puebla",
      period: "2023 - 2025",
      description: `Desarrollé aplicaciones frontend en React, React Native y TypeScript y backend en Node.js, para plataformas de registro de exposiciones y keynotes, optimizadas para alta concurrencia, escalabilidad y experiencia de usuario sin fricciones.
Diseñé e implementé una herramienta de gestión de enlaces con API en Node.js y generación automática de códigos QR, integrando principios de UI/UX y sistemas de diseño reutilizables.
Migré módulos críticos de Laravel a React, modernizando la arquitectura y refactorizando endpoints en Node.js para mejorar rendimiento y seguridad.
Automatizé despliegues con CI/CD en GitHub Actions, desde el build hasta el release en producción.
Lideré la migración de sitios WordPress a Astro con islas de React, elevando métricas clave de rendimiento (Core Web Vitals) y refinando la calidad visual.`,
      icon: <Globe className="w-6 h-6" />
    },
    {
      role: "Becario - Consejo de ciencia y tecnologia de puebla",
      company: "CONCYTEP",
      period: "2021 - 2022",
      description: "Desarrollé una aplicación web para la gestión de practicantes y becarios en la organización.",
      icon: <Code className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <Typography variant="handwriting" className="mb-4">
          Un poco sobre mí
        </Typography>
        <Typography variant="h2" className="mb-6">
          Mi Trasfondo Técnico
        </Typography>
        <Typography variant="body" className="max-w-3xl mx-auto text-lg">
          Soy un desarrollador apasionado por crear soluciones web innovadoras. 
          Mi enfoque se centra en combinar código limpio, arquitecturas escalables 
          y experiencias de usuario excepcionales.
        </Typography>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" className="mb-8">
            Experiencia Profesional
          </Typography>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-peach-100 rounded-lg text-peach-600">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <Typography variant="h5" className="mb-1">
                      {exp.role}
                    </Typography>
                    <Typography variant="caption" className="text-sage-600 mb-2">
                      {exp.company} • {exp.period}
                    </Typography>
                    <Typography variant="body" className="text-warm-600">
                      {exp.description}
                    </Typography>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Aspirations */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" className="mb-8">
            Aspiraciones Profesionales
          </Typography>
          <Card className="p-6 h-fit">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Smartphone className="w-6 h-6 text-peach-600" />
                <Typography variant="h6">
                  Desarrollo Mobile ios
                </Typography>
              </div>
              <Typography variant="body" className="text-warm-600">
              Estoy ampliando mis habilidades en Swift y SwiftUI para crear experiencias móviles nativas, optimizadas para el ecosistema Apple.
              </Typography>

              <div className="flex items-center space-x-3 pt-4">
                <Gamepad2 className="w-6 h-6 text-sage-600" />
                <Typography variant="h6">
                  Desarrollo de videojuegos
                </Typography>
              </div>
              <Typography variant="body" className="text-warm-600">
              Desde que participé en un hackatón de videojuegos, descubrí mi interés por esta área. Ahora, busco dar vida a una idea propia utilizando Unity.
              </Typography>

              <div className="flex items-center space-x-3 pt-4">
                <Scale3d className="w-6 h-6 text-warm-600" />
                <Typography variant="h6">
                  Modelado 3D en blender
                </Typography>
              </div>
              <Typography variant="body" className="text-warm-600">
              Me interesa crear personajes en 3D con Blender y utilizarlos en experiencias de realidad aumentada o videojuegos, integrándolos con ARKit en Swift.
              </Typography>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h3" className="text-center mb-12">
          Tecnologías y Herramientas
        </Typography>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <Typography variant="h5" className="mb-6 text-center">
              Frontend
            </Typography>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill, index) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <Typography variant="h5" className="mb-6 text-center">
              Backend
            </Typography>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill, index) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <Typography variant="h5" className="mb-6 text-center">
              Herramientas
            </Typography>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill, index) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default About;