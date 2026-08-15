import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Skills from './sections/Skills'
import AIFlow from './sections/AIFlow'
import Projects from './sections/Projects'
import GitHubSection from './sections/GitHub'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Chess from './sections/Chess'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <AIFlow />
        <Projects />
        <GitHubSection />
        <Experience />
        <Education />
        <Chess />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
