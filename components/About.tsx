'use client'

import { useEffect, useRef, useState } from 'react'

const skills = [
  { category: 'Development', items: ['React / Next.js', 'Node.js', 'TypeScript', 'Python', 'REST APIs', 'SQL / NoSQL'] },
  { category: 'Digital Marketing', items: ['SEO / SEM', 'Google Analytics', 'Meta Ads', 'Email Marketing', 'Content Strategy', 'CRO'] },
  { category: 'Design & Tools', items: ['Figma / UI/UX', 'Tailwind CSS', 'Framer Motion', 'Git / GitHub', 'Vercel / AWS', 'Docker'] },
]

const strengths = [
  { icon: '◇', title: 'Fast Delivery', desc: 'Agile workflow with transparent communication and on-time delivery.' },
  { icon: '◈', title: 'Results-Driven', desc: 'Every solution is measured against real business KPIs and outcomes.' },
  { icon: '◆', title: 'Reliable & Secure', desc: 'Security-first approach with clean, maintainable code architecture.' },
  { icon: '◉', title: 'Scalable Solutions', desc: 'Built to grow — your digital infrastructure scales with your business.' },
]

function SkillBar({ skill, delay }: { skill: string; delay: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setWidth(100), delay) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} style={{ marginBottom: '10px' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
        color: 'var(--text-secondary)', marginBottom: '4px',
      }}>
        <span>{skill}</span>
      </div>
      <div style={{
        height: '2px', background: 'rgba(0,212,255,0.1)',
        borderRadius: '2px', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', background: 'linear-gradient(90deg, var(--neon), rgba(0,212,255,0.3))',
          width: width ? '85%' : '0%',
          transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '0 0 8px var(--neon)',
        }} />
      </div>
    </div>
  )
}

export default function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" style={{ padding: '120px 0', background: 'var(--bg-800)', position: 'relative' }}>
      {/* Top border accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--neon), transparent)',
        opacity: 0.3,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }} ref={ref}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '80px',
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s ease',
        }}>
          <span className="tag">02 — About</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(0,212,255,0.15)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
          className="about-grid">

          {/* Left: Bio */}
          <div style={{
            transform: visible ? 'translateX(0)' : 'translateX(-30px)',
            opacity: visible ? 1 : 0,
            transition: 'all 0.8s ease 0.2s',
          }}>
            <h2 className="section-title" style={{ marginBottom: '32px' }}>
              Crafting Digital<br />
              <span className="neon-text">Experiences</span> That<br />
              Drive Growth
            </h2>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px', fontSize: '1rem' }}>
              {/* EDIT: Replace [Your Name] and [Your City] with your info */}
              Hi, I&apos;m Abdullah Omer - a passionate tech solutions provider based in Islamabad , Pakitsan. 
              With a strong foundation in web development and digital marketing, I help businesses 
              establish a powerful online presence that converts visitors into loyal customers.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '40px', fontSize: '1rem' }}>
              I combine technical expertise with strategic marketing insights to deliver 
              solutions that are not only visually stunning but also measurably effective.
              My approach is data-driven, creative, and always aligned with your business goals.
            </p>

            {/* Key strengths */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {strengths.map(({ icon, title, desc }) => (
                <div key={title}
                  className="glass"
                  style={{
                    padding: '20px', borderRadius: '4px',
                    transition: 'all 0.3s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,212,255,0.5)'
                    ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
                    ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                  }}
                >
                  <span style={{ fontSize: '1.2rem', display: 'block', marginBottom: '8px', color: 'var(--neon)', textShadow: '0 0 10px rgba(0,212,255,0.4)' }}>{icon}</span>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '6px', letterSpacing: '0.05em' }}>{title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div style={{
            transform: visible ? 'translateX(0)' : 'translateX(30px)',
            opacity: visible ? 1 : 0,
            transition: 'all 0.8s ease 0.4s',
          }}>
            {/* Terminal/Code Style Card */}
            <div style={{
              width: '100%', marginBottom: '48px',
              background: 'var(--bg-700)', border: '1px solid var(--border)',
              position: 'relative', overflow: 'hidden',
              borderRadius: '4px',
            }}>
              {/* Terminal header */}
              <div style={{
                padding: '12px 16px',
                background: 'rgba(0,212,255,0.05)',
                borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,95,86,0.8)' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,189,46,0.8)' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(39,201,63,0.8)' }} />
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-secondary)', marginLeft: '8px' }}>
                  about.json
                </span>
              </div>
              {/* Code content */}
              <div style={{ padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', lineHeight: 1.8 }}>
                <div><span style={{ color: 'var(--text-secondary)' }}>{'{'}</span></div>
                <div style={{ paddingLeft: '16px' }}>
                  <span style={{ color: 'rgba(0,212,255,0.7)' }}>&quot;role&quot;</span>
                  <span style={{ color: 'var(--text-secondary)' }}>: </span>
                  <span style={{ color: '#a5d6a7' }}>&quot;Full-Stack Developer&quot;</span>
                  <span style={{ color: 'var(--text-secondary)' }}>,</span>
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  <span style={{ color: 'rgba(0,212,255,0.7)' }}>&quot;focus&quot;</span>
                  <span style={{ color: 'var(--text-secondary)' }}>: </span>
                  <span style={{ color: '#a5d6a7' }}>&quot;Web & Digital Marketing&quot;</span>
                  <span style={{ color: 'var(--text-secondary)' }}>,</span>
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  <span style={{ color: 'rgba(0,212,255,0.7)' }}>&quot;status&quot;</span>
                  <span style={{ color: 'var(--text-secondary)' }}>: </span>
                  <span style={{ color: '#a5d6a7' }}>&quot;Available for work&quot;</span>
                  <span style={{ color: 'var(--text-secondary)' }}>,</span>
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  <span style={{ color: 'rgba(0,212,255,0.7)' }}>&quot;passion&quot;</span>
                  <span style={{ color: 'var(--text-secondary)' }}>: </span>
                  <span style={{ color: '#a5d6a7' }}>&quot;Building impactful solutions&quot;</span>
                </div>
                <div><span style={{ color: 'var(--text-secondary)' }}>{'}'}</span></div>
              </div>
            </div>

            {/* Skills */}
            {skills.map(({ category, items }, catIdx) => (
              <div key={category} style={{ marginBottom: '32px' }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                  letterSpacing: '0.25em', color: 'var(--neon)',
                  textTransform: 'uppercase', marginBottom: '16px',
                }}>
                  {category}
                </div>
                {items.map((item, i) => (
                  <SkillBar key={item} skill={item} delay={(catIdx * 3 + i) * 80} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
