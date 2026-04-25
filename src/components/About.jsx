import { useState } from 'react'

const About = () => {
  const [activeTab, setActiveTab] = useState('experience')
  const [uploadedCV, setUploadedCV] = useState(null)
  const [cvFileName, setCVFileName] = useState('')

  const handleCVUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setUploadedCV(file)
      setCVFileName(file.name)
      
      // Save to localStorage for sharing with other components
      const reader = new FileReader()
      reader.onload = (e) => {
        localStorage.setItem('uploadedCV', e.target.result)
        localStorage.setItem('uploadedCVName', file.name)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCVDownload = () => {
    if (uploadedCV) {
      const url = URL.createObjectURL(uploadedCV)
      const link = document.createElement('a')
      link.href = url
      link.download = cvFileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } else {
      // Download default portfolio CV if no file uploaded
      const link = document.createElement('a')
      link.href = '/Sujeet_Kumar_CV.txt'
      link.download = 'Sujeet_Kumar_CV.txt'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const experiences = [
    {
      title: 'Salesforce Developer',
      company: 'SaasWorx Consulting',
      period: '2022 - 31/12/2025',
      description: 'Leading Salesforce development initiatives including SFMC implementations, Agentforce solutions, and Data Cloud integrations. Specializing in Marketing Cloud automation and customer data platform architectures.'
    }
  ]

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      school: 'IMS Ghaziabad',
      period: '2019 - 2022',
      description: 'Post-graduate degree in Computer Applications with focus on advanced programming, database management, and software development.'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'M D College, Patna',
      period: '2015 - 2018',
      description: 'Undergraduate degree in Computer Applications with foundation in software development, web technologies, and computer science fundamentals.'
    }
  ]

  const certifications = [
    {
      name: 'Salesforce Certified Platform Developer I (PD1)',
      issuer: 'Salesforce',
      year: '2022'
    },
    {
      name: 'Salesforce Certified Associate',
      issuer: 'Salesforce',
      year: '2021'
    },
    {
      name: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      year: '2023'
    },
    {
      name: 'Salesforce Certified AI Specialist',
      issuer: 'Salesforce',
      year: '2023'
    },
    {
      name: 'Salesforce Agentforce Specialist (Certified)',
      issuer: 'Salesforce',
      year: '2024'
    },
    {
      name: 'Big Data Analyst Certification',
      issuer: 'Big Data University',
      year: '2023'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn more about my journey, experience, and passion for creating amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-200 dark:bg-primary-900 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-gray-100 dark:bg-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Passionate Developer
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I am a Salesforce Developer with around 3.6 years of experience, currently working at SaasWorx, where I design and deliver scalable CRM solutions across the Salesforce ecosystem. I have strong expertise in Lightning Web Components (LWC), Apex, Triggers, Batch, and Queueable, enabling me to build efficient and high-performing applications.

                  I completed my postgraduate degree from Institute of Management Studies (IMS), which helped build a strong foundation in problem-solving and software development. Over the years, I have gained hands-on experience with Salesforce Marketing Cloud (SFMC), including Journey Builder, Automation Studio, and Email Studio, helping drive personalized customer engagement.

                  I have also worked on Data Cloud implementations, focusing on data integration, unification, and real-time insights. Recently, I have been working with Agentforce to build AI-driven automation solutions, including agent actions, flows, and intelligent case handling. I have implemented automation that reduces manual effort and improves response time through smart decision-making processes.

                  My expertise also includes integrating Salesforce with external systems using REST and SOAP APIs. I am passionate about writing clean, scalable code and continuously improving system performance while delivering business-focused solutions.

                  I specialize in optimizing business processes through innovative Salesforce implementations, Marketing Cloud automation, and seamless Data Cloud integrations. When I’m not developing, I explore new Salesforce features, contribute to the Salesforce community, and mentor aspiring developers.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I specialize in optimizing business processes through innovative Salesforce implementations,
                  Marketing Cloud automation, and seamless Data Cloud integrations. When I'm not developing, you can find me exploring
                  new Salesforce features, contributing to the Salesforce community, or mentoring aspiring developers.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">3.6</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-center">
                    <a
                      href="/Sujeet_Kumar_CV.txt"
                      download="Sujeet_Kumar_CV.txt"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Sample CV
                    </a>
                  </div>
                  
                  <div className="border-t border-gray-300 dark:border-gray-600 pt-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 text-center">
                      Upload Your Own CV
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              PDF, DOC, DOCX, TXT (MAX. 10MB)
                            </p>
                          </div>
                          <input 
                            type="file" 
                            className="hidden" 
                            accept=".pdf,.doc,.docx,.txt"
                            onChange={handleCVUpload}
                          />
                        </label>
                      </div>
                      
                      {uploadedCV && (
                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-sm font-medium text-green-800 dark:text-green-200">
                                {cvFileName}
                              </span>
                            </div>
                            <button
                              onClick={handleCVDownload}
                              className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors duration-200 flex items-center gap-1"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              Download
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === 'experience'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === 'education'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab('certifications')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === 'certifications'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                Certifications
              </button>
            </div>

            <div className="space-y-6">
              {activeTab === 'experience' ? (
                experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <h5 className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                      {exp.company}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.description}
                    </p>
                  </div>
                ))
              ) : activeTab === 'education' ? (
                education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <h5 className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                      {edu.school}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </div>
                ))
              ) : (
                certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {cert.name}
                      </h4>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {cert.year}
                      </span>
                    </div>
                    <h5 className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                      {cert.issuer}
                    </h5>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
