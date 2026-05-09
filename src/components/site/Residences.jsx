import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const residences = [
  {
    n: '01',
    title: 'דירות גן',
    meta: 'גינה פרטית · קומת קרקע',
    href: '/catalog?building=tower',
  },
  {
    n: '02',
    title: 'דירות טיפוסיות',
    meta: 'מגדל · בוטיק · 3–6 חדרים',
    href: '/catalog?building=tower',
  },
  {
    n: '03',
    title: 'פנטהאוזים בוטיק',
    meta: 'גג בלעדי · 7 קומות',
    href: '/catalog?building=boutique-w',
  },
  {
    n: '04',
    title: 'מגה־פנטהאוז',
    meta: 'דירה אחת · קומה 15',
    href: '/catalog',
  },
]

/**
 * Residences — entry points to the catalog. Avoids quoting unit-mix
 * figures (per the brief, the deck's mix is outdated). Each card filters
 * the catalog to its building / category.
 */
export default function Residences() {
  return (
    <section className="residences" id="residences" aria-label="הדירות">
      <div className="residences-head">
        <motion.span
          className="eyebrow"
          style={{ color: 'var(--bronze)' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          — הדירות
        </motion.span>
        <motion.h2
          className="residences-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          חמש <em>קטגוריות.</em> אינסוף שילובים.
        </motion.h2>
        <motion.p
          className="residences-intro"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          ממגדל הפארק בן 15 הקומות ועד פנטהאוזי הבוטיק על גגות החזית הצפונית
          והמערבית. בחרו קטגוריה והיכנסו לקטלוג המלא — כל תוכנית, כל גודל.
        </motion.p>
      </div>

      <div className="residences-grid">
        {residences.map((r, idx) => (
          <motion.div
            key={r.n}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
          >
            <Link to={r.href} className="residence-card" aria-label={`${r.title} — לקטלוג`}>
              <span className="residence-card-num">{r.n}</span>
              <h3 className="residence-card-title">{r.title}</h3>
              <span className="residence-card-meta">{r.meta}</span>
              <span className="residence-card-arrow" aria-hidden="true">
                <ArrowLeft size={16} strokeWidth={1.5} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
