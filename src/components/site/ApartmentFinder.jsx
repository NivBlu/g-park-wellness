import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Download, Expand } from 'lucide-react'
import { APARTMENTS } from '../../data/apartments.js'

/**
 * Maps the public-facing tab (3/4/5/garden/setback/penthouse) to the
 * apartment codes that should appear under it. Single source of truth for
 * what each tab shows.
 */
const TAB_CODES = {
  '3':  ['A', 'D', 'E', 'H'],
  '4':  ['F', 'G-128'],
  '5':  ['G', 'B-123', 'B-134', 'C', 'T-132', 'T-150'],
  garden:    ['G-128', 'G-66', 'G-59', 'BG-134'],
  setback:   ['SB-132', 'SB-150'],
  penthouse: ['PH-W', 'PH-E', 'MEGA', 'BPH-W', 'BPH-N-NW', 'BPH-N-M', 'BPH-N-NE'],
}

const TABS = [
  { id: '3',         label: '3 חדרים',        contactKey: 'rooms-3'   },
  { id: '4',         label: '4 חדרים',        contactKey: 'rooms-4'   },
  { id: '5',         label: '5 חדרים',        contactKey: 'rooms-5'   },
  { id: 'garden',    label: 'דירות גן',       contactKey: 'garden'    },
  { id: 'setback',   label: 'מיני פנטהאוזים', contactKey: 'setback'   },
  { id: 'penthouse', label: 'פנטהאוז',        contactKey: 'penthouse' },
]

// One-line "who this tier is for" — surfaced above the grid per active tab.
const TAB_AUDIENCE = {
  '3':         'לזוגות, משקיעים ומשפחות בתחילת הדרך — תכנון יעיל, חלל פתוח ומרפסת של 12 מ״ר.',
  '4':         'לדור הביניים — חדר עבודה נוסף, חדר ילדים נוח, וסלון פתוח לכיוון הפארק.',
  '5':         'למשפחה שצמחה — מאסטר אמיתי, שלושה חדרי שינה ופינת אוכל גדולה לכל הסועדים.',
  garden:      'למי שרוצה בית פרטי בתוך מתחם — גינה צמודה, כניסה משלכם, פרטיות מלאה מול הפארק.',
  setback:     'שתי דירות בלבד בקומת הנסיגה — מרפסות של 40 ו־48 מ״ר, פרטיות גבוהה ונוף פתוח.',
  penthouse:   'הקומות העליונות של המגדל ושל בנייני הבוטיק — מגה־פנטהאוז יחיד בקומה 15, פנטהאוזים פינתיים ועד 178 מ״ר גג.',
}

function prefillContact(typeKey) {
  // Communicates the active tab to Contact.jsx via a custom event +
  // sessionStorage fallback so a deep link / page refresh still works.
  try {
    sessionStorage.setItem('gpark.contact.type', typeKey)
  } catch (e) { /* private mode */ }
  window.dispatchEvent(new CustomEvent('gpark:contact-prefill', { detail: { type: typeKey } }))
}

function ApartmentCard({ a }) {
  const hasPlan = a.planAvailable && a.planPdf
  return (
    <article className="apt-card">
      <figure className="apt-card-media">
        {hasPlan ? (
          <a
            href={a.planPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="apt-card-plan-link"
            aria-label={`פתחו את התוכנית של ${a.title} בכרטיסייה חדשה`}
          >
            <img
              src={a.planImage}
              alt={`תוכנית דירה ${a.title}`}
              loading="lazy"
              decoding="async"
            />
            <span className="apt-card-plan-zoom" aria-hidden="true">
              <Expand size={18} strokeWidth={1.5} />
              לפתיחת התוכנית
            </span>
          </a>
        ) : (
          <div className="apt-card-placeholder" aria-hidden="true">
            <span>תוכנית מפורטת בהכנה</span>
          </div>
        )}
      </figure>
      <div className="apt-card-body">
        <span className="apt-card-eyebrow">{a.categoryLabel}</span>
        <h3 className="apt-card-title">{a.title}</h3>
        <ul className="apt-card-specs">
          <li><strong>{a.builtSqm}</strong><span>מ״ר בנוי</span></li>
          <li><strong>{a.outdoorSqm}</strong><span>{a.outdoorKind}</span></li>
          <li><strong>{a.rooms}</strong><span>חדרים</span></li>
        </ul>
        <p className="apt-card-desc">{a.description}</p>
        {hasPlan && (
          <a
            href={a.planPdf}
            download
            className="apt-card-download"
            aria-label={`הורידו את התוכנית של ${a.title} כקובץ PDF`}
          >
            <Download size={16} strokeWidth={1.5} aria-hidden="true" />
            הורידו את התוכנית (PDF)
          </a>
        )}
      </div>
    </article>
  )
}

/**
 * Apartment Finder — tabbed view sourced from APARTMENTS. Each tab CTA
 * scrolls to the contact form and prefills its "what interests you" select.
 */
export default function ApartmentFinder() {
  const [active, setActive] = useState('3')

  const activeTab = useMemo(() => TABS.find((t) => t.id === active), [active])
  const items = useMemo(() => {
    const codes = TAB_CODES[active] || []
    const byCode = new Map(APARTMENTS.map((a) => [a.code, a]))
    return codes.map((c) => byCode.get(c)).filter(Boolean)
  }, [active])

  const onAskPlan = () => {
    prefillContact(activeTab.contactKey)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="apts" id="apts" aria-label="בחירת דירה">
      <div className="apts-shell">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          — תמהיל הדירות
        </motion.span>
        <motion.h2
          className="apts-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          לבחור דירה <em>בלי להתבלבל.</em>
        </motion.h2>
        <motion.p
          className="apts-intro"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          תמהיל מלא של דירות 3 עד 6 חדרים, דירות גן ופנטהאוזים — בגדלים
          אמיתיים מתוך התוכניות הסופיות של בר אוריין. בחרו קטגוריה ולחצו
          על הדירה הספציפית לקבלת התוכנית המפורטת ישירות למייל.
        </motion.p>

        <div role="tablist" aria-label="קטגוריות דירות" className="apts-tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={active === t.id}
              aria-controls={`apts-panel-${t.id}`}
              id={`apts-tab-${t.id}`}
              className={`apts-tab ${active === t.id ? 'is-active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            id={`apts-panel-${active}`}
            aria-labelledby={`apts-tab-${active}`}
            className="apts-panel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {TAB_AUDIENCE[active] && (
              <p className="apts-audience">{TAB_AUDIENCE[active]}</p>
            )}
            <div className="apts-grid">
              {items.map((a) => <ApartmentCard key={a.code} a={a} />)}
            </div>
            <div className="apts-cta-row">
              <button type="button" className="btn btn-primary" onClick={onAskPlan}>
                <span>שלחו לי תוכנית דירה</span>
                <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" />
              </button>
              <Link to="/catalog" className="btn btn-ghost" aria-label="כניסה לקטלוג המלא של הדירות">
                <span>לקטלוג המלא</span>
                <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
