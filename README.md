# SEC Philippines Reportorial Requirements

Modern, production-ready reference guide for SEC Philippines reportorial requirements for corporations with primary licenses.

## Features

- **Mobile-first responsive design** — Works seamlessly on desktop, tablet, and mobile devices
- **Clear deadline tracking** — See all filing deadlines and applicability at a glance
- **Official resource links** — Direct access to SEC website and eFAST portal
- **4-step compliance flow** — Simple action plan to stay on track
- **FAQ section** — Quick answers to common questions
- **Contact information** — SEC contact center details with support hours

## Tech Stack

- **Svelte 4** — Modern reactive framework
- **Vite** — Fast build tool and dev server
- **Tailwind CSS 3** — Utility-first styling with custom design tokens
- **PostCSS & Autoprefixer** — CSS processing and browser compatibility

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server (http://localhost:5173)
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

Build output will be in the `dist/` folder, ready for deployment.

## Deployment

### Option 1: Netlify

```bash
# Deploy to Netlify
npx netlify-cli deploy --prod --dir=dist
```

### Option 2: Vercel

```bash
# Deploy to Vercel
npx vercel --prod
```

### Option 3: Static Hosting

Upload the contents of the `dist/` folder to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Cloudflare Pages

## Project Structure

```
.
├── src/
│   ├── App.svelte          # Main application component
│   ├── app.css             # Global styles and Tailwind directives
│   └── main.js             # Application entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.cjs     # Tailwind configuration
├── postcss.config.cjs      # PostCSS configuration
├── svelte.config.js        # Svelte configuration
└── vite.config.js          # Vite configuration
```

## Customization

### Brand Colors

Edit `tailwind.config.cjs` to customize the brand color palette:

```js
colors: {
  brand: {
    50: '#f1f6ff',
    // ... customize as needed
  }
}
```

### Content Updates

Edit `src/App.svelte` to update:
- Requirement details (lines 2-32)
- Compliance steps (lines 34-55)
- FAQ content (lines 57-70)
- Contact information (lines 306-314)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## License

This project is private and intended for internal use.

## Acknowledgments

Content aligned with official SEC Philippines reportorial requirements:
- [SEC Philippines](https://www.sec.gov.ph/)
- [Reportorial Requirements](https://www.sec.gov.ph/reportorial-requirements/)
- [eFAST Portal](https://cifss-efile.sec.gov.ph/)