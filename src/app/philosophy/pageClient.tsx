'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/motion/RevealOnScroll'
import VMonogram from '@/components/brand/VMonogram'
import PhilosophyEssayBlock from '@/components/philosophy/PhilosophyEssay'
import { philosophyEssays } from '@/data/philosophy'

function PhilosophyHero() {
  return (
    <section
      style={{
        minHeight:     '55vh',
        background:    '#24342A',
        display:       'flex',
        flexDirection: 'column',
        justifyContent:'flex-end',
        padding:       'clamp(100px, 12vw, 120px) clamp(24px, 5vw, 60px) 80px',
      }}
      className="texture-dark-zone philosophy-hero"
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
          Our Philosophy
        </motion.p>

        <h1 style={{ margin: 0 }}>
          {['A philosophy', 'that operates programs.'].map((line, i) => (
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
              className="philosophy-h1"
            >
              {line}
            </motion.span>
          ))}
        </h1>
      </div>
    </section>
  )
}

function PhilosophyIntro() {
  return (
    <section
      style={{
        background: '#F6F2EA',
        padding:    '100px 60px 60px',
      }}
      className="philosophy-intro"
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
              margin:     0,
            }}
          >
            Most organizations form around a problem. This one formed around a debt — and everything
            below is an attempt to explain what that means in practice.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}

function PhilosophyClosing() {
  return (
    <section
      style={{
        padding:    '140px 60px',
        textAlign:  'center',
        background: 'var(--obsidian)',
      }}
      className="texture-dark-zone philosophy-closing"
    >
      <RevealOnScroll>
        <VMonogram size={20} color="var(--copper)" opacity={0.25} />
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontStyle:  'italic',
            fontSize:   'clamp(24px, 3vw, 42px)',
            color:      'var(--white)',
            lineHeight: 1.35,
            maxWidth:   '680px',
            margin:     '24px auto 48px',
          }}
        >
          What is given to us should be given forward. Everything on this page is an explanation of
          that one sentence.
        </p>
      </RevealOnScroll>
      <RevealOnScroll delay={0.15}>
        <div
          style={{
            display:     'flex',
            gap:         '40px',
            justifyContent: 'center',
            flexWrap:    'wrap',
          }}
          className="philosophy-closing-links"
        >
          <Link href="/letter" className="text-link" style={{ color: 'var(--copper)' }}>
            Read the founder&rsquo;s letter
          </Link>
          <Link href="/impact" className="text-link" style={{ color: 'var(--copper)' }}>
            See it in practice
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default function PhilosophyClient() {
  return (
    <>
      <PhilosophyHero />
      <PhilosophyIntro />
      {philosophyEssays.map((essay, index) => (
        <PhilosophyEssayBlock key={essay.numeral} essay={essay} index={index} />
      ))}
      <PhilosophyClosing />
    </>
  )
}
