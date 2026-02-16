import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre | Aldo Santos Group',
  description: 'Conheça a história, expertise e experiência de Aldo Santos. 20+ anos liderando projetos críticos em Energia, Financeiro, Saúde e Logística.',
}

export default function Sobre() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark to-gray-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold mb-6">
              Aldo Santos Group
            </h1>
            <p className="text-xl md:text-2xl opacity-95">
              Consultoria especializada em otimização de operações de TI através de Inteligência Artificial e automação de processos
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8">História</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-dark">Aldo Santos Group</strong> nasce da união de 20 anos de experiência em gestão 
                de projetos críticos com expertise técnica profunda em Inteligência Artificial. Não somos uma consultoria 
                generalista nem uma agência de desenvolvimento - somos especialistas em resolver as dores mais urgentes de 
                empresas de TI: processos manuais insustentáveis, projetos travados e conhecimento perdido.
              </p>
              <p>
                <strong className="text-primary">Fundador: Aldo Santos</strong><br />
                Após liderar operações de R$ 12M+ anuais para as maiores distribuidoras de energia do Brasil e gerenciar times 
                de 40+ profissionais, fiz uma pausa estratégica (2022-2024) para me especializar profundamente em IA prática. 
                Não teoria acadêmica - implementação real com LLMs, automação e agentes inteligentes.
              </p>
              <p>
                Hoje combino gestão sênior de projetos com capacidade técnica hands-on em IA - um perfil raro no mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">Missão</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Tornar operações de TI mais eficientes, rentáveis e escaláveis através de automação inteligente e gestão 
              estratégica. Entregamos resultados mensuráveis desde o primeiro dia.
            </p>
          </div>
        </div>
      </section>

      {/* Experiência por Setor */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Experiência por Setor</h2>
            
            <div className="space-y-8">
              <div className="card border-l-4 border-primary">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-heading font-bold">Energia</h3>
                  <span className="ml-4 text-primary font-semibold">8 anos</span>
                </div>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Operações para CPFL, Neoenergia, Cemig, EDP, Energisa, Light</li>
                  <li>• Sustentação de sistemas críticos 24x7 com SLA 99.9%</li>
                  <li>• Compliance regulatório ANEEL (BDGD)</li>
                  <li>• Gestão de 40+ profissionais em operações de R$ 12M+ anuais</li>
                </ul>
                <p className="text-primary font-semibold">
                  Resultado: +43% margem lucro, -45% chamados, 100% SLA cumprido
                </p>
              </div>

              <div className="card border-l-4 border-secondary">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-heading font-bold">Financeiro</h3>
                  <span className="ml-4 text-secondary font-semibold">4 anos</span>
                </div>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Core bancário e sistemas de pagamento (Banco Rendimento)</li>
                  <li>• Sustentação de aplicações críticas</li>
                  <li>• Implementação de processos de desenvolvimento</li>
                </ul>
                <p className="text-secondary font-semibold">
                  Resultado: -30% tempo de entrega, -40% bugs em produção
                </p>
              </div>

              <div className="card border-l-4 border-primary">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-heading font-bold">Saúde</h3>
                  <span className="ml-4 text-primary font-semibold">3 anos</span>
                </div>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Gestão de TI para Hospital Sírio Libanês, Amil Saúde, Qualicorp</li>
                  <li>• Outsourcing de impressão e ECM</li>
                  <li>• Projetos de transformação digital</li>
                </ul>
                <p className="text-primary font-semibold">
                  Resultado: -25% custos operacionais dos clientes
                </p>
              </div>

              <div className="card border-l-4 border-secondary">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-heading font-bold">Logística</h3>
                  <span className="ml-4 text-secondary font-semibold">2 anos</span>
                </div>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Soluções de workflow integrado ao SAP (JSL Logística)</li>
                  <li>• Migração para cloud</li>
                  <li>• Gestão de projetos complexos</li>
                </ul>
                <p className="text-secondary font-semibold">
                  Resultado: -35% custos de infraestrutura
                </p>
              </div>

              <div className="card border-l-4 border-primary">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-heading font-bold">Varejo</h3>
                  <span className="ml-4 text-primary font-semibold">1 ano</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Projetos para Magazine Luiza</li>
                  <li>• Gestão de múltiplas praças simultâneas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Técnica */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Expertise Técnica</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card bg-white">
                <h3 className="text-xl font-heading font-bold mb-4 text-primary">Gestão & Metodologias</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• PMI / PMBOK</li>
                  <li>• Scrum, Kanban, SAFe</li>
                  <li>• ITIL (Service Management)</li>
                  <li>• CMMI (participação em certificação Nível 5)</li>
                  <li>• Gestão de Riscos e Crises</li>
                  <li>• Product Ownership</li>
                  <li>• Business Analysis</li>
                </ul>
              </div>

              <div className="card bg-white">
                <h3 className="text-xl font-heading font-bold mb-4 text-secondary">Inteligência Artificial</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• LangChain (orquestração de LLMs)</li>
                  <li>• RAG (Retrieval Augmented Generation)</li>
                  <li>• Multi-Agentes</li>
                  <li>• OpenAI GPT-4, Anthropic Claude, Google Gemini</li>
                  <li>• Fine-tuning de modelos</li>
                  <li>• Prompt Engineering</li>
                </ul>
              </div>

              <div className="card bg-white">
                <h3 className="text-xl font-heading font-bold mb-4 text-primary">Automação & Integrações</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• N8N (workflow automation)</li>
                  <li>• APIs REST, GraphQL</li>
                  <li>• Webhooks e eventos</li>
                  <li>• Integração de sistemas legados</li>
                  <li>• Python para automação</li>
                </ul>
              </div>

              <div className="card bg-white">
                <h3 className="text-xl font-heading font-bold mb-4 text-secondary">Desenvolvimento</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Backend: Python, C#, .NET, Java</li>
                  <li>• Frontend: React, TypeScript, Tailwind</li>
                  <li>• Bancos de Dados: PostgreSQL, SQL Server, Oracle</li>
                  <li>• DevOps: Docker, Git, CI/CD</li>
                  <li>• GIS: ArcGIS, GeoDatabase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formação */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8">Formação & Certificações</h2>
            <div className="space-y-6">
              <div className="card bg-blue-50 border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">MBA em Gestão de Projetos</h3>
                <p className="text-gray-600">FGV - Fundação Getulio Vargas (2013-2015)</p>
              </div>
              <div className="card bg-blue-50 border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Graduação em Tecnologia da Informação</h3>
                <p className="text-gray-600">IBTA - Instituto Brasileiro de Tecnologia Avançada</p>
              </div>
              <div className="card bg-green-50 border-l-4 border-secondary">
                <h3 className="text-xl font-bold mb-2">Formação IA Makers</h3>
                <p className="text-gray-600 mb-2">Promovaweb (2025)</p>
                <p className="text-gray-700">N8N, LangChain, Multi-Agentes, RAG, DevOps para IA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Trabalhar Conosco */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12 text-white">Por Que Trabalhar Conosco</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card bg-gray-800 border-l-4 border-primary">
                <h3 className="text-xl font-heading font-bold mb-3 text-primary">1. Resultados Mensuráveis</h3>
                <p className="text-gray-300 leading-relaxed">
                  Não vendemos consultoria genérica. Cada projeto tem métricas claras de sucesso e ROI demonstrado. 
                  Nossos clientes veem impacto financeiro em 90 dias.
                </p>
              </div>

              <div className="card bg-gray-800 border-l-4 border-secondary">
                <h3 className="text-xl font-heading font-bold mb-3 text-secondary">2. Perfil Raro no Mercado</h3>
                <p className="text-gray-300 leading-relaxed">
                  Combinamos gestão sênior (20 anos) com expertise técnica profunda em IA. Falamos tanto com C-level 
                  quanto com desenvolvedores. Entendemos negócio E tecnologia.
                </p>
              </div>

              <div className="card bg-gray-800 border-l-4 border-primary">
                <h3 className="text-xl font-heading font-bold mb-3 text-primary">3. Experiência em Operações Críticas</h3>
                <p className="text-gray-300 leading-relaxed">
                  Já gerenciamos operações 24x7 de R$ 12M+ anuais. Sabemos o que é pressão, SLA apertado e zero margem 
                  para erro. Não aprendemos com o seu dinheiro.
                </p>
              </div>

              <div className="card bg-gray-800 border-l-4 border-secondary">
                <h3 className="text-xl font-heading font-bold mb-3 text-secondary">4. Implementação, Não Teoria</h3>
                <p className="text-gray-300 leading-relaxed">
                  Não somos consultores que entregam PowerPoint. Colocamos a mão na massa: arquitetamos, implementamos, 
                  testamos, documentamos. Você recebe solução funcionando.
                </p>
              </div>

              <div className="card bg-gray-800 border-l-4 border-primary">
                <h3 className="text-xl font-heading font-bold mb-3 text-primary">5. Foco em Empresas de TI</h3>
                <p className="text-gray-300 leading-relaxed">
                  Não atendemos todos os setores. Somos especialistas em dores de empresas de TI, consultorias e fábricas 
                  de software. Falamos sua língua.
                </p>
              </div>

              <div className="card bg-gray-800 border-l-4 border-secondary">
                <h3 className="text-xl font-heading font-bold mb-3 text-secondary">6. Transparência e Ética</h3>
                <p className="text-gray-300 leading-relaxed">
                  Preços claros, escopo definido, sem letras miúdas. Se não conseguimos entregar, dizemos logo. 
                  Preferimos perder venda a comprometer reputação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
