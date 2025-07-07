# Simplification Plan for Nuxt Static Portfolio

## 1. Clean Up Dependencies & Fix Linter Errors
- Remove unused or unnecessary dependencies.
- Fix linter errors (e.g., specify a fixed version for `vue-router` instead of `latest`).
- Ensure only essential packages are present for a static Nuxt portfolio.

## 2. Standardize Styling & Components
- Use Tailwind CSS classes for all styling.
- Replace custom/redundant components with `ui-thing@latest` components where possible.
- Remove unused CSS or assets.

## 3. Minimalist Structure & Content
- Keep only essential pages: Home, About, Blog, Contact.
- Remove demo, placeholder, or unused components/pages.
- Ensure navigation is simple and intuitive.

## 4. Consistent Dark Minimalist Theme
- Set dark mode as the default.
- Use a consistent color palette (slate/gray/zinc).
- Remove conflicting or unused theme code.

## 5. Documentation & Readme
- Update `README.md` and `docs/` to reflect the simplified structure and setup steps. 