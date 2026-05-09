import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

/**
 * Floating editorial nav bar. Transparent over the hero, swaps to a
 * frosted cream surface once the user scrolls past it. Uses the
 * G Park script wordmark via the shared Logo component.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`site-nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="ניווט ראשי">
      <a href="#top" className="site-nav-brand" aria-label="G Park · Wellness Living">
        <Logo height={28} variant={scrolled ? 'dark' : 'light'} />
      </a>

      <ul className="site-nav-links">
        <li><a href="#architecture" className="site-nav-link">האדריכלות</a></li>
        <li><a href="#wellness" className="site-nav-link">ולנס</a></li>
        <li><a href="#park" className="site-nav-link">המיקום</a></li>
        <li><a href="#suites" className="site-nav-link">2 הסוויטות</a></li>
        <li><a href="#residences" className="site-nav-link">הדירות</a></li>
        <li><a href="#value" className="site-nav-link">ההשקעה</a></li>
      </ul>

      <Link to="/catalog" className="site-nav-cta">קטלוג דירות</Link>
    </nav>
  )
}
