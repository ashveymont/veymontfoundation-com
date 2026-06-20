import type { Metadata } from 'next'
import LegacyClient from './pageClient'

export const metadata: Metadata = {
  title:       'The Road Ahead',
  description: 'What The Veymont Foundation hopes to become over the next twenty-five years — community kitchens, educational access, healthcare networks, scholarships, and long-term stewardship.',
}

export default function Legacy() {
  return <LegacyClient />
}
