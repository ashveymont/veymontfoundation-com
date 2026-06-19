import type { Metadata } from 'next'
import FounderClient from './pageClient'

export const metadata: Metadata = {
  title:       'Founder',
  description: 'Ashan Veymont founded The Veymont Foundation on the belief that what is given to us should be given forward.',
}

export default function Founder() {
  return <FounderClient />
}
