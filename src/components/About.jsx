import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
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
    <section id="about" ref={ref} className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          custom={0} variants={fadeUp}
          initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-body text-[11px] font-[300] tracking-[0.35em] uppercase text-copper mb-5">
            The Project
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.8rem] font-[300] text-charcoal leading-[1.2] mb-5">
            פרויקט מגורים ייחודי בישראל
          </h2>
          <div className="divider-luxury-center mb-8" />
          <p className="font-body text-[14px] font-[200] text-charcoal-light leading-[2] max-w-[600px] mx-auto">
            G Park Wellness Living מציע חוויית מגורים שלא הכרתם. שילוב של דירות יוקרה עם מתחם ריזורט פרטי לדיירים בלבד, בקו ראשון לפארק אקולוגי ענק.
          </p>
        </motion.div>

        {/* Image grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            custom={1} variants={fadeUp}
            initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="overflow-hidden group card-luxury"
          >
            <div className="card-image-wrapper">
              <img
                src="/images/render-street.jpg"
                alt="G Park Street View"
                className="w-full h-full object-cover card-image"
              />
            </div>
          </motion.div>

          <motion.div
            custom={2} variants={fadeUp}
            initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="overflow-hidden group card-luxury"
          >
            <div className="card-image-wrapper">
              <img
                src="/images/render-front.jpg"
                alt="G Park Front View"
                className="w-full h-full object-cover card-image"
              />
            </div>
          </motion.div>
        </div>

        {/* Caption */}
        <motion.div
          custom={3} variants={fadeUp}
          initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <p className="font-body text-[12px] font-[200] text-charcoal-light tracking-wide">
            הדמיות הפרויקט להמחשה בלבד
          </p>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="font-heading text-2xl font-[300] text-charcoal">3-5</p>
              <p className="font-body text-[11px] font-[300] text-charcoal-light">חדרים</p>
            </div>
            <div className="w-px h-8 bg-charcoal/10" />
            <div className="text-center">
              <p className="font-heading text-2xl font-[300] text-charcoal">78-134</p>
              <p className="font-body text-[11px] font-[300] text-charcoal-light">מ"ר</p>
            </div>
            <div className="w-px h-8 bg-charcoal/10" />
            <div className="text-center">
              <p className="font-heading text-2xl font-[300] text-copper">פנטהאוזים</p>
              <p className="font-body text-[11px] font-[300] text-charcoal-light">יוקרתיים</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
