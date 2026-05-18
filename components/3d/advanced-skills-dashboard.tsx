'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const skillsData = {
  'Frontend': {
    color: 'from-blue-600 to-cyan-600',
    textColor: 'text-blue-400',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 93 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 88 },
      { name: 'Three.js', level: 82 },
      { name: 'Redux', level: 85 },
      { name: 'HTML5/CSS3', level: 96 },
    ]
  },
  'Backend': {
    color: 'from-purple-600 to-pink-600',
    textColor: 'text-purple-400',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 87 },
      { name: 'REST APIs', level: 92 },
      { name: 'GraphQL', level: 80 },
      { name: 'Docker', level: 82 },
      { name: 'Supabase', level: 89 },
    ]
  },
  'Languages': {
    color: 'from-green-600 to-emerald-600',
    textColor: 'text-green-400',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 78 },
      { name: 'C++', level: 75 },
      { name: 'SQL', level: 85 },
      { name: 'HTML', level: 98 },
      { name: 'CSS', level: 96 },
      { name: 'Bash', level: 80 },
    ]
  },
  'Tools & DevOps': {
    color: 'from-orange-600 to-red-600',
    textColor: 'text-orange-400',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 92 },
      { name: 'AWS', level: 82 },
      { name: 'Vercel', level: 94 },
      { name: 'CI/CD', level: 85 },
      { name: 'VS Code', level: 98 },
      { name: 'Linux', level: 80 },
      { name: 'Figma', level: 75 },
    ]
  },
  'AI & Machine Learning': {
    color: 'from-cyan-600 to-blue-600',
    textColor: 'text-cyan-400',
    skills: [
      { name: 'OpenAI API', level: 88 },
      { name: 'Prompt Engineering', level: 89 },
      { name: 'LangChain', level: 83 },
      { name: 'Vector Databases', level: 81 },
      { name: 'RAG Systems', level: 82 },
      { name: 'TensorFlow', level: 72 },
      { name: 'PyTorch', level: 70 },
      { name: 'Data Analysis', level: 85 },
    ]
  },
}

export function AdvancedSkillsDashboard() {
  const [selectedCategory, setSelectedCategory] = useState('Frontend')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const categories = Object.keys(skillsData)
  const currentSkills = skillsData[selectedCategory as keyof typeof skillsData]

  return (
    <section className="relative min-h-screen w-full overflow-hidden py-32 px-4 md:px-8">
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive proficiency across 45+ technologies spanning frontend, backend, AI, and DevOps
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all border ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-purple-500 shadow-lg shadow-purple-500/50'
                  : 'bg-white/5 text-gray-300 border-white/20 hover:border-white/40'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentSkills.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all ${
                hoveredSkill === skill.name ? 'bg-white/10 shadow-lg shadow-purple-500/20' : ''
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-sm font-bold text-purple-400">{skill.level}%</span>
                </div>
                
                {/* Proficiency Bar */}
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${currentSkills.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: hoveredSkill === skill.name ? `${skill.level}%` : '0%' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                  <motion.div
                    className={`h-full bg-gradient-to-r ${currentSkills.color}`}
                    initial={{ width: `${skill.level}%` }}
                    animate={{ width: hoveredSkill === skill.name ? `${skill.level}%` : 0 }}
                    transition={{ duration: 0 }}
                  />
                </div>

                {/* Animated progress bar for initial load */}
                <motion.div
                  className={`h-full absolute top-0 left-0 bg-gradient-to-r ${currentSkills.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.08, duration: 0.8 }}
                  style={{ height: 12, borderRadius: 6 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Total Technologies', value: '45+' },
            { label: 'Frontend Skills', value: '8+' },
            { label: 'Backend Skills', value: '8+' },
            { label: 'DevOps Tools', value: '8+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center"
              whileHover={{ y: -5, borderColor: 'rgba(124, 58, 237, 0.5)' }}
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
