'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/motion/RevealOnScroll'
import RoadmapItem from '@/components/impact/RoadmapItem'
import VMonogram from '@/components/brand/VMonogram'
import ImpactStoryCard from '@/components/impact/ImpactStory'
import { impactStories } from '@/data/impact-stories'

const stats = [
  {
    figure:      '500',
    sup:         '+',
    label:       'Meals Distributed',
    description: 'Freshly prepared biryani meals and clean water distributed directly to homeless and underprivileged individuals. Each meal distributed personally by the founder.',
  },
  {
    figure:      '3',
    sup:         '',
    label:       'Communities Reached',
    description: 'Active distribution across three communities, with consistent presence built over time. Trust precedes scale. We show up before we expand.',
  },
  {
    figure:      '1',
    sup:         '',
    label:       'Area of Service',
    description: 'Nourishment is the Foundation\'s first and currently active pillar. Education and healthcare initiatives are in development and will launch as capacity grows.',
  },
  {
    figure:      '100%',
    sup:         '',
    label:       'Privately Funded',
    description: 'Every meal, every programme, every operational cost is funded privately through the commercial success of the founder\'s businesses. No public donations. No external dependency.',
  },
]

const roadmapItems = [
  {
    phase:       'Now',
    title:       'Personal Meal Distribution',
    description: 'Ongoing, founder-led biryani and water distribution to homeless and underprivileged communities. Consistent presence, no campaigns.',
  },
  {
    phase:       'Near Future',
    title:       'Community Kitchen Programme',
    description: 'Open-door community kitchens where anyone can eat. No means testing. No paperwork. No questions asked. Dignity as the operating principle.',
  },
  {
    phase:       'Year Two',
    title:       'Education Initiative Launch',
    description: 'School supplies, uniforms, textbooks, and material support for students whose education is hindered by lack of resources — not lack of ability.',
  },
  {
    phase:       'Year Three',
    title:       'Healthcare Access Programme',
    description: 'Beginning with respiratory and asthma support. Medication access, referrals, and community health outreach built through trusted partnerships.',
  },
  {
    phase:       'Long-Term',
    title:       'Scholarship Fund & International Chapters',
    description: 'A scholarship programme for exceptional students, alongside the Foundation\'s expansion beyond its first home — into any geography where the need is real and the capacity to serve exists.',
  },
]

export default function ImpactClient() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          minHeight:      '55vh',
          background:     '#E2D9CB',
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'flex-end',
          padding:        'clamp(100px, 12vw, 120px) clamp(24px, 5vw, 60px) 80px',
        }}
        className="impact-hero"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight:    300,
            fontSize:      '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color:         '#A65A3A',
            marginBottom:  '28px',
          }}
        >
          Our Impact
        </motion.p>

        <h1 style={{ margin: 0 }}>
          {['The work,', 'honestly reported.'].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay:    i === 0 ? 0.4 : 0.58,
                duration: 0.9,
                ease:     [0.25, 0.1, 0.25, 1],
              }}
              style={{
                display:    'block',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontStyle:  'italic',
                fontSize:   'clamp(40px, 6vw, 80px)',
                color:      '#24342A',
                lineHeight: 1.05,
              }}
              className="impact-h1"
            >
              {line}
            </motion.span>
          ))}
        </h1>
      </section>

      {/* ── Intro + Stats ── */}
      <section style={{ background: '#F6F2EA', padding: '100px 60px' }} className="impact-intro">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Intro text */}
          <RevealOnScroll>
            <div style={{ maxWidth: '620px', marginBottom: '80px' }}>
              {[
                'The Foundation believes in transparency. Not to impress, but because honesty is the only foundation on which trust can be built. What follows is a clear account of where the Foundation stands today — and where it is committed to going.',
                'These numbers are small. We know that. We report them not to celebrate, but to document the beginning of something we intend to grow for a very long time.',
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily:   "'Inter', 'Helvetica Neue', sans-serif",
                    fontWeight:   300,
                    fontSize:     '16px',
                    lineHeight:   1.9,
                    color:        '#2C2C2C',
                    opacity:      0.8,
                    marginBottom: i === 0 ? '20px' : 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </RevealOnScroll>

          {/* Stats grid */}
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: '1fr 1fr',
              gap:                 '2px',
              background:          '#E2D9CB',
              marginBottom:        '80px',
            }}
            className="stats-grid"
          >
            {stats.map((stat, i) => (
              <RevealOnScroll key={stat.label} delay={i * 0.1}>
                <div
                  style={{
                    background: '#F6F2EA',
                    padding:    '64px 52px',
                  }}
                  className="stat-cell"
                >
                  {/* Figure */}
                  <div
                    style={{
                      fontFamily:   "'Cormorant Garamond', Georgia, serif",
                      fontWeight:   300,
                      fontSize:     'clamp(52px, 6vw, 88px)',
                      color:        '#24342A',
                      lineHeight:   1,
                      marginBottom: '12px',
                    }}
                    className="stat-figure"
                  >
                    {stat.figure}
                    {stat.sup && (
                      <sup
                        style={{
                          fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
                          fontSize:      '28px',
                          fontWeight:    300,
                          verticalAlign: 'super',
                          lineHeight:    0,
                        }}
                      >
                        {stat.sup}
                      </sup>
                    )}
                  </div>

                  {/* Label */}
                  <p
                    style={{
                      fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
                      fontWeight:    300,
                      fontSize:      '13px',
                      color:         '#A65A3A',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      marginBottom:  '20px',
                    }}
                  >
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      fontWeight: 300,
                      fontSize:   '14px',
                      color:      '#2C2C2C',
                      opacity:    0.65,
                      lineHeight: 1.75,
                      margin:     0,
                    }}
                  >
                    {stat.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* ── Impact Stories ── */}
        <div style={{ padding: '0 0 80px' }}>
          <RevealOnScroll>
            <p
              style={{
                fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight:    300,
                fontSize:      '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color:         'var(--clay)',
                marginBottom:  '48px',
              }}
            >
              Behind the Numbers
            </p>
          </RevealOnScroll>
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap:                 '48px 60px',
            }}
            className="impact-stories-grid"
          >
            {impactStories.map((story, index) => (
              <ImpactStoryCard key={story.id} story={story} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull note — full width ── */}
      <div style={{ background: '#EDE8DF', padding: '60px' }} className="impact-pull">
        <RevealOnScroll>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <VMonogram size={18} color="var(--clay)" opacity={0.2} />
          </div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontStyle:  'italic',
              fontSize:   '22px',
              color:      '#24342A',
              lineHeight: 1.55,
              maxWidth:   '680px',
              margin:     '0 auto',
              textAlign:  'center',
            }}
          >
            &ldquo;These numbers exist because we were given far more than we ever earned, and this is what we have chosen to do with that. We are not congratulating ourselves. We are simply keeping a promise.&rdquo;
          </p>
        </RevealOnScroll>
      </div>

      {/* ── Roadmap ── */}
      <section style={{ background: '#F6F2EA', padding: '80px 60px' }} className="impact-roadmap">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <RevealOnScroll>
            <h2
              style={{
                fontFamily:   "'Cormorant Garamond', Georgia, serif",
                fontWeight:   300,
                fontStyle:    'italic',
                fontSize:     '36px',
                color:        '#24342A',
                marginBottom: '48px',
              }}
            >
              The Road Ahead
            </h2>
          </RevealOnScroll>

          {roadmapItems.map((item, i) => (
            <RoadmapItem
              key={item.title}
              phase={item.phase}
              title={item.title}
              description={item.description}
              isLast={i === roadmapItems.length - 1}
              delay={i * 0.08}
            />
          ))}

          <RevealOnScroll>
            <div
              style={{
                marginTop:  '64px',
                paddingTop: '48px',
                borderTop:  '1px solid var(--sand)',
                textAlign:  'center',
              }}
            >
              <p
                style={{
                  fontFamily:   "'Cormorant Garamond', Georgia, serif",
                  fontStyle:    'italic',
                  fontWeight:   300,
                  fontSize:     '20px',
                  color:        'var(--forest)',
                  marginBottom: '20px',
                }}
              >
                This is the itinerary. The horizon is a different page.
              </p>
              <Link href="/legacy" className="text-link" style={{ justifyContent: 'center' }}>
                Read the Foundation&rsquo;s twenty-five year vision
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </>
  )
}
