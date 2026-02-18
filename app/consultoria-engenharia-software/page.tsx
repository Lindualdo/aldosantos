import ProblemCard from '@/components/ProblemCard'
import CTASection from '@/components/CTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consultoria de TI & Engenharia de Software',
  description: 'Consultoria em engenharia de software do levantamento de requisitos à entrega. Tecnologia e negócio na mesma língua — arquitetura, DevOps, qualidade e gestão técnica para empresas em crescimento.',
  keywords: ['consultoria engenharia de software', 'consultoria de TI', 'arquitetura de software', 'DevOps', 'gestão técnica'],
}

export default function ConsultoriaEngenhariaSoftware() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2c3e50] to-gray-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold mb-6">
              Projetos de Software Que Não Saem do Papel ou Entregam o Que Ninguém Pediu?
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Atuo em toda a esteira de engenharia de software — do levantamento de requisitos à entrega — garantindo que tecnologia e negócio falem a mesma língua e o resultado seja o que o cliente realmente precisa.
            </p>
            <a
              href="https://wa.me/351932786582?text=Olá, gostaria de agendar uma consultoria gratuita sobre Engenharia de Software"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-[#2c3e50] hover:bg-gray-100 text-lg px-8 py-4"
            >
              Agendar Consultoria Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-4">Reconhece Alguma Dessas Situações?</h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Dores comuns que drenam orçamento e destroem prazos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProblemCard
              title="Requisitos Mal Levantados"
              description="Cliente pediu A, time entendeu B, entregou C. Retrabalho constante porque ninguém documentou direito o que precisava ser feito. Desenvolvedor começa a codar sem clareza do problema real."
            />
            <ProblemCard
              title="Análise de Viabilidade Inexistente"
              description="Projeto aprovado sem avaliar viabilidade técnica. No meio do caminho descobre que não dá pra fazer, ou prazo é impossível, ou custo explode. Margem queimada, cliente frustrado."
            />
            <ProblemCard
              title="Arquitetura Fraca ou Inexistente"
              description="Time começa a desenvolver sem desenho de arquitetura. Sistema cresce virando frankenstein. Débito técnico acumula. Manutenção vira pesadelo. Escalabilidade? Esquece."
            />
            <ProblemCard
              title="Processos de Desenvolvimento Desorganizados"
              description="Cada projeto funciona de um jeito. Sem padrão de código, sem code review, sem testes. Qualidade inconsistente. Cliente nunca sabe quando vai receber."
            />
            <ProblemCard
              title="Comunicação Cliente-Time Quebrada"
              description="Desenvolvedor não fala com cliente. PO não entende técnico. Analista não entende negócio. Telefone sem fio onde sempre alguém entende errado."
            />
            <ProblemCard
              title="Falta de Documentação"
              description="Sistema funcionando mas ninguém sabe como. Quando precisa dar manutenção, time gasta dias investigando código. Nova feature? Reza pra não quebrar nada."
            />
          </div>
        </div>
      </section>

      {/* Consequências */}
      <section className="section-padding bg-[#2c3e50] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">O Custo Real de Engenharia Mal Feita</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6 opacity-95">
              Projetos de software sem engenharia adequada custam em média <strong>40-60% mais do que o planejado</strong> e atrasam meses. 
              O retrabalho por requisitos mal levantados consome <strong>30% do orçamento</strong>. Arquitetura fraca gera débito técnico 
              que multiplica o custo de cada nova feature.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6 opacity-95">
              Cliente perde confiança, time fica desmotivado refazendo trabalho, margem de lucro desaparece em horas extras 
              tentando corrigir o que deveria ter sido feito certo desde o início.
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              A falta de processos claros cria caos: ninguém sabe status real, prioridades mudam toda semana sem critério, 
              entregas atrasam sem explicação, qualidade é loteria.
            </p>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-4">Como Resolvo Isso</h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed text-center max-w-4xl mx-auto">
            Atuo em toda a esteira de engenharia de software — desde entender o problema real do cliente até garantir 
            que o código entregue resolve esse problema. Posso trabalhar hands-on com o time ou focar na melhoria de 
            processos, sempre adaptando ao contexto da empresa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="card border-t-4 border-[#2c3e50]">
              <h3 className="text-xl font-heading font-bold text-[#2c3e50] mb-4">Modelo A: Hands-On (Execução Direta)</h3>
              <p className="text-gray-600 mb-4">Entro no time e trabalho diretamente nas atividades:</p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Levantamento e documentação de requisitos com cliente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Análise de viabilidade técnica e comercial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Desenho de arquitetura de soluções</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Code review e pair programming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Definição de padrões técnicos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Apoio técnico em decisões críticas</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">Para quem: Times que precisam de capacidade sênior imediata mas não podem contratar permanente.</p>
            </div>

            <div className="card border-t-4 border-[#2c3e50]">
              <h3 className="text-xl font-heading font-bold text-[#2c3e50] mb-4">Modelo B: Melhoria de Processos (Consultoria)</h3>
              <p className="text-gray-600 mb-4">Avalio e reestruturou processos de desenvolvimento:</p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Diagnóstico da esteira atual</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Implementação de metodologias (Scrum, Kanban, híbrido)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Padronização de documentação</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Setup de code review e qualidade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Mentoria de líderes técnicos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Definição de fluxo de entregas</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">Para quem: Empresas que têm time mas processos desorganizados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Esteira Completa */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-center mb-12">Esteira Completa de Engenharia</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card bg-white">
                <div className="w-10 h-10 bg-[#2c3e50] rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
                <h3 className="text-xl font-heading font-bold mb-3">Descoberta & Requisitos</h3>
                <ul className="space-y-2 text-gray-700 text-sm mb-4">
                  <li>• Entrevistas com stakeholders e usuários finais</li>
                  <li>• Mapeamento de processos de negócio</li>
                  <li>• Requisitos funcionais e não-funcionais</li>
                  <li>• Documentação clara (user stories, casos de uso)</li>
                  <li>• Priorização baseada em valor de negócio</li>
                </ul>
                <p className="text-sm text-primary font-semibold">Resolve: Requisitos mal entendidos, retrabalho</p>
              </div>

              <div className="card bg-white">
                <div className="w-10 h-10 bg-[#2c3e50] rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
                <h3 className="text-xl font-heading font-bold mb-3">Análise de Viabilidade</h3>
                <ul className="space-y-2 text-gray-700 text-sm mb-4">
                  <li>• Avaliação técnica: é possível? Com que stack?</li>
                  <li>• Análise de prazo realista</li>
                  <li>• Estimativa de esforço e custo</li>
                  <li>• Identificação de riscos técnicos</li>
                  <li>• Recomendação go/no-go com justificativa</li>
                </ul>
                <p className="text-sm text-primary font-semibold">Resolve: Projetos inviáveis, estouros de prazo</p>
              </div>

              <div className="card bg-white">
                <div className="w-10 h-10 bg-[#2c3e50] rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
                <h3 className="text-xl font-heading font-bold mb-3">Arquitetura de Soluções</h3>
                <ul className="space-y-2 text-gray-700 text-sm mb-4">
                  <li>• Desenho de arquitetura técnica (C4, fluxos)</li>
                  <li>• Escolha de stack e tecnologias</li>
                  <li>• Definição de integrações e APIs</li>
                  <li>• Estratégia de dados e persistência</li>
                  <li>• Documentação de decisões (ADRs)</li>
                </ul>
                <p className="text-sm text-primary font-semibold">Resolve: Débito técnico, sistema não escala</p>
              </div>

              <div className="card bg-white">
                <div className="w-10 h-10 bg-[#2c3e50] rounded-full flex items-center justify-center text-white font-bold mb-4">4</div>
                <h3 className="text-xl font-heading font-bold mb-3">Processos de Desenvolvimento</h3>
                <ul className="space-y-2 text-gray-700 text-sm mb-4">
                  <li>• Workflow de desenvolvimento</li>
                  <li>• Code review e padrões de qualidade</li>
                  <li>• Estratégia de testes</li>
                  <li>• CI/CD e automação de deploy</li>
                  <li>• Rituais ágeis adaptados ao contexto</li>
                </ul>
                <p className="text-sm text-primary font-semibold">Resolve: Caos operacional, qualidade inconsistente</p>
              </div>

              <div className="card bg-white">
                <div className="w-10 h-10 bg-[#2c3e50] rounded-full flex items-center justify-center text-white font-bold mb-4">5</div>
                <h3 className="text-xl font-heading font-bold mb-3">Apoio Técnico Contínuo</h3>
                <ul className="space-y-2 text-gray-700 text-sm mb-4">
                  <li>• Suporte em decisões técnicas complexas</li>
                  <li>• Troubleshooting de problemas críticos</li>
                  <li>• Mentoria de desenvolvedores</li>
                  <li>• Revisão de código e arquitetura</li>
                  <li>• Alinhamento técnico-negócio</li>
                </ul>
                <p className="text-sm text-primary font-semibold">Resolve: Time travado, decisões técnicas ruins</p>
              </div>

              <div className="card bg-white">
                <div className="w-10 h-10 bg-[#2c3e50] rounded-full flex items-center justify-center text-white font-bold mb-4">6</div>
                <h3 className="text-xl font-heading font-bold mb-3">Documentação</h3>
                <ul className="space-y-2 text-gray-700 text-sm mb-4">
                  <li>• Documentação de arquitetura</li>
                  <li>• README&apos;s e guias de setup</li>
                  <li>• Documentação de APIs</li>
                  <li>• Processo de manutenção de docs</li>
                  <li>• Base de conhecimento técnico</li>
                </ul>
                <p className="text-sm text-primary font-semibold">Resolve: Onboarding lento, manutenção cara</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Trabalho */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Processo de Atuação</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2c3e50] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Diagnóstico (1-2 semanas)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Entendimento do contexto atual</li>
                    <li>• Mapeamento de dores e gargalos</li>
                    <li>• Identificação de riscos técnicos</li>
                    <li>• Avaliação de maturidade dos processos</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2c3e50] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Plano de Ação (1 semana)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Roadmap de melhorias priorizadas</li>
                    <li>• Definição de modelo de atuação (hands-on ou consultivo)</li>
                    <li>• Estimativa de prazo e investimento</li>
                    <li>• Quick wins vs melhorias estruturais</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2c3e50] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Execução (adaptável)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Trabalho integrado com o time</li>
                    <li>• Entregas incrementais</li>
                    <li>• Ajustes baseados em feedback</li>
                    <li>• Transferência contínua de conhecimento</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2c3e50] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Autonomia (2-4 semanas)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Capacitação do time</li>
                    <li>• Documentação de processos</li>
                    <li>• Transição suave</li>
                    <li>• Suporte pós-entrega</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Técnico */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-center mb-4">Tecnologias e Metodologias</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Me adapto ao stack e processos que você já usa. Não forço mudanças desnecessárias.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card bg-white">
              <h3 className="text-xl font-heading font-semibold mb-4 text-[#2c3e50]">Linguagens & Frameworks</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Python, C#, .NET, Java, Node.js</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>React, TypeScript</span>
                </li>
              </ul>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-heading font-semibold mb-4 text-[#2c3e50]">Arquitetura</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Microservices, Monolito Modular</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Event-Driven, REST/GraphQL</span>
                </li>
              </ul>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-heading font-semibold mb-4 text-[#2c3e50]">Bancos de Dados</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>PostgreSQL, SQL Server, Oracle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>MongoDB, Redis</span>
                </li>
              </ul>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-heading font-semibold mb-4 text-[#2c3e50]">DevOps & Infra</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Docker, Kubernetes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>CI/CD (GitHub Actions, GitLab)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>AWS / Azure / GCP</span>
                </li>
              </ul>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-heading font-semibold mb-4 text-[#2c3e50]">Metodologias</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Scrum, Kanban, Shape Up</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Waterfall adaptado quando necessário</span>
                </li>
              </ul>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-heading font-semibold mb-4 text-[#2c3e50]">Qualidade</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>TDD, Code Review</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2c3e50] mr-2">→</span>
                  <span>Testes Automatizados, SonarQube</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">O Que Você Ganha</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="card bg-gray-50 border-l-4 border-[#2c3e50]">
                <h3 className="text-xl font-heading font-bold mb-3">Clareza no Escopo</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#2c3e50] mr-2">→</span>
                    <span>Requisitos documentados e priorizados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e50] mr-2">→</span>
                    <span>Cliente e time alinhados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e50] mr-2">→</span>
                    <span>70% menos retrabalho por mal-entendidos</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-gray-50 border-l-4 border-[#2c3e50]">
                <h3 className="text-xl font-heading font-bold mb-3">Arquitetura Sólida</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#2c3e50] mr-2">→</span>
                    <span>Sistema escalável desde o início</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e50] mr-2">→</span>
                    <span>Decisões técnicas documentadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e50] mr-2">→</span>
                    <span>Débito técnico controlado</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-gray-50 border-l-4 border-[#2c3e50]">
                <h3 className="text-xl font-heading font-bold mb-3">Processos Funcionando</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#2c3e50] mr-2">→</span>
                    <span>Fluxo de trabalho claro e eficiente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e50] mr-2">→</span>
                    <span>Qualidade consistente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e50] mr-2">→</span>
                    <span>Previsibilidade de prazos</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-gray-50 border-l-4 border-[#2c3e50]">
                <h3 className="text-xl font-heading font-bold mb-3">Time Capacitado</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#2c3e50] mr-2">→</span>
                    <span>Devs entendem o &quot;porquê&quot; das decisões</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e50] mr-2">→</span>
                    <span>Autonomia para manter processos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e50] mr-2">→</span>
                    <span>Padrões internalizados</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-gray-50 border-l-4 border-[#2c3e50] md:col-span-2 lg:col-span-2">
                <h3 className="text-xl font-heading font-bold mb-3">Entregas no Prazo</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#2c3e50] mr-2">→</span>
                    <span>Planejamento realista baseado em capacidade real</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e50] mr-2">→</span>
                    <span>Gestão de expectativas adequada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e50] mr-2">→</span>
                    <span>Cliente satisfeito com resultado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-center mb-12">Aplicações Práticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card bg-white border-l-4 border-[#2c3e50]">
              <h3 className="text-xl font-heading font-bold text-dark mb-3">Software House (time 15 devs)</h3>
              <p className="text-gray-700 leading-relaxed">
                Processos desorganizados, cada projeto um caos. Implementei Scrum adaptado + code review + padrões 
                de qualidade. Resultado: <strong>entregas 40% mais previsíveis</strong>, retrabalho reduzido 50%.
              </p>
            </div>

            <div className="card bg-white border-l-4 border-[#2c3e50]">
              <h3 className="text-xl font-heading font-bold text-dark mb-3">Startup Tech (produto MVP)</h3>
              <p className="text-gray-700 leading-relaxed">
                Time queria começar a codar sem definir arquitetura. Desenhei arquitetura escalável, defini stack 
                adequado, estabeleci padrões. Resultado: <strong>MVP entregue sem débito técnico crítico</strong>, pronto para escalar.
              </p>
            </div>

            <div className="card bg-white border-l-4 border-[#2c3e50]">
              <h3 className="text-xl font-heading font-bold text-dark mb-3">Consultoria TI (20+ projetos simultâneos)</h3>
              <p className="text-gray-700 leading-relaxed">
                Cada projeto com processos diferentes. Padronizei documentação de requisitos, fluxo de aprovações, 
                code review. Resultado: <strong>qualidade consistente</strong>, menos surpresas, margem preservada.
              </p>
            </div>

            <div className="card bg-white border-l-4 border-[#2c3e50]">
              <h3 className="text-xl font-heading font-bold text-dark mb-3">Empresa corporativa (sistema legado)</h3>
              <p className="text-gray-700 leading-relaxed">
                Ninguém entendia arquitetura do sistema. Fiz engenharia reversa, documentei decisões, treinei time. 
                Resultado: <strong>manutenção 60% mais rápida</strong>, novos devs produtivos em semanas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Consultor */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Experiência na Esteira Completa</h2>
            <div className="card bg-gradient-to-br from-gray-50 to-white border-l-4 border-[#2c3e50]">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Com mais de 20 anos liderando projetos críticos para empresas de referência nos setores de Energia, Financeiro, 
                  Saúde e Logística. Gerenciei operações de <strong className="text-dark">$12M+ anuais</strong>, liderei times de 
                  <strong className="text-dark"> 40+ profissionais</strong> e entreguei resultados como <strong className="text-dark">+43% aumento de margem de lucro</strong> 
                  e <strong className="text-dark">53% redução de chamados</strong> mantendo <strong className="text-dark">100% de SLA</strong> em operações 24x7.
                </p>
                <p>
                  Atuei em toda a esteira de desenvolvimento: já fui analista de requisitos, arquiteto de soluções, desenvolvedor, 
                  gerente de projetos. Não sou consultor que só fez slides — coloquei mão no código, enfrentei arquitetura legada, 
                  gerenciei débito técnico, negociei escopo com cliente nervoso.
                </p>
                <p>
                  Trabalhei em projetos desde startups até operações corporativas de $12M+. Implementei processos em consultorias 
                  de TI, bancos, energia, saúde. Conheço as dores porque já vivi todas elas.
                </p>
                <p>
                  Não vendo metodologia engessada. Adapto ao seu contexto: se precisa agilidade, vamos de Scrum. Se operação 
                  contínua, Kanban. Se compliance pesado, híbrido. O que importa é resultado, não dogma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="Projetos Entregando Errado ou Atrasando?"
        description="Agende uma conversa e descubra onde sua esteira de desenvolvimento está sangrando dinheiro."
        buttonText="Agendar Consultoria no WhatsApp"
        buttonLink="https://wa.me/351932786582?text=Olá, gostaria de agendar uma consultoria sobre Engenharia de Software"
        backgroundColor="bg-[#2c3e50]"
      />
    </>
  )
}
