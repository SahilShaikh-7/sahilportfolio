import type { Metadata, Viewport } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

// Initialize fonts
const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sahil Mustak Shaikh - Full Stack Developer',
  description: 'Ultra-premium futuristic full stack developer portfolio with 3D experiences and AI integration',
  generator: 'v0.app',
  applicationName: 'Sahil Portfolio',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Web Development', 'AI'],
  authors: [{ name: 'Sahil Mustak Shaikh' }],
  manifest: '/manifest.json',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Sahil Portfolio',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sahildev.com',
    siteName: 'Sahil Portfolio',
    title: 'Sahil Mustak Shaikh - Full Stack Developer',
    description: 'Ultra-premium futuristic full stack developer portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f1e' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${geist.className} font-sans antialiased bg-background text-foreground`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
