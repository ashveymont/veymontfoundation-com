'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/motion/RevealOnScroll'
import InitiativeSection from '@/components/initiatives/InitiativeSection'
import VoiceNote from '@/components/founder/VoiceNote'
import { nourishment, education, healthcare } from '@/data/initiatives'

function InitiativesHero() {
  return (
    <section
      style={{
        minHeight: '55vh',
        background: '#A65A3A',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(100px, 12vw, 120px) clamp(24px, 5vw, 60px) 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="initiatives-hero"
    >
      {/* Texture overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: `
            radial-gradient(ellipse at 80% 20%, rgba(0,0,0,0.12) 0%, transparent 60%),
            radial-gradient(ellipse at 10% 90%, rgba(0,0,0,0.08) 0%, transparent 50%)
          `,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight:    300,
            fontSize:      '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color:         'rgba(246,242,234,0.7)',
            marginBottom:  '28px',
          }}
        >
          Our Initiatives
        </motion.p>

        <h1 style={{ margin: 0 }}>
          {['Three ways of', 'saying thank you.'].map((line, i) => (
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
              className="initiatives-h1"
            >
              {line}
            </motion.span>
          ))}
        </h1>
      </div>

    </section>
  )
}

const SectionRule = () => (
  <div style={{ width: '100%', height: '1px', background: 'var(--sand)' }} />
)

export default function InitiativesClient() {
  return (
    <>
      <InitiativesHero />

      <InitiativeSection initiative={nourishment} index={1} />

      <VoiceNote text="The Foundation didn't begin when the website launched. It began years ago on a street corner with a packet of biryani." />

      {/* ── Full-screen quote pause ── */}
      <section
        style={{
          minHeight:      '70vh',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          background:     'var(--forest)',
          padding:        '80px 60px',
        }}
        className="fullscreen-quote fullscreen-quote--initiatives"
      >
        <RevealOnScroll>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontStyle:  'italic',
              fontSize:   'clamp(32px, 5.5vw, 64px)',
              color:      'var(--white)',
              lineHeight: 1.3,
              textAlign:  'center',
              maxWidth:   '900px',
              margin:     '0 auto',
            }}
          >
            Success answers &ldquo;did I do this well.&rdquo; Service answers &ldquo;did this do anything for someone other than me.&rdquo;
          </p>
        </RevealOnScroll>
      </section>

      <InitiativeSection initiative={education} index={2} />

      <SectionRule />

      <InitiativeSection initiative={healthcare} index={3} />

      {/* Closing */}
      <section
        style={{
          padding:    '120px 60px',
          textAlign:  'center',
          background: 'var(--forest)',
        }}
        className="initiatives-closing"
      >
        <RevealOnScroll>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize:   'clamp(24px, 3vw, 42px)',
              fontWeight: 300,
              fontStyle:  'italic',
              color:      'var(--white)',
              lineHeight: 1.3,
              maxWidth:   '680px',
              margin:     '0 auto 32px',
            }}
          >
            Every initiative here exists because something was given to us first.<br />
            This is simply what we chose to do with it.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <Link
            href="/founder"
            className="text-link"
            style={{ color: 'var(--copper)', justifyContent: 'center' }}
          >
            Read the founder&rsquo;s story
          </Link>
        </RevealOnScroll>

      </section>
    </>
  )
}
