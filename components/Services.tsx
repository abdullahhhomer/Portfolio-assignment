'use client'

import { useEffect, useRef, useState } from 'react'

const services = [
  {
    id: '01',
    icon: '⬡',
    title: 'Web Development',
    tagline: 'Full-Stack Digital Products',
    desc: 'I build fast, scalable, and conversion-optimized websites and web applications. From landing pages to complex platforms, every line of code is crafted with performance and user experience in mind.',
    benefits: [
      'Mobile-first responsive design',
      'SEO-optimized architecture',
      'Lightning-fast load times',
      'CMS integration (Next.js, WordPress)',
      'E-commerce & payment solutions',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,100,150,0.05))',
  },
  {
    id: '02',
    icon: '◈',
    title: 'Digital Marketing',
    tagline: 'Data-Driven Growth Strategy',
    desc: 'Strategic marketing campaigns that combine SEO, paid advertising, and content marketing to drive qualified traffic, increase brand visibility, and maximize your return on investment.',
    benefits: [
      'Search Engine Optimization (SEO)',
      'Google & Meta paid advertising',
      'Email marketing automation',
      'Social media management',
      'Analytics & conversion tracking',
    ],
    tech: ['Google Ads', 'Meta Ads', 'GA4', 'SEMrush'],
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(0,50,80,0.08))',
  },
  {
    id: '03',
    icon: '◉',
    title: 'UI/UX Design',
    tagline: 'Human-Centered Interfaces',
    desc: 'Design systems and user interfaces that are not just beautiful — they\'re intuitive, accessible, and engineered to guide users toward your desired business outcomes.',
    benefits: [
      'User research & personas',
      'Wireframing & prototyping',
      'Design system creation',
      'A/B testing & CRO',
      'Accessibility compliance (WCAG)',
    ],
    tech: ['Figma', 'Framer', 'Adobe XD', 'Principle'],
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(0,80,100,0.06))',
  },
  {
    id: '04',
    icon: '⬟',
    title: 'SEO & Content Strategy',
    tagline: 'Organic Visibility & Authority',
    desc: 'Comprehensive SEO audits, keyword research, and content strategies that position your business at the top of search results — driving sustainable organic traffic without ongoing ad spend.',
    benefits: [
      'Technical SEO audits',
      'Keyword research & mapping',
      'Content calendar planning',
      'Link building strategy',
      'Local SEO optimization',
    ],
    tech: ['Ahrefs', 'SEMrush', 'Search Console', 'Screaming Frog'],
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(0,150,200,0.05))',
  },
  {
    id: '05',
    icon: '◫',
    title: 'Analytics & Reporting',
    tagline: 'Actionable Business Intelligence',
    desc: 'Set up and manage comprehensive analytics dashboards that transform raw data into clear, actionable insights — so you always know what\'s working and where to invest next.',
    benefits: [
      'GA4 & GTM setup',
      'Custom dashboard creation',
      'Conversion funnel analysis',
      'Monthly performance reports',
      'ROI tracking & attribution',
    ],
    tech: ['GA4', 'GTM', 'Looker Studio', 'Hotjar'],
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(0,100,130,0.06))',
  },
  {
    id: '06',
    icon: '◎',
    title: 'Tech Consulting',
    tagline: 'Strategic Technology Guidance',
    desc: 'Expert guidance on technology stack selection, digital transformation, and building scalable tech infrastructure tailored to your business size, budget, and long-term objectives.',
    benefits: [
      'Tech stack assessment',
      'Digital transformation roadmap',
      'Tool & platform selection',
      'Team process optimization',
      'Cost-benefit analysis',
    ],
    tech: ['Strategy', 'Architecture', 'Auditing', 'Planning'],
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(0,60,80,0.08))',
  },
]

function ServiceCard({ service, index, visible }: {
  service: typeof services[0]
  index: number
  visible: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '40px 36px',
        background: hovered ? service.gradient : 'rgba(10, 22, 40, 0.4)',
        border: '1px solid',
        borderColor: hovered ? 'rgba(0,212,255,0.5)' : 'rgba(0,212,255,0.12)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: visible
          ? hovered ? 'translateY(-8px)' : 'translateY(0)'
          : 'translateY(40px)',
        opacity: visible ? 1 : 0,
        transitionDelay: visible ? `${index * 0.1}s` : '0s',
        cursor: 'default',
        backdropFilter: 'blur(10px)',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(0,212,255,0.1)' : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Number */}
      <div style={{
        position: 'absolute', top: '20px', right: '24px',
        fontFamily: 'var(--font-display)', fontSize: '3rem',
        fontWeight: 900, color: 'rgba(0,212,255,0.05)',
        letterSpacing: '-0.05em', lineHeight: 1,
        transition: 'color 0.4s',
        ...(hovered ? { color: 'rgba(0,212,255,0.12)' } : {}),
      }}>
        {service.id}
      </div>

      {/* Icon */}
      <div style={{
        fontSize: '2rem', marginBottom: '20px',
        color: 'var(--neon)',
        textShadow: hovered ? '0 0 20px rgba(0,212,255,0.8)' : '0 0 10px rgba(0,212,255,0.3)',
        transition: 'text-shadow 0.4s',
        lineHeight: 1,
      }}>
        {service.icon}
      </div>

      <div className="tag" style={{ marginBottom: '8px' }}>{service.tagline}</div>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontSize: '1.2rem',
        fontWeight: 700, letterSpacing: '0.02em', marginBottom: '16px',
        color: hovered ? 'var(--neon)' : 'var(--text-primary)',
        transition: 'color 0.4s',
      }}>
        {service.title}
      </h3>
      <p style={{
        fontSize: '0.88rem', color: 'var(--text-secondary)',
        lineHeight: 1.7, marginBottom: '24px',
      }}>
        {service.desc}
      </p>

      <ul style={{ listStyle: 'none', marginBottom: '28px' }}>
        {service.benefits.map(b => (
          <li key={b} style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            fontSize: '0.8rem', color: 'var(--text-secondary)',
            padding: '5px 0',
            borderBottom: '1px solid rgba(0,212,255,0.05)',
          }}>
            <span style={{ color: 'var(--neon)', fontSize: '0.6rem' }}>▶</span>
            {b}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {service.tech.map(t => (
          <span key={t} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
            letterSpacing: '0.12em', padding: '4px 10px',
            border: '1px solid rgba(0,212,255,0.2)',
            color: 'rgba(0,212,255,0.7)',
            background: 'rgba(0,212,255,0.05)',
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
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
    <section id="services" style={{ padding: '120px 0', background: 'var(--bg-900)', position: 'relative' }} className="grid-bg">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }} ref={ref}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px',
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s ease',
        }}>
          <span className="tag">03 — Services</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(0,212,255,0.15)' }} />
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '24px', marginBottom: '80px', alignItems: 'end',
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s ease 0.1s',
        }}>
          <h2 className="section-title">
            What I Can<br />
            Do For Your<br />
            <span className="neon-text">Business</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8 }}>
            End-to-end digital services designed to solve real business problems.
            From building your first website to scaling your online presence, 
            I provide the technical expertise and strategic thinking you need to compete.
          </p>
        </div>

        {/* Services grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '20px',
        }}>
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
