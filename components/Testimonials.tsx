'use client'

import { useEffect, useRef, useState } from 'react'

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill={filled ? "currentColor" : "none"} 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

function QuoteIcon() {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ opacity: 0.3 }}
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/>
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
    </svg>
  )
}

function UserIcon() {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  )
}

function VerifiedIcon() {
  return (
    <svg 
      width="14" 
      height="14" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  )
}

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO, TechStart Inc.',
    avatar: null,
    rating: 5,
    text: 'Abdullah transformed our outdated website into a modern, high-converting platform. Our leads increased by 150% within the first month. Exceptional work and communication throughout the project!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director, GrowthHub',
    avatar: null,
    rating: 5,
    text: 'The SEO strategy Abdullah implemented took us from page 5 to page 1 on Google in just 3 months. His data-driven approach and attention to detail are unmatched. Highly recommend!',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, CreativeFlow Agency',
    avatar: null,
    rating: 5,
    text: 'Working with Abdullah was a game-changer for our agency. He delivered a stunning portfolio site that perfectly captures our brand. The animations and UI/UX are absolutely beautiful.',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'CTO, DataVerse Solutions',
    avatar: null,
    rating: 5,
    text: 'Abdullah built our entire analytics dashboard from scratch. Clean code, excellent documentation, and delivered ahead of schedule. He is now our go-to developer for all projects.',
  },
  {
    id: 5,
    name: 'Jessica Park',
    role: 'E-commerce Manager, StyleNest',
    avatar: null,
    rating: 5,
    text: 'Our online store conversion rate doubled after Abdullah optimized our checkout flow and implemented his marketing strategies. Professional, responsive, and truly understands business needs.',
  },
  {
    id: 6,
    name: 'Ahmed Hassan',
    role: 'Director, GlobalTech Solutions',
    avatar: null,
    rating: 5,
    text: 'Exceptional technical skills combined with a deep understanding of digital marketing. Abdullah delivered a complete digital transformation for our company. Worth every penny!',
  },
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div
      style={{
        minWidth: '350px',
        maxWidth: '400px',
        padding: '32px',
        background: 'rgba(10, 22, 40, 0.6)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0,212,255,0.15)',
        borderRadius: '8px',
        position: 'relative',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Quote icon */}
      <div style={{ position: 'absolute', top: '20px', right: '20px', color: 'var(--neon)' }}>
        <QuoteIcon />
      </div>

      {/* Stars */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', color: '#FFD700' }}>
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < testimonial.rating} />
        ))}
      </div>

      {/* Text */}
      <p style={{
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        marginBottom: '24px',
        minHeight: '100px',
      }}>
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,212,255,0.05))',
          border: '1px solid rgba(0,212,255,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--neon)',
        }}>
          <UserIcon />
        </div>
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px',
            fontFamily: 'var(--font-display)', 
            fontSize: '0.9rem', 
            fontWeight: 600,
            color: 'var(--text-primary)',
          }}>
            {testimonial.name}
            <span style={{ color: '#00FF88' }}>
              <VerifiedIcon />
            </span>
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-secondary)',
            marginTop: '2px',
          }}>
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [visible, setVisible] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const speed = 0.5

    const animate = () => {
      if (!isPaused) {
        scrollPosition += speed
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  return (
    <section 
      id="testimonials" 
      style={{ 
        padding: '120px 0', 
        background: 'var(--bg-800)', 
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top border accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--neon), transparent)',
        opacity: 0.3,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }} ref={ref}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px',
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s ease',
        }}>
          <span className="tag">06 — Testimonials</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(0,212,255,0.15)' }} />
        </div>

        <div style={{
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr',
          gap: '24px', 
          marginBottom: '60px', 
          alignItems: 'end',
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s ease 0.1s',
        }} className="testimonials-header">
          <h2 className="section-title">
            What Clients<br />
            Say About<br />
            <span className="neon-text">My Work</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8 }}>
            Don&apos;t just take my word for it. Here&apos;s what my clients have to say 
            about working together and the results we&apos;ve achieved.
          </p>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex',
          gap: '48px',
          justifyContent: 'center',
          marginBottom: '48px',
          flexWrap: 'wrap',
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s ease 0.2s',
        }}>
          {[
            { value: '50+', label: 'Happy Clients' },
            { value: '4.9', label: 'Average Rating' },
            { value: '100%', label: 'Would Recommend' },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--neon)',
                textShadow: '0 0 20px rgba(0,212,255,0.4)',
              }}>
                {value}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                marginTop: '4px',
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling testimonials */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          display: 'flex',
          gap: '24px',
          overflow: 'hidden',
          padding: '20px 0',
          cursor: 'grab',
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s ease 0.3s',
        }}
      >
        {/* Duplicate testimonials for infinite scroll effect */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </div>

      {/* Gradient overlays for fade effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '100px',
        background: 'linear-gradient(90deg, var(--bg-800), transparent)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: '100px',
        background: 'linear-gradient(270deg, var(--bg-800), transparent)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <style jsx>{`
        @media (max-width: 768px) {
          .testimonials-header {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
