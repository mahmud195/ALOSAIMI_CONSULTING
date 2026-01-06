import { useState } from 'react'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Awards } from './components/Awards'
import { About } from './components/About'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { IntroAnimation } from './components/IntroAnimation'

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ overflow: 'visible' }}>
      {/* Intro Animation */}
      {!introComplete && (
        <IntroAnimation onComplete={() => setIntroComplete(true)} />
      )}

      <main className="relative" role="main" style={{ overflow: 'visible' }}>
        <section id="hero" aria-label="Hero section">
          <Hero introComplete={introComplete} />
        </section>
        <section id="portfolio" aria-label="Portfolio section">
          <Portfolio />
        </section>
        <section id="awards" aria-label="Awards section">
          <Awards />
        </section>
        <section id="about" aria-label="About section">
          <About />
        </section>
        <section id="services" aria-label="Services section">
          <Services />
        </section>
        <section id="team" aria-label="Team section" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
          <Team />
        </section>
        <section id="contact" aria-label="Contact section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}