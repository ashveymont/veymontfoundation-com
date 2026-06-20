import Link from 'next/link'
import RevealOnScroll from '@/components/motion/RevealOnScroll'
import VMonogram from '@/components/brand/VMonogram'
import { JournalEntry } from '@/types'

interface CornerstoneCardProps {
  entry:   JournalEntry
  index:   number
  isLast?: boolean
}

export default function CornerstoneCard({ entry, index, isLast }: CornerstoneCardProps) {
  const formattedDate = new Date(entry.created_at).toLocaleDateString('en-GB', {
    month: 'long',
    year:  'numeric',
  })

  return (
    <RevealOnScroll delay={index * 0.1}>
      <Link
        href={`/journal/${entry.slug}`}
        style={{
          display:             'grid',
          gridTemplateColumns: '120px 1fr',
          gap:                 '32px',
          alignItems:          'start',
          padding:             '36px 0',
          borderTop:           '1px solid var(--sand)',
          borderBottom:        isLast ? '1px solid var(--sand)' : 'none',
          textDecoration:      'none',
        }}
        className="cornerstone-card"
      >
        <div>
          <VMonogram size={16} color="var(--copper)" opacity={0.5} />
          <p
            style={{
              fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight:    300,
              fontSize:      '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color:         'rgba(0,0,0,0.35)',
              marginTop:     '10px',
            }}
          >
            {formattedDate}
          </p>
        </div>
        <div>
          <p
            style={{
              fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight:    300,
              fontSize:      '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color:         'var(--clay)',
              marginBottom:  '10px',
            }}
          >
            {entry.category}
          </p>
          <h3
            style={{
              fontFamily:   "'Cormorant Garamond', Georgia, serif",
              fontWeight:   400,
              fontStyle:    'italic',
              fontSize:     'clamp(24px, 2.8vw, 32px)',
              color:        'var(--forest)',
              lineHeight:   1.3,
              marginBottom: '12px',
            }}
            className="cornerstone-title"
          >
            {entry.title}
          </h3>
          <p
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight: 300,
              fontSize:   '14px',
              color:      'var(--ink)',
              opacity:    0.7,
              lineHeight: 1.8,
              maxWidth:   '600px',
            }}
            className="cornerstone-excerpt"
          >
            {entry.excerpt}
          </p>
        </div>
      </Link>
    </RevealOnScroll>
  )
}
