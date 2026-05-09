/**
 * G Park · Wellness Living wordmark.
 *
 * The user-supplied script logo lives at /images/logo-g-park-{dark,light}.png
 * — pre-processed into transparent-background variants so it sits cleanly
 * on either cream or sage-deep surfaces.
 *
 *   variant="light"  →  cream script (dark backgrounds — Hero, Footer, Value)
 *   variant="dark"   →  sage script  (light backgrounds — scrolled Nav)
 *   variant="auto"   →  alias for "dark"
 *
 * The "By G‑Group" byline is composited as live text underneath so it picks
 * up the surrounding color and stays crisp at any size.
 */
export default function Logo({
  height = 40,
  byline = false,
  className = '',
  variant = 'dark',
}) {
  const v = variant === 'auto' ? 'dark' : variant
  const src = v === 'light'
    ? '/images/logo-g-park-light.png'
    : '/images/logo-g-park-dark.png'

  // Image is 419×178 → ~2.35:1 aspect.
  const width = Math.round(height * 2.35)

  return (
    <span
      className={`gpk-logo ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: 1,
        gap: byline ? '0.45em' : 0,
      }}
    >
      <img
        src={src}
        alt="G Park · Wellness Living"
        width={width}
        height={height}
        decoding="async"
        loading="eager"
        style={{ display: 'block', height, width: 'auto', userSelect: 'none' }}
      />
      {byline && (
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '0.36em',
            letterSpacing: '0.06em',
            color: v === 'light' ? 'var(--bronze)' : 'var(--wood-dark)',
            opacity: 0.92,
          }}
        >
          By G‑Group
        </span>
      )}
    </span>
  )
}
