import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern React-based e-commerce platform with real-time inventory management and seamless checkout experience.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      title: "Design System",
      description: "Comprehensive design system with reusable components, built with Storybook and used across multiple products.",
      tech: ["React", "Storybook", "Tailwind CSS", "Figma"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      github: "https://github.com",
      live: "https://storybook.com"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts and data visualization for business intelligence.",
      tech: ["Next.js", "D3.js", "Prisma", "Vercel"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      github: "https://github.com",
      live: "https://dashboard.com"
    }
  ]

  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "GraphQL", level: 80 },
    { name: "AWS/Vercel", level: 75 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'apple-glass backdrop-blur-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold apple-text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              Alex Chen
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        </motion.div>

        <div className="text-center z-10 px-6">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Frontend
            <span className="apple-text-gradient block">Developer</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            I craft exceptional digital experiences with modern web technologies
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button 
              className="apple-button bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            
            <motion.button 
              className="apple-button border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <ArrowDown className="w-6 h-6 mx-auto text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With 5+ years of experience in frontend development, I specialize in creating 
              user-centered digital experiences that combine beautiful design with robust functionality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Clean Code", desc: "Writing maintainable, scalable code following best practices" },
              { icon: Palette, title: "Design Focus", desc: "Bringing designs to life with pixel-perfect precision" },
              { icon: Zap, title: "Performance", desc: "Optimizing for speed and exceptional user experience" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="apple-glass rounded-2xl p-8 text-center apple-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600">
              A selection of projects that showcase my skills and passion for development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="apple-glass rounded-2xl overflow-hidden apple-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a 
                      href={project.live}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills</h2>
            <p className="text-xl text-gray-600">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="apple-glass rounded-xl p-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-blue-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-600 mb-12">
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              {[
                { icon: Mail, text: "alex@example.com", href: "mailto:alex@example.com" },
                { icon: Github, text: "GitHub", href: "https://github.com" },
                { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com" }
              ].map((contact, index) => (
                <motion.a 
                  key={index}
                  href={contact.href}
                  className="apple-button apple-glass rounded-xl p-4 flex items-center gap-3 hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <contact.icon className="w-5 h-5" />
                  {contact.text}
                </motion.a>
              ))}
            </div>

            <motion.button 
              className="apple-button bg-blue-600 text-white px-12 py-4 rounded-xl font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>&copy; 2024 Alex Chen. Crafted with passion and code.</p>
        </div>
      </footer>
    </div>
  )
}

export default App