'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

interface Skill {
  name: string
  proficiency: number
  icon: string
  color: string
  category: 'frontend' | 'backend' | 'languages' | 'tools' | 'workflow'
}

interface SkillCategory {
  name: string
  icon: React.ReactNode
  color: string
  skills: Skill[]
}

const skillsData: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', proficiency: 95, icon: '⚛️', category: 'frontend', color: 'text-blue-400' },
      { name: 'Next.js', proficiency: 93, icon: '▲', category: 'frontend', color: 'text-white' },
      { name: 'TypeScript', proficiency: 90, icon: 'TS', category: 'frontend', color: 'text-blue-300' },
      { name: 'Tailwind CSS', proficiency: 95, icon: '🎨', category: 'frontend', color: 'text-cyan-400' },
      { name: 'Three.js', proficiency: 82, icon: '🎲', category: 'frontend', color: 'text-orange-400' },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js', proficiency: 88, icon: '🟢', category: 'backend', color: 'text-green-400' },
      { name: 'PostgreSQL', proficiency: 85, icon: '🐘', category: 'backend', color: 'text-blue-400' },
      { name: 'MongoDB', proficiency: 82, icon: '🍃', category: 'backend', color: 'text-green-500' },
      { name: 'REST APIs', proficiency: 90, icon: '🔌', category: 'backend', color: 'text-purple-400' },
    ],
  },
  {
    name: 'Languages',
    icon: '📝',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'JavaScript', proficiency: 95, icon: 'JS', category: 'languages', color: 'text-yellow-400' },
      { name: 'Python', proficiency: 80, icon: '🐍', category: 'languages', color: 'text-yellow-500' },
      { name: 'Java', proficiency: 78, icon: '☕', category: 'languages', color: 'text-orange-600' },
    ],
  },
  {
    name: 'Tools',
    icon: '🛠️',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Git', proficiency: 92, icon: '🐙', category: 'tools', color: 'text-orange-600' },
      { name: 'Docker', proficiency: 85, icon: '🐳', category: 'tools', color: 'text-blue-500' },
      { name: 'AWS', proficiency: 80, icon: '☁️', category: 'tools', color: 'text-orange-400' },
    ],
  },
]

export function HolographicSkillsHUD() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    // Animate orbits continuously
    if (svgRef.current) {
      const orbits = svgRef.current.querySelectorAll('[data-orbit]')
      orbits.forEach((orbit, index) => {
        gsap.to(orbit, {
          rotation: 360,
          duration: 20 + index * 5,
          repeat: -1,
          ease: 'none',
        })
      })
    }
  }, [])

  const flatSkills = skillsData.flatMap((cat) => cat.skills)

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-black/30 backdrop-blur-sm py-20 px-4">
      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,255,255,.05)_25%,rgba(0,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(0,255,255,.05)_75%,rgba(0,255,255,.05)_76%,transparent_77%,transparent)] bg-[length:100%_20px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-cyan-400 text-sm font-mono mb-4 block">// SKILLS GALAXY</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Technologies I use to bring ideas to life with precision and innovation</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Holographic Display */}
          <motion.div className="lg:col-span-2 relative aspect-square" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-purple-500/10 rounded-2xl blur-3xl" />

            {/* SVG Orbital System */}
            <svg ref={svgRef} className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
              <defs>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00ffff" stopOpacity="0.1" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Orbital paths */}
              {[1, 2, 3, 4].map((ring) => (
                <circle key={`orbit-${ring}`} cx="250" cy="250" r={80 + ring * 50} fill="none" stroke="url(#centerGlow)" strokeWidth="0.5" opacity="0.3" />
              ))}

              {/* Center hexagon */}
              <g data-orbit="0">
                <circle cx="250" cy="250" r="40" fill="url(#centerGlow)" opacity="0.2" filter="url(#glow)" />
                <polygon points="250,210 280,230 280,270 250,290 220,270 220,230" fill="none" stroke="#00ffff" strokeWidth="2" filter="url(#glow)" />
                <text x="250" y="260" textAnchor="middle" fill="#00ffff" fontSize="24" fontWeight="bold">
                  {'</>'} 
                </text>
              </g>

              {/* Skill nodes */}
              {flatSkills.map((skill, idx) => {
                const angle = (idx / flatSkills.length) * Math.PI * 2
                const radius = 120 + Math.floor(idx / 6) * 60
                const x = 250 + Math.cos(angle) * radius
                const y = 250 + Math.sin(angle) * radius

                return (
                  <g key={`skill-${idx}`} className="cursor-pointer" onClick={() => setSelectedSkill(skill)}>
                    <circle cx={x} cy={y} r="22" fill="none" stroke={skill.color} strokeWidth="2" opacity="0.5" />
                    <circle cx={x} cy={y} r="20" fill={skill.color} opacity="0.15" filter="url(#glow)" />
                    <text x={x} y={y + 7} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" className="pointer-events-none">
                      {skill.icon}
                    </text>

                    {/* Connection lines to center */}
                    <line x1="250" y1="250" x2={x} y2={y} stroke={skill.color} strokeWidth="0.5" opacity="0.2" />
                  </g>
                )
              })}
            </svg>

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                animate={{
                  x: Math.random() * 400 - 200,
                  y: Math.random() * 400 - 200,
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: '-2px',
                  marginTop: '-2px',
                }}
              />
            ))}
          </motion.div>

          {/* Right Panel - Skill Details */}
          <motion.div className="relative" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="sticky top-20 border border-cyan-500/30 rounded-xl p-6 bg-black/50 backdrop-blur-xl">
              <AnimatePresence mode="wait">
                {selectedSkill ? (
                  <motion.div key={selectedSkill.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-4xl">{selectedSkill.icon}</div>
                      <div>
                        <h3 className="text-white font-bold text-xl">{selectedSkill.name}</h3>
                        <span className={`text-sm font-mono ${selectedSkill.color}`}>{selectedSkill.category.toUpperCase()}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Proficiency</span>
                          <span className="text-cyan-400 font-mono">{selectedSkill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${selectedSkill.proficiency}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                          />
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-700">
                        <p className="text-gray-400 text-sm">Used in multiple projects and production applications</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-8">
                    <div className="text-6xl mb-4 opacity-30">🎯</div>
                    <p className="text-gray-400">Click on any skill to view details</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Category breakdown */}
        <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          {skillsData.map((category) => (
            <motion.div
              key={category.name}
              className="border border-gray-700 rounded-lg p-4 text-center cursor-pointer group hover:border-cyan-500/50 transition-colors"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <h4 className="text-white font-semibold text-sm">{category.name}</h4>
              <p className="text-cyan-400 text-xs mt-1 font-mono">{category.skills.length} skills</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
          {[
            { label: 'Technologies', value: '20+' },
            { label: 'Years Experience', value: '2+' },
            { label: 'Projects', value: '15+' },
            { label: 'Always Learning', value: '♾️' },
          ].map((stat) => (
            <div key={stat.label} className="border border-purple-500/30 rounded-lg p-4 text-center bg-purple-500/5">
              <div className="text-2xl font-bold text-purple-400 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
