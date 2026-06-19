import { Initiative } from '@/types'
import RevealOnScroll from '@/components/motion/RevealOnScroll'

interface DetailGroupProps {
  heading: string
  items:   string[]
  delay?:  number
}

function DetailGroup({ heading, items, delay = 0 }: DetailGroupProps) {
  return (
    <RevealOnScroll delay={delay}>
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
        {heading}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li
            key={item}
            style={{
              fontFamily:   "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight:   300,
              fontSize:     '14px',
              color:        '#2C2C2C',
              opacity:      0.75,
              lineHeight:   1.5,
              padding:      '7px 0',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              display:      'flex',
              gap:          '8px',
            }}
          >
            <span style={{ color: '#A65A3A', flexShrink: 0 }}>—</span>
            {item}
          </li>
        ))}
      </ul>
    </RevealOnScroll>
  )
}

export interface InitiativeSectionProps {
  initiative: Initiative
  index:      number
}

export default function InitiativeSection({ initiative, index }: InitiativeSectionProps) {
  const isHealthcare   = index === 3
  const isEducation    = index === 2
  const numeralSize    = isHealthcare ? '120px' : '80px'
  const numeralOpacity = isHealthcare ? 0.1 : 0.15
  const bgColor        = isEducation ? '#EDE8DF' : '#F6F2EA'

  return (
    <section
      style={{ background: bgColor, padding: '100px 60px' }}
      className="initiative-section"
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: '1fr 2fr',
            gap:                 '60px',
            marginBottom:        '60px',
            alignItems:          'start',
          }}
          className="initiative-header"
        >
          {/* Left — numeral + name */}
          <RevealOnScroll>
            <div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 300,
                  fontSize:   numeralSize,
                  lineHeight: 1,
                  color:      `rgba(166,90,58,${numeralOpacity})`,
                }}
                className="initiative-numeral"
              >
                {initiative.numeral}
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 400,
                  fontSize:   '32px',
                  color:      '#24342A',
                  lineHeight: 1.1,
                  margin:     '-16px 0 0 0',
                }}
                className="initiative-name"
              >
                {initiative.name}
              </h2>
            </div>
          </RevealOnScroll>

          {/* Right — lead + body */}
          <RevealOnScroll delay={0.15}>
            <p
              style={{
                fontFamily:   "'Cormorant Garamond', Georgia, serif",
                fontWeight:   300,
                fontStyle:    'italic',
                fontSize:     '22px',
                color:        '#A65A3A',
                lineHeight:   1.5,
                marginBottom: '32px',
              }}
              className="initiative-lead"
            >
              {initiative.lead}
            </p>
            {initiative.body.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily:   "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight:   300,
                  fontSize:     '16px',
                  color:        '#2C2C2C',
                  opacity:      0.82,
                  lineHeight:   1.9,
                  marginBottom: i < initiative.body.length - 1 ? '20px' : 0,
                }}
                className="initiative-body"
              >
                {para}
              </p>
            ))}
          </RevealOnScroll>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--sand)', margin: '0 0 40px 0' }} />

        {/* Details */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: '1fr 1fr',
            gap:                 '40px',
          }}
          className="initiative-details"
        >
          <DetailGroup heading="Current Activity" items={initiative.current} delay={0} />
          <DetailGroup heading="Long-Term Vision"  items={initiative.vision}  delay={0.15} />
        </div>
      </div>
    </section>
  )
}
