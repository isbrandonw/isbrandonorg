# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern Nuxt 3 monorepo for a personal blog/portfolio site (isbrandon.org) built with:
- **Frontend**: Nuxt 3 with Vue 3, TypeScript (strict mode)
- **UI Components**: ui-thing library (100+ components based on Radix Vue)
- **Styling**: Tailwind CSS with zinc theme and dark mode
- **State Management**: Pinia with typed stores
- **Forms**: VeeValidate with Yup/Zod validation
- **AI Integration**: Anthropic Claude API
- **Package Manager**: npm with workspace configuration
- **Node.js**: Requires >=20.x

## Development Commands

### Frontend Development (ui_thing/)
```bash
cd ui_thing
npm dev          # Start development server
npm build        # Build for production
npm generate     # Generate static site
npm preview      # Preview production build
```

### UI Component Management
```bash
cd ui_thing
npm ui:add       # Add new ui-thing components
npm ui:theme     # Manage theme configuration
npm ui:prettier  # Run prettier on ui components
npm ui:shortcuts # Generate keyboard shortcuts for components
```

### Root Level
```bash
npm install      # Install all workspace dependencies
npm clean        # Clean all build artifacts and reinstall (ui_thing/)
```

## Architecture

### Monorepo Structure
- **`ui_thing/`** - Main Nuxt 3 frontend application
- **`backend/`** - Backend workspace (currently empty)
- **`supabase/`** - Supabase configuration and migrations
- **`docs/`** - Documentation and task files
- **`npm-workspace.yaml`** - Workspace configuration

### Frontend Structure (ui_thing/)
- **`app/components/Ui/`** - 100+ reusable UI components from ui-thing library
- **`app/components/content/`** - Content-specific components (hero, blog, contact)
- **`app/components/ai/`** - Claude AI integration components
- **`app/composables/`** - Vue composables for reusable logic
- **`app/stores/`** - Pinia state management stores
- **`app/utils/`** - Utility functions and constants (including SEO config)
- **`app/pages/`** - Route pages with typed pages enabled
- **`server/api/`** - Server API endpoints (Claude API integration)
- **`public/`** - Static assets

### Key Configuration Files
- **`nuxt.config.ts`** - Nuxt configuration with experimental typedPages, runtime config for COMPANY_NAME
- **`tailwind.config.js`** - Zinc theme with CSS custom properties, custom animations
- **`ui-thing.config.ts`** - UI component library configuration (Nuxt 4 compatible)

### Technology Stack Details
- **Theme**: Zinc theme with dark mode support via `@nuxtjs/color-mode`
- **Notifications**: Notivue + Vue Sonner for toast notifications
- **Forms**: VeeValidate with Yup/Zod validation
- **Icons**: Nuxt Icon with Lucide icons
- **Data Tables**: TanStack Vue Table + DataTables.net
- **Charts**: Unovis for data visualization
- **Animations**: Tailwind animate + custom animations (accordion, fade, grid, meteor, shine)

## AI Integration

### Claude API Setup
- **Endpoint**: `/api/claude` (POST)
- **Model**: claude-opus-4-20250514
- **Environment**: Requires `ANTHROPIC_API_KEY` environment variable
- **Components**: Ready-to-use AI components in `app/components/ai/`
- **Example Use Case**: Poetry generation component implemented

## Development Guidelines

### Component Development
- Use existing ui-thing components before creating custom ones (100+ available)
- Follow Tailwind CSS conventions with tailwind-variants
- Components auto-import `tv` (tailwind-variants) and `VariantProps`
- Maintain TypeScript strict mode throughout

### Code Quality
- Always rerun commands after fixes to ensure no errors remain
- Follow Prettier configuration with import sorting
- Use descriptive commit messages with clear change descriptions

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