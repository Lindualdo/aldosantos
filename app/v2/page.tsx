import Link from 'next/link'
import HeroV2 from '@/components/v2/HeroV2'
import CTASectionV2 from '@/components/v2/CTASectionV2'

export default function HomeV2() {
  return (
    <>
      <HeroV2
        subtitle="Transformação Digital & Otimização de Processos"
        title="Sua operação pode gerar mais resultado"
        highlight="com menos esforço."
        description="Diagnostico gargalos, redesenho processos e lidero a implementação até o resultado aparecer no P&L. 20+ anos transformando operações em Energia, Financeiro, Saúde e Logística."
        description2="Gestão de projetos, delivery e IA aplicada são as ferramentas. Resultado financeiro mensurável é a entrega."
        primaryCTA={{
          text: "Falar Comigo",
          href: "https://wa.me/351932786582?text=Olá, gostaria de conversar sobre transformação digital"
        }}
        secondaryCTA={{
          text: "Ver Resultados",
          href: "#resultados"
        }}
      />

      {/* Quem Sou - Reescrito como narrativa de autoridade */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase">Sobre</p>
            <h2 className="text-4xl font-heading font-bold mb-8">
              Não sou mais um consultor.<br />
              <span className="text-primary">Sou quem entra e transforma.</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Com mais de 20 anos liderando projetos críticos para empresas de referência, minha especialidade
                é entrar em operações que precisam de transformação e entregar resultado mensurável:
                <strong className="text-dark"> margens maiores, custos menores, processos que funcionam.</strong>
              </p>

              <p>
                Combinação rara no mercado: <strong className="text-dark">visão estratégica de C-level</strong> com
                <strong className="text-dark"> capacidade técnica hands-on</strong> para implementar.
                Transito com naturalidade entre a sala de reunião e o código — e é exatamente por isso que
                os projetos que lidero entregam resultado, não apenas relatórios.
              </p>

              <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="font-semibold text-dark mb-3">Como entrego transformação:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">1.</span>
                    <span><strong>Diagnóstico</strong> — Mapeio processos, identifico gargalos e calculo o custo da ineficiência</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">2.</span>
                    <span><strong>Redesenho</strong> — Simplifico processos e desenho a solução técnica adequada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">3.</span>
                    <span><strong>Implementação</strong> — Lidero o delivery até a mudança estar em produção</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">4.</span>
                    <span><strong>Resultado</strong> — Meço o impacto no P&L e garanto que a mudança se sustenta</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Entregues */}
      <section id="resultados" className="section-padding bg-dark text-white">
        <div className="container-custom">
          <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase text-center">Resultados Comprovados</p>
          <h2 className="text-4xl font-heading font-bold text-center mb-4 text-white">
            Números que demonstram impacto real
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Resultados reais de projetos de transformação em operações críticas de grandes empresas brasileiras.
          </p>
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

      {/* Serviços */}
      <section id="servicos" className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase text-center">Serviços</p>
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Frentes de Transformação
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Cada serviço é desenhado para gerar resultado operacional concreto, não apenas diagnósticos ou recomendações.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Otimização de Processos */}
            <Link href="/transformacao-processos" className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#e74c3c] to-[#dc2626] flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                  Otimização de Processos
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Diagnóstico, simplificação e automação de processos operacionais. Identifico gargalos, elimino trabalho manual e implemento soluções com IA e integrações inteligentes. Resultado: custos menores e produtividade maior.
                </p>
                <span className="text-[#e74c3c] font-semibold group-hover:underline">Saiba Mais →</span>
              </div>
            </Link>

            {/* Card 2: Gestão de Projetos & Operações */}
            <Link href="/pmo-as-service" className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#27ae60] to-[#16a34a] flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                  Gestão de Projetos & Operações
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Atuo como gestor sênior temporário, mentoro gestores internos, estruturo processos de entrega e implemento PMO. Do planejamento estratégico à gestão de stakeholders em projetos críticos.
                </p>
                <span className="text-[#27ae60] font-semibold group-hover:underline">Saiba Mais →</span>
              </div>
            </Link>

            {/* Card 3: Consultoria em Engenharia de Software */}
            <Link href="/consultoria-engenharia-software" className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#1e293b] to-[#475569] flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                  Consultoria em Engenharia de Software
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Toda a esteira de engenharia: requisitos, arquitetura, processos de desenvolvimento e apoio técnico a times. Garanto que tecnologia e negócio falem a mesma língua — do escopo à entrega.
                </p>
                <span className="text-[#1e293b] font-semibold group-hover:underline">Saiba Mais →</span>
              </div>
            </Link>

            {/* Card 4: Base de Conhecimento Inteligente */}
            <Link href="/base-conhecimento-ia" className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#6d28d9] to-[#a78bfa] flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                  Base de Conhecimento Inteligente
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Centralize conhecimento técnico e de negócio numa base com IA. Elimine dependência de pessoas específicas, reduza onboarding e consulte informações críticas instantaneamente.
                </p>
                <span className="text-[#6d28d9] font-semibold group-hover:underline">Saiba Mais →</span>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* Experiência com Empresas */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase text-center">Prova Social</p>
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Empresas que Confiam</h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Projetos de transformação entregues para líderes de mercado em diversos setores
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

      {/* Expertise Técnica */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase text-center">Competências</p>
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">Expertise Técnica</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary">Gestão & Metodologias</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-primary mr-2">→</span><span>PMI, Scrum, Kanban, SAFe</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">→</span><span>ITIL (Service Management)</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">→</span><span>Product Ownership</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">→</span><span>Business Analysis</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">→</span><span>Gestão de Riscos e Crises</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">→</span><span>Liderança de Times</span></li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-4 text-secondary">Inteligência Artificial</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-secondary mr-2">→</span><span>LangChain, RAG, Multi-Agentes</span></li>
                <li className="flex items-start"><span className="text-secondary mr-2">→</span><span>OpenAI, Anthropic, Google Gemini</span></li>
                <li className="flex items-start"><span className="text-secondary mr-2">→</span><span>Automação de processos (RPA e Chatbots)</span></li>
                <li className="flex items-start"><span className="text-secondary mr-2">→</span><span>Python, APIs, Integrações</span></li>
                <li className="flex items-start"><span className="text-secondary mr-2">→</span><span>Implementação em produção</span></li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-4 text-accent">Desenvolvimento</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-accent mr-2">→</span><span>Backend: Python, C#, .NET, Java</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">→</span><span>Frontend: React, TypeScript</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">→</span><span>Bancos: PostgreSQL, SQL Server, Oracle</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">→</span><span>DevOps: Docker, Git, CI/CD</span></li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-4 text-dark">Setores de Experiência</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-dark mr-2">→</span><span>Energia (8 anos)</span></li>
                <li className="flex items-start"><span className="text-dark mr-2">→</span><span>Financeiro (4 anos)</span></li>
                <li className="flex items-start"><span className="text-dark mr-2">→</span><span>Saúde (3 anos)</span></li>
                <li className="flex items-start"><span className="text-dark mr-2">→</span><span>Logística (2 anos)</span></li>
                <li className="flex items-start"><span className="text-dark mr-2">→</span><span>Varejo, Tecnologia</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASectionV2
        title="Sua operação pode gerar mais resultado?"
        description="Vamos conversar. Eu digo se posso ajudar, como e em quanto tempo você verá os primeiros resultados."
        buttonText="Falar no WhatsApp"
        buttonLink="https://wa.me/351932786582?text=Olá, gostaria de conversar sobre transformação digital"
      />
    </>
  )
}
