import { ImpactStory } from '@/data/impact-stories'
import RevealOnScroll from '@/components/motion/RevealOnScroll'

interface ImpactStoryProps {
  story: ImpactStory
  index: number
}

export default function ImpactStoryCard({ story, index }: ImpactStoryProps) {
  return (
    <RevealOnScroll delay={index * 0.1}>
      <div
        style={{
          borderLeft:  '2px solid var(--clay)',
          paddingLeft: '28px',
        }}
        className="impact-story-card"
      >
        <p
          style={{
            fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight:    300,
            fontSize:      '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         'var(--clay)',
            marginBottom:  '14px',
          }}
        >
          {story.kicker}
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontStyle:  'italic',
            fontSize:   'clamp(18px, 2vw, 22px)',
            color:      'var(--forest)',
            lineHeight: 1.55,
            margin:     0,
          }}
        >
          {story.text}
        </p>
      </div>
    </RevealOnScroll>
  )
}
