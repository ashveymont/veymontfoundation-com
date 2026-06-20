import Image from 'next/image'
import RevealOnScroll from '@/components/motion/RevealOnScroll'

const images = [
  {
    src: '/images/founder/distribution-01.jpg',
    alt: 'Ashan Veymont handing water and food to community members during an outdoor distribution',
  },
  {
    src: '/images/founder/distribution-02.jpg',
    alt: 'Ashan Veymont distributing water to a woman in the community',
  },
  {
    src: '/images/founder/distribution-03.jpg',
    alt: 'Ashan Veymont personally handing a meal to a man seated on steps',
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
            className="archival-image"
            style={{
              position:    'relative',
              aspectRatio: '3/4',
              overflow:    'hidden',
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        ))}
      </div>
    </RevealOnScroll>
  )
}
