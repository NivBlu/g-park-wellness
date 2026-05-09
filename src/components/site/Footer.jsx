import Logo from './Logo.jsx'

/**
 * Editorial footer. Brand block on the right (Logo + By G-Group), columns
 * for sales office address (per page 12 of deck), project info, and the
 * legal credit row underneath.
 */
export default function Footer() {
  return (
    <footer className="site-footer" id="contact" aria-label="פרטי קשר וצוות הפרויקט">
      <div className="site-footer-grid">
        <div className="site-footer-brand-col">
          <Logo height={42} variant="light" byline />
          <p className="site-footer-tag">
            קומפלקס מגורים בוטיק עם קומת ולנס פרטית, בקו ראשון לפארק האקולוגי
            של צפון תל אביב — 282 דונם של ריאה ירוקה צמוד לבית.
          </p>
        </div>

        <div className="site-footer-col">
          <h5>משרד מכירות</h5>
          <ul>
            <li>המנופים 11, הרצליה</li>
            <li>מגדלי אקרשטיין · בניין D · קומה 5</li>
            <li><a href="tel:+972523308287" dir="ltr">052-330-8287</a></li>
            <li><a href="mailto:sales@g-park.life">sales@g-park.life</a></li>
            <li>פתוח לתיאום בלבד</li>
          </ul>
        </div>

        <div className="site-footer-col">
          <h5>הפרויקט</h5>
          <ul>
            <li><a href="#architecture">האדריכלות</a></li>
            <li><a href="#wellness">מתקני ולנס</a></li>
            <li><a href="#suites">2 הסוויטות</a></li>
            <li><a href="#value">ערך ההשקעה</a></li>
            <li><a href="/catalog">קטלוג דירות</a></li>
          </ul>
        </div>
      </div>

      <div className="site-footer-base">
        <span>© G&nbsp;Park · Wellness Living · By G‑Group · {new Date().getFullYear()}</span>
        <span>אדריכלות: בר אוריין · כל ההדמיות והאיורים להמחשה בלבד · ט.ל.ח</span>
      </div>
    </footer>
  )
}
