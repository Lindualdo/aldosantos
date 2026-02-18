import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato — Fale com Aldo Santos',
  description: 'Entre em contato para consultoria de TI, gestão de projetos ou soluções com IA. Atendimento em Portugal e Brasil via WhatsApp e e-mail.',
  keywords: ['contato consultoria TI', 'agendar consultoria', 'Aldo Santos contato', 'WhatsApp consultoria'],
}

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return children
}
