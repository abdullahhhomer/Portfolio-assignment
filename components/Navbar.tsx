'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

function LogoSVG() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="38" height="38" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <path d="M10 14L16 20L10 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 26H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d={open ? "M6 6L18 18M6 18L18 6" : "M3 6H21M3 12H16M3 18H21"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: 'all 0.3s ease' }}
      />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    
    handleResize()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(2, 4, 8, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 212, 255, 0.1)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <nav style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: isMobile ? '0 20px' : '0 40px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}>
        {/* Logo */}
        <a href="#home" style={{ 
          textDecoration: 'none', 
          color: 'var(--neon)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          filter: 'drop-shadow(0 0 10px rgba(0,212,255,0.6))',
        }}>
          <LogoSVG />
          {!isMobile && (
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
            }}>
              PORTFOLIO
            </span>
          )}
        </a>

        {/* Desktop Nav */}
        {!isMobile && (
          <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', alignItems: 'center' }}>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: activeSection === href.slice(1) ? 'var(--neon)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    position: 'relative',
                    paddingBottom: '4px',
                  }}
                >
                  {activeSection === href.slice(1) && (
                    <span style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
                      background: 'var(--neon)',
                      boxShadow: '0 0 8px var(--neon)',
                    }} />
                  )}
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <a href="#contact" className="btn-primary" style={{ fontSize: '0.65rem' }}>
            Hire Me
          </a>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              padding: '8px',
              color: 'var(--neon)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MenuIcon open={menuOpen} />
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && (
        <div style={{
          position: 'fixed', 
          top: scrolled ? '56px' : '64px', 
          left: 0, 
          right: 0,
          bottom: 0,
          background: 'rgba(2, 4, 8, 0.98)',
          backdropFilter: 'blur(20px)',
          padding: '32px 24px',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          {navLinks.map(({ label, href }, index) => (
            <a
              key={label} 
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 0',
                fontFamily: 'var(--font-display)', 
                fontSize: '1.1rem',
                fontWeight: 600,
                letterSpacing: '0.05em', 
                textTransform: 'uppercase',
                color: activeSection === href.slice(1) ? 'var(--neon)' : 'var(--text-primary)', 
                textDecoration: 'none',
                borderBottom: '1px solid rgba(0,212,255,0.1)',
                transition: 'all 0.3s ease',
                transitionDelay: menuOpen ? `${index * 0.05}s` : '0s',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
              }}
            >
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.7rem', 
                color: 'var(--neon)', 
                opacity: 0.5 
              }}>
                0{index + 1}
              </span>
              {label}
            </a>
          ))}
          
          <a 
            href="#contact" 
            onClick={() => setMenuOpen(false)}
            className="btn-primary" 
            style={{ 
              marginTop: '24px', 
              textAlign: 'center',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.3s ease 0.3s',
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}
