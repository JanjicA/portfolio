import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aleksandar Janjic — Back-End Developer',
  description: 'Portfolio of Aleksandar Janjic, a back-end developer in Belgrade with experience in web applications, databases, testing, and AI integrations.',
  generator: 'Next.js',
  keywords: ['Aleksandar Janjic', 'Back-End Developer', 'Node.js', 'NestJS', 'PostgreSQL', 'Belgrade'],
  openGraph: { title: 'Aleksandar Janjic — Back-End Developer', description: 'Back-end systems, databases, tests, and AI integrations.', type: 'website', locale: 'en_US' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#0a0a0a', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
