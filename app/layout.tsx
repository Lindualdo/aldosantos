import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderV2 from '@/components/v2/HeaderV2'
import FooterV2 from '@/components/v2/FooterV2'

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
    default: 'Aldo Santos | Transformação Digital & Otimização de Processos | Remoto PT/BR',
    template: '%s | Aldo Santos',
  },
  description: 'Especialista em Transformação Digital e Otimização de Processos com 20+ anos. Gestão de projetos, automação e IA aplicada ao negócio. Remoto PJ Portugal e Brasil.',
  keywords: [
    'transformação digital',
    'otimização de processos',
    'delivery manager',
    'gerente projetos senior',
    'automação processos',
    'ia aplicada negócio',
    'consultor transformação digital',
    'remoto portugal brasil',
    'pj remoto',
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
    title: 'Aldo Santos | Transformação Digital & Otimização de Processos',
    description: 'Especialista em Transformação Digital com 20+ anos conduzindo mudanças que geram resultado financeiro mensurável.',
    images: [
      {
        url: '/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'Aldo Santos — Transformação Digital & Otimização de Processos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aldo Santos | Transformação Digital & Otimização de Processos',
    description: 'Especialista em Transformação Digital com 20+ anos conduzindo mudanças que geram resultado financeiro mensurável.',
    images: ['/og-banner.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Aldo Santos',
  description: 'Especialista em Transformação Digital e Otimização de Processos. Consultoria em gestão de projetos, automação e IA aplicada ao negócio.',
  url: siteUrl,
  email: 'contato@aldosantos.com',
  telephone: '+351932786582',
  areaServed: ['BR', 'PT'],
  serviceType: [
    'Transformação Digital',
    'Otimização de Processos',
    'Gestão de Projetos',
    'PMO as a Service',
    'Consultoria em Engenharia de Software',
    'Automação com IA',
  ],
  founder: {
    '@type': 'Person',
    name: 'Aldo Santos',
    jobTitle: 'Especialista em Transformação Digital & Otimização de Processos',
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
        <HeaderV2 />
        <main className="min-h-screen">
          {children}
        </main>
        <FooterV2 />
      </body>
    </html>
  )
}
