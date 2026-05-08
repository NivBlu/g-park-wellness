import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FLOORS, FLOORS_BY_BUILDING, floorById } from '../../data/floors.js'
import { BUILDINGS } from '../../data/apartments.js'
import FloorRail from './FloorRail.jsx'
import FloorPlate from './FloorPlate.jsx'
import ApartmentList from './ApartmentList.jsx'
import ApartmentInspector from './ApartmentInspector.jsx'

const BUILDING_TABS = [
  { id: null,          he: 'הצג הכל',       label: 'All' },
  { id: 'tower',       he: 'מגדל הפארק',     label: 'Tower' },
  { id: 'boutique-w',  he: 'מרקמי מערבי',    label: 'Boutique · West' },
  { id: 'boutique-n',  he: 'מרקמי צפוני',    label: 'Boutique · North' },
]

export default function CatalogPage() {
  const [params] = useSearchParams()
  const initialBuilding =
    params.get('building') &&
    BUILDINGS[params.get('building')] ? params.get('building') : null

  const [building, setBuilding] = useState(initialBuilding)
  const [floorId, setFloorId] = useState(FLOORS[0].id)
  const [selectedCode, setSelectedCode] = useState(null)

  const visibleFloorIds = building
    ? FLOORS_BY_BUILDING[building] || FLOORS.map((f) => f.id)
    : FLOORS.map((f) => f.id)
  const visibleFloors = FLOORS.filter((f) => visibleFloorIds.includes(f.id))

  // Keep floorId valid when filter changes.
  useEffect(() => {
    if (!visibleFloors.find((f) => f.id === floorId)) {
      setFloorId(visibleFloors[0]?.id ?? FLOORS[0].id)
    }
  }, [building]) // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll lock when inspector is open (mobile).
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

  return (
    <div className="catalog-shell">
      {/* Top bar */}
      <header className="catalog-topbar">
        <div className="catalog-topbar-inner">
          <Link to="/" className="catalog-topbar-back">
            <ArrowRight size={16} strokeWidth={1.25} />
            <span>חזרה לאתר</span>
          </Link>

          <div className="catalog-topbar-title">
            <p className="eyebrow">— G PARK · קטלוג דירות</p>
            <h1 className="display-sm mt-1">חקרו את הבניין</h1>
          </div>

          <nav aria-label="סינון לפי בניין" className="catalog-buildingtabs">
            {BUILDING_TABS.map((t) => (
              <button
                key={t.id ?? 'all'}
                type="button"
                onClick={() => setBuilding(t.id)}
                aria-pressed={building === t.id}
                className={`catalog-buildingtab ${building === t.id ? 'is-active' : ''}`}
              >
                {t.he}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="catalog-main">
        <div className={`catalog-grid ${selectedCode ? 'is-inspecting' : ''}`}>
          <FloorRail
            floors={visibleFloors}
            selectedId={floorId}
            onSelect={(id) => {
              setFloorId(id)
              setSelectedCode(null)
            }}
          />

          <section className="catalog-stage">
            <header className="catalog-stage-header">
              <p className="eyebrow mb-2">— הקומה הנבחרת</p>
              <h2 className="display-sm">{floor.label}</h2>
              {floor.note && (
                <p className="text-sm font-light text-[var(--color-mist)] mt-2 max-w-xl">
                  {floor.note}
                </p>
              )}
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

            <div className="catalog-stage-list">
              <p className="eyebrow mb-4">— דירות בקומה זו</p>
              <ApartmentList
                floor={floor}
                selectedCode={selectedCode}
                onSelect={setSelectedCode}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="catalog-stage-hint"
            >
              לחצו על דירה במפה כדי לראות את התוכנית המלאה
            </motion.p>
          </section>

          <ApartmentInspector
            code={selectedCode}
            onClose={() => setSelectedCode(null)}
          />
        </div>
      </main>

      <footer className="catalog-footer">
        <p>הדירות בקטלוג זמינות בכפוף להוראות מכר. פרטים נוספים במשרד המכירות.</p>
      </footer>
    </div>
  )
}
