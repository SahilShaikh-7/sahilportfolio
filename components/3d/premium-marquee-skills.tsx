'use client'

import { useState, useRef, ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Code,
  Sparkles,
  Zap,
  Server,
  Cloud,
  Database,
  Terminal,
  GitBranch,
  Github,
  Box,
  Wrench,
  Layers,
  ShieldCheck,
  Rocket,
} from 'lucide-react'

interface Skill {
  name: string
  proficiency: number
  category: string
  color: string
  icon: ReactNode
}

const allSkills: Skill[] = [
  { name: 'React.js', proficiency: 96, category: 'Frontend', color: 'from-sky-400 to-blue-500', icon: <Code className="w-8 h-8 text-sky-400" /> },
  { name: 'Next.js', proficiency: 94, category: 'Frontend', color: 'from-slate-300 to-slate-500', icon: <Code2 className="w-8 h-8 text-slate-100" /> },
  { name: 'JavaScript', proficiency: 95, category: 'Frontend', color: 'from-amber-400 to-yellow-500', icon: <Sparkles className="w-8 h-8 text-amber-400" /> },
  { name: 'TypeScript', proficiency: 95, category: 'Frontend', color: 'from-cyan-400 to-blue-600', icon: <Sparkles className="w-8 h-8 text-cyan-400" /> },
  { name: 'HTML5', proficiency: 92, category: 'Frontend', color: 'from-orange-400 to-amber-500', icon: <Code className="w-8 h-8 text-orange-400" /> },
  { name: 'CSS3', proficiency: 92, category: 'Frontend', color: 'from-blue-400 to-cyan-500', icon: <Code2 className="w-8 h-8 text-blue-400" /> },
  { name: 'Tailwind CSS', proficiency: 93, category: 'Frontend', color: 'from-sky-300 to-cyan-500', icon: <Terminal className="w-8 h-8 text-sky-500" /> },
  { name: 'Node.js', proficiency: 92, category: 'Backend', color: 'from-emerald-400 to-teal-600', icon: <Zap className="w-8 h-8 text-emerald-400" /> },
  { name: 'MongoDB', proficiency: 87, category: 'Database', color: 'from-emerald-500 to-lime-500', icon: <Database className="w-8 h-8 text-emerald-500" /> },
  { name: 'Git', proficiency: 94, category: 'Tools', color: 'from-orange-400 to-amber-500', icon: <GitBranch className="w-8 h-8 text-orange-400" /> },
  { name: 'Python', proficiency: 90, category: 'Backend', color: 'from-sky-400 to-indigo-500', icon: <Sparkles className="w-8 h-8 text-sky-400" /> },
  { name: 'Framer Motion', proficiency: 91, category: 'Frontend', color: 'from-violet-500 to-fuchsia-500', icon: <Sparkles className="w-8 h-8 text-violet-400" /> },
  { name: 'Express.js', proficiency: 90, category: 'Backend', color: 'from-violet-500 to-fuchsia-600', icon: <Server className="w-8 h-8 text-violet-400" /> },
  { name: 'PostgreSQL', proficiency: 91, category: 'Database', color: 'from-emerald-400 to-teal-500', icon: <Database className="w-8 h-8 text-emerald-400" /> },
  { name: 'Firebase', proficiency: 89, category: 'Cloud', color: 'from-orange-400 to-amber-500', icon: <Cloud className="w-8 h-8 text-orange-400" /> },
  { name: 'Supabase', proficiency: 88, category: 'Cloud', color: 'from-cyan-400 to-sky-600', icon: <Cloud className="w-8 h-8 text-cyan-400" /> },
  { name: 'REST APIs', proficiency: 93, category: 'Backend', color: 'from-slate-500 to-slate-700', icon: <Layers className="w-8 h-8 text-slate-500" /> },
  { name: 'Java', proficiency: 90, category: 'Backend', color: 'from-rose-400 to-orange-500', icon: <Code className="w-8 h-8 text-rose-400" /> },
  { name: 'C++', proficiency: 88, category: 'Backend', color: 'from-slate-500 to-slate-700', icon: <Code2 className="w-8 h-8 text-slate-500" /> },
  { name: 'MySQL', proficiency: 89, category: 'Database', color: 'from-blue-400 to-cyan-500', icon: <Database className="w-8 h-8 text-blue-400" /> },
  { name: 'GitHub', proficiency: 95, category: 'Tools', color: 'from-slate-700 to-slate-900', icon: <Github className="w-8 h-8 text-white" /> },
  { name: 'GCP', proficiency: 87, category: 'Cloud', color: 'from-amber-400 to-yellow-500', icon: <Cloud className="w-8 h-8 text-amber-400" /> },
  { name: 'Three.js', proficiency: 88, category: 'Frontend', color: 'from-slate-500 to-slate-700', icon: <Box className="w-8 h-8 text-slate-500" /> },
  { name: 'AI / NLP', proficiency: 90, category: 'AI', color: 'from-purple-500 to-fuchsia-500', icon: <Sparkles className="w-8 h-8 text-purple-400" /> },
]

const topRowSkills = allSkills.slice(0, 12)
const bottomRowSkills = allSkills.slice(12)

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div className="flex-shrink-0 group relative" whileHover={{ y: -10 }}>
      <div className="w-40 md:w-44 h-44 bg-white/70 dark:bg-slate-950/80 backdrop-blur-2xl rounded-[1.75rem] border border-white/20 dark:border-white/10 p-5 flex flex-col items-center justify-between gap-4 shadow-2xl shadow-slate-900/10 hover:-translate-y-1 transition-transform duration-300">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900/5 dark:bg-white/10">
          {skill.icon}
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-sm font-semibold text-slate-950 dark:text-white truncate">{skill.name}</h3>
          <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{skill.category}</p>
        </div>
        <div className="w-full">
          <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`} style={{ width: `${skill.proficiency}%` }} />
          </div>
          <p className="mt-2 text-xs font-medium text-slate-600 dark:text-slate-300">Proficiency {skill.proficiency}%</p>
        </div>
      </div>
    </motion.div>
  )
}

function MarqueeRow({ skills, reverse }: { skills: Skill[]; reverse?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pointerOffset, setPointerOffset] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const relativeX = event.clientX - rect.left
    const offset = ((relativeX / rect.width) - 0.5) * 140
    setPointerOffset(offset)
  }

  return (
    <div
      ref={containerRef}
      className="mb-8 relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl shadow-slate-950/10 dark:bg-slate-950/40 dark:border-white/10"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => {
        setIsPaused(false)
        setPointerOffset(0)
      }}
      onPointerMove={handlePointerMove}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />

      <div className="relative overflow-hidden py-6">
        <div
          className="flex min-w-max"
          style={{
            animationName: reverse ? 'marquee-right' : 'marquee-left',
            animationDuration: '30s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
            willChange: 'transform',
          }}
        >
          <div className="flex min-w-max" style={{ transform: `translateX(${pointerOffset}px)`, transition: 'transform 0.18s ease-out' }}>
            {[...skills, ...skills].map((skill, idx) => (
              <div key={`${skill.name}-${idx}`} className="flex-shrink-0 px-3">
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function PremiumMarqueeSkills() {
  return (
    <section id="skills" className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.18),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_22%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center justify-center gap-2 mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            PREMIUM SKILLS HUB
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-950 dark:text-white leading-tight">
            Skills that keep the workflow moving.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-300">
            Two seamless lanes of developer expertise, flowing forever with hover-aware motion and subtle manual control.
          </p>
        </motion.div>

        <MarqueeRow skills={topRowSkills} reverse />
        <MarqueeRow skills={bottomRowSkills} />

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 mt-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Featured Technologies', value: '16', accent: 'from-sky-400 to-blue-500' },
            { label: 'Live Projects', value: '8+', accent: 'from-violet-500 to-fuchsia-500' },
            { label: 'Average Uptime', value: '99.9%', accent: 'from-emerald-400 to-teal-500' },
            { label: 'Daily Velocity', value: '24/7', accent: 'from-orange-400 to-amber-500' },
          ].map((stat, idx) => (
            <div key={idx} className="rounded-3xl border border-slate-200/30 bg-white/90 dark:bg-slate-950/70 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
              <div className={`inline-flex rounded-full bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent text-4xl font-semibold mb-3`}>
                {stat.value}
              </div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
