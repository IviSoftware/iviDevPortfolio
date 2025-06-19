---
title: "Sistema Yui - Plataforma de Gestión de Expedientes"
shortDescription: "Sistema frontend para la gestión de expedientes de personas desaparecidas"
description: "Una plataforma web moderna que permite la gestión completa de expedientes de personas desaparecidas. Desarrollada originalmente para una Comisión Estatal de Búsqueda de Personas, ahora funciona como una demostración completa con datos simulados y todas las funcionalidades operativas."
technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "React Hook Form", "Node.js", "Express", "React Hot Toast", "Framer Motion"]
primaryTech: "React"
videoUrl: "/assets/sistema-yui.mp4"
mockupImage: "/assets/sistema-yui-preview.png"
liveUrl: "https://yui-platform-ejc1.vercel.app/"
githubUrl: "https://github.com/IviSoftware/yuiPlatform"
featured: true
order: 2
status: "published"
publishDate: 2025-01-02
challenges:
  - "Convertir un sistema que depende de excel en una aplicación frontend-backend completamente funcional"
  - "Crear un sistema de autenticación mock realista con diferentes roles y permisos"
  - "Implementar formularios complejos multi-paso con validación y autoguardado"
  - "Desarrollar un sistema de gestión de archivos con categorización y previsualización"
  - "Optimizar el rendimiento con lazy loading y virtualización para grandes volúmenes de datos"
results:
  - "Sistema completamente funcional sin dependencias de excel"
  - "Sistema de registro y autenticación mock realista"
  - "Sistema de roles con 4 tipos de usuario diferentes"
  - "Formularios dinámicos con 9 secciones especializadas"
  - "Interfaz enfocada a desktop"
process:
  research: "Análisis profundo del dominio de gestión de personas desaparecidas, estudio de workflows gubernamentales y requisitos de documentación legal. Investigación de mejores prácticas en sistemas de gestión documental."
  design: "Diseño de arquitectura modular basada en Atomic Design, creación de sistema de componentes reutilizables y definición de flujos de usuario intuitivos para personal gubernamental."
  development: "Desarrollo con React 18 y TypeScript para mayor robustez, implementación de Context API para gestión de estado, y creación de servicios mock para simular todas las operaciones del sistema original."
  testing: "Testing exhaustivo de todos los flujos de usuario, validación de formularios complejos, y optimización de performance con herramientas como React Window para virtualización."
---

## El Desafío

Transformar un sistema web completo conectado a backend en una aplicación frontend-only completamente funcional, manteniendo toda la complejidad y características del sistema original. El desafío principal era crear una demostración realista que permitiera experimentar con todas las funcionalidades sin necesidad de infraestructura de backend.

&nbsp;

&nbsp;

## Proceso Creativo

### Análisis del Dominio y Requisitos

El proyecto comenzó con un análisis profundo del dominio de gestión de personas desaparecidas:

- **Usuarios objetivo**: Personal gubernamental, analistas, capturistas y administradores
- **Funcionalidades críticas**: Gestión de expedientes, formularios especializados, sistema de archivos
- **Requisitos de seguridad**: Control de acceso, roles diferenciados, trazabilidad de acciones

&nbsp;

### Arquitectura y Tecnologías

La selección tecnológica se basó en criterios de mantenibilidad, escalabilidad y experiencia de usuario:

#### **React 18 como Framework Principal**
Elegimos React por su ecosistema maduro y capacidades avanzadas como Concurrent Features, perfectas para manejar formularios complejos y grandes volúmenes de datos.

#### **Stack Tecnológico Completo**
- **Build Tool**: Vite 6.0.5 para desarrollo rápido y optimizaciones avanzadas
- **Routing**: React Router DOM 6.28.1 para navegación SPA completa
- **Estilos**: Tailwind CSS 3.4.17 para diseño consistente y responsive
- **Formularios**: React Hook Form 7.54.2 para manejo avanzado de formularios
- **Estado**: Context API + Custom Hooks para gestión de estado predictible
- **UI**: Headless UI 2.2.0 para componentes accesibles

&nbsp;

### Diseño y Experiencia de Usuario

#### **Arquitectura Atómica**
Implementamos un sistema de diseño basado en Atomic Design:
- **Atoms**: Inputs, botones, iconos básicos
- **Molecules**: Campos de formulario, modales, tarjetas
- **Organisms**: Formularios completos, menús de navegación
- **Layouts**: Estructuras de página principales

#### **Sistema de Autenticación Mock**
Desarrollamos un sistema de autenticación realista con:
- **4 roles diferentes**: Super Admin, Administrador, Capturista, Analista
- **Permisos granulares**: Control detallado de acceso a funcionalidades
- **JWT simulado**: Manejo de tokens para simular autenticación real

&nbsp;

## Wireframes y Proceso de Diseño

### Planificación Visual de la Interfaz

Antes del desarrollo, se creó un conjunto completo de wireframes para planificar la experiencia de usuario y la arquitectura visual de la plataforma. Este proceso de diseño fue fundamental para establecer los flujos de navegación y la estructura de información.

&nbsp;

#### **Proceso Creativo de los Wireframes**

&nbsp;

El diseño de los wireframes siguió una metodología estructurada:

1. **Análisis de Usuarios**: Identificación de los diferentes tipos de usuarios (administradores, capturistas, analistas) y sus necesidades específicas
2. **Mapeo de Flujos**: Definición de los flujos críticos de trabajo, especialmente el proceso de login y recuperación de contraseñas
3. **Prototipado Rápido**: Creación de bocetos iniciales enfocados en la funcionalidad antes que en la estética
4. **Iteración Basada en Feedback**: Refinamiento de las propuestas según las necesidades del dominio gubernamental

#### **Sistema de Autenticación - Wireframes**

&nbsp;

El proceso de login y recuperación de contraseñas fue diseñado pensando en la seguridad y usabilidad para personal gubernamental:

&nbsp;

##### **Pantalla Principal de Login**

&nbsp;

![Login Principal](/assets/wireframes/Login%20and%20recovery%20password%20-%201.png)
&nbsp;

*Wireframe inicial mostrando la estructura básica del formulario de login con campos para email y contraseña*

&nbsp;

##### **Validación y Estados de Error**

&nbsp;

![Validación de Login](/assets/wireframes/Login%20and%20recovery%20password%20-%202.png)

&nbsp;

*Diseño de los estados de validación y mensajes de error para mejorar la experiencia del usuario*

##### **Proceso de Recuperación de Contraseña**

&nbsp;

![Recuperación Paso 1](/assets/wireframes/Login%20and%20recovery%20password%20-%203.png)
&nbsp;

*Primera etapa del proceso de recuperación, solicitando el email del usuario*

&nbsp;


![Recuperación Paso 2](/assets/wireframes/Login%20and%20recovery%20password%20-%204.png)
&nbsp;

*Confirmación del envío de instrucciones y orientación al usuario sobre los siguientes pasos*

&nbsp;

##### **Estados de Carga y Feedback**
![Estado de Carga](/assets/wireframes/Login%20and%20recovery%20password%20-%207.png)
&nbsp;

*Diseño de los estados de carga para proporcionar feedback visual durante las operaciones*

&nbsp;

![Confirmación Final](/assets/wireframes/Login%20and%20recovery%20password%20-%208.png)
&nbsp;
*Pantalla de confirmación exitosa con opciones para continuar al sistema*

&nbsp;


#### **Decisiones de Diseño Clave**

&nbsp;


**1. Enfoque en la Simplicidad**
- Interfaz limpia y minimalista apropiada para usuarios gubernamentales
- Elementos grandes y fáciles de identificar
- Flujo lineal sin distracciones

&nbsp;


**2. Seguridad Visual**
- Indicadores claros de seguridad en el proceso de login
- Mensajes de error específicos pero seguros
- Proceso de recuperación transparente y confiable

&nbsp;


**3. Accesibilidad Gubernamental**
- Diseño que cumple con estándares de accesibilidad
- Contraste adecuado para diferentes condiciones de iluminación
- Textos legibles y botones de tamaño apropiado

&nbsp;


**4. Responsive desde el Wireframe**
- Estructura que se adapta desde desktop hasta móvil
- Elementos que mantienen su usabilidad en diferentes tamaños
- Jerarquía visual clara en todas las resoluciones


&nbsp;

#### **Impacto en el Desarrollo**

Estos wireframes sirvieron como:
- **Guía de Desarrollo**: Referencia directa para la implementación en React
- **Validación de UX**: Confirmación de flujos antes del código
- **Comunicación**: Herramienta para alinear expectativas con stakeholders
- **Base para Testing**: Estructura para pruebas de usabilidad

La inversión en wireframes detallados permitió un desarrollo más eficiente y una experiencia de usuario más pulida en el producto final.

&nbsp;

&nbsp;

## Características Técnicas Destacadas
&nbsp;


### Sistema de Formularios Dinámicos

Implementamos formularios multi-paso con 9 secciones especializadas:

&nbsp;

#### **Validación Inteligente**
```typescript
const getFieldOptions = (): RegisterOptions<FormData> => {
  if (field.type === "number") {
    return {
      valueAsNumber: true,
      min: { value: 0, message: "El valor no puede ser negativo" }
    };
  }
  if (field.type === "tel") {
    return {
      pattern: { value: /^\d{10}$/, message: "El número debe tener 10 dígitos" }
    };
  }
  return {};
};
```

&nbsp;

#### **Autoguardado Persistente**
- Guardado automático en localStorage cada 30 segundos
- Recuperación de datos en caso de cierre accidental
- Validación progresiva por secciones

&nbsp;

### Gestión de Estado Avanzada

#### **Context API Optimizado**
```typescript
interface AuthContextType {
  isAuthenticated: boolean;
  userData: UserData | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
}
```

&nbsp;

#### **Custom Hooks Especializados**
- `useAuth`: Gestión de autenticación y permisos
- `useAdminUsers`: Administración de usuarios
- `useShareUsers`: Sistema de compartir expedientes
- `useFileUpload`: Gestión de archivos

&nbsp;

### Optimización de Performance

#### **Virtualización con React Window**
Para manejar listas grandes de usuarios y expedientes:
```typescript
<List
  height={height}
  width={width}
  itemCount={users.length}
  itemSize={72}
  overscanCount={5}
>
  {({ index, style }) => <UserItem user={users[index]} style={style} />}
</List>
```

&nbsp;


#### **Lazy Loading Inteligente**
- Componentes cargados bajo demanda
- Imágenes con lazy loading y efectos de blur
- Code splitting automático por rutas


&nbsp;

## Servicios Mock y Simulación

### Sistema de Datos Realistas


&nbsp;

#### **15 Expedientes Completos**
Cada expediente incluye:
- Información completa del reportante
- Datos detallados de la persona desaparecida
- Características físicas completas (media filiación)
- Fechas y ubicaciones específicas
- Operadores y folios de emergencia

#### **4 Usuarios del Sistema**
```typescript
const mockUsers = {
  'admin@example.com': {
    password: 'admin123',
    rol: 'SUPER ADMIN',
    permisos: ['read', 'write', 'delete', 'admin', 'superadmin']
  },
  'capturista@example.com': {
    password: 'capturista123', 
    rol: 'CAPTURISTAS',
    permisos: ['read', 'write']
  }
  // ... más usuarios
};
```

&nbsp;

### Simulación de Operaciones Complejas

#### **Sistema de Archivos Mock**
```typescript
const getArchivosPorExpediente = async (expedienteId: string) => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return {
    status: 'success',
    data: mockArchivos.filter(archivo => archivo.expediente_id === expedienteId)
  };
};
```

#### **Compartir Expedientes**
- Simulación de envío a múltiples usuarios
- Manejo de errores y estados de carga
- Notificaciones en tiempo real

&nbsp;

&nbsp;

## Funcionalidades Principales

### 1. Sistema de Autenticación Completo
- **Login seguro** con validación de credenciales
- **Rutas protegidas** según roles de usuario
- **Gestión de sesiones** con persistencia en localStorage
- **Control granular** de permisos por funcionalidad

### 2. Gestión Integral de Expedientes
- **Creación**: Formularios multi-paso especializados
- **Visualización**: Lista paginada con búsqueda avanzada
- **Edición**: Actualización de información existente
- **Archivado**: Sistema de archivado reversible
- **Compartición**: Envío entre usuarios del sistema

### 3. Formularios Especializados por Secciones

#### **Datos Generales y Reportante**
- Información básica del reporte
- Datos completos de quien reporta la desaparición

#### **Datos de la Persona Desaparecida**
- Información personal detallada
- Características físicas (media filiación)
- Descripción de vestimenta y accesorios

#### **Contexto y Antecedentes**
- Circunstancias de la desaparición
- Antecedentes relevantes
- Información de contacto

#### **Autorizaciones y Firmas**
- Firma digital con React Signature Canvas
- Permisos y autorizaciones legales

&nbsp;

### 4. Sistema de Archivos Avanzado
- **Subida de documentos** con drag & drop
- **Categorización automática** por tipo de archivo
- **Previsualización** de imágenes y documentos
- **Gestión de versiones** y metadatos

### 5. Administración de Usuarios
- **Gestión completa** de usuarios del sistema
- **Asignación de roles** y permisos
- **Archivado y restauración** de cuentas
- **Generación automática** de contraseñas seguras

&nbsp;

&nbsp;

## Tecnologías y Herramientas

### Frontend Core
```json
{
  "react": "^18.3.1",
  "typescript": "~5.6.2",
  "vite": "^6.0.5",
  "react-router-dom": "^6.28.1"
}
```

### Gestión de Formularios y Estado
```json
{
  "react-hook-form": "^7.54.2",
  "@headlessui/react": "^2.2.0",
  "react-hot-toast": "^2.5.2"
}
```

### UI y Estilos
```json
{
  "tailwindcss": "^3.4.17",
  "lucide-react": "^0.471.1",
  "react-icons": "^5.4.0",
  "framer-motion": "^12.18.1"
}
```

### Funcionalidades Especializadas
```json
{
  "react-signature-canvas": "^1.1.0-alpha.2",
  "qrcode.react": "^4.2.0",
  "xlsx": "^0.18.5",
  "react-window": "^1.8.11"
}
```

&nbsp;

&nbsp;

## Resultados e Impacto

### Métricas de Funcionalidad
- **100% Frontend**: Sistema completamente independiente de backend
- **9 Secciones**: Formularios especializados con validación
- **15 Expedientes**: Datos de ejemplo realistas y completos
- **4 Roles**: Sistema de permisos diferenciados

### Experiencia de Usuario
- **Responsive Design**: Funcionalidad perfecta en todos los dispositivos
- **Tiempo de Carga**: < 2.5 segundos con lazy loading optimizado
- **Persistencia**: Autoguardado automático cada 30 segundos
- **Accesibilidad**: Cumplimiento de estándares WCAG

### Arquitectura Técnica
- **Modular**: Componentes reutilizables basados en Atomic Design
- **Escalable**: Estructura preparada para crecimiento futuro
- **Mantenible**: Código TypeScript con patrones consistentes
- **Performante**: Optimizaciones con virtualización y code splitting

&nbsp;

&nbsp;

## Lecciones Aprendidas

Este proyecto me enseñó la importancia de:

### 1. **Simulación Realista de Backend**
Crear servicios mock que realmente simulen la complejidad de un backend real, incluyendo delays, errores y estados de carga.

### 2. **Gestión de Estado Compleja**
Implementar Context API de manera eficiente para manejar múltiples flujos de datos sin comprometer el rendimiento.

### 3. **Formularios Empresariales**
Desarrollar formularios complejos que manejen validación, dependencias entre campos y persistencia de datos de manera elegante.

### 4. **Optimización de Performance**
La importancia de técnicas como virtualización y lazy loading cuando se manejan grandes volúmenes de datos.

### 5. **Experiencia de Usuario Gubernamental**
Diseñar interfaces que sean intuitivas para usuarios no técnicos pero potentes para trabajo profesional.

### 6. **Arquitectura Escalable**
Pensar en la estructura del código desde el inicio para facilitar el mantenimiento y la extensión de funcionalidades.

---

&nbsp;
&nbsp;


## Proceso de Desarrollo

### Sprint 1: Arquitectura Base (Semanas 1-2)
- Setup del proyecto con Vite y TypeScript
- Configuración de Tailwind CSS y herramientas
- Implementación del sistema de rutas
- Creación de componentes base (Atomic Design)

### Sprint 2: Autenticación y Estado (Semanas 3-4)
- Desarrollo del Context API de autenticación
- Implementación de rutas protegidas
- Sistema de roles y permisos
- Servicios mock para usuarios

### Sprint 3: Formularios y Validación (Semanas 5-7)
- Implementación de React Hook Form
- Creación de formularios multi-paso
- Validación en tiempo real
- Sistema de autoguardado

### Sprint 4: Gestión de Expedientes (Semanas 8-10)
- CRUD completo de expedientes
- Sistema de búsqueda y filtros
- Paginación y virtualización
- Funcionalidades de archivado

### Sprint 5: Gestión de Archivos (Semanas 11-12)
- Sistema de subida de archivos
- Categorización y previsualización
- Integración con expedientes
- Optimización de rendimiento

### Sprint 6: Administración y Pulido (Semanas 13-14)
- Panel de administración de usuarios
- Sistema de compartir expedientes
- Testing exhaustivo y corrección de bugs
- Optimización final y documentación

---

*Este proyecto representa la evolución hacia sistemas frontend modernos y backend autónomos, demostrando cómo es posible crear aplicaciones complejas y completamente funcionales sin dependencias de excel.*

