import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Your Name — Digital Tech Solutions',
  description: 'Full-stack developer & digital marketing specialist crafting scalable tech solutions for modern businesses.',
  keywords: ['web developer', 'digital marketing', 'tech solutions', 'portfolio'],
  openGraph: {
    title: 'Your Name — Digital Tech Solutions',
    description: 'Full-stack developer & digital marketing specialist',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise">
        {children}
      </body>
    </html>
  )
}
