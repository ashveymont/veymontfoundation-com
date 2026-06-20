'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/motion/RevealOnScroll'
import VMonogram from '@/components/brand/VMonogram'
import LegacyHorizon from '@/components/legacy/LegacyHorizon'
import { legacyDomains } from '@/data/legacy'

function LegacyHero() {
  return (
    <section
      style={{
        minHeight:     '60vh',
        background:    '#171717',
        display:       'flex',
        flexDirection: 'column',
        justifyContent:'flex-end',
        padding:       'clamp(100px, 12vw, 120px) clamp(24px, 5vw, 60px) 80px',
      }}
      className="texture-dark-zone legacy-hero"
    >
      <div style={{ maxWidth: '900px' }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight:    300,
            fontSize:      '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color:         '#B86F3E',
            marginBottom:  '28px',
          }}
        >
          The Road Ahead
        </motion.p>

        <h1 style={{ margin: 0 }}>
          {['What we hope to become', 'in twenty-five years.'].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay:    i === 0 ? 0.4 : 0.58,
                duration: 0.9,
                ease:     [0.25, 0.1, 0.25, 1],
              }}
              style={{
                display:    'block',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontStyle:  'italic',
                fontSize:   'clamp(40px, 6vw, 80px)',
                color:      '#F6F2EA',
                lineHeight: 1.05,
              }}
              className="legacy-h1"
            >
              {line}
            </motion.span>
          ))}
        </h1>
      </div>
    </section>
  )
}

function LegacyFraming() {
  return (
    <section
      style={{ background: '#F6F2EA', padding: '100px 60px 80px' }}
      className="legacy-framing"
    >
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <RevealOnScroll>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontStyle:  'italic',
              fontSize:   'clamp(22px, 2.6vw, 32px)',
              color:      '#24342A',
              lineHeight: 1.5,
              textAlign:  'center',
              marginBottom: '32px',
            }}
          >
            This is not a roadmap. A roadmap has dates. This is a declaration of intent — what the
            Foundation hopes to be, decades from now, regardless of how long any single phase takes
            to arrive.
          </p>
          <p
            style={{
              fontFamily:   "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight:   300,
              fontSize:     '16px',
              color:        '#2C2C2C',
              opacity:      0.75,
              lineHeight:   1.85,
              textAlign:    'center',
              maxWidth:     '580px',
              margin:       '0 auto',
            }}
          >
            For the practical timeline — what is active now and what comes next — see the
            Foundation&rsquo;s{' '}
            <Link href="/impact" className="text-link" style={{ display: 'inline-flex' }}>
              impact page
            </Link>
            . What follows here is the horizon, not the itinerary.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}

function LegacyClosing() {
  return (
    <section
      style={{
        padding:    '160px 60px',
        textAlign:  'center',
        background: 'var(--forest)',
      }}
      className="texture-dark-zone legacy-closing"
    >
      <RevealOnScroll>
        <VMonogram size={48} color="var(--copper)" opacity={0.4} />
      </RevealOnScroll>
      <RevealOnScroll delay={0.15}>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontStyle:  'italic',
            fontSize:   'clamp(26px, 3.5vw, 48px)',
            color:      'var(--white)',
            lineHeight: 1.3,
            maxWidth:   '720px',
            margin:     '32px auto 0',
          }}
        >
          None of this needs to happen quickly. It only needs to keep happening.
        </p>
      </RevealOnScroll>
    </section>
  )
}

export default function LegacyClient() {
  return (
    <>
      <LegacyHero />
      <LegacyFraming />
      <section style={{ background: 'var(--white)', padding: '60px 0 160px' }}>
        <LegacyHorizon domains={legacyDomains} />
      </section>
      <LegacyClosing />
    </>
  )
}
