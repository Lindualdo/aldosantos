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
              Delivery | Operações (AMS) | Transformação Digital
            </h2>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              Processos otimizados podem salvar até 42% do seu custo operacional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Vamos construir isso juntos?</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl font-light">
              Simplificação e automação de processos para escalar sua operação, reduzir custos invisíveis e devolver a previsibilidade que a sua empresa exige.
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
            <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">Problemas Frequentes</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Você reconhece algum desses cenários?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Já ajudei a solucionar desafios exatos como estes liderando times em diversas operações. Se você vive alguns deles, nós podemos trabalhar juntos para estancar o problema e otimizar seus processos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Camada 1 */}
            <div className="p-8 pb-10 rounded-2xl bg-slate-50 border border-slate-100 relative group transition-colors hover:border-slate-300 shadow-sm">
              <div className="text-red-500 mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-6 relative z-10">1. Operação e Eficiência</h4>
              <ul className="space-y-3 relative z-10">
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Reuniões apenas para marcar outras reuniões</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Time sobrecarregado focado em tarefas manuais</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Integração humana: dados copiados entre sistemas</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Expansão exige contratar analistas de forma linear</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Fluxo travado na aprovação de uma única pessoa</li>
              </ul>
            </div>

            {/* Camada 2 */}
            <div className="p-8 pb-10 rounded-2xl bg-slate-50 border border-slate-100 relative group transition-colors hover:border-slate-300 shadow-sm">
              <div className="text-red-500 mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-6 relative z-10">2. Delivery e operações (AMS)</h4>
              <ul className="space-y-3 relative z-10">
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Projeto estratégico está travado há vários meses</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Líderes atuam no "feeling" sem cadência ou dados</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> A área comercial vende e o Delivery não entrega</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Escopo monstro que destrói o orçamento original</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Reuniões de comitê pesadas e clientes na defensiva</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> SLA estourando, satifasção do cliente caindo, faturamentos travados</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Melhorias e lições não são compartilhadas entre os times (produto, delivery e operações)</li>
              </ul>
            </div>

            {/* Camada 3 */}
            <div className="p-8 pb-10 rounded-2xl bg-slate-50 border border-slate-100 relative group transition-colors hover:border-slate-300 shadow-sm">
              <div className="text-red-500 mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-6 relative z-10">3. Engenharia e Produtos</h4>
              <ul className="space-y-3 relative z-10">
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Cliente pede A, time entende B, engenharia faz C</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Sistemas Frankenstein: impossível dar manutenção</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Soluções vendidas sem validação de viabilidade</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Tecnologia e negócios não falam a mesma língua</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Atualização em produção vira uma roleta russa</li>
              </ul>
            </div>

            {/* Camada 4 */}
            <div className="p-8 pb-10 rounded-2xl bg-slate-50 border border-slate-100 relative group transition-colors hover:border-slate-300 shadow-sm">
              <div className="text-red-500 mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-6 relative z-10">4. Gestão do Conhecimento</h4>
              <ul className="space-y-3 relative z-10">
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Sênior sai levando a inteligência técnica com ele</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Cliente precisando reexplicar seu negócio a cada troca de equipe</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Novos analistas travados no onboarding sem base de conhecimento</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Dúvidas repetitivas estrangulam arquitetos seniores</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Técnicos caros que acabam deslocados para suporte em pré-vendas</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> O mesmo erro sistêmico ocorre novamente meses depois</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Regras, LGPD, processos e compliance espalhados em pastas, planilhas e sistemas</li>
              </ul>
            </div>

            {/* Camada 5 */}
            <div className="p-8 pb-10 rounded-2xl bg-slate-50 border border-slate-100 relative group transition-colors hover:border-slate-300 shadow-sm">
              <div className="text-red-500 mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-6 relative z-10">5. Vendas vs Realidade</h4>
              <ul className="space-y-3 relative z-10">
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> O comercial vende e "passa pra frente" sem transição efetiva para Delivery</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Escopo subdimensionando riscos e prazos originais</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Propostas hyper customizadas impedem ganho final em escala</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Promessas que a equipe de engenharia não pode sustentar</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Comercial vendendo sem apoio ou insumo tecnológico</li>
              </ul>
            </div>

            {/* Camada 6 */}
            <div className="p-8 pb-10 rounded-2xl bg-slate-50 border border-slate-100 relative group transition-colors hover:border-slate-300 shadow-sm">
              <div className="text-red-500 mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-6 relative z-10">6. A Guerra de Interesses</h4>
              <ul className="space-y-3 relative z-10">
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Setores comprando sistemas avulsos pois a TI é lenta</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Terceirizados sem fiscalização técnica torrando seu caixa</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> O jogo do empurra: sistema cai e nenhum fornecedor assume</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Projetos de alto impacto vetados por egos departamentais</li>
                <li className="flex gap-3 text-slate-600 text-sm font-medium"><span className="text-red-600 font-bold shrink-0">→</span> Empresa se tornando refém de uma única produtora</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">Como eu posso ajudar a otimizar a sua operação</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              A teoria aceita tudo, o campo de batalha não.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Após mais de 20 anos liderando no campo de batalha, aprendi a transformar operações que sangravam dinheiro em máquinas eficientes — menos retrabalho, mais margem, clientes mais satisfeitos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Passo 01 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full min-h-[260px] relative overflow-hidden group hover:border-blue-200 transition-all duration-300 hover:shadow-md">
              <div className="w-full h-1 bg-slate-200 absolute top-0 left-0 group-hover:bg-blue-300 transition-colors" />
              <div className="min-h-[4rem] mb-4 pt-2">
                <h4 className="font-bold text-slate-900 tracking-tight text-xl">01. Diagnóstico e Priorização</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">Mergulho agressivo na operação com apoio forte da alta gestão. Identifico onde a dor financeira ou gargalo é maior e priorizo o ataque utilizando meus próprios métodos e ferramentas de assessment.</p>
            </div>

            {/* Passo 02 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full min-h-[260px] relative overflow-hidden group hover:border-blue-200 transition-all duration-300 hover:shadow-md">
              <div className="w-full h-1 bg-slate-300 absolute top-0 left-0 group-hover:bg-blue-400 transition-colors" />
              <div className="min-h-[4rem] mb-4 pt-2">
                <h4 className="font-bold text-slate-900 tracking-tight text-xl">02. Simplificação e Redesenho do Processo</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">Processos ineficientes automatizados só aceleram os problemas. Eu uso IA e automação de forma avançada, aplicando as melhores práticas para garantir resultados sem desperdício de recursos.</p>
            </div>

            {/* Passo 03 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full min-h-[260px] relative overflow-hidden group hover:border-blue-200 transition-all duration-300 hover:shadow-md">
              <div className="w-full h-1 bg-blue-400 absolute top-0 left-0 group-hover:bg-blue-500 transition-colors" />
              <div className="min-h-[4rem] mb-4 pt-2">
                <h4 className="font-bold text-slate-900 tracking-tight text-xl">03. Piloto e Automação AI</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">Aplicação do novo fluxo em um projeto piloto seguro. Aqui entra a tecnologia pesada: criamos bancos de dados em RAG para base de conhecimento e montamos o seu ecossistema.</p>
            </div>

            {/* Passo 04 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full min-h-[260px] relative overflow-hidden group hover:border-blue-200 transition-all duration-300 hover:shadow-md">
              <div className="w-full h-1 bg-blue-500 absolute top-0 left-0 group-hover:bg-blue-600 transition-colors" />
              <div className="min-h-[4rem] mb-4 pt-2">
                <h4 className="font-bold text-slate-900 tracking-tight text-xl">04. Rollout em Produção</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">Os resultados estão coerentes com o esperado? Institucionalizamos, monitoramos e ajustamos sempre que necessário.</p>
            </div>

            {/* Passo 05 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full min-h-[260px] relative overflow-hidden group hover:border-blue-200 transition-all duration-300 hover:shadow-md">
              <div className="w-full h-1 bg-blue-600 absolute top-0 left-0 group-hover:bg-blue-700 transition-colors" />
              <div className="min-h-[4rem] mb-4 pt-2">
                <h4 className="font-bold text-slate-900 tracking-tight text-xl">05. Treinamento e Operação</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">Eu saio, a operação autônoma fica. A equipe é treinada, e deixo um Chatbot Inteligente com base de conhecimento sobre cada processo para dar suporte em tempo integral</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">Resultados que aparecem no financeiro</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Operações que liderei nos últimos anos nas maiores empresas do setor elétrico
            </h2>
            <p className="text-slate-400">
              Números que o seu CFO vai querer ver.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">20+</div>
              <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider font-bold">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">R$12M+</div>
              <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider font-bold">Operação Anual Gerenciada</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">50+</div>
              <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider font-bold">Profissionais Liderados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">+43%</div>
              <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider font-bold">Aumento de Margem</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">-32%</div>
              <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider font-bold">Custos Operacionais</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">100%</div>
              <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider font-bold">SLA Cumprido</div>
            </div>
          </div>


        </div>
      </section>

      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">CLIENTES ATENDIDOS</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Operações que não podem parar. Empresas que só crescem
            </h2>
            <p className="text-slate-600">
              Projetos entregues para algumas das maiores operações do Brasil — com consistência, prazo e resultado
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {logos.map((company) => (
              <div
                key={company.name}
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-center aspect-square transition-all hover:shadow-md hover:border-blue-100 group"
              >
                <div className="relative w-full h-full flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={company.w}
                    height={company.h}
                    className="max-w-[70%] max-h-[70%] object-contain"
                  />
                </div>
              </div>
            ))}
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
                <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Alocação PJ (Liderança Hands-on)</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Gerente de Projetos, Operações ou Delivery. B2B fixo para assumir times, gerir o portfólio técnico e garantir que o que o cliente pediu é o que a engenharia entrega. Liderança técnica que sabe cobrar porque sabe fazer.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-10 rounded-2xl relative">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Consultoria de Transformação Digital</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Projetos de escopo fechado para resolver gargalos específicos. Diagnóstico de ineficiências, implantação de Automação/IA (n8n, RAG, Python) e redesenho de processos críticos. Entrega com Time-To-Value acelerado e ROI projetado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">Dúvidas Frequentes</h3>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">Perguntas sobre a consultoria</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Você assume times já existentes (PJ)?</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">Sim. Atuo como liderança B2B para organizar a casa, metodologias e entregas de equipes internas ou terceirizadas já contratadas.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Você desenvolve as automações ou apenas dá conselhos?</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">Desenvolvo hands-on. Minha entrega vai além do diagnóstico; eu configuro as IAs, as esteiras de n8n e os bancos RAG para que a solução rode na prática.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Você atende quais tipos de indústrias?</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">Meus métodos são agnósticos ao setor. Já transformei processos em Energia, Bancário, Saúde e Logística, focando na lógica operacional.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-3xl p-10 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M13 14h-2V9h2v5zm0 4h-2v-2h2v2zM1 21h22L12 2 1 21z" /></svg>
              </div>
              <h3 className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-6">Custo de Oportunidade</h3>
              <h2 className="text-3xl font-bold mb-6 italic leading-tight">"Quanto custa para a sua empresa esperar mais 12 meses para arrumar os processos?"</h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Todo mês com a operação caótica é um percentual da sua margem jogado no lixo. A Transformação Digital não é um luxo, é sobrevivência de EBITDA.
              </p>
              <a
                href="https://wa.me/351932786582?text=Olá, gostaria de agendar um diagnóstico de transformação digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 w-fit"
              >
                Garantir Diagnóstico Agora
              </a>
            </div>
          </div>
        </div>
      </section>



    </>
  )
}
