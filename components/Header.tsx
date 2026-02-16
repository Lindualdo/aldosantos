'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-heading font-bold text-primary hover:text-opacity-80 transition-colors">
            Aldo Santos
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-dark hover:text-primary transition-colors font-medium">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-dark hover:text-primary transition-colors font-medium flex items-center"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Serviços
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href="/transformacao-processos" className="block px-4 py-3 text-dark hover:bg-bg-light hover:text-primary transition-colors">
                  Transformação de Processos
                </Link>
                <Link href="/arquitetura-solucoes-ia" className="block px-4 py-3 text-dark hover:bg-bg-light hover:text-primary transition-colors">
                  Arquitetura de Soluções IA
                </Link>
                <Link href="/pmo-as-service" className="block px-4 py-3 text-dark hover:bg-bg-light hover:text-primary transition-colors">
                  PMO as a Service
                </Link>
              </div>
            </div>

            <Link href="/sobre" className="text-dark hover:text-primary transition-colors font-medium">
              Sobre
            </Link>
            <Link href="/contato" className="text-dark hover:text-primary transition-colors font-medium">
              Contato
            </Link>
            
            <a 
              href="https://wa.me/351932786582?text=Olá, gostaria de agendar uma conversa" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Agendar Conversa
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-light">
            <Link href="/" className="block py-2 text-dark hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <div className="py-2">
              <div className="font-medium text-dark mb-2">Serviços</div>
              <Link href="/transformacao-processos" className="block py-2 pl-4 text-dark hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Transformação de Processos
              </Link>
              <Link href="/arquitetura-solucoes-ia" className="block py-2 pl-4 text-dark hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Arquitetura de Soluções IA
              </Link>
              <Link href="/pmo-as-service" className="block py-2 pl-4 text-dark hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                PMO as a Service
              </Link>
            </div>
            <Link href="/sobre" className="block py-2 text-dark hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Sobre
            </Link>
            <Link href="/contato" className="block py-2 text-dark hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contato
            </Link>
            <a 
              href="https://wa.me/351932786582?text=Olá, gostaria de agendar uma conversa" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full mt-4"
            >
              Agendar Conversa
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
