import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { Link } from 'react-scroll'

const links = [
  { label: 'הפרויקט', to: 'about' },
  { label: 'חווית הריזורט', to: 'wellness' },
  { label: 'הדירות', to: 'apartments' },
  { label: 'המחיר', to: 'pricing' },
  { label: 'צור קשר', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = (baseClass) => 
    `font-body text-[13px] font-[300] tracking-wide cursor-pointer transition-all duration-300 relative group ${baseClass}`

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav shadow-soft' : ''
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="hero" smooth duration={800} className="cursor-pointer">
            <img
              src="/images/logo.png"
              alt="G Park Wellness Living"
              className="h-10 transition-all duration-500"
              style={{
                filter: scrolled ? 'none' : 'brightness(0) invert(1)'
              }}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={800}
                offset={-80}
                spy
                activeClass="!text-copper"
                className={navLinkClass(
                  scrolled ? 'text-charcoal' : 'text-white/80'
                )}
              >
                <span className="relative">
                  {link.label}
                  {/* Elegant underline effect */}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-copper transition-all duration-300 ${
                    scrolled ? 'w-0 group-hover:w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </span>
              </Link>
            ))}
          </div>

          {/* CTA - 48px height button */}
          <div className="hidden lg:block">
            <Link to="contact" smooth duration={800} offset={-80}>
              <button className={`flex items-center gap-2 text-[13px] font-[300] tracking-wide cursor-pointer transition-all duration-300 border h-12 px-6 rounded-lg ${
                scrolled
                  ? 'text-charcoal border-charcoal/20 hover:border-copper hover:text-copper'
                  : 'text-white border-white/30 hover:border-white'
              }`}>
                <Phone size={14} strokeWidth={1.5} />
                <span>לתיאום פגישה</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen
              ? <X size={22} strokeWidth={1.5} className={scrolled ? 'text-charcoal' : 'text-white'} />
              : <Menu size={22} strokeWidth={1.5} className={scrolled ? 'text-charcoal' : 'text-white'} />
            }
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
              >
                <Link
                  to={link.to}
                  smooth
                  duration={800}
                  offset={-80}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-3xl font-[300] text-charcoal cursor-pointer hover:text-copper transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}