import CTASection from '@/components/CTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Soluções Proprietárias | Aldo Santos Group',
  description: 'Ferramentas e produtos desenvolvidos para acelerar resultados: Base de Conhecimento RAG, Chatbots Especializados, Automações N8N e Hub de Produtividade.',
}

export default function Solucoes() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold mb-6">
              Ferramentas e Soluções Proprietárias
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-4xl mx-auto">
              Ao longo de 20 anos liderando projetos críticos, desenvolvi um arsenal de ferramentas 
              e soluções que aceleram implementação e garantem qualidade. Estas são utilizadas 
              dentro dos nossos serviços de consultoria, adaptadas para cada contexto específico.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-primary p-6">
              <p className="text-gray-700 text-lg">
                <strong>Importante:</strong> Estas soluções não são vendidas como produtos separados. 
                Elas fazem parte da nossa metodologia de consultoria e são customizadas para cada cliente 
                durante a execução dos projetos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solução 1: Base de Conhecimento RAG */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Solução #1
                </div>
                <h2 className="mb-6">Base de Conhecimento com RAG</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Sistema inteligente que centraliza toda documentação técnica, operacional e de negócio da sua empresa. 
                  Usando tecnologia RAG (Retrieval Augmented Generation), permite que qualquer membro do time consulte 
                  informações como se estivesse falando com o especialista mais sênior.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary to-blue-600 rounded-lg p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Onboarding reduzido de 3 meses para 3 semanas</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>60% menos perguntas repetitivas para seniors</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Zero perda de conhecimento quando profissional sai</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Informação sempre atualizada e acessível 24/7</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reduz dependência de pessoas específicas</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="card">
                <h3 className="text-2xl font-heading font-bold mb-4">Como Funciona</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex">
                    <span className="font-bold text-primary mr-3">1.</span>
                    <span>Centralizamos toda documentação existente (Confluence, Google Docs, wikis, etc)</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-primary mr-3">2.</span>
                    <span>Organizamos e estruturamos a base de conhecimento</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-primary mr-3">3.</span>
                    <span>Implementamos RAG com LLMs (OpenAI, Anthropic ou Google)</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-primary mr-3">4.</span>
                    <span>Criamos interface de chat para consultas</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-primary mr-3">5.</span>
                    <span>Time consulta em linguagem natural, recebe respostas contextualizadas</span>
                  </li>
                </ol>
              </div>

              <div className="card bg-blue-50">
                <h3 className="text-2xl font-heading font-bold mb-4">Aplicações</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Documentação técnica de sistemas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Processos operacionais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Histórico de decisões de arquitetura</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Troubleshooting de problemas comuns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Padrões de código e boas práticas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução 2: Chatbots Especializados */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Solução #2
              </div>
              <h2 className="mb-6">Chatbots Especializados</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Agentes de IA treinados especificamente para diferentes áreas da empresa. 
                Cada chatbot possui contexto e conhecimento especializado para apoiar times específicos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="card bg-white border-l-4 border-primary">
                <h3 className="text-xl font-heading font-bold mb-3 flex items-center">
                  <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-3">A</span>
                  Chatbot Negócios
                </h3>
                <p className="text-gray-600 mb-3"><strong>Para:</strong> Product Owners, Arquitetos de Solução, Pré-venda</p>
                <p className="text-gray-700 mb-4">
                  Apoio em levantamento de requisitos, escrita de user stories, estimativas, análise de viabilidade, propostas técnicas
                </p>
                <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded">
                  <strong>Caso de uso:</strong> Qualificação de leads e elaboração de propostas comerciais automatizadas
                </div>
              </div>

              <div className="card bg-white border-l-4 border-secondary">
                <h3 className="text-xl font-heading font-bold mb-3 flex items-center">
                  <span className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white mr-3">B</span>
                  Chatbot Gestão
                </h3>
                <p className="text-gray-600 mb-3"><strong>Para:</strong> Diretores, Gerentes de Projeto, Coordenadores</p>
                <p className="text-gray-700 mb-4">
                  Apoio em planejamento estratégico, gestão de riscos, tomada de decisão, métricas e KPIs, gestão de stakeholders
                </p>
                <div className="text-sm text-gray-600 bg-green-50 p-3 rounded">
                  <strong>Caso de uso:</strong> Análise de métricas de projeto e sugestões de ações corretivas
                </div>
              </div>

              <div className="card bg-white border-l-4 border-primary">
                <h3 className="text-xl font-heading font-bold mb-3 flex items-center">
                  <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-3">C</span>
                  Chatbot Desenvolvimento
                </h3>
                <p className="text-gray-600 mb-3"><strong>Para:</strong> Desenvolvedores, QAs, DevOps</p>
                <p className="text-gray-700 mb-4">
                  Apoio em resolução de bugs, code review, sugestões de arquitetura, troubleshooting, documentação técnica
                </p>
                <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded">
                  <strong>Caso de uso:</strong> Code review automatizado e sugestões de melhorias em pull requests
                </div>
              </div>

              <div className="card bg-white border-l-4 border-secondary">
                <h3 className="text-xl font-heading font-bold mb-3 flex items-center">
                  <span className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white mr-3">D</span>
                  Chatbot RH
                </h3>
                <p className="text-gray-600 mb-3"><strong>Para:</strong> Recursos Humanos, Líderes de Pessoas</p>
                <p className="text-gray-700 mb-4">
                  Apoio em bem-estar mental, produtividade, gestão de conflitos, desenvolvimento de carreira, recrutamento
                </p>
                <div className="text-sm text-gray-600 bg-green-50 p-3 rounded">
                  <strong>Caso de uso:</strong> Suporte ao bem-estar mental e coaching de produtividade 24/7
                </div>
              </div>
            </div>

            <div className="card bg-white">
              <h3 className="text-2xl font-heading font-bold mb-4">Tecnologia</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>LangChain para orquestração</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Multi-agentes especializados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>RAG com base de conhecimento específica</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Integração WhatsApp, Slack, Teams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Memória de conversas para contexto contínuo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Disponível 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução 3: Automações N8N */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Solução #3
              </div>
              <h2 className="mb-6">Automações N8N</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Biblioteca de templates prontos de automação para processos críticos de empresas de TI. 
                Implementação rápida (1-2 semanas) com customização para sua realidade.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                'Integração ERP ↔ CRM automatizada',
                'Workflow de aprovação de propostas',
                'Sincronização Jira ↔ Confluence',
                'Alertas inteligentes de SLA',
                'Relatórios automáticos de projetos',
                'Onboarding automatizado de clientes',
                'Follow-up automático de leads',
                'Backup e auditoria de dados'
              ].map((template, index) => (
                <div key={index} className="card bg-gradient-to-br from-white to-blue-50">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-3">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-medium">{template}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card bg-blue-50">
                <h3 className="text-2xl font-heading font-bold mb-4">Benefícios</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Implementação 5x mais rápida que do zero</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Testados em produção com casos reais</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Documentação completa incluída</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Suporte para customizações</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Manutenção simplificada</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-white border-2 border-primary">
                <h3 className="text-2xl font-heading font-bold mb-4">Stack Técnico</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>N8N self-hosted ou cloud</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Integrações via APIs REST</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Webhooks para eventos em tempo real</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>PostgreSQL para dados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Docker para deploy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução 4: Hub Produtividade */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Solução #4
              </div>
              <h2 className="mb-6">Hub Produtividade Projetos</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Conjunto de ferramentas, templates e processos para aumentar eficiência na gestão de projetos de TI. 
                Baseado em 20 anos gerenciando projetos críticos em Scrum, Kanban e modelos híbridos.
              </p>
            </div>

            <div className="card bg-white mb-8">
              <h3 className="text-2xl font-heading font-bold mb-6">O Que Inclui</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-primary mb-3">Templates e Documentação</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Templates de kickoff, retrospectivas, post-mortem</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Checklists automatizados por fase de projeto</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Documentação de requisitos e arquitetura</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Kit de comunicação com stakeholders</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-3">Processos e Rituais</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Rituais otimizados (daily, planning, review)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Framework de estimativas (story points, planning poker)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Processo de gestão de riscos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Workflow de change requests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="card bg-gradient-to-br from-green-50 to-white">
                <h3 className="text-2xl font-heading font-bold mb-4">Métricas e Dashboards</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Velocity e burndown charts</li>
                  <li>• Lead time e cycle time</li>
                  <li>• Métricas de qualidade (bugs, retrabalho)</li>
                  <li>• Previsibilidade de entregas</li>
                  <li>• Dashboards em tempo real</li>
                </ul>
              </div>

              <div className="card bg-gradient-to-br from-blue-50 to-white">
                <h3 className="text-2xl font-heading font-bold mb-4">Diferenciais</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Adaptado para consultorias de TI</li>
                  <li>• Framework flexível, não metodologia engessada</li>
                  <li>• Foco em resultado, não burocracia</li>
                  <li>• Integra com Jira, Notion, Monday, etc</li>
                  <li>• Capacitação incluída</li>
                </ul>
              </div>
            </div>

            <div className="card bg-secondary text-white">
              <h3 className="text-2xl font-heading font-bold mb-6 text-white">Resultados Típicos</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">25%</div>
                  <div className="opacity-90">Redução em tempo de reuniões improdutivas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">30%</div>
                  <div className="opacity-90">Melhoria em previsibilidade de entregas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">40%</div>
                  <div className="opacity-90">Redução em retrabalho</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="opacity-90">Transparência com stakeholders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="Quer Implementar Essas Soluções na Sua Empresa?"
        description="Consultoria gratuita para entender suas necessidades e propor as soluções mais adequadas ao seu contexto."
        buttonText="Falar com Especialista no WhatsApp"
        buttonLink="https://wa.me/351932786582?text=Olá, gostaria de saber mais sobre as Soluções Proprietárias"
      />
    </>
  )
}
