# Image Download Guide

## Manual Download Required

The automated download script encountered network restrictions. Please download images manually using the following steps:

## Download Instructions

### Method 1: Browser Download

1. Open your browser and visit each URL below
2. Right-click and "Save Image As..."
3. Save to the corresponding directory

### Method 2: Command Line (one at a time)

```bash
cd /Users/dev/new_websites/projects/aandco/public/images
```

#### Logos

```bash
# Main logo
curl -L "https://www.aandco.co.uk/images/logos/alexander-and-co_logo.png" \
  -o "alexander-and-co_logo.png"

# Tagline logo
curl -L "https://www.aandco.co.uk/images/logos/llfl_red.svg" \
  -o "llfl_red.svg"
```

#### Service Images

```bash
mkdir -p services
cd services

curl -L "https://www.aandco.co.uk/uploadedimages/thumb/547/1539090475-for-individuals.jpg" \
  -o "for-individuals.jpg"

curl -L "https://www.aandco.co.uk/uploadedimages/thumb/547/1539090474-for-business.jpg" \
  -o "for-business.jpg"

cd ..
```

#### Article Images

```bash
mkdir -p articles
cd articles

curl -L "https://www.aandco.co.uk/uploadedimages/thumb/510/1759421460-commericial-property-office-image.jpg" \
  -o "commercial-property-office.jpg"

curl -L "https://www.aandco.co.uk/uploadedimages/thumb/510/1754914672-solicitor-drafted-wills.jpg" \
  -o "solicitor-drafted-wills.jpg"

curl -L "https://www.aandco.co.uk/uploadedimages/thumb/510/1752573437-lost-title-deeds-image.jpg" \
  -o "lost-title-deeds.jpg"

curl -L "https://www.aandco.co.uk/uploadedimages/thumb/510/1751903515-couple-removing-rings-during-divorce.jpg" \
  -o "couple-removing-rings.jpg"

cd ..
```

#### Background Images

```bash
mkdir -p backgrounds
cd backgrounds

curl -L "https://www.aandco.co.uk/uploadedimages/thumb/0_680_5020_3226/1110/1545237526-d70r2271-edit.jpg" \
  -o "hero-1.jpg"

curl -L "https://www.aandco.co.uk/uploadedimages/thumb/0_412_5184_3041/1110/1547459820-d70r2512.jpg" \
  -o "hero-2.jpg"

cd ..
```

#### Accreditation Logos

```bash
mkdir -p accreditations
cd accreditations

curl -L "https://www.aandco.co.uk/images/elements/dev/2024%20LS%20Accreditation%20Lexcel%20web.png" \
  -o "lexcel.png"

curl -L "https://www.aandco.co.uk/images/elements/dev/2024%20LS%20Accreditation%20Wills%20and%20INheritance%20Quality%20web.png" \
  -o "wills-inheritance.png"

curl -L "https://www.aandco.co.uk/images/elements/dev/2024%20CQS%20Logo%20web.png" \
  -o "conveyancing-quality.png"
```

## Image List with URLs

| Category | Filename | URL |
|----------|----------|-----|
| Logo | alexander-and-co_logo.png | https://www.aandco.co.uk/images/logos/alexander-and-co_logo.png |
| Logo | llfl_red.svg | https://www.aandco.co.uk/images/logos/llfl_red.svg |
| Service | for-individuals.jpg | https://www.aandco.co.uk/uploadedimages/thumb/547/1539090475-for-individuals.jpg |
| Service | for-business.jpg | https://www.aandco.co.uk/uploadedimages/thumb/547/1539090474-for-business.jpg |
| Article | commercial-property-office.jpg | https://www.aandco.co.uk/uploadedimages/thumb/510/1759421460-commericial-property-office-image.jpg |
| Article | solicitor-drafted-wills.jpg | https://www.aandco.co.uk/uploadedimages/thumb/510/1754914672-solicitor-drafted-wills.jpg |
| Article | lost-title-deeds.jpg | https://www.aandco.co.uk/uploadedimages/thumb/510/1752573437-lost-title-deeds-image.jpg |
| Article | couple-removing-rings.jpg | https://www.aandco.co.uk/uploadedimages/thumb/510/1751903515-couple-removing-rings-during-divorce.jpg |
| Background | hero-1.jpg | https://www.aandco.co.uk/uploadedimages/thumb/0_680_5020_3226/1110/1545237526-d70r2271-edit.jpg |
| Background | hero-2.jpg | https://www.aandco.co.uk/uploadedimages/thumb/0_412_5184_3041/1110/1547459820-d70r2512.jpg |
| Accreditation | lexcel.png | https://www.aandco.co.uk/images/elements/dev/2024%20LS%20Accreditation%20Lexcel%20web.png |
| Accreditation | wills-inheritance.png | https://www.aandco.co.uk/images/elements/dev/2024%20LS%20Accreditation%20Wills%20and%20INheritance%20Quality%20web.png |
| Accreditation | conveyancing-quality.png | https://www.aandco.co.uk/images/elements/dev/2024%20CQS%20Logo%20web.png |

## Verification

After downloading, verify the structure:

```bash
cd /Users/dev/new_websites/projects/aandco/public/images
tree
```

Expected output:
```
.
├── alexander-and-co_logo.png
├── llfl_red.svg
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

## Next Steps

1. Download all images using preferred method
2. Run `npm run dev` to test image loading
3. Verify images appear correctly in browser
4. Check browser DevTools Network tab for optimization
5. Run Lighthouse audit for performance metrics

## Troubleshooting

- **404 errors**: URLs may have changed, check source website
- **CORS errors**: Use browser download or wget with user agent
- **File permissions**: Ensure write access to public/images/
- **Missing directories**: Run `mkdir -p public/images/{services,articles,backgrounds,accreditations}`
