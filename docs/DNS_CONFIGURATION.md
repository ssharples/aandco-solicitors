# DNS Configuration Guide for A&Co Solicitors

## Overview

This guide provides instructions for configuring a custom domain to point to your Vercel deployment.

**Current Vercel URL**: https://aandco-5x3ygqqi3-ssharples-projects.vercel.app

---

## Option 1: Cloudflare DNS Configuration (Automated)

If you manage DNS through Cloudflare with the domain `blosm.dev`, you can use the automated script.

### Prerequisites
- Cloudflare account with API access
- Python 3 installed
- `requests` library installed (`pip3 install requests`)

### Automated Setup

1. **Update the Cloudflare script** with your details:
   ```bash
   nano /Users/dev/new_websites/Scripts/cloudflare-subdomain-creation.py
   ```

2. **Modify the usage example** at the bottom of the script:
   ```python
   create_cloudflare_subdomain(
       api_token="YOUR_CLOUDFLARE_API_TOKEN",
       zone_id="YOUR_ZONE_ID",
       subdomain="aandco",
       root_domain="blosm.dev",
       vercel_cname="cname.vercel-dns.com"
   )
   ```

3. **Run the script**:
   ```bash
   python3 /Users/dev/new_websites/Scripts/cloudflare-subdomain-creation.py
   ```

4. **Add domain to Vercel**:
   ```bash
   cd /Users/dev/new_websites/projects/aandco
   vercel domains add aandco.blosm.dev
   ```

### Expected Result
- Subdomain: `aandco.blosm.dev`
- DNS Record Type: CNAME
- Points to: `cname.vercel-dns.com`
- Proxy Status: Disabled (DNS only)

---

## Option 2: Manual Cloudflare Configuration

### Step 1: Create DNS Record in Cloudflare

1. **Log in to Cloudflare Dashboard**:
   - Go to https://dash.cloudflare.com
   - Select your domain (e.g., `blosm.dev`)

2. **Navigate to DNS Settings**:
   - Click on "DNS" in the left sidebar
   - Click "Add record"

3. **Configure the CNAME Record**:
   ```
   Type: CNAME
   Name: aandco
   Target: cname.vercel-dns.com
   Proxy status: DNS only (gray cloud)
   TTL: Auto
   ```

4. **Save the Record**

### Step 2: Add Domain to Vercel

**Option A: Via Vercel CLI**
```bash
cd /Users/dev/new_websites/projects/aandco
vercel domains add aandco.blosm.dev
```

**Option B: Via Vercel Dashboard**
1. Go to https://vercel.com/ssharples-projects/aandco
2. Click "Settings" > "Domains"
3. Enter `aandco.blosm.dev`
4. Click "Add"

### Step 3: Verify Configuration

Wait 5-10 minutes for DNS propagation, then verify:

```bash
# Check DNS record
dig aandco.blosm.dev

# Check SSL certificate
curl -I https://aandco.blosm.dev
```

---

## Option 3: Generic DNS Provider Configuration

For other DNS providers (GoDaddy, Namecheap, etc.):

### For Subdomain (e.g., www.yourdomain.com)

1. **Add CNAME Record**:
   ```
   Type: CNAME
   Host: aandco (or www)
   Value: cname.vercel-dns.com
   TTL: 3600 (or automatic)
   ```

2. **Add to Vercel**:
   ```bash
   vercel domains add aandco.yourdomain.com
   ```

### For Root Domain (e.g., yourdomain.com)

1. **Add A Record**:
   ```
   Type: A
   Host: @ (or leave blank)
   Value: 76.76.21.21
   TTL: 3600
   ```

2. **Add AAAA Records** (IPv6):
   ```
   Type: AAAA
   Host: @ (or leave blank)
   Value: 2606:4700:4700::1111
   TTL: 3600
   ```

3. **Add to Vercel**:
   ```bash
   vercel domains add yourdomain.com
   ```

---

## Option 4: Vercel Domain (No Custom Domain Needed)

If you don't need a custom domain, you can use Vercel's default domains:

### Current Available URLs
- **Production**: https://aandco-5x3ygqqi3-ssharples-projects.vercel.app
- **Alternative**: You can request a vercel.app subdomain via Vercel dashboard

### Benefits
- Instant availability
- Automatic HTTPS
- No DNS configuration needed
- Free

### Drawbacks
- Less professional appearance
- Longer URL
- Not branded to your business

---

## SSL/TLS Configuration

### Automatic SSL
Vercel provides automatic SSL certificates for all domains:
- Free SSL certificates via Let's Encrypt
- Automatic renewal
- TLS 1.3 support
- No configuration required

### Certificate Verification
Once your domain is added and DNS is configured:

1. **Check certificate status**:
   ```bash
   vercel domains ls
   ```

2. **Force certificate renewal** (if needed):
   ```bash
   vercel certs renew aandco.blosm.dev
   ```

---

## Cloudflare Proxy Configuration

### Recommended Settings for Cloudflare

If using Cloudflare's proxy (orange cloud):

1. **SSL/TLS Mode**: Full (strict)
   - Go to SSL/TLS > Overview
   - Select "Full (strict)"

2. **Always Use HTTPS**: Enabled
   - Go to SSL/TLS > Edge Certificates
   - Enable "Always Use HTTPS"

3. **Automatic HTTPS Rewrites**: Enabled
   - In the same section
   - Enable "Automatic HTTPS Rewrites"

4. **Minimum TLS Version**: 1.2 or higher
   - Set in SSL/TLS > Edge Certificates

### Performance Optimization with Cloudflare

1. **Enable Caching**:
   - Go to Caching > Configuration
   - Set "Caching Level" to Standard
   - Enable "Browser Cache TTL"

2. **Enable Brotli Compression**:
   - Go to Speed > Optimization
   - Enable Brotli

3. **Enable Auto Minify**:
   - Go to Speed > Optimization
   - Enable for JavaScript, CSS, and HTML

4. **Enable Rocket Loader** (Optional):
   - Can improve load times
   - Test to ensure compatibility

---

## Verification Checklist

After DNS configuration, verify the following:

- [ ] DNS record created (CNAME or A)
- [ ] Domain added to Vercel
- [ ] DNS propagated (check with `dig` or online tools)
- [ ] SSL certificate issued (HTTPS working)
- [ ] Site accessible via custom domain
- [ ] Redirects working (www to non-www or vice versa)
- [ ] Cloudflare proxy configured correctly (if applicable)
- [ ] All pages load correctly
- [ ] Forms and contact functionality working

### Verification Commands

```bash
# Check DNS resolution
dig aandco.blosm.dev
nslookup aandco.blosm.dev

# Check SSL certificate
openssl s_client -connect aandco.blosm.dev:443 -servername aandco.blosm.dev

# Check HTTP headers
curl -I https://aandco.blosm.dev

# Check site accessibility
curl https://aandco.blosm.dev
```

---

## Troubleshooting

### Common Issues

**1. DNS Not Propagating**
- Wait 24-48 hours for full global propagation
- Clear local DNS cache:
  ```bash
  # macOS
  sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

  # Windows
  ipconfig /flushdns

  # Linux
  sudo systemd-resolve --flush-caches
  ```

**2. SSL Certificate Not Issued**
- Verify DNS is pointing correctly to Vercel
- Check that domain is added in Vercel dashboard
- Wait up to 24 hours for certificate issuance
- Ensure no CAA DNS records blocking Let's Encrypt

**3. 404 Errors**
- Verify domain is configured in Vercel project settings
- Check that domain is assigned to correct project
- Redeploy the project: `vercel --prod`

**4. Cloudflare 525 Error**
- Change SSL/TLS mode to "Full" or "Full (strict)"
- Verify origin server (Vercel) has valid SSL certificate

**5. Too Many Redirects**
- Check Cloudflare SSL/TLS mode
- Verify redirect rules in Vercel
- Disable Cloudflare "Always Use HTTPS" temporarily for testing

---

## Domain Management

### Multiple Domains
You can add multiple domains to the same Vercel project:

```bash
# Add www subdomain
vercel domains add www.aandco.blosm.dev

# Add alternative domain
vercel domains add alexanderandco.com
```

### Domain Redirects
Configure redirects in `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "www.aandco.blosm.dev",
      "destination": "https://aandco.blosm.dev",
      "permanent": true
    }
  ]
}
```

### Remove Domain
If you need to remove a domain:

```bash
vercel domains rm aandco.blosm.dev
```

---

## Cost Considerations

### Cloudflare
- **Free Plan**: Suitable for most small business websites
  - Unlimited bandwidth
  - Basic DDoS protection
  - Basic SSL certificate
  - DNS management

### Vercel
- **Hobby Plan**: Free
  - Personal and non-commercial projects
  - 100 GB bandwidth per month
  - Unlimited websites
  - Automatic HTTPS

- **Pro Plan**: $20/month
  - Commercial projects
  - 1 TB bandwidth
  - Advanced analytics
  - Password protection
  - Priority support

### Domain Registration
- Annual cost varies by registrar: $10-20/year
- .com, .co.uk typical for UK solicitors
- .law, .legal premium options available

---

## Security Best Practices

1. **Enable DNSSEC**:
   - In Cloudflare: DNS > Settings > DNSSEC
   - Provides authentication for DNS responses

2. **Configure Security Headers**:
   Add to `vercel.json`:
   ```json
   {
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           { "key": "X-Frame-Options", "value": "DENY" },
           { "key": "X-Content-Type-Options", "value": "nosniff" },
           { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
           { "key": "Permissions-Policy", "value": "geolocation=(), microphone=(), camera=()" }
         ]
       }
     ]
   }
   ```

3. **Enable WAF** (Cloudflare Pro+):
   - Web Application Firewall
   - Protection against common vulnerabilities

4. **Rate Limiting**:
   - Protect contact forms from spam
   - Configure in Cloudflare or at application level

---

## Support Resources

### Vercel Support
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions
- Support: support@vercel.com (Pro plan)

### Cloudflare Support
- Documentation: https://developers.cloudflare.com
- Community: https://community.cloudflare.com
- Support: Enterprise plans only

### DNS Tools
- DNS Propagation Checker: https://dnschecker.org
- SSL Checker: https://www.sslshopper.com/ssl-checker.html
- What's My DNS: https://whatsmydns.net

---

## Quick Reference

### Current URLs
- **Vercel Production**: https://aandco-5x3ygqqi3-ssharples-projects.vercel.app
- **GitHub Repository**: https://github.com/ssharples/aandco-solicitors
- **Custom Domain**: Not yet configured (use guides above)

### Key Commands
```bash
# Add domain to Vercel
vercel domains add aandco.blosm.dev

# List configured domains
vercel domains ls

# Check DNS
dig aandco.blosm.dev

# Redeploy
vercel --prod
```

### Cloudflare Script Location
`/Users/dev/new_websites/Scripts/cloudflare-subdomain-creation.py`

---

**Need Help?**
If you encounter issues not covered in this guide, please refer to the main DEPLOYMENT.md file or contact your DNS provider's support team.
