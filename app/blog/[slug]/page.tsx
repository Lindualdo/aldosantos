import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post não encontrado | Aldo Santos Group',
    }
  }

  return {
    title: `${post.title} | Aldo Santos Group`,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-white hover:text-gray-200 mb-6 inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar ao Blog
            </Link>
            <h1 className="font-heading font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center text-white opacity-90">
              <span>{post.author}</span>
              <span className="mx-3">•</span>
              <span>{post.date}</span>
              <span className="mx-3">•</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed">
                <MDXRemote source={post.content} />
              </div>
            </article>

            {/* Author Bio */}
            <div className="mt-16 p-8 bg-blue-50 rounded-lg border-l-4 border-primary">
              <div className="flex items-start">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                  AS
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">Aldo Santos</h3>
                  <p className="text-gray-700 mb-4">
                    Consultor especializado em otimização de operações de TI com IA e automação. 
                    20+ anos liderando projetos críticos para empresas de referência em diversos setores.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com/in/lindualdo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      LinkedIn
                    </a>
                    <a href="mailto:lindualdo@hotmail.com" className="text-primary hover:underline">
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-secondary text-white rounded-lg text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">Gostou do Conteúdo?</h3>
              <p className="text-lg mb-6 opacity-95">
                Vamos conversar sobre como implementar essas estratégias na sua empresa
              </p>
              <a 
                href="https://wa.me/351932786582?text=Olá, gostaria de agendar uma consultoria gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-4"
              >
                Agendar Consultoria Gratuita
              </a>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link href="/blog" className="text-primary hover:underline text-lg font-semibold">
                ← Ver todos os artigos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
