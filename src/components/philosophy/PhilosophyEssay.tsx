import { PhilosophyEssay } from '@/types'
import RevealOnScroll from '@/components/motion/RevealOnScroll'

interface PhilosophyEssayProps {
  essay: PhilosophyEssay
  index: number
}

export default function PhilosophyEssayBlock({ essay, index }: PhilosophyEssayProps) {
  const isEven = index % 2 === 1   // 0-based: essays II, IV, VI are index 1, 3, 5
  const bg     = isEven ? '#EDE8DF' : '#F6F2EA'

  return (
    <section
      style={{
        background: bg,
        padding:    '120px 60px',
        borderTop:  index === 0 ? 'none' : '1px solid var(--sand)',
      }}
      className="philosophy-essay"
    >
      <div
        style={{
          maxWidth:            '1000px',
          margin:              '0 auto',
          display:             'grid',
          gridTemplateColumns: '1fr 2fr',
          gap:                 '60px',
          direction:           isEven ? 'rtl' : 'ltr',
        }}
        className="philosophy-essay-grid"
      >
        {/* Numeral + title */}
        <RevealOnScroll>
          <div style={{ direction: 'ltr' }}>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize:   '64px',
                lineHeight: 1,
                color:      'rgba(166,90,58,0.18)',
                marginBottom: 0,
              }}
            >
              {essay.numeral}
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                fontSize:   '30px',
                color:      '#24342A',
                marginTop:  '-10px',
                lineHeight: 1.15,
                margin:     0,
                marginBlockStart: '-10px',
              }}
            >
              {essay.title}
            </h2>
          </div>
        </RevealOnScroll>

        {/* Body */}
        <RevealOnScroll delay={0.15}>
          <div style={{ direction: 'ltr' }}>
            {essay.body.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily:   "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight:   300,
                  fontSize:     '16px',
                  lineHeight:   1.9,
                  color:        '#2C2C2C',
                  opacity:      0.82,
                  marginBottom: i < essay.body.length - 1 ? '22px' : 0,
                }}
                className="philosophy-para"
              >
                {para}
              </p>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
