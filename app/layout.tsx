import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const siteUrl = 'https://aldosantos.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aldo Santos | Consultoria de TI, Gestão de Projetos & IA',
    template: '%s | Aldo Santos',
  },
  description: 'Consultoria de TI com mais de 20 anos liderando projetos críticos para empresas de Energia, Financeiro, Saúde e Logística. Gestão de operações, engenharia de software, automação com IA e PMO as a Service.',
  keywords: [
    'consultoria de TI',
    'gestão de projetos',
    'consultor sênior TI',
    'automação com IA',
    'arquitetura de soluções',
    'PMO as a Service',
    'engenharia de software',
    'otimização de processos',
    'base de conhecimento IA',
    'consultoria empresarial',
    'transformação digital',
    'gestão de operações TI',
  ],
  authors: [{ name: 'Aldo Santos', url: siteUrl }],
  creator: 'Aldo Santos',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Aldo Santos',
    title: 'Aldo Santos | Consultoria de TI, Gestão de Projetos & IA',
    description: 'Mais de 20 anos liderando projetos críticos. Gestão de operações $12M+, times de 40+ profissionais, +43% margem de lucro. Atendimento Brasil e Europa.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aldo Santos | Consultoria de TI, Gestão de Projetos & IA',
    description: 'Mais de 20 anos liderando projetos críticos. Gestão de operações $12M+, times de 40+ profissionais. Atendimento Brasil e Europa.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Aldo Santos',
  description: 'Consultoria de TI, Gestão de Projetos e Soluções com Inteligência Artificial.',
  url: siteUrl,
  email: 'contato@aldosantos.com',
  telephone: '+351932786582',
  areaServed: ['BR', 'PT'],
  serviceType: [
    'Consultoria de TI',
    'Gestão de Projetos',
    'PMO as a Service',
    'Arquitetura de Soluções IA',
    'Engenharia de Software',
    'Otimização de Processos',
  ],
  founder: {
    '@type': 'Person',
    name: 'Aldo Santos',
    jobTitle: 'Consultor de TI & Gestão de Projetos',
    url: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
