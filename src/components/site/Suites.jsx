import { motion } from 'framer-motion'

const features = [
  {
    title: 'פרטיות מוחלטת',
    body: 'שתי סוויטות מאסטר נפרדות בכל דירה, כל אחת עם חדר רחצה פרטי ומרחב עצמאי.',
  },
  {
    title: 'גמישות מושלמת',
    body: 'אידיאלי למשפחות מתבגרות, אירוח פרימיום, או שילוב של קליניקה / משרד ביתי.',
  },
  {
    title: 'זרימה אדריכלית',
    body: 'הפרדה חכמה המייצרת הרמוניה, שקט ונוחות מקסימלית בתוך הבית.',
  },
]

/**
 * "2 Suites" concept — page 8 of the deck. Floor-plan watercolor on one
 * side, three differentiated benefits on the other. The page is the most
 * concrete sales hook in the brief, so it sits high in the narrative —
 * right after Wellness and before the location story doesn't apply because
 * we want it as a closing-argument so it lives between Park and Residences.
 */
export default function Suites() {
  return (
    <section className="suites" id="suites" aria-label="קונספט שתי הסוויטות">
      <div className="suites-grid">
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            — חדשנות בתכנון
          </motion.span>
          <motion.h2
            className="suites-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            קונספט <em>״2 הסוויטות״.</em>
          </motion.h2>
          <motion.p
            className="suites-intro"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            ניצול חכם ובלעדי של חוק התכנון החדש. G&nbsp;Park מציג קונספט מגורים
            המגדיר מחדש את המרחב האישי — שתי סוויטות מאסטר, שני חדרי רחצה,
            פרטיות מקסימלית.
          </motion.p>

          <ul className="suites-list">
            {features.map((f, idx) => (
              <motion.li
                key={f.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 + idx * 0.1 }}
              >
                <h4>{f.title}</h4>
                <p>{f.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="suites-media"
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/images/scenes/page-08.jpg"
            alt="תכנית קומה — קונספט שתי הסוויטות עם שני חדרי רחצה ומרחבים נפרדים"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  )
}
