import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  const roles = [
    "Salesforce Developer",
    "Marketing Cloud Developer", 
    "Agentforce Developer",
    "Data Cloud Developer"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsAnimating(true)
      }, 100)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleCVDownload = () => {
    const uploadedCV = localStorage.getItem('uploadedCV')
    const uploadedCVName = localStorage.getItem('uploadedCVName')
    
    if (uploadedCV) {
      // Download uploaded CV
      const link = document.createElement('a')
      link.href = uploadedCV
      link.download = uploadedCVName || 'uploaded_cv'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      // Download default portfolio CV
      const link = document.createElement('a')
      link.href = '/Sujeet_Kumar_CV.txt'
      link.download = 'Sujeet_Kumar_CV.txt'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20 animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">Sujeet Kumar</span>
          </h1>
          
          <div className="flex items-center justify-center mb-6 animate-slide-in-left">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 animate-pulse glow-effect">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.3 18.7c0 .2 0 .4-.1.5-.1.2-.2.3-.4.4-.3.1-.5.2-.8.2s-.6-.1-.8-.2c-.2-.1-.4-.3-.4-.4-.1-.2-.1-.4-.1-.5v-2.2c0-.2 0-.4.1-.5.1-.2.2-.3.4-.4.3-.1.5-.2.8-.2s.6.1.8.2c.2.1.4.3.4.4.1.2.1.4.1.5v2.2zm-4.6 0c0 .2 0 .4-.1.5-.1.2-.2.3-.4.4-.3.1-.5.2-.8.2s-.6-.1-.8-.2c-.2-.1-.4-.3-.4-.4-.1-.2-.1-.4-.1-.5v-2.2c0-.2 0-.4.1-.5.1-.2.2-.3.4-.4.3-.1.5-.2.8-.2s.6.1.8.2c.2.1.4.3.4.4.1.2.1.4.1.5v2.2zm-4.6 0c0 .2 0 .4-.1.5-.1.2-.2.3-.4.4-.3.1-.5.2-.8.2s-.6-.1-.8-.2c-.2-.1-.4-.3-.4-.4-.1-.2-.1-.4-.1-.5v-2.2c0-.2 0-.4.1-.5.1-.2.2-.3.4-.4.3-.1.5-.2.8-.2s.6.1.8.2c.2.1.4.3.4.4.1.2.1.4.1.5v2.2z"/>
              </svg>
            </div>
            <div className="text-3xl font-bold">
              <span className="salesforce-icon">Salesforce</span>
              <span className="text-gray-700 dark:text-gray-300"> Certified Developer</span>
            </div>
          </div>

          <div className="h-20 mb-8">
            <h2 className="text-3xl md:text-5xl text-gray-700 dark:text-gray-300 font-semibold">
              I'm a <span className={`typing-effect text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 ${isAnimating ? '' : ''}`}>
                {roles[currentRole]}
              </span>
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-4xl mx-auto animate-slide-in-right">
            <span className="font-semibold text-blue-600">Salesforce Developer</span> | 
            <span className="font-semibold text-orange-500"> Marketing Cloud</span> | 
            <span className="font-semibold text-purple-600"> Agentforce Developer</span> | 
            <span className="font-semibold text-green-600"> Data Cloud</span> | 
            <span className="text-gray-500"> Salesforce Certified 5X</span> | 
            <span className="text-yellow-500"> ⭐️ ⭐️ ⭐️ Star Ranger 4X Superbadges</span>
          </p>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-4xl mx-auto">
            Specialized Salesforce developer with 3.6 years of experience building custom CRM solutions across 
            Sales Cloud, Service Cloud, Marketing Cloud, Data Cloud, and Agentforce. Passionate about optimizing business processes 
            through innovative Salesforce implementations and AI-driven automation.
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
            📍 Noida, Uttar Pradesh, India
          </p>

          {/* Salesforce Cloud Platforms with enhanced animations */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl glow-effect">
                <div className="text-3xl mb-3 salesforce-icon animate-pulse">☁️</div>
                <div className="text-xl font-bold salesforce-icon mb-2">Sales Cloud</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">CRM & Sales Automation</div>
              </div>
            </div>

            <div className="group relative">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl glow-effect">
                <div className="text-3xl mb-3 text-green-600 animate-pulse">🤝</div>
                <div className="text-xl font-bold text-green-600 mb-2">Service Cloud</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Customer Service</div>
              </div>
            </div>

            <div className="group relative">
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl glow-effect">
                <div className="text-3xl mb-3 marketing-cloud-icon animate-pulse">📧</div>
                <div className="text-xl font-bold marketing-cloud-icon mb-2">Marketing Cloud</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Email Marketing</div>
              </div>
            </div>

            <div className="group relative">
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl glow-effect">
                <div className="text-3xl mb-3 data-cloud-icon animate-pulse">💎</div>
                <div className="text-xl font-bold data-cloud-icon mb-2">Data Cloud</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Customer Data Platform</div>
              </div>
            </div>

            <div className="group relative">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl glow-effect">
                <div className="text-3xl mb-3 agentforce-icon animate-pulse">🤖</div>
                <div className="text-xl font-bold agentforce-icon mb-2">Agentforce</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">AI-Powered Solutions</div>
              </div>
            </div>
          </div>

          {/* Key Certifications with enhanced styling */}
          <div className="mb-12">
            <div className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6">
              🏆 Key Certifications
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg">Salesforce Platform Developer I</span>
                            <span className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 rounded-full text-sm font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg">Salesforce Associate</span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full text-sm font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg">Salesforce AI Associate</span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 rounded-full text-sm font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg">Salesforce AI Specialist</span>
              <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 rounded-full text-sm font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg">Salesforce Agentforce Specialist</span>
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 rounded-full text-sm font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg">Big Data</span>
            </div>
            
            {/* Trailhead Profile Link */}
            <div className="flex justify-center">
              <a
                href="https://www.salesforce.com/trailblazer/sk10m"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg font-semibold"
              >
                <span className="text-2xl">🏔️</span>
                View My Trailhead Profile
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Action Buttons with enhanced animations */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="#contact"
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl glow-effect font-semibold text-lg"
            >
              📞 Get In Touch
            </a>
            <a
              href="#projects"
              className="px-10 py-4 bg-transparent border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 font-semibold text-lg"
            >
              🚀 View Projects
            </a>
            <button
              onClick={handleCVDownload}
              className="px-10 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-3 font-semibold text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              📄 Download CV
            </button>
          </div>

          {/* Social Links with enhanced animations */}
          <div className="flex justify-center space-x-8">
            <a
              href="https://linkedin.com/in/sujeetkumar06043"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transform hover:scale-125 transition-all duration-300"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 transform hover:scale-125 transition-all duration-300"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
