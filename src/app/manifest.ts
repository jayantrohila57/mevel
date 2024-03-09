import type { MetadataRoute } from 'next'

/**
 * Defines the manifest for the Next.js application.
 *
 * The manifest provides metadata like the app name, icons,
 * theme color, etc. to configure how the app appears across
 * different platforms like mobile devices, web, PWAs, etc.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Codemevel - Building Trust with Exceptional Web Services',
    short_name: 'Codemevel',
    description:
      'Explore the experiences of our satisfied clients and their journey with Codemevel. Trust our expertise in crafting websites.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: 'icon.svg',
        sizes: '48x48 72x72 96x96 128x128 256x256 512x512',
        type: 'image/svg+xml',
        purpose: 'any'
      }
    ]
  }
}
