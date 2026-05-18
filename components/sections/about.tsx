'use client'

import { motion } from 'framer-motion'
import { Code2, Rocket, Brain } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Full Stack',
    description: 'End-to-end development from databases to pixel-perfect UIs',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimized, scalable, and production-ready applications',
  },
  {
    icon: Brain,
    title: 'AI Enthusiast',
    description: 'Integrating AI and ML into modern web applications',
  },
]

const stats = [
  { label: 'Projects', value: '7+' },
  { label: 'Years Coding', value: '3+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Clients', value: '3+' },
]

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="section-content">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">// ABOUT ME</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who I Am</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A passionate full-stack developer with a love for crafting exceptional digital
            experiences using cutting-edge technologies
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
              I&apos;m <span className="font-semibold text-primary">Sahil Mustak Shaikh</span>, a Computer
              Engineering student and Full Stack Developer passionate about building modern,
              high-performance web applications.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
              With experience in <span className="font-semibold text-secondary">React, Next.js, Node.js,
              and MongoDB</span>, I focus on creating solutions that are not only functional but
              beautifully designed and technically excellent.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
              My journey spans from building hiring platforms and AI resume analyzers to
              developing real-time applications and AI-powered SaaS products. I believe in
              clean code, continuous learning, and pushing the boundaries of what&apos;s possible
              on the web.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Let&apos;s work together
                <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="glass p-6 rounded-2xl group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl text-center group cursor-pointer"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
