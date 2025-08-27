# Portfolio Web - Fotógrafo Profesional & Community Manager

## 🎨 Descripción

Portafolio web profesional desarrollado con **Astro** puro, diseñado para mostrar el trabajo de un fotógrafo profesional y community manager. El diseño está inspirado en una paleta de colores moderna con tonos morados y rosas, utilizando efectos glassmorphism y animaciones suaves.

### ✨ Características

- **Diseño One-Page**: Navegación fluida entre secciones
- **Responsive Design**: Optimizado para móvil, tablet y desktop
- **Glassmorphism Effects**: Efectos de vidrio modernos
- **Animaciones Suaves**: Transiciones y efectos de scroll
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesibilidad**: Cumple con estándares WCAG
- **Rendimiento**: Lazy loading y optimizaciones

## 🚀 Estructura del Proyecto

```text
/
├── public/
│   ├── favicon.svg
│   └── *.jpg (imágenes placeholder)
├── src/
│   ├── components/
│   │   ├── HeroSection.astro
│   │   ├── AboutSection.astro
│   │   ├── ExperienceSection.astro
│   │   ├── ProjectsSection.astro
│   │   ├── SkillsSection.astro
│   │   └── ContactSection.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   ├── scripts/
│   │   └── animations.js
│   └── assets/
│       └── images/
└── package.json
```

## 🎯 Secciones del Portafolio

1. **Hero/Presentación**: Introducción con foto de perfil y estadísticas
2. **Sobre Mí**: Información personal y profesional
3. **Experiencia**: Timeline de experiencia laboral
4. **Proyectos**: Galería filtrable de trabajos destacados
5. **Habilidades**: Grid de competencias técnicas con barras de progreso
6. **Contacto**: Formulario funcional e información de contacto

## 🛠️ Tecnologías

- **Astro**: Framework principal
- **HTML5/CSS3**: Estructura y estilos
- **JavaScript**: Interactividad y animaciones
- **CSS Grid/Flexbox**: Layout responsive
- **Intersection Observer API**: Animaciones de scroll
- **Google Fonts**: Tipografía (Inter)

## 🎨 Paleta de Colores

- **Primary Purple**: `#8B5CF6`
- **Primary Pink**: `#EC4899`
- **Dark Background**: `#0F0F23`
- **Dark Secondary**: `#1A1A2E`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#E2E8F0`
- **Accent**: `#F59E0B`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px
- **Small Mobile**: < 640px

## 🧞 Comandos

| Comando               | Acción                                          |
| :-------------------- | :---------------------------------------------- |
| `npm install`         | Instala las dependencias                       |
| `npm run dev`         | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`       | Construye el sitio para producción en `./dist/` |
| `npm run preview`     | Previsualiza la construcción localmente        |
| `npm run astro ...`   | Ejecuta comandos CLI de Astro                  |

## 🚀 Instalación y Desarrollo

1. **Clona el repositorio**:
   ```bash
   git clone [repository-url]
   cd portfolio-web
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** en `http://localhost:4321`

## 📝 Personalización

### Información Personal
Edita los archivos de componentes en `src/components/` para actualizar:
- Nombre y título profesional
- Experiencia laboral
- Proyectos destacados
- Habilidades y herramientas
- Información de contacto

### Imágenes
Reemplaza las imágenes placeholder en `public/` con tus propias imágenes:
- `profile-placeholder.jpg`: Tu foto de perfil
- `project-placeholder-*.jpg`: Imágenes de tus proyectos

### Colores y Estilos
Modifica las variables CSS en `src/styles/global.css` para personalizar la paleta de colores.

## 🔧 Optimizaciones Incluidas

- **Lazy Loading**: Carga diferida de imágenes
- **Minificación**: CSS y HTML comprimidos
- **SEO**: Meta tags optimizados
- **Accesibilidad**: ARIA labels y navegación por teclado
- **Performance**: Código optimizado y assets comprimidos

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo y modificarlo según tus necesidades.

---

**Desarrollado con ❤️ usando Astro**
