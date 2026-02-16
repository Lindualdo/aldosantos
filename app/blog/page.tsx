import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Aldo Santos Group',
  description: 'Artigos sobre Inteligência Artificial, automação de processos, gestão de projetos e otimização de operações de TI.',
}

const blogPosts = [
  {
    slug: 'por-que-consultoria-ti-precisa-ia',
    title: 'Por Que Sua Consultoria de TI Precisa de IA (Mas Provavelmente Está Fazendo Errado)',
    excerpt: 'Entenda como IA pode transformar operações de consultoria de TI e quais erros evitar na implementação.',
    date: '15 Fev 2026',
    readingTime: '12 min'
  },
  {
    slug: 'reduzir-custos-operacionais-automacao',
    title: 'Como Reduzimos 42% dos Custos Operacionais com Automação Inteligente',
    excerpt: 'Case real de transformação de processos com automação inteligente e ROI comprovado em 90 dias.',
    date: '10 Fev 2026',
    readingTime: '15 min'
  },
  {
    slug: 'rag-vs-finetuning-base-conhecimento',
    title: 'RAG vs Fine-Tuning: Qual Usar Para Sua Base de Conhecimento Corporativa?',
    excerpt: 'Comparação técnica e prática entre RAG e Fine-tuning para base de conhecimento corporativa.',
    date: '5 Fev 2026',
    readingTime: '18 min'
  },
  {
    slug: 'projetos-ti-falham-gestao',
    title: '5 Sinais de Que Seu Projeto de TI Vai Falhar (E Como Evitar)',
    excerpt: 'Identifique problemas críticos antes que se tornem fatais. Baseado em 20 anos gerenciando projetos complexos.',
    date: '1 Fev 2026',
    readingTime: '10 min'
  },
  {
    slug: 'n8n-vs-zapier-automacao-empresarial',
    title: 'N8N vs Zapier: Qual Escolher Para Automação Empresarial?',
    excerpt: 'Análise detalhada de custos, recursos e casos de uso reais. Economize milhares em automação.',
    date: '28 Jan 2026',
    readingTime: '14 min'
  }
]

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark to-gray-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl md:text-2xl opacity-95">
              Insights práticos sobre IA, automação, gestão de projetos e operações de TI
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="card hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-gradient-to-br from-primary to-blue-600 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-500 mb-2 flex items-center justify-between">
                    <span>{post.date}</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-xl font-heading font-bold text-dark mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="text-primary font-semibold">
                    Ler mais →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
