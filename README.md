# AdSpark - Marketing Agency Website

## Overview
AdSpark is a complete multi-page marketing and advertising technology agency website built with React 18, Next.js (App Router), TypeScript, Supabase, and Tailwind CSS.

## Website Purpose
AdSpark is a MADTECH (Marketing Advertising Technology) agency that helps brands:
- Reach their target audiences
- Captivate customers with compelling storytelling
- Innovate through data-driven marketing strategies

## Multi-Page Structure

### Home Page (`/`)
- **Hero Section**: Bold gradient background (red to orange), main tagline "REACH. CAPTIVATE. INNOVATE.", two CTA buttons
- **Portfolio Section**: 4 featured case studies with client brands, metrics, and hover effects
- **Testimonials Section**: 3 client testimonials with ratings, photos, and company stats (500+ projects, 200+ clients, 98% retention)

### Who We Are Page (`/about`)
- Company story and mission statement
- 10+ years experience highlight
- 4 core values with icons:
  - Strategic Approach
  - Creative Innovation
  - Collaborative Partnership
  - Results-Driven
- Team section with 4 team members (photos, roles, bios)

### The Spark Page (`/services`)
- Detailed breakdown of 6 comprehensive services:
  - Digital Advertising (with 5 sub-services)
  - Marketing Analytics (with 5 sub-services)
  - Brand Strategy (with 5 sub-services)
  - Marketing Technology (with 5 sub-services)
  - Content Production (with 5 sub-services)
  - Social Media Management (with 5 sub-services)
- Alternating layout with images
- CTA section to contact

### Get in Touch Page (`/contact`)
- Full contact form with fields:
  - Name, Email (required)
  - Company, Phone (optional)
  - Service selection dropdown
  - Message (required)
- Form validation and submission to Supabase
- Success/error feedback messages
- Contact information (email, phone, address)
- Business hours display
- "What to Expect" section with benefits

### Footer (All Pages)
- Company information and logo
- Social media links (Facebook, Twitter, Instagram, LinkedIn, YouTube)
- Navigation organized by category (Company, Services, Resources)
- Copyright and legal links

## Technical Architecture

### Frontend Stack
- **React 18** with TypeScript
- **Next.js 15 App Router** for multi-page routing
- **Tailwind CSS** for styling
- **Lucide React** for icons
- Pure CSS animations (no external carousel libraries)

### Backend Stack
- **Supabase** for database and backend
- **PostgreSQL** database via Supabase
- **Row Level Security (RLS)** for data security
- Database migration system

### Database Schema
- `contact_submissions` table with:
  - Form data fields (name, email, company, phone, service, message)
  - Status tracking (new, contacted, closed)
  - Timestamps (created_at, updated_at)
  - Automatic timestamp updates via triggers
  - RLS policies for public submission and authenticated viewing

## Key Features

### Navigation
- Fixed navigation bar with backdrop blur on scroll
- Active page highlighting
- Smooth transitions between pages
- Responsive mobile menu

### Design System
- Red-to-orange gradient theme matching Figma design
- Consistent spacing and typography
- Hover animations and micro-interactions
- Smooth page transitions
- Fully responsive (mobile, tablet, desktop)
- Production-ready with clean, modern aesthetic

### Form Functionality
- Real-time form validation
- Supabase integration for data persistence
- Success/error message handling
- Loading states during submission
- Auto-clear form on success

### Performance
- Optimized images and videos from Pexels and GettyImages
- CSS animations for smooth UX
- Efficient routing with code splitting
- Fast build times with Vite

## Project Structure
```
app/
├── components/
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   ├── PortfolioSection.tsx
│   ├── TestimonialsSection.tsx
│   └── Footer.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── lib/
│   └── supabase.ts
├── layout.tsx
├── page.tsx
└── styles/
    └── global.css
```

## Setup Instructions

1. **Install Dependencies**: `npm install`
2. **Apply Database Migration**: See `database-setup-guide.md` for instructions
3. **Run Development**: `npm run dev`
4. **Build for Production**: `npm run build`

## Environment Variables
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

Both are already configured in the `.env` file.
