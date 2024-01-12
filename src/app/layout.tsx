import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/theme-provider'
import '@/styles/globals.css'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'

const fontSans = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  preload: true,
  display: 'swap'
})
const title: string = 'CodeMevel - Building Trust with Exceptional Web Services'
const description: string =
  'Explore the experiences of our satisfied clients and their journey with CodeMevel. Trust our expertise in crafting websites.'

export const viewport: Viewport = {
  themeColor: '#000000',
  viewportFit: 'cover',
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width'
}
export const metadata: Metadata = {
  metadataBase: new URL('https://codemevel.com'),
  title,
  description,
  keywords: ['codemevel'],
  applicationName: 'Codemevel',
  manifest: '/manifest.webmanifest.json',
  icons: [{ rel: 'apple-touch-icon', url: '/logo.svg' }],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title,
    startupImage: ['/logo.svg']
  },
  openGraph: {
    title,
    description,
    emails: 'codemevel@gmail.com',
    siteName: 'CodeMevel',
    type: 'website',
    url: '/'
  },
  formatDetection: {
    telephone: true
  },
  twitter: {
    creator: 'codemevel',
    creatorId: '@codemevel',
    site: '/',
    card: 'summary_large_image',
    title,
    description
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans slashed-zero  antialiased ',
          fontSans.variable
        )}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
