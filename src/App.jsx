import { useEffect } from 'react'
import Lenis from 'lenis'
import './site.css'

import Nav from './components/site/Nav.jsx'
import Hero from './components/site/Hero.jsx'
import Manifesto from './components/site/Manifesto.jsx'
import Architecture from './components/site/Architecture.jsx'
import Wellness from './components/site/Wellness.jsx'
import Park from './components/site/Park.jsx'
import Suites from './components/site/Suites.jsx'
import Residences from './components/site/Residences.jsx'
import Value from './components/site/Value.jsx'
import Visit from './components/site/Visit.jsx'
import Footer from './components/site/Footer.jsx'

/**
 * G Park · Wellness Living — homepage shell.
 *
 * Loads Lenis for buttery smooth scroll, mounts the editorial sections in
 * narrative order, respects prefers-reduced-motion. The /catalog route is
 * mounted by main.jsx and bypasses this shell entirely.
 */
export default function App() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let raf
    const tick = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="site">
      <Nav />

      <main>
        <Hero />
        <Manifesto />
        <Architecture />
        <Wellness />
        <Park />
        <Suites />
        <Residences />
        <Value />
        <Visit />
      </main>

      <Footer />
    </div>
  )
}
