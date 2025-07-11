# Project Todo List

> This actionable todo list supersedes and expands on `dev-plan.md`. It includes all original simplification goals, plus additional best practices for accessibility, SEO, and deployment.

---

## 1. Content & Structure
- [ ] Review and finalize essential pages: Home, About, Blog, Contact
- [ ] Remove any demo, placeholder, or unused components/pages
- [ ] Ensure navigation is simple, intuitive, and mobile-friendly
- [ ] Implement or finalize the Blog section (currently marked as "coming soon" in navigation and index.vue)
- [ ] Add more blog articles/content as needed

## 2. UI Consistency & Theming
- [ ] Ensure all components use Tailwind CSS classes for styling (no custom CSS)
- [ ] Replace any custom/redundant components with `ui-thing@latest` components where possible
- [ ] Set dark mode as the default and ensure consistent use of the zinc/gray color palette
- [ ] Remove any conflicting or unused theme code

## 3. Code Quality & Maintenance
- [ ] Remove unused or unnecessary dependencies from package.json
- [ ] Fix any linter or TypeScript errors
- [ ] Ensure all code uses TypeScript strict mode
- [ ] Standardize component and composable naming conventions (PascalCase for components, camelCase for composables)
- [ ] Clean up unused assets (images, CSS, etc.)

## 4. Features & Enhancements
- [ ] Add/complete contact form functionality (ensure validation and feedback)
- [ ] Implement SEO best practices using Nuxt's useHead and useSeoMeta
- [ ] Add social links and/or GitHub integration if desired
- [ ] Add analytics (optional, e.g., Plausible, Google Analytics)

## 5. Documentation
- [ ] Update README.md to reflect the latest structure, setup, and deployment steps
- [ ] Update or add developer documentation in docs/ (e.g., dev-plan.md)
- [ ] Document any custom composables or utility functions

## 6. Performance & Accessibility
- [ ] Audit for accessibility (WCAG 2.1 AA): semantic HTML, alt text, keyboard navigation
- [ ] Optimize images (WebP, size data, lazy loading)
- [ ] Implement lazy loading for non-critical components and routes
- [ ] Monitor and optimize Core Web Vitals (LCP, CLS, FID)

## 7. Deployment & CI
- [ ] Test static build locally (`npm run generate` and preview)
- [ ] Verify Vercel deployment configuration (build command, output directory)
- [ ] Add/verify .env.example for any future environment variables 