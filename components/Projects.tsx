'use client'

import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: '01',
    title: 'NexaCommerce',
    subtitle: 'E-commerce Platform',
    category: 'Web Development + SEO',
    status: 'COMPLETED',
    year: '2024',
    // ✏️ EDIT: Replace with actual project description
    desc: 'A full-stack e-commerce solution for a regional fashion brand struggling with low online sales. Built a custom Next.js storefront with headless CMS, integrated payment processing, and implemented a complete SEO overhaul.',
    objective: 'Increase online revenue by 40% within 6 months through a complete digital infrastructure rebuild and organic growth strategy.',
    strategy: [
      'Rebuilt the entire frontend with Next.js for 3x faster load times',
      'Implemented structured data markup for rich search results',
      'Launched targeted Google Shopping campaigns with 300% ROAS',
      'Created a content marketing funnel targeting high-intent keywords',
    ],
    results: [{ label: 'Revenue Increase', value: '+68%' }, { label: 'Organic Traffic', value: '+210%' }, { label: 'Page Speed', value: '98/100' }],
    tags: ['Next.js', 'Node.js', 'Stripe', 'SEO', 'Google Ads', 'Figma'],
    color: '#00D4FF',
    featured: true,
  },
  {
    id: '02',
    title: 'MediTrack Pro',
    subtitle: 'Healthcare SaaS Dashboard',
    category: 'Full-Stack Development',
    status: 'COMPLETED',
    year: '2024',
    desc: 'A comprehensive patient management and analytics dashboard for a multi-clinic healthcare provider. Replaced their outdated spreadsheet system with a real-time data platform improving operational efficiency.',
    objective: 'Digitize patient management workflows and provide actionable operational insights to reduce administrative overhead by 50%.',
    strategy: [
      'Designed an intuitive React dashboard with real-time data sync',
      'Built secure REST API with role-based access control (RBAC)',
      'Integrated automated reporting to replace 12 hours of manual work/week',
      'Implemented HIPAA-compliant data storage and audit logging',
    ],
    results: [{ label: 'Time Saved', value: '12hrs/wk' }, { label: 'Data Accuracy', value: '99.9%' }, { label: 'User Adoption', value: '100%' }],
    tags: ['React', 'TypeScript', 'PostgreSQL', 'AWS', 'Chart.js', 'Auth0'],
    color: '#00D4FF',
    featured: false,
  },
  {
    id: '03',
    title: 'GrowthLens',
    subtitle: 'Marketing Analytics Platform',
    category: 'Digital Marketing + Dev',
    status: 'IN PROGRESS',
    year: '2025',
    desc: 'A unified marketing analytics tool that consolidates data from Google Ads, Meta, Email, and Organic channels into a single dashboard — giving marketing teams one source of truth for all campaign performance.',
    objective: 'Eliminate data silos across marketing channels and provide a unified attribution model for smarter budget allocation.',
    strategy: [
      'Built multi-platform API integrations (Google, Meta, HubSpot)',
      'Designed custom attribution modeling with last-touch and linear models',
      'Created automated weekly/monthly PDF reports via email',
      'Added AI-powered campaign recommendations based on historical trends',
    ],
    results: [{ label: 'Channels Unified', value: '6+' }, { label: 'Report Time', value: '-90%' }, { label: 'Ad Spend Saved', value: '+25%' }],
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'GA4 API', 'Meta API'],
    color: '#00D4FF',
    featured: false,
  },
  {
    id: '04',
    title: 'LocalEdge Agency',
    subtitle: 'Local SEO Campaign',
    category: 'SEO + Content Marketing',
    status: 'COMPLETED',
    year: '2023',
    desc: 'A comprehensive local SEO and content marketing campaign for a chain of 5 dental clinics. Dominated local search results across all clinic locations and built a sustainable content moat.',
    objective: 'Achieve top-3 rankings for all target keywords in each clinic\'s local area and reduce dependence on paid advertising.',
    strategy: [
      'Audited and optimized 5 Google Business Profiles with complete data',
      'Built 200+ local citations across dental and medical directories',
      'Created location-specific service pages with hyper-local content',
      'Developed a patient FAQ content strategy targeting featured snippets',
    ],
    results: [{ label: 'Keyword Rankings', value: '#1-3' }, { label: 'GMB Impressions', value: '+380%' }, { label: 'New Patients', value: '+52%' }],
    tags: ['Local SEO', 'Content Strategy', 'GMB', 'Ahrefs', 'Schema Markup'],
    color: '#00D4FF',
    featured: false,
  },
]

function ProjectCard({ project, index, visible }: {
  project: typeof projects[0]
  index: number
  visible: boolean
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      style={{
        border: '1px solid',
        borderColor: expanded ? 'rgba(0,212,255,0.5)' : 'rgba(0,212,255,0.12)',
        background: expanded ? 'rgba(10, 22, 40, 0.8)' : 'rgba(6, 13, 20, 0.6)',
        backdropFilter: 'blur(20px)',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 0.12}s`,
        boxShadow: expanded ? '0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(0,212,255,0.1)' : 'none',
        marginBottom: '20px',
      }}
    >
      {/* Card Header */}
      <div
        onClick={() => setExpanded(!expanded)}
        style={{
          padding: '36px 40px',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: '32px',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        {/* Index */}
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: '1rem',
          color: 'rgba(0,212,255,0.3)', fontWeight: 700,
        }}>
          {project.id}
        </span>

        {/* Title block */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.3rem',
              fontWeight: 700, letterSpacing: '0.03em',
            }}>
              {project.title}
            </h3>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
              letterSpacing: '0.2em', padding: '3px 10px',
              border: `1px solid ${project.status === 'IN PROGRESS' ? '#FFB800' : 'rgba(0,255,136,0.4)'}`,
              color: project.status === 'IN PROGRESS' ? '#FFB800' : '#00FF88',
              background: project.status === 'IN PROGRESS' ? 'rgba(255,184,0,0.08)' : 'rgba(0,255,136,0.08)',
            }}>
              {project.status}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{project.subtitle}</span>
            <span style={{ color: 'rgba(0,212,255,0.4)', fontSize: '0.75rem' }}>—</span>
            <span className="tag">{project.category}</span>
          </div>
        </div>

        {/* Expand */}
        <div style={{
          width: '36px', height: '36px', border: '1px solid rgba(0,212,255,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--neon)', fontSize: '1.2rem',
          transition: 'all 0.4s',
          transform: expanded ? 'rotate(45deg)' : 'rotate(0)',
          flexShrink: 0,
        }}>
          +
        </div>
      </div>

      {/* Expanded content */}
      <div style={{
        maxHeight: expanded ? '1000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div style={{
          padding: '0 40px 40px',
          borderTop: '1px solid rgba(0,212,255,0.1)',
          paddingTop: '32px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
        }} className="project-detail">
          {/* Left */}
          <div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '28px', fontSize: '0.9rem' }}>
              {project.desc}
            </p>

            <div style={{ marginBottom: '24px' }}>
              <div className="tag" style={{ marginBottom: '12px' }}>Objective</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, borderLeft: '2px solid var(--neon)', paddingLeft: '16px' }}>
                {project.objective}
              </p>
            </div>

            <div>
              <div className="tag" style={{ marginBottom: '12px' }}>Strategy</div>
              <ul style={{ listStyle: 'none' }}>
                {project.strategy.map((s, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '12px',
                    fontSize: '0.83rem', color: 'var(--text-secondary)',
                    lineHeight: 1.6, marginBottom: '10px',
                    alignItems: 'flex-start',
                  }}>
                    <span style={{ color: 'var(--neon)', fontSize: '0.6rem', marginTop: '5px', flexShrink: 0 }}>▶</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div>
            {/* Results */}
            <div className="tag" style={{ marginBottom: '16px' }}>Results</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '32px' }}>
              {project.results.map(({ label, value }) => (
                <div key={label} style={{
                  padding: '20px 16px', textAlign: 'center',
                  background: 'rgba(0,212,255,0.05)',
                  border: '1px solid rgba(0,212,255,0.15)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: '1.4rem',
                    fontWeight: 900, color: 'var(--neon)',
                    textShadow: '0 0 10px rgba(0,212,255,0.5)',
                    marginBottom: '4px',
                  }}>{value}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                    color: 'var(--text-secondary)', letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="tag" style={{ marginBottom: '12px' }}>Tech Stack</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tags.map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                  letterSpacing: '0.1em', padding: '6px 14px',
                  border: '1px solid rgba(0,212,255,0.2)',
                  color: 'rgba(0,212,255,0.7)',
                  background: 'rgba(0,212,255,0.05)',
                }}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{ marginTop: '32px' }}>
              {/* ✏️ EDIT: Link to actual live project */}
              <button className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                View Case Study →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .project-detail { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

export default function Projects() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" style={{ padding: '120px 0', background: 'var(--bg-800)', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--neon), transparent)',
        opacity: 0.3,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }} ref={ref}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px',
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s ease',
        }}>
          <span className="tag">04 — Projects</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(0,212,255,0.15)' }} />
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '24px', marginBottom: '64px', alignItems: 'end',
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s ease 0.1s',
        }}>
          <h2 className="section-title">
            Selected<br />
            <span className="neon-text">Work</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8 }}>
            Click any project to explore the full case study — including the challenge, strategy, and measurable outcomes delivered.
          </p>
        </div>

        {/* Projects list */}
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} visible={visible} />
        ))}
      </div>
    </section>
  )
}
