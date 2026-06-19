import type { Metadata } from 'next'
import HomeClient from './pageClient'

export const metadata: Metadata = {
  title:       'The Veymont Foundation',
  description: 'A privately funded humanitarian foundation improving human dignity through nourishment, education, and healthcare. Founded on gratitude.',
}

export default function Home() {
  return <HomeClient />
}
