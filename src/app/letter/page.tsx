import type { Metadata } from 'next'
import LetterClient from './pageClient'

export const metadata: Metadata = {
  title:       "A Letter From The Founder",
  description: "Ashan Veymont writes directly to the reader about why The Veymont Foundation exists — the gratitude that drives it, and what it means to give forward what you have been given.",
}

export default function LetterPage() {
  return <LetterClient />
}
