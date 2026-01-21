# Copilot Instructions for Portfolio Project

## Project Overview

This is a personal portfolio website built with React + Vite, featuring a custom interactive UI with hover-based navigation and animated SVG buttons. The project is under active development (see homepage "Under Construction" message).

**Tech Stack:** React 19, React Router 7, Vite, ESLint

## Architecture & Key Components

### Routing Structure
- **App.jsx** is the root component defining all routes in `src/App.jsx`
- Routes are defined inline within the main `<Routes>` element using React Router v7
- Landing page (/) displays a placeholder image and navigation links to all sections
- Main pages: `/home`, `/about`, `/add` (additional work), `/contact`, `/work`

### Page Components
Each page lives in `src/pages/{page-name}/` with its own JSX and CSS file:
- `Home.jsx`: Main portfolio display with hover-state driven SVG navigation buttons
- `About.jsx`, `Add.jsx`, `Contact.jsx`, `Work.jsx`: Additional portfolio pages
- All pages import and render the `NavBar` component at the top

### Styling Pattern
- **Global styles:** `src/index.css` (background color, body layout) and `src/App.css` (layout grid, fonts)
- **Local component styles:** Co-located CSS files (e.g., `Home.css`, `navbar.css`)
- **Custom fonts:** Google Fonts imported via `@import` (Averia Sans Libre, Nunito Sans)
- **Color scheme:** Earthy tones (#f1ebda background, #7DA75b green accent)

### State Management
- Local `useState` hooks used for hover states (example in `Home.jsx`: `hoveredAbout`, `hoveredWork` states toggle image sources between normal/hover SVG variants)
- No global state management (Context API, Redux) currently used

## Development Workflow

### Build & Run
```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build to dist/
npm run lint      # Run ESLint check
npm run preview   # Preview production build locally
```

### Code Quality Rules
- ESLint config extends React best practices and React Hooks rules
- Enforced: `no-unused-vars` with exception for uppercase/underscore-prefixed variables
- All files must pass `npm run lint` before committing

## Key Patterns & Conventions

### Component Structure
- **Functional components** with hooks (no class components)
- **Import CSS co-located** with JSX (e.g., `import "./Home.css"` at top of `Home.jsx`)
- **Import ordering:** React/router imports first, then local components, then styles

### Hover/Interactive Elements
- Use `useState` for local toggle state (e.g., `setHoveredAbout`)
- Bind image sources conditionally: `src={hoveredAbout ? "/about hover.svg" : "/about normal.svg"}`
- Attach `onMouseEnter`/`onMouseLeave` handlers to enable hover effects
- See `Home.jsx` lines 16-40 for the pattern in use

### Asset Management
- Static assets stored in `public/` (e.g., `/me.gif`, `/about hover.svg`, `/vite.svg`)
- Reference assets by absolute path from public: `src="/me.gif"` resolves to `public/me.gif`
- SVG assets paired with hover variants (normal and hover versions)

### Navigation
- Primary navigation via React Router `<Link>` components in `App.jsx`
- Secondary navbar component (`NavBar`) appears on most pages but is not yet linked to routes
- Consider connecting navbar links to actual route navigation when enhancing

## Integration Points

### External Assets
- Google Fonts loaded via `@import` in App.css
- SVG button assets in `public/` folder for hover interactivity
- Animated GIF (`me.gif`) in public folder

### React Router Integration
- BrowserRouter wraps App in `main.jsx`
- All routing logic centralized in `App.jsx` Routes definition
- Navigation links use `<Link to="/path">` component

## Development Notes

### Current Limitations
- NavBar component exists but navigation items are static divs (not connected to router)
- Under Construction message visible on homepage
- No error boundary or 404 page implemented

### Type Safety
- Project uses JavaScript (not TypeScript)—ESLint `@types/react` are dev dependencies but primarily for editor hints
- Consider adding TypeScript if type safety becomes important as project grows

## File Reference Guide

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app with route definitions |
| `src/main.jsx` | Entry point with React DOM render + Router setup |
| `src/pages/home/Home.jsx` | Main portfolio page with hover buttons |
| `src/components/navbar.jsx` | Navigation bar component |
| `.eslintrc.config.js` | ESLint configuration |
| `vite.config.js` | Vite bundler config |

