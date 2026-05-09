import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { label: 'דונם פארק אקולוגי',  unit: 'דונם', cap: 282 },
  { label: 'דקות לכביש החוף',     unit: 'דק׳',  cap: 4 },
  { label: 'דקות למרכז תל אביב',  unit: 'דק׳',  cap: 12 },
]

function Counter({ to }) {
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

  return <span ref={ref}>{val}</span>
}

/**
 * Park — location story straight off page 3 of the deck. Watercolor
 * neighbourhood map (extracted from the deck) on the right, narrative +
 * 282-dunam stat row on the left.
 */
export default function Park() {
  return (
    <section className="park" id="park" aria-label="הפארק והמיקום">
      <div className="park-grid">
        <motion.div
          className="park-media"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/images/scenes/page-03.jpg"
            alt="מפת המיקום — G Park על קצה הפארק האקולוגי של צפון תל אביב"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            — המיקום · פארק צפון
          </motion.span>
          <motion.h2
            className="park-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            הריאה הירוקה של <em>גוש דן.</em>
          </motion.h2>

          <div className="park-body">
            <p>
              בין תל אביב לרמת השרון, בלב סביבה ירוקה, שוכן הפארק האקולוגי —
              <strong> 282 דונם </strong> של ריאה ירוקה צמוד לבית. הקומפלקס
              ממוקם לצד שכונת נווה גן והשכונה החדשה: שמורת מגורים שמחברת
              ישירות לטבע, ובה-בעת מציעה גישה מהירה לנתיבי איילון, רמת אביב
              וצהלה.
            </p>
            <p className="park-body-soft">
              בכל דרך שתבחרו — תמיד תהיו קרובים.
            </p>
          </div>

          <motion.dl
            className="park-stats"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="park-stat-num">
                  <Counter to={s.cap} />
                  <span className="park-stat-unit">{s.unit}</span>
                </dd>
                <dt className="park-stat-label">{s.label}</dt>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}
