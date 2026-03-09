'use client'

import { useEffect, useRef, useState } from 'react'

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number; y: number; z: number;
      vx: number; vy: number; vz: number;
      size: number; opacity: number;
    }> = []

    const PARTICLE_COUNT = 120

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: Math.random() * 2 + 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
      })
    }

    // Grid lines
    const gridLines: Array<{ x1: number; y1: number; x2: number; y2: number; speed: number; offset: number }> = []
    for (let i = 0; i < 8; i++) {
      gridLines.push({
        x1: 0, y1: Math.random() * canvas.height,
        x2: canvas.width, y2: Math.random() * canvas.height,
        speed: Math.random() * 0.3 + 0.1,
        offset: Math.random() * 1000,
      })
    }

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 }
    window.addEventListener('mousemove', (e) => { mouse = { x: e.clientX, y: e.clientY } })

    let animId: number
    let frame = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++

      // Draw grid
      gridLines.forEach(line => {
        const alpha = (Math.sin((frame * line.speed + line.offset) * 0.02) + 1) / 2 * 0.06
        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(line.x1, line.y1)
        ctx.lineTo(line.x2, line.y2)
        ctx.stroke()
      })

      // Perspective grid
      const fov = 500
      const cx = canvas.width / 2
      const cy = canvas.height * 0.6

      for (let x = -10; x <= 10; x++) {
        const worldX = x * 80
        const screenX1 = cx + (worldX / (1000 / fov))
        const screenX2 = cx + (worldX / (100 / fov))
        const alpha = Math.max(0, 0.08 - Math.abs(x) * 0.005)
        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(screenX1, cy - 50)
        ctx.lineTo(screenX2, canvas.height)
        ctx.stroke()
      }
      for (let i = 0; i < 12; i++) {
        const t = (i / 12 + (frame * 0.001) % 1)
        const z = t * 1000
        const scale = fov / z
        const y = cy + (canvas.height - cy) * t
        const halfW = 800 * scale
        const alpha = t * 0.1
        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(cx - halfW, y)
        ctx.lineTo(cx + halfW, y)
        ctx.stroke()
      }

      // Particles
      particles.forEach(p => {
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          p.vx += dx * 0.00003
          p.vy += dy * 0.00003
        }

        p.x += p.vx
        p.y += p.vy
        p.z -= p.vz

        if (p.z <= 0) p.z = 1000
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const scale = 1000 / (p.z + 1)
        const screenX = (p.x - canvas.width / 2) * scale + canvas.width / 2
        const screenY = (p.y - canvas.height / 2) * scale + canvas.height / 2
        const r = p.size * scale
        const alpha = p.opacity * (1 - p.z / 1000)

        ctx.beginPath()
        ctx.arc(screenX, screenY, Math.max(0.1, r), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`
        ctx.fill()

        // Connections
        particles.forEach(p2 => {
          const d = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (d < 100 && d > 0) {
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - d / 100)})`
            ctx.lineWidth = 0.3
            ctx.beginPath()
            ctx.moveTo(screenX, screenY)
            const s2 = 1000 / (p2.z + 1)
            ctx.lineTo(
              (p2.x - canvas.width / 2) * s2 + canvas.width / 2,
              (p2.y - canvas.height / 2) * s2 + canvas.height / 2
            )
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}

const roles = [
  'Web Developer',
  'Digital Marketer',
  'SEO Specialist',
  'UI/UX Designer',
  'Tech Consultant',
]

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <span style={{ color: 'var(--neon)', fontFamily: 'var(--font-mono)' }}>
      {displayed}
      <span style={{
        display: 'inline-block', width: '2px', height: '1em',
        background: 'var(--neon)', marginLeft: '3px', verticalAlign: 'middle',
        animation: 'pulseNeon 1s ease-in-out infinite',
      }} />
    </span>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setTimeout(() => setMounted(true), 100)
  }, [])

  return (
    <section
      id="home"
      className="grid-bg"
      style={{
        minHeight: '100vh', position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <ParticleCanvas />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Corner decorators */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
        <div key={pos} style={{
          position: 'absolute',
          top: pos.includes('top') ? '40px' : 'auto',
          bottom: pos.includes('bottom') ? '40px' : 'auto',
          left: pos.includes('left') ? '40px' : 'auto',
          right: pos.includes('right') ? '40px' : 'auto',
          width: '40px', height: '40px',
          borderTop: pos.includes('top') ? '1px solid rgba(0,212,255,0.4)' : 'none',
          borderBottom: pos.includes('bottom') ? '1px solid rgba(0,212,255,0.4)' : 'none',
          borderLeft: pos.includes('left') ? '1px solid rgba(0,212,255,0.4)' : 'none',
          borderRight: pos.includes('right') ? '1px solid rgba(0,212,255,0.4)' : 'none',
        }} />
      ))}

      <div style={{
        position: 'relative', zIndex: 1, textAlign: 'center',
        padding: '0 20px', maxWidth: '900px',
        transform: mounted ? 'translateY(0)' : 'translateY(30px)',
        opacity: mounted ? 1 : 0,
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        {/* Status pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 16px', marginBottom: '32px',
          border: '1px solid rgba(0,212,255,0.3)',
          background: 'rgba(0,212,255,0.05)',
          borderRadius: '100px',
        }}>
          <div style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#00ff88',
            boxShadow: '0 0 8px #00ff88',
            animation: 'pulseNeon 2s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
            letterSpacing: '0.2em', color: 'var(--text-secondary)',
          }}>
            AVAILABLE FOR HIRE
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            fontWeight: 900, lineHeight: 1.05,
            letterSpacing: '-0.03em', marginBottom: '8px',
          }}
        >
          Abdullah Omer
        </h1>

        <div style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          fontWeight: 600, marginBottom: '24px',
          color: 'var(--text-secondary)',
        }}>
          I&apos;m a <TypewriterText />
        </div>

        <p style={{
          fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          color: 'var(--text-secondary)',
          maxWidth: '560px', margin: '0 auto 48px',
          lineHeight: 1.7,
          opacity: 0.85,
        }}>
          Transforming ideas into powerful digital experiences. I help businesses grow 
          through cutting-edge web development and data-driven marketing strategies.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact"
            style={{
              fontFamily: 'var(--font-display)', fontSize: '0.75rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '14px 32px', background: 'rgba(0,212,255,0.08)',
              color: 'var(--text-primary)', border: '1px solid rgba(0,212,255,0.15)',
              textDecoration: 'none', transition: 'all 0.3s',
              cursor: 'pointer',
            }}
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '48px', justifyContent: 'center',
          marginTop: '80px', flexWrap: 'wrap',
        }}>
          {[
            { num: '15+', label: 'Projects Delivered' },
            { num: '100%', label: 'Client Satisfaction' },
            { num: '3+', label: 'Years Experience' },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '2rem',
                fontWeight: 900, color: 'var(--neon)',
                textShadow: '0 0 20px rgba(0,212,255,0.5)',
              }}>{num}</div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--text-secondary)', marginTop: '4px',
              }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
          letterSpacing: '0.2em', color: 'rgba(0,212,255,0.5)',
        }}>SCROLL</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, rgba(0,212,255,0.5), transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}
