# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern Nuxt 3 application for a personal blog/portfolio site (isbrandon.org) built with:
- **Frontend**: Nuxt 3 with Vue 3, TypeScript (strict mode)
- **UI Components**: ui-thing library (100+ components based on Radix Vue)
- **Styling**: Tailwind CSS with zinc theme and dark mode
- **State Management**: Pinia with typed stores
- **Forms**: VeeValidate with Yup/Zod validation
- **Package Manager**: npm (version 10.8.2)
- **Node.js**: Requires >=20.x

## Development Commands

### Primary Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run generate     # Generate static site
npm run preview      # Preview production build
npm run clean        # Clean build artifacts and reinstall dependencies
```

### UI Component Management
```bash
npm run ui:add       # Add new ui-thing components
npm run ui:theme     # Manage theme configuration
npm run ui:prettier  # Run prettier on ui components
npm run ui:shortcuts # Generate keyboard shortcuts for components
```

### Utilities
```bash
npm run postinstall         # Runs nuxt prepare (auto-run after install)
npm run rm:recommendations  # Remove VSCode extension recommendations
```

## Architecture

### Application Structure
- **`app/components/Ui/`** - 100+ reusable UI components from ui-thing library
- **`app/components/content/`** - Content-specific components (hero, blog, contact)
- **`app/composables/`** - Vue composables for reusable logic
- **`app/stores/`** - Pinia state management stores
- **`app/utils/`** - Utility functions and constants (including SEO config)
- **`app/pages/`** - Route pages with typed pages enabled
- **`server/api/`** - Server API endpoints
- **`public/`** - Static assets

### Key Configuration Files
- **`nuxt.config.ts`** - Nuxt configuration with experimental typedPages, runtime config for COMPANY_NAME
- **`tailwind.config.js`** - Zinc theme with CSS custom properties, custom animations
- **`ui-thing.config.ts`** - UI component library configuration (Nuxt 4 compatible)
- **`.prettierrc`** - Prettier config with import sorting and Tailwind class sorting

### Technology Stack Details
- **Theme**: Zinc theme with dark mode support via `@nuxtjs/color-mode`
- **Notifications**: Notivue + Vue Sonner for toast notifications
- **Forms**: VeeValidate with Yup/Zod validation, specialized Vee UI components
- **Icons**: Nuxt Icon with Lucide icons
- **Data Tables**: TanStack Vue Table + DataTables.net with extensive plugins
- **Charts**: Unovis for data visualization
- **Animations**: Tailwind animate + custom animations (accordion, fade, grid, meteor, shine)
- **Transitions**: Vue transitions via `@morev/vue-transitions/nuxt`
- **Calendar**: VCalendar integration via `@samk-dev/nuxt-vcalendar`
- **Typography**: Inter font with feature settings, Fira Code mono font via `@nuxt/fonts`
- **PDF Generation**: pdfmake integration via CDN scripts
- **Wave Effects**: v-wave/nuxt for interaction animations

## Development Guidelines

### Code Quality and Formatting
- **Prettier Configuration**: Automatic import sorting with `@ianvs/prettier-plugin-sort-imports`
- **Tailwind Class Sorting**: Automatic via `prettier-plugin-tailwindcss`
- **Import Order**: Third-party → Local imports → Type imports
- **TypeScript**: Strict mode enabled throughout

### Component Development
- Use existing ui-thing components before creating custom ones (100+ available)
- Follow Tailwind CSS conventions with tailwind-variants
- Components auto-import `tv` (tailwind-variants) and `VariantProps`
- Maintain consistent component structure in `app/components/Ui/`

### Form Development
- Use VeeValidate with Yup or Zod validation
- Leverage specialized Vee UI components in `app/components/Ui/Vee/`
- Follow established validation patterns

### Dual-AI Development Workflow
**Use Claude Code for:**
- Multi-file refactoring and architecture decisions
- Complex debugging and major refactors
- Documentation generation

**Use Cursor for:**
- Single-file edits and autocomplete assistance
- Quick bug fixes and rapid prototyping

### SEO Configuration
- Site constants defined in `app/utils/seo.ts`
- Title: "isbrandon.org"
- Tagline: "Learn. Build. Repeat."
- Company Name: "isbrandon" (from runtime config)

## Development Notes


### Performance Features
- Component auto-imports enabled
- Typed pages for better DX
- Hot module reloading in development
- CSS custom properties for theming

### Environment Requirements
- Node.js >=20.x required
- npm 10.8.2 package manager
- Environment variables configured via `.env` files

## Deployment

### Vercel Configuration
- **Build Command**: `npm run build` (serverless deployment)
- **Dev Command**: `npm run dev`
- **Install Command**: `npm install`
- **Framework**: Nuxt.js auto-detected
- **Output**: Server-side rendering with Nitro

### Deployment Steps
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel` (first time requires login and project setup)
3. For production: `vercel --prod`

### Build Verification
Test the build locally before deploying:
```bash
npm run build        # Build for production
node .output/server/index.mjs  # Preview build locally
```