import Link from 'next/link'
import { JournalEntry } from '@/types'
import RevealOnScroll from '@/components/motion/RevealOnScroll'

interface JournalCardProps {
  entry: JournalEntry
  index: number
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
}

export default function JournalCard({ entry, index }: JournalCardProps) {
  return (
    <RevealOnScroll delay={index * 0.1}>
      <div className="journal-card-hover">
        <Link
          href={`/journal/${entry.slug}`}
          style={{ textDecoration: 'none', display: 'block' }}
        >
          <div style={{ height: '1px', background: 'var(--sand)', marginBottom: '24px' }} />

          <p
            style={{
              fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight:    300,
              fontSize:      '10px',
              color:         '#A65A3A',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom:  '12px',
            }}
          >
            {entry.category}
          </p>

          <h3
            style={{
              fontFamily:   "'Cormorant Garamond', Georgia, serif",
              fontWeight:   400,
              fontSize:     '22px',
              color:        '#24342A',
              lineHeight:   1.35,
              marginBottom: '12px',
            }}
          >
            {entry.title}
          </h3>

          <p
            style={{
              fontFamily:   "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight:   300,
              fontSize:     '13px',
              color:        '#2C2C2C',
              opacity:      0.65,
              lineHeight:   1.75,
              marginBottom: '16px',
            }}
          >
            {entry.excerpt}
          </p>

          <p
            style={{
              fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight:    300,
              fontSize:      '11px',
              color:         'rgba(0,0,0,0.3)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              margin:        0,
            }}
          >
            {formatDate(entry.created_at)}
          </p>
        </Link>
      </div>
    </RevealOnScroll>
  )
}
