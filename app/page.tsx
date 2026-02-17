import Link from 'next/link'
import Hero from '@/components/Hero'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Aldo Santos"
        subtitle="Consultoria de TI & Gestão de Projetos"
        description="Consultor de TI com 20 anos liderando projetos críticos que não podem falhar. Especialista em gestão de operações complexas, arquitetura de soluções e implementação de IA em ambientes corporativos."
        description2="Ajudo empresas com área de TI interna e empresas de tecnologia a resolver projetos travados, eliminar processos manuais e implementar IA sem queimar orçamento."
        primaryCTA={{
          text: "Agendar Conversa",
          href: "https://wa.me/351932786582?text=Olá, gostaria de agendar uma conversa"
        }}
        secondaryCTA={{
          text: "Ver Serviços",
          href: "#servicos"
        }}
        bgColor="dark"
      />

      {/* Quem Sou */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8">Quem Sou</h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Passei 20 anos liderando projetos críticos para empresas de referência nos setores 
                de Energia, Financeiro, Saúde e Logística. Gerenciei operações de <strong className="text-primary">R$ 12M+ anuais</strong>, 
                liderei times de <strong className="text-primary">40+ profissionais</strong> e entreguei resultados como 
                <strong className="text-primary"> +43% aumento de margem de lucro</strong> e <strong className="text-primary">-45% redução de chamados</strong> 
                mantendo <strong className="text-primary">100% de SLA</strong> em operações 24x7.
              </p>

              <p>
                Em 2022-2024, fiz uma pausa estratégica para me especializar profundamente em 
                Inteligência Artificial prática - não teoria acadêmica, mas implementação real 
                com LLMs, automação e agentes inteligentes em produção.
              </p>

              <p>
                Hoje combino gestão sênior de projetos com expertise técnica hands-on em IA. 
                Um perfil raro no mercado: falo tanto com C-level sobre estratégia quanto com 
                desenvolvedores sobre arquitetura técnica.
              </p>

              <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="font-semibold text-dark mb-3">Atuo para:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>Empresas médias e grandes com área de TI interna</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>Consultorias de TI e fábricas de software</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>Empresas em transformação digital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>Setores: Tecnologia, Energia, Financeiro, Saúde, Logística, Indústria, Varejo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Trabalho */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Como Trabalho</h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Não entrego apenas PowerPoint. Posso atuar como gerente temporário, 
            arquiteto de soluções ou consultor estratégico - você decide o modelo 
            que faz mais sentido para seu contexto.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Conversa Inicial</h3>
              <p className="text-gray-600">
                30-60 minutos. Você conta a dor, eu digo se posso ajudar e como.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Diagnóstico</h3>
              <p className="text-gray-600">
                1-2 semanas entendendo contexto, processos e oportunidades reais.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Proposta Clara</h3>
              <p className="text-gray-600">
                Escopo, prazo, investimento e resultados esperados mensuráveis.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Execução</h3>
              <p className="text-gray-600">
                Implemento direto, mentoro seu time ou atuo temporariamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Serviços</h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Três linhas de atuação para resolver as dores mais urgentes de empresas com área de TI
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/transformacao-processos" className="card hover:scale-105 transition-transform group">
              <div className="bg-gradient-to-br from-primary to-blue-600 h-48 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-20 h-20 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                Transformação de Processos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Identifico gargalos operacionais e implemento automação com IA e integrações inteligentes. 
                Elimino trabalho manual, reduzo custos e aumento produtividade com ROI demonstrado.
              </p>
            </Link>

            <Link href="/arquitetura-solucoes-ia" className="card hover:scale-105 transition-transform group">
              <div className="bg-gradient-to-br from-secondary to-purple-600 h-48 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-20 h-20 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-dark mb-3 group-hover:text-secondary transition-colors">
                Arquitetura de Soluções IA
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Desenho e implemento soluções de IA adaptadas à sua realidade. Do levantamento de 
                requisitos à entrega técnica, garantindo que tecnologia gere resultado financeiro real.
              </p>
            </Link>

            <Link href="/pmo-as-service" className="card hover:scale-105 transition-transform group">
              <div className="bg-gradient-to-br from-accent to-orange-600 h-48 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-20 h-20 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-dark mb-3 group-hover:text-accent transition-colors">
                PMO as a Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Atuo como gerente temporário de projetos críticos ou estruturo processos de entrega. 
                Assumo projetos travados, reestruturo entregas e capacito times para autonomia.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Resultados Entregues */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-white">Resultados Entregues</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">R$ 12M+</div>
              <div className="text-gray-300">Operação Gerenciada</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">40+</div>
              <div className="text-gray-300">Profissionais Liderados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+43%</div>
              <div className="text-gray-300">Aumento Margem Lucro</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">340%</div>
              <div className="text-gray-300">ROI em Projeto IA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-300">SLA Cumprido</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência com Empresas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Experiência com Empresas de Referência</h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Projetos críticos entregues para líderes de mercado em diversos setores
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              'CPFL Energia', 'Neoenergia', 'Cemig', 'EDP', 'Energisa',
              'Light', 'Banco Rendimento', 'JSL Logística', 'Amil Saúde', 'Hospital Sírio Libanês',
              'Magazine Luiza', 'Stefanini', 'Vincit', 'Meta IT', 'Cadmus'
            ].map((company) => (
              <div key={company} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow border border-gray-200">
                <p className="font-semibold text-dark">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Técnica */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">Expertise Técnica</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary">Gestão & Metodologias</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>PMI, Scrum, Kanban, SAFe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>ITIL (Service Management)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Product Ownership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Business Analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Gestão de Riscos e Crises</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Liderança de Times</span>
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-4 text-secondary">Inteligência Artificial</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">→</span>
                  <span>LangChain, RAG, Multi-Agentes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">→</span>
                  <span>OpenAI, Anthropic, Google Gemini</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">→</span>
                  <span>N8N (automação de workflows)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">→</span>
                  <span>Python, APIs, Integrações</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">→</span>
                  <span>Implementação em produção</span>
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-4 text-accent">Desenvolvimento</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-2">→</span>
                  <span>Backend: Python, C#, .NET, Java</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">→</span>
                  <span>Frontend: React, TypeScript</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">→</span>
                  <span>Bancos: PostgreSQL, SQL Server, Oracle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">→</span>
                  <span>DevOps: Docker, Git, CI/CD</span>
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-4 text-dark">Setores de Experiência</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-dark mr-2">→</span>
                  <span>Energia (8 anos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dark mr-2">→</span>
                  <span>Financeiro (4 anos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dark mr-2">→</span>
                  <span>Saúde (3 anos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dark mr-2">→</span>
                  <span>Logística (2 anos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dark mr-2">→</span>
                  <span>Varejo, Tecnologia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="Pronto para Resolver Isso?"
        description="Agende uma conversa e descubra como posso ajudar sua empresa a eliminar gargalos, automatizar processos e entregar projetos críticos no prazo."
        buttonText="Falar no WhatsApp"
        buttonLink="https://wa.me/351932786582?text=Olá, gostaria de agendar uma conversa"
      />
    </>
  )
}
