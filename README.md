# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Thierry - Luxury Perfume Brand Website

A sophisticated, luxury perfume brand website built with React, TypeScript, Tailwind CSS, and Framer Motion. This site embodies the elegance of modern French boutique design meets exclusive artisan craftsmanship.

![Thierry Perfumes](https://images.unsplash.com/photo-1594736797933-d0601ba2fe65?w=1200&h=400&fit=crop&q=80)

## ✨ Features

### 🏠 **Home Page**
- Full-screen hero with smooth fade-in text animations
- Subtle parallax image background
- Bold brand statement and featured scents section
- Interactive hover animations and call-to-action buttons

### 📖 **About Page**
- Artisanal, all-natural philosophy explanation
- Elegant scrolling text animation (marquee effect)
- Founder story with professional photography
- Values section highlighting sustainability and authenticity

### 🌹 **Fragrances Page**
- Interactive product grid with hover zoom effects
- Minimal product cards with fragrance notes
- Modal popup with detailed product information
- Featured product badges and pricing

### 📧 **Contact Page**
- Clean contact form with validation
- Store location and contact information
- FAQ section with accordion dropdown
- Responsive design for all devices

## 🎨 Design Principles

### **Color Palette**
- **Primary Black**: `#1a1a1a` - Sophisticated and timeless
- **Off-White**: `#fafafa` - Clean and minimal
- **Luxury Beige**: `#f5f2ed` - Warm and inviting
- **Gold Accent**: `#d4af37` - Exclusive and premium

### **Typography**
- **Headings**: Playfair Display (Serif) - Elegant and refined
- **Body Text**: Inter (Sans-serif) - Clean and readable
- **Tracking**: Wide letter spacing for luxury feel

### **Animations**
- Subtle fade and slide-in effects with Framer Motion
- Smooth page transitions
- Scroll-triggered animations
- Hover effects on interactive elements

## 🛠 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom luxury theme
- **Animations**: Framer Motion for smooth interactions
- **Routing**: React Router DOM for navigation
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and building

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd thierry
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173` to view the website.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full experience for desktops (1024px+)
- **Large Screens**: Expanded layout for large displays (1440px+)

## 🎯 Key Components

### **Navbar**
- Sticky navigation with blur effect on scroll
- Mobile-responsive hamburger menu
- Smooth page transitions
- Active page indicators

### **Product Cards**
- Interactive hover effects with image zoom
- Fragrance note previews
- Clean pricing display
- Featured product badges

### **Contact Form**
- Form validation with error handling
- Subject selection dropdown
- Textarea for detailed messages
- Success state management

### **FAQ Accordion**
- Smooth expand/collapse animations
- Multiple questions and answers
- Clean, minimal design

## 🌟 Performance Optimizations

- **Images**: Optimized Unsplash images with proper sizing
- **Fonts**: Preloaded Google Fonts for better performance
- **Code Splitting**: React Router for page-level code splitting
- **CSS**: Tailwind CSS purging for minimal bundle size
- **SEO**: Comprehensive meta tags and semantic HTML

## 🔧 Customization

### **Colors**
Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  luxury: {
    black: '#1a1a1a',
    white: '#fafafa',
    beige: '#f5f2ed',
    gold: '#d4af37',
    // Add your custom colors
  }
}
```

### **Fonts**
Modify font families in `tailwind.config.js` and update the Google Fonts import in `src/index.css`.

### **Product Data**
Update fragrance information in `src/data/fragrances.ts` to match your products.

## 📧 Contact & Support

For questions about this project or customizations, please contact:
- Email: developer@example.com
- Website: [Your Portfolio](https://your-portfolio.com)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for luxury brands that value craftsmanship and elegance.**

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
