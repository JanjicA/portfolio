'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Check, ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Github, Linkedin } from '@/components/brand-icons'
import { SiteHeader } from '@/components/site-header'
import { education, interests, languages, personalProjects, profile, skills, stats, work, type Project } from '@/lib/data'

const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }

function ProjectCard({ project, index, label }: { project: Project; index: number; label: string }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      key={project.slug}
      className="project-card group"
    >
      <Link href={`/projects/${project.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">
        <div className={`project-art ${project.accent}`}>
          <span className="font-mono text-xs text-white/50">
            0{index + 1} / {label}
          </span>
          <div className="art-orbit" />
          <ArrowUpRight className="absolute right-5 top-5 size-5 text-white/50 transition group-hover:text-white" />
        </div>
        <div className="p-6">
          {project.kind === 'work' && (
            <p className="font-mono text-xs text-zinc-500">
              {project.role} · {project.dates}
            </p>
          )}
          <h3 className="mt-2 text-xl font-medium tracking-tight text-white">{project.title}</h3>
          <p className="mt-3 min-h-14 text-sm leading-6 text-zinc-400">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-zinc-200">
            Read the project <ExternalLink className="ml-1 inline size-3" />
          </p>
        </div>
      </Link>
    </motion.article>
  )
}

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{title}</h2>
      </div>
      {children}
    </div>
  )
}

export function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [formError, setFormError] = useState('')

  return (
    <div className="min-h-screen overflow-hidden bg-[#0a0a0a] text-zinc-100">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <SiteHeader />

      <main id="top">
        <section className="hero-grid relative mx-auto flex min-h-[760px] max-w-6xl items-center px-5 pb-20 pt-32 lg:px-8">
          <div className="hero-glow" aria-hidden="true" />
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="relative max-w-4xl">
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mb-8 flex items-center gap-3 font-mono text-xs text-zinc-500">
              <span className="size-2 rounded-full bg-violet-400 shadow-[0_0_14px_#a78bfa]" /> Open to new roles{' '}
              <span className="text-zinc-700">/</span> {profile.location}
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-0.07em] text-white sm:text-7xl lg:text-[5.6rem]"
            >
              Back-end systems that <span className="gradient-text">hold up</span> in production.
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.7 }} className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
              {profile.intro}
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="gradient-button rounded-full px-5 py-3 text-sm font-semibold text-white">
                View work <ArrowDownRight className="ml-2 inline size-4" />
              </a>
              <a href="/cv.pdf" download className="rounded-full border border-white/45 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/70 hover:bg-white/15">
                Download CV
              </a>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="mt-12 flex gap-5">
              <a
                aria-label="Email"
                href={profile.socials.email}
                className="text-zinc-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <Mail className="size-5" />
              </a>
              <a
                aria-label="Phone"
                href={profile.phoneHref}
                className="text-zinc-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <Phone className="size-5" />
              </a>
              <a
                aria-label="LinkedIn"
                href={profile.socials.linkedin}
                className="text-zinc-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                aria-label="Github"
                href={profile.socials.github}
                className="text-zinc-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <Github className="size-5" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="section-shell">
          <SectionHeading eyebrow="01 / About" title="Back-end work, stated plainly." />
          <div className="grid gap-12 md:grid-cols-[1.1fr_.9fr] md:gap-20">
            <div className="max-w-xl">
              <p className="text-lg leading-8 text-zinc-400">{profile.bio}</p>
              <p className="mt-6 text-sm leading-7 text-zinc-500">
                {profile.role}. {languages.map((language) => `${language.name} (${language.level.toLowerCase()})`).join(' · ')}. Interests include {interests.join(', ').toLowerCase()}.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-violet-400/40 pl-4">
                  <p className="text-3xl font-semibold tracking-[-0.05em] text-white">{stat.value}</p>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell border-t border-white/[0.07]">
          <SectionHeading eyebrow="02 / Skills" title="What I work with." />
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <motion.div whileHover={{ y: -4 }} key={group} className="glass-card p-6">
                <p className="mb-6 font-mono text-xs text-violet-300">{group}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell border-t border-white/[0.07]">
          <SectionHeading eyebrow="03 / Projects" title="Products I've worked on." />
          <div>
            {personalProjects.map((project, index) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="project-row group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">
                <span className="project-row-index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-white transition-colors">{project.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="mt-1 size-4 text-zinc-500 transition group-hover:text-white" />
              </Link>
            ))}
          </div>
        </section>

        <section id="work" className="section-shell border-t border-white/[0.07]">
          <SectionHeading eyebrow="04 / Selected work" title="The roles, in more detail." />
          <div className="grid gap-5 md:grid-cols-2">
            {work.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} label={project.company ?? 'Work'} />
            ))}
          </div>

          <div className="mt-16 max-w-3xl border-t border-white/[0.07] pt-10">
            <p className="eyebrow">Education</p>
            <div className="mt-6 flex flex-col gap-8">
              {education.map((item) => (
                <div key={item.school} className="grid gap-3 sm:grid-cols-[170px_1fr]">
                  <p className="font-mono text-xs text-zinc-500">{item.dates}</p>
                  <div>
                    <h3 className="text-lg font-medium text-white">{item.degree}</h3>
                    <p className="mt-1 text-sm text-violet-300">
                      {item.school}
                      <span className="text-zinc-600"> · {item.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell border-t border-white/[0.07]">
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="eyebrow">05 / Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">Let&apos;s talk about the work.</h2>
              <p className="mt-6 max-w-md leading-7 text-zinc-400">
                I&apos;m looking to bring a back-end background — services, databases, tests, and AI integrations — to a team that ships real products.
              </p>
              <div className="mt-8 flex flex-col gap-3 text-sm">
                <a href={profile.socials.email} className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-200">
                  {profile.email} <ArrowUpRight className="size-4" />
                </a>
                <a href={profile.phoneHref} className="inline-flex items-center gap-2 text-zinc-300 hover:text-white">
                  {profile.phone}
                </a>
                <a href={profile.socials.linkedin} className="inline-flex items-center gap-2 text-zinc-400 hover:text-white">
                  LinkedIn <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
            <form
              onSubmit={async (event) => {
                event.preventDefault()
                const form = event.currentTarget
                const data = new FormData(form)
                setStatus('sending')
                setFormError('')
                try {
                  const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      name: data.get('name'),
                      email: data.get('email'),
                      message: data.get('message'),
                    }),
                  })
                  if (!response.ok) {
                    const payload = (await response.json().catch(() => null)) as { error?: string } | null
                    throw new Error(payload?.error || 'Could not send the message.')
                  }
                  form.reset()
                  setStatus('sent')
                } catch (error) {
                  setStatus('error')
                  setFormError(error instanceof Error ? error.message : 'Could not send the message.')
                }
              }}
              className="glass-card flex flex-col gap-5 p-6 sm:p-8"
            >
              <label className="field-label">
                Name
                <input required name="name" className="field-input" placeholder="Your name" />
              </label>
              <label className="field-label">
                Email
                <input required type="email" name="email" className="field-input" placeholder="you@company.com" />
              </label>
              <label className="field-label">
                Message
                <textarea required name="message" className="field-input min-h-32 resize-y" placeholder="Tell me a little about the role or the project..." />
              </label>
              <button className="gradient-button rounded-full px-5 py-3 text-sm font-medium text-white disabled:opacity-60" type="submit" disabled={status === 'sending'}>
                {status === 'sent' ? (
                  <>
                    <Check className="mr-2 inline size-4" /> Message sent
                  </>
                ) : status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="mr-2 inline size-4" /> Send message
                  </>
                )}
              </button>
              {formError ? <p className="text-sm text-red-300">{formError}</p> : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-5 border-t border-white/[0.07] px-5 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Belgrade.
        </p>
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2">
            <MapPin className="size-3" /> {profile.location}
          </span>
          <a href={profile.socials.linkedin} className="hover:text-zinc-300">
            LinkedIn
          </a>
          <a href={profile.socials.email} className="hover:text-zinc-300">
            Email
          </a>
        </div>
      </footer>
    </div>
  )
}
