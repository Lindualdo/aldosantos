import Link from 'next/link'
import Image from 'next/image'

export default function Sobre() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section - True Split-Screen Architecture */}
      <section className="relative bg-slate-900 border-b border-slate-800 overflow-hidden flex flex-col lg:block lg:min-h-[85vh]">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] rounded-full bg-slate-400/5 blur-[100px]" />
        </div>

        {/* RIGHT: Photo (Full height on Desktop, 400px on Mobile) */}
        <div className="w-full h-[400px] sm:h-[500px] lg:h-auto lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-1/2 relative z-0 order-1 lg:order-none overflow-hidden">
          <Image
            src="/images/aldo-hero.jpg"
            alt="Aldo Santos - Consultor Executivo"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Desktop Gradient Overlay: Left side fade to blend with dark bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent hidden lg:block" />

          {/* Mobile Gradient Overlay: Top and Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900 block lg:hidden" />
        </div>

        {/* LEFT: Text Container */}
        <div className="w-full relative z-10 flex items-center lg:min-h-[85vh] order-2 lg:order-none">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
            <div className="max-w-2xl lg:w-[55%] lg:pr-12">
              <h2 className="text-blue-500 font-semibold tracking-widest text-sm uppercase mb-6 flex items-center gap-4">
                A Ponte entre Negócio e Engenharia
              </h2>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
                20 anos conduzindo mudanças que geram resultado no P&L.
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                Sou a ponte definitiva entre as expectativas do C-level e a realidade da execução técnica — eliminando o desgaste operacional no meio do caminho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">

            <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Uma anomalia de mercado: Visão B2B e Mão na Massa</h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-light">
              Minha atuação combina três competências que raramente coexistem no mesmo profissional: a cadência de <strong>gestão de projetos em larga escala</strong>, a visão cirúrgica de um <strong>analista de negócios</strong>, e a <strong>capacidade técnica raiz (hands-on)</strong> para implantar automações inteligentes.
            </p>
            <p className="text-slate-600 mb-12 leading-relaxed font-light">
              Não sou o consultor que deixa um belo PowerPoint na sua mesa e vai embora. Eu entro na operação, diagnostico os ralos por onde o seu faturamento escorre, redesenho os gargalos, orquestro o time (ou trago a IA para substituir o braçal) e gerencio a entrega até que o resultado final apareça como margem líquida.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">O Movimento Europa: Maturidade e Ambição Global</h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-light">
              Após duas décadas controlando carteiras de mais de <strong>R$ 12 Milhões/ano</strong> e liderando exércitos de profissionais de tech no Brasil, decidi que era hora de elevar a régua do meu impacto. Em 2024, cruzei o oceano e me estabeleci em Portugal.
            </p>
            <p className="text-slate-600 mb-12 leading-relaxed font-light">
              Essa migração não é apenas uma mudança de fuso horário. É um posicionamento estratégico de quem tem fome de crescer. Atuando como consultor independente no eixo Brasil-Europa, consolidei uma postura livre de amarras corporativas: atendo líderes que precisam de urgência para salvar suas operações, aplicando padrões internacionais de eficiência operando em modelo 100% autônomo.
            </p>

          </div>
        </div>
      </section>

      {/* LinkedIn CTA */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Histórico Completo</h2>
          <p className="text-slate-600 mb-10 leading-relaxed font-light">
            Geri diretamente projetos imensos para Grupo Imagem, Vincit, Stefanini, CPFL e Neoenergia. Todos os detalhes técnicos, anos e stack funcional estão abertos no meu perfil profissional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.linkedin.com/in/aldosantos/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Ler Perfil no LinkedIn
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
            >
              Falar sobre um Projeto
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
