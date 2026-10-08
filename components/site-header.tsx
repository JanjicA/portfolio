import { ArrowUpRight } from 'lucide-react'
import { navItems } from '@/lib/data'

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#0a0a0a]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="/#top" className="font-mono text-sm font-semibold tracking-tight text-white">
          AJ<span className="text-violet-400">.</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-xs text-zinc-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="/#contact"
          className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:border-violet-400/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        >
          Let&apos;s talk <ArrowUpRight className="ml-1 inline size-3" />
        </a>
      </nav>
    </header>
  )
}
