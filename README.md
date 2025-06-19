# Portafolio Personal Lofi - Desarrollador Full Stack

Un portafolio personal moderno con estética lofi japonesa, construido con Astro, React y TypeScript. Combina arquitectura de islas, metodología Atomic Design y animaciones sofisticadas para crear una experiencia web excepcional.

## 🎯 Características Principales

### ✨ Diseño y Experiencia de Usuario
- **Estética Lofi Japonesa**: Colores cálidos, tipografía amigable y elementos visuales inspirados en el diseño japonés
- **Animaciones Sofisticadas**: Transiciones fluidas y micro-interacciones usando Framer Motion
- **Responsive Design**: Optimizado para móvil, tablet y desktop con breakpoints específicos
- **Experiencia Premium**: Inspirado en los estándares de diseño de Apple

### 🏗️ Arquitectura Técnica
- **Astro Framework**: Generación estática con hidratación selectiva
- **Arquitectura de Islas**: Componentes React interactivos solo donde se necesitan
- **Atomic Design**: Estructura modular y escalable (atoms, molecules, organisms)
- **TypeScript**: Tipado estático para mayor robustez y mantenibilidad

### 🎨 Sistema de Diseño
- **Paleta de Colores Lofi**: Tonos cream, peach, sage y warm
- **Tipografía Cuidadosa**: Inter para texto y Caveat para elementos handwriting
- **Componentes Reutilizables**: Sistema cohesivo de UI components
- **Animaciones Consistentes**: Estados hover, transiciones y efectos de carga

### 📱 Funcionalidades
- **Sección Hero**: Presentación impactante con animaciones escalonadas
- **Sobre Mí**: Enfoque técnico en habilidades, experiencia y aspiraciones
- **Proyectos Destacados**: Showcase elegante con navegación a páginas individuales
- **Páginas de Proyecto**: Narrativa completa del proceso creativo y técnico
- **Formulario de Contacto**: Interfaz intuitiva para comunicación directa
- **Navegación Fluida**: Menu responsive con estados visuales claros

## 🛠️ Stack Tecnológico

### Frontend
- **Astro 5.x**: Framework de generación estática
- **React 18**: Componentes interactivos
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Styling utility-first
- **Framer Motion**: Animaciones y transiciones

### Herramientas de Desarrollo
- **Vite**: Build tool y dev server
- **ESLint + Prettier**: Linting y formateo de código
- **Git**: Control de versiones

### Dependencias Clave
```json
{
  "@astrojs/react": "^4.0.0",
  "@astrojs/tailwind": "^5.1.2",
  "framer-motion": "^11.0.0",
  "lucide-react": "^0.379.0",
  "@fontsource/inter": "^5.0.0",
  "@fontsource/caveat": "^5.0.0"
}
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repositorio]
cd portafolio-lofi

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

### Scripts Disponibles
- `npm run dev`: Inicia el servidor de desarrollo en http://localhost:4321
- `npm run build`: Construye el sitio para producción
- `npm run preview`: Previsualiza el build de producción localmente

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── atoms/           # Componentes básicos reutilizables
│   │   ├── Button.tsx
│   │   ├── Typography.tsx
│   │   └── Card.tsx
│   ├── molecules/       # Combinaciones de atoms
│   │   ├── Navigation.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SkillBadge.tsx
│   └── organisms/       # Secciones completas de página
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── content/             # 📂 Sistema CMS con Markdown
│   ├── config.ts        # Configuración del schema
│   └── projects/        # 📝 Proyectos en Markdown
│       ├── ecommerce-platform.md
│       ├── task-manager.md
│       ├── weather-app.md
│       └── blog-platform.md
├── layouts/
│   └── Layout.astro     # Layout base con meta tags y estilos globales
├── pages/
│   ├── index.astro      # Página principal
│   └── proyecto/
│       └── [id].astro   # Páginas dinámicas de proyectos individuales
└── styles/
    └── global.css       # Estilos globales y variables CSS
```

## 📝 **Gestión de Proyectos con CMS Markdown**

### 🎯 **Cómo Crear un Nuevo Proyecto (5 minutos)**

#### **Paso 1: Crear el Archivo Markdown**
```bash
# Navega a la carpeta de proyectos
src/content/projects/

# Crea un nuevo archivo con nombre descriptivo
mi-nuevo-proyecto.md
```

#### **Paso 2: Usar la Plantilla Base**
Copia y pega esta estructura en tu nuevo archivo:

```markdown
---
title: "Nombre de Tu Proyecto"
shortDescription: "Descripción breve para SEO (máximo 160 caracteres)"
description: "Descripción completa que aparece en la tarjeta del proyecto"
technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"]
primaryTech: "React"  # Tecnología principal (opcional)
videoUrl: "/src/assets/projectsIntroduction/tu-video.mp4"
mockupImage: "/src/assets/projectsIntroduction/tu-mockup.png"  # Opcional
liveUrl: "https://tu-proyecto.com"  # Opcional
githubUrl: "https://github.com/tu-usuario/tu-repo"  # Opcional
featured: true  # Si quieres que aparezca destacado
order: 5  # Número de orden (1, 2, 3, 4...)
status: "published"  # "published" o "draft"
publishDate: 2024-12-20  # Fecha de hoy
challenges:
  - "Primer desafío técnico que enfrentaste"
  - "Segundo desafío técnico"
  - "Tercer desafío técnico"
results:
  - "Primer resultado clave obtenido"
  - "Segundo resultado importante"
  - "Tercer logro destacado"
process:
  research: "Describe el proceso de investigación"
  design: "Explica el proceso de diseño y decisiones visuales"
  development: "Detalla el desarrollo y arquitectura"
  testing: "Describe las pruebas y optimizaciones"
gallery:  # Opcional - Solo si tienes imágenes adicionales
  - image: "https://ejemplo.com/imagen1.jpg"
    alt: "Descripción de la imagen"
    caption: "Pie de foto opcional"
metrics:  # Opcional - Solo si tienes métricas específicas
  performance: "98/100 en Lighthouse"
  users: "1000+ usuarios activos"
  conversion: "15% tasa de conversión"
  other: "Otra métrica importante"
---

## El Proyecto

Aquí escribes toda la descripción detallada usando **Markdown**.

### Características Principales

- ✅ Primera característica importante
- ✅ Segunda característica clave
- ✅ Tercera funcionalidad destacada

### El Proceso Creativo

Describe todo el proceso desde la idea inicial hasta el resultado final.

```javascript
// Puedes incluir código de ejemplo
const ejemplo = "Código relevante del proyecto";
```

### Resultados y Aprendizajes

Explica qué lograste y qué aprendiste en el proceso.
```

#### **Paso 3: Personalizar y Guardar**
1. **Edita** cada campo con la información de tu proyecto
2. **Sube** tu video a `src/assets/projectsIntroduction/`
3. **Configura** el orden y estado (`published` o `draft`)
4. **Guarda** el archivo

#### **Paso 4: ¡Listo!**
El proyecto aparecerá automáticamente en tu portafolio. 🎉

### 📋 **Campos Disponibles**

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `title` | string | ✅ | Nombre del proyecto |
| `shortDescription` | string | ✅ | Para SEO y previews |
| `description` | string | ✅ | Descripción completa |
| `technologies` | array | ✅ | Lista de tecnologías |
| `videoUrl` | string | ✅ | Video de introducción |
| `order` | number | ✅ | Orden de aparición |
| `publishDate` | date | ✅ | Fecha de publicación |
| `challenges` | array | ✅ | Desafíos técnicos |
| `results` | array | ✅ | Resultados clave |
| `process` | object | ✅ | Proceso de desarrollo |
| `primaryTech` | string | ❌ | Tecnología principal |
| `mockupImage` | string | ❌ | Imagen mockup |
| `liveUrl` | string | ❌ | URL del proyecto live |
| `githubUrl` | string | ❌ | URL del repositorio |
| `featured` | boolean | ❌ | Si es proyecto destacado |
| `status` | enum | ❌ | "published" o "draft" |
| `gallery` | array | ❌ | Galería de imágenes |
| `metrics` | object | ❌ | Métricas de éxito |

### 🎯 **Flujo de Trabajo Recomendado**

1. **Crear borrador**: `status: "draft"` para trabajar sin que sea visible
2. **Desarrollar contenido**: Escribir todo el contenido en Markdown
3. **Agregar assets**: Subir videos e imágenes necesarias
4. **Revisar**: Verificar que todo se vea bien en desarrollo
5. **Publicar**: Cambiar a `status: "published"`

### 🚨 **Troubleshooting**

- **Proyecto no aparece**: Verifica que tenga `status: "published"`
- **Error de validación**: Revisa que todos los campos requeridos estén presentes
- **Video no carga**: Verifica la ruta del archivo en `src/assets/projectsIntroduction/`

## 🎨 Guía de Diseño

### Paleta de Colores
```css
/* Colores principales */
cream: #fef7e7    /* Fondos suaves */
peach: #f16545    /* Acentos principales */
sage: #7a8768     /* Acentos secundarios */
warm: #554c44     /* Texto y elementos oscuros */
```

### Tipografía
- **Encabezados**: Inter (400, 500, 600)
- **Cuerpo**: Inter (400)
- **Decorativo**: Caveat (400, 600)

### Principios de Diseño
1. **Jerarquía Visual**: Uso consistente de tamaños y pesos tipográficos
2. **Espaciado**: Sistema basado en múltiplos de 8px
3. **Contraste**: Ratios de contraste WCAG AA compliant
4. **Consistencia**: Componentes reutilizables con props tipadas

## 📄 Contenido

### Secciones Principales
1. **Hero**: Presentación personal con call-to-actions claros
2. **Sobre Mí**: Trasfondo técnico, experiencia y aspiraciones profesionales
3. **Proyectos**: Showcase de trabajos destacados con enlaces a páginas detalladas
4. **Contacto**: Formulario funcional y enlaces a redes sociales

### Páginas de Proyecto
Cada proyecto incluye:
- **Descripción Completa**: Contexto y objetivos del proyecto
- **Proceso de Desarrollo**: Desde investigación hasta deployment
- **Desafíos Técnicos**: Problemas específicos y soluciones implementadas
- **Resultados**: Métricas de éxito y impacto
- **Tecnologías**: Stack completo utilizado
- **Enlaces**: Live demo y código fuente

## 🔧 Personalización

### Modificar Contenido
1. **Información Personal**: Editar `src/components/organisms/Hero.tsx` y `About.tsx`
2. **Proyectos**: Crear nuevos archivos Markdown en `src/content/projects/`
3. **Contacto**: Modificar enlaces y información en `Contact.tsx`

### Ajustar Diseño
1. **Colores**: Modificar `tailwind.config.mjs` con tu paleta personalizada
2. **Tipografía**: Cambiar fuentes en el config de Tailwind y Layout.astro
3. **Animaciones**: Personalizar duraciones y efectos en los componentes

### Agregar Nuevas Secciones
1. Crear componente en `organisms/`
2. Importar en `pages/index.astro`
3. Añadir enlace de navegación en `Navigation.tsx`

## 🚀 Despliegue

### Opciones Recomendadas
- **Vercel**: Deploy automático con git integration
- **Netlify**: Build y deploy continuous desde repository
- **GitHub Pages**: Hosting gratuito para proyectos open source

### Configuración para Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Variables de Entorno
Si utilizas APIs externas, configura las variables necesarias en tu plataforma de deployment.

## 🧪 Testing y Calidad

### Consideraciones de Performance
- **Lazy Loading**: Imágenes y componentes cargados bajo demanda
- **Code Splitting**: JavaScript dividido por rutas
- **Optimización de Imágenes**: Formatos WebP y dimensiones responsive
- **Prefetch**: Recursos críticos precargados

### Auditorías Recomendadas
- **Lighthouse**: Performance, SEO, Accessibility, Best Practices
- **Web Vitals**: Core Web Vitals para UX
- **WAVE**: Herramienta de accesibilidad web

## 🤝 Contribución

Este es un proyecto personal, pero si encuentras bugs o tienes sugerencias:

1. Abre un issue describiendo el problema o mejora
2. Fork el proyecto
3. Crea una branch para tu feature (`git checkout -b feature/nueva-funcionalidad`)
4. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
5. Push a la branch (`git push origin feature/nueva-funcionalidad`)
6. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **Astro Team**: Por crear un framework excepcional
- **Framer Motion**: Por las animaciones fluidas
- **Tailwind CSS**: Por el sistema de diseño utility-first
- **Pexels**: Por las imágenes de stock utilizadas
- **Lucide**: Por los iconos minimalistas y consistentes

---

**Nota**: Este portafolio está diseñado como template base. Personaliza el contenido, colores y estructura según tus necesidades específicas. El código está documentado y estructurado para facilitar modificaciones y extensiones futuras.

Para preguntas específicas sobre implementación o personalización, no dudes en abrir un issue en el repositorio.