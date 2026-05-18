'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const certifications = [
  {
    title: 'AI & DevOps Engineer Program',
    issuer: 'Reliance',
    date: '2024',
    icon: '🤖',
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Software Engineering Simulation',
    issuer: 'EA - Forage',
    date: '2024',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Generative AI Certification',
    issuer: 'Microsoft & LinkedIn',
    date: '2024',
    icon: '✨',
    color: 'from-pink-500 to-rose-500',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      <div className="section-content">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">// CREDENTIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Professional certifications and achievements validating my expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group cursor-pointer h-full"
              style={{ perspective: '1000px' }}
            >
              <div
                className={`glass p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all h-full flex flex-col items-center text-center group-hover:shadow-lg`}
              >
                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}
                >
                  {cert.icon}
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary">{cert.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>

                {/* Issuer */}
                <p className="text-foreground/60 text-sm">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
