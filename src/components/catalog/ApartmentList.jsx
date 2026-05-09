import { apartmentByCode } from '../../data/apartments.js'

/**
 * Apartment list under the floor plate. Filters by:
 *   - the active floor's apartments
 *   - the active building (if any) — only shows units that exist in that building
 *
 * De-duplicates by code so each type appears once even if the plate has
 * multiple instances.
 */
export default function ApartmentList({ floor, selectedCode, onSelect, buildingFilter }) {
  const seen = new Set()
  const unique = floor.apartments
    .map((a) => apartmentByCode(a.code))
    .filter((a) => {
      if (!a) return false
      if (seen.has(a.code)) return false
      // Hide apartments whose buildings don't include the active filter.
      if (buildingFilter && !a.buildings.includes(buildingFilter)) return false
      seen.add(a.code)
      return true
    })

  if (unique.length === 0) {
    return (
      <p className="text-sm text-[var(--color-mist)]">
        אין דירות מסומנות בקומה זו עבור הבניין הנבחר.
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
