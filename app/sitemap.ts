import type { MetadataRoute } from 'next'

const baseUrl = 'https://aldosantos.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/sobre', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contato', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/arquitetura-solucoes-ia', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/transformacao-processos', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/pmo-as-service', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/base-conhecimento-ia', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/consultoria-engenharia-software', priority: 0.9, changeFrequency: 'monthly' as const },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
