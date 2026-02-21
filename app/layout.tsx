import type { Metadata } from 'next'
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
    default: 'Aldo Santos | Executive Consulting & Transformação Digital',
    template: '%s | Aldo Santos',
  },
  description: 'Consultoria Executiva em Transformação Digital e Melhoria de Processos operacionais para médias e grandes corporações. Elimino custos ocultos e trago governança.',
  keywords: [
    'transformação digital',
    'otimização de processos corporativos',
    'consultoria executiva',
    'interim management',
    'delivery manager',
    'gestão de operações',
    'automação de processos corporativos',
    'remoto portugal brasil',
    'pj',
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
    siteName: 'Aldo Santos - Executive Consulting',
    title: 'Aldo Santos | Executive Consulting & Transformação Digital',
    description: 'Consultoria Executiva em Transformação Digital. Trago governança para operações caóticas e elimino gargalos.',
    images: [
      {
        url: '/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'Aldo Santos — Executive Consulting & Transformação Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aldo Santos | Transformação Digital',
    description: 'Consultoria Executiva em Transformação Digital.',
    images: ['/og-banner.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Aldo Santos - Executive Consulting',
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
