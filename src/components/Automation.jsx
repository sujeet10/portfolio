import { useState, useEffect } from 'react'

const Automation = () => {
  const [currentTool, setCurrentTool] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  const tools = [
    {
      name: "Data Import Tool",
      icon: "📊",
      description: "CSV/Excel to Salesforce data import with validation",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Email Automation", 
      icon: "📧",
      description: "Marketing Cloud campaign creation and scheduling",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Report Generator",
      icon: "📈", 
      description: "Custom SOQL queries and automated report generation",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Batch Processor",
      icon: "⚡",
      description: "High-volume batch processing with progress tracking", 
      gradient: "from-green-500 to-teal-500"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => {
        setCurrentTool((prev) => (prev + 1) % tools.length)
        setIsAnimating(true)
      }, 100)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const launchHTA = () => {
    try {
      const htaPath = '/automation.hta'
      const link = document.createElement('a')
      link.href = htaPath
      link.download = 'automation.hta'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      alert('🚀 HTA Automation Suite downloaded!\n\nTo run:\n1. Save the file to your desktop\n2. Double-click to open\n3. Allow the application to run\n4. Use the powerful automation tools!')
    } catch (error) {
      console.error('Error launching HTA:', error)
    }
  }

  return (
    <section id="automation" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-36 h-36 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-cyan-200 dark:bg-cyan-800 rounded-full opacity-20 animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            🤖 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse">Automation Tools</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto">
            Professional Salesforce automation suite built with <span className="font-bold text-purple-600">HTA technology</span>. 
            Streamline your data operations with powerful automation tools and real-time processing.
          </p>

          {/* Featured Tool Animation */}
          <div className="mb-16">
            <div className="inline-block">
              <div className={`text-6xl mb-4 ${isAnimating ? 'animate-bounce' : ''} transition-all duration-300`}>
                {tools[currentTool].icon}
              </div>
              <div className="h-16">
                <h3 className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${tools[currentTool].gradient} typing-effect ${isAnimating ? '' : ''}`}>
                  {tools[currentTool].name}
                </h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                {tools[currentTool].description}
              </p>
            </div>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <div className="group">
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl glow-effect">
                <div className="text-4xl mb-4 animate-pulse">🚀</div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">High Performance</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Process thousands of records efficiently with batch processing and concurrent operations
                </p>
              </div>
            </div>

            <div className="group">
              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl glow-effect">
                <div className="text-4xl mb-4 animate-pulse">🛡️</div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Secure & Reliable</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Built with security best practices and comprehensive error handling for production use
                </p>
              </div>
            </div>

            <div className="group">
              <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl glow-effect">
                <div className="text-4xl mb-4 animate-pulse">⚙️</div>
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Easy to Use</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Intuitive interface with step-by-step guidance and real-time progress tracking
                </p>
              </div>
            </div>
          </div>

          {/* Automation Tools Showcase */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-8">
              🛠️ Automation Suite Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className={`group relative p-6 bg-gradient-to-br ${tool.gradient} bg-opacity-10 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    index === currentTool ? 'ring-4 ring-purple-400 ring-opacity-50' : ''
                  }`}
                >
                  <div className="text-4xl mb-3 animate-pulse">{tool.icon}</div>
                  <h4 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${tool.gradient} mb-2`}>
                    {tool.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-8">
              ⚡ Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "HTML Application (HTA)", 
                "VBScript Automation", 
                "JavaScript Integration", 
                "Salesforce API",
                "SOQL Queries", 
                "Bulk API 2.0",
                "Marketing Cloud API",
                "File System Operations"
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-semibold transform transition-all duration-300 hover:scale-110 hover:shadow-lg animate-pulse"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Download Section */}
          <div className="text-center p-12 bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-indigo-900/20 rounded-3xl mb-16">
            <div className="text-6xl mb-6 animate-bounce">🎯</div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Launch Your Automation Suite
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Download and run the HTA application to access powerful Salesforce automation tools on your local machine. 
              Transform your data operations with professional-grade automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={launchHTA}
                className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl glow-effect font-bold text-lg flex items-center justify-center gap-3"
              >
                <span className="text-2xl">⬇️</span>
                Download Automation Suite
              </button>
              
              <button
                onClick={() => alert('🚀 Automation tools are ready! Download the HTA file to get started.')}
                className="px-12 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-xl font-bold text-lg"
              >
                🧪 Test Demo
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600 dark:text-gray-400">Records/Second</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600 dark:text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Automation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">5X</div>
              <div className="text-gray-600 dark:text-gray-400">Faster Processing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Automation
