import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://pandacasino2.vercel.app/',
      lastModified: new Date('2026-10-09'),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}
