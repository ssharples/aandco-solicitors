# Alexander & Co Solicitors LLP Website

A modern, production-ready Next.js website for Alexander & Co Solicitors LLP built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Next.js 15+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 3.4** for styling
- **shadcn/ui** components for UI consistency
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** with proper metadata
- **Static Site Generation** for optimal performance
- **Brand Colors** integrated throughout:
  - Primary: #94044C (Burgundy)
  - Secondary: #4E595A (Slate)
  - Accent: #1863DC (Blue)

## Project Structure

```
/Users/dev/new_websites/projects/aandco/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact page with form
│   └── services/
│       ├── page.tsx            # Services listing
│       └── [slug]/
│           └── page.tsx        # Dynamic service pages
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Site header with navigation
│   │   └── Footer.tsx          # Site footer
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section
│   │   └── Services.tsx        # Services grid
│   └── ui/                     # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── separator.tsx
├── lib/
│   ├── constants.ts            # Site constants and content
│   └── utils.ts                # Utility functions
└── docs/
    └── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd /Users/dev/new_websites/projects/aandco
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npm run typecheck
```

## Pages

### Home (`/`)
- Hero section with company tagline
- Key messages about the firm's approach
- Preview of services (6 services shown)

### About (`/about`)
- Company information and values
- Core values with icons
- Office location and contact details
- LEXCEL quality standard information

### Services (`/services`)
- Complete listing of all services
- Separated into "For Individuals" and "For Business"
- Each service links to detailed page

### Service Detail (`/services/[slug]`)
- Detailed information about specific service
- Related services section
- Contact CTA with phone and form options
- 13 dynamic routes generated at build time

### Contact (`/contact`)
- Contact form with validation
- Office information and hours
- Social media links
- Map location details

## Services Available

### For Individuals:
- Property
- Wills
- Relationship Breakdowns
- Disputes
- Landlord and Tenant
- Powers Of Attorney
- Personal Injury
- Probate
- Settlement Agreements

### For Business:
- Property
- Landlord and Tenant
- Disputes
- Licensing

## Components

### Layout Components

- **Header**: Sticky navigation with mobile menu
- **Footer**: Company info, quick links, social media

### Section Components

- **Hero**: Homepage hero section with CTA buttons
- **Services**: Reusable services grid with filtering

### UI Components (shadcn/ui)

- Button
- Card
- Separator

## Styling

### Tailwind Configuration

Brand colors are configured in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#94044C",  // Burgundy
    // ... additional shades
  },
  secondary: {
    DEFAULT: "#4E595A",  // Slate
  },
  accent: {
    DEFAULT: "#1863DC",  // Blue
  },
}
```

### CSS Variables

Custom CSS variables in `app/globals.css` for consistent theming across the application.

## TypeScript

The project is fully typed with TypeScript. Key types are defined in:

- `lib/constants.ts` - Service type and constants
- Component props are properly typed throughout

## Performance

- **Static Site Generation**: All pages are pre-rendered at build time
- **Optimized Images**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Tailwind CSS purging unused styles

## SEO

- Proper metadata configuration in `app/layout.tsx`
- Individual page metadata in each route
- Semantic HTML structure
- Proper heading hierarchy

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

This application can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any hosting service supporting Node.js**

### Vercel Deployment

```bash
npm i -g vercel
vercel
```

## Environment Variables

No environment variables required for basic functionality.

For production, you may want to add:

- `NEXT_PUBLIC_SITE_URL` - Your domain
- Analytics tracking IDs
- Contact form submission endpoints

## License

Copyright © 2025 Alexander & Co Solicitors LLP. All rights reserved.

## Support

For issues or questions about this website, contact the development team.

---

Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui
