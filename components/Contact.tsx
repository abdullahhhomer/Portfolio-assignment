'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M22 6L12 13L2 6"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

const contactInfo: { icon: ReactNode; label: string; value: string; href: string | null }[] = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'abdullahhhomer@gmail.com',
    href: 'mailto:abdullahhhomer@gmail.com',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/Abdullahomer',
    href: 'https://www.linkedin.com/in/abdullah-omer-84b991181/',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: 'github.com/abdullahhhomer',
    href: 'https://github.com/abdullahhhomer',
  },
  {
    icon: <LocationIcon />,
    label: 'Location',
    value: 'Islamabad, Pakistan',
    href: null,
  },
]

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async () => {
    if (!formState.name || !formState.email || !formState.message) return
    setSending(true)
    // EDIT: Connect this to your preferred email service (Formspree, EmailJS, Resend, etc.)
    // Example with Formspree: 
    // await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(formState) })
    await new Promise(r => setTimeout(r, 1500)) // Remove this line when connecting real service
    setSending(false)
    setSent(true)
  }

  const services = ['Web Development', 'Digital Marketing', 'UI/UX Design', 'SEO', 'Analytics', 'Tech Consulting', 'Other']

  return (
    <section id="contact" style={{ padding: '120px 0', background: 'var(--bg-900)', position: 'relative' }} className="grid-bg">
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--neon), transparent)',
        opacity: 0.3,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }} ref={ref}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '80px',
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s ease',
        }}>
          <span className="tag">07 — Contact</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(0,212,255,0.15)' }} />
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr',
          gap: '80px', alignItems: 'start',
        }} className="contact-grid">
          {/* Left: Info */}
          <div style={{
            transform: visible ? 'translateX(0)' : 'translateX(-30px)',
            opacity: visible ? 1 : 0,
            transition: 'all 0.8s ease 0.2s',
          }}>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>
              Let&apos;s Build<br />Something<br />
              <span className="neon-text">Remarkable</span>
            </h2>
            <p style={{
              color: 'var(--text-secondary)', lineHeight: 1.8,
              fontSize: '0.95rem', marginBottom: '48px',
            }}>
              Whether you have a project in mind, want to explore how I can help your business grow, 
              or just want to say hello — my inbox is always open.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              {contactInfo.map(({ icon, label, value, href }) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: '20px',
                  padding: '16px 20px',
                  border: '1px solid rgba(0,212,255,0.1)',
                  background: 'rgba(10, 22, 40, 0.4)',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,212,255,0.4)'
                    ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(0,212,255,0.05)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,212,255,0.1)'
                    ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(10,22,40,0.4)'
                  }}
                >
                  <span style={{
                    width: '40px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--neon)', 
                    flexShrink: 0,
                  }}>
                    {icon}
                  </span>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                      letterSpacing: '0.2em', color: 'rgba(0,212,255,0.6)',
                      textTransform: 'uppercase', marginBottom: '2px',
                    }}>
                      {label}
                    </div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" style={{
                        fontSize: '0.9rem', color: 'var(--text-primary)',
                        textDecoration: 'none', transition: 'color 0.2s',
                      }}
                        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--neon)'}
                        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)'}
                      >
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability banner */}
            <div style={{
              padding: '20px 24px',
              background: 'rgba(0, 255, 136, 0.05)',
              border: '1px solid rgba(0, 255, 136, 0.2)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#00FF88',
                  boxShadow: '0 0 8px #00FF88',
                  animation: 'pulseNeon 2s ease-in-out infinite',
                }} />
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                  letterSpacing: '0.15em', color: '#00FF88',
                }}>
                  AVAILABLE FOR FREELANCE & FULL-TIME ROLES
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            transform: visible ? 'translateX(0)' : 'translateX(30px)',
            opacity: visible ? 1 : 0,
            transition: 'all 0.8s ease 0.4s',
          }}>
            {sent ? (
              <div style={{
                padding: '80px 40px', textAlign: 'center',
                border: '1px solid rgba(0,255,136,0.3)',
                background: 'rgba(0,255,136,0.05)',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '24px' }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '16px', color: '#00FF88' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Thanks for reaching out. I&apos;ll review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setFormState({ name: '', email: '', service: '', message: '' }) }}
                  className="btn-primary"
                  style={{ marginTop: '32px' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div style={{
                padding: '48px 40px',
                border: '1px solid rgba(0,212,255,0.15)',
                background: 'rgba(6, 13, 20, 0.8)',
                backdropFilter: 'blur(20px)',
              }}>
                <div className="tag" style={{ marginBottom: '32px' }}>Send a Message</div>

                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  {[
                    { label: 'Your Name', key: 'name', type: 'text', placeholder: 'John Doe' },
                    { label: 'Email Address', key: 'email', type: 'email', placeholder: 'john@company.com' },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key}>
                      <label style={{
                        display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                        letterSpacing: '0.2em', color: 'rgba(0,212,255,0.6)',
                        textTransform: 'uppercase', marginBottom: '8px',
                      }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={formState[key as keyof typeof formState]}
                        onChange={e => setFormState({ ...formState, [key]: e.target.value })}
                        style={{
                          width: '100%', padding: '12px 16px',
                          background: 'rgba(0,212,255,0.03)',
                          border: '1px solid rgba(0,212,255,0.15)',
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                          outline: 'none', transition: 'border-color 0.3s',
                        }}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(0,212,255,0.6)'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(0,212,255,0.15)'}
                      />
                    </div>
                  ))}
                </div>

                {/* Service select */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{
                    display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                    letterSpacing: '0.2em', color: 'rgba(0,212,255,0.6)',
                    textTransform: 'uppercase', marginBottom: '8px',
                  }}>
                    Service Needed
                  </label>
                  <select
                    value={formState.service}
                    onChange={e => setFormState({ ...formState, service: e.target.value })}
                    style={{
                      width: '100%', padding: '12px 16px',
                      background: 'rgba(6, 13, 20, 0.9)',
                      border: '1px solid rgba(0,212,255,0.15)',
                      color: formState.service ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                      outline: 'none', cursor: 'pointer',
                    }}
                    onFocus={e => (e.target as HTMLSelectElement).style.borderColor = 'rgba(0,212,255,0.6)'}
                    onBlur={e => (e.target as HTMLSelectElement).style.borderColor = 'rgba(0,212,255,0.15)'}
                  >
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '32px' }}>
                  <label style={{
                    display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                    letterSpacing: '0.2em', color: 'rgba(0,212,255,0.6)',
                    textTransform: 'uppercase', marginBottom: '8px',
                  }}>
                    Your Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project, goals, and timeline..."
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    style={{
                      width: '100%', padding: '14px 16px',
                      background: 'rgba(0,212,255,0.03)',
                      border: '1px solid rgba(0,212,255,0.15)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                      outline: 'none', resize: 'vertical',
                      lineHeight: 1.6, transition: 'border-color 0.3s',
                    }}
                    onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(0,212,255,0.6)'}
                    onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(0,212,255,0.15)'}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={sending}
                  className="btn-primary"
                  style={{ width: '100%', opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? 'Sending...' : 'Send Message →'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
