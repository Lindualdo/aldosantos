import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderV4 from '@/components/v4/HeaderV4'
import FooterV4 from '@/components/v4/FooterV4'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
})

const siteUrl = 'https://aldosantos.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aldo Santos | Consultor Executivo & Transformação Digital',
    template: '%s | Aldo Santos'
  },
  description: 'Transformação Digital & Melhoria de Processos operacionais para médias e grandes corporações',
  keywords: [
    'Consultoria B2B',
    'Transformação Digital',
    'Melhoria de Processos',
    'Gestão Operacional',
    'Interim Management',
    'Alocação PJ em Liderança',
    'Eficiência Corporativa',
    'IA na Gestão'
  ],
  authors: [{ name: 'Aldo Santos' }],
  creator: 'Aldo Santos',
  publisher: 'Aldo Santos',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://aldosantos.com.br',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://aldosantos.com.br',
    siteName: 'Aldo Santos - Consultor Executivo',
    title: 'Aldo Santos | Consultor Executivo & Transformação Digital',
    description: 'Transformação Digital & Melhoria de Processos operacionais para médias e grandes corporações.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aldo Santos — Consultor Executivo & Transformação Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aldo Santos | Consultor Executivo',
    description: 'Transformação Digital & Melhoria de Processos operacionais para médias e grandes corporações.',
    creator: '@aldosantos', // Substituir pelo seu @ se houver
    images: ['/og-image.png'],
  },
  verification: {
    google: 'adicione-seu-codigo-aqui', // Para Google Search Console
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a', // slate-900
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Aldo Santos - Consultor Executivo',
  description: 'Consultoria executiva em Transformação Digital e Operações para médias e grandes corporações.',
  url: siteUrl,
  email: 'contato@aldosantos.com',
  telephone: '+351932786582',
  areaServed: ['BR', 'PT'],
  serviceType: [
    'Transformação Digital Corporativa',
    'Melhoria de Processos Operacionais',
    'Interim Management',
    'Governança e Delivery',
  ],
  founder: {
    '@type': 'Person',
    name: 'Aldo Santos',
    jobTitle: 'Consultor Executivo em Transformação Digital',
    url: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HeaderV4 />
        <main className="min-h-screen">
          {children}
        </main>
        <FooterV4 />
      </body>
    </html>
  )
}
