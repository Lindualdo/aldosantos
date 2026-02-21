import Link from 'next/link'

export default function FooterV4() {
    return (
        <footer className="bg-slate-950 text-slate-300 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

                    <div className="md:col-span-4 border-r border-slate-800 pr-8">
                        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                            Aldo Santos
                        </h3>
                        <p className="text-sm font-medium tracking-widest text-slate-500 uppercase mb-6">
                            Executive Consulting
                        </p>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Transformação Digital & Melhoria de Processos operacionais para médias e grandes corporações.
                        </p>
                    </div>

                    <div className="md:col-span-4 lg:pl-8">
                        <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-6">Navegação</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li>
                                <Link href="/#atuacao" className="hover:text-white transition-colors">
                                    Modelos de Atuação
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre" className="hover:text-white transition-colors">
                                    Sobre mim
                                </Link>
                            </li>
                            <li>
                                <Link href="/contato" className="hover:text-white transition-colors">
                                    Contato Direto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-6">Contato</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li>
                                <a href="mailto:contato@aldosantos.com" className="hover:text-white transition-colors">
                                    contato@aldosantos.com
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/351932786582?text=Olá, gostaria de agendar uma conversa sobre transformação digital" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    +351 932 786 582
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/lindualdo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    LinkedIn Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col items-center">
                    <p className="text-xs font-medium text-slate-500">
                        © {new Date().getFullYear()} Aldo Santos. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
