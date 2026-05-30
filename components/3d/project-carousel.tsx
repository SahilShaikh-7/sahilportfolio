'use client'

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tech: string[]
  gradient: string
  liveUrl: string
  githubUrl: string
}

const projects: ProjectCardProps[] = [
  {
    title: 'Pulse E-Commerce Analytics Dashboard',
    description: 'Comprehensive analytics platform for e-commerce businesses with real-time sales tracking, customer behavior analysis, inventory management, and predictive sales forecasting using machine learning.',
    image: '/modern-analytics-dashboard.png',
    tech: ['Next.js', 'TypeScript', 'Chart.js', 'MongoDB', 'Python'],
    gradient: 'from-blue-600 to-indigo-600',
    liveUrl: 'https://pulse-e-commerce-analytics-dashboard-ktneydjvk.vercel.app/',
    githubUrl: 'https://github.com/SahilShaikh-7/Pulse-E-Commerce-analytics-Dashboard'
  },
  {
    title: 'TaskFlow - Task&Team Management Platform',
    description: 'TaskFlow is a modern AI-powered task management platform with real-time collaboration, smart task allocation, workload tracking, and productivity analytics for marketing and development teams.',
    image: '/Screenshot (126).png',
    tech: ['React', 'Next.js', 'Node.js', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    gradient: 'from-pink-600 to-rose-600',
    liveUrl: 'https://taskflow-bysahil.vercel.app/',
    githubUrl: 'https://github.com/SahilShaikh-7/TaskFlow-Task-Management-app'
  },
  {
    title: 'CareerSpark - AI Powered Resume Analyzer for Job Matching',
    description: 'Intelligent resume parsing and analysis using NLP and machine learning for smart candidate evaluation.',
    image: '/ai-resume-analyzer.png',
    tech: ['React', 'Python', 'NLP', 'ML', 'Firebase'],
    gradient: 'from-cyan-600 to-blue-600',
    liveUrl: 'https://careerspark-jsearch.vercel.app/',
    githubUrl: 'https://github.com/SahilShaikh-7/careerspark-jsearch'
  },
  {
    title: 'FinSight — AI Powered Personal Finance & Expense Analyzer',
    description: 'A smart finance management platform that analyzes user expenses, detects spending patterns, and provides AI-powered insights to improve savings and financial health.',
    image: '/finsight.png',
    tech: ['React', 'Next.js', 'FastAPI', 'Python', 'MongoDB', 'Razorpay', 'AI (Groq)'],
    gradient: 'from-orange-600 to-red-600',
    liveUrl: 'https://finsight-webapp.vercel.app/',
    githubUrl: 'https://github.com/SahilShaikh-7/FinSight'
  },
  {
    title: 'NeuroFlow — AI Powered Productivity & Workflow Assistant',
    description: 'An AI-driven productivity platform that helps users manage tasks, automate workflows, and enhance focus using intelligent insights, reminders, and real-time assistance.',
    image: '/neuroflow.png',
    tech: ['React', 'Next.js', 'Python', 'FastAPI', 'MongoDB', 'Rule-Based AI Assistant'],
    gradient: 'from-green-600 to-emerald-600',
    liveUrl: 'https://neuroflowhub.vercel.app/',
    githubUrl: 'https://github.com/SahilShaikh-7/NeuroHub'
  },
  {
    title: 'HirePilot - Interview Scheduling & Applicant Tracking System',
    description: 'Full-featured Applicant Tracking System with role-based access, real-time dashboards, and automated screening pipeline.',
    image: '/hirepilot-dashboard.jpeg',
    tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS'],
    gradient: 'from-orange-600 to-red-600',
    liveUrl: 'https://hirepilotbysahil.vercel.app/',
    githubUrl: 'https://github.com/SahilShaikh-7/hirepilotbysahil'
  },
  {
    title: 'SociStream - Social Media Content Scheduler',
    description: 'Multi-platform social media management tool with AI-powered content suggestions, automated posting schedules, engagement analytics, and team collaboration features for marketing teams.',
    image: '/Screenshot (96).png',
    tech: ['Next.js', 'OpenAI', 'MongoDB', 'Social APIs', 'Cron Jobs', 'Analytics'],
    gradient: 'from-teal-600 to-cyan-600',
    liveUrl: 'https://socistream.onrender.com/',
    githubUrl: 'https://github.com/SahilShaikh-7/SociStream'
  },
]

function ProjectCard({ project, index }: { project: ProjectCardProps; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="relative h-[480px] sm:h-[470px] md:h-[480px] cursor-pointer group/card select-none"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.02, y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: 'preserve-3d' as any }}
        className="w-full h-full relative"
      >
        {/* Glowing aura matches brand color */}
        <div className={`absolute -inset-1.5 rounded-[2rem] bg-gradient-to-br ${project.gradient} opacity-10 blur-xl group-hover/card:opacity-25 transition-all duration-500`} />

        {/* Front */}
        <motion.div
          className="absolute inset-0 rounded-3xl p-4 sm:p-5 bg-slate-950/40 backdrop-blur-xl border border-white/10 flex flex-col justify-between overflow-hidden"
          style={{ backfaceVisibility: 'hidden' as any }}
        >
          {/* Subtle brand color glow behind the content */}
          <div className={`absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br ${project.gradient} opacity-15 blur-3xl pointer-events-none`} />

          {/* Browser Window Showcase for Screenshot - Fixed responsive height */}
          <div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] rounded-2xl overflow-hidden border border-white/15 bg-slate-950/60 flex-shrink-0 group/browser">
            {/* Top Browser Bar Mockup */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-slate-900/90 border-b border-white/5 flex items-center px-3 gap-1.5 z-20">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              <span className="text-[9px] text-white/35 mx-auto font-mono truncate max-w-[150px] select-none uppercase tracking-wider">
                {project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.io
              </span>
            </div>

            {/* Showcase Image with top alignment and dynamic zoom */}
            <div className="absolute inset-0 pt-6 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/card:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Body Content */}
          <div className="relative z-10 flex flex-col flex-grow mt-3 sm:mt-4 justify-between">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 line-clamp-2 group-hover/card:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 mb-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Premium Card Footer with sliced tech tags & CTA indicator */}
            <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
              <div className="flex gap-1.5 items-center overflow-hidden flex-wrap max-h-[22px]">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 bg-white/5 border border-white/5 rounded-full text-[10px] text-gray-300 font-medium whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[9px] text-purple-400 font-semibold pl-0.5">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-purple-400 font-bold group-hover/card:text-purple-300 transition-colors">
                <span>Details</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute inset-0 rounded-3xl p-4 sm:p-5 bg-slate-950/90 backdrop-blur-xl border border-white/10 flex flex-col justify-between overflow-hidden"
          style={{
            backfaceVisibility: 'hidden' as any,
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Subtle brand color glow behind back card */}
          <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${project.gradient} opacity-15 blur-3xl pointer-events-none`} />

          <div className="relative z-10 flex flex-col h-full justify-between">
            {/* Header Area */}
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-purple-400 font-bold bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                  Project Overview
                </span>
                <span className="text-[9px] text-white/40 font-medium uppercase tracking-wider">
                  Click to flip back
                </span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 leading-snug">
                {project.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-4 sm:line-clamp-5">
                {project.description}
              </p>
            </div>

            {/* Bottom Tech & CTA Area */}
            <div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-purple-400 mb-2 font-bold select-none">
                Technologies
              </p>
              <div className="flex flex-wrap gap-1.5 max-h-[85px] sm:max-h-[105px] overflow-hidden mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[10px] sm:text-xs text-white/90 hover:bg-white/10 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Side-by-side CTA Buttons - responsive padding and dimensions */}
              <div className="flex gap-2.5 border-t border-white/5 pt-4" onClick={(e) => e.stopPropagation()}>
                <a
                  href={project.liveUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl hover:opacity-90 active:scale-95 transition-all font-bold text-xs sm:text-sm w-full justify-center shadow-lg shadow-purple-500/10"
                >
                  <ExternalLink size={14} className="flex-shrink-0" /> <span className="truncate">Live Demo</span>
                </a>
                <a
                  href={project.githubUrl || 'https://github.com/SahilShaikh-7'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 bg-white/5 text-white border border-white/10 rounded-xl hover:bg-white/10 active:scale-95 transition-all font-bold text-xs sm:text-sm w-full justify-center"
                >
                  <Github size={14} className="flex-shrink-0" /> <span className="truncate">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectCarousel() {
  return (
    <div className="relative py-8 px-2 md:px-4 select-none">
      <Swiper
        effect={'coverflow'}
        initialSlide={3}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{ el: '.custom-swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.custom-swiper-next',
          prevEl: '.custom-swiper-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="!w-[min(540px,90vw)] !h-auto py-4">
            <ProjectCard project={project} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Premium Glassmorphic Controls Section placed below Swiper */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button className="custom-swiper-prev p-2.5 rounded-full bg-slate-900/60 border border-white/10 text-white/60 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 active:scale-95 transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shadow-md shadow-black/25">
          <ChevronLeft size={18} />
        </button>
        {/* Animated Custom Bullet Indicators styling */}
        <div className="custom-swiper-pagination flex justify-center items-center gap-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:bg-white/30 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet-active]:!w-5 [&_.swiper-pagination-bullet-active]:!bg-gradient-to-r [&_.swiper-pagination-bullet-active]:from-purple-500 [&_.swiper-pagination-bullet-active]:to-cyan-500 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet]:cursor-pointer"></div>
        <button className="custom-swiper-next p-2.5 rounded-full bg-slate-900/60 border border-white/10 text-white/60 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 active:scale-95 transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shadow-md shadow-black/25">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

