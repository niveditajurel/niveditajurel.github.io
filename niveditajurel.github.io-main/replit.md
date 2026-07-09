# Product Manager Portfolio Site

## Overview

This is a modern, personality-rich portfolio website for an early-career Product Manager. Built with React, TypeScript, and Tailwind CSS, the site features immersive scroll interactions, smooth animations, and a sophisticated design that blends inspiration from pixelwrld.co, withequip.com, and hellodani.co. The design emphasizes innovation, empathy, and data-driven thinking while maintaining confidence, cleanliness, and emotional warmth.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system and portfolio-specific color palette
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Theming**: Custom dark/light mode with ThemeProvider and CSS variables
- **Routing**: Wouter for lightweight client-side routing with 5 main pages
- **Animations**: Custom scroll-triggered animations with Intersection Observer
- **Typography**: Inter, DM Sans, and Playfair Display fonts for visual hierarchy
- **Icons**: Lucide React for consistent iconography

### Portfolio Features
- **Navigation**: Sticky navigation with social icons (LinkedIn, GitHub, Twitter) and theme toggle
- **Hero Section**: Two-column layout with typewriter animation, profile photo, and animated gradient blob
- **Interactive Elements**: Cursor glow effects, hover animations, and scroll reveals
- **Project Showcase**: Expandable case studies with metrics and detailed process documentation
- **Experience Timeline**: Professional experience with achievements and skill tags
- **Contact System**: Multi-channel contact options with form integration
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices

### Design System
- **Color Palette**: 
  - Base: #F5F7FA (very light gray background)
  - Ink: #0F172A (almost-black for text)
  - Accent: #5B8DEF (soft blue primary)
  - Flair: #F89676 (warm salmon highlight)
  - Mint: #4ADE80 (soft mint for subtle accents)
- **Typography Scale**: Display headings with Playfair Display, body text with DM Sans
- **Animation Library**: Custom CSS animations including animated blob with keyframes
- **Component System**: Reusable cards, buttons, and layout components
- **Dark Mode**: Comprehensive theme support with automatic system detection

## Key Components

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations
- **Current Schema**: Basic user table with username/password fields

### API Layer
- **Express Server**: RESTful API with JSON middleware
- **Request Logging**: Custom middleware for API request logging
- **Error Handling**: Centralized error handling middleware
- **Storage Interface**: Abstracted storage layer with in-memory implementation

### Frontend Components
- **Component System**: Comprehensive UI library with 40+ components
- **Design System**: Consistent theming with CSS variables for light/dark modes
- **Forms**: React Hook Form integration with Zod validation
- **Responsive Design**: Mobile-first approach with responsive utilities

### Development Tools
- **TypeScript**: Strict configuration with path mapping
- **Linting**: ESLint integration (implied by dependencies)
- **Hot Reload**: Vite HMR for instant development feedback
- **Replit Integration**: Custom plugins for Replit environment

## Data Flow

1. **Client Requests**: React components make API calls using TanStack React Query
2. **API Routes**: Express routes handle requests and interact with storage layer
3. **Data Access**: Storage interface abstracts database operations
4. **Response**: JSON responses sent back to client with error handling
5. **State Management**: React Query manages caching and synchronization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon database driver for PostgreSQL
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **drizzle-kit**: Database migration tool

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Process**: Runs backend with tsx and frontend with Vite dev server
- **Port**: Application serves on port 5000
- **HMR**: Instant hot module replacement for development

### Production
- **Build**: `npm run build` - Vite build for frontend, esbuild for backend
- **Start**: `npm run start` - Runs production server
- **Deployment**: Replit autoscale with automatic builds
- **Static Assets**: Frontend builds to `dist/public`, served by Express

### Database
- **Provider**: Configured for PostgreSQL (Neon or standard PostgreSQL)
- **Environment**: Requires `DATABASE_URL` environment variable
- **Migrations**: Run with `npm run db:push`

## Recent Changes

```
✓ Enhanced entire portfolio with hellodani.co-inspired design system
✓ Added FloatingElements component with organic shapes and tech icons
✓ Created TechSkills section with PM-focused skill cards and gradient overlays
✓ Built ProductPhilosophy section showcasing data-driven approach
✓ Integrated floating decorative elements throughout Hero section
✓ Added organic hover effects and spring physics animations
✓ Enhanced color system with tech-themed gradients and interactions
✓ Implemented comprehensive section flow for product manager narrative
→ Ready for case studies and detailed project pages

June 24, 2025 - Full hellodani.co inspiration integration with tech PM focus
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```