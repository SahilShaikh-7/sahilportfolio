'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

interface EducationCardProps {
  degree: string
  school: string
  duration: string
  cgpa: number
  subjects: string[]
}

export function EducationCard({ degree, school, duration, cgpa, subjects }: EducationCardProps) {
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (counterRef.current) {
      gsap.fromTo(
        counterRef.current,
        { innerText: '0' },
        {
          innerText: cgpa.toFixed(1),
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 0.1 },
        }
      )
    }
  }, [cgpa])

  return (
    <motion.div
      className="relative h-auto min-h-[24rem] rounded-3xl overflow-hidden flex flex-col"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 5,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 rounded-3xl opacity-95 backdrop-blur-xl" />

      <div className="relative z-10 p-8 flex-1 flex flex-col justify-between text-slate-900 dark:text-white">
        <div>
          <h3 className="text-3xl font-bold mb-2">{degree}</h3>
          <p className="text-lg text-blue-600 dark:text-blue-300 mb-1">{school}</p>
          <p className="text-sm text-slate-500 dark:text-gray-400">{duration}</p>
        </div>

        <div className="space-y-6">
          {/* CGPA Counter */}
          <motion.div
            className="bg-black/5 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-black/10 dark:border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-sm text-slate-600 dark:text-gray-300 mb-2">CGPA</p>
            <div className="flex items-center gap-2">
              <span
                ref={counterRef}
                className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent"
              >
                0
              </span>
              <span className="text-2xl text-slate-500 dark:text-gray-400">/10</span>
            </div>
          </motion.div>

          {/* Subjects */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-gray-400 mb-3 font-semibold">
              Key Subjects
            </p>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 bg-cyan-100 dark:bg-cyan-500/20 border border-cyan-300 dark:border-cyan-400/50 rounded-full text-xs text-cyan-800 dark:text-cyan-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {subject}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
