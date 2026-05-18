'use client'

import { useEffect } from 'react'
import Navigation from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero-v2'
import About from '@/components/sections/about'
import { SkillsSection } from '@/components/sections/skills-v2'
import Experience from '@/components/sections/experience'
import { ProjectsSection } from '@/components/sections/projects-v2'
import { EducationSection } from '@/components/sections/education-v2'
import { CertificationsSection } from '@/components/sections/certifications-v2'
import Contact from '@/components/sections/contact'
import Footer from '@/components/footer'

export default function Home() {
  useEffect(() => {
    // Register service worker only in production builds.
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, app will still work
      })
    }
  }, [])

  return (
    <main className="relative w-full overflow-x-hidden bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <About />
      <SkillsSection />
      <Experience />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <Contact />
      <Footer />
    </main>
  )
}
