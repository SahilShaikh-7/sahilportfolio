'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { NeuralNetworkScene } from '@/components/3d/neural-network'
import { Suspense } from 'react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20 pb-20">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(124,58,237,.05)_25%,rgba(124,58,237,.05)_26%,transparent_27%,transparent_74%,rgba(124,58,237,.05)_75%,rgba(124,58,237,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="mb-6 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="px-4 py-2 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-700 text-sm font-semibold dark:text-purple-200">
                  ✨ Full Stack Developer & AI Enthusiast
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-slate-950 dark:text-white">
                  Sahil Shaikh
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-slate-700 dark:text-white">
                  <span className="gradient-text">Full Stack Developer & AI Enthusiast</span>
                </h2>
              </motion.div>

              <motion.p
                className="text-xl text-slate-700 dark:text-gray-300 mb-8 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I build beautiful, performant web applications with cutting-edge technologies. Specializing in React, Next.js, and AI integration. Let&apos;s create something extraordinary together.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="#projects"
                  className="px-8 py-4 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-2xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work <ArrowRight size={20} />
                </motion.a>

                <motion.a
                  href="#contact"
                  className="px-8 py-4 inline-flex items-center gap-2 bg-white/90 dark:bg-white/10 border border-slate-200/60 dark:border-white/20 text-slate-950 dark:text-white font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { icon: Github, href: 'https://github.com/SahilShaikh-7' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/sahil-shaikh77' },
                  { icon: Mail, href: 'mailto:sms.sahil6868@gmail.com' },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    className="p-3 bg-slate-100/90 dark:bg-white/10 backdrop-blur-md border border-slate-200/60 dark:border-white/20 rounded-xl text-slate-950 dark:text-white hover:bg-slate-200/70 dark:hover:bg-purple-600/20 transition-all"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right 3D Model */}
            <motion.div
              className="h-screen md:h-96 lg:h-screen relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10 pointer-events-none" />
            <div className="h-full w-full rounded-[2rem] overflow-hidden glass border border-white/10 shadow-2xl">
              <Suspense fallback={<div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-900 to-cyan-900 text-white text-lg font-semibold rounded-[2rem] animate-pulse">Loading 3D scene...</div>}>
                <NeuralNetworkScene />
              </Suspense>
            </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-purple-400 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
