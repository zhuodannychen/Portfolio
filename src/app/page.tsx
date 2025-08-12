import SmallNavbar from '@/components/layout/SmallNavbar'
import Homepage from '@/components/sections/Homepage'
import About from '@/components/sections/About'
import Experiences from '@/components/sections/Experiences'
import Notes from '@/components/sections/Notes'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
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