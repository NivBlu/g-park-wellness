import { motion } from 'framer-motion'

const BULLETS = [
  {
    title: 'שכונה ירוקה על קצה העיר',
    body: 'נווה גן היא שכונה שקטה של בתים פרטיים ובנייה נמוכה — רחובות ירוקים, גנים ובתי ספר במרחק הליכה, ופארק אקולוגי של 282 דונם ממש מעבר לרחוב.',
  },
  {
    title: 'תחבורה ונגישות יום־יומית',
    body: 'דקות ספורות לאיילון ולדרך נמיר, כעשר דקות לנמל תל אביב, וכרבע שעה לאוניברסיטת תל אביב ולמתחמי תעסוקה בהרצליה פיתוח — בלי לעבור בעיר.',
  },
  {
    title: 'בין צפון תל אביב לרמת השרון',
    body: 'הפרויקט יושב על הגבול בין שתי הערים — נהנה מהשירותים והמוסדות של רמת השרון, ומקרבה מיידית לרמת אביב, צהלה ובוטיקים של נווה אביבים.',
  },
]

/**
 * Location — map-led editorial block with floating place labels and
 * three supporting bullets. Uses the existing neighborhood SVG.
 */
export default function Location() {
  return (
    <section className="location" id="location" aria-label="מיקום הפרויקט">
      <div className="location-shell">
        <div className="location-copy">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            — המיקום
          </motion.span>
          <motion.h2
            className="location-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            בין רמת השרון לתל אביב,
            <br />
            על <em>גבול הפארק.</em>
          </motion.h2>

          <motion.p
            className="location-intro"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            G Park יושב בלב נווה גן ברמת השרון, על הגבול הצפוני של תל אביב,
            עם חזית פתוחה לפארק האקולוגי. רחובות ירוקים ושקטים, בתי ספר וגני
            ילדים במרחק הליכה, ויציאה מהירה לאיילון ולדרך נמיר — כעשר דקות
            לנמל תל אביב, רבע שעה לאוניברסיטה ולמתחמי התעסוקה בהרצליה פיתוח.
          </motion.p>

          <p className="location-pull">
            &laquo; שכונה של בתים, לא של פרויקטים &raquo;
          </p>

          <ul className="location-bullets">
            {BULLETS.map((b, idx) => (
              <motion.li
                key={b.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 + idx * 0.1 }}
              >
                <h4>{b.title}</h4>
                <p>{b.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="location-map"
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/images/map-site.png"
            alt="מפת אתר של G Park Wellness Living — המתחם על קצה הפארק האקולוגי של נווה גן, ברמת השרון, על גבול צפון תל אביב"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  )
}
