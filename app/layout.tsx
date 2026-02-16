import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Aldo Santos | Consultoria de TI & Gestão de Projetos',
  description: 'Consultor de TI com 20 anos liderando projetos críticos. Especialista em gestão de operações, arquitetura de soluções IA e automação para empresas médias e grandes.',
  keywords: 'consultoria ti, gestão projetos, consultor senior, automação ia, arquitetura soluções',
  authors: [{ name: 'Aldo Santos' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://aldosantos.group',
    siteName: 'Aldo Santos Group',
    title: 'Aldo Santos Group | Consultoria Especializada em IA e Automação',
    description: 'Consultoria especializada em otimização de operações de TI com Inteligência Artificial.',
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
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
