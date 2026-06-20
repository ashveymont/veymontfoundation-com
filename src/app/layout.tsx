import type { Metadata, Viewport } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PaperTexture from '@/components/brand/PaperTexture'

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
    images: [
      {
        url:    '/opengraph-image',
        width:  1200,
        height: 630,
        alt:    'The Veymont Foundation',
      },
    ],
  },

  twitter: {
    card:        'summary_large_image',
    title:       'The Veymont Foundation',
    description: 'What is given to us should be given forward.',
    images:      ['/opengraph-image'],
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
    icon: [
      { url: '/favicon.svg',      type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
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
        <PaperTexture />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
