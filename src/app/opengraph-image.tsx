import { ImageResponse } from 'next/og'

export const runtime     = 'edge'
export const alt         = 'The Veymont Foundation'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width:          '100%',
          height:         '100%',
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          justifyContent: 'center',
          background:     '#24342A',
          textAlign:      'center',
          padding:        '0 80px',
        }}
      >
        {/* V monogram — rendered as SVG path, no font dependency */}
        <svg
          width={120}
          height={120}
          viewBox="0 0 48 48"
          style={{ opacity: 0.4, marginBottom: 32 }}
        >
          <path
            d="M 10 8 L 24 38"
            stroke="#B86F3E"
            strokeWidth="1.25"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 38 8 L 24 38"
            stroke="#B86F3E"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        <div
          style={{
            fontFamily:    'serif',
            fontWeight:    300,
            fontSize:      48,
            color:         '#F6F2EA',
            letterSpacing: '0.1em',
            marginBottom:  20,
            lineHeight:    1.2,
          }}
        >
          The Veymont Foundation
        </div>

        <div
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 300,
            fontSize:   20,
            color:      'rgba(246,242,234,0.6)',
            letterSpacing: '0.02em',
          }}
        >
          What is given to us should be given forward.
        </div>
      </div>
    ),
    { ...size }
  )
}
