import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Custom SVG Icons - Quiet Luxury
const PoolIcon = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="#B08D6B" strokeWidth="1.5">
    <path d="M8 48c0-8 8-16 16-16s16 8 16 16M8 36c0-8 8-16 16-16s16 8 16 16M8 24c0-8 8-16 16-16s16 8 16 16M40 48V12M48 24v-8M56 32v-16" strokeLinecap="round"/>
    <path d="M44 8v8M52 16v8" strokeLinecap="round"/>
  </svg>
)

const FitnessIcon = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="#B08D6B" strokeWidth="1.5">
    <circle cx="32" cy="32" r="20"/>
    <path d="M20 32h24M32 12v40"/>
    <path d="M22 22l20 20M22 42l20-20" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="6" strokeWidth="2"/>
  </svg>
)

const LobbyIcon = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="#B08D6B" strokeWidth="1.5">
    <path d="M12 56V32l20-20 20 20v24H12z"/>
    <path d="M24 56v-14h16v14"/>
    <path d="M28 24h8" strokeLinecap="round"/>
    <circle cx="32" cy="18" r="3"/>
    <path d="M26 56h12" strokeLinecap="round"/>
  </svg>
)

const icons = [<PoolIcon />, <FitnessIcon />, <LobbyIcon />]

const amenities = [
  {
    title: 'בריכת שחייה ומתחם ספא',
    desc: 'בריכה מחוממת לכל עונות השנה, ג\'קוזי, סאונה יבשה ורטובה, וחדרי טיפולים פרטיים.',
    image: '/images/render-pool.png',
    span: 'md:col-span-2',
  },
  {
    title: 'חדר כושר וסטודיו יוגה',
    desc: 'חדר כושר מאובזר במכשירים מתקדמים וסטודיו יוגה עם נוף פנורמי.',
    image: '/images/render-fitness.png',
    span: '',
  },
  {
    title: 'לובי מלונאי מפואר',
    desc: 'קבלת פנים מלונאית עם קונסיירז\' ואזורי ישיבה מעוצבים.',
    image: '/images/render-lobby.png',
    span: '',
  },
]

export default function WellnessResort() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
    }),
  }

  return (
    <section id="wellness" ref={ref} className="py-24 md:py-32 bg-cream-dark">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          custom={0} variants={fadeUp}
          initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="font-body text-[11px] font-[300] tracking-[0.35em] uppercase text-copper mb-5">
            The Wellness Resort
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.8rem] font-[300] text-charcoal leading-[1.2] mb-5">
            מתחם פרטי לדיירים בלבד
          </h2>
          <div className="divider-luxury-center" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={`group relative overflow-hidden rounded-xl 
                bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d]
                border border-copper/20
                hover:border-copper/60
                hover:shadow-xl
                transition-all duration-500 ease-out
                cursor-pointer
                ${item.span}`}
            >
              <div className="relative h-[280px] md:h-[360px] overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                />
                {/* Luxury gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/85 via-[#0a0a0a]/30 to-transparent" />
                
                {/* Copper shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
                  bg-gradient-to-br from-copper/10 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 right-0 left-0 p-6 md:p-8">
                  {/* Icon */}
                  <div className="mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    {icons[i]}
                  </div>
                  
                  <h3 className="font-heading text-xl md:text-2xl font-[400] text-white mb-2 
                    group-hover:text-copper transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-body text-[12px] font-[200] text-white/45 leading-[1.7] max-w-md 
                    group-hover:text-white/70 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
