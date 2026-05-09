import { apartmentByCode } from '../../data/apartments.js'

/**
 * Always-visible list of apartments on the active floor — guarantees that
 * users who can't (or don't think to) click a hotspot still have access.
 *
 * De-duplicates by code so users see one chip per apartment type even if the
 * plate has multiple instances. When a `building` filter is active, only
 * apartments that belong to that building are shown — so picking "מגדל הפארק"
 * filters the per-floor list as well as the directory.
 */
export default function ApartmentList({ floor, selectedCode, onSelect, building }) {
  const seen = new Set()
  const unique = floor.apartments
    .map((a) => apartmentByCode(a.code))
    .filter((a) => {
      if (!a || seen.has(a.code)) return false
      if (building && !a.buildings.includes(building)) return false
      seen.add(a.code)
      return true
    })

  if (unique.length === 0) {
    return (
      <p className="text-sm text-[var(--color-mist)]">
        {building
          ? 'אין דירות מהבניין הנבחר בקומה זו.'
          : 'אין דירות מסומנות בקומה זו.'}
      </p>
    )
  }

  return (
    <ul className="catalog-aptlist">
      {unique.map((a) => {
        const active = a.code === selectedCode
        return (
          <li key={a.code}>
            <button
              type="button"
              onClick={() => onSelect(a.code)}
              className={`catalog-aptlist-item ${active ? 'is-active' : ''}`}
            >
              <span className="catalog-aptlist-code">{a.code}</span>
              <span className="catalog-aptlist-title">{a.title}</span>
              <span className="catalog-aptlist-meta">
                {a.outdoorKind} {a.outdoorSqm} מ״ר
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
