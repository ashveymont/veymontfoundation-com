'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/motion/RevealOnScroll'
import JournalCard from '@/components/journal/JournalCard'
import CornerstoneCard from '@/components/journal/CornerstoneCard'
import VMonogram from '@/components/brand/VMonogram'
import { journalEntries } from '@/data/journal'

const sortedEntries  = [...journalEntries]
  .filter(e => e.published)
  .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

const featuredEntry  = sortedEntries[0]
const cornerstones   = sortedEntries.filter(e => e.cornerstone && e.id !== featuredEntry.id)
const archiveEntries = sortedEntries.filter(e => !e.cornerstone && e.id !== featuredEntry.id)

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
}

export default function JournalClient() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          minHeight:      '50vh',
          background:     '#24342A',
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'flex-end',
          padding:        'clamp(100px, 12vw, 120px) clamp(24px, 5vw, 60px) 80px',
        }}
        className="texture-dark-zone journal-hero"
      >
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
            color:         '#B86F3E',
            marginBottom:  '28px',
          }}
        >
          The Journal
        </motion.p>

        <h1 style={{ margin: 0 }}>
          {['Essays on', 'gratitude and service.'].map((line, i) => (
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
              className="journal-h1"
            >
              {line}
            </motion.span>
          ))}
        </h1>
      </section>

      {/* ── Intro ── */}
      <section
        style={{
          background: 'var(--white)',
          padding:    '80px 60px 0',
          maxWidth:   '720px',
          margin:     '0 auto',
          textAlign:  'center',
        }}
        className="journal-intro"
      >
        <RevealOnScroll>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontStyle:  'italic',
              fontSize:   'clamp(20px, 2.2vw, 26px)',
              color:      'var(--forest)',
              lineHeight: 1.5,
            }}
          >
            Not updates. Not announcements. A standing collection of the thinking behind the work — added to slowly, kept permanently.
          </p>
        </RevealOnScroll>
      </section>

      {/* ── Main content ── */}
      <section style={{ background: '#F6F2EA', padding: '60px 60px 80px' }} className="journal-main">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Featured entry */}
          {featuredEntry && (
            <RevealOnScroll>
              <div
                style={{
                  display:             'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap:                 '60px',
                  paddingBottom:       '60px',
                  borderBottom:        '1px solid var(--sand)',
                  marginBottom:        '80px',
                }}
                className="featured-grid"
              >
                {/* Left — category + title */}
                <div>
                  {featuredEntry.cornerstone && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <VMonogram size={12} color="var(--copper)" opacity={0.6} />
                      <span
                        style={{
                          fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
                          fontWeight:    400,
                          fontSize:      '10px',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color:         'var(--copper)',
                        }}
                      >
                        Cornerstone
                      </span>
                    </div>
                  )}
                  <p
                    style={{
                      fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
                      fontWeight:    300,
                      fontSize:      '11px',
                      color:         '#A65A3A',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      marginBottom:  '20px',
                    }}
                  >
                    {featuredEntry.category} — {formatDate(featuredEntry.created_at)}
                  </p>
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 300,
                      fontStyle:  'italic',
                      fontSize:   'clamp(28px, 3vw, 44px)',
                      color:      '#24342A',
                      lineHeight: 1.2,
                      margin:     0,
                    }}
                  >
                    {featuredEntry.title}
                  </h2>
                </div>

                {/* Right — excerpt + link */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p
                    style={{
                      fontFamily:   "'Inter', 'Helvetica Neue', sans-serif",
                      fontWeight:   300,
                      fontSize:     '15px',
                      color:        '#2C2C2C',
                      opacity:      0.78,
                      lineHeight:   1.9,
                      marginBottom: '24px',
                    }}
                  >
                    {featuredEntry.excerpt}
                  </p>
                  <Link href={`/journal/${featuredEntry.slug}`} className="text-link">
                    Read entry
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* Cornerstones */}
          {cornerstones.length > 0 && (
            <section style={{ marginBottom: '100px' }}>
              <RevealOnScroll>
                <p
                  style={{
                    fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
                    fontWeight:    300,
                    fontSize:      '11px',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color:         'var(--copper)',
                    marginBottom:  '8px',
                  }}
                >
                  Cornerstones
                </p>
                <p
                  style={{
                    fontFamily:   "'Cormorant Garamond', Georgia, serif",
                    fontStyle:    'italic',
                    fontWeight:   300,
                    fontSize:     '18px',
                    color:        'var(--ink)',
                    opacity:      0.6,
                    marginBottom: '40px',
                  }}
                >
                  The essays we return to.
                </p>
              </RevealOnScroll>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {cornerstones.map((entry, index) => (
                  <CornerstoneCard
                    key={entry.id}
                    entry={entry}
                    index={index}
                    isLast={index === cornerstones.length - 1}
                  />
                ))}
              </div>
            </section>
          )}

        </div>
      </section>

      {/* ── Full-screen quote pause ── */}
      {archiveEntries.length > 0 && (
        <section
          style={{
            minHeight:      '60vh',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            background:     'var(--obsidian)',
            padding:        '80px 60px',
          }}
          className="fullscreen-quote fullscreen-quote--journal"
        >
          <RevealOnScroll>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontStyle:  'italic',
                fontSize:   'clamp(28px, 5vw, 56px)',
                color:      'var(--white)',
                lineHeight: 1.3,
                textAlign:  'center',
                maxWidth:   '820px',
                margin:     '0 auto',
              }}
            >
              The instinct toward kindness runs deeper in most people than their circumstances.
            </p>
          </RevealOnScroll>
        </section>
      )}

      {/* ── Archive ── */}
      {archiveEntries.length > 0 && (
        <section style={{ background: '#F6F2EA', padding: '80px 60px' }} className="journal-archive">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <RevealOnScroll>
              <p
                style={{
                  fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight:    300,
                  fontSize:      '11px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color:         'var(--clay)',
                  marginBottom:  '40px',
                }}
              >
                The Archive
              </p>
            </RevealOnScroll>

            <div
              style={{
                display:             'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap:                 '40px',
              }}
              className="journal-card-grid"
            >
              {archiveEntries.map((entry, i) => (
                <JournalCard key={entry.id} entry={entry} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
