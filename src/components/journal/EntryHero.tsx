'use client'

import { motion } from 'framer-motion'
import VMonogram from '@/components/brand/VMonogram'
import { JournalEntry } from '@/types'

interface EntryHeroProps {
  entry: JournalEntry
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
}

export default function EntryHero({ entry }: EntryHeroProps) {
  return (
    <div
      style={{
        background: '#F6F2EA',
        padding:    '48px 60px 80px',
        maxWidth:   '900px',
      }}
      className="entry-hero"
    >
      {entry.cornerstone && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}
        >
          <VMonogram size={14} color="var(--copper)" opacity={0.6} />
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
            Cornerstone Essay
          </span>
        </motion.div>
      )}

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
          fontWeight:    300,
          fontSize:      '11px',
          color:         '#A65A3A',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom:  '8px',
        }}
      >
        {entry.category}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
          fontWeight:    300,
          fontSize:      '12px',
          color:         '#2C2C2C',
          opacity:       0.5,
          letterSpacing: '0.05em',
          marginBottom:  '32px',
        }}
      >
        {entry.category} — {formatDate(entry.created_at)}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 300,
          fontStyle:  'italic',
          fontSize:   'clamp(32px, 5vw, 64px)',
          color:      '#24342A',
          lineHeight: 1.1,
          maxWidth:   '740px',
          margin:     0,
        }}
        className="entry-h1"
      >
        {entry.title}
      </motion.h1>

    </div>
  )
}
