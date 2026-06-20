import Image from 'next/image'
import RevealOnScroll from '@/components/motion/RevealOnScroll'

const images = [
  {
    src: '/images/founder/distribution-01.jpg',
    alt: 'Ashan Veymont distributing water and food to community members outdoors',
  },
  {
    src: '/images/founder/distribution-02.jpg',
    alt: 'Ashan Veymont handing food packages to a woman during a community distribution',
  },
  {
    src: '/images/founder/distribution-03.jpg',
    alt: 'Ashan Veymont personally delivering food and water to an elderly man seated on steps',
  },
]

export default function FounderImages() {
  return (
    <RevealOnScroll>
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap:                 '16px',
          maxWidth:            '960px',
          margin:              '0 auto',
        }}
        className="founder-images-grid"
      >
        {images.map((img) => (
          <div
            key={img.src}
            className="archival-image founder-image-wrap"
            style={{
              position:    'relative',
              aspectRatio: '3/4',
              maxHeight:   '480px',
              overflow:    'hidden',
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 320px"
              style={{
                objectFit:      'cover',
                objectPosition: 'center',
                borderRadius:   0,
              }}
            />
          </div>
        ))}
      </div>
    </RevealOnScroll>
  )
}
