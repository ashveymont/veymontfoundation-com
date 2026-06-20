'use client'

import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/motion/RevealOnScroll'
import VMonogram from '@/components/brand/VMonogram'

const principles = [
  {
    numeral: 'I',
    title: 'We do not accept donations.',
    body: "Every initiative undertaken by the Foundation is funded privately — through the commercial success of businesses founded and operated by Ashan Veymont. This is not a limitation. It is a choice. The Foundation's independence from public fundraising means it answers to no donor, no campaign, and no external pressure. It exists solely to serve. Every contribution the Foundation makes is, in the most literal sense, gratitude in motion — not generosity performed for an audience, but a debt being repaid forward.",
  },
  {
    numeral: 'II',
    title: 'We preserve dignity, always.',
    body: 'The Foundation does not display the people it serves. It does not photograph hardship to generate attention. It does not trade in guilt or pity. Every interaction — every meal, every resource, every act of service — is conducted with the same respect and dignity the Foundation would extend to anyone it met.',
  },
  {
    numeral: 'III',
    title: 'We grow as our capacity grows.',
    body: "The Foundation does not overstate what it has achieved, nor make promises it cannot keep. It begins where it is. It builds carefully. And as the businesses that fund it grow, so does the Foundation's ability to serve — more people, in more places, across more of the three pillars that form its foundation.",
  },
  {
    numeral: 'IV',
    title: 'We think in generations, not campaigns.',
    body: 'The Veymont Foundation is not built to respond to a moment. It is built to outlast one. Every decision made today — in brand, in structure, in the way it serves — is made with the intention that this Foundation should still be doing meaningful work a century from now.',
  },
]

export default function MissionClient() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          minHeight: '60vh',
          background: '#24342A',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(100px, 12vw, 120px) clamp(24px, 5vw, 60px) 80px',
        }}
      >
        <div style={{ maxWidth: '900px' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
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
            Our Mission
          </motion.p>

          <h1 style={{ margin: 0 }}>
            {['To help people.', 'Nothing more.', 'Nothing less.'].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.8 }}
                style={{
                  display: 'block',
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: 'clamp(40px, 6vw, 80px)',
                  color: '#F6F2EA',
                  lineHeight: 1.05,
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>
        </div>
      </section>

      {/* ── Body ── */}
      <section style={{ padding: '100px 60px' }} className="mission-body">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          {/* Lead */}
          <RevealOnScroll>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 'clamp(22px, 2.5vw, 32px)',
                color: '#24342A',
                lineHeight: 1.5,
                marginBottom: '64px',
              }}
            >
              &ldquo;The Veymont Foundation exists to improve human dignity through nourishment,
              education, and healthcare — not out of obligation, but out of gratitude.&rdquo;
            </p>
          </RevealOnScroll>

          {/* Body paragraphs */}
          {[
            'There are foundations built around causes. There are foundations built around crises. There are foundations built for recognition and foundations built for tax efficiency. The Veymont Foundation was built for none of these reasons.',
            'It was built because one person — someone who grew up with access to good food, genuine education, and quality healthcare — recognized that he had been given something most people never receive. And he decided that these gifts, if they meant anything at all, meant he had a responsibility to pass them forward.',
            'That is the whole of the mission. Help people. Preserve their dignity. Create the conditions under which they can flourish.',
          ].map((para, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <p
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight: 300,
                  fontSize: '18px',
                  lineHeight: 1.9,
                  color: '#2C2C2C',
                  opacity: 0.85,
                  marginBottom: '32px',
                }}
              >
                {para}
              </p>
            </RevealOnScroll>
          ))}

          {/* Divider */}
          <RevealOnScroll>
            <div style={{ width: '48px', height: '1px', background: '#A65A3A', margin: '48px 0' }} />
          </RevealOnScroll>

          {/* Principles */}
          <div>
            {principles.map((p, i) => (
              <RevealOnScroll key={p.numeral} delay={i * 0.1}>
                <div
                  style={{
                    borderTop: '1px solid var(--sand)',
                    ...(i === principles.length - 1 ? { borderBottom: '1px solid var(--sand)' } : {}),
                    padding: '40px 0',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      fontWeight: 300,
                      fontSize: '14px',
                      color: '#A65A3A',
                      letterSpacing: '0.1em',
                      marginBottom: '12px',
                    }}
                  >
                    {p.numeral}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 400,
                      fontSize: '26px',
                      color: '#24342A',
                      marginBottom: '12px',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      fontWeight: 300,
                      fontSize: '15px',
                      color: '#2C2C2C',
                      opacity: 0.75,
                      lineHeight: 1.85,
                      margin: 0,
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing Quote ── */}
      <section style={{ padding: '100px 60px 140px' }} className="mission-closing">
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <RevealOnScroll>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
              <VMonogram size={18} color="var(--clay)" opacity={0.2} />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <blockquote
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 'clamp(24px, 3vw, 40px)',
                color: '#24342A',
                lineHeight: 1.3,
                marginBottom: '32px',
                border: 0,
                padding: 0,
              }}
            >
              &ldquo;The world does not need more organizations that help. It needs more people who
              cannot imagine not helping.&rdquo;
            </blockquote>
          </RevealOnScroll>

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
              — Foundation Philosophy
            </cite>
          </RevealOnScroll>
        </div>
      </section>

    </>
  )
}
