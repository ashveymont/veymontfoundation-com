import { LegacyDomain } from '@/types'
import RevealOnScroll from '@/components/motion/RevealOnScroll'

interface LegacyHorizonProps {
  domains: LegacyDomain[]
}

export default function LegacyHorizon({ domains }: LegacyHorizonProps) {
  return (
    <div
      style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '0 60px' }}
      className="legacy-horizon"
    >
      {/* Vertical line */}
      <div
        style={{
          position:   'absolute',
          left:       '60px',
          top:        0,
          bottom:     0,
          width:      '1px',
          background: 'var(--sand)',
        }}
        className="legacy-line"
      />

      {domains.map((domain, index) => (
        <div
          key={domain.numeral}
          style={{
            position:      'relative',
            paddingLeft:   '80px',
            paddingBottom: index === domains.length - 1 ? 0 : '100px',
          }}
          className="legacy-domain"
        >
          {/* Node marker */}
          <div
            style={{
              position:     'absolute',
              left:         '56px',
              top:          '8px',
              width:        '9px',
              height:       '9px',
              borderRadius: '50%',
              background:   'var(--clay)',
            }}
          />

          <RevealOnScroll delay={index * 0.08}>
            <span
              style={{
                fontFamily:    "'Cormorant Garamond', Georgia, serif",
                fontWeight:    300,
                fontSize:      '13px',
                color:         'var(--clay)',
                letterSpacing: '0.15em',
                display:       'block',
                marginBottom:  '8px',
              }}
            >
              {domain.numeral}
            </span>

            <h3
              style={{
                fontFamily:   "'Cormorant Garamond', Georgia, serif",
                fontWeight:   400,
                fontSize:     'clamp(24px, 3vw, 32px)',
                color:        'var(--forest)',
                marginBottom: '12px',
                lineHeight:   1.2,
              }}
              className="legacy-domain-name"
            >
              {domain.name}
            </h3>

            <p
              style={{
                fontFamily:   "'Cormorant Garamond', Georgia, serif",
                fontWeight:   300,
                fontStyle:    'italic',
                fontSize:     'clamp(18px, 2vw, 22px)',
                color:        'var(--clay)',
                lineHeight:   1.4,
                marginBottom: '20px',
              }}
            >
              {domain.declaration}
            </p>

            {domain.body.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily:   "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight:   300,
                  fontSize:     '15px',
                  color:        'var(--ink)',
                  opacity:      0.8,
                  lineHeight:   1.85,
                  marginBottom: i === domain.body.length - 1 ? 0 : '16px',
                }}
              >
                {para}
              </p>
            ))}
          </RevealOnScroll>
        </div>
      ))}
    </div>
  )
}
