'use client'

import { motion } from 'framer-motion'
import { ProjectCarousel } from '@/components/3d/project-carousel'
import { Suspense } from 'react'

export function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen w-full overflow-hidden py-32 px-4 md:px-8">
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-gray-400 max-w-2xl mx-auto">
            Interactive 3D carousel showcasing my best work. Hover or click cards to flip and see details.
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-96 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-3xl border border-white/10 animate-pulse">
                <p className="text-gray-400">Loading projects...</p>
              </div>
            }
          >
            <ProjectCarousel />
          </Suspense>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            {
              number: '7+',
              label: 'Enterprise Projects',
              description: 'Full-stack applications in production',
            },
            {
              number: '500+',
              label: 'Active Users',
              description: 'Across all deployed applications',
            },
            {
              number: '99.9%',
              label: 'Uptime',
              description: 'Mission-critical reliability',
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center"
              whileHover={{
                y: -5,
                borderColor: 'rgba(124, 58, 237, 0.5)',
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-cyan-600/10 opacity-0 hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold text-slate-950 dark:text-white mb-2">{stat.label}</p>
                <p className="text-slate-600 dark:text-gray-400 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
