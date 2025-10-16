# Quick Start Guide
## Alexander & Co Solicitors LLP Website

## Getting Started in 3 Steps

### 1. Start Development Server

```bash
cd /Users/dev/new_websites/projects/aandco
npm run dev
```

Visit: **http://localhost:3000**

### 2. Build for Production

```bash
npm run build
```

### 3. Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI (one-time)
npm i -g vercel

# Deploy
vercel
```

---

## Project Location

```
📁 /Users/dev/new_websites/projects/aandco
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npm run typecheck` | TypeScript validation |

## Pages Built

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero and services |
| `/about` | Company information |
| `/services` | All services listing |
| `/services/[slug]` | Individual service pages (13 pages) |
| `/contact` | Contact form |

## Key Files to Know

### Content & Configuration
- `lib/constants.ts` - All site content and service data
- `tailwind.config.ts` - Brand colors and theme

### Layout Components
- `components/layout/Header.tsx` - Site navigation
- `components/layout/Footer.tsx` - Footer with links

### Pages
- `app/page.tsx` - Homepage
- `app/about/page.tsx` - About page
- `app/services/page.tsx` - Services listing
- `app/contact/page.tsx` - Contact form

## Making Changes

### Update Site Content
Edit: `lib/constants.ts`

```typescript
export const SITE_CONFIG = {
  name: "Alexander & Co Solicitors LLP",
  tagline: "LOCAL LAW FOR LIFE",
  phone: "01332 600005",
  // ... more content
};
```

### Update Brand Colors
Edit: `tailwind.config.ts`

```typescript
colors: {
  primary: {
    DEFAULT: "#94044C",  // Your burgundy
  },
  // ... more colors
}
```

### Add a New Service
Edit: `lib/constants.ts`

```typescript
export const SERVICES: Service[] = [
  // Add new service here
  {
    id: "new-service",
    title: "New Service",
    description: "Service description",
    category: "individuals",
    slug: "new-service",
  },
  // ...
];
```

## Build Status

✅ **Build**: Successful
✅ **Type Check**: Passing
✅ **Linting**: Clean
✅ **Production**: Ready

## Deploy Options

### Vercel (Recommended)
- Zero configuration
- Automatic deployments
- Free tier available
- **Command**: `vercel`

### Netlify
- Great for static sites
- Continuous deployment
- Free tier available
- **Command**: `netlify deploy`

### Other Platforms
- AWS Amplify
- Cloudflare Pages
- Railway
- Render

## Tech Stack

- **Framework**: Next.js 15.5.5
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.18
- **Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React

## Need Help?

### Common Issues

**Port 3000 already in use?**
```bash
# Use different port
PORT=3001 npm run dev
```

**Module not found?**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Documentation

- Full documentation: `docs/README.md`
- Implementation details: `docs/IMPLEMENTATION_SUMMARY.md`
- Next.js docs: https://nextjs.org/docs

## Contact Info (In Website)

- **Phone**: 01332 600005
- **Address**: 56 Friar Gate, Derby, DE1 1DF
- **Social Media**: Facebook, Twitter, Instagram, LinkedIn

---

**Ready to launch!** 🚀

All pages are built, tested, and production-ready.
