import { motion } from 'framer-motion'

const CARDS = [
  {
    n: '01',
    title: 'מיקום לפני הכול',
    body: 'שכונת נווה גן ברמת השרון, על גבול צפון תל אביב, עם חזית ישירה לפארק האקולוגי. בתי ספר וגנים במרחק הליכה, ויציאה מהירה לאיילון, לדרך נמיר ולצירי 2 ו־4.',
  },
  {
    n: '02',
    title: 'וולנס כמנוע מכירה',
    body: 'ספא דיירים עם סאונה וג׳קוזי, חדר כושר וסטודיו פילאטיס, לאונג׳ עם בר קפה — שגרת בוקר וערב שמתחילה ונגמרת בתוך הבית, ושמורה רק לדיירים.',
  },
  {
    n: '03',
    title: 'תמהיל אדריכלי ברור',
    body: 'מגדל בן 15 קומות וחמישה בנייני בוטיק של 7 קומות, בתכנון משרד בר אוריין. דירות 3 עד 6 חדרים, דירות גן עם 59–128 מ״ר גינה, ופנטהאוזים — קטגוריה לכל סוג קונה.',
  },
  {
    n: '04',
    title: 'אמון והמרה',
    body: 'G-Group כיזם, סטטוס בנייה שקוף ועדכני, פגישה פרונטלית במשרד המכירות בהרצליה — בלי לחץ ובלי מסלול ארוך. שיחה אחת מספיקה להבין אם הפרויקט מתאים לכם.',
  },
]

/**
 * Positioning — replaces the legacy Manifesto. Editorial 2x2 grid of
 * "what the new site must do in 10 seconds". Sets the brand promise before
 * the wellness story.
 */
export default function Positioning() {
  return (
    <section className="positioning" id="project" aria-label="מה הפרויקט עושה תוך 10 שניות">
      <div className="positioning-shell">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          — הפרויקט במבט אחד
        </motion.span>

        <motion.h2
          className="positioning-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          ארבעת הצירים של <em>פרויקט שלם.</em>
        </motion.h2>

        <motion.p
          className="positioning-intro"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          מיקום ירוק על גבול תל אביב, חוויית וולנס שלמה לדיירים, אדריכלות
          מבית בר אוריין, ויזם מנוסה שמלווה את הפרויקט עד המסירה — ארבעת
          המרכיבים שמשנים את הציפייה ממה שדירה צריכה להיות.
        </motion.p>

        <ul className="positioning-grid">
          {CARDS.map((c, idx) => (
            <motion.li
              key={c.n}
              className="positioning-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
            >
              <span className="positioning-card-num">{c.n}</span>
              <h3 className="positioning-card-title">{c.title}</h3>
              <p className="positioning-card-body">{c.body}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
