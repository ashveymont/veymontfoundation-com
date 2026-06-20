import type { Metadata } from 'next'
import LegacyClient from './pageClient'

export const metadata: Metadata = {
  title:       'Legacy',
  description: 'A declaration of what The Veymont Foundation hopes to become over the next twenty-five years — community kitchens, educational access, healthcare networks, scholarships, and an institution that outlasts its founder.',
}

export default function Legacy() {
  return <LegacyClient />
}
