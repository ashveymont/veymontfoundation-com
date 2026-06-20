import RevealOnScroll from '@/components/motion/RevealOnScroll'

interface VoiceNoteProps {
  text: string
}

export default function VoiceNote({ text }: VoiceNoteProps) {
  return (
    <RevealOnScroll>
      <div
        style={{
          maxWidth:    '520px',
          margin:      '56px auto',
          paddingLeft: '20px',
          borderLeft:  '1px solid var(--sand)',
        }}
        className="voice-note"
      >
        <p
          style={{
            fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight:    300,
            fontSize:      '10px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color:         'rgba(0,0,0,0.35)',
            marginBottom:  '12px',
          }}
        >
          From Ashan&rsquo;s journal
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontStyle:  'italic',
            fontSize:   '17px',
            color:      'var(--ink)',
            opacity:    0.75,
            lineHeight: 1.6,
            margin:     0,
          }}
        >
          {text}
        </p>
      </div>
    </RevealOnScroll>
  )
}
