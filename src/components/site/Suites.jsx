import { motion } from 'framer-motion'

const features = [
  {
    title: 'יחידת הורים נוספת',
    body: 'שתי סוויטות מאסטר עצמאיות בכל דירה — לא חדר נוסף, אלא יחידת הורים מלאה משלה: חדר שינה, ארונות וחדר רחצה פרטי.',
  },
  {
    title: 'פרטיות אמיתית',
    body: 'הפרדה אדריכלית בין שתי הסוויטות, עם חדרי רחצה נפרדים ומרחבי שירות עצמאיים — נוחות מלאה לבני זוג עם זמנים שונים.',
  },
  {
    title: 'גמישות לכל סיטואציה',
    body: 'אידיאלי למשפחות מתבגרות, להורים מבוגרים, אירוח פרימיום, או שילוב של קליניקה ומשרד ביתי בלי להתפשר על המגורים.',
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

        <motion.figure
          className="suites-media"
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/images/floorplan-2-suites.png"
            alt="תכנית קומה תלת־ממדית — קונספט 2 הסוויטות בדירה מסוג G Park: שתי סוויטות מאסטר נפרדות, כל אחת עם חדר רחצה פרטי ומרחב הורים עצמאי, סלון משולב מטבח-פינת אוכל ומרפסת מעוגלת."
            loading="lazy"
            decoding="async"
          />
          <figcaption className="suites-media-caption">
            <span className="suites-media-eyebrow">תכנית להמחשה</span>
            <span>שתי סוויטות מאסטר · שני חדרי רחצה · מרחב הורים נוסף</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
