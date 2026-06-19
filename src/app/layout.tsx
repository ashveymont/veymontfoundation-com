import type { Metadata, Viewport } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://veymontfoundation.org'),

  title: {
    default:  'The Veymont Foundation',
    template: '%s — The Veymont Foundation',
  },

  description: 'A privately funded humanitarian foundation improving human dignity through nourishment, education, and healthcare.',

  keywords: [
    'Veymont Foundation',
    'humanitarian foundation',
    'private foundation',
    'nourishment',
    'education',
    'healthcare',
    'human dignity',
    'Ashan Veymont',
  ],

  authors: [{ name: 'The Veymont Foundation' }],

  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://veymontfoundation.org',
    siteName:    'The Veymont Foundation',
    title:       'The Veymont Foundation',
    description: 'What is given to us should be given forward.',
  },

  twitter: {
    card:        'summary_large_image',
    title:       'The Veymont Foundation',
    description: 'What is given to us should be given forward.',
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },

  icons: {
    icon:  '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  themeColor:   '#24342A',
  width:        'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
