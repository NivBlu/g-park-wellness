import { motion } from 'framer-motion'
import { Building2, Compass, Home, Layers } from 'lucide-react'
import { BUILDINGS } from '../../data/apartments.js'

/**
 * Top-of-page building info card. Shows the orientation, floor count,
 * unit count, and the apartment-mix breakdown for the active building.
 *
 * When `building` is null, shows a project-wide summary card instead.
 */
export default function BuildingInfo({ building }) {
  if (!building) {
    return (
      <motion.section
        key="all-buildings"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="building-info building-info-all"
      >
        <div>
          <p className="eyebrow">— הפרויקט במבט־על</p>
          <h3>שלושה מבנים, שלוש שפות אדריכליות, מתחם אחד.</h3>
          <p className="building-info-lead">
            G Park משלב שלושה מבנים סביב פארק פנימי משותף — מגדל בוטיק
            של 15 קומות, ומתחמי בוטיק במערב ובצפון בני 7 קומות. בחרו בניין
            כדי לקרוא את הסיפור המלא.
          </p>
        </div>
        <ul className="building-info-summary">
          {Object.values(BUILDINGS).map((b) => (
            <li key={b.id}>
              <span className="eyebrow">{b.he}</span>
              <strong>{b.units}</strong>
              <small>{b.floors} קומות · {b.units} דירות</small>
            </li>
          ))}
        </ul>
      </motion.section>
    )
  }

  const b = BUILDINGS[building]
  if (!b) return null

  return (
      <motion.section
        key={b.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="building-info"
      >
        {/* ── Heading ── */}
        <header className="building-info-head">
          <div>
            <p className="eyebrow">— הבניין הנבחר</p>
            <h3>{b.he}</h3>
            <p className="building-info-summary-line">{b.summary}</p>
          </div>
          <dl className="building-info-stats">
            <div>
              <dt><Layers size={13} strokeWidth={1.5} /> קומות</dt>
              <dd>{b.floors}</dd>
            </div>
            <div>
              <dt><Home size={13} strokeWidth={1.5} /> דירות</dt>
              <dd>{b.units}</dd>
            </div>
          </dl>
        </header>

        <div className="building-info-grid">
          {/* ── Orientation ── */}
          <div className="building-info-block">
            <p className="eyebrow">
              <Compass size={13} strokeWidth={1.5} />
              <span>כיוונים</span>
            </p>
            <p className="building-info-text">{b.orientation}</p>
          </div>

          {/* ── Description ── */}
          <div className="building-info-block">
            <p className="eyebrow">
              <Building2 size={13} strokeWidth={1.5} />
              <span>הסיפור</span>
            </p>
            <p className="building-info-text">{b.description}</p>
          </div>

          {/* ── Mix ── */}
          <div className="building-info-block building-info-mix">
            <p className="eyebrow">— תמהיל הקומות</p>
            <ul>
              {b.mix.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>
  )
}
