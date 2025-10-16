#!/bin/bash

###############################################################################
# Image Download Script for Alexander & Co Website
#
# Downloads all required images from the source website and organizes them
# into the appropriate directory structure.
#
# Usage: ./scripts/download-images.sh
###############################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT="/Users/dev/new_websites/projects/aandco"
IMAGES_DIR="${PROJECT_ROOT}/public/images"
SOURCE_URL="https://www.aandco.co.uk"

# Counter for statistics
TOTAL_IMAGES=0
SUCCESS_COUNT=0
FAILED_COUNT=0

echo "🖼️  Alexander & Co Image Download Script"
echo "========================================="
echo ""

# Function to download with retry
download_image() {
    local url=$1
    local output=$2
    local description=$3

    TOTAL_IMAGES=$((TOTAL_IMAGES + 1))

    echo -n "Downloading ${description}... "

    if curl -f -s -o "$output" "$url"; then
        echo -e "${GREEN}✓${NC}"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        return 0
    else
        echo -e "${RED}✗${NC}"
        FAILED_COUNT=$((FAILED_COUNT + 1))
        return 1
    fi
}

# Create directory structure
echo "📁 Creating directory structure..."
mkdir -p "$IMAGES_DIR"/{services,articles,backgrounds,accreditations}
echo -e "${GREEN}✓${NC} Directories created"
echo ""

# Download Logo
echo "🏢 Downloading logos..."
download_image \
    "$SOURCE_URL/images/logos/alexander-and-co_logo.png" \
    "$IMAGES_DIR/alexander-and-co_logo.png" \
    "Main logo"

download_image \
    "$SOURCE_URL/images/logos/llfl_red.svg" \
    "$IMAGES_DIR/llfl_red.svg" \
    "Tagline logo"
echo ""

# Download Service Images
echo "💼 Downloading service images..."
download_image \
    "$SOURCE_URL/uploadedimages/thumb/547/1539090475-for-individuals.jpg" \
    "$IMAGES_DIR/services/for-individuals.jpg" \
    "For Individuals"

download_image \
    "$SOURCE_URL/uploadedimages/thumb/547/1539090474-for-business.jpg" \
    "$IMAGES_DIR/services/for-business.jpg" \
    "For Business"
echo ""

# Download Article Images
echo "📰 Downloading article images..."
download_image \
    "$SOURCE_URL/uploadedimages/thumb/510/1759421460-commericial-property-office-image.jpg" \
    "$IMAGES_DIR/articles/commercial-property-office.jpg" \
    "Commercial property"

download_image \
    "$SOURCE_URL/uploadedimages/thumb/510/1754914672-solicitor-drafted-wills.jpg" \
    "$IMAGES_DIR/articles/solicitor-drafted-wills.jpg" \
    "Wills and estate"

download_image \
    "$SOURCE_URL/uploadedimages/thumb/510/1752573437-lost-title-deeds-image.jpg" \
    "$IMAGES_DIR/articles/lost-title-deeds.jpg" \
    "Title deeds"

download_image \
    "$SOURCE_URL/uploadedimages/thumb/510/1751903515-couple-removing-rings-during-divorce.jpg" \
    "$IMAGES_DIR/articles/couple-removing-rings.jpg" \
    "Divorce consultation"
echo ""

# Download Background Images
echo "🏞️  Downloading background images..."
download_image \
    "$SOURCE_URL/uploadedimages/thumb/0_680_5020_3226/1110/1545237526-d70r2271-edit.jpg" \
    "$IMAGES_DIR/backgrounds/hero-1.jpg" \
    "Hero background 1"

download_image \
    "$SOURCE_URL/uploadedimages/thumb/0_412_5184_3041/1110/1547459820-d70r2512.jpg" \
    "$IMAGES_DIR/backgrounds/hero-2.jpg" \
    "Hero background 2"
echo ""

# Download Accreditation Logos
echo "🏆 Downloading accreditation logos..."
download_image \
    "$SOURCE_URL/images/elements/dev/2024%20LS%20Accreditation%20Lexcel%20web.png" \
    "$IMAGES_DIR/accreditations/lexcel.png" \
    "Lexcel accreditation"

download_image \
    "$SOURCE_URL/images/elements/dev/2024%20LS%20Accreditation%20Wills%20and%20INheritance%20Quality%20web.png" \
    "$IMAGES_DIR/accreditations/wills-inheritance.png" \
    "Wills & Inheritance"

download_image \
    "$SOURCE_URL/images/elements/dev/2024%20CQS%20Logo%20web.png" \
    "$IMAGES_DIR/accreditations/conveyancing-quality.png" \
    "Conveyancing Quality"
echo ""

# Summary
echo "========================================="
echo "📊 Download Summary"
echo "========================================="
echo -e "Total images: ${TOTAL_IMAGES}"
echo -e "${GREEN}Successful: ${SUCCESS_COUNT}${NC}"
if [ $FAILED_COUNT -gt 0 ]; then
    echo -e "${RED}Failed: ${FAILED_COUNT}${NC}"
fi
echo ""

# Check if all downloads succeeded
if [ $FAILED_COUNT -eq 0 ]; then
    echo -e "${GREEN}✅ All images downloaded successfully!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Run 'npm run dev' to start the development server"
    echo "2. Verify images load correctly on the website"
    echo "3. Check image optimization in browser DevTools"
    exit 0
else
    echo -e "${YELLOW}⚠️  Some images failed to download${NC}"
    echo "Please check your internet connection and try again"
    exit 1
fi
