import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-scroll'
import { useRef } from 'react'

// Stagger container for elegant entrance animations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

// Individual stagger children with smooth easing
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  // Parallax effect - image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id="hero" ref={ref} className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background - pool resort render with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14, ease: 'linear' }}
        >
          <img
            src="/images/render-pool.png"
            alt="G Park Wellness Resort Pool"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Dark overlay with slight gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/55" />

      {/* Content with fade on scroll */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center max-w-[1100px] mx-auto px-6 md:px-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
      >
        
        {/* Welcome Text */}
        <motion.p
          variants={fadeInUp}
          className="font-body text-[13px] md:text-[15px] font-[500] text-white/90 tracking-[0.45em] uppercase mb-8"
        >
          Welcome To
        </motion.p>
        
        {/* Logo mark - removed brightness-0 invert, kept natural */}
        <motion.div
          variants={fadeInScale}
          className="mb-8"
        >
          <img
            src="/images/logo.png"
            alt="G Park Wellness Living"
            className="h-24 md:h-32 lg:h-40"
          />
        </motion.div>

        {/* Subtitle - improved contrast with text shadow */}
        <motion.h2
          variants={fadeInUp}
          className="font-heading text-2xl md:text-4xl lg:text-5xl font-[300] text-white tracking-wide mb-14 text-center leading-relaxed"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
        >
          חוויית Wellness Resort בתוך העיר
        </motion.h2>

        {/* CTA Button - 48px height, elegant premium style */}
        <motion.div variants={fadeInUp}>
          <Link to="about" smooth duration={800} offset={-80}>
            <button className="h-12 px-8 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-body text-sm tracking-[0.1em] rounded-lg transition-all duration-300 hover:bg-white hover:text-charcoal hover:border-white hover:shadow-lg"
            >
              <span className="flex items-center gap-3">
                גלו את הפרויקט
                <motion.span
                  className="text-lg"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  ←
                </motion.span>
              </span>
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
