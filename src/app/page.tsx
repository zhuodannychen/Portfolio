'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import all components to avoid SSR issues with older React libraries
const SmallNavbar = dynamic(() => import('@/components/layout/SmallNavbar'), {
  ssr: false
})
const Homepage = dynamic(() => import('@/components/sections/Homepage'), {
  ssr: false
})
const About = dynamic(() => import('@/components/sections/About'), {
  ssr: false
})
const Experiences = dynamic(() => import('@/components/sections/Experiences'), {
  ssr: false
})
const Notes = dynamic(() => import('@/components/sections/Notes'), {
  ssr: false
})
const Projects = dynamic(() => import('@/components/sections/Projects'), {
  ssr: false
})
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  ssr: false
})
const Footer = dynamic(() => import('@/components/layout/Footer'), {
  ssr: false
})

export default function Home() {
  useEffect(() => {
    // Google Analytics initialization
    const initializeGA = async () => {
      try {
        const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
        if (gaId) {
          const GA4React = (await import('ga-4-react')).default
          setTimeout(() => {
            const ga4react = new GA4React(gaId)
            ga4react.initialize().catch(err => console.error(err))
          }, 4000)
          console.log('GA initialize')
        }
      } catch (err) {
        console.error(err)
      }
    }

    initializeGA()
  }, [])

  return (
    <div className="body">
      <SmallNavbar />
      <Homepage id="home" />
      <About id="about" />
      <Experiences id="experiences" />
      <Notes id="notes" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
  )
}