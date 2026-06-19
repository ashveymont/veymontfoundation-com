import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import EntryHero from '@/components/journal/EntryHero'
import EntryBody from '@/components/journal/EntryBody'
import { journalEntries } from '@/data/journal'

const sorted = [...journalEntries]
  .filter(e => e.published)
  .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

export async function generateStaticParams() {
  return journalEntries
    .filter(e => e.published)
    .map(e => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const entry = journalEntries.find(e => e.slug === params.slug)
  if (!entry) return {}
  return {
    title:       `${entry.title} — The Veymont Foundation Journal`,
    description: entry.excerpt,
  }
}

export default function JournalEntryPage({
  params,
}: {
  params: { slug: string }
}) {
  const entry = journalEntries.find(e => e.slug === params.slug && e.published)
  if (!entry) notFound()

  const currentIndex = sorted.findIndex(e => e.slug === params.slug)
  const nextEntry    = sorted[currentIndex + 1] ?? null

  return (
    <>
      {/* Back navigation */}
      <div
        style={{ padding: 'clamp(100px, 12vw, 120px) clamp(24px, 5vw, 60px) 0' }}
        className="entry-back"
      >
        <Link
          href="/journal"
          style={{
            fontFamily:     "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight:     300,
            fontSize:       '12px',
            letterSpacing:  '0.15em',
            color:          '#A65A3A',
            textDecoration: 'none',
            textTransform:  'uppercase',
            display:        'inline-flex',
            alignItems:     'center',
            gap:            '8px',
          }}
        >
          ← Journal
        </Link>
      </div>

      {/* Hero — client component for mount animations */}
      <EntryHero entry={entry} />

      {/* Body — client component for scroll animations */}
      <EntryBody entry={entry} nextEntry={nextEntry} />
    </>
  )
}
