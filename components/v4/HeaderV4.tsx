'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function HeaderV4() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-24 gap-4 min-w-0">
                    <Link href="/" className="text-2xl font-bold text-slate-900 tracking-tight shrink-0">
                        Aldo Santos
                        <span className="block text-[11px] font-medium tracking-widest text-slate-500 uppercase mt-0.5">
                            Consultor Executivo
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-10 shrink-0">
                        <Link href="/#atuacao" className="text-sm font-semibold tracking-wide text-slate-600 hover:text-slate-900 transition-colors uppercase">
                            Atuação
                        </Link>
                        <Link href="/sobre" className="text-sm font-semibold tracking-wide text-slate-600 hover:text-slate-900 transition-colors uppercase">
                            Sobre
                        </Link>
                        <Link href="/contato" className="text-sm font-semibold tracking-wide text-slate-600 hover:text-slate-900 transition-colors uppercase">
                            Contato
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden items-center shrink-0">
                        <button
                            className="text-slate-900 p-2 -mr-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Abrir menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-6 border-t border-gray-100 animate-in slide-in-from-top-4">
                        <Link href="/#atuacao" className="block py-3 text-sm font-semibold tracking-wide text-slate-600 uppercase" onClick={() => setMobileMenuOpen(false)}>
                            Atuação
                        </Link>
                        <Link href="/sobre" className="block py-3 text-sm font-semibold tracking-wide text-slate-600 uppercase" onClick={() => setMobileMenuOpen(false)}>
                            Sobre
                        </Link>
                        <Link href="/contato" className="block py-3 text-sm font-semibold tracking-wide text-slate-600 uppercase" onClick={() => setMobileMenuOpen(false)}>
                            Contato
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    )
}
