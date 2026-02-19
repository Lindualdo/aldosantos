import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
})

const siteUrl = 'https://aldosantos.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aldo Santos | Gerente Projetos Sr | IA & Automação | Remoto PT/BR',
    template: '%s | Aldo Santos',
  },
  description: 'Gerente de Projetos com 20+ anos. Especialista em gestão de operações, IA e automação. Disponível PJ remoto Portugal e Brasil.',
  keywords: [
    'gerente projetos',
    'product owner',
    'pmo',
    'ia automacao',
    'consultor ti senior',
    'remoto portugal',
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
    title: 'Aldo Santos | Gerente Projetos Sr | IA & Automação | Remoto PT/BR',
    description: 'Gerente de Projetos com 20+ anos. Especialista em gestão de operações, IA e automação. Disponível PJ remoto Portugal e Brasil.',
    images: [
      {
        url: '/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'Aldo Santos — Gerente de Projetos Sr | IA & Automação',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aldo Santos | Gerente Projetos Sr | IA & Automação | Remoto PT/BR',
    description: 'Gerente de Projetos com 20+ anos. Especialista em gestão de operações, IA e automação. Disponível PJ remoto Portugal e Brasil.',
    images: ['/og-banner.png'],
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
    <html lang="pt-BR" className={inter.variable}>
      <body className={inter.className}>
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
