'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const education = [
  {
    degree: 'B.E. Computer Engineering',
    institution: 'Sandip Institute of Technology & Research Center',
    duration: 'SPPU • 2021 - 2025',
    cgpa: '7.1',
    image: '🎓',
    keySubjects: [
      'Data Structures & Algorithms',
      'Web Development',
      'AI/ML',
      'Operating Systems',
      'Database Management',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="section-container">
      <div className="section-content">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">// ACADEMIC</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-white/10 group hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Icon */}
                <div className="text-5xl flex-shrink-0">{edu.image}</div>

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-lg text-primary font-semibold">{edu.institution}</p>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/30">
                        CGPA: {edu.cgpa}
                      </Badge>
                    </motion.div>
                  </div>

                  {/* Duration */}
                  <p className="text-sm text-foreground/60 mb-6">{edu.duration}</p>

                  {/* Key Subjects */}
                  <div>
                    <p className="text-sm font-semibold text-foreground/80 mb-3">Key Subjects</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.keySubjects.map(subject => (
                        <motion.span
                          key={subject}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                        >
                          {subject}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
