import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, Download, ArrowLeft } from 'lucide-react'
import { apartmentByCode, BUILDINGS } from '../../data/apartments.js'

/**
 * Apartment detail panel. Desktop = side panel, mobile = bottom drawer.
 * NO PRICES anywhere.
 */
export default function ApartmentInspector({ code, onClose }) {
  const apt = code ? apartmentByCode(code) : null

  return (
    <AnimatePresence mode="wait">
      {apt && (
        <>
          {/* Backdrop — mobile only */}
          <motion.button
            key="backdrop"
            type="button"
            aria-label="סגירה"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="catalog-inspector-backdrop"
          />

          <motion.aside
            key={`inspector-${code}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="catalog-inspector"
            aria-labelledby="inspector-title"
          >
            <header className="flex items-start justify-between gap-4 mb-8">
              <div>
                <p className="eyebrow mb-2">— {apt.categoryLabel}</p>
                <h2 id="inspector-title" className="display-sm">
                  {apt.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="סגירה"
                className="catalog-icon-btn"
              >
                <X size={20} strokeWidth={1.25} />
              </button>
            </header>

            <div className="catalog-inspector-meta">
              <Chip label="חדרים"        value={apt.rooms} />
              <Chip label="שטח בנוי"     value={`${apt.builtSqm} מ״ר`} />
              <Chip label={apt.outdoorKind} value={`${apt.outdoorSqm} מ״ר`} />
            </div>

            <p className="text-base font-light leading-relaxed text-[var(--color-mist)] mt-6 text-pretty">
              {apt.description}
            </p>

            <div className="mt-6 mb-8">
              <p className="eyebrow mb-3">— זמינה ב</p>
              <ul className="flex flex-wrap gap-2">
                {apt.buildings.map((b) => (
                  <li
                    key={b}
                    className="text-xs px-3 py-1.5 border border-[var(--color-stone)] text-[var(--color-mist)]"
                  >
                    {BUILDINGS[b]?.he || b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Plan */}
            <div className="catalog-inspector-plan">
              {apt.planAvailable ? (
                <a
                  href={apt.planPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="block image-art"
                >
                  <img
                    src={apt.planImage}
                    alt={`תוכנית דירה ${apt.code} — ${apt.title}`}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              ) : (
                <div className="catalog-inspector-placeholder">
                  <p className="eyebrow mb-3">— תוכנית בהכנה</p>
                  <p className="text-base font-light">
                    התוכנית המפורטת לדירה זו תפורסם בקרוב.
                    <br />
                    לפרטים נוספים — צרו איתנו קשר.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/#contact" onClick={onClose} className="btn btn-primary flex-1">
                <span>צרו איתי קשר</span>
                <ArrowLeft size={16} strokeWidth={1.25} />
              </Link>
              {apt.planAvailable && (
                <a
                  href={apt.planPdf}
                  download
                  className="btn btn-ghost on-light flex-1"
                >
                  <span>הורידו PDF</span>
                  <Download size={16} strokeWidth={1.25} />
                </a>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function Chip({ label, value }) {
  return (
    <div className="catalog-chip">
      <span className="eyebrow">{label}</span>
      <span className="catalog-chip-value">{value}</span>
    </div>
  )
}
