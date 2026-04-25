import { useState, useEffect } from 'react'

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set())

  const technicalSkills = [
    { name: 'Salesforce Development', level: 95, category: 'salesforce' },
    { name: 'SFMC Marketing Cloud', level: 90, category: 'salesforce' },
    { name: 'Agentforce Solutions', level: 85, category: 'salesforce' },
    { name: 'Data Cloud Architecture', level: 80, category: 'salesforce' },
    { name: 'Apex Programming', level: 90, category: 'salesforce' },
    { name: 'Lightning Web Components', level: 85, category: 'salesforce' },
    { name: 'Aura Components', level: 80, category: 'salesforce' },
    { name: 'Visualforce Pages', level: 75, category: 'salesforce' },
    { name: 'SOQL & SOSL', level: 85, category: 'salesforce' },
    { name: 'Salesforce Integration', level: 80, category: 'salesforce' },
    { name: 'Salesforce APIs', level: 85, category: 'salesforce' },
    { name: 'Flow & Process Builder', level: 90, category: 'salesforce' },
    { name: 'Sales Cloud', level: 85, category: 'salesforce' },
    { name: 'Service Cloud', level: 80, category: 'salesforce' },
    { name: 'Marketing Cloud', level: 65, category: 'salesforce' },
    { name: 'Journey Builder', level: 75, category: 'salesforce' },
    { name: 'Email Studio', level: 70, category: 'salesforce' },
    { name: 'Data Modeling', level: 80, category: 'salesforce' },
    { name: 'CDP Integration', level: 75, category: 'salesforce' },
    { name: 'JavaScript/TypeScript', level: 85, category: 'frontend' },
    { name: 'REST/SOAP APIs', level: 80, category: 'integration' },
    { name: 'Git/GitHub', level: 85, category: 'tools' }
  ]

  const softSkills = [
    { name: 'Problem Solving', level: 90, icon: '🧩' },
    { name: 'Team Collaboration', level: 85, icon: '🤝' },
    { name: 'Communication', level: 80, icon: '💬' },
    { name: 'Time Management', level: 85, icon: '⏰' },
    { name: 'Adaptability', level: 90, icon: '🔄' },
    { name: 'Leadership', level: 75, icon: '👥' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill')
            setVisibleSkills((prev) => new Set(prev).add(skillName))
          }
        })
      },
      { threshold: 0.5 }
    )

    const skillElements = document.querySelectorAll('[data-skill]')
    skillElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const getSkillColor = (level) => {
    if (level >= 80) return 'bg-green-500'
    if (level >= 60) return 'bg-blue-500'
    return 'bg-yellow-500'
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  data-skill={skill.name}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                        {skill.category}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
                      style={{
                        width: visibleSkills.has(skill.name) ? `${skill.level}%` : '0%',
                        transitionDelay: visibleSkills.has(skill.name) ? '100ms' : '0ms'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Professional Skills
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  data-skill={skill.name}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {skill.name}
                  </h4>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(skill.level / 20)
                            ? 'text-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}% Proficiency
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Continuous Learning</h4>
              <p className="mb-4">
                I'm committed to staying current with the latest technologies and best practices. 
                I regularly participate in online courses, attend workshops, and contribute to 
                open-source projects.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold mb-1">📚 Online Courses</div>
                  <div className="opacity-90">15+ certifications completed</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">🎯 Side Projects</div>
                  <div className="opacity-90">Always building something new</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">👥 Tech Community</div>
                  <div className="opacity-90">Active contributor and mentor</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">📖 Technical Blog</div>
                  <div className="opacity-90">Sharing knowledge regularly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
