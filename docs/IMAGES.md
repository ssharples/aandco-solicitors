# Image Optimization Strategy

## Overview

This document outlines the image optimization strategy for the Alexander & Co website, including download procedures, optimization techniques, and implementation guidelines.

## Image Architecture

### Directory Structure

```
public/images/
├── alexander-and-co_logo.png       # Main logo
├── llfl_red.svg                     # Tagline logo (SVG)
├── services/
│   ├── for-individuals.jpg
│   └── for-business.jpg
├── articles/
│   ├── commercial-property-office.jpg
│   ├── solicitor-drafted-wills.jpg
│   ├── lost-title-deeds.jpg
│   └── couple-removing-rings.jpg
├── backgrounds/
│   ├── hero-1.jpg
│   └── hero-2.jpg
└── accreditations/
    ├── lexcel.png
    ├── wills-inheritance.png
    └── conveyancing-quality.png
```

## Image Manifest

The centralized image configuration is located at `lib/images.ts` and provides:

- **Type-safe image references**
- **Dimension information**
- **Alt text for accessibility**
- **Blur placeholder data URLs**
- **Priority loading flags**

### Usage Example

```typescript
import { IMAGES } from '@/lib/images';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

<OptimizedImage
  config={IMAGES.logo}
  sizes="(max-width: 768px) 200px, 300px"
/>
```

## Optimization Techniques

### 1. Next.js Image Component

All images use Next.js's built-in Image component for:
- Automatic format optimization (WebP/AVIF)
- Responsive image sizing
- Lazy loading by default
- Blur-up placeholders
- Layout shift prevention

### 2. Blur Placeholders

Low-quality image placeholders (LQIP) are embedded as base64 data URLs:
- Generated at build time
- ~20x20 pixel thumbnails
- Provides smooth loading experience
- Reduces perceived load time

### 3. Priority Loading

Critical above-the-fold images are marked with `priority: true`:
- Main logo
- Hero background image
- No lazy loading for these assets
- Preloaded for immediate display

### 4. Responsive Sizes

Images use the `sizes` attribute to serve appropriate resolutions:

```typescript
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
```

This tells the browser:
- Mobile: 100% viewport width
- Tablet: 80% viewport width
- Desktop: Fixed 1200px max

## Component Library

### OptimizedImage

Standard image component with automatic optimization:

```tsx
<OptimizedImage
  config={IMAGES.services.individuals}
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={85}
/>
```

### BackgroundImage

For full-width/height background images:

```tsx
<div className="relative h-screen">
  <BackgroundImage config={IMAGES.backgrounds.hero1} />
  <div className="relative z-10">Content</div>
</div>
```

### Logo

Specialized component for logo rendering:

```tsx
<Logo
  config={IMAGES.logo}
  maxWidth={300}
  priority={true}
/>
```

### ResponsiveImage

Handles art direction for different viewports:

```tsx
<ResponsiveImage
  config={IMAGES.backgrounds.hero1}
  mobileConfig={IMAGES.backgrounds.heroMobile}
  tabletConfig={IMAGES.backgrounds.heroTablet}
/>
```

## Download Procedures

### Manual Download

For initial setup or updates:

```bash
# Create directory structure
mkdir -p public/images/{services,articles,backgrounds,accreditations}

# Download images using curl
curl -o public/images/alexander-and-co_logo.png \
  "https://www.aandco.co.uk/images/logos/alexander-and-co_logo.png"

curl -o public/images/services/for-individuals.jpg \
  "https://www.aandco.co.uk/uploadedimages/thumb/547/1539090475-for-individuals.jpg"

# Continue for all images...
```

### Automated Download Script

Create `scripts/download-images.sh`:

```bash
#!/bin/bash

# Base directories
IMAGES_DIR="public/images"
SOURCE_URL="https://www.aandco.co.uk"

# Create directories
mkdir -p "$IMAGES_DIR"/{services,articles,backgrounds,accreditations}

# Download logo
curl -o "$IMAGES_DIR/alexander-and-co_logo.png" \
  "$SOURCE_URL/images/logos/alexander-and-co_logo.png"

# Download service images
curl -o "$IMAGES_DIR/services/for-individuals.jpg" \
  "$SOURCE_URL/uploadedimages/thumb/547/1539090475-for-individuals.jpg"

# ... (continue for all images)

echo "✅ All images downloaded successfully"
```

## Performance Metrics

### Target Metrics

- **LCP (Largest Contentful Paint)**: < 2.5s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Image Load Time**: < 1.5s (3G)

### Optimization Results

- Original image sizes: ~2-5MB
- Optimized WebP/AVIF: ~200-500KB (80-90% reduction)
- Blur placeholders: ~1-2KB each
- Total image payload (initial): ~500KB

## Accessibility

### Alt Text Guidelines

1. **Descriptive**: Clearly describe image content
2. **Concise**: Keep under 125 characters
3. **Context-aware**: Relate to surrounding content
4. **No redundancy**: Don't repeat nearby text

### Examples

✅ Good:
```typescript
alt: "Alexander & Co office interior with modern furniture"
```

❌ Bad:
```typescript
alt: "Image" // Too vague
alt: "alexander-and-co-office-123.jpg" // Filename
```

## SEO Optimization

### Image Naming

- Use descriptive filenames: `commercial-property-office.jpg`
- Include keywords: `solicitor-drafted-wills.jpg`
- Use hyphens, not underscores: `for-individuals.jpg`

### Metadata

All images include:
- Proper dimensions (`width`/`height`)
- Descriptive `alt` text
- Appropriate MIME types
- Structured data markup (where applicable)

## Future Enhancements

### Planned Improvements

1. **WebP/AVIF Support**: Automatic format selection
2. **Art Direction**: Multiple sources for different viewports
3. **CDN Integration**: Cloudflare/Vercel image optimization
4. **Lazy Load Threshold**: Adjust for viewport size
5. **Progressive Enhancement**: Fallbacks for older browsers

### Image CDN Configuration

Future implementation with Cloudflare Images:

```typescript
const imageLoader = ({ src, width, quality }) => {
  return `https://images.aandco.co.uk/${src}?w=${width}&q=${quality || 75}`
}

<Image
  loader={imageLoader}
  src="hero-1.jpg"
  width={1200}
  height={800}
/>
```

## Maintenance

### Regular Tasks

1. **Audit image usage**: Remove unused images
2. **Update blur placeholders**: Regenerate if images change
3. **Monitor performance**: Check Core Web Vitals
4. **Optimize new images**: Follow guidelines for additions
5. **Test loading**: Verify on various connection speeds

### Tools

- **Next.js Image Analyzer**: Built-in optimization reporting
- **Lighthouse**: Performance auditing
- **WebPageTest**: Real-world loading simulation
- **ImageOptim**: Local image compression tool

## Troubleshooting

### Common Issues

**Image not loading:**
- Check file path in `public/images/`
- Verify filename matches exactly
- Ensure proper import in `lib/images.ts`

**Blur placeholder not working:**
- Verify `blurDataURL` is valid base64
- Check placeholder dimensions (should be ~20x20px)
- Ensure `placeholder="blur"` is set

**Layout shift:**
- Always provide `width` and `height`
- Use aspect ratio CSS when needed
- Test with throttled network

## Resources

- [Next.js Image Documentation](https://nextjs.org/docs/api-reference/next/image)
- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)

---

**Last Updated**: 2025-10-16
**Maintained By**: Asset Management Team
**Version**: 1.0.0
