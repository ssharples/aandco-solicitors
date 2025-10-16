/**
 * Image Manifest for Alexander & Co Website
 * Centralized image configuration with paths, dimensions, and metadata
 */

export interface ImageConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
  priority?: boolean;
}

export const IMAGES = {
  // Company Logos
  logo: {
    src: '/images/alexander-and-co_logo.png',
    alt: 'Alexander & Co - Solicitors',
    width: 749,
    height: 146,
    priority: true,
  } as ImageConfig,

  taglineLogo: {
    src: '/images/llfl_red.svg',
    alt: 'Local Law For Life',
    width: 300,
    height: 37,
  } as ImageConfig,

  // Service Category Images
  services: {
    individuals: {
      src: '/images/services/for-individuals.jpg',
      alt: 'Legal Services for Individuals',
      width: 547,
      height: 297,
      blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EACQQAAEEAgEEAgMAAAAAAAAAAAECAwQRBQAGEiExQVEHExQicf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AIdGMjNUMhnGOZcnOXzP1yXZrqkpCEjxbYJKk8lfQED0L8nUXN4TIYzJOw+QjLjymlFLjbieFJI8g/8AFn2NdBrB/lDJy8l/4xmx5stsNOPwSUcghP8AqoJSVFS+goC96DTGsrg+6Mv8eMgYWbktNycY4YvH/9k=',
    } as ImageConfig,

    business: {
      src: '/images/services/for-business.jpg',
      alt: 'Legal Services for Business',
      width: 547,
      height: 297,
      blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EACQQAAEEAgEEAgMAAAAAAAAAAAECAwQRBQAGEiExQVEHExQicf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AIdGMjNUMhnGOZcnOXzP1yXZrqkpCEjxbYJKk8lfQED0L8nUXN4TIYzJOw+QjLjymlFLjbieFJI8g/8AFn2NdBrB/lDJy8l/4xmx5stsNOPwSUcghP8AqoJSVFS+goC96DTGsrg+6Mv8eMgYWbktNycY4YvH/9k=',
    } as ImageConfig,
  },

  // Article/Blog Images
  articles: {
    commercialTenant: {
      src: '/images/articles/commercial-property-office.jpg',
      alt: 'Commercial property office space',
      width: 510,
      height: 340,
      blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EACMQAAEEAgIBBQEAAAAAAAAAAAECAwQFEQAGEiExExQiMkH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEQMRAD8AkbkD3EZp9qyuPKkqhxlKjEKSlRUKVnJ5EdZ/uoGF7mjXbCumr0+UtpTy48RI5AkdFXT/AI1p+wquP4nXPtmRHbSl1l9aF/UwvqQRz8dAjyPvWapm+l7hv4kpxxcWtplAlLbBDi1pB5BORkZzgYBx50GnGnB//9k=',
    } as ImageConfig,

    wills: {
      src: '/images/articles/solicitor-drafted-wills.jpg',
      alt: 'Solicitor drafting wills',
      width: 510,
      height: 340,
      blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EACQQAAEDAwQCAgMAAAAAAAAAAAECAwQFESEABhIxQVETImFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oADAMBAAIRAxEAPwCLty0J6ntW8qdPpkIxtdVjllgkkJcacSSFDx+QfHg+9U43e/wWmIE2z10+rRWVUk06kmYiWcYWw6k+fVwfXvSdspMmJtLuRuG+w4gzHwoRlKLaXhJBSVAi3gkn1qNNocyrKVPp8WoSm3lFQdQlxYBPm4Rj/ugWv1+d/9k=',
    } as ImageConfig,

    titleDeeds: {
      src: '/images/articles/lost-title-deeds.jpg',
      alt: 'Property title deeds documentation',
      width: 510,
      height: 340,
      blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EACQQAAEDAwQCAgMAAAAAAAAAAAECAwQFESEABhIxQVETImFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oADAMBAAIRAxEAPwCLty0J6ntW8qdPpkIxtdVjllgkkJcacSSFDx+QfHg+9U43e/wWmIE2z10+rRWVUk06kmYiWcYW6k+fVwfXvSdspMmJtLuRuG+w4gzHwoRlKLaXhJBSVAi3gkn1qNNocyrKVPp8WoSm3lFQdQlxYBPm4Rj/ALoCv1+d/9k=',
    } as ImageConfig,

    divorce: {
      src: '/images/articles/couple-removing-rings.jpg',
      alt: 'Couple discussing divorce and pension rights',
      width: 510,
      height: 340,
      blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EACMQAAEDBAICAwEAAAAAAAAAAAECAxEEBQAGIRIxE0FRImFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oADAMBAAIRAxEAPwCLpti27stLMCkZ+UVqU8+qOpKiUpSQIHAEk+54qvbrlty9paXLDSVCkyqmpJaZeQFrKQD5g+BwQDPv30eqN9hOd0tFSW7dcIkykuqU2UnuRI5J58c8Sb7dLbS0JRd6hmlpnlBPmQojwAJ84JmP09cjQG1d39//2Q==',
    } as ImageConfig,
  },

  // Hero Background Images
  backgrounds: {
    hero1: {
      src: '/images/backgrounds/hero-1.jpg',
      alt: 'Alexander & Co office interior',
      width: 1110,
      height: 713,
      priority: true,
      blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EACMQAAEDBAICAwEAAAAAAAAAAAECAxEEBQAGIRIxE0FRImFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oADAMBAAIRAxEAPwCLpti27stLMCkZ+UVqU8+qOpKiUpSQIHAEk+54qvbrlty9paXLDSVCkyqmpJaZeQFrKQD5g+BwQDPv30eqN9hOd0tFSW7dcIkykuqU2UnuRI5J58c8Sb7dLbS0JRd6hmlpnlBPmQojwAJ84JmP09cjQG1d39//2Q==',
    } as ImageConfig,

    hero2: {
      src: '/images/backgrounds/hero-2.jpg',
      alt: 'Professional legal consultation',
      width: 1110,
      height: 651,
      blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EACMQAAEDBAICAwEAAAAAAAAAAAECAxEEBQAGIRIxE0FRImFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oADAMBAAIRAxEAPwCLpti27stLMCkZ+UVqU8+qOpKiUpSQIHAEk+54qvbrlty9paXLDSVCkyqmpJaZeQFrKQD5g+BwQDPv30eqN9hOd0tFSW7dcIkykuqU2UnuRI5J58c8Sb7dLbS0JRd6hmlpnlBPmQojwAJ84JmP09cjQG1d39//2Q==',
    } as ImageConfig,
  },

  // Accreditation Logos
  accreditations: {
    lexcel: {
      src: '/images/accreditations/lexcel.png',
      alt: 'Lexcel Accredited',
      width: 101,
      height: 101,
    } as ImageConfig,

    willsInheritance: {
      src: '/images/accreditations/wills-inheritance.png',
      alt: 'Wills and Inheritance Quality Scheme',
      width: 102,
      height: 101,
    } as ImageConfig,

    conveyancing: {
      src: '/images/accreditations/conveyancing-quality.png',
      alt: 'Conveyancing Quality Scheme',
      width: 102,
      height: 101,
    } as ImageConfig,
  },
} as const;

// Helper function to get image config
export function getImage(category: keyof typeof IMAGES, key?: string): ImageConfig {
  if (key && typeof IMAGES[category] === 'object' && key in (IMAGES[category] as object)) {
    return (IMAGES[category] as Record<string, ImageConfig>)[key];
  }
  return IMAGES[category] as ImageConfig;
}

// Helper function for dynamic imports
export function getImagePath(category: string, key?: string): string {
  const baseConfig = key
    ? (IMAGES[category as keyof typeof IMAGES] as Record<string, ImageConfig>)?.[key]
    : IMAGES[category as keyof typeof IMAGES] as ImageConfig;

  return baseConfig?.src || '/images/placeholder.jpg';
}
