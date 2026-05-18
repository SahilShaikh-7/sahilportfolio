'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TechIcons = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'Tailwind',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Particle system
    const particles: {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
    }[] = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 15, 30, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.fillStyle = `rgba(124, 58, 237, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20 flex items-center justify-center">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
        style={{ pointerEvents: 'none' }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 -z-5 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="section-content text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Open for opportunities</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="gradient-text">Sahil Mustak</span>
            <br />
            <span className="gradient-text">Shaikh</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Full Stack Developer & AI Enthusiast crafting immersive digital experiences
          with modern web technologies
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold rounded-full group"
          >
            <a href="#projects">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-primary/30 hover:bg-primary/10"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center mb-12">
          {TechIcons.map(tech => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium backdrop-blur-sm hover:bg-secondary/20 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex gap-6 justify-center">
          <motion.a
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/SahilShaikh-7"
            className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/sahil-shaikh77"
            className="p-3 rounded-full bg-secondary/10 border border-secondary/20 text-secondary hover:bg-secondary/20 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-foreground/50">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-foreground/50 rounded-full" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
