'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/motion/RevealOnScroll'
import JournalCard from '@/components/journal/JournalCard'
import { journalEntries } from '@/data/journal'

const published = [...journalEntries]
  .filter(e => e.published)
  .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

const featured  = published[0]
const remaining = published.slice(1)

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
        className="journal-hero"
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
          {['Reflections', 'from the work.'].map((line, i) => (
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

      {/* ── Main content ── */}
      <section style={{ background: '#F6F2EA', padding: '80px 60px' }} className="journal-main">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Featured entry */}
          {featured && (
            <RevealOnScroll>
              <div
                style={{
                  display:             'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap:                 '60px',
                  paddingBottom:       '60px',
                  borderBottom:        '1px solid var(--sand)',
                  marginBottom:        '60px',
                }}
                className="featured-grid"
              >
                {/* Left — category + title */}
                <div>
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
                    {featured.category} — {formatDate(featured.created_at)}
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
                    {featured.title}
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
                    {featured.excerpt}
                  </p>
                  <Link href={`/journal/${featured.slug}`} className="text-link">
                    Read entry
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* Card grid */}
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap:                 '40px',
            }}
            className="journal-card-grid"
          >
            {remaining.map((entry, i) => (
              <JournalCard key={entry.id} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
