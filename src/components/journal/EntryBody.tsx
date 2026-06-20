'use client'

import Link from 'next/link'
import RevealOnScroll from '@/components/motion/RevealOnScroll'
import { JournalEntry } from '@/types'

interface EntryBodyProps {
  entry:     JournalEntry
  nextEntry: JournalEntry | null
}

export default function EntryBody({ entry, nextEntry }: EntryBodyProps) {
  const paragraphs = entry.body.split('\n\n').filter(Boolean)

  return (
    <article
      style={{ maxWidth: '700px', padding: '0 60px 120px' }}
      className="entry-body"
    >
      <RevealOnScroll>
        <div>
          {paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily:   "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight:   300,
                fontSize:     i === 0 ? '20px' : '18px',
                lineHeight:   1.95,
                color:        'var(--ink)',
                opacity:      i === 0 ? 1 : 0.85,
                marginBottom: '32px',
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </RevealOnScroll>

      {/* End of entry navigation */}
      <RevealOnScroll delay={0.1}>
        <div style={{ marginTop: '80px', paddingTop: '48px', borderTop: '1px solid var(--sand)' }}>
          <p
            style={{
              fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight:    300,
              fontSize:      '11px',
              color:         '#A65A3A',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom:  '16px',
            }}
          >
            From the archive
          </p>

          {nextEntry ? (
            <Link
              href={`/journal/${nextEntry.slug}`}
              style={{
                fontFamily:     "'Cormorant Garamond', Georgia, serif",
                fontWeight:     300,
                fontStyle:      'italic',
                fontSize:       '24px',
                color:          '#24342A',
                textDecoration: 'none',
                display:        'block',
              }}
            >
              {nextEntry.title}
            </Link>
          ) : (
            <Link href="/journal" className="text-link">
              Back to the Journal
            </Link>
          )}
        </div>
      </RevealOnScroll>
    </article>
  )
}
