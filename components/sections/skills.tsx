'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const skillCategories = [
  {
    name: 'Frontend',
    icon: '🎨',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React.js', level: 95, projects: 12 },
      { name: 'Next.js', level: 92, projects: 8 },
      { name: 'TypeScript', level: 90, projects: 15 },
      { name: 'Tailwind CSS', level: 98, projects: 14 },
      { name: 'Framer Motion', level: 88, projects: 10 },
      { name: 'React Native', level: 85, projects: 4 },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Node.js', level: 90, projects: 10 },
      { name: 'Express.js', level: 88, projects: 9 },
      { name: 'MongoDB', level: 92, projects: 11 },
      { name: 'PostgreSQL', level: 85, projects: 6 },
      { name: 'REST APIs', level: 94, projects: 13 },
      { name: 'GraphQL', level: 80, projects: 3 },
    ],
  },
  {
    name: 'Tools & DevOps',
    icon: '🛠️',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git & GitHub', level: 93, projects: 15 },
      { name: 'Docker', level: 82, projects: 5 },
      { name: 'Vercel', level: 95, projects: 12 },
      { name: 'AWS', level: 78, projects: 4 },
      { name: 'CI/CD', level: 80, projects: 5 },
      { name: 'Figma', level: 85, projects: 7 },
    ],
  },
  {
    name: 'AI & Emerging',
    icon: '🤖',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'OpenAI API', level: 88, projects: 5 },
      { name: 'Groq API', level: 85, projects: 4 },
      { name: 'LangChain', level: 82, projects: 3 },
      { name: 'Machine Learning', level: 75, projects: 2 },
      { name: 'Python', level: 80, projects: 4 },
      { name: 'Data Science', level: 72, projects: 2 },
    ],
  },
]

const SkillBar = ({ skill, index }: { skill: { name: string; level: number; projects: number }; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">{skill.name}</span>
        <motion.span
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          className="text-xs text-foreground/60"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="relative h-2 rounded-full overflow-hidden bg-foreground/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg"
        />
      </div>
      {isHovered && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-foreground/50 pt-1"
        >
          {skill.projects} projects
        </motion.p>
      )}
    </motion.div>
  )
}

const SkillCategory = ({
  category,
  index,
}: {
  category: (typeof skillCategories)[0]
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`glass p-8 rounded-3xl border border-white/10 cursor-pointer transition-all group`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">{category.icon}</span>
        <h3 className="text-2xl font-bold">{category.name}</h3>
      </div>

      {/* Gradient line */}
      <div className={`h-1 w-12 rounded-full mb-6 bg-gradient-to-r ${category.color}`} />

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="section-content">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">// TECH STACK</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I&apos;ve mastered through real-world projects
            and continuous learning
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl border border-white/10 text-center"
        >
          <p className="text-foreground/70 mb-4">
            <span className="font-bold text-foreground">24 Technologies</span> mastered across
            <span className="font-bold text-foreground"> 4 categories</span> with
            <span className="font-bold text-foreground"> 85% average proficiency</span>
          </p>
          <div className="flex gap-2 justify-center flex-wrap">
            {skillCategories.map(cat =>
              cat.skills.slice(0, 3).map(skill => (
                <motion.span
                  key={`${cat.name}-${skill.name}`}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium"
                >
                  {skill.name}
                </motion.span>
              ))
            )}
            <span className="px-3 py-1 rounded-full bg-foreground/10 text-foreground/70 text-xs font-medium">
              & 12 more...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
