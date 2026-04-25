import { useState, useEffect } from 'react'

const WebDev = () => {
  const [currentTech, setCurrentTech] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  const technologies = [
    {
      name: "React.js",
      icon: "⚛️",
      description: "Building interactive UIs with modern React",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      name: "JavaScript",
      icon: "🟨",
      description: "Dynamic web applications and interactivity",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      name: "HTML/CSS",
      icon: "🎨",
      description: "Semantic markup and responsive design",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Node.js",
      icon: "🟢",
      description: "Server-side JavaScript development",
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  const webProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online shopping platform with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "#",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tech: ["React", "Firebase", "Material-UI", "WebSockets"],
      link: "#",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio with modern animations and responsive design",
      tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => {
        setCurrentTech((prev) => (prev + 1) % technologies.length)
        setIsAnimating(true)
      }, 100)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="webdev" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-200 dark:bg-cyan-800 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            🌐 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 animate-pulse">Web Development</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto">
            Creating modern, responsive web applications with <span className="font-bold text-cyan-600">cutting-edge technologies</span>. 
            Building seamless user experiences with clean code and innovative design.
          </p>

          {/* Featured Technology Animation */}
          <div className="mb-16">
            <div className="inline-block">
              <div className={`text-6xl mb-4 ${isAnimating ? 'animate-bounce' : ''} transition-all duration-300`}>
                {technologies[currentTech].icon}
              </div>
              <div className="h-16">
                <h3 className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${technologies[currentTech].gradient} typing-effect ${isAnimating ? '' : ''}`}>
                  {technologies[currentTech].name}
                </h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                {technologies[currentTech].description}
              </p>
            </div>
          </div>

          {/* Web Development Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <div className="group">
              <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-800/20 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl glow-effect">
                <div className="text-4xl mb-4 animate-pulse">🚀</div>
                <h3 className="text-2xl font-bold text-cyan-600 mb-4">Frontend Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  React, Vue.js, Angular, HTML5, CSS3, JavaScript ES6+, TypeScript
                </p>
              </div>
            </div>

            <div className="group">
              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-800/20 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl glow-effect">
                <div className="text-4xl mb-4 animate-pulse">⚙️</div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Backend Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Node.js, Express.js, MongoDB, PostgreSQL, REST APIs, GraphQL
                </p>
              </div>
            </div>

            <div className="group">
              <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-800/20 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl glow-effect">
                <div className="text-4xl mb-4 animate-pulse">🎨</div>
                <h3 className="text-2xl font-bold text-purple-600 mb-4">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Responsive Design, Tailwind CSS, Material-UI, Figma, Adobe XD
                </p>
              </div>
            </div>
          </div>

          {/* Technology Stack Showcase */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-8">
              💻 Technology Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className={`group relative p-4 bg-gradient-to-br ${tech.gradient} bg-opacity-10 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    index === currentTech ? 'ring-4 ring-cyan-400 ring-opacity-50' : ''
                  }`}
                >
                  <div className="text-3xl mb-2 animate-pulse">{tech.icon}</div>
                  <h4 className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${tech.gradient}`}>
                    {tech.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Web Projects Showcase */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-8">
              🚀 Featured Web Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {webProjects.map((project, index) => (
                <div 
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 rounded-full text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Process */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-8">
              🔄 Development Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <span className="text-2xl text-white">1</span>
                </div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Planning</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Requirements analysis & architecture design</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <span className="text-2xl text-white">2</span>
                </div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Clean coding & iterative development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <span className="text-2xl text-white">3</span>
                </div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Testing</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Quality assurance & bug fixing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <span className="text-2xl text-white">4</span>
                </div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Deployment</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Launch & maintenance</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center p-12 bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 dark:from-cyan-900/20 dark:via-blue-900/20 dark:to-indigo-900/20 rounded-3xl">
            <div className="text-6xl mb-6 animate-bounce">💻</div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Let's Build Something Amazing
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Have a web project in mind? I'd love to help bring your ideas to life with modern web technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#contact"
                className="px-12 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:from-cyan-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl glow-effect font-bold text-lg"
              >
                📞 Start a Project
              </a>
              
              <a
                href="#projects"
                className="px-12 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-xl font-bold text-lg"
              >
                🚀 View Projects
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Web Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">Tech Stack</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Responsive</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebDev
