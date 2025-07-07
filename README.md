# isbrandon.org - Portfolio Site

Modern Nuxt 3 portfolio/blog site built with TypeScript, Tailwind CSS, and ui-thing components.

## Project Structure

This is a **Nuxt 3 application** in the root directory with the following structure:

```
isbrandonorg/
├── app/                 # Nuxt 3 application files
│   ├── components/      # Vue components (UI + content)
│   ├── pages/          # Route pages
│   ├── layouts/        # Layout components
│   └── utils/          # Utility functions
├── public/             # Static assets
├── server/             # Server API routes (empty for static)
├── nuxt.config.ts      # Nuxt configuration
├── package.json        # Dependencies
└── vercel.json         # Vercel deployment config
```

## Tech Stack

- **Framework**: Nuxt 3 with Vue 3 + TypeScript
- **Styling**: Tailwind CSS with zinc theme
- **Components**: ui-thing library (100+ components)
- **Package Manager**: npm
- **Deployment**: Static site generation for Vercel

## Development

```bash
# Install dependencies
npm install

# Start development server
npm dev

# Build for production
npm build

# Generate static site
npm generate
```

## Vercel Deployment

This project is configured for static site generation on Vercel:

- **Build Command**: `npm run generate`
- **Output Directory**: `.output/public`
- **Framework**: Nuxt.js

The site will be deployed as a static site (no server-side functions initially).

## Environment Variables

Currently no environment variables are required for the basic site functionality.

## Features

- Dark mode portfolio/blog
- Responsive design with Tailwind CSS
- 100+ UI components from ui-thing
- Static site generation ready
- SEO optimized