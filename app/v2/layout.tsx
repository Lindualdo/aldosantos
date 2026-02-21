import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aldo Santos | Transformação Digital & Otimização de Processos | Remoto PT/BR',
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
  openGraph: {
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
}

/**
 * Para preview: a rota /v2 usa o root layout (com Header/Footer v1).
 * O conteúdo da página é todo v2.
 * 
 * Para publicar em produção:
 * 1. Copiar conteúdo de app/v2/page.tsx para app/page.tsx
 * 2. Substituir Header/Footer no app/layout.tsx pelos v2 (components/v2/)
 * 3. Atualizar metadata no app/layout.tsx com os valores acima
 * 4. Remover pasta app/v2/
 */
export default function V2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
