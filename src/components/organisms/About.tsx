import React from 'react';
import { motion } from 'framer-motion';
import { Scale3d, Code, Gamepad2, Globe, Smartphone } from 'lucide-react';
import Typography from '../atoms/Typography';
import Card from '../atoms/Card';
import SkillBadge from '../molecules/SkillBadge';


const About: React.FC = () => {
  const skills = {
    frontend: [
      { name: 'React', level: '3 años' as const, icon: '⚛️' },
      { name: 'TypeScript', level: '3 años' as const, icon: '🔷' },
      { name: 'Astro', level: '3 años' as const, icon: '🚀' },
      { name: 'Tailwind CSS', level: '3 años' as const, icon: '🎨' },
      { name: 'Wordpress', level: '3 años' as const, icon: '🅦' },
      { name: 'Framer Motion', level: '3 años' as const, icon: '✨' },
    ],
    appleDeveloper: [
      { name: 'Swift', level: '3 años' as const, icon: '🔶' },
      { name: 'SwiftUI', level: '3 años' as const, icon: '📱' },
      { name: 'Swift Data', level: '3 años' as const, icon: '💾' },
      { name: 'Xcode', level: '3 años' as const, icon: '🛠️' },
      { name: 'Core ML', level: '2 años' as const, icon: '🧠' },
      { name: 'App Store Connect', level: '3 años' as const, icon: '📦' },
      { name: 'TestFlight', level: '3 años' as const, icon: '✈️' },
    ],
    design: [
      { name: 'Figma', level: '3 años' as const, icon: '🎯' },
      { name: 'Procreate', level: '3 años' as const, icon: '✏️' },
      { name: 'Keynote', level: '3 años' as const, icon: '📊' },
      { name: 'Motion', level: '2 años' as const, icon: '🎬' },
      { name: 'Final Cut Pro', level: '2 años' as const, icon: '🎥' },
      { name: 'Prototipos', level: '3 años' as const, icon: '📱' },
    ],
    aiTools: [
      { name: 'Claude Code', level: '2 años' as const, icon: '🤖' },
      { name: 'ChatGPT', level: '2 años' as const, icon: '💬' },
      { name: 'Midjourney', level: '2 años' as const, icon: '🎨' },
      { name: 'Runway', level: '2 años' as const, icon: '🎬' },
      { name: 'Stable Diffusion', level: '2 años' as const, icon: '🖼️' },
    ],
  };

  const experience = [
    {
      role: "Software Developer & UI/UX Designer - Cautiva Producciones",
      company: "Cautiva Producciones Puebla",
      period: "2023 - 2026",
      description: [
        "Diseñé y desarrollé aplicaciones frontend en React, SwiftUI y TypeScript para plataformas de registro de exposiciones y keynotes, creando interfaces intuitivas en Figma y optimizándolas para alta concurrencia, escalabilidad y experiencia de usuario sin fricciones.",
        "Diseñé e implementé una herramienta de gestión de enlaces con API en Node.js y generación automática de códigos QR, desde los mockups iniciales hasta los sistemas de diseño reutilizables, integrando principios de UI/UX en cada etapa.",
        "Migré módulos críticos de Laravel a React, rediseñando completamente la interfaz de usuario y modernizando la arquitectura para mejorar tanto la experiencia visual como el rendimiento técnico.",
        "Diseñé y desarrollé apps nativas en SwiftUI desde cero, creando prototipos interactivos y sistemas de diseño que se integran perfectamente con Apple Watch y Apple TV.",
        "Lideré la migración de sitios WordPress a Astro con islas de React, rediseñando la experiencia visual y elevando métricas clave de rendimiento (Core Web Vitals) con un enfoque en diseño centrado en el usuario."
      ],
      icon: <Globe className="w-6 h-6" />
    },
    {
      role: "Becario - Consejo de ciencia y tecnologia de puebla",
      company: "CONCYTEP",
      period: "2021 - 2022",
      description: ["Desarrollé una aplicación web para la gestión de practicantes y becarios en la organización."],
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
                    <ul className="space-y-3 mt-3">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-peach-600 mr-2 mt-1">•</span>
                          <Typography variant="body" className="text-warm-600 flex-1">
                            {item}
                          </Typography>
                        </li>
                      ))}
                    </ul>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              Apple Developer
            </Typography>
            <div className="flex flex-wrap gap-3">
              {skills.appleDeveloper.map((skill, index) => (
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
              Diseño UX/UI
            </Typography>
            <div className="flex flex-wrap gap-3">
              {skills.design.map((skill, index) => (
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
              Asistentes IA
            </Typography>
            <div className="flex flex-wrap gap-3">
              {skills.aiTools.map((skill, index) => (
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
