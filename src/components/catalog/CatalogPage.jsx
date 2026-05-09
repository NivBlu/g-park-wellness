import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, LayoutGrid } from 'lucide-react'
import { FLOORS, FLOORS_BY_BUILDING, floorById } from '../../data/floors.js'
import { BUILDINGS } from '../../data/apartments.js'
import FloorRail from './FloorRail.jsx'
import FloorPlate from './FloorPlate.jsx'
import ApartmentList from './ApartmentList.jsx'
import ApartmentInspector from './ApartmentInspector.jsx'
import BuildingDirectory from './BuildingDirectory.jsx'

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
  const [directoryOpen, setDirectoryOpen] = useState(false)

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

  // Scroll lock when inspector or directory drawer is open (mobile).
  useEffect(() => {
    if (!selectedCode && !directoryOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [selectedCode, directoryOpen])

  // ESC closes whichever overlay is open.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (directoryOpen) setDirectoryOpen(false)
      else if (selectedCode) setSelectedCode(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [directoryOpen, selectedCode])

  const floor = floorById(floorId) || FLOORS[0]

  // Label shown on the FAB / "all apartments" pill — reflects the active
  // building filter so the user always sees what scope they're browsing.
  const filterLabel = building
    ? BUILDINGS[building]?.he ?? 'כל הדירות'
    : 'כל הדירות'
  const isFiltered = Boolean(building)

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

          {/* Desktop only: building tabs + "all apartments" pill.
              Mobile entry-point is the floating button rendered below the
              header so it's always reachable, even after scrolling. */}
          <div className="catalog-topbar-actions">
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

            <button
              type="button"
              onClick={() => setDirectoryOpen(true)}
              aria-label={`פתיחת רשימת דירות — סינון נוכחי: ${filterLabel}`}
              aria-expanded={directoryOpen}
              className={`catalog-directory-trigger ${isFiltered ? 'is-filtered' : ''}`}
            >
              <LayoutGrid size={16} strokeWidth={1.25} aria-hidden="true" />
              <span className="catalog-directory-trigger-label">{filterLabel}</span>
              {isFiltered && (
                <span className="catalog-directory-trigger-dot" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile floating action button (FAB): always-visible entry to the
          building / all-apartments directory. The label tracks the active
          building filter so the user can always see what scope is applied. */}
      <button
        type="button"
        onClick={() => setDirectoryOpen(true)}
        aria-label={`פתיחת רשימת דירות — סינון נוכחי: ${filterLabel}`}
        aria-expanded={directoryOpen}
        className={`catalog-fab ${isFiltered ? 'is-filtered' : ''}`}
      >
        <Menu size={20} strokeWidth={1.25} aria-hidden="true" />
        <span className="catalog-fab-label">
          {isFiltered && (
            <span className="catalog-fab-eyebrow">סינון</span>
          )}
          <span className="catalog-fab-text">{filterLabel}</span>
        </span>
      </button>

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
                building={building}
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

      <BuildingDirectory
        open={directoryOpen}
        onClose={() => setDirectoryOpen(false)}
        building={building}
        onSelectBuilding={setBuilding}
        onSelectApartment={(code) => setSelectedCode(code)}
      />

      <footer className="catalog-footer">
        <p>הדירות בקטלוג זמינות בכפוף להוראות מכר. פרטים נוספים במשרד המכירות.</p>
      </footer>
    </div>
  )
}
