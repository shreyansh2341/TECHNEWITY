# TECHNEWITY LABS Landing Page

## Overview

This is a modern, full-stack web application for TECHNEWITY LABS, a technology consulting company based in Mumbai, India. The application features a dark-themed professional landing page with 3D visual elements, team showcase, project portfolio, and fully functional contact form with email notifications. Built using React, Express, Nodemailer, and in-memory storage for optimal performance.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Modern dark UI with 3D components, inspired by Orchids design.
Contact email: contact@technewity.com
Phone: +91 98216 79475
Location: Mumbai, India
LinkedIn: https://www.linkedin.com/company/technewity-labs/

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and building
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **API Design**: RESTful endpoints for inquiry management
- **Middleware**: JSON parsing, URL encoding, custom logging

### Data Storage
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM for type-safe database operations
- **Migration**: Drizzle Kit for schema management
- **Development**: In-memory storage fallback for development

## Key Components

### Team Structure
**Leadership Team:**
- Mr. Newprakash Chandra - Founder & CEO (Marketing and Business)
- Mr. Prasanna Kolambkar - CTO (Backend Engineering Specialist)

**Development Team:**
- Vivek Pandey - ML | Backend Engineer
- Omkar Chandra - Frontend Specialist (UI Design)
- Shreyansh Rai - Full Stack Engineer
- Sagar Gupta - Cybersecurity Specialist

### Featured Projects
- **ACCU Design**: Company website with modern design and responsive architecture
- **Engineering Hub**: Educational platform for Mumbai University engineering students

### Frontend Components
- **Navigation**: Dark theme sticky navigation with pill-shaped menu and smooth scrolling
- **Hero Section**: Dark gradient background with 3D floating elements and animations
- **Projects Section**: Showcase of ACCU Design and Engineering Hub projects
- **Services Section**: Three main service offerings (Engineering, Education, Consulting)
- **Team Section**: Leadership team (CEO & CTO) and 4-person development team with photos
- **Contact Section**: Dark-themed form with validation and email notifications
- **Footer**: Modern dark footer with contact info and LinkedIn integration

### Backend Services
- **Storage Interface**: In-memory storage for optimal performance
- **Inquiry Management**: CRUD operations for contact form submissions
- **Email Service**: Nodemailer integration for contact form notifications
- **Error Handling**: Centralized error middleware with proper status codes
- **Request Logging**: Detailed API request/response logging

### Database Schema
- **Inquiries Table**: Stores contact form submissions with fields for name, email, company, service, message, and timestamp
- **Users Table**: Basic user structure (currently unused but available for future features)

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated using Zod schemas
   - TanStack Query mutation sends POST request to `/api/inquiries`
   - Backend validates data and stores in database
   - Success/error feedback displayed via toast notifications

2. **Inquiry Retrieval**:
   - GET endpoint at `/api/inquiries` returns all inquiries
   - Currently used for admin purposes (not exposed in UI)

## External Dependencies

### Production Dependencies
- **UI Framework**: React 18 with TypeScript support
- **Database**: Neon Database serverless PostgreSQL
- **Component Library**: Comprehensive set of Radix UI primitives
- **Validation**: Zod for runtime type checking and validation
- **Date Handling**: date-fns for date manipulation
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript strict mode for type safety
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: esbuild bundles Express server to single file
3. **Output**: Frontend assets in `dist/public`, server in `dist/index.js`

### Environment Configuration
- **Development**: Uses `tsx` for TypeScript execution with hot reload
- **Production**: Compiled JavaScript with optimized bundling
- **Database**: Environment variable `DATABASE_URL` for connection

### File Structure
- **Monorepo Layout**: Shared schemas, separate client/server directories
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)
- **Asset Management**: Vite handles static assets and bundling

### Key Features
- **Modern Dark Theme**: Professional dark UI inspired by Orchids design
- **3D Visual Elements**: Floating animations and interactive components
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Type Safety**: End-to-end TypeScript with shared types
- **Email Integration**: Nodemailer for contact form notifications
- **Team Showcase**: Professional team member profiles with photos
- **Project Portfolio**: Featured company projects and case studies
- **Modern Development**: Hot module replacement and fast refresh
- **Production Ready**: Optimized builds and proper error handling

## Recent Changes (January 2025)
- ✅ Implemented modern dark theme with green accent colors
- ✅ Added 3D floating animations and visual effects
- ✅ Created team section with leadership and development teams
- ✅ Built projects section showcasing ACCU Design and Engineering Hub
- ✅ Integrated Nodemailer for contact form email notifications
- ✅ Updated all contact details (Mumbai, India location and phone number)
- ✅ Added LinkedIn integration for company profile
- ✅ Redesigned all sections with modern dark aesthetic
- ✅ Implemented responsive design for all screen sizes