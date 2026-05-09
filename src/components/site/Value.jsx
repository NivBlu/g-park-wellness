import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function Counter({ to, format = (v) => v }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  const inView = useInView(ref, { amount: 0.6, once: true })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return controls.stop
  }, [inView, to])

  return <span ref={ref}>{format(val)}</span>
}

const fmtCommas = (v) => v.toLocaleString('en-US')

/**
 * Value — pages 9–10 of the deck. The "smart-money" pitch:
 * G Park starts at ₪38K/m² in an area where neighbouring projects sit at
 * ₪53–55K/m². That gap = up to ~₪1M in savings per apartment.
 *
 * Visualised as a comparison block with two animated counters and a
 * pull-quote pull-out. Sage-deep panel for editorial weight.
 */
export default function Value() {
  return (
    <section className="value site-section--dark" id="value" aria-label="ערך ההשקעה">
      <div className="value-shell">
        <motion.span
          className="eyebrow value-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          — החלטה חכמה
        </motion.span>

        <motion.h2
          className="value-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          חיסכון של עד <em>כ־1,000,000 ₪</em> לדירה.
        </motion.h2>

        <motion.p
          className="value-intro"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          לחיות את חוויית פארק צפון — אדריכלות עלית, מיקום אסטרטגי, חוויית
          Wellness מלאה — במחיר חכם יותר. ההזדמנות להשקעה ולמגורים הטובה
          ביותר כיום בגוש דן.
        </motion.p>

        <div className="value-grid">
          <motion.div
            className="value-card value-card--ghost"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="value-label">פרויקטים שכנים באזור</span>
            <p className="value-num">
              <span className="value-currency">₪</span>
              <Counter to={55000} format={fmtCommas} />
            </p>
            <span className="value-foot">למ״ר · ממוצע 53–55 אלף</span>
          </motion.div>

          <motion.div
            className="value-card value-card--hero"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="value-label">G PARK · WELLNESS</span>
            <p className="value-num value-num--hero">
              <span className="value-currency">₪</span>
              <Counter to={38000} format={fmtCommas} />
            </p>
            <span className="value-foot">למ״ר · החל מ</span>
          </motion.div>
        </div>

        <motion.p
          className="value-quote"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          המשמעות הישירה עבור הרוכשים — אותה חוויית Wellness, אותה אדריכלות,
          אותו מיקום. במחיר הנכון.
        </motion.p>
      </div>
    </section>
  )
}
