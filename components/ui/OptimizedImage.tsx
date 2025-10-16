import Image from 'next/image';
import { ImageConfig } from '@/lib/images';

interface OptimizedImageProps extends Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'> {
  config: ImageConfig;
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

/**
 * OptimizedImage Component
 *
 * Wrapper around Next.js Image component with automatic optimization,
 * blur placeholders, and responsive loading.
 *
 * Features:
 * - Automatic blur placeholder generation
 * - Responsive sizes configuration
 * - Lazy loading by default
 * - Optimized quality settings
 * - Accessibility-first alt text
 *
 * @example
 * ```tsx
 * import { OptimizedImage } from '@/components/ui/OptimizedImage';
 * import { IMAGES } from '@/lib/images';
 *
 * <OptimizedImage
 *   config={IMAGES.logo}
 *   sizes="(max-width: 768px) 100vw, 50vw"
 * />
 * ```
 */
export function OptimizedImage({
  config,
  sizes = '100vw',
  quality = 85,
  loading = 'lazy',
  objectFit = 'cover',
  className = '',
  ...props
}: OptimizedImageProps) {
  const {
    src,
    alt,
    width,
    height,
    blurDataURL,
    priority = false,
  } = config;

  // Determine loading strategy
  const shouldPriority = priority || loading === 'eager';
  const shouldPlaceholder = !shouldPriority && blurDataURL;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      quality={quality}
      loading={shouldPriority ? undefined : 'lazy'}
      priority={shouldPriority}
      placeholder={shouldPlaceholder ? 'blur' : 'empty'}
      blurDataURL={shouldPlaceholder ? blurDataURL : undefined}
      className={className}
      style={{
        objectFit,
        ...props.style,
      }}
      {...props}
    />
  );
}

/**
 * ResponsiveImage Component
 *
 * Automatically handles responsive images with art direction
 * for mobile, tablet, and desktop viewports.
 *
 * @example
 * ```tsx
 * <ResponsiveImage
 *   config={IMAGES.backgrounds.hero1}
 *   mobileConfig={IMAGES.backgrounds.heroMobile}
 * />
 * ```
 */
interface ResponsiveImageProps extends OptimizedImageProps {
  mobileConfig?: ImageConfig;
  tabletConfig?: ImageConfig;
}

export function ResponsiveImage({
  config,
  mobileConfig,
  tabletConfig,
  ...props
}: ResponsiveImageProps) {
  // For now, use standard sizes
  // Future: Implement picture element with multiple sources
  const responsiveSizes = mobileConfig || tabletConfig
    ? '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px'
    : '100vw';

  return (
    <OptimizedImage
      config={config}
      sizes={responsiveSizes}
      {...props}
    />
  );
}

/**
 * BackgroundImage Component
 *
 * Optimized background image with proper fill behavior
 *
 * @example
 * ```tsx
 * <div className="relative h-screen">
 *   <BackgroundImage config={IMAGES.backgrounds.hero1} />
 *   <div className="relative z-10">Content here</div>
 * </div>
 * ```
 */
export function BackgroundImage({
  config,
  className = '',
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      config={config}
      fill
      objectFit="cover"
      className={className}
      {...props}
    />
  );
}

/**
 * Logo Component
 *
 * Specialized component for logo rendering with proper sizing
 *
 * @example
 * ```tsx
 * <Logo config={IMAGES.logo} maxWidth={300} />
 * ```
 */
interface LogoProps extends OptimizedImageProps {
  maxWidth?: number;
  maxHeight?: number;
}

export function Logo({
  config,
  maxWidth,
  maxHeight,
  className = '',
  ...props
}: LogoProps) {
  const style: React.CSSProperties = {
    width: maxWidth ? `min(${maxWidth}px, 100%)` : 'auto',
    height: maxHeight ? `min(${maxHeight}px, auto)` : 'auto',
  };

  return (
    <OptimizedImage
      config={config}
      objectFit="contain"
      className={className}
      style={style}
      priority={true}
      {...props}
    />
  );
}
