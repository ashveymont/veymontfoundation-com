import type { Metadata } from 'next'
import MissionClient from './pageClient'

export const metadata: Metadata = {
  title:       'Mission',
  description: 'The Veymont Foundation exists to improve human dignity through nourishment, education, and healthcare — not out of obligation, but out of gratitude.',
}

export default function Mission() {
  return <MissionClient />
}
