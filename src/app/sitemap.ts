import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bzz.ma'
  
  const pages = [
    '',
    '/services',
    '/process',
    '/contact',
    '/booking',
    '/admin'
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add all pages
  pages.forEach(page => {
    sitemap.push({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' : 'monthly',
      priority: page === '' ? 1 : 0.8,
    })
  })

  return sitemap
}
