import { motion } from 'framer-motion'

const callouts = [
  {
    n: '01',
    title: 'מגדל הפארק · 15 קומות',
    body: 'מגדל יוקרה בן 15 קומות, נוף פנורמי מרהיב לכיוון הים, הירקון ומרחבי השרון — עיצוב אייקוני המגדיר מחדש את קו הרקיע.',
  },
  {
    n: '02',
    title: 'מרקמי בוטיק · 7 קומות',
    body: 'בנייני בוטיק אינטימיים בני 7 קומות, חיבור בלתי אמצעי לפארק ולמרחבי הטבע — תחושת קהילה ופרטיות מקסימלית.',
  },
  {
    n: '03',
    title: 'הרמוניה אדריכלית',
    body: 'דיאלוג אדריכלי בין שתי הטיפולוגיות — מגדל לצד בוטיק — שמייצר שפה אחת חדשה: עירונית מצד אחד, אינטימית וירוקה מהצד השני.',
  },
]

/**
 * Architecture — boutique facade rendering paired with three numbered
 * callouts pulled from page 5 of the deck (Tower / Boutique / Harmony).
 * Bar Orian credit added below.
 */
export default function Architecture() {
  return (
    <section className="arch site-section--dark" id="architecture" aria-label="האדריכלות">
      <div className="arch-grid">
        <motion.div
          className="arch-media"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/images/render-boutique-retail.jpg"
            alt="חזית מסחרית של מרקמי הבוטיק עם מתקני הוולנס בקומת הקרקע"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <div>
          <motion.span
            className="eyebrow arch-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            — האדריכלות
          </motion.span>
          <motion.h2
            className="arch-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          >
            חתימת ידו של <em>גידי בר אוריין.</em>
          </motion.h2>

          <motion.p
            className="arch-byline"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            משרד בר אוריין אדריכלים — מהמובילים בישראל ואחראי על קו הרקיע
            של תל אביב-יפו — אמון על התכנון האדריכלי של G&nbsp;Park, ומביא
            לפרויקט שפה ייחודית המחברת בין העיר לטבע.
          </motion.p>

          <ul className="arch-callouts">
            {callouts.map((c, idx) => (
              <motion.li
                key={c.n}
                className="arch-callout"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 + idx * 0.12 }}
              >
                <span className="arch-callout-num">{c.n}</span>
                <div className="arch-callout-body">
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
