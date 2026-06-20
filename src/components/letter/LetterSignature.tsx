import RevealOnScroll from '@/components/motion/RevealOnScroll'

export default function LetterSignature() {
  return (
    <RevealOnScroll delay={0.3}>
      <div style={{ marginTop: '64px' }}>
        <p
          style={{
            fontFamily:   'Cormorant Garamond, Georgia, serif',
            fontWeight:   300,
            fontStyle:    'italic',
            fontSize:     '20px',
            color:        'var(--ink)',
            opacity:      0.7,
            marginBottom: '8px',
          }}
        >
          With gratitude,
        </p>
        <p
          className="margin-note"
          style={{
            fontSize:  '36px',
            transform: 'rotate(-1.5deg)',
            color:     'var(--forest)',
          }}
        >
          Ashan Veymont
        </p>
        <p
          style={{
            fontFamily:    'Inter, Helvetica Neue, sans-serif',
            fontWeight:    300,
            fontSize:      '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color:         'var(--clay)',
            marginTop:     '12px',
          }}
        >
          Founder, The Veymont Foundation
        </p>
      </div>
    </RevealOnScroll>
  )
}
