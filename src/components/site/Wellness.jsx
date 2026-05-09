import { motion } from 'framer-motion'

/**
 * Inline SVG icons in the hand-drawn / botanical style of the PDF deck.
 * Each icon uses currentColor so it inherits the wood/sage accent.
 */
const icons = {
  chef: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 26c-4 0-7-3-7-7s3-7 7-7c1-3 4-5 7-5 4 0 7 3 8 6 3-1 6 1 6 5 0 1 0 2-1 3M43 19c4 0 7 3 7 7 0 3-2 6-5 7v15c0 2-2 4-4 4H23c-2 0-4-2-4-4V33c-3-1-5-4-5-7"/>
      <path d="M22 38v8M32 38v8M42 38v8"/>
    </svg>
  ),
  spa: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 12c4 6 4 14 0 20-4-6-4-14 0-20Z"/>
      <path d="M22 22c5 2 8 7 10 12-5-2-9-6-10-12ZM42 22c-1 6-5 10-10 12 2-5 5-10 10-12Z"/>
      <path d="M14 36c4-2 8-1 11 2-3 3-7 4-11 2ZM50 36c-4-2-8-1-11 2 3 3 7 4 11 2Z"/>
      <path d="M16 50h32"/>
    </svg>
  ),
  yoga: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="20" r="4"/>
      <path d="M22 50c2-7 5-12 10-12s8 5 10 12"/>
      <path d="M14 50c4-2 9-3 14-3M50 50c-4-2-9-3-14-3"/>
      <path d="M10 56h44"/>
    </svg>
  ),
  fitness: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="26" width="6" height="12" rx="1.5"/>
      <rect x="52" y="26" width="6" height="12" rx="1.5"/>
      <rect x="14" y="22" width="4" height="20" rx="1"/>
      <rect x="46" y="22" width="4" height="20" rx="1"/>
      <path d="M18 32h28"/>
    </svg>
  ),
  meditation: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="32" cy="44" rx="14" ry="3"/>
      <ellipse cx="32" cy="36" rx="11" ry="3"/>
      <ellipse cx="32" cy="28" rx="8" ry="3"/>
      <ellipse cx="32" cy="21" rx="5" ry="2.5"/>
      <path d="M32 12c0 3 2 5 4 6-2 1-4 3-4 6 0-3-2-5-4-6 2-1 4-3 4-6Z"/>
    </svg>
  ),
  bike: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="42" r="9"/>
      <circle cx="48" cy="42" r="9"/>
      <path d="M16 42 28 22h12l-12 20"/>
      <path d="M28 22h6M40 22l8 20"/>
      <path d="M34 16h6"/>
    </svg>
  ),
}

const facilities = [
  { key: 'yoga',       title: 'סטודיו יוגה ופילאטיס',  meta: 'אולם מואר · 7 ימים בשבוע' },
  { key: 'spa',        title: 'מתחם ספא וסאונה',       meta: 'סאונה יבשה · אזור הרפיה' },
  { key: 'chef',       title: 'מטבחי שף',               meta: 'אירועים פרטיים · קונסיירז׳' },
  { key: 'fitness',    title: 'חדר כושר מתקדם',         meta: 'ציוד אישי · אימוני קבוצה' },
  { key: 'meditation', title: 'גינת מדיטציה ושקט',      meta: 'פאטיו פנימי · בריכת נוי' },
  { key: 'bike',       title: 'מועדון אופניים וריצה',   meta: 'מסלולי פארק · חניית אופניים' },
]

/**
 * Wellness — six in-house facilities, exclusive to residents. Replaces
 * the earlier marquee with a structured 3×2 grid that mirrors the deck's
 * facilities slide (page 4 of the G-Group brief).
 */
export default function Wellness() {
  return (
    <section className="wellness" id="wellness" aria-label="מתקני הוולנס">
      <div className="wellness-head">
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            — מתקני ה־Wellness
          </motion.span>
          <motion.h2
            className="wellness-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            חוויה <em>יומיומית</em> של שלמות.
          </motion.h2>
        </div>
        <motion.p
          className="wellness-intro"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          קומת ולנס פרטית בלעדית לדיירי הפרויקט — חוויית Resort בתוך הבית.
          כל המתקנים זמינים בכל יום, בלי תשלום נוסף, צעד אחד מהלובי.
        </motion.p>
      </div>

      <div className="wellness-grid">
        {facilities.map((f, idx) => (
          <motion.article
            key={f.key}
            className="wellness-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.07 }}
          >
            <span className="wellness-icon" aria-hidden="true">{icons[f.key]}</span>
            <h3 className="wellness-card-title">{f.title}</h3>
            <p className="wellness-card-meta">{f.meta}</p>
          </motion.article>
        ))}
      </div>

      <motion.p
        className="wellness-foot"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.3 }}
      >
        כל המתקנים זמינים בלעדית לדיירי הפרויקט, ליצירת חוויית פרטיות מוחלטת.
      </motion.p>
    </section>
  )
}
