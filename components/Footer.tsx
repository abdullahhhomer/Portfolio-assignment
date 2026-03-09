'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      padding: '40px 0', background: 'var(--bg-900)',
      borderTop: '1px solid rgba(0,212,255,0.1)',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '16px',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: '1rem',
          fontWeight: 900, letterSpacing: '0.1em',
          color: 'var(--neon)', textShadow: '0 0 10px rgba(0,212,255,0.5)',
        }}>
          {'<YN />'}
        </span>

        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          letterSpacing: '0.15em', color: 'rgba(0,212,255,0.3)',
          textTransform: 'uppercase',
        }}>
          © {year} Your Name. All rights reserved.
        </span>

        <div style={{ display: 'flex', gap: '24px' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/yourname' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
            { label: 'Email', href: 'mailto:your.email@example.com' },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'rgba(0,212,255,0.4)', textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--neon)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(0,212,255,0.4)'}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
