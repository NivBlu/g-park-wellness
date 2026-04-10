import { motion, useInView, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-scroll'

function AnimatedNumber({ value, duration = 2, prefix = '', suffix = '', inView }) {
  const [displayValue, setDisplayValue] = useState(0)
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 })
  
  useEffect(() => {
    if (inView) {
      spring.set(value)
    }
  }, [inView, value, spring])
  
  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsubscribe
  }, [spring])
  
  const formatted = displayValue.toLocaleString('he-IL')
  
  return (
    <span>
      {prefix}{formatted}{suffix}
    </span>
  )
}

export default function ValueProposition() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }
    }),
  }

  return (
    <section id="pricing" ref={ref} className="relative bg-olive py-24 md:py-32 overflow-hidden text-center">
      {/* Ambient glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-copper/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-copper/3 blur-[80px] pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative">
        
        {/* Header */}
        <motion.div
          custom={0} variants={fadeUp}
          initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <p className="font-body text-[11px] font-[300] tracking-[0.35em] uppercase text-copper/80 mb-5">
            Investment Opportunity
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-[300] text-white leading-[1.2] mb-3">
            הזדמנות כלכלית נדירה
          </h2>
          <h2 className="font-heading text-3xl md:text-5xl font-[300] text-copper leading-[1.2]">
            באזור פארק צפון
          </h2>
        </motion.div>

        {/* Content Block */}
        <motion.div
          custom={1} variants={fadeUp}
          initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="max-w-[800px] mx-auto"
        >
          <p className="font-body text-[16px] font-[200] text-white/60 leading-[2] mb-12">
            בעוד פרויקטים סמוכים נמכרים כיום ב-53,000 עד 55,000 ש"ח למ"ר,<br className="hidden md:block" />
            G Park Wellness מציע הזדמנות בלעדית לתקופת הפריסייל.
          </p>

          {/* Stats Grid - Premium Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {/* Launch Price Card */}
            <motion.div
              custom={2} variants={fadeUp}
              initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="group relative bg-white/[0.03] p-8 md:p-10 rounded-xl border border-white/[0.08] shadow-xl hover:border-copper/30 transition-all duration-500"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-copper/50 to-transparent" />
                <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-r from-copper/50 to-transparent" />
              </div>
              
              <p className="font-body text-[11px] font-[300] tracking-[0.2em] uppercase text-white/40 mb-4 group-hover:text-white/60 transition-colors">
                מחיר השקה בלעדי
              </p>
              <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-[400] text-white">
                החל מ-{' '}
                <span className="text-copper group-hover:text-copper/80 transition-colors">
                  <AnimatedNumber value={38000} prefix='' suffix=' ₪' inView={isInView} />
                </span>
              </p>
              
              {/* Subtle shine */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-copper/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
            
            {/* Savings Card - HIGHLIGHT */}
            <motion.div
              custom={3} variants={fadeUp}
              initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="group relative bg-gradient-to-br from-copper/10 via-white/[0.02] to-transparent p-8 md:p-10 rounded-xl border border-copper/30 shadow-xl hover:border-copper/50 transition-all duration-500"
            >
              {/* Animated shine background */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-copper/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-out" />
              </div>
              
              {/* Copper corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-copper/60 to-transparent" />
                <div className="absolute top-0 left-0 h-px w-12 bg-gradient-to-r from-copper/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-px h-12 bg-gradient-to-t from-copper/60 to-transparent" />
                <div className="absolute bottom-0 right-0 h-px w-12 bg-gradient-to-l from-copper/60 to-transparent" />
              </div>
              
              <p className="font-body text-[11px] font-[300] tracking-[0.2em] uppercase text-copper/70 mb-4 group-hover:text-copper transition-colors">
                חיסכון לדירה
              </p>
              <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-[600] text-white">
                עד{' '}
                <span className="text-copper bg-gradient-to-r from-copper to-white bg-clip-text text-transparent">
                  <AnimatedNumber value={1000000} prefix='' suffix=' ₪' inView={isInView} />
                </span>
              </p>
              
              {/* Premium badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-copper/20 border border-copper/40 rounded-full">
                <span className="font-body text-[10px] tracking-[0.15em] uppercase text-copper">
                  מבצע מיוחד
                </span>
              </div>
            </motion.div>
          </div>

          <Link to="contact" smooth duration={800} offset={-80} className="inline-block">
            <button className="btn-accent-luxury flex items-center justify-center gap-2 w-full md:w-auto shadow-lg rounded-lg">
              <span>קבלו הצעה אישית</span>
              <ArrowLeft size={16} strokeWidth={1.5} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}