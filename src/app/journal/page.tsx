import type { Metadata } from 'next'
import JournalClient from './pageClient'

export const metadata: Metadata = {
  title:       'Journal',
  description: 'Reflections from the work. Essays, stories, and updates from The Veymont Foundation.',
}

export default function Journal() {
  return <JournalClient />
}
