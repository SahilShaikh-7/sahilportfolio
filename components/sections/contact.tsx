'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const resumeLink = 'https://drive.google.com/file/d/1SdOdgYupHXqp0RKGJBqF8gzZbhunu2zN/view?usp=sharing'
const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/SahilShaikh-7', color: 'hover:text-foreground' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/sahil-shaikh77', color: 'hover:text-primary' },
  { name: 'Email', icon: Mail, href: 'mailto:sms.sahil6868@gmail.com', color: 'hover:text-secondary' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '8a70b2fe-1065-4405-9bfc-3e9a7002c5c8',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message || 'Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-container">
      <div className="section-content">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">// GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-card border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-card border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="bg-card border-border/50 focus:border-primary resize-none"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold rounded-full py-3 group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⌛</span>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </span>
                  )}
                </Button>
              </motion.div>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-sm text-center font-medium"
                >
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm text-center font-medium"
                >
                  ✗ Error sending message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="glass p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Let&apos;s Talk</h3>
              <p className="text-foreground/70 mb-6">
                Whether you have a project idea, a job opportunity, or just want to chat about
                technology and development, feel free to reach out. I&apos;m always interested in
                discussing new opportunities and ideas.
              </p>
              <p className="text-foreground/70">
                <span className="font-semibold text-foreground">Response Time:</span> Within 24 hours
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold">Connect With Me</h3>
              <div className="flex gap-3">
                {socialLinks.map(social => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-full glass border border-white/10 text-foreground transition-colors ${social.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-white/10">
              <h3 className="text-lg font-bold mb-4">Resume</h3>
              <p className="text-foreground/70 mb-6">
                Download the latest version of my resume for an overview of my skills, experience, and recent projects.
              </p>
              <motion.a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="inline-flex w-full items-center justify-center rounded-full bg-primary text-white px-5 py-3 font-semibold shadow-lg shadow-primary/20 hover:opacity-90 transition-all"
              >
                View Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
