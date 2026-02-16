import ProblemCard from '@/components/ProblemCard'
import CTASection from '@/components/CTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PMO as a Service | Aldo Santos',
  description: 'Atuo como gerente temporário de projetos críticos para colocar projetos travados no eixo e entregar no prazo.',
}

export default function PMOAsService() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-green-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold mb-6">
              Projetos Críticos Sem Gerente Sênior?
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Gestão temporária ou consultoria estratégica para colocar projetos travados no eixo e entregar no prazo.
            </p>
            <a 
              href="https://wa.me/351932786582?text=Olá, gostaria de agendar uma consultoria gratuita sobre PMO as a Service"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-4"
            >
              Agendar Consultoria Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-4">Projeto Crítico Fora de Controle?</h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Sinais de que você precisa de gestão sênior externa imediatamente
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProblemCard
              title="Projeto Estratégico Travado"
              description="Projeto prioritário parado há semanas ou meses. Stakeholders cobrando, time perdido, ninguém sabe como desemperrar. Cada dia de atraso custa dinheiro e credibilidade."
            />
            <ProblemCard
              title="Escopo Descontrolado, Prazo Estourado"
              description="Projeto começou pequeno, virou monstro. Escopo cresceu sem controle, prazo já estourou duas vezes, orçamento explodiu. Não tem fim à vista e ninguém no controle."
            />
            <ProblemCard
              title="Stakeholders Insatisfeitos"
              description="Cliente ou diretoria perdendo paciência. Cobranças constantes, reuniões tensas, ameaças de cancelamento ou penalidades. Relacionamento deteriorando rápido."
            />
            <ProblemCard
              title="Falta de Metodologia Clara"
              description="Time trabalha sem processo definido. Não tem rituais, métricas, visibilidade do progresso. Cada um trabalha do seu jeito, sem alinhamento. Caos operacional."
            />
            <ProblemCard
              title="Time Técnico Sem Direcionamento"
              description="Desenvolvedores bons, mas sem liderança. Não sabem prioridades, trabalham no que acham importante, retrabalho constante. Falta ponte entre negócio e técnico."
            />
            <ProblemCard
              title="Não Pode Contratar Gerente CLT"
              description="Precisa de gerente sênior mas não pode comprometer orçamento com CLT. Projeto é temporário (3-6 meses) ou não tem garantia de continuidade. Precisa de flexibilidade."
            />
          </div>
        </div>
      </section>

      {/* Consequências */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">O Custo de Projeto Sem Gestão Sênior</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6 opacity-95">
              Projetos sem gestão adequada têm <strong>60-70% de chance de falhar</strong> (PMI). O custo não é só financeiro: 
              é reputação, relacionamento com cliente, moral do time e oportunidades perdidas.
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              Cada semana de projeto travado é dinheiro queimado: time parado, multas contratuais, cliente insatisfeito, 
              time desgastado. Pior: você perde capacidade de vender novos projetos porque o atual está consumindo toda energia.
            </p>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Como Colocamos Projetos no Eixo</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-12 leading-relaxed text-center">
              Assumo gestão temporária (3-6 meses) ou atuo como consultor estratégico. 
              Reestruturo entregas, implemento processos e capacito seu time para autonomia.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Diagnóstico e Plano de Ação (1 semana)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Avaliação completa do estado atual do projeto</li>
                    <li>• Identificação de gargalos e riscos críticos</li>
                    <li>• Análise de viabilidade de prazo/escopo/orçamento</li>
                    <li>• Plano de recuperação com quick wins</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Estabilização (2-4 semanas)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Renegociação de escopo/prazo com stakeholders</li>
                    <li>• Implementação de metodologia ágil adaptada</li>
                    <li>• Definição de rituais e métricas</li>
                    <li>• Reorganização de prioridades e entregas</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Execução e Entrega (8-16 semanas)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Gestão diária do projeto (daily, planning, review)</li>
                    <li>• Gestão de stakeholders e expectativas</li>
                    <li>• Remoção de impedimentos</li>
                    <li>• Garantia de entregas incrementais</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Transição e Autonomia (2-4 semanas)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Capacitação do time para autonomia</li>
                    <li>• Documentação de processos estabelecidos</li>
                    <li>• Transição para gerente interno (se houver)</li>
                    <li>• Suporte pós-transição</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card bg-green-50 border-l-4 border-secondary">
              <h3 className="text-2xl font-heading font-bold mb-4">O Que Está Incluído</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gestão diária do projeto</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Implementação de metodologia ágil</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gestão de stakeholders</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dashboards e métricas em tempo real</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ferramentas de produtividade (Jira, Notion, etc)</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Capacitação do time</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Documentação de processos</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suporte pós-entrega</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-center mb-12">Projetos Entregues</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="card bg-white">
                <h4 className="text-xl font-bold mb-3 text-secondary">Operação R$ 12M+ Anual</h4>
                <p className="text-gray-700 mb-4">
                  Gestão de operação crítica 24x7 para 6 distribuidoras de energia. 40+ profissionais sob gestão. 
                  100% SLA cumprido, +43% margem de lucro.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Setor:</strong> Energia | <strong>Duração:</strong> 8 anos
                </p>
              </div>
              <div className="card bg-white">
                <h4 className="text-xl font-bold mb-3 text-secondary">Migração Core Bancário</h4>
                <p className="text-gray-700 mb-4">
                  Projeto crítico de migração de sistema de pagamentos. Restruturação completa após 6 meses travado. 
                  Entregue no prazo revisado.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Setor:</strong> Financeiro | <strong>Duração:</strong> 6 meses
                </p>
              </div>
              <div className="card bg-white">
                <h4 className="text-xl font-bold mb-3 text-secondary">Transformação Digital Hospital</h4>
                <p className="text-gray-700 mb-4">
                  Estruturação de PMO e gestão de múltiplos projetos simultâneos. Metodologia ágil adaptada para contexto hospitalar.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Setor:</strong> Saúde | <strong>Duração:</strong> 1 ano
                </p>
              </div>
            </div>

            <div className="card bg-white">
              <h3 className="text-2xl font-heading font-bold text-center mb-8 text-secondary">
                Resultados Típicos de Gestão Sênior
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-gray-600">Projetos entregues (nunca cancelados)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">30%</div>
                  <div className="text-gray-600">Melhoria em previsibilidade</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">40%</div>
                  <div className="text-gray-600">Redução em retrabalho</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">95%+</div>
                  <div className="text-gray-600">Satisfação de stakeholders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Consultor */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card bg-gradient-to-br from-green-50 to-white border-l-4 border-secondary">
              <h3 className="text-2xl font-heading font-bold mb-6">Experiência em Gestão</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-dark">Aldo Santos</strong> - 20 anos gerenciando projetos críticos que não podem falhar. 
                  Operações 24x7, SLA apertado, stakeholders exigentes, times distribuídos. Já passei por todas as crises possíveis.
                </p>
                <p>
                  Certificações e expertise: MBA Gestão de Projetos (FGV), PMI/PMBOK, Scrum, Kanban, SAFe, ITIL, CMMI Nível 5. 
                  Não é teoria de livro - são metodologias aplicadas em contextos reais de pressão.
                </p>
                <p>
                  Track record: Nunca tive projeto cancelado sob minha gestão. <strong className="text-secondary">100% de entrega</strong>, 
                  mesmo em projetos herdados em situação crítica. Especialidade é colocar projeto no eixo quando ninguém mais acredita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="Projeto Travado? Vamos Resolver"
        description="Consultoria gratuita para analisar situação do projeto e propor plano de recuperação. Transparência total, sem letras miúdas."
        buttonText="Falar com Gerente Sênior no WhatsApp"
        buttonLink="https://wa.me/351932786582?text=Olá, gostaria de agendar uma consultoria gratuita sobre PMO as a Service"
        backgroundColor="bg-secondary"
      />
    </>
  )
}
