import ProblemCard from '@/components/ProblemCard'
import CTASection from '@/components/CTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transformação de Processos | Aldo Santos',
  description: 'Implemento automação com IA que elimina trabalho manual e gera ROI demonstrado em 90 dias.',
}

export default function TransformacaoProcessos() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-red-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold mb-6">
              Processos Manuais Custando Milhares por Mês?
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Implemento automação com IA que elimina trabalho manual e gera ROI demonstrado em 90 dias.
            </p>
            <a 
              href="https://wa.me/351932786582?text=Olá, gostaria de agendar uma consultoria gratuita sobre Transformação de Processos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-accent hover:bg-gray-100 text-lg px-8 py-4"
            >
              Agendar Consultoria Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-4">Reconhece Esses Problemas?</h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Dores comuns que drenam produtividade e consomem orçamento sem gerar valor
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProblemCard
              title="Time Sobrecarregado com Tarefas Repetitivas"
              description="Sua equipe gasta 60% do tempo em trabalho manual que poderia ser automatizado: preenchimento de planilhas, atualização de sistemas, envio de relatórios, follow-ups. Produtividade baixa, frustração alta."
            />
            <ProblemCard
              title="Retrabalho Constante"
              description="Informações desatualizadas, processos sem padrão, falta de integração entre sistemas. Cada tarefa é feita duas, três vezes até ficar certa. Margem de lucro some em horas desperdiçadas."
            />
            <ProblemCard
              title="Custos Operacionais Crescentes"
              description="Quanto mais você cresce, mais precisa contratar para manter a operação. Processos manuais não escalam. Cada novo cliente ou projeto significa mais headcount e menos margem."
            />
            <ProblemCard
              title="Gargalos em Processos Críticos"
              description="Aprovações travadas, integrações quebradas, informações presas em silos. Seus processos críticos dependem de pessoas específicas, criando bottlenecks que atrasam toda operação."
            />
            <ProblemCard
              title="Falta de Visibilidade em Tempo Real"
              description="Você descobre problemas tarde demais. Não tem dashboards confiáveis, métricas em tempo real ou alertas automáticos. Gestão reativa ao invés de proativa."
            />
            <ProblemCard
              title="Integrações Manuais Entre Sistemas"
              description="ERP, CRM, ITSM, ferramentas de projeto - tudo separado. Sua equipe copia e cola informações entre sistemas, gastando horas e introduzindo erros a cada transferência."
            />
          </div>
        </div>
      </section>

      {/* Consequências */}
      <section className="section-padding bg-accent text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">O Custo Real de Não Agir</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6 opacity-95">
              Processos manuais custam em média <strong>35-42% do orçamento operacional</strong> de empresas de TI. 
              Cada hora desperdiçada em tarefas repetitivas é uma hora que não gera valor para o cliente.
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              A concorrência já está automatizando. Enquanto você mantém processos manuais, eles entregam mais rápido, 
              com menos erros e maior margem de lucro. O custo de não agir agora é perder competitividade e ver sua 
              operação sangrar dinheiro mês após mês.
            </p>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Como Resolvo Isso</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-12 leading-relaxed text-center">
              Mapeio seus processos críticos, identifico gargalos e implemento automação inteligente com IA, 
              N8N e integrações entre sistemas. Não vendo teoria - entrego soluções funcionando.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Diagnóstico Operacional (1-2 semanas)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mapeamento completo dos processos atuais</li>
                    <li>• Identificação de gargalos e desperdícios</li>
                    <li>• Priorização por impacto vs esforço</li>
                    <li>• Apresentação de quick wins</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Desenho da Solução (1 semana)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Arquitetura de automações</li>
                    <li>• Integrações necessárias</li>
                    <li>• Roadmap de implementação</li>
                    <li>• Estimativa de ROI</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Implementação (4-8 semanas)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Desenvolvimento de automações</li>
                    <li>• Integração de sistemas</li>
                    <li>• Testes e validação</li>
                    <li>• Capacitação da equipe</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Entrega e Suporte (2 semanas)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Go-live assistido</li>
                    <li>• Documentação completa</li>
                    <li>• Treinamento operacional</li>
                    <li>• Suporte pós-implementação</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card bg-blue-50 border-l-4 border-primary">
              <h3 className="text-2xl font-heading font-bold mb-4">O Que Está Incluído</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automações N8N customizadas</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integrações via APIs e webhooks</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dashboards e alertas em tempo real</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Base de conhecimento para autonomia do time</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Documentação técnica completa</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Treinamento operacional</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>30 dias de suporte pós-entrega</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-center mb-12">Resultados Esperados</h2>
          <div className="max-w-5xl mx-auto">
            <div className="card bg-white mb-8">
              <h3 className="text-2xl font-heading font-bold text-center mb-8 text-primary">
                Caso Real - Empresa B2B Tecnologia
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-accent">ANTES</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✗</span>
                      <span>15h/semana em processos manuais de integração ERP-CRM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✗</span>
                      <span>25% de erros em transferência de dados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✗</span>
                      <span>Retrabalho consumindo 8h/semana adicionais</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✗</span>
                      <span>Custo: R$ 12k/mês em tempo desperdiçado</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-secondary">DEPOIS (90 dias)</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Integração 100% automatizada</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Zero erros de transferência</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>23h/semana liberadas para trabalho estratégico</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Redução de 42% nos custos operacionais</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span><strong>ROI: 340% em 3 meses</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center card bg-white">
                <div className="text-4xl font-bold text-secondary mb-2">60%</div>
                <div className="text-gray-600">Redução em tempo gasto com tarefas manuais</div>
              </div>
              <div className="text-center card bg-white">
                <div className="text-4xl font-bold text-secondary mb-2">80%</div>
                <div className="text-gray-600">Menos erros operacionais</div>
              </div>
              <div className="text-center card bg-white">
                <div className="text-4xl font-bold text-secondary mb-2">40%</div>
                <div className="text-gray-600">Aumento de capacidade sem novas contratações</div>
              </div>
              <div className="text-center card bg-white">
                <div className="text-4xl font-bold text-secondary mb-2">3-6</div>
                <div className="text-gray-600">Meses para payback</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Consultor */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card bg-gradient-to-br from-blue-50 to-white border-l-4 border-primary">
              <h3 className="text-2xl font-heading font-bold mb-6">Sobre o Consultor</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-dark">Aldo Santos</strong> - 20 anos liderando operações críticas que não podem falhar. 
                  Gerenciei operações de R$ 12M+ anuais para 6 das maiores distribuidoras de energia do Brasil (CPFL, Neoenergia, 
                  Cemig, EDP, Energisa, Light), com 40+ profissionais sob gestão.
                </p>
                <p>
                  Resultados comprovados: <strong className="text-primary">+43% aumento de margem de lucro</strong> através de 
                  otimização de processos, <strong className="text-primary">-45% redução de chamados</strong>, 
                  <strong className="text-primary"> 100% cumprimento de SLA</strong> em operações 24x7.
                </p>
                <p>
                  Especialização técnica em automação: N8N, LangChain, RAG, APIs, integrações de sistemas legados. 
                  Combino visão estratégica de negócio com capacidade técnica hands-on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="Agende Consultoria Gratuita no WhatsApp"
        description="Vamos analisar seus processos e identificar oportunidades de automação com ROI claro. Sem compromisso, sem letras miúdas."
        buttonText="Falar com Especialista Agora"
        buttonLink="https://wa.me/351932786582?text=Olá, gostaria de agendar uma consultoria gratuita sobre Transformação de Processos"
      />
    </>
  )
}
