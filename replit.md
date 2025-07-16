# TECHNEWITY LABS Landing Page

## Overview

This is a modern, full-stack web application for TECHNEWITY LABS, a technology consulting company. The application features a sleek landing page with contact form functionality, built using React, Express, and PostgreSQL with Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

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

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling
- **Hero Section**: Gradient background with call-to-action buttons
- **Services Section**: Three main service offerings with icons
- **Features Section**: Company value propositions
- **Contact Section**: Form with validation and submission handling
- **Footer**: Company information and social links

### Backend Services
- **Storage Interface**: Abstracted storage layer supporting multiple implementations
- **Inquiry Management**: CRUD operations for contact form submissions
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
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Type Safety**: End-to-end TypeScript with shared types
- **Modern Development**: Hot module replacement and fast refresh
- **Production Ready**: Optimized builds and proper error handling