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
                Sobre Aldo Santos
              </h2>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
                A ponte definitiva entre os objetivos do C-level e a realidade da entrega técnica.
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                20 anos de experiência combinando a gestão de operações em larga escala com a capacidade técnica hands-on para otimizar processos e gerar resultado financeiro mensurável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">

            <div className="text-xl text-slate-800 leading-relaxed font-normal mb-10 mt-4 px-6 border-l-4 border-blue-500">
              <p className="mb-4">
                Comecei a programar por hobby — e essa continua sendo a minha maior paixão. A evolução para gestão e empreendedorismo foi um movimento natural da minha carreira, sempre acompanhando e antecipando as transformações do mercado de TI com o mesmo entusiasmo de quando escrevi minhas primeiras linhas de código.
              </p>
              <p className="mb-4">
                Após mais de 20 anos de experiência, ficou claro para mim que tecnologias, processos e frameworks são aceleradores — mas são as pessoas que realmente entregam resultados. Alta performance nasce de ambientes onde talentos são compreendidos, potencializados e direcionados para um propósito comum.
              </p>
              <p>
                É essa leitura estratégica do fator humano, aliada à visão técnica e de negócio, que sustenta uma liderança consistente, capaz de escalar resultados, formar times fortes e conduzir transformações reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Narrative Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">

            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">
              Atuação e Impacto Operacional
            </h2>

            <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
              Especialista em Transformação Digital e Otimização de Processos com 20+ anos conduzindo mudanças que geram resultado financeiro mensurável.
            </p>

            <p className="text-slate-600 mb-6 leading-relaxed font-light">
              Minha atuação combina três competências que raramente coexistem no mesmo profissional: gestão de projetos e operações em larga escala, análise de negócios com visão estratégica e capacidade técnica hands-on para implementar soluções — incluindo automação e IA aplicada.
            </p>

            <p className="text-slate-600 mb-12 leading-relaxed font-light">
              Sou a ponte entre C-level e times técnicos. Entro na operação, identifico gargalos, redesenho processos e lidero a implementação até o resultado aparecer na Demostração de Resultados.
            </p>

            {/* Grid for Results and Delivery Methods */}
            <div className="grid md:grid-cols-2 gap-8 mb-6 not-prose">
              {/* Resultados */}
              <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
                <h3 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-6">Resultados que ilustram minha atuação</h3>
                <ul className="space-y-4 text-slate-700 text-sm">
                  <li className="flex gap-3"><span className="text-blue-500 font-bold">→</span> Operação de R$ 12M+/ano para 6 das maiores distribuidoras de energia do Brasil</li>
                  <li className="flex gap-3"><span className="text-blue-500 font-bold">→</span> +43% de aumento de margem | –53% no volume de chamados | 100% de SLA</li>
                  <li className="flex gap-3"><span className="text-blue-500 font-bold">→</span> –32% de custos operacionais com automação e redesenho de processos</li>
                  <li className="flex gap-3"><span className="text-blue-500 font-bold">→</span> 50+ profissionais sob gestão direta e indireta</li>
                </ul>
              </div>

              {/* Como Entrego */}
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                <h3 className="text-slate-400 font-bold text-sm tracking-widest uppercase mb-6">Como entrego transformação</h3>
                <ul className="space-y-4 text-slate-300 text-sm">
                  <li className="flex gap-3"><span className="text-cyan-400 font-bold">→</span> Diagnóstico de processos e identificação de gargalos operacionais</li>
                  <li className="flex gap-3"><span className="text-cyan-400 font-bold">→</span> Gestão de Projetos e Operações de TI (AMS, PMO, delivery end-to-end)</li>
                  <li className="flex gap-3"><span className="text-cyan-400 font-bold">→</span> Análise de Negócios e Product Ownership (requisitos, roadmap, backlog)</li>
                  <li className="flex gap-3"><span className="text-cyan-400 font-bold">→</span> Redesenho e automação de processos com IA</li>
                  <li className="flex gap-3"><span className="text-cyan-400 font-bold">→</span> Pré-venda e desenho de soluções técnico-comerciais</li>
                  <li className="flex gap-3"><span className="text-cyan-400 font-bold">→</span> Estruturação e melhoria contínua (PMI, Scrum, Kanban, ITIL)</li>
                </ul>
              </div>
            </div>

            <p className="text-slate-600 font-bold text-sm uppercase tracking-widest mt-8 mb-10">
              <span className="text-slate-400 mr-2">Setores:</span> Energia, Financeiro, Saúde, Logística, Varejo, Tecnologia
            </p>

            {/* O Movimento Europa Card */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 border border-blue-800/50 p-8 md:p-10 rounded-2xl shadow-xl mt-12 not-prose">
              <h3 className="text-white font-bold text-2xl tracking-tight mb-6">
                O Movimento Europa: Maturidade e Ambição Global
              </h3>
              <p className="text-blue-100/90 leading-relaxed font-light mb-6">
                Após duas décadas controlando carteiras de mais de R$ 12 Milhões/ano e liderando exércitos de profissionais de tech no Brasil, decidi que era hora de elevar a régua do meu impacto. Em 2024, cruzei o oceano e me estabeleci em Portugal.
              </p>
              <p className="text-blue-100/90 leading-relaxed font-light m-0">
                Essa migração não é apenas uma mudança de fuso horário. É um posicionamento estratégico de quem tem fome de crescer. Atuando como consultor independente no eixo Brasil-Europa, consolidei uma postura livre de amarras corporativas: atendo líderes que precisam de urgência para salvar suas operações, aplicando padrões internacionais de eficiência operando em modelo 100% autônomo.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* LinkedIn CTA */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Histórico Completo</h2>
          <p className="text-slate-600 mb-10 leading-relaxed font-light">
            Iniciei miha carreira como programador por hobie e ainda é minha paixão. Evolui em gestão e empreendedorismo como processo natural de minha careira e tenho estado na vanguarda das mudanças do mercado de TI com o mesmo brilho nos olhos de quando comecei. E após mais de 20 anos de mercado, hoje entendo a importancia das pessoas além das tecnologias. Processos, ferramentas e tecnologias de ponta, não substitue o talento e a capacidade de entrega das pessoas e equipes. Entender isso e saber potencializar o que cada um tem de melhor é o que faz a diferença em si, é o que faz a difernça em uma liderança eficiente e de alta performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.linkedin.com/in/lindualdo/"
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
