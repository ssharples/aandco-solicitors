# A&Co Solicitors - Deployment Documentation

## Deployment Summary

**Status**: Successfully deployed to production

**Deployment Date**: October 16, 2025

---

## GitHub Repository

**Repository URL**: https://github.com/ssharples/aandco-solicitors

**Repository Type**: Public

**Description**: Modern Next.js website for Alexander & Co Solicitors LLP - Derbyshire law firm specializing in residential and commercial property law

### Repository Features
- Modern Next.js 14 with App Router
- TypeScript and Tailwind CSS
- shadcn/ui components
- Responsive design with brand colors
- 20 static pages generated
- Production-ready build

---

## Vercel Deployment

**Production URL**: https://aandco-5x3ygqqi3-ssharples-projects.vercel.app

**Deployment Status**: Ready and Live

**Project Name**: aandco

**Build Time**: 51 seconds

**Deployment Method**: Vercel CLI with automatic GitHub integration

### Vercel Configuration
- **Framework**: Next.js
- **Build Command**: `next build`
- **Development Command**: `next dev --port $PORT`
- **Install Command**: Automatic (npm/yarn/pnpm/bun)
- **Output Directory**: Next.js default (.next)

### Deployment Commands
```bash
# Check deployment status
vercel ls --prod

# View deployment logs
vercel inspect aandco-5x3ygqqi3-ssharples-projects.vercel.app --logs

# Redeploy current version
vercel redeploy aandco-5x3ygqqi3-ssharples-projects.vercel.app

# Deploy new version
cd /Users/dev/new_websites/projects/aandco
vercel --prod
```

---

## DNS Configuration

### Current Status
The site is currently accessible via Vercel's default domain:
- **Vercel URL**: https://aandco-5x3ygqqi3-ssharples-projects.vercel.app

### Custom Domain Setup (Optional)

To configure a custom domain (e.g., aandco.example.com):

#### Option 1: Via Vercel Dashboard
1. Go to https://vercel.com/ssharples-projects/aandco
2. Navigate to Settings > Domains
3. Add your custom domain
4. Follow Vercel's DNS configuration instructions

#### Option 2: Via Cloudflare (Automated)
If you have access to Cloudflare, you can use the automated script:

```bash
python3 /Users/dev/new_websites/Scripts/cloudflare-subdomain-creation.py
```

**Required Information**:
- Subdomain: aandco (or your preferred subdomain)
- Target: aandco-5x3ygqqi3-ssharples-projects.vercel.app
- Type: CNAME

**DNS Records to Create**:
```
Type: CNAME
Name: aandco (or www.aandco)
Value: cname.vercel-dns.com
Proxy: Enabled (orange cloud)
```

#### Option 3: Manual DNS Configuration
Add the following DNS records in your domain registrar:

**For root domain (example.com)**:
```
Type: A
Name: @
Value: 76.76.21.21
```

**For subdomain (aandco.example.com)**:
```
Type: CNAME
Name: aandco
Value: cname.vercel-dns.com
```

---

## Continuous Deployment

### Automatic Deployments
The repository is connected to Vercel with automatic deployments:

- **Production Branch**: `main`
  - Automatic deployment to production URL
  - Triggered on every push to main branch

- **Preview Deployments**: All branches
  - Automatic preview URLs for pull requests
  - Testing environment before merging

### GitHub Integration
- Connected repository: https://github.com/ssharples/aandco-solicitors
- Branch protection: Can be configured in GitHub settings
- Status checks: Vercel deployment status visible in PRs

---

## Monitoring and Analytics

### Vercel Analytics
Access deployment analytics at:
https://vercel.com/ssharples-projects/aandco/analytics

**Metrics Available**:
- Page views and visitors
- Performance metrics (Core Web Vitals)
- Geographic distribution
- Device and browser statistics

### Vercel Logs
View deployment logs:
```bash
vercel logs aandco-5x3ygqqi3-ssharples-projects.vercel.app
```

---

## Environment Variables

### Current Configuration
No environment variables required for current deployment.

### Adding Environment Variables
If needed in future (API keys, database URLs, etc.):

**Via CLI**:
```bash
vercel env add VARIABLE_NAME
```

**Via Dashboard**:
1. Go to https://vercel.com/ssharples-projects/aandco/settings/environment-variables
2. Add variable name and value
3. Select environments (Production, Preview, Development)
4. Save changes

---

## Build Configuration

### Next.js Configuration
Located in `/next.config.ts`:
```typescript
const nextConfig = {
  output: 'export', // Static export
  images: {
    unoptimized: true, // Required for static export
  },
};
```

### Package Configuration
- **Framework**: Next.js 15.1.6
- **React**: 19.0.0
- **TypeScript**: 5.x
- **Tailwind CSS**: 3.4.1

---

## Performance Optimization

### Static Generation
All pages are statically generated at build time:
- Home page (/)
- About page (/about)
- Contact page (/contact)
- Services overview (/services)
- 16 individual service pages (/services/[slug])

### Image Optimization
- Using Next.js Image component
- Placeholder images with proper sizing
- Lazy loading enabled
- WebP format support

### Bundle Size
Optimized production build with:
- Code splitting
- Tree shaking
- Minification
- Compression (gzip/brotli)

---

## Security

### HTTPS
- Automatic HTTPS via Vercel
- TLS 1.3 support
- Automatic certificate renewal

### Headers
Vercel automatically sets security headers:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy

---

## Rollback Procedure

If issues occur with the latest deployment:

1. **View deployment history**:
```bash
vercel ls
```

2. **Promote previous deployment**:
```bash
vercel promote [deployment-url] --scope ssharples-projects
```

3. **Or redeploy previous commit**:
```bash
git checkout [previous-commit-hash]
vercel --prod
```

---

## Support and Troubleshooting

### Common Issues

**Build Failures**:
- Check build logs: `vercel inspect [deployment-url] --logs`
- Verify all dependencies are in package.json
- Check for TypeScript errors locally

**404 Errors**:
- Verify static export is configured correctly
- Check file paths and casing (case-sensitive in production)
- Review Next.js routing configuration

**Performance Issues**:
- Review Vercel Analytics for slow pages
- Check image optimization settings
- Consider implementing caching strategies

### Getting Help
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- GitHub Issues: https://github.com/ssharples/aandco-solicitors/issues

---

## Maintenance

### Regular Updates
- Monitor for Next.js updates
- Update dependencies monthly
- Review security advisories
- Check Vercel platform updates

### Backup Strategy
- Code: Backed up on GitHub
- Configuration: Stored in repository
- Environment variables: Document separately
- DNS records: Document in this file

---

## Access and Credentials

### Vercel Account
- **Organization**: ssharples-projects
- **Project**: aandco
- **Dashboard**: https://vercel.com/ssharples-projects/aandco

### GitHub Repository
- **Owner**: ssharples
- **Repository**: aandco-solicitors
- **URL**: https://github.com/ssharples/aandco-solicitors

---

## Next Steps

1. **Configure Custom Domain** (Optional)
   - Register domain or use existing
   - Configure DNS records
   - Add domain in Vercel dashboard

2. **Set Up Monitoring** (Recommended)
   - Enable Vercel Analytics
   - Configure uptime monitoring
   - Set up error tracking (e.g., Sentry)

3. **Implement Analytics** (Optional)
   - Google Analytics
   - Plausible Analytics
   - Other privacy-focused alternatives

4. **Content Updates**
   - Replace placeholder images with real photos
   - Update contact information if needed
   - Review and refine page content
   - Add actual solicitor profiles

5. **SEO Optimization**
   - Add sitemap.xml
   - Configure robots.txt
   - Implement structured data
   - Add meta descriptions

---

## Deployment Checklist

- [x] Git repository initialized
- [x] GitHub repository created
- [x] Code pushed to GitHub
- [x] Vercel deployment configured
- [x] Production deployment successful
- [x] GitHub-Vercel integration active
- [x] Deployment documentation created
- [ ] Custom domain configured (optional)
- [ ] DNS records updated (optional)
- [ ] Analytics configured (optional)
- [ ] Monitoring set up (optional)

---

**Deployment completed successfully on October 16, 2025**

Live site: https://aandco-5x3ygqqi3-ssharples-projects.vercel.app
