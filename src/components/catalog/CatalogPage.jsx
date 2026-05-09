import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Layers } from 'lucide-react'
import { FLOORS, FLOORS_BY_BUILDING, floorById } from '../../data/floors.js'
import { BUILDINGS } from '../../data/apartments.js'
import FloorRail from './FloorRail.jsx'
import FloorPlate from './FloorPlate.jsx'
import ApartmentList from './ApartmentList.jsx'
import ApartmentInspector from './ApartmentInspector.jsx'
import BuildingInfo from './BuildingInfo.jsx'

const BUILDING_TABS = [
  { id: null,         he: 'כל הפרויקט',   short: 'הכל' },
  { id: 'tower',      he: 'מגדל הפארק',    short: 'המגדל' },
  { id: 'boutique-w', he: 'מרקמי מערבי',   short: 'מערבי' },
  { id: 'boutique-n', he: 'מרקמי צפוני',   short: 'צפוני' },
]

export default function CatalogPage() {
  const [params] = useSearchParams()
  const initialBuilding =
    params.get('building') && BUILDINGS[params.get('building')]
      ? params.get('building')
      : null

  const [building, setBuilding] = useState(initialBuilding)
  const [floorId, setFloorId] = useState(FLOORS[0].id)
  const [selectedCode, setSelectedCode] = useState(null)

  const visibleFloorIds = building
    ? FLOORS_BY_BUILDING[building] || FLOORS.map((f) => f.id)
    : FLOORS.map((f) => f.id)
  const visibleFloors = FLOORS.filter((f) => visibleFloorIds.includes(f.id))

  // Keep floor valid when building filter changes.
  useEffect(() => {
    if (!visibleFloors.find((f) => f.id === floorId)) {
      setFloorId(visibleFloors[0]?.id ?? FLOORS[0].id)
    }
  }, [building]) // eslint-disable-line react-hooks/exhaustive-deps

  // Lock body scroll when inspector modal is open.
  useEffect(() => {
    if (!selectedCode) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [selectedCode])

  // ESC closes inspector.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setSelectedCode(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const floor = floorById(floorId) || FLOORS[0]
  const apartmentCount = floor.apartments.filter((a) => {
    if (!building) return true
    const apt = floor.apartments.find((x) => x.code === a.code)
    return apt
  }).length

  return (
    <div className="catalog-shell">
      {/* ─── Top bar ────────────────────────────────────── */}
      <header className="catalog-topbar">
        <div className="catalog-topbar-row">
          <Link to="/" className="catalog-back">
            <ArrowRight size={16} strokeWidth={1.25} />
            <span>חזרה לאתר</span>
          </Link>

          <div className="catalog-topbar-title">
            <p className="eyebrow">— G PARK · קטלוג דירות</p>
            <h1>תכנון אינטראקטיבי</h1>
          </div>

          <div className="catalog-topbar-meta">
            <Layers size={14} strokeWidth={1.25} />
            <span>{floor.short}</span>
          </div>
        </div>

        {/* Building filter */}
        <nav aria-label="סינון לפי בניין" className="catalog-buildings">
          {BUILDING_TABS.map((t) => (
            <button
              key={t.id ?? 'all'}
              type="button"
              onClick={() => setBuilding(t.id)}
              aria-pressed={building === t.id}
              className={`catalog-building ${building === t.id ? 'is-active' : ''}`}
            >
              <span className="catalog-building-he">{t.he}</span>
              <span className="catalog-building-short">{t.short}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* ─── Main ─────────────────────────────────────── */}
      <main className="catalog-main">
        <FloorRail
          floors={visibleFloors}
          selectedId={floorId}
          onSelect={(id) => {
            setFloorId(id)
            setSelectedCode(null)
          }}
        />

        <section className="catalog-canvas">
          {/* Building info — adapts to active building (or shows project overview) */}
          <BuildingInfo building={building} />

          <header className="catalog-canvas-head">
            <p className="eyebrow">— הקומה הנבחרת</p>
            <h2>{floor.label}</h2>
            {floor.note && <p className="catalog-canvas-note">{floor.note}</p>}
          </header>

          <AnimatePresence mode="wait">
            <FloorPlate
              key={floor.id}
              floor={floor}
              selectedCode={selectedCode}
              onSelect={setSelectedCode}
              buildingFilter={building}
            />
          </AnimatePresence>

          <div className="catalog-canvas-list">
            <p className="eyebrow">— דירות בקומה</p>
            <ApartmentList
              floor={floor}
              selectedCode={selectedCode}
              onSelect={setSelectedCode}
            />
            <p className="catalog-hint">
              לחצו על דירה במפה או ברשימה כדי להציג את התוכנית המלאה
            </p>
          </div>
        </section>
      </main>

      {/* ─── Apartment modal ───────────────────────────── */}
      <ApartmentInspector
        code={selectedCode}
        onClose={() => setSelectedCode(null)}
      />

      <footer className="catalog-footer">
        <p>הדירות בקטלוג זמינות בכפוף להוראות מכר. פרטים נוספים במשרד המכירות.</p>
      </footer>
    </div>
  )
}
