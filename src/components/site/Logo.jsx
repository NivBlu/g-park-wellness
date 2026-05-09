/**
 * G Park · Wellness Living wordmark — inline SVG so it renders crisply at
 * every size, picks up `currentColor`, and scales to whatever `height` the
 * caller asks for.
 *
 * The "G Park" line uses a script-cursive treatment to echo the official
 * project logo; "WELLNESS LIVING" sits underneath in spaced caps, and an
 * optional "By G-Group" attribution can be toggled on.
 */
export default function Logo({
  height = 36,
  byline = false,
  className = '',
  variant = 'auto',  // 'auto' | 'light' | 'dark'
}) {
  const w = height * 4.4
  const fillMain =
    variant === 'light' ? 'var(--cream)'
      : variant === 'dark' ? 'var(--sage-deep)'
        : 'currentColor'

  return (
    <span
      className={`gpk-logo ${className}`}
      style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1, color: fillMain }}
    >
      <svg
        height={height}
        width={w}
        viewBox="0 0 220 50"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="G Park · Wellness Living"
      >
        <text
          x="110"
          y="32"
          textAnchor="middle"
          fontFamily="'Playfair Display', 'Times New Roman', serif"
          fontStyle="italic"
          fontWeight="500"
          fontSize="34"
          letterSpacing="0.5"
          fill={fillMain}
        >
          G&nbsp;Park
        </text>
        <text
          x="110"
          y="46"
          textAnchor="middle"
          fontFamily="'Heebo', sans-serif"
          fontWeight="400"
          fontSize="6.5"
          letterSpacing="3.6"
          fill={fillMain}
          opacity="0.85"
        >
          WELLNESS LIVING
        </text>
      </svg>

      {byline && (
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '0.72em',
            opacity: 0.75,
            marginTop: '0.35em',
            color: 'var(--bronze)',
          }}
        >
          By G‑Group
        </span>
      )}
    </span>
  )
}
