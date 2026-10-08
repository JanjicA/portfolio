'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { Github, Linkedin } from '@/components/brand-icons'
import { SiteHeader } from '@/components/site-header'
import { profile, projects, type Project } from '@/lib/data'

const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }

export function ProjectDetail({ project }: { project: Project }) {
  const others = projects.filter((item) => item.kind === project.kind && item.slug !== project.slug)
  const facts =
    project.kind === 'personal'
      ? [['Stack', project.tags.join(' · ')]]
      : [
          ['Company', project.company ?? ''],
          ['When', project.dates ?? ''],
          ['Where', project.location ?? ''],
        ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 pb-24 pt-28 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="eyebrow">
            {project.kind === 'personal' ? 'Project' : `${project.role} / ${project.company}`}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl"
          >
            {project.title}
          </motion.h1>
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {project.summary}
          </motion.p>
          <motion.dl
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-10 grid gap-6 border-y border-white/[0.07] py-6 sm:grid-cols-3"
          >
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">{label}</dt>
                <dd className="mt-2 text-sm text-white">{value}</dd>
              </div>
            ))}
          </motion.dl>
          {project.github && (
            <motion.a
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              href={project.github}
              className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-200 hover:text-white"
            >
              <Github className="size-4" /> GitHub <ArrowUpRight className="size-3.5" />
            </motion.a>
          )}
        </motion.div>

        <div className={project.kind === 'personal' ? 'mt-16 flex flex-col' : 'mt-16 flex flex-col gap-6'}>
          {project.highlights.map((highlight, index) =>
            project.kind === 'personal' ? (
              <motion.article
                key={highlight.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="grid gap-3 border-t border-white/[0.08] py-8 sm:grid-cols-[180px_1fr] sm:gap-10"
              >
                <p className="font-mono text-xs text-zinc-500">{String(index + 1).padStart(2, '0')} / {highlight.title}</p>
                <p className="max-w-2xl text-sm leading-7 text-zinc-300">{highlight.body}</p>
              </motion.article>
            ) : (
              <motion.article
                key={highlight.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="glass-card grid gap-6 p-6 sm:p-8 md:grid-cols-[180px_1fr] md:gap-10"
              >
                <p className="font-mono text-xs text-violet-300">0{index + 1}</p>
                <div>
                  <h2 className="text-xl font-medium tracking-tight text-white">{highlight.title}</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">{highlight.body}</p>
                </div>
              </motion.article>
            ),
          )}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <section className="mt-8 border-t border-white/[0.07] pt-14">
          <p className="eyebrow">{project.kind === 'personal' ? 'More projects' : 'More work'}</p>
          <div className={project.kind === 'personal' ? 'mt-6' : 'mt-6 grid gap-4 md:grid-cols-2'}>
            {others.map((item, index) =>
              item.kind === 'personal' ? (
                <Link key={item.slug} href={`/projects/${item.slug}`} className="project-row group">
                  <span className="project-row-index">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h2 className="text-lg font-medium text-white transition-colors">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{item.summary}</p>
                  </div>
                  <ArrowUpRight className="mt-1 size-4 text-zinc-500 transition group-hover:text-white" />
                </Link>
              ) : (
                <Link key={item.slug} href={`/projects/${item.slug}`} className="project-card group block p-6">
                  <p className="font-mono text-xs text-zinc-500">
                    {item.company} / {item.dates}
                  </p>
                  <h2 className="mt-3 flex items-center justify-between gap-4 text-lg font-medium text-white">
                    {item.title}
                    <ArrowUpRight className="size-4 shrink-0 text-zinc-500 transition group-hover:text-white" />
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{item.summary}</p>
                </Link>
              ),
            )}
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-5 border-t border-white/[0.07] px-5 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2">
            <MapPin className="size-3" /> {profile.location}
          </span>
          <a href={profile.socials.linkedin} className="inline-flex items-center gap-1.5 hover:text-zinc-300">
            <Linkedin className="size-3" /> LinkedIn
          </a>
          <a href={profile.socials.email} className="inline-flex items-center gap-1.5 hover:text-zinc-300">
            <Mail className="size-3" /> Email
          </a>
        </div>
      </footer>
    </div>
  )
}
