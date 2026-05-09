import Logo from './Logo.jsx'

/**
 * Cover. Full-bleed tower rendering at golden hour. CSS-only stagger so
 * the Hero stays visible even before/while React hydrates — entrance
 * animations are decorative, not gating.
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
          רמת השרון · קו ראשון לפארק האקולוגי
        </span>

        <div className="hero-brand hero-anim" style={{ animationDelay: '0.4s' }}>
          <Logo height={88} variant="light" byline />
        </div>

        <h1 className="hero-title hero-anim" style={{ animationDelay: '0.6s' }}>
          חיים <em>בריאים</em> יותר.
          <br />
          חיים <em>חכמים</em> יותר.
        </h1>

        <div className="hero-meta hero-anim" style={{ animationDelay: '0.85s' }}>
          <p className="hero-tagline">
            מתחם מגורים חדש מול הפארק האקולוגי, שתוכנן סביב תפיסת חיים שלמה
            של בריאות, ספורט ורוגע — סביבת Resort בתוך העיר, אקסקלוסיבית
            לדיירי הפרויקט בלבד.
          </p>

          <ul className="hero-stats" aria-label="נתוני הפרויקט">
            <li>
              <span className="hero-stat-num">15</span>
              <span className="hero-stat-label">קומות מגדל</span>
            </li>
            <li>
              <span className="hero-stat-num">282</span>
              <span className="hero-stat-label">דונם פארק&nbsp;צמוד</span>
            </li>
            <li>
              <span className="hero-stat-num">38K</span>
              <span className="hero-stat-label">שח&nbsp;למ״ר · החל&nbsp;מ</span>
            </li>
          </ul>
        </div>
      </div>

      <span className="hero-scroll-cue" aria-hidden="true">גלילה</span>
    </section>
  )
}
