import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle, Calendar } from 'lucide-react';
import Typography from '../atoms/Typography';
import Card from '../atoms/Card';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail size={32} />,
      href: 'mailto:ivimendietaacevedo@gmail.com',
      color: 'text-peach-600 hover:text-peach-700',
      bgColor: 'bg-peach-50 hover:bg-peach-100',
      description: 'Clic aquí',
      subtitle: 'Respondo en menos de 24 horas'
    },
    {
      name: 'GitHub',
      icon: <Github size={32} />,
      href: 'https://github.com/IviSoftware',
      color: 'text-warm-600 hover:text-warm-700',
      bgColor: 'bg-warm-50 hover:bg-warm-100',
      description: 'Clic aquí',
      subtitle: 'Explora mis proyectos y código'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={32} />,
      href: 'https://www.linkedin.com/in/ivimendieta/',
      color: 'text-sage-600 hover:text-sage-700',
      bgColor: 'bg-sage-50 hover:bg-sage-100',
      description: 'Clic aquí',
      subtitle: 'Conectemos profesionalmente'
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
        <Typography variant="handwriting" className="mb-4 text-3xl">
          ¡Conectemos!
        </Typography>
        <Typography variant="h2" className="mb-6">
          Hablemos de Tu{' '}
          <span className="bg-gradient-to-r from-peach-500 to-sage-500 bg-clip-text text-transparent">
            Próximo Proyecto
          </span>
        </Typography>
        <Typography variant="body" className="max-w-3xl mx-auto text-xl leading-relaxed">
          ¿Tienes una idea brillante? ¿Necesitas ayuda con un proyecto? 
          ¡Me encantaría escucharte y ver cómo podemos crear algo extraordinario juntos!
        </Typography>
      </motion.div>

      {/* Social Links Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <Card className={`p-8 text-center transition-all duration-300 ${link.bgColor} border-2 border-transparent group-hover:border-current group-hover:shadow-xl`}>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-300 ${link.bgColor} ${link.color}`}>
                {link.icon}
              </div>
              <Typography variant="h5" className={`mb-2 ${link.color}`}>
                {link.name}
              </Typography>
              <Typography variant="body" className="text-warm-700 font-medium mb-1">
                {link.description}
              </Typography>
              <Typography variant="caption" className="text-warm-500">
                {link.subtitle}
              </Typography>
            </Card>
          </motion.a>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="relative bg-gradient-to-br from-warm-50 via-cream-50 to-sage-50 rounded-3xl p-12 overflow-hidden border border-cream-200">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-peach-200/20 to-sage-200/20 rounded-full blur-3xl -translate-y-32 translate-x-32" />
          
          <div className="relative z-10">
            <Typography variant="h4" className="mb-4">
              ¿Listo para Empezar?
            </Typography>
            <Typography variant="body" className="mb-8 max-w-2xl mx-auto text-lg text-warm-600">
              Cada gran proyecto comienza con una simple conversación. 
              ¡Envíame un email y hablemos de tu visión!
            </Typography>
            
            <div className="flex justify-center">
              <motion.a
                href="mailto:contacto@ejemplo.com"
                className="inline-flex items-center px-8 py-4 bg-peach-500 text-white rounded-full font-medium shadow-lg hover:bg-peach-600 transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} className="mr-2" />
                Enviar Email
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;