import HeroV2 from '@/components/v2/HeroV2'
import CTASectionV2 from '@/components/v2/CTASectionV2'

export default function HomeV3() {
  return (
    <>
      <HeroV2
        subtitle="Transformação Digital & Otimização de Processos"
        title="Processos falhos custam até 42% do seu orçamento operacional."
        highlight="Eu elimino esse custo."
        description="Descubro onde sua operação sangra dinheiro, redesenho processos e lidero a implementação até o ganho aparecer em custos e margem."
        primaryCTA={{
          text: "Agendar Diagnóstico",
          href: "https://wa.me/351932786582?text=Olá, gostaria de agendar um diagnóstico de transformação digital"
        }}
        secondaryCTA={{
          text: "Ver Resultados",
          href: "#resultados"
        }}
      />

      {/* DORES - Organizadas por camada */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase text-center">Sua empresa reconhece alguma dessas dores?</p>
          <h2 className="text-4xl font-heading font-bold text-center mb-2">
            Processos falhos aparecem em 4 camadas
          </h2>
          <p className="text-center text-xl font-heading font-semibold text-dark mb-10 max-w-2xl mx-auto">
            O problema não são as pessoas. São os processos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Camada 1: Processos Operacionais */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#e74c3c] rounded-lg flex items-center justify-center text-white font-bold shrink-0">1</div>
                <h3 className="text-xl font-heading font-bold text-gray-900">Processos Operacionais</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#e74c3c] mt-1 shrink-0">▸</span>
                  <span>Equipe gasta <strong>60% do tempo</strong> em tarefas manuais que deveriam estar automatizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e74c3c] mt-1 shrink-0">▸</span>
                  <span>Retrabalho constante: cada tarefa é feita 2-3 vezes até ficar certa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e74c3c] mt-1 shrink-0">▸</span>
                  <span>Sistemas que não conversam entre si — ERP, CRM, ITSM em silos</span>
                </li>
              </ul>
            </div>

            {/* Camada 2: Gestão e Delivery */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#27ae60] rounded-lg flex items-center justify-center text-white font-bold shrink-0">2</div>
                <h3 className="text-xl font-heading font-bold text-gray-900">Gestão e Delivery</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#27ae60] mt-1 shrink-0">▸</span>
                  <span>Projetos que atrasam sem explicação — escopo cresce, prazo estoura, margem desaparece</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#27ae60] mt-1 shrink-0">▸</span>
                  <span>Sem métricas confiáveis: ninguém sabe o status real até estourar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#27ae60] mt-1 shrink-0">▸</span>
                  <span>Stakeholders insatisfeitos cobrando resultado que nunca chega</span>
                </li>
              </ul>
            </div>

            {/* Camada 3: Engenharia de Software */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#2c3e50] rounded-lg flex items-center justify-center text-white font-bold shrink-0">3</div>
                <h3 className="text-xl font-heading font-bold text-gray-900">Engenharia de Software</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2c3e50] mt-1 shrink-0">▸</span>
                  <span>Esteira de desenvolvimento caótica — cada projeto funciona de um jeito</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2c3e50] mt-1 shrink-0">▸</span>
                  <span>Requisitos mal levantados: cliente pediu A, time entregou C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2c3e50] mt-1 shrink-0">▸</span>
                  <span>Time técnico bom mas sem processo, padrão ou direcionamento claro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2c3e50] mt-1 shrink-0">▸</span>
                  <span>Negócio e tech definem soluções e escopo na correria — sem arquitetura de soluções para apoiar</span>
                </li>
              </ul>
            </div>

            {/* Camada 4: Conhecimento */}
            <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#8b5cf6] rounded-lg flex items-center justify-center text-white font-bold shrink-0">4</div>
                <h3 className="text-xl font-heading font-bold text-gray-900">Conhecimento e Autonomia</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-1 shrink-0">▸</span>
                  <span>Quando o sênior sai, leva anos de conhecimento crítico embora</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-1 shrink-0">▸</span>
                  <span>Onboarding de novos profissionais leva meses porque nada está documentado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-1 shrink-0">▸</span>
                  <span>Mesmas perguntas respondidas dezenas de vezes por semana</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Por que são dores comuns — bloco de fechamento */}
          <div className="mt-16 max-w-4xl mx-auto border border-gray-200 rounded-2xl p-8 md:p-10 bg-gray-50">
            <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase text-center">Por que são dores tão comuns?</p>
            <h3 className="text-2xl font-heading font-bold text-center text-dark mb-8">Essas falhas têm origem nos processos — não nas pessoas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { n: '01', color: '#e74c3c', text: 'Processos complexos, desalinhados com o dia a dia do time' },
                { n: '02', color: '#27ae60', text: 'Processos flexíveis demais — cada um faz do seu jeito, sem padrão' },
                { n: '03', color: '#2c3e50', text: 'Processos bem desenhados, mas sem monitoramento em tempo real' },
                { n: '04', color: '#e74c3c', text: 'Rotinas repetitivas que nunca foram automatizadas' },
                { n: '05', color: '#8b5cf6', text: 'Base de conhecimento desestruturada e desatualizada' },
                { n: '06', color: '#8b5cf6', text: 'Silos de informação — conhecimento retido em poucos, empresa refém' },
              ].map(({ n, color, text }) => (
                <div key={n} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                  <span className="text-2xl font-extrabold shrink-0 leading-none mt-0.5" style={{ color }}>{n}</span>
                  <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-6 text-center">
              <p className="text-lg font-semibold text-dark">
                Quando os processos falham, a operação paga.{' '}
                <span className="text-primary">O diagnóstico mostra onde priorizar.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO RESOLVO - Serviço único, por camada */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase text-center">Serviço</p>
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Transformação Digital sob medida
          </h2>
          <p className="text-center text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Um diagnóstico. Você prioriza. Eu executo.
          </p>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            No diagnóstico, mapeio as 4 camadas da sua operação e apresento onde está o maior desperdício.
            Você decide por onde começar. Eu lidero a transformação até o resultado aparecer.
          </p>

          <div className="max-w-5xl mx-auto">
            {/* Etapa 1: Diagnóstico */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Diagnóstico (1-2 semanas)</h3>
                  <p className="text-gray-700 mb-3">Mapeio as 4 camadas, calculo o custo da ineficiência e apresento oportunidades priorizadas por impacto vs esforço.</p>
                  <p className="text-primary font-semibold text-sm">Você sai com: mapa de gargalos + estimativa de economia + plano de ação priorizado</p>
                </div>
              </div>
            </div>

            {/* Etapa 2: Redesenho */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-6 border-l-4 border-secondary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Redesenho (1-2 semanas)</h3>
                  <p className="text-gray-700 mb-3">Simplifico processos, desenho automações e defino a solução técnica. Sem over-engineering — só o que gera resultado.</p>
                  <p className="text-secondary font-semibold text-sm">Atuo na camada que o diagnóstico priorizar:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-3 h-3 bg-[#e74c3c] rounded-sm shrink-0"></div>
                      <span>Processos operacionais e automação</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-3 h-3 bg-[#27ae60] rounded-sm shrink-0"></div>
                      <span>Gestão de delivery e operações</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-3 h-3 bg-[#2c3e50] rounded-sm shrink-0"></div>
                      <span>Esteira de engenharia de software</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-3 h-3 bg-[#8b5cf6] rounded-sm shrink-0"></div>
                      <span>Base de conhecimento e autonomia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 3: Implementação */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-6 border-l-4 border-accent">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Implementação (4-12 semanas)</h3>
                  <p className="text-gray-700 mb-3">Lidero o delivery até a mudança estar em produção. Automação, IA, reestruturação de processos — o que for necessário.</p>
                  <p className="text-accent font-semibold text-sm">Não entrego diagnóstico e vou embora. Executo até funcionar.</p>
                </div>
              </div>
            </div>

            {/* Etapa 4: Resultado */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-dark">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">4</div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Resultado e Autonomia</h3>
                  <p className="text-gray-700 mb-3">Meço o impacto em custos e margem, documento tudo e garanto que a mudança se sustenta sem mim. Sua equipe assume com autonomia.</p>
                  <p className="text-dark font-semibold text-sm">Você não fica dependente. O ganho fica com você.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE FUNCIONA COMIGO - Autoridade nas 4 camadas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase text-center">Diferencial</p>
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Por que funciona comigo
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            A maioria dos consultores entende uma camada. Eu transito entre as quatro.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-[#e74c3c]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#e74c3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold mb-2">Negócio</h3>
              <p className="text-gray-600 text-sm">Falo com C-level sobre resultado financeiro, margem e estratégia. Entendo o impacto de cada decisão nos números da operação.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-[#27ae60]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#27ae60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-heading font-bold mb-2">Gestão</h3>
              <p className="text-gray-600 text-sm">20 anos gerindo operações de R$ 12M+ e 50+ profissionais. PMI, Scrum, ITIL aplicados em pressão real.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-[#2c3e50]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#2c3e50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-heading font-bold mb-2">Engenharia</h3>
              <p className="text-gray-600 text-sm">Falo a língua dos devs. Já fui analista, arquiteto, líder técnico. Conheço os desafios de dentro.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#8b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5" />
                </svg>
              </div>
              <h3 className="font-heading font-bold mb-2">IA & Automação</h3>
              <p className="text-gray-600 text-sm">Implemento soluções de IA em produção. LangChain, RAG, N8N, agentes — hands-on, não teoria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="section-padding bg-dark text-white">
        <div className="container-custom">
          <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase text-center">Resultados Comprovados</p>
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-white">
            Números de projetos reais
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-300 text-sm">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">R$12M+</div>
              <div className="text-gray-300 text-sm">Operação Anual Gerenciada</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-300 text-sm">Profissionais Liderados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+43%</div>
              <div className="text-gray-300 text-sm">Aumento de Margem</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">-42%</div>
              <div className="text-gray-300 text-sm">Custos Operacionais</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-300 text-sm">SLA Cumprido</div>
            </div>
          </div>
        </div>
      </section>

      {/* EMPRESAS */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase text-center">Prova Social</p>
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Empresas que Confiam</h2>
          <p className="text-center text-gray-600 mb-12">
            Projetos de transformação entregues para líderes de mercado
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
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
            ].map((company) => (
              <div key={company.name} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow border border-gray-200 flex items-center justify-center min-h-[140px]">
                <img
                  src={company.logo}
                  alt={company.name}
                  width={company.w}
                  height={company.h}
                  loading="lazy"
                  decoding="async"
                  className={`max-w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity ${'maxH' in company ? company.maxH : 'max-h-[100px]'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTASectionV2
        title="Quer saber onde sua operação está sangrando dinheiro?"
        description="Agende um diagnóstico. Eu mapeio as 4 camadas, mostro onde está o maior desperdício e você decide por onde começar."
        buttonText="Agendar Diagnóstico"
        buttonLink="https://wa.me/351932786582?text=Olá, gostaria de agendar um diagnóstico de transformação digital"
      />
    </>
  )
}
