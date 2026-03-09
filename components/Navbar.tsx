'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '16px 0' : '28px 0',
        background: scrolled ? 'rgba(2, 4, 8, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 212, 255, 0.1)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            fontWeight: 900,
            letterSpacing: '0.1em',
            color: 'var(--neon)',
            textShadow: '0 0 20px rgba(0,212,255,0.8)',
          }}>
            {'<YN />'}
          </span>
        </a>

        {/* Desktop Nav */}
        <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', alignItems: 'center' }}
          className="hidden md:flex">
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

        {/* CTA */}
        <a href="#contact" className="hidden md:block btn-primary" style={{ fontSize: '0.65rem' }}>
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
        >
          <div style={{ width: '24px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', height: '1.5px',
                background: 'var(--neon)',
                width: i === 1 ? '16px' : '24px',
                transition: 'all 0.3s',
              }} />
            ))}
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(6, 13, 20, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,212,255,0.2)',
          padding: '24px 40px',
        }}>
          {navLinks.map(({ label, href }) => (
            <a
              key={label} href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '12px 0',
                fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--text-secondary)', textDecoration: 'none',
                borderBottom: '1px solid rgba(0,212,255,0.07)',
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
