import type { Metadata } from 'next'
import PhilosophyClient from './pageClient'

export const metadata: Metadata = {
  title:       'Philosophy',
  description: 'Seven essays on the ideas that form the intellectual and moral foundation of The Veymont Foundation — human dignity, gratitude, service, education, health, responsibility, and legacy.',
}

export default function Philosophy() {
  return <PhilosophyClient />
}
