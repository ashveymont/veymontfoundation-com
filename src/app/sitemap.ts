import { MetadataRoute } from 'next'
import { journalEntries } from '@/data/journal'

const BASE_URL = 'https://veymontfoundation.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/mission',
    '/philosophy',
    '/initiatives',
    '/founder',
    '/letter',
    '/legacy',
    '/impact',
    '/journal',
  ].map((route) => ({
    url:             `${BASE_URL}${route}`,
    lastModified:    new Date(),
    changeFrequency: 'monthly' as const,
    priority:        route === '' ? 1.0 : 0.8,
  }))

  const journalRoutes = journalEntries
    .filter((entry) => entry.published)
    .map((entry) => ({
      url:             `${BASE_URL}/journal/${entry.slug}`,
      lastModified:    new Date(entry.created_at),
      changeFrequency: 'yearly' as const,
      priority:        0.6,
    }))

  return [...staticRoutes, ...journalRoutes]
}
