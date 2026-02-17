import Link from 'next/link'
import Hero from '@/components/Hero'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Aldo Santos"
        subtitle="Consultoria de TI | Gestão de Projetos | Automação com IA"
        description="Consultor de TI com mais de 20 anos liderando projetos críticos que não podem falhar. Especialista em gestão de operações complexas, arquitetura de soluções e implementação de IA em ambientes corporativos."
        description2=""
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
                Com mais de 20 anos liderando projetos críticos para empresas de referência nos setores 
                de Energia, Financeiro, Saúde e Logística. Gerenciei operações de <strong className="text-primary">$ 12M+ anuais</strong>, 
                liderei times de <strong className="text-primary">40+ profissionais</strong> e entreguei resultados como 
                <strong className="text-primary"> +43% aumento de margem de lucro</strong> e <strong className="text-primary"> 53% redução de chamados </strong> 
                mantendo <strong className="text-primary">100% de SLA </strong> em operações 24x7.
              </p>

              <p>
              Atuo nas três frentes que conectam estratégia e resultado: gestão de projetos e operações de TI, consultoria na esteira completa de engenharia de software e implementação de soluções de IA e automação de processos.
              Essa combinação me permite transitar com naturalidade entre decisões estratégicas com C-level e decisões técnicas com times de desenvolvimento.
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
          Não entrego apenas diagnóstico e recomendações. Atuo onde o projeto exige: como gerente temporário, arquiteto de soluções, consultor estratégico ou líder técnico  sempre com foco em resultado mensurável, não em horas entregues.
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
            Três frentes de atuação para empresas de tecnologia e empresas com área de TI interna
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/transformacao-processos" className="bg-[#2c3e50] rounded-lg p-8 hover:shadow-xl transition-all group">
              <div className="h-48 flex items-center justify-center mb-6">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                Consultoria de TI & Engenharia de Software
              </h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                Atuo em toda a esteira de engenharia de software: levantamento e documentação de requisitos, análise de viabilidade, arquitetura de soluções, revisão de processos de desenvolvimento e apoio técnico a times. Da concepção à entrega, garanto que tecnologia e negócio falem a mesma língua.
              </p>
              <span className="text-white font-semibold group-hover:underline">Saiba Mais →</span>
            </Link>

            <Link href="/arquitetura-solucoes-ia" className="bg-[#3498db] rounded-lg p-8 hover:shadow-xl transition-all group">
              <div className="h-48 flex items-center justify-center mb-6">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                Gestão de Projetos & Operações
              </h3>
              <p className="text-gray-100 leading-relaxed mb-6">
                Posso atuar como gestor sênior temporário, mentorar gestores internos, estruturar ou otimizar processos de entrega, implementar PMO e monitorar resultados. Apoio no planejamento estratégico, gestão de stakeholders e análise de viabilidade de projetos críticos.
              </p>
              <span className="text-white font-semibold group-hover:underline">Saiba Mais →</span>
            </Link>

            <Link href="/pmo-as-service" className="bg-[#27ae60] rounded-lg p-8 hover:shadow-xl transition-all group">
              <div className="h-48 flex items-center justify-center mb-6">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                IA & Automação de Processos
              </h3>
              <p className="text-gray-100 leading-relaxed mb-6">
                Identifico gargalos operacionais e implemento soluções de Inteligência Artificial e automação customizadas. Do diagnóstico à entrega técnica, elimino trabalho manual, integro sistemas e gero ROI demonstrado em produção.
              </p>
              <span className="text-white font-semibold group-hover:underline">Saiba Mais →</span>
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
