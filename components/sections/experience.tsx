'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'VirtuNexa',
    date: 'Feb 2025 - Apr 2025',
    type: 'Internship',
    highlights: [
      'Built real-time web applications using Next.js & React Native',
      'Developed RESTful APIs with Node.js and Express.js',
      'Managed database operations with MongoDB',
      'Collaborated in Agile/Scrum team environment',
      'Optimized frontend performance and user experience',
    ],
    tech: ['React', 'Next.js', 'React Native', 'Node.js', 'MongoDB'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="section-content">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">// WORK EXPERIENCE</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Journey</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My experience working on innovative projects and collaborating with talented teams
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-white/10 group hover:border-primary/30 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-lg text-primary font-semibold">{exp.company}</p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    {exp.type}
                  </Badge>
                </motion.div>
              </div>

              {/* Date */}
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{exp.date}</p>

              {/* Highlights */}
              <ul className="space-y-3 mb-6">
                {exp.highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map(tech => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
