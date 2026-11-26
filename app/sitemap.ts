import type { MetadataRoute } from 'next'
import { metaData } from './config'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().split('T')[0]
  return ['', '/about-us', '/services', '/projects'].map((route) => ({
    url: `${metaData.baseUrl}${route}`,
    lastModified,
  }))
}
