# 📝 Sistema de Gestión de Contenido con Markdown

## 🎯 Cómo Funciona

Tu portafolio ahora utiliza **Astro Content Collections** para gestionar todos los proyectos mediante archivos Markdown. Esto significa que:

- ✅ **Cada proyecto = 1 archivo `.md`**
- ✅ **Fácil de editar y mantener**
- ✅ **Tipado automático con TypeScript**
- ✅ **Validación de datos integrada**
- ✅ **SEO optimizado automáticamente**

## 📁 Estructura de Archivos

```
src/
├── content/
│   ├── config.ts          # Configuración del CMS
│   └── projects/          # 📂 Carpeta de proyectos
│       ├── ecommerce-platform.md
│       ├── task-manager.md
│       ├── weather-app.md
│       └── blog-platform.md
```

## 🚀 Crear un Nuevo Proyecto

### 1. Crear el archivo Markdown

Crea un nuevo archivo en `src/content/projects/` con el nombre del proyecto:

```bash
src/content/projects/mi-nuevo-proyecto.md
```

### 2. Estructura del archivo

```markdown
---
title: "Nombre del Proyecto"
shortDescription: "Descripción breve para SEO"
description: "Descripción completa que aparece en la página principal"
technologies: ["React", "Node.js", "PostgreSQL"]
primaryTech: "React"  # Tecnología principal (opcional)
videoUrl: "/src/assets/projectsIntroduction/videoSample.mp4"
mockupImage: "/src/assets/projectsIntroduction/ProjectSample.png"
liveUrl: "https://mi-proyecto.com"  # Opcional
githubUrl: "https://github.com/usuario/proyecto"  # Opcional
featured: true  # Si aparece destacado
order: 1  # Orden de aparición (1, 2, 3...)
status: "published"  # "published" o "draft"
publishDate: 2024-01-15
challenges:
  - "Primer desafío técnico"
  - "Segundo desafío técnico"
results:
  - "Primer resultado clave"
  - "Segundo resultado clave"
process:
  research: "Descripción del proceso de investigación"
  design: "Descripción del proceso de diseño"
  development: "Descripción del proceso de desarrollo"
  testing: "Descripción del proceso de testing"
gallery:  # Opcional
  - image: "https://ejemplo.com/imagen1.jpg"
    alt: "Descripción de la imagen"
    caption: "Pie de foto opcional"
metrics:  # Opcional
  performance: "98/100 en Lighthouse"
  users: "1000+ usuarios"
  conversion: "12% tasa de conversión"
  other: "Otra métrica importante"
---

## El Proyecto

Aquí puedes escribir todo el contenido detallado del proyecto usando **Markdown**.

### Características Principales

- ✅ Característica 1
- ✅ Característica 2
- ✅ Característica 3

### Proceso de Desarrollo

Describe aquí todo el proceso creativo, decisiones técnicas, etc.

```javascript
// Puedes incluir código
const ejemplo = "Código de ejemplo";
```

### Resultados

Explica los resultados obtenidos, métricas, impacto, etc.
```

## 🎨 Personalización

### Campos Disponibles

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `title` | string | ✅ | Nombre del proyecto |
| `shortDescription` | string | ✅ | Para SEO y previews |
| `description` | string | ✅ | Descripción completa |
| `technologies` | array | ✅ | Lista de tecnologías |
| `primaryTech` | string | ❌ | Tecnología principal |
| `videoUrl` | string | ✅ | Video de introducción |
| `mockupImage` | string | ❌ | Imagen mockup |
| `liveUrl` | string | ❌ | URL del proyecto live |
| `githubUrl` | string | ❌ | URL del repositorio |
| `featured` | boolean | ❌ | Si es proyecto destacado |
| `order` | number | ❌ | Orden de aparición |
| `status` | enum | ❌ | "published" o "draft" |
| `publishDate` | date | ✅ | Fecha de publicación |
| `challenges` | array | ✅ | Desafíos técnicos |
| `results` | array | ✅ | Resultados clave |
| `process` | object | ✅ | Proceso de desarrollo |
| `gallery` | array | ❌ | Galería de imágenes |
| `metrics` | object | ❌ | Métricas de éxito |

### Estados de Proyecto

- **`published`**: Visible en el sitio web
- **`draft`**: Oculto, solo para desarrollo

### Orden de Proyectos

Los proyectos se ordenan por el campo `order` (1, 2, 3...). Si no especificas orden, aparecerán al final.

## 🖼️ Gestión de Assets

### Videos
Coloca tus videos en: `src/assets/projectsIntroduction/`

### Imágenes
- **Mockups**: `src/assets/projectsIntroduction/`
- **Galería**: Puedes usar URLs externas o assets locales

### Iconos de Tecnologías
Los iconos se asignan automáticamente según el nombre de la tecnología en `Project3DCard.tsx`.

## 🔧 Comandos Útiles

### Desarrollo
```bash
npm run dev  # Inicia el servidor de desarrollo
```

### Build
```bash
npm run build  # Construye el sitio para producción
```

### Validación
Astro validará automáticamente todos los campos según el schema definido en `src/content/config.ts`.

## 📈 SEO Automático

Cada proyecto genera automáticamente:
- ✅ Meta tags optimizados
- ✅ Open Graph tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap entries
- ✅ URLs amigables

## 🎯 Flujo de Trabajo Recomendado

1. **Crear borrador**: Crea el archivo con `status: "draft"`
2. **Desarrollar contenido**: Escribe todo el contenido en Markdown
3. **Agregar assets**: Sube videos e imágenes necesarias
4. **Revisar**: Verifica que todo se vea bien en desarrollo
5. **Publicar**: Cambia `status: "published"`

## 🚨 Troubleshooting

### Error de validación
Si ves errores de TypeScript, verifica que todos los campos requeridos estén presentes y tengan el tipo correcto.

### Proyecto no aparece
Verifica que:
- El archivo esté en `src/content/projects/`
- Tenga `status: "published"`
- El frontmatter esté bien formateado

### Video no carga
Verifica que:
- El archivo de video exista en la ruta especificada
- El formato sea compatible (MP4 recomendado)
- La ruta sea correcta desde la raíz del proyecto

---

## 🎉 ¡Listo!

Ahora puedes gestionar todos tus proyectos fácilmente:

1. **Crear**: Nuevo archivo `.md` = Nuevo proyecto
2. **Editar**: Modificar el Markdown = Actualizar proyecto  
3. **Organizar**: Cambiar `order` = Reordenar proyectos
4. **Ocultar**: `status: "draft"` = Proyecto oculto

¡Es así de simple! 🚀