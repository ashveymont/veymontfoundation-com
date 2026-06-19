import type { Metadata } from 'next'
import ImpactClient from './pageClient'

export const metadata: Metadata = {
  title:       'Impact',
  description: 'An honest account of where The Veymont Foundation stands today, and where it is committed to going.',
}

export default function Impact() {
  return <ImpactClient />
}
