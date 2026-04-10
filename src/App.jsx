import './design-v3.css'
import { motion } from 'framer-motion'

// Navigation
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <a href="#" className="nav-logo">G PARK WELLNESS</a>
        <ul className="nav-links">
          <li><a href="#location" className="nav-link">המיקום</a></li>
          <li><a href="#lifestyle" className="nav-link">הלייף-סטייל</a></li>
          <li><a href="#apartments" className="nav-link">הדירות</a></li>
          <li><a href="#contact" className="nav-link">צור קשר</a></li>
        </ul>
      </div>
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="hero full-height" id="hero">
      <div className="hero-bg">
        <img src="/images/render-exterior.jpg" alt="G Park Wellness" />
      </div>
      <div className="hero-overlay" />
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="hero-subtitle">קומפלקס מגורים חדש מול הפארק</p>
        <h1 className="hero-title">חוויית לייף-סטייל וקולינריה פרטית בתוך העיר</h1>
        <p className="hero-description">
          הזדמנות ייחודית לחיות בלב הפארק האקולוגי, עם חווית ריזורט אקסקלוסיבית שלא הכרתם
        </p>
        <a href="#contact" className="btn btn-primary">
          לתיאום פגישה וקבלת מחירון
        </a>
      </motion.div>
    </section>
  )
}

// Location Section
function Location() {
  return (
    <section className="section" id="location">
      <div className="container">
        <div className="section-header">
          <p className="section-label">מיקום מושלם</p>
          <h2 className="section-title">המיקום שעושה את ההבדל</h2>
          <div className="section-line" />
        </div>
        <div className="location-map">
          <div className="location-card">
            <img src="/images/map-north.jpg" alt="צפון תל אביב" />
            <div className="location-info">
              <h3 className="location-title">רמת אביב ג'</h3>
              <p className="location-desc">גובל ישירות עם שכונות צפון תל אביב - רמת אביב ג', אפקה ותל ברוך צפון</p>
            </div>
          </div>
          <div className="location-card">
            <img src="/images/map-eve.jpg" alt="פרויקטים סמוכים" />
            <div className="location-info">
              <h3 className="location-title">שכנות ל-EVE ו-AVISOR</h3>
              <p className="location-desc">קו ראשון לפארק האקולוגי, מול פרויקטים מובילים באזור</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Lifestyle Section
function Lifestyle() {
  const features = [
    { icon: '🍽️', title: 'קולינריה', desc: 'מתחם שף וחללי אירוח יוקרתיים' },
    { icon: '🎾', title: 'פאדל', desc: 'מגרש תת-קרקעי מקצועי לדיירים' },
    { icon: '🏋️', title: 'חדר כושר', desc: 'מתקנים חדישים וסטודיו יוגה' },
    { icon: '🌿', title: 'גינות', desc: 'מרחבים ירוקים ושקטים למדיטציה' },
  ]
  
  return (
    <section className="section lifestyle" id="lifestyle">
      <div className="container">
        <div className="section-header">
          <p className="section-label">THE WELLNESS & LIFESTYLE CLUB</p>
          <h2 className="section-title">חוויה קולינרית וספורטיבית</h2>
          <div className="section-line" />
        </div>
        <div className="lifestyle-grid">
          {features.map((item, i) => (
            <motion.div 
              key={i} 
              className="lifestyle-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="lifestyle-icon">{item.icon}</div>
              <h3 className="lifestyle-title">{item.title}</h3>
              <p className="lifestyle-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Apartments Section
function Apartments() {
  const apartments = [
    { type: '3 חדרים', size: '77+10 מ"ר', price: 'מ-3.37M ₪' },
    { type: '4 חדרים', size: '104+12 מ"ר', price: 'מ-4.41M ₪' },
    { type: '5 חדרים', size: '134+14 מ"ר', price: 'מ-5.35M ₪' },
  ]
  
  return (
    <section className="section" id="apartments">
      <div className="container">
        <div className="section-header">
          <p className="section-label">קולקציית הדירות</p>
          <h2 className="section-title">אדריכלות מוקפדת</h2>
          <div className="section-line" />
        </div>
        <div className="apartments-grid">
          {apartments.map((apt, i) => (
            <motion.div 
              key={i} 
              className="apartment-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="apartment-image">
                <img src="/images/render-living.jpg" alt={apt.type} />
              </div>
              <div className="apartment-details">
                <h3 className="apartment-type">{apt.type}</h3>
                <div className="apartment-specs">
                  <span>🛏️ {apt.type}</span>
                  <span>📐 {apt.size}</span>
                </div>
                <p className="apartment-price">{apt.price}</p>
                <p className="apartment-note">מחיר השקה - לתקופת הפריסייל בלבד</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Value Section
function Value() {
  return (
    <section className="section value-section" id="value">
      <div className="container">
        <div className="section-header">
          <p className="section-label">הזדמנות כלכלית</p>
          <h2 className="section-title">מחירי השקה - פריסייל בלבד</h2>
          <div className="section-line" />
        </div>
        <div className="value-grid">
          <div className="value-card">
            <p className="value-label">מחיר למ"ר</p>
            <p className="value-price">38,000 ₪</p>
          </div>
          <div className="value-card value-highlight">
            <p className="value-label">חיסכון ממוצע</p>
            <p className="value-price">עד 1M ₪</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
          <span className="value-savings">בהשוואה לפרויקטים סמוכים באזור</span>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-label">צור קשר</p>
          <h2 className="section-title">שריינו את דירת החלומות</h2>
          <div className="section-line" />
        </div>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input type="text" className="form-input" placeholder="שם מלא" required />
            </div>
            <div className="form-group">
              <input type="tel" className="form-input" placeholder="טלפון" required />
            </div>
          </div>
          <div className="form-group">
            <input type="email" className="form-input" placeholder="אימייל" />
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            שלח פרטים
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: 'var(--space-md)', fontSize: '0.8rem', color: '#666' }}>
          מובהר בזאת הדמיה זו על כל המפורט בה לרבות השטחים הציבוריים... הנה להמחשה בלבד
        </p>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">G PARK WELLNESS</div>
          <div className="footer-contact">
            <p>המנופים 11, הרצליה | 052-3308287</p>
          </div>
        </div>
        <div className="footer-legal">
          <p>© 2026 G Park Wellness. כל הזכויות שמורות. הדמיות להמחשה בלבד. ט.ל.ח.</p>
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Location />
      <Lifestyle />
      <Apartments />
      <Value />
      <Contact />
      <Footer />
    </div>
  )
}

export default App