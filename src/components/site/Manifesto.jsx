import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

/**
 * Vision — taken almost verbatim from page 2 of the G-Group deck.
 * Lead line on the left, supporting paragraphs on the right, with a
 * sage pull-quote panel at the bottom.
 */
export default function Manifesto() {
  return (
    <section className="manifesto" id="manifesto" aria-label="החזון">
      <div className="manifesto-grid">
        <motion.span
          className="eyebrow manifesto-eyebrow"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          — החזון · Wellness Living
        </motion.span>

        <motion.h2
          className="manifesto-line"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          זהו לא רק <em>מקום מגורים.</em>
          <br />
          זהו ה־<em>Lifestyle</em> שלכם.
        </motion.h2>

        <motion.div
          className="manifesto-body"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>
            מתחם מגורים חדש מול הפארק האקולוגי, שתוכנן סביב תפיסת חיים שלמה של
            בריאות, ספורט ורוגע. אדריכלות פורצת דרך פוגשת סביבה ירוקה, שקטה
            ומוגנת — כל פרט תוכנן כדי להעניק לכם את אורח החיים שמגיע לכם.
          </p>
          <p>
            בלב המתחם — קומת ולנס בלעדית לדיירים בלבד: סטודיו יוגה ופילאטיס
            מואר, ספא וסאונה, חדר כושר מתקדם, מטבחי שף, גינת מדיטציה, ומועדון
            אופניים וריצה. <em>חוויית Resort בתוך העיר.</em>
          </p>
        </motion.div>

        <motion.aside
          className="manifesto-quote"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p>
            סביבת Resort בתוך העיר —
            <br />
            <strong>אקסקלוסיבית לדיירי הפרויקט בלבד.</strong>
          </p>
        </motion.aside>
      </div>
    </section>
  )
}
