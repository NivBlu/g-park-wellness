import { ArrowLeft, Image as ImageIcon } from 'lucide-react'
import Logo from './Logo.jsx'

/**
 * Hero — cinematic tower render with the new positioning copy.
 * Two CTAs scroll to the apartment finder and the gallery.
 */
export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="G Park Wellness Living">
      <div className="hero-media" aria-hidden="true">
        <img
          src="/images/render-tower-hero.jpg"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
      </div>

      <div className="hero-content">
        <span className="hero-eyebrow hero-anim" style={{ animationDelay: '0.2s' }}>
          G Park · Wellness Living
        </span>

        <div className="hero-brand hero-anim" style={{ animationDelay: '0.4s' }}>
          <Logo height={84} variant="light" byline />
        </div>

        <h1 className="hero-title hero-anim" style={{ animationDelay: '0.6s' }}>
          חיים על הפארק.
          <br />
          <em>ריזורט פרטי</em> ברמת השרון.
        </h1>

        <div className="hero-meta hero-anim" style={{ animationDelay: '0.85s' }}>
          <p className="hero-tagline">
            הקונספט החדש של G&nbsp;Park מציג חוויית Wellness Living מלאה:
            מיקום ירוק, אדריכלות יוקרתית, מתקני דיירים, תמהיל דירות מגוון
            וחיים שמרגישים כמו ריזורט פרטי בתוך העיר.
          </p>

          <ul className="hero-stats" aria-label="נתוני הפרויקט">
            <li>
              <span className="hero-stat-num">3–6</span>
              <span className="hero-stat-label">חדרים</span>
            </li>
            <li>
              <span className="hero-stat-num">12<small> מ״ר</small></span>
              <span className="hero-stat-label">מרפסות&nbsp;טיפוסיות</span>
            </li>
            <li>
              <span className="hero-stat-num"><em>Wellness</em></span>
              <span className="hero-stat-label">מתקני&nbsp;דיירים</span>
            </li>
          </ul>
        </div>

        <div className="hero-actions hero-anim" style={{ animationDelay: '1.05s' }}>
          <a href="#apts" className="btn btn-primary">
            <span>קבלו תמהיל דירות</span>
            <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
          <a href="#gallery" className="btn btn-ghost">
            <ImageIcon size={16} strokeWidth={1.5} aria-hidden="true" />
            <span>צפו בהדמיות</span>
          </a>
        </div>
      </div>

      <span className="hero-scroll-cue" aria-hidden="true">גלילה</span>
    </section>
  )
}
