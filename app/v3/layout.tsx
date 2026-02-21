import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aldo Santos | Transformação Digital & Otimização de Processos',
  description: 'Especialista em Transformação Digital. Diagnostico gargalos, redesenho processos e lidero a implementação. 20+ anos em Energia, Financeiro, Saúde e Logística.',
}

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
