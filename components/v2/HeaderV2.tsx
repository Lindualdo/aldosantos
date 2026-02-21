'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function HeaderV2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20 gap-2 min-w-0">
            <Link href="/" className="text-xl sm:text-2xl font-heading font-bold text-dark hover:text-primary transition-colors shrink-0">
            Aldo Santos
          </Link>

          <div className="hidden lg:flex items-center space-x-8 shrink-0">
            <Link href="/" className="text-dark hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/#servicos" className="text-dark hover:text-primary transition-colors font-medium">
              Serviços
            </Link>
            <Link href="/#resultados" className="text-dark hover:text-primary transition-colors font-medium">
              Resultados
            </Link>
            <Link href="/contato" className="text-dark hover:text-primary transition-colors font-medium">
              Contato
            </Link>
            <a
              href="https://wa.me/351932786582?text=Olá, gostaria de agendar uma conversa sobre transformação digital"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Falar Comigo
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href="https://wa.me/351932786582?text=Olá, gostaria de agendar uma conversa sobre transformação digital"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm whitespace-nowrap py-2 px-3"
            >
              Falar Comigo
            </a>
            <button
              className="text-dark p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-light">
            <Link href="/" className="block py-2 text-dark hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/#servicos" className="block py-2 text-dark hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
              Serviços
            </Link>
            <Link href="/#resultados" className="block py-2 text-dark hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
              Resultados
            </Link>
            <Link href="/contato" className="block py-2 text-dark hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contato
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
