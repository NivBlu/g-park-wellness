import { Link } from 'react-router-dom'
import { X, Download, ArrowLeft, Maximize2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { apartmentByCode, BUILDINGS } from '../../data/apartments.js'

/**
 * Full-screen apartment modal.
 * Plan image is the hero — takes most of the viewport. Specs sit beside it
 * on desktop, below it on mobile. Click the plan to open it in a new tab
 * for full-resolution viewing.
 */
export default function ApartmentInspector({ code, onClose }) {
  const apt = code ? apartmentByCode(code) : null
  const [zoomed, setZoomed] = useState(false)

  if (!apt) return null

  return (
        <div
          className="apt-modal apt-modal-enter"
          role="dialog"
          aria-modal="true"
          aria-labelledby="apt-modal-title"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="סגירה"
            className="apt-modal-backdrop"
            onClick={onClose}
          />

          {/* Modal body */}
          <div className="apt-modal-body apt-modal-body-enter">
            <header className="apt-modal-header">
              <div>
                <p className="eyebrow">— {apt.categoryLabel}</p>
                <h2 id="apt-modal-title">{apt.title}</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="סגירה"
                className="apt-icon-btn"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </header>

            <div className="apt-modal-grid">
              {/* ─── Plan image (hero) ─── */}
              <div className="apt-plan">
                {apt.planAvailable ? (
                  <>
                    <button
                      type="button"
                      className="apt-plan-zoom"
                      onClick={() => setZoomed(true)}
                      aria-label="הגדל תוכנית"
                    >
                      <Maximize2 size={16} strokeWidth={1.5} />
                    </button>
                    <img
                      src={apt.planImage}
                      alt={`תוכנית ${apt.code} — ${apt.title}`}
                      onClick={() => setZoomed(true)}
                      style={{ cursor: 'zoom-in' }}
                    />
                  </>
                ) : (
                  <div className="apt-plan-placeholder">
                    <p className="eyebrow">— תוכנית בהכנה</p>
                    <p>
                      התוכנית המפורטת לדירה זו תפורסם בקרוב.
                      <br />
                      לקבלת פרטים — צרו איתנו קשר.
                    </p>
                  </div>
                )}
              </div>

              {/* ─── Specs ─── */}
              <aside className="apt-specs">
                <dl className="apt-meta">
                  <div>
                    <dt>חדרים</dt>
                    <dd>{apt.rooms}</dd>
                  </div>
                  <div>
                    <dt>שטח בנוי</dt>
                    <dd>{apt.builtSqm}<small>מ״ר</small></dd>
                  </div>
                  <div>
                    <dt>{apt.outdoorKind}</dt>
                    <dd>{apt.outdoorSqm}<small>מ״ר</small></dd>
                  </div>
                </dl>

                <p className="apt-description">{apt.description}</p>

                <div className="apt-buildings">
                  <p className="eyebrow">— זמינה ב</p>
                  <ul>
                    {apt.buildings.map((b) => (
                      <li key={b}>{BUILDINGS[b]?.he || b}</li>
                    ))}
                  </ul>
                </div>

                <div className="apt-actions">
                  <Link
                    to="/#contact"
                    onClick={onClose}
                    className="btn btn-primary"
                  >
                    <span>צרו איתי קשר</span>
                    <ArrowLeft size={16} strokeWidth={1.5} />
                  </Link>
                  {apt.planAvailable && (
                    <a
                      href={apt.planPdf}
                      download
                      className="btn btn-ghost on-light"
                    >
                      <span>הורידו PDF</span>
                      <Download size={16} strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </aside>
            </div>
          </div>

          {/* ─── Lightbox (zoomed plan) ─── */}
          {zoomed && apt.planAvailable && (
            <div
              className="apt-lightbox"
              onClick={() => setZoomed(false)}
            >
              <button
                type="button"
                className="apt-icon-btn apt-lightbox-close"
                aria-label="סגירה"
                onClick={(e) => {
                  e.stopPropagation()
                  setZoomed(false)
                }}
              >
                <X size={22} strokeWidth={1.5} />
              </button>
              <img src={apt.planImage} alt={apt.title} />
            </div>
          )}
        </div>
  )
}
