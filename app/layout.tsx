import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdullah Omer — Digital Tech Solutions',
  description: 'Full-stack developer & digital marketing specialist crafting scalable tech solutions for modern businesses.',
  keywords: ['web developer', 'digital marketing', 'tech solutions', 'portfolio'],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Abdullah Omer — Digital Tech Solutions',
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
