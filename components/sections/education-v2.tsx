'use client'

import { motion } from 'framer-motion'
import { EducationCard } from '@/components/3d/education-card'
import { BookOpen } from 'lucide-react'

const educationData = [
  {
    degree: 'B.E. Computer Engineering',
    school: 'Sandip Institute of Technology & Research Center',
    duration: 'SPPU 2021 - 2025',
    cgpa: 7.1,
    subjects: ['Data Structures & Algorithms', 'Web Development', 'AI/ML', 'Operating Systems', 'Database Management'],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="relative min-h-screen w-full overflow-hidden py-32 px-4 md:px-8">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-25"
        animate={{
          background: [
            'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6 mx-auto w-fit">
            <BookOpen className="text-blue-400" size={32} />
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-text">Education</span>
            </h2>
          </div>
          <p className="text-xl text-slate-700 dark:text-gray-400 max-w-2xl mx-auto">
            Academic foundation in Computer Engineering with focus on modern technologies and practical applications
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          className="grid grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <EducationCard {...education} />
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Timeline */}
        <motion.div
          className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-slate-200/40 rounded-2xl p-8"
            whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.5)' }}
          >
            <h4 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">Campus Activities</h4>
            <ul className="space-y-3 text-slate-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">▸</span>
                <span>Active member of coding clubs and tech communities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">▸</span>
                <span>Participated in hackathons and competitive programming</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">▸</span>
                <span>Mentored junior students in web development</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-md border border-slate-200/40 rounded-2xl p-8"
            whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.5)' }}
          >
            <h4 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">Key Achievements</h4>
            <ul className="space-y-3 text-slate-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">▸</span>
                <span>Secured First class CGPA throughout all semesters</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">▸</span>
                <span>Developed multiple full-stack applications as coursework</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">▸</span>
                <span>Recognized for academic excellence and technical skills</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
