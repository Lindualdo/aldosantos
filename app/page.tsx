import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const logos = [
    { name: 'CPFL Energia', logo: '/logos/cpfl.png', w: 111, h: 81 },
    { name: 'Neoenergia', logo: '/logos/neoenergia.svg', w: 150, h: 92 },
    { name: 'EDP', logo: '/logos/edp.svg', w: 180, h: 180 },
    { name: 'Cemig', logo: '/logos/cemig.svg', w: 200, h: 60 },
    { name: 'Light', logo: '/logos/light.png', w: 200, h: 78 },
    { name: 'Banco Rendimento', logo: '/logos/banco-rendimento.png', w: 250, h: 180 },
    { name: 'JSL Logística', logo: '/logos/jsl.png', w: 400, h: 145 },
    { name: 'Qualicorp', logo: '/logos/qualicorp.png', w: 263, h: 96 },
    { name: 'Hospital Sírio Libanês', logo: '/logos/sirio-libanes.svg', w: 200, h: 100 },
    { name: 'Magazine Luiza', logo: '/logos/magazine-luiza.png', w: 600, h: 600, maxH: 'max-h-[200px]' },
    { name: 'Stefanini', logo: '/logos/stefanini.png', w: 234, h: 52 },
    { name: 'Kaffa', logo: '/logos/kaffa.png', w: 400, h: 114 },
    { name: 'Imagem Geosistemas', logo: '/logos/imagem-geosistemas.png', w: 306, h: 165 },
    { name: 'Meta IT', logo: '/logos/meta-it.svg', w: 120, h: 24 },
    { name: 'Cadmus', logo: '/logos/cadmus.png', w: 450, h: 450, maxH: 'max-h-[200px]' },
  ]

  return (
    <>
      <section className="relative bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] rounded-full bg-slate-400/5 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-24 lg:pt-20 lg:pb-32 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-blue-500 font-semibold tracking-widest text-sm uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-blue-500"></span>
              Consultoria Executiva B2B
            </h2>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              Processos falhos custam até 42% do seu orçamento operacional. <br />
              <span className="text-slate-400">Eu estanco esse sangramento.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl font-light">
              Trago governança para operações caóticas, elimino gargalos com processos limpos e IA, e devolvo a previsibilidade que a sua diretoria cobra e o mercado exige.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="https://wa.me/351932786582?text=Olá, gostaria de agendar um diagnóstico de transformação digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
              >
                Agendar Diagnóstico Inicial
              </a>
              <a
                href="#atuacao"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
              >
                Como eu atuo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">Identificação de Gargalos</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              O problema não são as pessoas.<br />
              São os processos que elas operam.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              O caos financeiro e o estresse operacional não surgem do nada. Eles se manifestam e se multiplicam exatamente nestas quatro camadas da sua organização:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-8 pb-10 rounded-2xl bg-slate-50 border border-slate-100 relative group hover:border-blue-200 transition-colors">
              <div className="text-6xl font-black text-slate-100 absolute top-6 right-8 pointer-events-none group-hover:text-blue-50 transition-colors">01</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Operação e Eficiência</h4>
              <p className="text-slate-600 leading-relaxed mb-6 font-medium relative z-10">Onde a burocracia e o trabalho braçal sangram a margem.</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-600 text-sm"><span className="text-blue-600 font-bold shrink-0">→</span> Equipe presa em tarefas massivas que deveriam ser autônomas.</li>
                <li className="flex gap-3 text-slate-600 text-sm"><span className="text-blue-600 font-bold shrink-0">→</span> O custo do backoffice cresce proporcionalmente ao número de clientes.</li>
                <li className="flex gap-3 text-slate-600 text-sm"><span className="text-blue-600 font-bold shrink-0">→</span> Falta de esteira automatizada em N1/L1, inflando chamados.</li>
              </ul>
            </div>

            <div className="p-8 pb-10 rounded-2xl bg-slate-50 border border-slate-100 relative group hover:border-blue-200 transition-colors">
              <div className="text-6xl font-black text-slate-100 absolute top-6 right-8 pointer-events-none group-hover:text-blue-50 transition-colors">02</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Governança e Delivery</h4>
              <p className="text-slate-600 leading-relaxed mb-6 font-medium relative z-10">Onde o escopo choca com a realidade da capacidade produtiva.</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-600 text-sm"><span className="text-blue-600 font-bold shrink-0">→</span> Projetos que atrasam sem explicação clara ou plano de mitigação.</li>
                <li className="flex gap-3 text-slate-600 text-sm"><span className="text-blue-600 font-bold shrink-0">→</span> Conflito entre Vendas (que promete) e Sustentação (que apaga o fogo).</li>
                <li className="flex gap-3 text-slate-600 text-sm"><span className="text-blue-600 font-bold shrink-0">→</span> Stakeholders insatisfeitos, reuniões longas e zero previsibilidade.</li>
              </ul>
            </div>

            <div className="p-8 pb-10 rounded-2xl bg-slate-50 border border-slate-100 relative group hover:border-blue-200 transition-colors">
              <div className="text-6xl font-black text-slate-100 absolute top-6 right-8 pointer-events-none group-hover:text-blue-50 transition-colors">03</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Arquitetura e Soluções</h4>
              <p className="text-slate-600 leading-relaxed mb-6 font-medium relative z-10">Onde o design do processo dita se a empresa escala ou estagna.</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-600 text-sm"><span className="text-blue-600 font-bold shrink-0">→</span> Soluções empurradas "pra ontem" com altíssimo débito técnico.</li>
                <li className="flex gap-3 text-slate-600 text-sm"><span className="text-blue-600 font-bold shrink-0">→</span> ERPs, CRMs e ITSMs trabalhando em silos e travando análises.</li>
                <li className="flex gap-3 text-slate-600 text-sm"><span className="text-blue-600 font-bold shrink-0">→</span> Negócio não fala a língua da TI e os projetos perdem o rumo.</li>
              </ul>
            </div>

            <div className="p-8 pb-10 rounded-2xl bg-slate-50 border border-slate-100 relative group hover:border-blue-200 transition-colors">
              <div className="text-6xl font-black text-slate-100 absolute top-6 right-8 pointer-events-none group-hover:text-blue-50 transition-colors">04</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Conhecimento (Dependência)</h4>
              <p className="text-slate-600 leading-relaxed mb-6 font-medium relative z-10">Onde o conhecimento não é da empresa, mas sim do "Herói".</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-600 text-sm"><span className="text-blue-600 font-bold shrink-0">→</span> A substituição de um "sênior" trava a equipe por meses.</li>
                <li className="flex gap-3 text-slate-600 text-sm"><span className="text-blue-600 font-bold shrink-0">→</span> Perguntas repetitivas consumindo as horas dos recursos mais caros.</li>
                <li className="flex gap-3 text-slate-600 text-sm"><span className="text-blue-600 font-bold shrink-0">→</span> Empresa incapaz de crescer porque o intelecto reside em planilhas cegas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-slate-300">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-balance">
          <svg className="w-12 h-12 mx-auto text-blue-600 mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8 leading-tight">
            Nenhuma ferramenta resolve problema de gestão. Eu não entrego mágicas, entrego métodos.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed font-light mb-8">
            Não chego na sua empresa com uma "varinha mágica de Inteligência Artificial" achando que isso irá salvar times desalinhados e lideranças ausentes. O que eu entrego é clareza de processos.
            <strong className="text-white font-medium"> Primeiro a gente arruma a casa. Depois, a gente escala a operação usando a tecnologia certa (Automação, RAG, IA). </strong>
          </p>
          <p className="text-lg leading-relaxed font-bold text-white">
            E para isso funcionar, precisaremos atuar a quatro mãos. A Transformação Digital de verdade requer o meu diagnóstico e o seu forte patrocínio corporativo.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">Metodologia B2B</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Como orquestramos a mudança real
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              O modelo tradicional de "diagnosticar a empresa inteira por meses" morreu. Minha abordagem é focada na dor crônica e na velocidade de resposta (Time To Value).
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full relative overflow-hidden">
              <div className="w-full h-1 bg-slate-200 absolute top-0 left-0" />
              <h4 className="font-bold text-slate-900 tracking-tight text-xl mb-4 pt-2">01. Assessment Focado</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">Prazo: 2 a 4 Semanas</p>
              <p className="text-slate-600 text-sm leading-relaxed mt-auto">Mergulho agressivo exclusivo no processo/gargalo que mais penaliza o seu P&L. Identificação exata das ineficiências e projeção do ROI para a correção.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full relative overflow-hidden">
              <div className="w-full h-1 bg-blue-400 absolute top-0 left-0" />
              <h4 className="font-bold text-slate-900 tracking-tight text-xl mb-4 pt-2">02. Design de Solução</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">Prazo: 1 a 2 Semanas</p>
              <p className="text-slate-600 text-sm leading-relaxed mt-auto">Desenho da nova arquitetura combinando visão de negócios com tecnologia robusta (seja via n8n, AI Agents ou refatoração estrutural dos processos vigentes).</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full relative overflow-hidden">
              <div className="w-full h-1 bg-blue-600 absolute top-0 left-0" />
              <h4 className="font-bold text-slate-900 tracking-tight text-xl mb-4 pt-2">03. Rollout B2B</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">Prazo: Sprint based (Contínuo)</p>
              <p className="text-slate-600 text-sm leading-relaxed mt-auto">Implementação e implantação gradual lado a lado com as lideranças operacionais. Ajuste constante, integração de sistemas e estabilização.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full relative overflow-hidden">
              <div className="w-full h-1 bg-slate-900 absolute top-0 left-0" />
              <h4 className="font-bold text-slate-900 tracking-tight text-xl mb-4 pt-2">04. Gov. e Handover</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">Prazo: On-going</p>
              <p className="text-slate-600 text-sm leading-relaxed mt-auto">Instituição de KPIs sólidos. Minha missão não estende dependências; crio a operação autônoma, capacito o time e entrego o bastão com a empresa andando.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="atuacao" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h3 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Modelos de Engajamento</h3>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">
                Como sua empresa me absorve
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Abandonei a "venda fragmentada". Não implanto apenas uma ferramenta, eu atendo ao cenário em que o momento da sua companhia exige a minha entrada:
              </p>
              <Link href="/sobre" className="font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-2">
                Descubra mais sobre mim <span className="text-lg">→</span>
              </Link>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 border border-slate-100 p-10 rounded-2xl relative">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Interim Management</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Assumo áreas inteiras (Delivery, PMO, Operações de Tecnologia) como alocado/PJ no momento de crise. A finalidade é estancar problemas severos, reestruturar processos viciados, motivar times e devolver a linha estabilizada à Diretoria após alguns meses.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-10 rounded-2xl relative">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Turnaround de Projetos (Consultoria)</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Contratações para gargalos específicos: Por exemplo, a operação de Suporte custa fortunas. Diagnostico a ineficiência do processo, implanto novas estruturas de gestão combinadas com IA (Base RAG para L1) e otimização do fluxo comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 border-t border-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
            <div>
              <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">Autoridade e Histórico</h3>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
                Operações Reais.<br />Impacto Mensurável.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-lg font-light">
                Com 20 anos na linha de frente (e gestão direta de dezenas de profissionais e orçamentos multimilionários), já passei dos desafios de papel para as entregas em estado de alta pressão.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 bg-slate-800/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm">
              <div className="p-4">
                <div className="text-4xl font-bold text-white mb-1"><span className="text-blue-500">20</span>+</div>
                <div className="text-slate-400 text-sm font-medium">Anos de Experiência</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-white mb-1">R$<span className="text-blue-500">12</span>M+</div>
                <div className="text-slate-400 text-sm font-medium">OPEX Anual Gerido</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-white mb-1">+<span className="text-blue-500">43</span>%</div>
                <div className="text-slate-400 text-sm font-medium">Aumento de Margem</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-white mb-1">-<span className="text-blue-500">42</span>%</div>
                <div className="text-slate-400 text-sm font-medium">Custos Operacionais</div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-slate-800/50">
            <h4 className="text-center text-sm font-bold tracking-widest text-slate-500 uppercase mb-12">Empresas e Projetos que moldaram minha trajetória</h4>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 items-center opacity-70 grayscale">
              {logos.map((company) => (
                <div key={company.name} className="flex items-center justify-center transition-all hover:opacity-100 hover:grayscale-0 duration-500">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={company.w}
                    height={company.h}
                    className={`max-w-full object-contain ${'maxH' in company ? company.maxH : 'h-8 max-h-8 sm:h-10 sm:max-h-10'}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
