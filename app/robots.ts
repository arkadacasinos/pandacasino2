import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://pandacasino2.vercel.app/sitemap.xml',
    host: 'https://pandacasino2.vercel.app',
  }
}
