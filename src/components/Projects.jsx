import { useState } from 'react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Piramal Realty - Salesforce Implementation',
      description: 'Comprehensive Salesforce solution using SFDC, SFMC, and Agentforce for real estate CRM. Implemented LWC components, AI automation, marketing campaigns, and Data Cloud integration. Improved UI performance by 25% and system performance by 30%.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      technologies: ['SFDC', 'SFMC', 'Agentforce', 'LWC', 'Data Cloud', 'Apex'],
      category: 'salesforce',
      liveUrl: 'https://www.piramalrealty.com/',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 2,
      title: 'Bajaj Auto Credit Finance - IT HelpDesk',
      description: 'Experience Cloud Partner Portal with Agentforce AI-driven case management, OTP authentication, and Sales Cloud integration. Reduced ticket handling time by 30%.',
      image: 'https://images.unsplash.com/photo-1563986768604-5ca242b198f2?w=800&h=400&fit=crop',
      technologies: ['Experience Cloud', 'Agentforce', 'LWC', 'Apex', 'Sales Cloud'],
      category: 'salesforce',
      liveUrl: 'https://www.bajajautocredit.com/',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 3,
      title: 'QRC Valves - SDR Agent Implementation',
      description: 'Salesforce SDR Agent for automated Account/Contact/Opportunity management with intelligent algorithms, PDF-based responses, region-based filters, and automated follow-ups. Increased efficiency by 20%.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      technologies: ['Agentforce', 'SDR Agent', 'Algorithms', 'Sales Cloud', 'Prompt Builder', 'Flows'],
      category: 'salesforce',
      liveUrl: 'https://www.piramalrealty.com/',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 4,
      title: 'Hans Product - Agentforce',
      description: 'Developed and implemented a Salesforce Service Agent to manage customer queries and service requests. Enabled automatic lead creation from client interactions. Integrated FAQ knowledge articles to answer common product and service questions.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      technologies: ['Agentforce', 'Sales Cloud', 'Apex', 'Visualforce Pages', 'Email Templates', 'LWC', 'Validation Rules', 'Object Management', 'Flows', 'Custom Actions', 'Instructions', 'Role Descriptions'],
      category: 'salesforce',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 5,
      title: 'QRC Valves - Agentforce',
      description: 'Implemented SDR Agent in Salesforce for QRC Valves to automate Account, Contact, and Opportunity management. Configured region-based quote filters: LATAM ≥ $20K, others ≥ $50K. Set up 2-step nudge email follow-ups during business hours.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      technologies: ['Salesforce', 'Agentforce', 'Triggers', 'Flows', 'Custom Actions', 'Custom Topics', 'Prompt Builder', 'PDF Knowledge Base', 'Email Templates', 'Opportunity/Task Management'],
      category: 'salesforce',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 6,
      title: 'eTaxServices - Agentforce',
      description: 'Developed a Salesforce Service Agent to handle tax-related client queries and service requests. Enabled automatic lead creation from client interactions. Integrated FAQ knowledge articles to answer common tax service questions.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      technologies: ['Agentforce', 'Sales Cloud', 'Apex', 'Visualforce Pages', 'Email Templates', 'LWC', 'Validation Rules', 'Object Management', 'Flows', 'Custom Actions', 'Instructions', 'Role Descriptions'],
      category: 'salesforce',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 7,
      title: 'IFP - Agentforce',
      description: 'Implemented and configured Agentforce in Salesforce for an employee-facing agent. Built functionality to create and update Contacts, Opportunities, Accounts, Tasks, and Activities. Developed custom actions and instructions to support employee workflows.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      technologies: ['Agentforce', 'Sales Cloud', 'Apex', 'Visualforce Pages', 'Email Templates', 'LWC', 'Validation Rules', 'Object Management', 'Flows', 'Custom Actions', 'Instructions', 'Role Descriptions', 'Email Notifications'],
      category: 'salesforce',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 8,
      title: 'GVK - Agriculture Support',
      description: 'GVK is an organization that trains and supports farmers in villages for better agriculture practices. I developed a comprehensive Visualforce pages and LWC components.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      technologies: ['Flows', 'LWC Components', 'Batch Classes', 'Test Classes', 'Visualforce', 'Sales Cloud', 'Object Management'],
      category: 'salesforce',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 9,
      title: 'Adissia - Real Estate',
      description: 'Adissia is a premier real estate company, specializing in luxurious residential plots in prime locations. I developed a comprehensive Visualforce pages, LWC components, Email Templates.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      technologies: ['Apex Classes', 'Test Classes', 'Sales Cloud', 'LWC Components', 'Email Templates', 'Visualforce Pages', 'Object Management'],
      category: 'salesforce',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 10,
      title: 'Slattery Auctions - Asset Management',
      description: 'Slattery provides asset advisory valuations, auction services and delivering responsive customers services with dynamic commercial solutions across Australia and Asia Pacific. I developed a comprehensive Visualforce pages, LWC components.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      technologies: ['Apex class', 'Test Classes', 'LWC', 'Visualforce Pages', 'Sales Cloud', 'Object Management'],
      category: 'salesforce',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 11,
      title: 'SFMC Marketing Automation',
      description: 'Marketing Cloud implementation with Journey Builder, Email Studio, and customer segmentation for automated engagement campaigns.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      technologies: ['SFMC', 'Journey Builder', 'Email Studio', 'Data Extensions'],
      category: 'salesforce',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 12,
      title: 'Agentforce AI Automation POC',
      description: 'Proof of concept for Agentforce AI automation using Prompt Builder and Agent Actions for automated case creation and FAQ responses.',
      image: 'https://images.unsplash.com/photo-1512941937409-a4cfb9a5e6c2?w=800&h=400&fit=crop',
      technologies: ['Agentforce', 'Prompt Builder', 'AI Integration', 'Apex'],
      category: 'salesforce',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 13,
      title: 'Data Migration & Optimization',
      description: 'Salesforce data migration project using Data Loader and SOQL with performance optimization of Apex queries and Flows.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      technologies: ['Data Loader', 'SOQL', 'Apex', 'Flows', 'Performance'],
      category: 'salesforce',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'salesforce', name: 'Salesforce' },
    { id: 'integration', name: 'Integration' },
    { id: 'mobile', name: 'Mobile' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my recent work and side projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                filter === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm"
                  >
                    Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200 text-sm"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
