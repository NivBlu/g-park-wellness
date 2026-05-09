import { useMemo } from 'react'

/**
 * Sketched 3D massing diagram of the G Park project — isometric view of
 * the tower, the 2 western boutique buildings, and the 3 northern boutique
 * buildings around the central park.
 *
 * Pure SVG — no 3D libraries. Each building is a simple cuboid drawn from
 * three faces (top, left, right) plus accent stripes for floor lines.
 *
 * Click a building to filter the catalog.
 */

const ISO_X = 0.866 // cos(30°)
const ISO_Y = 0.5   // sin(30°)

// Project an iso (x, y, z) point — z is up — to 2D screen.
const project = (x, y, z) => [
  x * ISO_X - y * ISO_X,
  -z + x * ISO_Y + y * ISO_Y,
]

const cuboid = (ox, oy, w, d, h) => {
  // origin (ox, oy) is the bottom-front corner; w=width, d=depth, h=height
  const p = (x, y, z) => project(ox + x, oy + y, z)
  const top = [p(0, 0, h), p(w, 0, h), p(w, d, h), p(0, d, h)]
  const left = [p(0, 0, 0), p(0, 0, h), p(0, d, h), p(0, d, 0)]
  const right = [p(w, 0, 0), p(w, 0, h), p(w, d, h), p(w, d, 0)]
  const front = [p(0, 0, 0), p(w, 0, 0), p(w, 0, h), p(0, 0, h)]
  return { top, left, right, front }
}

const polyStr = (pts) => pts.map((p) => p.join(',')).join(' ')

// Building defs — each `building` is { id, x, y, w, d, h, label }
const BUILDINGS_3D = [
  // Northern boutique strip — 3 buildings, 7 floors each
  { id: 'boutique-n', x: 1.0, y: 6.5, w: 1.4, d: 1.0, h: 2.1, label: 'מרקמי צפוני' },
  { id: 'boutique-n', x: 2.6, y: 6.5, w: 1.4, d: 1.0, h: 2.1 },
  { id: 'boutique-n', x: 4.2, y: 6.5, w: 1.4, d: 1.0, h: 2.1 },
  // Western boutique pair — 2 buildings, 7 floors each
  { id: 'boutique-w', x: 0.5, y: 4.2, w: 1.4, d: 1.0, h: 2.1, label: 'מרקמי מערבי' },
  { id: 'boutique-w', x: 0.5, y: 2.8, w: 1.4, d: 1.0, h: 2.1 },
  // Tower — 15 floors, taller, on the east side
  { id: 'tower', x: 4.0, y: 2.4, w: 1.8, d: 1.6, h: 4.6, label: 'מגדל הפארק' },
]

// Park (low platform with trees)
const PARK = { x: 2.4, y: 2.4, w: 2.6, d: 3.4 }

export default function ProjectMassing({ activeBuilding, onSelect }) {
  // Sort back-to-front so painter's algorithm gives correct overlaps.
  const sorted = useMemo(() => {
    return [...BUILDINGS_3D].sort((a, b) => {
      const aProj = project(a.x + a.w / 2, a.y + a.d / 2, 0)
      const bProj = project(b.x + b.w / 2, b.y + b.d / 2, 0)
      return aProj[1] - bProj[1]
    })
  }, [])

  return (
    <div className="project-massing" dir="ltr">
      <svg
        viewBox="-3 -8 12 12"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className="project-massing-svg"
        aria-label="מודל תלת־מימדי של הפרויקט"
      >
        {/* Ground plate */}
        <polygon
          points={polyStr([
            project(0, 0, 0),
            project(7, 0, 0),
            project(7, 8, 0),
            project(0, 8, 0),
          ])}
          fill="var(--color-cream)"
          stroke="var(--color-stone)"
          strokeWidth="0.02"
        />

        {/* Park (lower box) */}
        {(() => {
          const c = cuboid(PARK.x, PARK.y, PARK.w, PARK.d, 0.05)
          return (
            <g className="project-park">
              <polygon points={polyStr(c.top)} fill="#E6ECDA" stroke="#8A9A7B" strokeWidth="0.015" />
              {/* Trees */}
              {[
                [PARK.x + 0.5, PARK.y + 0.7],
                [PARK.x + 1.4, PARK.y + 0.5],
                [PARK.x + 2.2, PARK.y + 1.1],
                [PARK.x + 0.7, PARK.y + 1.8],
                [PARK.x + 1.7, PARK.y + 2.0],
                [PARK.x + 2.3, PARK.y + 2.7],
                [PARK.x + 0.5, PARK.y + 2.9],
                [PARK.x + 1.3, PARK.y + 2.5],
              ].map(([tx, ty], i) => {
                const [px, py] = project(tx, ty, 0.05)
                return (
                  <g key={i}>
                    <line
                      x1={px}
                      y1={py}
                      x2={px}
                      y2={py - 0.18}
                      stroke="#5D7B4F"
                      strokeWidth="0.025"
                    />
                    <circle
                      cx={px}
                      cy={py - 0.22}
                      r="0.10"
                      fill="#8A9A7B"
                      opacity="0.85"
                    />
                  </g>
                )
              })}
            </g>
          )
        })()}

        {/* Buildings */}
        {sorted.map((b, i) => {
          const c = cuboid(b.x, b.y, b.w, b.d, b.h)
          const isActive = activeBuilding === b.id
          const dimmed = activeBuilding && !isActive
          const fillTop   = isActive ? '#C9BFA8' : (dimmed ? '#E3DCCB' : '#D8CFB8')
          const fillLeft  = isActive ? '#A58B75' : (dimmed ? '#C9BFA8' : '#B6A38B')
          const fillRight = isActive ? '#8B6E54' : (dimmed ? '#A58B75' : '#9A7E66')
          const stroke    = isActive ? '#0E0F0C' : '#3D4F45'
          const labelPos  = project(b.x + b.w / 2, b.y + b.d / 2, b.h + 0.4)
          // Floor lines (ribbons) on the front face.
          const floors = b.h > 3 ? 15 : 7
          const floorLines = []
          for (let f = 1; f < floors; f++) {
            const z = (f / floors) * b.h
            floorLines.push([
              project(b.x, b.y, z),
              project(b.x + b.w, b.y, z),
            ])
          }
          return (
            <g
              key={i}
              className={`project-building ${isActive ? 'is-active' : ''} ${dimmed ? 'is-dimmed' : ''}`}
              onClick={() => onSelect && onSelect(activeBuilding === b.id ? null : b.id)}
              style={{ cursor: onSelect ? 'pointer' : 'default' }}
            >
              <polygon points={polyStr(c.right)} fill={fillRight} stroke={stroke} strokeWidth="0.015" />
              <polygon points={polyStr(c.left)}  fill={fillLeft}  stroke={stroke} strokeWidth="0.015" />
              <polygon points={polyStr(c.top)}   fill={fillTop}   stroke={stroke} strokeWidth="0.015" />
              {/* Floor stripes on front face for depth */}
              {floorLines.map(([a, b2], idx) => (
                <line
                  key={idx}
                  x1={a[0]} y1={a[1]} x2={b2[0]} y2={b2[1]}
                  stroke={stroke}
                  strokeWidth="0.005"
                  opacity="0.35"
                />
              ))}
              {b.label && (
                <text
                  x={labelPos[0]}
                  y={labelPos[1]}
                  textAnchor="middle"
                  className="project-building-label"
                >
                  {b.label}
                </text>
              )}
            </g>
          )
        })}
      </svg>

      <div className="project-massing-legend">
        <p className="eyebrow">— מודל הפרויקט</p>
        <p className="project-massing-hint">
          לחצו על בניין לסינון הקטלוג
        </p>
      </div>
    </div>
  )
}
