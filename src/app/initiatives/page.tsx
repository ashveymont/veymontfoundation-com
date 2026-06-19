import type { Metadata } from 'next'
import InitiativesClient from './pageClient'

export const metadata: Metadata = {
  title:       'Initiatives',
  description: 'Three pillars. One purpose. Nourishment, education, and healthcare — the foundations of human flourishing.',
}

export default function Initiatives() {
  return <InitiativesClient />
}
