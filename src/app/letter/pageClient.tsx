'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/motion/RevealOnScroll'
import VMonogram from '@/components/brand/VMonogram'
import LetterSignature from '@/components/letter/LetterSignature'

const letterParagraphs = [
  "I want to tell you why this exists, in my own words, without anyone else's language shaping it first.",
  "I was given things I did not earn. A home with food in it. Parents who could afford school fees without agonizing over them. A doctor's number we could call without thinking twice about the cost. I did not choose any of this. I was simply born into it, the way some people are born into hunger, or into illness without access to treatment, or into a school system that has nothing left to give them.",
  "For a long time I thought of this as luck, and left it there. Luck is a comfortable word. It asks nothing of you. You can acknowledge it and move on with your life unchanged.",
  "Somewhere along the way — I cannot point to the exact day — luck stopped feeling like a sufficient word. It started feeling like a debt.",
  "I remember the specific moment this stopped being theoretical for me, even if I cannot remember the exact date. I was talking to someone — briefly, the way you talk to someone you will likely never see again — who mentioned, almost as an aside, that they had stopped going to school at fourteen because their family needed them working instead. They said it without self-pity, the way you'd mention the weather. I remember being unable to think of anything to say back, because the honest thing to say was that I had never once, at any age, had to make that calculation. School had simply continued. No one in my family had ever needed me to choose between it and anything else. I had not earned that. I had just been born somewhere the choice never came up.",
  "I do not mean that in a guilty way. I am not interested in guilt, and I do not think guilt produces anything good in the world. I mean it the way you would feel if someone handed you something valuable and walked away before you could thank them. The only way to actually thank them, in their absence, is to hand it to someone else.",
  "That is what this Foundation is. It is the closest thing I have found to saying thank you to a debt I can never repay directly.",
  "Food matters because I have never had to wonder where my next meal was coming from, and I have met many people who think about little else. A meal is not just calories. It is an hour of someone's day where survival is not the only question on their mind. I think that hour matters more than people who have never lacked it tend to realize.",
  "Education matters because mine is the reason I can write this letter at all — the reason I can build businesses, solve problems, think in the way I think. I did not build that capacity myself. Teachers built it. Books built it. An environment that expected something of me built it. I have met people with sharper minds than mine who never had that environment, and the only difference between us is access. That difference should not be allowed to decide what someone becomes.",
  "Healthcare matters because in 2022 I was sick enough to understand, for the first time, what it actually means to not know if you will recover. I had doctors. I had medication. I had people checking on me. I remember thinking, somewhere in the worst of it, about the people going through the exact same illness without any of that. I made myself a promise in that period, and this Foundation's health work is me trying to keep it.",
  "This Foundation does not accept donations, and I want to explain why, because I think it matters more than people assume. The moment an organization depends on outside money, it starts — even with the best intentions — answering to that money. It shapes language to attract donors. It shapes programs to satisfy funders. It starts, slowly, to serve its own survival instead of the people it claims to serve. I did not want to build something that would have to do that. So everything here is funded by the businesses I build and run. If those businesses succeed, the Foundation grows. If they do not, the Foundation stays small. That is the entire mechanism, and I think its simplicity is its integrity.",
  "Underneath all of this is gratitude, and I want to be precise about what I mean by that word, because it gets used loosely.",
  "Gratitude, to me, is not a feeling you have and then move past. It is a debt you carry and try to repay forward, for as long as you are able to. It is not soft. It is not passive. It asks something of you every day that you have more than you need.",
  "I do not think success means very much if it only changes one life — mine. I think it only starts to mean something the moment it is shared with people who never had the chance to build it themselves.",
  "This Foundation will not solve everything. It will not end hunger, or fix every broken healthcare system, or guarantee every child an education. I am not naive about scale. But I would rather do something small and real than nothing large and theoretical. A meal handed to one person today is not a metaphor. It is a meal.",
  "If you take one thing from this letter, let it be this: what is given to you should be given forward. Not because you owe the world an apology for having it. Because passing it forward is the only way gratitude becomes anything more than a feeling you had once and forgot.",
  "Thank you for reading this far. I mean that.",
]

export default function LetterClient() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          minHeight:      '50vh',
          background:     '#F6F2EA',
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          justifyContent: 'center',
          padding:        '160px 60px 80px',
          textAlign:      'center',
        }}
        className="letter-hero"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: '24px' }}
        >
          <VMonogram size={28} color="var(--clay)" opacity={0.35} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily:    "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight:    300,
            fontSize:      '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color:         'var(--clay)',
            marginBottom:  '28px',
          }}
        >
          A Letter From The Founder
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontStyle:  'italic',
            fontSize:   'clamp(32px, 4.5vw, 56px)',
            color:      'var(--forest)',
            lineHeight: 1.2,
            maxWidth:   '700px',
            margin:     0,
          }}
          className="letter-h1"
        >
          Why this Foundation exists.
        </motion.h1>
      </section>

      {/* ── Letter Body ── */}
      <div
        style={{
          maxWidth: '640px',
          margin:   '0 auto',
          padding:  '0 60px 160px',
        }}
        className="letter-body"
      >
        {/* Salutation */}
        <RevealOnScroll>
          <p
            style={{
              fontFamily:   "'Cormorant Garamond', Georgia, serif",
              fontWeight:   400,
              fontStyle:    'italic',
              fontSize:     '24px',
              color:        'var(--forest)',
              marginBottom: '48px',
              marginTop:    '80px',
            }}
          >
            To whoever is reading this,
          </p>
        </RevealOnScroll>

        {/* Paragraphs */}
        {letterParagraphs.map((para, i) => (
          <RevealOnScroll key={i} delay={Math.min(i * 0.06, 1.2)}>
            <p
              style={{
                fontFamily:   "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight:   300,
                fontSize:     '18px',
                lineHeight:   2.0,
                color:        '#2C2C2C',
                opacity:      0.88,
                marginBottom: '32px',
              }}
              className="letter-para"
            >
              {para}
            </p>
          </RevealOnScroll>
        ))}

        {/* Signature */}
        <LetterSignature />

        {/* Closing navigation */}
        <RevealOnScroll>
          <div
            style={{
              borderTop:  '1px solid var(--sand)',
              paddingTop: '48px',
              marginTop:  '80px',
            }}
          >
            <p className="eyebrow" style={{ marginBottom: '24px' }}>
              Continue
            </p>
            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}
              className="letter-nav"
            >
              <Link href="/founder" className="text-link">
                Read his story
              </Link>
              <Link href="/philosophy" className="text-link">
                Our philosophy
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </>
  )
}
