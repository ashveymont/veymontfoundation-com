import Image from 'next/image'
import RevealOnScroll from '@/components/motion/RevealOnScroll'

export default function FounderImages() {
  return (
    <RevealOnScroll>
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap:                 '16px',
          maxWidth:            '960px',
          margin:              '0 auto',
        }}
        className="founder-images-grid"
      >
        {/* Large image — left, dominant frame */}
        <div
          className="archival-image founder-images-large"
          style={{
            position:    'relative',
            aspectRatio: '3/4',
            overflow:    'hidden',
          }}
        >
          <Image
            src="/images/founder/distribution-03.jpg"
            alt="Ashan Veymont personally delivering food and water to an elderly man seated on steps"
            fill
            priority={false}
            sizes="(max-width: 768px) 100vw, 56vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>

        {/* Two supporting images — right column, stacked */}
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          className="founder-images-pair"
        >
          <div
            className="archival-image"
            style={{
              position:    'relative',
              aspectRatio: '4/3',
              overflow:    'hidden',
            }}
          >
            <Image
              src="/images/founder/distribution-01.jpg"
              alt="Ashan Veymont distributing water and food to community members outdoors"
              fill
              priority={false}
              sizes="(max-width: 768px) 50vw, 28vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div
            className="archival-image"
            style={{
              position:    'relative',
              aspectRatio: '4/3',
              overflow:    'hidden',
            }}
          >
            <Image
              src="/images/founder/distribution-02.jpg"
              alt="Ashan Veymont handing food packages to a woman during a community distribution"
              fill
              priority={false}
              sizes="(max-width: 768px) 50vw, 28vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>
      </div>
    </RevealOnScroll>
  )
}
