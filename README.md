# 🌟 Personal Portfolio Website

A portfolio website built with Angular, featuring 3D animations and CSS transitions. This project showcases professional experience, skills, and projects through an interactive user interface with multilingual support.

## 🫥 Project Introduction

This portfolio website serves as a digital showcase of my professional journey, technical expertise, and creative projects. Built with current web technologies, it demonstrates frontend development capabilities while providing visitors with an interactive experience.

The site features a 3D Rubik's cube animation powered by Three.js, scroll-based animations, and a responsive design that works across devices. It includes support for multiple languages (English, French, and Spanish) for international accessibility.

## 📝 Project Overview and Features

### 🎯 Core Features

- **Interactive 3D Rubik's Cube**: Three.js scene that responds to scroll interactions
- **CSS Animations**: Angular animations for form validation and UI transitions
- **Multilingual Support**: i18n implementation supporting English, French, and Spanish
- **Responsive Design**: Mobile-first approach with Tailwind CSS for cross-device compatibility
- **Contact Form**: Contact form with real-time validation and submission handling
- **CV Downloads**: Multiple language versions of CV available for download
- **Accessible UI**: Design with accessibility considerations

### 🎨 Visual Elements

- **Layered Peak Backgrounds**: SVG components for visual section separation
- **Color Themes**: Consistent color scheme with dark/light mode support
- **Icon Library**: Set of technology and skill icons
- **Scrolling**: Page navigation with scroll-based interactions
- **Tech Stack Display**: Animated showcase of technical skills and tools

## ⛏️ Tech Stack, APIs, and Other Resources

### 🚀 Frontend Framework

- **Angular 19.0**: Framework with standalone components and current features
- **TypeScript 5.6**: Type-safe development with language features
- **RxJS 7.8**: Reactive programming for data handling

### 🎨 Styling & Design

- **Tailwind CSS 3.4**: Utility-first CSS framework for UI development
- **CSS Animations**: Keyframe animations and transitions
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **PostCSS & Autoprefixer**: CSS processing and browser compatibility

### 🎮 3D Graphics & Animation

- **Three.js 0.172**: 3D graphics library for WebGL rendering
- **@types/three**: TypeScript definitions for Three.js
- **WebGL**: Hardware-accelerated 3D graphics
- **OrbitControls**: Interactive camera controls for 3D scene navigation

### 🔧 Development Tools

- **Angular CLI 19.0**: Command-line interface for project management
- **ESLint**: Code linting with Angular-specific rules and Prettier integration
- **Prettier**: Code formatting for consistent style
- **TypeScript ESLint**: Linting for TypeScript code

### 📝 Content & Forms

- **Marked 15.0**: Markdown parsing for content
- **SubmitJSON**: Contact form submission handling
- **DOMPurify**: XSS protection for user-generated content
- **Angular Forms**: Reactive forms with validation

### 🌐 Internationalization

- **Angular i18n**: Built-in internationalization support
- **Multiple Locales**: English (default), French, and Spanish
- **Translation Management**: XLF format translation files

## �🧑‍💻 Getting Started: Setup and Running Instructions

### Prerequisites

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher (comes with Node.js)
- **Git**: For version control

### 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio_v3
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200` to view the application

### 📋 Available Scripts

| Command          | Description                           |
| ---------------- | ------------------------------------- |
| `npm start`      | Start development server on port 4200 |
| `npm run build`  | Build the app for production          |
| `npm run watch`  | Build in watch mode for development   |
| `npm test`       | Run unit tests with Karma             |
| `npm run lint`   | Lint the codebase with ESLint         |
| `npm run format` | Format code with Prettier             |

### 🌍 Language Development

To work with translations:

1. **Extract messages for translation**

   ```bash
   ng extract-i18n
   ```

2. **Build for specific locale**

   ```bash
   ng build --localize
   ```

3. **Serve specific locale in development**
   ```bash
   ng serve --configuration=fr  # for French
   ng serve --configuration=es  # for Spanish
   ```

### 🏗️ Building for Production

```bash
# Build for all locales
npm run build

# Build for specific locale
ng build --configuration=production,fr
```

The built files will be in the `_site/` directory, organized by locale.

## 🔥 Conclusion and License

This portfolio website demonstrates a technical approach to professional web presence, combining Three.js for 3D graphics, Angular's framework capabilities, and responsive design principles. The project serves as both a showcase of technical skills and a functional platform for professional presentation.

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 📞 Contact

For questions, suggestions, or professional inquiries, please feel free to reach out through the contact form on the website or connect via:

- **Website**: https://alexanderhalsey.github.io
- **LinkedIn**: https://www.linkedin.com/in/alexander-halsey-01a13125b/
- **GitHub**: https://github.com/AlexanderHalsey

---

**Built with Angular, Three.js, and web technologies**
