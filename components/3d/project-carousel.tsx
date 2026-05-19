'use client'

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
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
      className="relative h-[420px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' as any }}
        className="w-full h-full"
      >
        {/* Front */}
        <motion.div
          className={`absolute inset-0 rounded-3xl p-8 bg-gradient-to-br ${project.gradient} shadow-2xl backdrop-blur-md border border-white/20 flex flex-col justify-end`}
          style={{ backfaceVisibility: 'hidden' as any }}
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white/90 text-sm line-clamp-2">{project.description}</p>
          </div>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute inset-0 rounded-3xl p-8 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl backdrop-blur-md border border-white/20 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden' as any,
            transform: 'rotateY(180deg)',
          }}
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-6">{project.description}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-purple-400 mb-3 font-semibold">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-600/50 border border-purple-400/50 rounded-full text-xs text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 mt-8" onClick={(e) => e.stopPropagation()}>
              <a
                href={project.liveUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-sm w-full justify-center"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
              <a
                href={project.githubUrl || 'https://github.com/SahilShaikh-7'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors font-medium text-sm w-full justify-center"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectCarousel() {
  return (
    <div className="relative py-12">
      <Swiper
        effect={'coverflow'}
        initialSlide={3}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="!w-[min(600px,90vw)] !h-auto">
            <ProjectCard project={project} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination mt-8 flex justify-center gap-2"></div>
      <div className="swiper-button-prev text-purple-400 hover:text-purple-600"></div>
      <div className="swiper-button-next text-purple-400 hover:text-purple-600"></div>
    </div>
  )
}
