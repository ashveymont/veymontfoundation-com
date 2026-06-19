import RevealOnScroll from '@/components/motion/RevealOnScroll'

interface RoadmapItemProps {
  phase:       string
  title:       string
  description: string
  isLast?:     boolean
  delay?:      number
}

export default function RoadmapItem({
  phase,
  title,
  description,
  isLast = false,
  delay = 0,
}: RoadmapItemProps) {
  return (
    <RevealOnScroll delay={delay}>
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: '160px 1fr',
          gap:                 '40px',
          padding:             '32px 0',
          borderTop:           '1px solid var(--sand)',
          ...(isLast ? { borderBottom: '1px solid var(--sand)' } : {}),
        }}
        className="roadmap-item"
      >
        <div
          style={{
            fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight:    300,
            fontSize:      '11px',
            color:         '#A65A3A',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            paddingTop:    '4px',
          }}
        >
          {phase}
        </div>

        <div>
          <h4
            style={{
              fontFamily:   "'Cormorant Garamond', Georgia, serif",
              fontWeight:   400,
              fontSize:     '22px',
              color:        '#24342A',
              marginBottom: '8px',
              lineHeight:   1.2,
            }}
          >
            {title}
          </h4>
          <p
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight: 300,
              fontSize:   '14px',
              color:      '#2C2C2C',
              opacity:    0.7,
              lineHeight: 1.75,
              margin:     0,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  )
}
