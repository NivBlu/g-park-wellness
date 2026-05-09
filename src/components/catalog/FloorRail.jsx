/**
 * Vertical floor selector (desktop, right rail) /
 * horizontal scrolling chips (mobile, top of plate).
 * Floors are listed low → high (ground → penthouse) so the reading flow
 * matches the Hebrew "start from the lowest floor and ascend".
 */
export default function FloorRail({ floors, selectedId, onSelect }) {
  return (
    <nav aria-label="בחירת קומה" className="catalog-rail">
      <p className="eyebrow mb-4 hidden md:block">— קומות</p>
      <ul className="catalog-rail-list">
        {floors.map((f) => {
          const active = f.id === selectedId
          return (
            <li key={f.id}>
              <button
                type="button"
                onClick={() => onSelect(f.id)}
                aria-pressed={active}
                className={`catalog-rail-item ${active ? 'is-active' : ''}`}
              >
                <span className="catalog-rail-num">{f.short}</span>
                <span className="catalog-rail-label">{f.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
