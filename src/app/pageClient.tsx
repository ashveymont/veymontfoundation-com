'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/motion/RevealOnScroll'
import { journalEntries } from '@/data/journal'

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      style={{
        background: '#24342A',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          background: `
            radial-gradient(ellipse at 60% 40%, rgba(166,90,58,0.18) 0%, transparent 65%),
            radial-gradient(ellipse at 20% 80%, rgba(184,111,62,0.10) 0%, transparent 55%)
          `,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: 'clamp(100px, 12vw, 120px) clamp(24px, 5vw, 40px) 80px',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight: 300,
            fontSize: '11px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#B86F3E',
            marginBottom: '36px',
          }}
        >
          The Veymont Foundation — Est. 2024
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontSize: 'clamp(44px, 7vw, 96px)',
            lineHeight: 1.05,
            color: '#F6F2EA',
            maxWidth: '820px',
            margin: '0 auto 36px',
          }}
        >
          What is given to us<br />
          should be{' '}
          <em style={{ color: '#B86F3E', fontStyle: 'italic' }}>given forward.</em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          style={{
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight: 300,
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'rgba(246,242,234,0.6)',
            maxWidth: '480px',
            margin: '0 auto 72px',
          }}
        >
          Privately funded initiatives dedicated to improving human dignity through
          nourishment, education, and healthcare.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scaleY: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '60px',
              background: 'linear-gradient(to bottom, #B86F3E, transparent)',
              transformOrigin: 'top',
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight: 300,
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(246,242,234,0.35)',
            }}
          >
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Philosophy ──────────────────────────────────────────────────────────────

function PhilosophySection() {
  return (
    <section style={{ background: '#F6F2EA', padding: '140px 60px' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '100px',
          alignItems: 'center',
        }}
        className="philosophy-grid"
      >
        {/* Left */}
        <RevealOnScroll>
          <p
            className="eyebrow"
            style={{ marginBottom: '28px' }}
          >
            Our Philosophy
          </p>
          <blockquote
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(32px, 3.5vw, 52px)',
              color: '#24342A',
              lineHeight: 1.2,
              margin: 0,
              border: 0,
              padding: 0,
            }}
          >
            &ldquo;The Foundation is not built around poverty. It is built around gratitude.&rdquo;
          </blockquote>
        </RevealOnScroll>

        {/* Right */}
        <RevealOnScroll delay={0.15}>
          <div style={{ width: '48px', height: '1px', background: '#A65A3A', marginBottom: '32px' }} />
          <p
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.9,
              color: '#2C2C2C',
              opacity: 0.85,
              marginBottom: '24px',
            }}
          >
            Some people encounter good fortune and call it achievement. Others encounter it and feel
            responsibility. The Veymont Foundation was born from the second instinct.
          </p>
          <p
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.9,
              color: '#2C2C2C',
              opacity: 0.85,
              marginBottom: '36px',
            }}
          >
            Access to nourishment, education, and healthcare are not luxuries. They are the
            conditions under which a human being can become who they are meant to be. The Foundation
            exists to extend these conditions to those who need them — quietly, consistently, and
            without condition.
          </p>
          <Link href="/mission" className="text-link">
            Read our mission
          </Link>
        </RevealOnScroll>
      </div>

    </section>
  )
}

// ─── Pillars ─────────────────────────────────────────────────────────────────

const pillars = [
  {
    numeral: 'I',
    name: 'Nourishment',
    description:
      'Food is not merely sustenance. It is comfort, dignity, and the quiet assurance that someone cares. Our nourishment initiative distributes freshly prepared meals and water to those who need them — not as charity, but as a gesture of shared humanity.',
  },
  {
    numeral: 'II',
    name: 'Education',
    description:
      'Potential has no social address. Yet too many students with intelligence and ambition find themselves without the resources to pursue either. The Foundation provides access to the tools, materials, and support that allow young people to become who they are capable of becoming.',
  },
  {
    numeral: 'III',
    name: 'Healthcare',
    description:
      "Access to care should not be a privilege. The Foundation's health initiatives begin with respiratory and emergency care support — a commitment born from personal experience — and will grow alongside the Foundation's capacity to serve.",
  },
]

function PillarsSection() {
  return (
    <section style={{ background: '#24342A', padding: '120px 60px' }}>
      {/* Header */}
      <RevealOnScroll>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p className="eyebrow" style={{ color: '#B86F3E', marginBottom: '20px' }}>
            Three Pillars
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(30px, 4vw, 54px)',
              color: '#F6F2EA',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            The foundations of human flourishing.
          </h2>
        </div>
      </RevealOnScroll>

      {/* Cards */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}
        className="pillars-grid"
      >
        {pillars.map((pillar, i) => (
          <RevealOnScroll key={pillar.numeral} delay={i * 0.15}>
            <PillarCard pillar={pillar} />
          </RevealOnScroll>
        ))}
      </div>

    </section>
  )
}

function PillarCard({ pillar }: { pillar: typeof pillars[0] }) {
  return (
    <div
      style={{
        padding:   '64px 48px',
        borderTop: '1px solid rgba(184,111,62,0.25)',
      }}
      className="pillar-card"
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 300,
          fontSize: '72px',
          lineHeight: 1,
          color: 'rgba(184,111,62,0.2)',
          marginBottom: '24px',
        }}
      >
        {pillar.numeral}
      </div>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 400,
          fontSize: '28px',
          color: '#F6F2EA',
          marginBottom: '16px',
        }}
      >
        {pillar.name}
      </h3>
      <p
        style={{
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          fontWeight: 300,
          fontSize: '14px',
          color: 'rgba(246,242,234,0.55)',
          lineHeight: 1.85,
          margin: 0,
        }}
      >
        {pillar.description}
      </p>

    </div>
  )
}

// ─── Founder Strip ───────────────────────────────────────────────────────────

function FounderStripSection() {
  return (
    <section style={{ background: '#F6F2EA', padding: '140px 60px' }}>
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}
        className="founder-strip"
      >
        <RevealOnScroll>
          <p className="eyebrow" style={{ marginBottom: '32px' }}>
            The Founder
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              color: '#24342A',
              lineHeight: 1.25,
              marginBottom: '36px',
            }}
          >
            He did not build this Foundation to be remembered. He built it because he remembers.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.9,
              color: '#2C2C2C',
              opacity: 0.8,
              marginBottom: '36px',
            }}
          >
            Ashan Veymont grew up with access to quality food, education, and healthcare. He does not
            view these as personal accomplishments. He views them as gifts — and the Foundation as a
            way of giving them forward.
          </p>
          <Link href="/founder" className="text-link">
            Read his story
          </Link>
        </RevealOnScroll>
      </div>

    </section>
  )
}

// ─── Impact Numbers ──────────────────────────────────────────────────────────

const impactStats = [
  { figure: '500', sup: '+', label: 'Meals Distributed' },
  { figure: '3',   sup: '',  label: 'Communities Served' },
  { figure: '1',   sup: '',  label: 'Active Initiative' },
  { figure: '∞',   sup: '',  label: 'The Work Ahead' },
]

function ImpactNumbersSection() {
  return (
    <section style={{ background: '#E2D9CB', padding: '100px 60px' }}>
      <p
        className="eyebrow"
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        Current Impact
      </p>

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          background: 'rgba(0,0,0,0.08)',
        }}
        className="impact-grid"
      >
        {impactStats.map((stat, i) => (
          <RevealOnScroll key={stat.label} delay={i * 0.1}>
            <div
              style={{
                background: '#E2D9CB',
                padding: '52px 40px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 300,
                  fontSize: 'clamp(40px, 5vw, 72px)',
                  color: '#24342A',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}
              >
                {stat.figure}
                {stat.sup && (
                  <sup
                    style={{
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      fontSize: '24px',
                      fontWeight: 300,
                      verticalAlign: 'super',
                      lineHeight: 0,
                    }}
                  >
                    {stat.sup}
                  </sup>
                )}
              </div>
              <p
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight: 300,
                  fontSize: '12px',
                  color: '#A65A3A',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

    </section>
  )
}

// ─── Vision ──────────────────────────────────────────────────────────────────

const visionItems = [
  { name: 'Community Kitchens',    status: 'In Development' },
  { name: 'School Partnerships',   status: 'Planned' },
  { name: 'Scholarship Program',   status: 'Planned' },
  { name: 'Respiratory Care',      status: 'Planned' },
  { name: 'International Chapters', status: 'Long-Term' },
]

function VisionSection() {
  return (
    <section style={{ background: '#F6F2EA', padding: '140px 60px' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
        className="vision-grid"
      >
        {/* Left */}
        <RevealOnScroll>
          <p className="eyebrow" style={{ marginBottom: '20px' }}>
            Future Vision
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(30px, 3.5vw, 50px)',
              color: '#24342A',
              lineHeight: 1.2,
              marginBottom: '32px',
            }}
          >
            Small beginnings carry the seeds of lasting change.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight: 300,
              fontSize: '15px',
              lineHeight: 1.9,
              color: '#2C2C2C',
              opacity: 0.8,
              marginBottom: '36px',
            }}
          >
            The Foundation is young. Its resources are growing. Its ambitions are patient but
            uncompromising. What begins today in personal meal distributions will grow, in time,
            into community kitchens, school partnerships, and healthcare access programs that serve
            people across borders and generations.
          </p>
          <Link href="/impact" className="text-link">
            View our roadmap
          </Link>
        </RevealOnScroll>

        {/* Right — vision list */}
        <RevealOnScroll delay={0.15}>
          <div>
            {visionItems.map((item, i) => (
              <div
                key={item.name}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '24px 0',
                  borderTop: '1px solid #E2D9CB',
                  ...(i === visionItems.length - 1
                    ? { borderBottom: '1px solid #E2D9CB' }
                    : {}),
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 400,
                    fontSize: '22px',
                    color: '#24342A',
                  }}
                >
                  {item.name}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    fontWeight: 300,
                    fontSize: '11px',
                    color: '#A65A3A',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>

    </section>
  )
}

// ─── Journal Preview ─────────────────────────────────────────────────────────

const previewEntries = [...journalEntries]
  .filter(e => e.published)
  .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
  .slice(0, 3)

function JournalPreviewSection() {
  return (
    <section style={{ background: '#171717', padding: '120px 60px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'flex-end',
            marginBottom:   '64px',
            flexWrap:       'wrap',
            gap:            '16px',
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontStyle:  'italic',
              fontSize:   'clamp(28px, 3.5vw, 48px)',
              color:      '#F6F2EA',
              margin:     0,
            }}
          >
            From the Journal
          </h2>
          <Link href="/journal" className="text-link" style={{ color: '#B86F3E' }}>
            All entries
          </Link>
        </div>

        {/* Cards */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap:                 '24px',
          }}
          className="journal-grid"
        >
          {previewEntries.map((entry, i) => (
            <RevealOnScroll key={entry.slug} delay={i * 0.15}>
              <div className="journal-card-hover">
                <Link
                  href={`/journal/${entry.slug}`}
                  style={{
                    textDecoration: 'none',
                    display:        'block',
                    borderTop:      '1px solid rgba(246,242,234,0.12)',
                    paddingTop:     '32px',
                  }}
                >
                  <p
                    style={{
                      fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
                      fontWeight:    300,
                      fontSize:      '11px',
                      color:         '#B86F3E',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      marginBottom:  '16px',
                    }}
                  >
                    {new Date(entry.created_at).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })} — {entry.category}
                  </p>
                  <h3
                    style={{
                      fontFamily:   "'Cormorant Garamond', Georgia, serif",
                      fontWeight:   400,
                      fontSize:     '24px',
                      color:        '#F6F2EA',
                      lineHeight:   1.3,
                      marginBottom: '16px',
                    }}
                  >
                    {entry.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      fontWeight: 300,
                      fontSize:   '13px',
                      color:      'rgba(246,242,234,0.45)',
                      lineHeight: 1.75,
                      margin:     0,
                    }}
                  >
                    {entry.excerpt}
                  </p>
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Closing Reflection ───────────────────────────────────────────────────────

function ClosingSection() {
  return (
    <section style={{ background: '#F6F2EA', padding: '180px 60px' }}>
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
        }}
        className="closing-section"
      >
        {/* Vertical rule */}
        <RevealOnScroll>
          <div
            style={{
              width: '1px',
              height: '80px',
              background: 'linear-gradient(to bottom, transparent, #A65A3A, transparent)',
              margin: '0 auto 60px',
            }}
          />
        </RevealOnScroll>

        {/* Blockquote */}
        <RevealOnScroll delay={0.15}>
          <blockquote
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(28px, 4vw, 52px)',
              color: '#24342A',
              lineHeight: 1.25,
              marginBottom: '32px',
              border: 0,
              padding: 0,
            }}
          >
            &ldquo;Success means very little if it is not shared.&rdquo;
          </blockquote>
        </RevealOnScroll>

        {/* Citation */}
        <RevealOnScroll delay={0.25}>
          <cite
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight: 300,
              fontSize: '12px',
              color: '#A65A3A',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontStyle: 'normal',
            }}
          >
            — Ashan Veymont, Founder
          </cite>
        </RevealOnScroll>
      </div>

    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomeClient() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <PillarsSection />
      <FounderStripSection />
      <ImpactNumbersSection />
      <VisionSection />
      <JournalPreviewSection />
      <ClosingSection />
    </>
  )
}
