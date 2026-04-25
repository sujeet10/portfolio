import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Automation from './components/Automation'
import WebDev from './components/WebDev'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div style={{minHeight: '100vh', background: '#f9fafb'}}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WebDev />
      <Automation />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
