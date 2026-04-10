import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'

const types = [
  { type: 'דירות 3 חדרים', size: '78 מ"ר', balcony: '10 מ"ר מרפסת' },
  { type: 'דירות 4 חדרים', size: '106 מ"ר', balcony: '12 מ"ר מרפסת' },
  { type: 'דירות 5 חדרים', size: '134 מ"ר', balcony: '14 מ"ר מרפסת' },
  { type: 'פנטהאוזים יוקרתיים ודירות גן', size: null, balcony: null },
]

export default function Apartments() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
    }),
  }

  return (
    <section id="apartments" ref={ref} className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        
        {/* Header - Centered */}
        <motion.div
          custom={0} variants={fadeUp}
          initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-body text-[11px] font-[300] tracking-[0.35em] uppercase text-copper mb-5">
            The Collection
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.8rem] font-[300] text-charcoal leading-[1.2] mb-5">
            קולקציית הדירות
          </h2>
          <div className="divider-luxury-center mb-8" />
        </motion.div>

        {/* Hero Image Centered */}
        <motion.div
           custom={1} variants={fadeUp}
           initial="hidden" animate={isInView ? 'visible' : 'hidden'}
           className="mb-16 overflow-hidden group card-luxury max-w-[900px] mx-auto"
        >
          <div className="card-image-wrapper-4-3">
            <img
              src="/images/render-interior.png"
              alt="G Park Interior"
              className="w-full h-full object-cover card-image"
            />
          </div>
        </motion.div>

        {/* Content Centered Layout */}
        <div className="max-w-[800px] mx-auto">
          {/* Double Suite */}
          <motion.div
            custom={2} variants={fadeUp}
            initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="text-center mb-12"
          >
            <h3 className="font-heading text-xl md:text-2xl font-[500] text-charcoal mb-3">
              קונספט שתי הסוויטות
            </h3>
            <p className="font-body text-[14px] font-[300] text-charcoal-light leading-[1.9] max-w-[600px] mx-auto">
              בכל הדירות, חדר הממ"ד תוכנן כסוויטה נפרדת הכוללת חדר רחצה מלא, בנוסף ליחידת המאסטר של ההורים.
            </p>
          </motion.div>

          {/* Types list */}
          <div className="card-luxury p-6 md:p-10 mb-8">
            <div className="space-y-0">
              {types.map((apt, i) => (
                <motion.div
                  key={i}
                  custom={i + 3} variants={fadeUp}
                  initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                  className={`flex items-center justify-between py-5 border-charcoal/10 ${i !== types.length -1 ? 'border-b' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <Check size={18} strokeWidth={2} className="text-copper flex-shrink-0" />
                    <span className="font-heading text-[18px] font-[500] text-charcoal">
                      {apt.type}
                    </span>
                  </div>
                  {apt.size && (
                    <div className="text-left">
                      <span className="block font-heading text-[16px] font-[500] text-charcoal">
                        {apt.size}
                      </span>
                      <span className="block font-body text-[12px] font-[300] text-charcoal-light mt-1">
                        + {apt.balcony}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
