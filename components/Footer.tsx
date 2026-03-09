'use client'

import { ReactNode } from 'react'

function LogoSVG() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="38" height="38" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <path d="M10 14L16 20L10 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 26H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M22 6L12 13L2 6"/>
    </svg>
  )
}

const socialLinks: { icon: ReactNode; label: string; href: string }[] = [
  { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/abdullahhhomer' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdullah-omer-84b991181/' },
  { icon: <EmailIcon />, label: 'Email', href: 'mailto:abdullahhhomer@gmail.com' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      padding: '40px 0', background: 'var(--bg-900)',
      borderTop: '1px solid rgba(0,212,255,0.1)',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '24px',
      }}>
        <a href="#home" style={{ 
          color: 'var(--neon)', 
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          filter: 'drop-shadow(0 0 8px rgba(0,212,255,0.5))',
        }}>
          <LogoSVG />
        </a>

        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          letterSpacing: '0.1em', color: 'rgba(0,212,255,0.3)',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}>
          © {year} Abdullah Omer. All rights reserved.
        </span>

        <div style={{ display: 'flex', gap: '16px' }}>
          {socialLinks.map(({ icon, label, href }) => (
            <a key={label} href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                color: 'rgba(0,212,255,0.5)', 
                textDecoration: 'none',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                border: '1px solid rgba(0,212,255,0.2)',
                borderRadius: '4px',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--neon)'
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--neon)'
                ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,212,255,0.1)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(0,212,255,0.5)'
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,212,255,0.2)'
                ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
