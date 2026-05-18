'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'HirePilot',
    description: 'Full-featured Applicant Tracking System with role-based access, real-time dashboards, and automated screening pipeline',
    tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'Google OAuth'],
    type: 'Featured',
    color: 'from-violet-500 to-purple-500',
    image: '🎯',
  },
  {
    title: 'AI Resume Analyzer',
    description: 'Intelligent resume parsing and analysis using NLP and machine learning for smart candidate evaluation',
    tech: ['React', 'Python', 'NLP', 'ML', 'Firebase'],
    type: 'Featured',
    color: 'from-cyan-500 to-blue-500',
    image: '📊',
  },
  {
    title: 'AI SaaS Platform',
    description: 'Generative AI-powered SaaS for content generation, code assistance, and creative writing',
    tech: ['Next.js', 'OpenAI', 'Stripe', 'MongoDB'],
    type: 'Featured',
    color: 'from-pink-500 to-rose-500',
    image: '✨',
  },
  {
    title: 'Real-time Chat App',
    description: 'Feature-rich messaging application with group chats, media sharing, and real-time updates',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    type: 'Full Stack',
    color: 'from-orange-500 to-amber-500',
    image: '💬',
  },
  {
    title: 'Finance Dashboard',
    description: 'Comprehensive financial analytics dashboard with charts, reports, and data visualization',
    tech: ['Next.js', 'Recharts', 'API Integration', 'Tailwind'],
    type: 'Frontend',
    color: 'from-green-500 to-emerald-500',
    image: '📈',
  },
  {
    title: 'E-Commerce Store',
    description: 'Modern e-commerce platform with product catalog, cart, and secure payment integration',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    type: 'Full Stack',
    color: 'from-indigo-500 to-purple-500',
    image: '🛒',
  },
]

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="glass group rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all cursor-pointer h-full flex flex-col"
    >
      {/* Image/Icon */}
      <div
        className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform`}
      >
        {project.image}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold flex-1">{project.title}</h3>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 flex-shrink-0">
            {project.type}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-foreground/70 text-sm mb-6 flex-grow">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 3).map(tech => (
            <span key={tech} className="px-2 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-medium">
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 rounded-md bg-foreground/10 text-foreground/70 text-xs font-medium">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-2 pt-4 border-t border-white/10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="section-content">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">// PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
