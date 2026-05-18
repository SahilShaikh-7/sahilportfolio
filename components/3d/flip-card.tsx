'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface FlipCardProps {
  title: string
  icon: React.ReactNode
  proficiency: number
  projectsCount: number
  skills: string[]
  color: string
}

export function FlipCard({ title, icon, proficiency, projectsCount, skills, color }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="h-80 cursor-pointer perspective"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' as any }}
      >
        {/* Front */}
        <motion.div
          className={`absolute w-full h-full rounded-2xl p-6 flex flex-col items-center justify-center glass backdrop-blur-xl border border-white/20 bg-gradient-to-br ${color}`}
          style={{ backfaceVisibility: 'hidden' as any }}
        >
          <div className="text-6xl mb-4 animate-bounce" style={{ animationDuration: '3s' }}>
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-center text-white mb-4">{title}</h3>
          <div className="w-full">
            <div className="text-sm font-semibold text-white/80 mb-2">Proficiency: {proficiency}%</div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-400 to-cyan-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${proficiency}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute w-full h-full rounded-2xl p-6 flex flex-col items-center justify-center glass backdrop-blur-xl border border-white/20 bg-gradient-to-br from-cyan-600 to-purple-600"
          style={{
            backfaceVisibility: 'hidden' as any,
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="text-center">
            <h4 className="text-lg font-bold text-white mb-3">Projects: {projectsCount}</h4>
            <div className="space-y-2">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm text-white mr-2 mb-2"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
