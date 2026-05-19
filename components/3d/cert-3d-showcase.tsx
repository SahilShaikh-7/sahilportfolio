'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

interface Certification {
  id: string
  title: string
  issuer: string
  year: string
  description: string
  color: string
  icon: string
  skills: string[]
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'AI & DevOps Engineer Program',
    issuer: 'Reliance',
    year: '2025',
    description: 'Advanced training in AI implementation and DevOps practices for enterprise solutions.',
    color: 'from-purple-600 to-pink-600',
    icon: '🤖',
    skills: ['AI/ML', 'DevOps', 'Cloud Architecture', 'CI/CD'],
  },
  {
    id: '2',
    title: 'Software Engineering Simulation',
    issuer: 'EA - Forage',
    year: '2024',
    description: 'Hands-on experience with professional software engineering practices and real-world scenarios.',
    color: 'from-blue-600 to-cyan-600',
    icon: '💻',
    skills: ['Software Design', 'Testing', 'Agile', 'Git'],
  },
  {
    id: '3',
    title: 'Generative AI Certification',
    issuer: 'Microsoft & LinkedIn',
    year: '2025',
    description: 'Comprehensive understanding of generative AI models, prompt engineering, and applications.',
    color: 'from-cyan-600 to-teal-600',
    icon: '✨',
    skills: ['LLMs', 'Prompt Engineering', 'AI Ethics', 'Model Fine-tuning'],
  },
]

export function Cert3DShowcase() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)
  const [rotations, setRotations] = useState<{ [key: string]: boolean }>({})

  const toggleRotation = (id: string) => {
    setRotations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="relative w-full min-h-screen bg-black/30 backdrop-blur-sm py-20 px-4">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-cyan-400 text-sm font-mono mb-4 block">// CREDENTIALS</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white block md:inline">Professional </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Industry-recognized achievements and specialized training from top-tier organizations</p>
        </motion.div>

        {/* 3D Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              {/* 3D Card Container */}
              <motion.div
                className="relative h-96 cursor-pointer perspective"
                onClick={() => setSelectedCert(selectedCert?.id === cert.id ? null : cert)}
                whileHover={{ y: -8 }}
                animate={{
                  rotateY: rotations[cert.id] ? 180 : 0,
                }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Front of card */}
                <motion.div
                  className={`absolute inset-0 p-8 rounded-2xl border border-gray-700/50 group-hover:border-cyan-500/50 bg-gradient-to-br ${cert.color} bg-opacity-5 backdrop-blur-xl overflow-hidden transition-colors`}
                  style={{
                    backfaceVisibility: 'hidden',
                  }}
                >
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all pointer-events-none" />

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Icon */}
                    <motion.div
                      className="text-6xl mb-4"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {cert.icon}
                    </motion.div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{cert.issuer}</p>

                      <motion.div
                        className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-xs font-mono"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {cert.year}
                      </motion.div>
                    </div>

                    {/* Click hint */}
                    <motion.div
                      className="text-xs text-gray-400 mt-4 flex items-center gap-2"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      Click to view details
                    </motion.div>
                  </div>
                </motion.div>

                {/* Back of card */}
                <motion.div
                  className={`absolute inset-0 p-8 rounded-2xl border border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl overflow-hidden`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-white font-bold mb-4 text-sm">KEY SKILLS</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            className="px-2 py-1 rounded-md bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-xs font-mono"
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm">{cert.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Selected Certification Details Panel */}
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-w-2xl w-full border border-cyan-500/50 rounded-2xl bg-black/90 p-8 backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>

              <div className="flex items-start gap-6 mb-6">
                <div className="text-6xl">{selectedCert.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedCert.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-1">{selectedCert.issuer}</p>
                  <p className="text-gray-400 text-sm">Year: {selectedCert.year}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{selectedCert.description}</p>

              <div>
                <h4 className="text-white font-bold mb-3">Core Competencies</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedCert.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-mono"
                      whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Achievement Stats */}
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          {[
            { label: 'Certifications', value: '3' },
            { label: 'Organizations', value: '3' },
            { label: 'Total Skills', value: '12+' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="border border-purple-500/30 rounded-lg p-4 text-center bg-purple-500/5 group hover:border-purple-500/50 transition-colors"
              whileHover={{ y: -4 }}
            >
              <motion.div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
