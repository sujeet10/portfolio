import { useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const handleCVDownload = () => {
    const uploadedCV = localStorage.getItem('uploadedCV')
    const uploadedCVName = localStorage.getItem('uploadedCVName')
    
    if (uploadedCV) {
      const link = document.createElement('a')
      link.href = uploadedCV
      link.download = uploadedCVName || 'uploaded_cv'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      const link = document.createElement('a')
      link.href = '/Sujeet_Kumar_CV.txt'
      link.download = 'Sujeet_Kumar_CV.txt'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <nav style={{position: 'fixed', top: 0, width: '100%', background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', zIndex: 50, padding: '0 20px'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <span style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb'}}>
            Portfolio
          </span>
        </div>

        <div style={{display: 'flex', alignItems: 'center', gap: '32px'}}>
          <a href="#home" style={{color: '#374151', textDecoration: 'none', fontWeight: '500'}}>Home</a>
          <a href="#about" style={{color: '#374151', textDecoration: 'none', fontWeight: '500'}}>About</a>
          <a href="#skills" style={{color: '#374151', textDecoration: 'none', fontWeight: '500'}}>Skills</a>
          <a href="#projects" style={{color: '#374151', textDecoration: 'none', fontWeight: '500'}}>Projects</a>
          <a href="#webdev" style={{color: '#374151', textDecoration: 'none', fontWeight: '500'}}>🌐 Web Dev</a>
          <a href="#automation" style={{color: '#374151', textDecoration: 'none', fontWeight: '500'}}>🤖 Automation</a>
          <a href="https://www.salesforce.com/trailblazer/sk10m" target="_blank" rel="noopener noreferrer" style={{color: '#059669', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px'}}>
            🏔️ Trailhead
          </a>
          <a href="#contact" style={{color: '#374151', textDecoration: 'none', fontWeight: '500'}}>Contact</a>
          <button
            onClick={handleCVDownload}
            style={{padding: '8px 16px', background: '#64748b', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500'}}
          >
            CV
          </button>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{padding: '8px', background: '#e5e7eb', border: 'none', borderRadius: '6px', cursor: 'pointer'}}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
