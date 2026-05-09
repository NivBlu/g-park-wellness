import { useMemo, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { apartmentByCode } from '../../data/apartments.js'

/**
 * Floor plate with SVG hotspot overlay.
 * - Polygons (preferred): trace each apartment's outline, normalized 0..1.
 * - Rectangles (fallback): { x, y, w, h }.
 *
 * Visit /catalog?picker=1 to enter coordinate-picker mode:
 *   • Left click on the plate logs the normalized point.
 *   • Press "C" to close (copy the JSON polygon to clipboard).
 *   • Press "X" to clear the working polygon.
 */
function usePickerMode() {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    setEnabled(params.get('picker') === '1')
  }, [])
  return enabled
}

export default function FloorPlate({ floor, selectedCode, onSelect, buildingFilter }) {
  const hotspots = useMemo(
    () =>
      floor.apartments.map((a, idx) => ({
        ...a,
        idx,
        apt: apartmentByCode(a.code),
      })),
    [floor]
  )

  const pickerEnabled = usePickerMode()
  const [pickPoints, setPickPoints] = useState([])
  const wrapRef = useRef(null)

  // Picker keyboard shortcuts.
  useEffect(() => {
    if (!pickerEnabled) return
    const onKey = (e) => {
      if (e.key === 'c' || e.key === 'C') {
        const json = pickPoints.map((p) => `[${p[0]}, ${p[1]}]`).join(', ')
        const out = `{ code: '?', polygon: [\n  ${json}\n] },`
        // eslint-disable-next-line no-console
        console.log('%c POLYGON ', 'background:#2A3B32;color:#FAF7F0;padding:2px 6px', '\n' + out)
        navigator.clipboard?.writeText(out).catch(() => {})
        setPickPoints([])
      } else if (e.key === 'x' || e.key === 'X') {
        setPickPoints([])
      } else if (e.key === 'z' || e.key === 'Z') {
        setPickPoints((p) => p.slice(0, -1))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [pickerEnabled, pickPoints])

  const handlePickClick = (e) => {
    if (!pickerEnabled || !wrapRef.current) return
    const rect = wrapRef.current.getBoundingClientRect()
    const x = +(((e.clientX - rect.left) / rect.width)).toFixed(4)
    const y = +(((e.clientY - rect.top) / rect.height)).toFixed(4)
    setPickPoints((p) => [...p, [x, y]])
  }

  return (
    <motion.div
      key={floor.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full bg-white border border-[var(--color-stone)]"
      ref={wrapRef}
      onClick={handlePickClick}
      data-picker={pickerEnabled ? '1' : undefined}
    >
      <img
        src={floor.plate}
        alt={floor.label}
        className="block w-full h-auto select-none"
        draggable={false}
        loading="lazy"
        decoding="async"
      />

      <svg
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        aria-label={`מפת דירות בקומה ${floor.label}`}
      >
        {hotspots.map((h) => {
          if (!h.apt) return null
          const isActive = selectedCode === h.code
          const dimmed =
            buildingFilter && !h.apt.buildings.includes(buildingFilter)
          const className = `hotspot ${isActive ? 'is-active' : ''} ${dimmed ? 'is-dimmed' : ''}`
          const onActivate = () => onSelect(h.code)
          const handleKey = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onSelect(h.code)
            }
          }

          // Compute centroid for label placement.
          let cx, cy
          if (Array.isArray(h.polygon) && h.polygon.length >= 3) {
            const sum = h.polygon.reduce(
              (acc, [px, py]) => ({ x: acc.x + px, y: acc.y + py }),
              { x: 0, y: 0 }
            )
            cx = sum.x / h.polygon.length
            cy = sum.y / h.polygon.length
          } else if (h.rect) {
            cx = h.rect.x + h.rect.w / 2
            cy = h.rect.y + h.rect.h / 2
          }

          const shape =
            Array.isArray(h.polygon) && h.polygon.length >= 3 ? (
              <polygon
                points={h.polygon.map(([x, y]) => `${x},${y}`).join(' ')}
                className={className}
                tabIndex={0}
                role="button"
                aria-label={h.apt.title}
                aria-pressed={isActive}
                onClick={onActivate}
                onKeyDown={handleKey}
              >
                <title>{h.apt.title}</title>
              </polygon>
            ) : (
              <rect
                x={h.rect.x}
                y={h.rect.y}
                width={h.rect.w}
                height={h.rect.h}
                className={className}
                tabIndex={0}
                role="button"
                aria-label={h.apt.title}
                aria-pressed={isActive}
                onClick={onActivate}
                onKeyDown={handleKey}
              >
                <title>{h.apt.title}</title>
              </rect>
            )

          return (
            <g key={`${h.code}-${h.idx}`} className="hotspot-group">
              {shape}
              {/* Type label — always visible, faint; brightens on hover/active. */}
              {cx !== undefined && (
                <text
                  x={cx}
                  y={cy}
                  className={`hotspot-label ${isActive ? 'is-active' : ''} ${dimmed ? 'is-dimmed' : ''}`}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="0.018"
                  pointerEvents="none"
                >
                  {h.code}
                </text>
              )}
            </g>
          )
        })}

        {/* Picker overlay — visualizes points being captured. */}
        {pickerEnabled && pickPoints.length > 0 && (
          <g pointerEvents="none">
            <polygon
              points={pickPoints.map((p) => p.join(',')).join(' ')}
              fill="rgba(255,80,80,0.20)"
              stroke="red"
              strokeWidth="0.002"
            />
            {pickPoints.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="0.005" fill="red" />
            ))}
          </g>
        )}
      </svg>

      {pickerEnabled && (
        <div className="catalog-picker-hud">
          <strong>PICKER</strong> — click to add point ·
          {' '}<kbd>C</kbd> close+copy ·
          {' '}<kbd>Z</kbd> undo ·
          {' '}<kbd>X</kbd> clear
          <div>{pickPoints.length} points</div>
        </div>
      )}
    </motion.div>
  )
}
