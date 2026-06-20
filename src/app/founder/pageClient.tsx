'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/motion/RevealOnScroll'
import FounderImages from '@/components/founder/FounderImages'
import VMonogram from '@/components/brand/VMonogram'

const values = [
  {
    word: 'Gratitude',
    description:
      'I was blessed. Therefore I help. This is not a slogan — it is the most literal description of why any of this exists. Gratitude, lived honestly, leaves no other option.',
  },
  {
    word: 'Dignity',
    description:
      'Every person — regardless of circumstance — deserves to be treated with care and respect. This is non-negotiable.',
  },
  {
    word: 'Consistency',
    description:
      'A single act of generosity is a gift. Showing up again and again is a commitment. The Foundation is built for the long run.',
  },
  {
    word: 'Humility',
    description:
      'The Foundation does not seek recognition. It seeks results — measured not in press coverage but in meals served, students supported, and lives made a little more bearable.',
  },
  {
    word: 'Patience',
    description:
      'Meaningful change does not happen in campaigns. It accumulates over decades, through sustained, quiet effort. The Foundation is built to last.',
  },
  {
    word: 'Independence',
    description:
      'Funded entirely through private enterprise, the Foundation answers to no external agenda. It serves because it chooses to — without condition or calculation.',
  },
]

const bodyParas = [
  {
    text: "There is a version of Ashan Veymont's story that could be told as a business narrative — the entrepreneur, the ventures, the commercial success. This is not that story. This is the one that comes before it, and runs beneath it, and gives it meaning.",
    weight: 300,
    opacity: 0.85,
    delay: 0,
  },
  {
    text: 'Ashan grew up with access to things that form the quiet scaffolding of a life well lived: food on the table, a school that believed in him, healthcare when he needed it. He did not view these as entitlements. As he grew older and began building businesses, he found that his success felt incomplete in a way he struggled to articulate — until he began to understand what was missing.',
    weight: 300,
    opacity: 0.85,
    delay: 0.1,
  },
]

const continuationParas = [
  {
    text: 'The meal distributions began informally. No cameras. No announcements. Just freshly cooked food, clean water, and the simple act of showing up consistently, in the same places, over time — because trust is built through presence, not gestures.',
    delay: 0,
  },
  {
    text: 'In 2022, a serious illness became its own kind of education. Bedridden with COVID-19, Ashan found himself in sustained contemplation of a simple question: what would happen to someone going through this without access to the care he had? The answer was uncomfortable. The promise he made to himself during recovery became the third pillar of what would eventually become the Foundation.',
    delay: 0.1,
  },
  {
    text: 'The Veymont Foundation is not a marketing vehicle. It is not a philanthropic credential. It is the most honest expression of what Ashan believes: that the purpose of good fortune is to share it, and that a life spent accumulating without returning is a life spent on the wrong thing.',
    delay: 0.15,
  },
  {
    text: 'He does not believe in performing generosity. He believes in practicing it — quietly, consistently, and for as long as he is able to.',
    delay: 0.2,
  },
]

export default function FounderClient() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          minHeight: '60vh',
          background: '#171717',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(100px, 12vw, 120px) clamp(24px, 5vw, 60px) 80px',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight: 300,
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#B86F3E',
            marginBottom: '28px',
          }}
        >
          The Founder
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(48px, 7vw, 88px)',
            color: '#F6F2EA',
            lineHeight: 1.0,
            margin: 0,
          }}
        >
          Ashan Veymont
        </motion.h1>
      </section>

      {/* ── Body ── */}
      <section style={{ padding: '100px 60px 80px' }} className="founder-body">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          {/* Lead quote */}
          <RevealOnScroll>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 'clamp(22px, 2.8vw, 34px)',
                color: '#24342A',
                lineHeight: 1.45,
                marginBottom: '52px',
              }}
            >
              &ldquo;I grew up with clean food, good schools, and doctors I could see when I was
              unwell. I didn&rsquo;t earn any of that. I was simply fortunate enough to be born into
              it. That fortune has always felt like a responsibility.&rdquo;
            </p>
          </RevealOnScroll>

          {/* Body paragraphs */}
          {bodyParas.map((para, i) => (
            <RevealOnScroll key={i} delay={para.delay}>
              <p
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight: para.weight,
                  fontSize: '17px',
                  lineHeight: 1.95,
                  color: '#2C2C2C',
                  opacity: para.opacity,
                  marginBottom: '28px',
                }}
              >
                {para.text}
              </p>
            </RevealOnScroll>
          ))}

          {/* Emphasis paragraph */}
          <RevealOnScroll delay={0.15}>
            <p
              style={{
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight: 400,
                fontSize: '17px',
                lineHeight: 1.95,
                color: '#2C2C2C',
                opacity: 1,
                marginTop: '8px',
                marginBottom: '36px',
              }}
            >
              Service. Genuine, unconditional service.
            </p>
          </RevealOnScroll>

          {/* Pull quote */}
          <RevealOnScroll>
            <div style={{ position: 'relative', margin: '60px 0' }}>
              <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                <VMonogram size={18} color="var(--clay)" opacity={0.2} />
              </div>
            <blockquote
              style={{
                background: '#EDE8DF',
                borderLeft: '3px solid #A65A3A',
                padding: '64px 72px',
                margin: 0,
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 'clamp(20px, 2.2vw, 28px)',
                color: '#24342A',
                lineHeight: 1.5,
                borderRadius: 0,
              }}
              className="founder-pullquote"
            >
              &ldquo;I did not start with a foundation. I started with a pot of biryani and a drive
              to places in my city where people were living without the things I had always taken for
              granted. I wanted to sit with that. To feel it. And then to do something about it.&rdquo;
            </blockquote>
            </div>
          </RevealOnScroll>

          {/* Photo grid */}
          <div style={{ margin: '60px 0' }}>
            <FounderImages />
          </div>

          {/* Caption */}
          <RevealOnScroll>
            <p
              style={{
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight: 300,
                fontSize: '12px',
                color: '#A65A3A',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textAlign: 'center',
                marginTop: '16px',
                marginBottom: '0',
              }}
            >
              Community distribution, Sri Lanka
            </p>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── The Moment I Realized ── */}
      <section
        style={{ background: 'var(--mist)', padding: '80px 60px' }}
        className="founder-moment"
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <RevealOnScroll>
            <p
              style={{
                fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight:    300,
                fontSize:      '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color:         'var(--clay)',
                marginBottom:  '28px',
              }}
            >
              The Moment I Realized
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            {[
              'There was no single dramatic instant. I want to be honest about that, because the version of this story that has a lightning-bolt moment is easier to tell and less true.',
              'What happened instead was repetition. I kept noticing the same gap, over and over, in small ways — a child outside a school gate who clearly wasn\'t going in, a man asking for water rather than money, a conversation where someone mentioned, almost in passing, that they hadn\'t seen a doctor in years not because they were healthy but because they couldn\'t afford to find out otherwise. None of these were extraordinary. That was the point. They were ordinary, and they kept happening, and I kept being in a position to notice them.',
              'The realization, when it actually arrived, was less of an event and more of a sentence that wouldn\'t leave me alone: I had never once had to wonder about any of this. Not food. Not school. Not a doctor. The absence of that worry had been so complete in my own life that I had never registered it as something I\'d been given. I had simply never thought about it at all — which, I came to understand, is exactly what privilege does. It doesn\'t announce itself. It just quietly removes a category of worry from your life so thoroughly that you forget the category ever existed.',
              'Once I saw it, I couldn\'t unsee it. That\'s the closest thing to a moment I can point to — not the instant I understood, but the instant I stopped being able to look away from what I now understood.',
            ].map((para, i, arr) => (
              <p
                key={i}
                style={{
                  fontFamily:   "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight:   300,
                  fontSize:     '17px',
                  lineHeight:   1.95,
                  color:        '#2C2C2C',
                  opacity:      0.85,
                  marginBottom: i < arr.length - 1 ? '28px' : '0',
                }}
              >
                {para}
              </p>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Continuation ── */}
      <section style={{ padding: '80px 60px 100px' }} className="founder-continuation">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {/* Continuation paragraphs */}
          {continuationParas.map((para, i) => (
            <RevealOnScroll key={i} delay={para.delay}>
              <p
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight: 300,
                  fontSize: '17px',
                  lineHeight: 1.95,
                  color: '#2C2C2C',
                  opacity: 0.85,
                  marginBottom: '28px',
                }}
              >
                {para.text}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ background: '#24342A', padding: '80px 60px' }} className="founder-values">
        <p
          className="eyebrow"
          style={{ color: '#B86F3E', textAlign: 'center', marginBottom: '64px' }}
        >
          What He Believes
        </p>

        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px',
          }}
          className="values-grid"
        >
          {values.map((v, i) => (
            <RevealOnScroll key={v.word} delay={i * 0.1}>
              <div style={{ textAlign: 'center' }}>
                <span
                  style={{
                    display: 'block',
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 300,
                    fontStyle: 'italic',
                    fontSize: '32px',
                    color: '#F6F2EA',
                    marginBottom: '12px',
                  }}
                >
                  {v.word}
                </span>
                <p
                  style={{
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    fontWeight: 300,
                    fontSize: '13px',
                    color: 'rgba(246,242,234,0.5)',
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {v.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── Letter CTA ── */}
      <section
        style={{ padding: '100px 60px', textAlign: 'center', background: 'var(--white)' }}
        className="founder-letter-close"
      >
        <RevealOnScroll>
          <p
            style={{
              fontFamily:   "'Cormorant Garamond', Georgia, serif",
              fontWeight:   300,
              fontStyle:    'italic',
              fontSize:     'clamp(22px, 2.8vw, 34px)',
              color:        'var(--forest)',
              lineHeight:   1.4,
              maxWidth:     '600px',
              margin:       '0 auto 32px',
            }}
          >
            Everything above is the story. What follows is the reason, in his own words.
          </p>
          <Link href="/letter" className="text-link" style={{ justifyContent: 'center' }}>
            Read the founder&rsquo;s letter
          </Link>
        </RevealOnScroll>
      </section>

    </>
  )
}
