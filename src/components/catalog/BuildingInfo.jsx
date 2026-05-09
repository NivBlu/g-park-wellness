import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Compass, Home, Layers, ChevronDown, Info } from 'lucide-react'
import { BUILDINGS } from '../../data/apartments.js'

/**
 * Compact, collapsible building-info card. Shows a one-line summary by default;
 * expands on click to reveal orientations, mix breakdown and the project story.
 *
 * When `building` is null → shows project-wide overview row.
 */
export default function BuildingInfo({ building }) {
  const [open, setOpen] = useState(false)

  // Project overview (no building selected) — compact 3-card row.
  if (!building) {
    return (
      <section className="building-info building-info-all">
        <header className="building-info-row" onClick={() => setOpen(!open)}>
          <div>
            <p className="eyebrow">— הפרויקט במבט־על</p>
            <h3>שלושה מבנים, מתחם ירוק אחד.</h3>
          </div>
          <button
            type="button"
            className="building-info-toggle"
            aria-expanded={open}
            aria-label={open ? 'סגור' : 'פתח פרטים'}
          >
            <ChevronDown size={18} strokeWidth={1.5} />
          </button>
        </header>

        <ul className="building-info-summary">
          {Object.values(BUILDINGS).map((b) => (
            <li key={b.id}>
              <span className="eyebrow">{b.he}</span>
              <strong>{b.units}</strong>
              <small>{b.floors} קומות · {b.units} דירות</small>
            </li>
          ))}
        </ul>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <p className="building-info-lead">
                G Park משלב שלושה מבנים סביב פארק פנימי משותף — מגדל בוטיק
                של 15 קומות, ומתחמי בוטיק במערב ובצפון בני 7 קומות. בחרו בניין
                כדי לקרוא את הסיפור המלא.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    )
  }

  const b = BUILDINGS[building]
  if (!b) return null

  return (
    <motion.section
      key={b.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="building-info"
    >
      {/* Compact summary row — always visible */}
      <header
        className="building-info-row"
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen(!open)}
      >
        <div>
          <p className="eyebrow">— הבניין הנבחר</p>
          <h3>{b.he}</h3>
          <p className="building-info-summary-line">{b.summary}</p>
        </div>

        <div className="building-info-row-stats">
          <dl className="building-info-stats">
            <div>
              <dt><Layers size={12} strokeWidth={1.5} />קומות</dt>
              <dd>{b.floors}</dd>
            </div>
            <div>
              <dt><Home size={12} strokeWidth={1.5} />דירות</dt>
              <dd>{b.units}</dd>
            </div>
          </dl>
          <button
            type="button"
            className="building-info-toggle"
            aria-expanded={open}
            aria-label={open ? 'סגור' : 'הצג פרטים'}
            onClick={(e) => {
              e.stopPropagation()
              setOpen(!open)
            }}
          >
            <Info size={14} strokeWidth={1.5} />
            <span>{open ? 'סגור' : 'הסבר מלא'}</span>
            <ChevronDown
              size={14}
              strokeWidth={1.5}
              style={{
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
              }}
            />
          </button>
        </div>
      </header>

      {/* Expanded — orientation, story, mix */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="building-info-grid">
              <div className="building-info-block">
                <p className="eyebrow">
                  <Compass size={12} strokeWidth={1.5} />
                  <span>כיוונים</span>
                </p>
                <p className="building-info-text">{b.orientation}</p>
              </div>
              <div className="building-info-block">
                <p className="eyebrow">
                  <Building2 size={12} strokeWidth={1.5} />
                  <span>הסיפור</span>
                </p>
                <p className="building-info-text">{b.description}</p>
              </div>
              <div className="building-info-block building-info-mix">
                <p className="eyebrow">— תמהיל הקומות</p>
                <ul>
                  {b.mix.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
