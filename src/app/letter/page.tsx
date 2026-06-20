import type { Metadata } from 'next'
import LetterClient from './pageClient'

export const metadata: Metadata = {
  title:       "A Letter From The Founder",
  description: "Why this Foundation exists, in Ashan Veymont's own words — on food, education, healthcare, gratitude, and why donations are not accepted.",
}

export default function LetterPage() {
  return <LetterClient />
}
