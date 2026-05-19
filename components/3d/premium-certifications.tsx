'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Award, ExternalLink, Calendar, Cpu, Sparkles, ShieldCheck } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'AI & DevOps Engineer Program',
    issuer: 'Reliance Industries',
    date: 'Sept 2025',
    description: 'Advanced training in AI implementation, DevOps practices, and cloud infrastructure. Completed intensive bootcamp focusing on production-grade systems.',
    skills: ['AI/ML', 'Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    icon: <Cpu className="w-10 h-10 text-cyan-400" />,
    gradient: 'from-purple-600 via-pink-600 to-red-600',
    link: 'https://drive.google.com/file/d/1FUXskB2PmGzwBR4cQZQW59bXagW-Y7kj/view'
  },
  {
    id: 2,
    title: 'Software Engineering Simulation',
    issuer: 'EA - Forage Virtual Experience',
    date: 'Feb 2024',
    description: 'Completed comprehensive software engineering simulation covering design patterns, architecture, and best practices in enterprise software development.',
    skills: ['System Design', 'Architecture', 'Clean Code', 'Testing', 'Documentation'],
    icon: <Sparkles className="w-10 h-10 text-blue-400" />,
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    link: 'https://drive.google.com/file/d/13wyd2gDMOXhVkHkLrf67f97QKEsicO7E/view'
  },
  {
    id: 3,
    title: 'Generative AI Certification',
    issuer: 'Microsoft & LinkedIn Learning',
    date: 'Jan 2025',
    description: 'Professional certification in Generative AI fundamentals, LLM applications, prompt engineering, and ethical AI practices. Deep dive into modern AI technologies.',
    skills: ['ChatGPT', 'Prompt Engineering', 'LLMs', 'Ethical AI', 'RAG'],
    icon: <ShieldCheck className="w-10 h-10 text-violet-400" />,
    gradient: 'from-cyan-600 via-blue-600 to-purple-600',
    link: 'https://drive.google.com/file/d/1pownZNXGjLvsmWdkvsdfVsIZwoWf8XZg/view'
  },
]

export function PremiumCertifications() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="certifications" className="relative min-h-screen w-full overflow-hidden py-32 px-4 md:px-8">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6 mx-auto">
            <Award className="text-pink-400" size={32} />
            <h2 className="text-3xl md:text-6xl font-bold text-center">
              <span className="gradient-text">Professional Certifications</span>
            </h2>
          </div>
          <p className="text-xl text-slate-700 dark:text-gray-300 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in cutting-edge technologies and best practices
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedId(selectedId === cert.id ? null : cert.id)}
            >
              <motion.div
                className={`relative h-full cursor-pointer rounded-2xl overflow-hidden backdrop-blur-md border transition-all bg-white/90 dark:bg-slate-950/80 ${
                  hoveredId === cert.id || selectedId === cert.id
                    ? 'border-slate-300/60 bg-white/95 shadow-2xl shadow-pink-500/10 dark:border-white/30 dark:bg-slate-950/80'
                    : 'border-slate-200/40 bg-white/90 hover:border-slate-300/60 dark:border-white/10 dark:bg-slate-950/80'
                }`}
                whileHover={{ y: -8 }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-5`} />

                {/* Card content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon and date */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-5xl">{cert.icon}</div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Calendar size={16} />
                      {cert.date}
                    </div>
                  </div>

                  {/* Title and issuer */}
                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-2">{cert.title}</h3>
                  <p className="text-lg font-semibold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-4">
                    {cert.issuer}
                  </p>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: selectedId === cert.id ? 1 : 0,
                      height: selectedId === cert.id ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                      {cert.description}
                    </p>
                  </motion.div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cert.skills.slice(0, selectedId === cert.id ? 5 : 3).map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100/80 dark:bg-white/10 border border-slate-200/40 dark:border-white/20 text-slate-700 dark:text-slate-200"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(148,163,184,0.18)' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                    {cert.skills.length > 3 && selectedId !== cert.id && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100/75 border border-slate-200/30 text-slate-600 dark:bg-white/10 dark:border-white/10 dark:text-slate-300">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href={cert.link}
                    className="mt-6 flex items-center gap-2 text-sm font-semibold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text hover:from-purple-300 hover:to-cyan-300 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    View Certificate <ExternalLink size={16} className="text-purple-400" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            {
              number: '3',
              label: 'Professional Certifications',
              icon: '📜',
              description: 'From leading organizations worldwide'
            },
            {
              number: '15+',
              label: 'Associated Skills',
              icon: '🎯',
              description: 'Verified technical competencies'
            },
            {
              number: '∞',
              label: 'Continuous Learning',
              icon: '📚',
              description: 'Always exploring new technologies'
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/90 dark:bg-slate-950/70 backdrop-blur-md border border-slate-200/30 dark:border-white/10 rounded-2xl p-8 text-center"
              whileHover={{ y: -5, borderColor: 'rgba(236, 72, 153, 0.5)' }}
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 font-semibold mb-1">{stat.label}</p>
              <p className="text-slate-600 dark:text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Verification notice */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 dark:text-gray-400 text-sm">
            All certifications are verifiable through their respective issuing organizations
          </p>
        </motion.div>
      </div>
    </section>
  )
}
