import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, Wind, Grid3X3, Droplets, Car } from 'lucide-react'

const specs = [
  { icon: Cpu, title: 'מערכת בית חכם', desc: 'שליטה מלאה בתאורה, תריסים ואקלים.' },
  { icon: Wind, title: 'מיזוג VRF מרכזי', desc: 'יחידה פנימית בכל חדר.' },
  { icon: Grid3X3, title: 'ריצוף 120/120', desc: 'פורצלן גדול-ממדים באיכות פרימיום.' },
  { icon: Droplets, title: 'ברזי GROHE', desc: 'ברזים ואביזרי טוש מבית GROHE הגרמנית.' },
  { icon: Car, title: 'שתי חניות לדירה', desc: 'חניות מקורות ומוגנות מובטחות.' },
]

export default function PremiumSpecs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
    }),
  }

  return (
    <section id="specs" ref={ref} className="py-24 md:py-32 bg-olive overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          custom={0} variants={fadeUp}
          initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="font-body text-[11px] font-[300] tracking-[0.35em] uppercase text-copper mb-5">
            Premium Specifications
          </p>
          <h2 className="font-heading text-3xl md:text-[2.2rem] font-[300] text-white leading-[1.2]">
            מפרט טכני של שלמות
          </h2>
        </motion.div>

        {/* Specs - top row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-white/[0.06]">
          {specs.slice(0, 3).map((spec, i) => {
            const Icon = spec.icon
            return (
              <motion.div
                key={i}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="border-b border-white/[0.06] p-8 group hover:bg-white/[0.03] transition-colors duration-300"
              >
                <Icon size={22} strokeWidth={1.5} className="text-copper mb-5" />
                <h3 className="font-heading text-lg font-[400] text-white mb-1.5">{spec.title}</h3>
                <p className="font-body text-[12px] font-[200] text-white/40 leading-[1.6]">{spec.desc}</p>
              </motion.div>
            )
          })}
        </div>
        {/* Bottom row 2, centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 max-w-[740px] mx-auto">
          {specs.slice(3).map((spec, i) => {
            const Icon = spec.icon
            return (
              <motion.div
                key={i + 3}
                custom={i + 4}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="border-b border-white/[0.06] p-8 group hover:bg-white/[0.03] transition-colors duration-300"
              >
                <Icon size={22} strokeWidth={1.5} className="text-copper mb-5" />
                <h3 className="font-heading text-lg font-[400] text-white mb-1.5">{spec.title}</h3>
                <p className="font-body text-[12px] font-[200] text-white/40 leading-[1.6]">{spec.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
