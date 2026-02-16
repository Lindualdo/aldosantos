import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Aldo Santos Group | Consultoria de TI & Gestão de Projetos | Especialista em IA',
  description: 'Consultoria sênior de TI com 20+ anos em gestão de projetos críticos. Especialista em IA, automação e transformação de operações para empresas de tecnologia. Capacidade sob demanda sem expandir headcount.',
  keywords: 'consultoria TI, gestão de projetos, PMO, consultoria sênior, inteligência artificial, automação de processos, capacidade sob demanda',
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
