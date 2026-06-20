import type { Metadata } from 'next'
import PhilosophyClient from './pageClient'

export const metadata: Metadata = {
  title:       'Philosophy',
  description: 'Seven essays on human dignity, gratitude, service, education, health, responsibility, and legacy — the beliefs underneath The Veymont Foundation.',
}

export default function Philosophy() {
  return <PhilosophyClient />
}
