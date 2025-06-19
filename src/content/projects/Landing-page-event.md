---
title: "Tech Dev Summit 2025 - Landing Page"
shortDescription: "Landing page para el evento tecnológico más grande de México"
description: "Una experiencia web inmersiva que captura la esencia del Tech Dev Summit 2025, combinando diseño moderno, animaciones fluidas y una navegación intuitiva para conectar a desarrolladores, ingenieros y entusiastas tech con el evento más importante de tecnología en México."
technologies: ["Astro", "React", "TypeScript", "Tailwind CSS", "Swiper", "Framer Motion", "Animate.css"]
primaryTech: "Astro"
videoUrl: "/assets/landingProject.mp4"
mockupImage: "/assets/projectLanding.png"
liveUrl: "https://lading-event.vercel.app/"
githubUrl: "https://github.com/IviSoftware/ladingEvent"
featured: true
order: 1
status: "published"
publishDate: 2025-06-02
challenges:
  - "Crear una experiencia visual impactante que transmita la energía del evento"
  - "Diseñar una navegación fluida entre múltiples secciones del evento"
  - "Optimizar el rendimiento con animaciones complejas y contenido multimedia"
  - "Desarrollar componentes reutilizables para diferentes tipos de contenido"
results:
  - "Tiempo de carga optimizado con Astro y lazy loading"
  - "Experiencia de usuario fluida con animaciones performantes"
  - "Diseño responsive que funciona perfectamente en todos los dispositivos"
  - "Arquitectura de componentes escalable y mantenible"
process:
  research: "Análisis de eventos tecnológicos similares y estudio de tendencias en diseño web para eventos. Investigación de la audiencia objetivo: desarrolladores, ingenieros y estudiantes tech."
  design: "Creación de wireframes enfocados en la experiencia del usuario, priorizando la información del evento y las llamadas a la acción. Diseño visual que refleja innovación y tecnología."
  development: "Desarrollo con Astro para optimización SSG, implementación de componentes React para interactividad, y integración de librerías de animación para una experiencia premium."
  testing: "Testing exhaustivo en múltiples dispositivos y navegadores, optimización de performance y pruebas de usabilidad con usuarios reales."
gallery:
  - image: "https://raw.githubusercontent.com/Integra-Meetings/integraMeetingsImagenes/main/ourCompress.png"
    alt: "Hero section con carousel"
    caption: "Sección principal con carousel interactivo y call-to-action"
  - image: "https://raw.githubusercontent.com/Integra-Meetings/integraMeetingsImagenes/main/b2b.png"
    alt: "Sección sobre el evento"
    caption: "Información detallada del evento con diseño visual atractivo"
metrics:
  performance: "95/100 en Lighthouse"
  devices: "100% responsive design"
  animations: "60fps en todas las animaciones"
  accessibility: "AA WCAG compliance"
---

## El Desafío

Crear una landing page que no solo informara sobre el Tech Dev Summit 2025, sino que capturara la emoción y energía de lo que sería el evento tecnológico más grande de México. El desafío era transmitir innovación, profesionalismo y accesibilidad en una sola experiencia web.

&nbsp;

&nbsp;

## Proceso Creativo

### Conceptualización e Investigación

El proyecto comenzó con una investigación profunda del ecosistema tech mexicano y eventos similares a nivel internacional. Analizamos las mejores prácticas en landing pages de eventos, identificando elementos clave:

- **Audiencia objetivo**: Desarrolladores, ingenieros, estudiantes y profesionales tech
- **Mensaje principal**: Posicionar el evento como el punto de encuentro más importante para la comunidad tech en México
- **Objetivos**: Generar registros, crear expectativa y establecer credibilidad

&nbsp;

### Arquitectura y Tecnologías

La selección tecnológica se basó en criterios de performance, SEO y experiencia de usuario:

#### **Astro como Framework Principal**
Elegimos Astro por sus capacidades de generación estática y su filosofía "islands architecture", perfecta para una landing page con contenido mayormente estático pero con elementos interactivos específicos.

#### **Stack Tecnológico Completo**
- **Frontend**: Astro + React para componentes interactivos
- **Styling**: Tailwind CSS para un desarrollo ágil y consistente
- **Animaciones**: Framer Motion + Animate.css para efectos visuales premium
- **Carousel**: Swiper.js para el hero section interactivo
- **Tipo**: TypeScript para mayor robustez del código

&nbsp;

### Diseño y Experiencia de Usuario

#### **Hero Section Interactivo**
Implementamos un carousel con Swiper que alterna entre dos mensajes clave:
1. **Presentación del evento**: Impacto visual inmediato con call-to-action
2. **Información contextual**: Detalles sobre la audiencia y contenido

#### **Navegación por Secciones**
Diseñamos cards interactivas que funcionan como portales a diferentes aspectos del evento:
- **Conferencias Magistrales**: Información sobre speakers y temas
- **Workshops y Talleres**: Contenido práctico y hands-on
- **Networking & Startups**: Oportunidades de conexión profesional
- **Agenda y Actividades**: Cronograma detallado del evento

&nbsp;

&nbsp;

## Características Técnicas Destacadas

### Sistema de Animaciones Inteligente

Implementamos un sistema de animaciones basado en Intersection Observer que:
- **Optimiza performance**: Solo anima elementos visibles
- **Mejora UX**: Crea una narrativa visual progresiva
- **Mantiene fluidez**: 60fps constantes en todas las animaciones

```typescript
const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.classList.remove("scroll-zoom");
      header.classList.add("zoom");
      textHeader.classList.add("leFadeInTop");
    }
  });
};
```

&nbsp;

### Componentes Reutilizables

Desarrollamos un sistema de componentes modular:

#### **ImageHeader Component**
- Soporte para imágenes de background dinámicas
- Animaciones de parallax y zoom
- Texto superpuesto con tipografía responsive

#### **CardLarge Component**
- Sistema de colores temáticos
- Hover effects y transiciones suaves
- Navegación interna consistente

&nbsp;

### Optimización de Performance

#### **Lazy Loading Inteligente**
- Imágenes optimizadas con loading diferido
- Componentes React hidratados solo cuando es necesario
- CSS crítico inline para faster first paint

#### **SEO y Accesibilidad**
- Meta tags optimizados para redes sociales
- Estructura semántica HTML5
- Contraste y accesibilidad WCAG AA

&nbsp;

&nbsp;

## Resultados e Impacto

### Métricas de Performance
- **Lighthouse Score**: 95/100 overall
- **First Contentful Paint**: < 1.2 segundos
- **Cumulative Layout Shift**: 0.05
- **Time to Interactive**: < 2.5 segundos

### Experiencia de Usuario
- **Responsive Design**: Funcionalidad perfecta en todos los dispositivos
- **Interactividad**: Animaciones fluidas que mejoran la experiencia
- **Navegación**: Flujo intuitivo entre secciones del evento
- **Conversión**: Call-to-actions estratégicamente posicionados

&nbsp;

&nbsp;

## Tecnologías y Herramientas

### Frontend Framework
```json
{
  "astro": "^4.15.6",
  "@astrojs/react": "^4.3.0",
  "@astrojs/tailwind": "^5.1.0",
  "typescript": "^5.6.2"
}
```

### Librerías de UI y Animaciones
```json
{
  "framer-motion": "^12.18.1",
  "animate.css": "^4.1.1",
  "swiper": "^11.1.14",
  "react-icons": "^5.5.0"
}
```

### Herramientas de Desarrollo
```json
{
  "tailwindcss": "^3.4.12",
  "@astrojs/check": "^0.9.3",
  "sweetalert2": "^11.14.0"
}
```

&nbsp;

&nbsp;

## Lecciones Aprendidas

Este proyecto me enseñó la importancia de:

### 1. **Arquitectura Híbrida**
Combinar la velocidad de Astro con la interactividad de React permite crear experiencias web excepcionales sin sacrificar performance.

### 2. **Animaciones con Propósito**
Las animaciones no son solo decorativas; cuando se implementan correctamente, guían al usuario y mejoran la comprensión del contenido.

### 3. **Performance First**
En una landing page, cada milisegundo cuenta. La optimización debe ser parte del proceso de desarrollo, no una mejora posterior.

### 4. **Componentes como Sistema**
Pensar en componentes reutilizables desde el inicio facilita el mantenimiento y permite iteraciones rápidas.

### 5. **Testing en Dispositivos Reales**
Las herramientas de desarrollo son útiles, pero nada reemplaza el testing en dispositivos reales con diferentes capacidades.

---

## Proceso de Desarrollo

### Sprint 1: Fundación (Semana 1)
- Setup del proyecto Astro
- Configuración de Tailwind CSS
- Estructura base de componentes
- Integración de TypeScript

### Sprint 2: Componentes Core (Semana 2)
- Desarrollo del ImageHeader component
- Implementación del sistema de carousel
- Creación de CardLarge components
- Sistema de navegación

### Sprint 3: Interactividad (Semana 3)
- Integración de animaciones
- Intersection Observer para lazy loading
- Sistema de formularios con SweetAlert2
- Optimización de performance

### Sprint 4: Polish y Deploy (Semana 4)
- Testing exhaustivo en múltiples dispositivos
- Optimización de imágenes y assets
- SEO y meta tags
- Deploy y configuración de dominio

---

*Este proyecto representa la evolución de mi enfoque hacia el desarrollo web moderno, donde la performance, la experiencia de usuario y la calidad del código convergen para crear soluciones digitales que realmente impactan.*

