'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface RotatingBadgeProps {
  icon: React.ReactNode
  title: string
  issuer: string
  year: string
  gradient: string
}

export function RotatingBadge({ icon, title, issuer, year, gradient }: RotatingBadgeProps) {
  const [isRotating, setIsRotating] = useState(false)

  return (
    <motion.div
      className="relative w-40 h-40 cursor-pointer"
      onMouseEnter={() => setIsRotating(true)}
      onMouseLeave={() => setIsRotating(false)}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        animate={{ rotateY: isRotating ? 360 : 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' as any }}
        className="w-full h-full"
      >
        {/* Front - Badge Display */}
        <motion.div
          className={`absolute inset-0 rounded-2xl p-4 bg-gradient-to-br ${gradient} shadow-2xl flex flex-col items-center justify-center border border-white/20 backdrop-blur-md`}
          style={{ backfaceVisibility: 'hidden' as any }}
        >
          <div className="text-5xl mb-2 animate-pulse">{icon}</div>
          <p className="text-xs font-bold text-white text-center">{year}</p>
        </motion.div>

        {/* Back - Certificate Details */}
        <motion.div
          className="absolute inset-0 rounded-2xl p-4 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl flex flex-col items-center justify-center border border-white/20 backdrop-blur-md"
          style={{
            backfaceVisibility: 'hidden' as any,
            transform: 'rotateY(180deg)',
          }}
        >
          <h4 className="text-sm font-bold text-white text-center mb-2">{title}</h4>
          <p className="text-xs text-purple-300 text-center">{issuer}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
