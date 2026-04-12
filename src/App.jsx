import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import {
  ChefHat,
  Flower2,
  Dumbbell,
  Leaf,
  Users,
  Handshake,
  Laptop,
  Blocks,
  MapPin,
  Phone,
  ArrowLeft,
  Plus,
  Menu,
  X,
} from 'lucide-react'

/* ═══════════════════════════════════════════════
   SMOOTH SCROLL — Lenis
   ═══════════════════════════════════════════════ */
function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
}

/* ═══════════════════════════════════════════════
   REVEAL WRAPPER
   ═══════════════════════════════════════════════ */
const Reveal = ({ children, delay = 0, y = 40, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
)

/* ═══════════════════════════════════════════════
   LOGO
   ═══════════════════════════════════════════════ */
const Logo = ({ dark = false, className = '', height = 44 }) => (
  <img
    src="/logo.svg"
    alt="G Park Wellness Living"
    style={{ height, width: 'auto' }}
    className={`block transition-[filter] duration-700 ${
      dark ? '' : 'invert brightness-0'
    } ${className}`}
  />
)

/* ═══════════════════════════════════════════════
   NAV LINKS — shared between desktop & mobile
   ═══════════════════════════════════════════════ */
const navLinks = [
  ['#vision', 'החזון'],
  ['#location', 'המיקום'],
  ['#wellness', 'הלייף־סטייל'],
  ['#residences', 'הדירות'],
  ['#value', 'ההזדמנות'],
  ['#contact', 'צור קשר'],
]

/* ═══════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled || menuOpen
            ? 'bg-[var(--color-paper)]/95 backdrop-blur-xl border-b border-[var(--color-stone)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-editorial flex items-center justify-between h-20 md:h-24">
          <a href="#top" className="flex items-center">
            <Logo dark={scrolled || menuOpen} height={40} />
          </a>

          {/* Desktop nav */}
          <ul
            className={`hidden lg:flex items-center gap-10 text-[0.8125rem] font-light transition-colors duration-500 ${
              scrolled ? 'text-[var(--color-ink)]' : 'text-[var(--color-paper)]'
            }`}
          >
            {navLinks.slice(0, 5).map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="relative py-2 hover:opacity-60 transition-opacity duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className={`hidden lg:inline-flex items-center gap-3 h-11 px-7 text-[0.7rem] tracking-[0.15em] uppercase border transition-all duration-500 ${
              scrolled
                ? 'border-[var(--color-sage)] text-[var(--color-sage)] hover:bg-[var(--color-sage)] hover:text-[var(--color-paper)]'
                : 'border-[var(--color-paper)]/70 text-[var(--color-paper)] hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)]'
            }`}
          >
            תיאום פגישה
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 transition-colors duration-500 ${
              scrolled || menuOpen ? 'text-[var(--color-ink)]' : 'text-[var(--color-paper)]'
            }`}
            aria-label="תפריט"
          >
            {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-paper)] pt-24"
          >
            <div className="container-editorial">
              <ul className="space-y-1">
                {navLinks.map(([href, label], i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-5 text-2xl font-light border-b border-[var(--color-stone)] text-[var(--color-ink)] hover:text-[var(--color-sage)] transition-colors"
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-12 space-y-4"
              >
                <a href="tel:+972523308287" className="flex items-center gap-3 text-[var(--color-mist)]">
                  <Phone size={18} strokeWidth={1} />
                  <span className="text-lg font-light">052‑330‑8287</span>
                </a>
                <div className="flex items-center gap-3 text-[var(--color-mist)]">
                  <MapPin size={18} strokeWidth={1} />
                  <span className="text-sm font-light">המנופים 11, הרצליה · מגדלי אקרשטיין</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ═══════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════ */
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden noise text-[var(--color-paper)]"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src="/images/render-aerial.jpg"
          alt="G Park Wellness Living"
          className="w-full h-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 hero-veil" />
      </motion.div>

      {/* Top micro meta */}
      <div className="absolute top-28 right-0 left-0 container-editorial hidden lg:flex items-start justify-between">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3"
        >
          <span className="eyebrow !text-[var(--color-paper)] opacity-60">
            Ramat Ha‑Sharon · 2026
          </span>
          <span className="h-px w-16 bg-[var(--color-paper)] opacity-30" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase opacity-50"
        >
          <span>N 32.13°</span>
          <span className="w-4 h-px bg-current" />
          <span>E 34.82°</span>
        </motion.div>
      </div>

      {/* Headline */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-center"
      >
        <div className="container-editorial w-full pt-12 md:pt-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="serif-display text-xl md:text-3xl mb-4 md:mb-6 opacity-90"
          >
            — Wellness Living
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="display-xl text-balance max-w-[14ch]"
          >
            חיים חכמים יותר.
            <br />
            <span className="opacity-85">חיים בריאים יותר.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-8 max-w-xl text-base md:text-xl font-light opacity-80 leading-relaxed text-pretty"
          >
            קומפלקס מגורים אקסקלוסיבי, קו ראשון לפארק האקולוגי
            של צפון תל אביב — חוויית ריזורט שקטה, בלב העיר.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 md:mt-14 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-5 md:gap-8"
          >
            <a href="#contact" className="btn btn-primary-on-dark">
              <span>לתיאום פגישה וקבלת מחירון</span>
              <ArrowLeft size={16} strokeWidth={1.25} />
            </a>
            <a href="#residences" className="btn-quiet">
              <span>קולקציית הדירות</span>
              <span className="rule" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="eyebrow !text-[var(--color-paper)]">גלול</span>
        <span className="h-10 w-px bg-[var(--color-paper)] opacity-40 animate-pulse" />
      </motion.div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   VISION / MANIFESTO
   ═══════════════════════════════════════════════ */
function Vision() {
  return (
    <section id="vision" className="section-rhythm-lg bg-[var(--color-paper)]">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="eyebrow mb-8">— 01 / החזון</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-md mb-10 md:mb-14 text-balance">
            <span className="serif-display text-[var(--color-wood)]">The Wellness Living.</span>
            <br />
            קומפלקס של שישה בניינים,
            <br />
            מהלך אחד של שקט.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="max-w-2xl mx-auto text-base md:text-xl font-light leading-relaxed text-[var(--color-mist)] text-pretty">
            G Park הוא לא עוד פרויקט מגורים. זו תפיסה הוליסטית של מרחב,
            שבו כל דירה נושמת ספורט, בריאות ורוגע — והקומפלקס כולו מציע
            חוויית ריזורט פרטית, זמינה אך ורק לדייריו.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-20 md:mt-28 grid grid-cols-3 gap-6 md:gap-20 border-y border-[var(--color-stone)] py-12 md:py-16">
            {[
              { n: '6', l: 'בניינים' },
              { n: '282', l: 'דונם פארק' },
              { n: '38K', l: '₪ למ״ר' },
            ].map((item) => (
              <div key={item.l} className="text-center">
                <div className="numeric text-4xl md:text-7xl text-[var(--color-sage)] leading-none">
                  {item.n}
                </div>
                <div className="eyebrow mt-3 md:mt-4">{item.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   LOCATION — with map
   ═══════════════════════════════════════════════ */
function Location() {
  return (
    <section id="location" className="bg-[var(--color-cream)] overflow-hidden">
      <div className="container-editorial section-rhythm">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5 order-2 lg:order-1">
            <p className="eyebrow mb-6 md:mb-8">— 02 / המיקום</p>
            <h2 className="display-md mb-8 md:mb-10 text-balance">
              צמוד לפארק של 282 דונם.
              <br />
              <span className="serif-display text-[var(--color-wood)]">בלב הריאה הירוקה</span> של צפון תל אביב.
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed text-[var(--color-mist)] mb-10 text-pretty">
              מיקום אסטרטגי ויוקרתי בנווה גן שברמת השרון — גובל ישירות עם
              רמת אביב ג׳, אפקה, תל ברוך צפון ונווה גן. קו ראשון לריאה
              הירוקה הגדולה ביותר באזור.
            </p>

            <ul className="space-y-0">
              {[
                {
                  t: 'ריאה ירוקה עירונית',
                  d: 'פארק אקולוגי של 282 דונם מתחת לבית — שבילי הליכה, ספורט ונוף ירוק.',
                },
                {
                  t: 'נגישות מקסימלית',
                  d: 'חיבור מהיר לאיילון ולצירי התנועה — נמל ת״א, מרכז ודרום תוך דקות.',
                },
                {
                  t: 'שכנות יוקרתית',
                  d: 'בין רמת אביב ג׳, אפקה, תל ברוך צפון ונווה גן — שקט ופרטיות.',
                },
              ].map((item) => (
                <li key={item.t} className="flex gap-4 border-t border-[var(--color-stone)] py-5 md:py-6">
                  <Plus size={16} strokeWidth={1} className="text-[var(--color-wood)] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm md:text-base font-medium mb-0.5">{item.t}</h3>
                    <p className="text-sm font-light text-[var(--color-mist)] leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7 order-1 lg:order-2">
            <div className="image-art rounded-sm overflow-hidden shadow-lg">
              <img
                src="/images/map-neighborhood.svg"
                alt="מפת השכונה — G Park, EVE, North Park, Avisroor"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-5 flex items-center justify-between text-xs md:text-sm text-[var(--color-mist)]">
              <span className="eyebrow">Ramat Ha‑Sharon</span>
              <span className="font-light">נווה גן · קו ראשון לפארק</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   WELLNESS CLUB — dark section
   ═══════════════════════════════════════════════ */
function Wellness() {
  const amenities = [
    { icon: ChefHat, title: 'אזור אירוח ומטבחי שף', desc: 'חלל מעוצב לאירוח, סדנאות שף וחוויות קולינריות פרטיות.' },
    { icon: Flower2, title: 'ספא וסאונה', desc: 'חלל מעוצב לרוגע מושלם — ניקוי רעלים, שחרור והתאוששות.' },
    { icon: Leaf, title: 'יוגה ופילאטיס', desc: 'סטודיו מואר וטבעי למדיטציה, יוגה ותנועה מודעת.' },
    { icon: Dumbbell, title: 'חדר כושר מתקדם', desc: 'מאובזר בציוד הקצה — אימוני כוח, קרדיו ופונקציונלי.' },
    { icon: Blocks, title: 'חדר פעילות ילדים', desc: 'חלל בטוח להתפתחות, השראה ומשחק מודרך.' },
    { icon: Users, title: 'מגרשי פאדל', desc: 'מגרשי פאדל מודרניים — משחק מקצועי או חברתי בתוך הבית.' },
    { icon: Laptop, title: 'חדר עבודה שיתופי', desc: 'מרחב co‑working פרודוקטיבי, מעוצב לעבודה מרחוק.' },
    { icon: Handshake, title: 'חדר פגישות', desc: 'חלל פרטי ומאובזר לאירוח פגישות עסקיות בסביבה יוקרתית.' },
  ]

  return (
    <section id="wellness" className="section-dark relative overflow-hidden">
      {/* Ambient image band */}
      <div className="absolute inset-y-0 left-0 w-1/2 opacity-15 pointer-events-none hidden lg:block">
        <img src="/images/render-pool.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-forest)] via-[var(--color-forest)]/60 to-transparent" />
      </div>

      <div className="relative container-editorial section-rhythm">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-24">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6 md:mb-8">— 03 / הלייף‑סטייל</p>
            <h2 className="display-md text-balance">
              <span className="serif-display text-[var(--color-sand)]">Body & Soul.</span>
              <br />
              קלאב של שמונה חללים.
              <br />
              שלכם בלבד.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-base md:text-lg font-light leading-relaxed opacity-75 text-pretty">
              הקונספט ״שתי הסוויטות״: בכל דירה — מיני חדר כושר, חדר
              מיינדפולנס וחדר רחצה עם נוף. בכל קומפלקס — שמונה חללי
              ווולנס משותפים שזמינים אך ורק לדיירי הפרויקט.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-paper)]/10 border border-[var(--color-paper)]/10">
          {amenities.map((a, i) => {
            const Icon = a.icon
            return (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="group bg-[var(--color-forest)] p-6 md:p-10 h-full flex flex-col gap-4 md:gap-6 hover:bg-[var(--color-sage)] transition-colors duration-700 min-h-[220px] md:min-h-[300px]">
                  <Icon
                    size={30}
                    strokeWidth={1}
                    className="text-[var(--color-sand)] group-hover:text-[var(--color-paper)] transition-colors duration-700"
                  />
                  <h3 className="text-base md:text-xl font-light">{a.title}</h3>
                  <p className="text-xs md:text-sm font-light opacity-60 leading-relaxed mt-auto">
                    {a.desc}
                  </p>
                  <span className="eyebrow opacity-30 group-hover:opacity-70 transition-opacity duration-500">
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   TWO SUITES — concept section
   ═══════════════════════════════════════════════ */
function TwoSuites() {
  return (
    <section id="suites" className="section-rhythm bg-[var(--color-paper)]">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start mb-12 md:mb-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6 md:mb-8">— הקונספט</p>
            <h2 className="display-md text-balance">
              <span className="serif-display text-[var(--color-wood)]">Two Suites.</span>
              <br />
              שתי סוויטות בכל דירה.
            </h2>
            <p className="mt-6 md:mt-8 text-base md:text-lg font-light leading-relaxed text-[var(--color-mist)] text-pretty">
              ב‑G Park הגדרנו מחדש את מושג הדירה. במקום שירותי הורים רגילים וממ״ד
              סטנדרטי של 10 מ״ר — כל דירה מגיעה עם שתי סוויטות שלמות:
            </p>

            {/* Suite cards */}
            <div className="mt-8 space-y-5">
              <div className="border border-[var(--color-sage)] p-6 relative">
                <span className="eyebrow text-[var(--color-sage)] mb-3 block">סוויטה ראשונה</span>
                <p className="text-lg font-light text-[var(--color-ink)] leading-snug mb-2">
                  יחידת הורים מלאה
                </p>
                <p className="text-sm font-light text-[var(--color-mist)]">
                  חדר שינה הורים רחב עם חדר רחצה פרטי — אמבטיה, מקלחת,
                  כיור כפול. כניסה ישירה, פרטיות מוחלטת.
                </p>
              </div>
              <div className="border border-[var(--color-wood)] p-6 relative">
                <span className="eyebrow text-[var(--color-wood)] mb-3 block">סוויטה שנייה</span>
                <p className="text-lg font-light text-[var(--color-ink)] leading-snug mb-2">
                  ממ״ד מורחב 15 מ״ר + חדר רחצה
                </p>
                <p className="text-sm font-light text-[var(--color-mist)]">
                  בניגוד לממ״ד הסטנדרטי (10 מ״ר), אנו מציעים ממ״ד של 15 מ״ר
                  עם חדר רחצה פרטי משלו — חלל גמיש שיכול לשמש כחדר עבודה,
                  חדר אורחים, או חדר לבן ובת עם פרטיות מלאה.
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm font-light text-[var(--color-mist)] text-pretty leading-relaxed">
              התוצאה: שני בני זוג שיוצאים לעבודה בשעות שונות, ילד מתבגר עם
              פרטיות, אורחים בכבוד — הכל בתוך הדירה עצמה.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="image-art rounded-sm overflow-hidden shadow-lg">
              <img
                src="/images/two-suites.svg"
                alt="תשריט קונספט שתי הסוויטות — יחידת הורים + ממ״ד מורחב"
                className="w-full h-auto"
              />
            </div>
            <p className="mt-3 text-xs text-[var(--color-mist)] text-center tracking-wider opacity-70">
              תשריט עקרוני — אינו מייצג דירה ספציפית
            </p>
          </Reveal>
        </div>

        {/* Spec row */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-stone)] border border-[var(--color-stone)]">
            {[
              { label: 'ממ״ד', value: '15 מ״ר + חדר רחצה' },
              { label: 'יחידת הורים', value: 'כיור כפול + אמבטיה' },
              { label: 'חלונות', value: 'מסך מהקרקע לתקרה' },
              { label: 'אינסטלציה', value: 'GROHE בכל הדירה' },
            ].map((s) => (
              <div key={s.label} className="bg-[var(--color-paper)] p-5 md:p-8 text-center">
                <p className="eyebrow mb-2 md:mb-3">{s.label}</p>
                <p className="text-sm md:text-base font-light text-[var(--color-ink)]">{s.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   INTERIOR VISION — full-bleed
   ═══════════════════════════════════════════════ */
function InteriorVision() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '12%'])

  return (
    <section ref={ref} className="relative h-[70vh] md:h-[90vh] min-h-[440px] overflow-hidden noise text-[var(--color-paper)]">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src="/images/render-interior.png"
          alt="חלל פנים G Park"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/85 via-[var(--color-ink)]/25 to-[var(--color-ink)]/50" />
      </motion.div>

      <div className="relative h-full container-editorial flex items-end pb-16 md:pb-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow !text-[var(--color-paper)] opacity-60 mb-5">
            — Interior Vision
          </p>
          <h2 className="display-lg text-balance">
            שילוב מושלם
            <br />
            <span className="serif-display">של פנים וחוץ.</span>
          </h2>
          <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg font-light opacity-80 text-pretty">
            חלונות מסך עצומים ומרפסות מרווחות מכניסים את הפארק אל תוך
            המגורים — ויוצרים תחושת מרחב, אור ואינסופיות.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   RESIDENCES — interactive selector
   ═══════════════════════════════════════════════ */
function Residences() {
  const [active, setActive] = useState('tower')

  const data = {
    tower: {
      label: 'The Tower',
      he: 'מגדל המגורים',
      floors: '14 קומות',
      count: '38 דירות',
      image: '/images/render-aerial.jpg',
      blurb:
        'מגדל בוטיק ממותג של 14 קומות ו‑38 דירות, עם לובי של 360 מ״ר בקומת הקרקע, חזית מסחרית שקטה ופנטהאוז מרהיב עם גג של 65 מ״ר.',
      units: [
        { type: '3 חדרים', size: '78 מ״ר + 10 מרפסת' },
        { type: '4 חדרים', size: '106 מ״ר + 12 מרפסת' },
        { type: '5 חדרים', size: '134 מ״ר + 14 מרפסת' },
        { type: 'מיני פנטהאוז', size: '158 מ״ר + 14 מרפסת · קומות 12‑13' },
        { type: 'פנטהאוז יוקרתי', size: '250 מ״ר + 65 מ״ר גג · קומה 14' },
      ],
    },
    boutique: {
      label: 'The Boutique',
      he: 'בנייני הבוטיק',
      floors: '6 קומות · 5 בניינים',
      count: '18 דירות לבניין',
      image: '/images/render-front.jpg',
      blurb:
        'חמישה בניינים אינטימיים בני שש קומות בלבד, עם לובי מפואר בכל בניין ודירות נדירות — כולל דירות גן פרטיות עם חצר.',
      units: [
        { type: 'דירת גן', size: '82 מ״ר + ~60 מ״ר גינה פרטית' },
        { type: '3 חדרים', size: '78 מ״ר + 10 מרפסת' },
        { type: '4 חדרים', size: '106 מ״ר + 12 מרפסת' },
        { type: '5 חדרים', size: '134 מ״ר + 14 מרפסת' },
        { type: 'פנטהאוז', size: '140 מ״ר + 35 מ״ר מרפסת · קומה 6' },
      ],
    },
  }
  const current = data[active]

  return (
    <section id="residences" className="section-rhythm bg-[var(--color-paper)]">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-12 md:mb-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-6 md:mb-8">— 04 / הדירות</p>
            <h2 className="display-md text-balance">
              <span className="serif-display text-[var(--color-wood)]">Choose your living.</span>
              <br />
              שתי דרכים לחיות את G Park.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm md:text-base font-light text-[var(--color-mist)] leading-relaxed">
              שני קונספטים משלימים — מגדל מונומנטלי עם נוף פנורמי,
              או קומפלקס בוטיק אינטימי. שניהם חולקים את אותו Social Club.
            </p>
          </Reveal>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 mb-10 md:mb-14 border-t border-b border-[var(--color-stone)]">
          {Object.entries(data).map(([k, v]) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`flex-1 py-6 md:py-10 text-start px-5 md:px-10 transition-all duration-500 border-r border-[var(--color-stone)] last:border-r-0 ${
                active === k
                  ? 'bg-[var(--color-ink)] text-[var(--color-paper)]'
                  : 'hover:bg-[var(--color-cream)]'
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <span className={`eyebrow block mb-1 md:mb-2 text-[0.6rem] md:text-xs ${active === k ? '!text-[var(--color-sand)]' : ''}`}>
                    {active === k ? '— בחירה נוכחית' : '— לחצו לבחירה'}
                  </span>
                  <h3 className="serif-display text-xl md:text-3xl">{v.label}</h3>
                  <p className="text-xs md:text-sm font-light opacity-70 mt-1">{v.he}</p>
                </div>
                <div className="text-end hidden md:block">
                  <p className="text-xs opacity-60">{v.floors}</p>
                  <p className="text-xs opacity-60">{v.count}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-16"
          >
            <div className="lg:col-span-7 image-art aspect-[4/3] rounded-sm overflow-hidden">
              <img src={current.image} alt={current.label} />
            </div>
            <div className="lg:col-span-5 flex flex-col">
              <p className="text-base md:text-lg font-light leading-relaxed text-[var(--color-mist)] text-pretty mb-6 md:mb-8">
                {current.blurb}
              </p>
              <div className="flex-1">
                <p className="eyebrow mb-4 md:mb-5">— תמהיל הדירות</p>
                <ul>
                  {current.units.map((u, i) => (
                    <li
                      key={i}
                      className="flex items-baseline justify-between gap-3 md:gap-4 border-t border-[var(--color-stone)] py-4 md:py-5 first:border-t-0"
                    >
                      <span className="text-base md:text-lg font-normal whitespace-nowrap">{u.type}</span>
                      <span className="text-xs md:text-sm font-light text-[var(--color-mist)] text-end">
                        {u.size}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="btn btn-primary mt-8 md:mt-12 self-start">
                <span>לקבלת מחירון מלא</span>
                <ArrowLeft size={16} strokeWidth={1.25} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   VALUE — comparison
   ═══════════════════════════════════════════════ */
function Value() {
  return (
    <section id="value" className="section-dark section-rhythm relative overflow-hidden">
      <div className="container-editorial">
        <div className="max-w-3xl mb-14 md:mb-20">
          <Reveal>
            <p className="eyebrow mb-6 md:mb-8">— 05 / ההזדמנות</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-md text-balance">
              <span className="serif-display text-[var(--color-sand)]">The Value Proposition.</span>
              <br />
              חיים ליד פארק צפון —
              <br />
              במחיר חכם יותר.
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[var(--color-paper)]/10 border border-[var(--color-paper)]/10 mb-12 md:mb-16">
          <Reveal>
            <div className="bg-[var(--color-forest)] p-8 md:p-16 h-full">
              <p className="eyebrow opacity-50 mb-4 md:mb-6">פרויקטים סמוכים</p>
              <div className="numeric text-5xl md:text-8xl text-[var(--color-sand)] opacity-40 line-through decoration-1">
                53,000
              </div>
              <p className="mt-2 md:mt-3 text-sm opacity-50">₪ למ״ר · אזור פארק צפון</p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="bg-[var(--color-sage)] p-8 md:p-16 h-full">
              <p className="eyebrow !text-[var(--color-sand)] mb-4 md:mb-6">G Park Wellness · מחיר השקה</p>
              <div className="numeric text-5xl md:text-8xl text-[var(--color-paper)]">
                38,000
              </div>
              <p className="mt-2 md:mt-3 text-sm opacity-75">₪ למ״ר · החל מ־</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 pt-10 md:pt-12 border-t border-[var(--color-paper)]/15">
            <div>
              <p className="eyebrow mb-3 md:mb-4">חיסכון של עד</p>
              <div className="numeric text-4xl md:text-7xl text-[var(--color-paper)]">
                ₪ 1,000,000
              </div>
              <p className="mt-2 md:mt-3 text-sm opacity-60">לדירה, בהשוואה לפרויקטים סמוכים</p>
            </div>
            <div className="max-w-sm text-sm font-light opacity-65 leading-relaxed">
              תנאי תשלום נוחים: 10% בחתימה, היתרה במועד המסירה.
              מחיר השקה לתקופת הפריסייל בלבד, וכל עוד יש מלאי.
            </div>
            <a href="#contact" className="btn btn-primary-on-dark shrink-0">
              <span>שריינו מחיר השקה</span>
              <ArrowLeft size={16} strokeWidth={1.25} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════════════ */
function Contact() {
  return (
    <section id="contact" className="section-rhythm bg-[var(--color-cream)]">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6 md:mb-8">— 06 / צור קשר</p>
            <h2 className="display-md mb-6 md:mb-8 text-balance">
              <span className="serif-display text-[var(--color-wood)]">Let's meet.</span>
              <br />
              בואו נכיר אתכם
              <br />
              לדירת החלומות.
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed text-[var(--color-mist)] max-w-md mb-10 md:mb-12 text-pretty">
              צוות המכירות שלנו ישמח לקבל אתכם לפגישה אישית במשרד המכירות,
              לסיור פרטי בפרויקט ולהצגת מחירון מלא.
            </p>

            <div className="space-y-0 text-base font-light">
              <div className="flex items-start gap-4 border-t border-[var(--color-stone)] py-5 md:py-6">
                <MapPin size={18} strokeWidth={1} className="text-[var(--color-wood)] mt-0.5 shrink-0" />
                <div>
                  <p className="eyebrow mb-1">משרד המכירות</p>
                  <p className="text-sm md:text-base">המנופים 11, הרצליה</p>
                  <p className="text-xs md:text-sm text-[var(--color-mist)]">מגדלי אקרשטיין · כניסה D</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-[var(--color-stone)] py-5 md:py-6">
                <Phone size={18} strokeWidth={1} className="text-[var(--color-wood)] mt-0.5 shrink-0" />
                <div>
                  <p className="eyebrow mb-1">טלפון ישיר</p>
                  <a href="tel:+972523308287" className="text-sm md:text-base hover:text-[var(--color-wood)] transition-colors">
                    052‑330‑8287
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
            <form className="space-y-0" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="שם מלא" required className="input-line" />
              <input type="tel" placeholder="טלפון" required className="input-line" />
              <input type="email" placeholder="אימייל" className="input-line" />
              <select className="input-line appearance-none pb-5 cursor-pointer">
                <option>דירה מועדפת</option>
                <option>דירת גן</option>
                <option>3 חדרים</option>
                <option>4 חדרים</option>
                <option>5 חדרים</option>
                <option>מיני פנטהאוז</option>
                <option>פנטהאוז</option>
              </select>
              <textarea
                placeholder="מסר"
                rows={3}
                className="input-line resize-none"
              />
              <div className="pt-10 md:pt-12">
                <button type="submit" className="btn btn-primary w-full md:w-auto">
                  <span>שליחת פרטים</span>
                  <ArrowLeft size={16} strokeWidth={1.25} />
                </button>
              </div>
              <p className="mt-6 md:mt-8 text-[0.7rem] md:text-xs font-light text-[var(--color-mist)] leading-relaxed max-w-lg">
                *ההדמיות, התכנים והתמונות המובאות בדף זה הינן להמחשה בלבד ואין
                מחייבות את החברה. ט.ל.ח.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-paper)] py-16 md:py-24">
      <div className="container-editorial">
        <div className="grid md:grid-cols-3 gap-10 md:gap-14 pb-14 md:pb-20 border-b border-[var(--color-paper)]/10">
          <div>
            <Logo dark={false} height={48} className="mb-4" />
            <p className="eyebrow opacity-50">Ramat Ha‑Sharon · 2026</p>
          </div>
          <div>
            <p className="eyebrow opacity-40 mb-3 md:mb-4">ניווט</p>
            <ul className="space-y-2 text-sm font-light">
              <li><a href="#vision" className="opacity-65 hover:opacity-100 transition-opacity">החזון</a></li>
              <li><a href="#location" className="opacity-65 hover:opacity-100 transition-opacity">המיקום</a></li>
              <li><a href="#wellness" className="opacity-65 hover:opacity-100 transition-opacity">הלייף‑סטייל</a></li>
              <li><a href="#residences" className="opacity-65 hover:opacity-100 transition-opacity">הדירות</a></li>
              <li><a href="#contact" className="opacity-65 hover:opacity-100 transition-opacity">צור קשר</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow opacity-40 mb-3 md:mb-4">יצירת קשר</p>
            <p className="text-sm font-light opacity-65 mb-1">המנופים 11, הרצליה</p>
            <p className="text-sm font-light opacity-65 mb-1">מגדלי אקרשטיין · כניסה D</p>
            <a
              href="tel:+972523308287"
              className="text-sm font-light opacity-65 hover:opacity-100 transition-opacity block mt-3"
            >
              052‑330‑8287
            </a>
          </div>
        </div>

        <div className="pt-6 md:pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[0.7rem] opacity-45 font-light">
          <p>© 2026 G Park Wellness Living. כל הזכויות שמורות.</p>
          <p>הדמיות להמחשה בלבד · ט.ל.ח.</p>
        </div>
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════════
   APP
   ═══════════════════════════════════════════════ */
export default function App() {
  useLenis()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Location />
        <Wellness />
        <TwoSuites />
        <InteriorVision />
        <Residences />
        <Value />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
