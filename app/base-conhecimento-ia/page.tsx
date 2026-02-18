import ProblemCard from '@/components/ProblemCard'
import CTASection from '@/components/CTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base de Conhecimento Inteligente com IA | Aldo Santos',
  description: 'Implemente base de conhecimento inteligente com IA que centraliza expertise técnica, regras de negócio e processos. Acesso instantâneo, zero dependência de pessoas específicas.',
}

export default function BaseConhecimentoIA() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#8b5cf6] to-purple-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold mb-6">
              Conhecimento Crítico Perdido em Silos e Pessoas?
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Implemente base de conhecimento inteligente com IA que centraliza expertise técnica, regras de negócio e processos da empresa. Acesso instantâneo, zero dependência de pessoas específicas.
            </p>
            <a
              href="https://wa.me/351932786582?text=Olá, gostaria de agendar uma consultoria gratuita sobre Base de Conhecimento Inteligente"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-[#8b5cf6] hover:bg-gray-100 text-lg px-8 py-4"
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
            Dores comuns que drenam produtividade e criam riscos invisíveis
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProblemCard
              title="Conhecimento de Negócio Sempre Repetido"
              description="Cliente precisa explicar as mesmas regras de negócio toda vez que equipe muda ou novo projeto começa. Analistas sobrecarregados respondendo as mesmas perguntas. Desenvolvedores implementam errado por falta de contexto."
            />
            <ProblemCard
              title="Expertise Técnica Concentrada em Pessoas"
              description="Profissional sênior com anos de conhecimento sobre arquitetura, códigos legados, decisões técnicas históricas. Quando sai ou está indisponível, time fica travado. Onboarding de novos leva meses."
            />
            <ProblemCard
              title="Processos Internos Mal Documentados"
              description="Cada área tem processos diferentes. Documentação desatualizada ou inexistente. Profissional novo não sabe a quem perguntar. Gestores gastam horas explicando o óbvio."
            />
            <ProblemCard
              title="Vendas Sem Apoio Técnico Adequado"
              description="Equipe comercial depende de técnicos sobrecarregados para montar propostas. Informações superficiais geram escopo errado. Cliente frustrado, margem queimada em retrabalho."
            />
            <ProblemCard
              title="Troubleshooting Refeito Toda Vez"
              description="Incidente acontece, time gasta horas investigando. Descobre que problema já foi resolvido antes mas ninguém documentou. Conhecimento de soluções perdido."
            />
            <ProblemCard
              title="Compliance e Regulatório Disperso"
              description="Normas ISO, LGPD, regulamentações setoriais espalhadas em documentos. Cada área interpreta diferente. Risco de não conformidade em auditorias."
            />
          </div>
        </div>
      </section>

      {/* Consequências */}
      <section className="section-padding bg-[#8b5cf6] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">O Custo Real de Não Ter Base de Conhecimento</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6 opacity-95">
              Empresas perdem em média <strong>30% do tempo produtivo</strong> buscando informações que já existem na empresa. 
              Onboarding de desenvolvedores que deveria levar semanas leva meses. Cada profissional sênior que sai leva consigo 
              anos de conhecimento crítico que nunca será recuperado.
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              A dependência de pessoas específicas cria gargalos constantes: projeto trava esperando resposta de quem &quot;sabe&quot;, 
              cliente repete explicações toda reunião, equipe toma decisões sem contexto histórico. O custo não é só tempo perdido 
              — é projeto atrasado, cliente insatisfeito, margem consumida em retrabalho e risco de perder contratos por não 
              conseguir manter consistência.
            </p>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-4">Como Resolvo Isso</h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed text-center max-w-4xl mx-auto">
            Implemento base de conhecimento inteligente com IA (RAG) que centraliza todo expertise da empresa e responde 
            em linguagem natural como se fosse seu especialista mais sênior. Cada base é customizada para o tipo de 
            conhecimento e integrada com ferramentas que seu time já usa.
          </p>

          <h3 className="text-2xl font-heading font-bold text-center mb-8">4 Bases Modulares — Cliente Escolhe 1 ou Mais</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="card border-t-4 border-[#8b5cf6]">
              <h4 className="text-xl font-heading font-bold text-[#8b5cf6] mb-4">Base 1: Conhecimento de Negócio</h4>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Regras de negócio por cliente/projeto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Histórico de decisões e contexto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Especificações funcionais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Glossário do domínio</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">Para: Consultoria que atende múltiplos clientes, produtos complexos</p>
            </div>

            <div className="card border-t-4 border-[#8b5cf6]">
              <h4 className="text-xl font-heading font-bold text-[#8b5cf6] mb-4">Base 2: Conhecimento Técnico</h4>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Arquitetura de sistemas e decisões (ADRs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Códigos legados e documentação técnica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Padrões de desenvolvimento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Histórico de troubleshooting</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">Para: Empresas com sistemas complexos, legados críticos</p>
            </div>

            <div className="card border-t-4 border-[#8b5cf6]">
              <h4 className="text-xl font-heading font-bold text-[#8b5cf6] mb-4">Base 3: Processos Internos</h4>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Processos de gestão e engenharia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Workflows de aprovação</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Políticas e procedimentos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Compliance e regulatório</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">Para: Empresas com operações complexas, alto turnover</p>
            </div>

            <div className="card border-t-4 border-[#8b5cf6]">
              <h4 className="text-xl font-heading font-bold text-[#8b5cf6] mb-4">Base 4: Conhecimento Comercial</h4>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Portfólio de soluções técnicas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Cases e referências</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Estimativas e precificação</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Integrações disponíveis</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">Para: Empresas com time comercial que precisa autonomia técnica</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-center mb-12">Processo de Implementação</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8b5cf6] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Descoberta (1-2 semanas)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mapeamento de fontes de conhecimento existentes</li>
                    <li>• Identificação de gaps críticos</li>
                    <li>• Priorização por impacto</li>
                    <li>• Definição de escopo da base</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8b5cf6] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Estruturação (2-3 semanas)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Organização e curadoria de conteúdo</li>
                    <li>• Estruturação de taxonomia</li>
                    <li>• Definição de acessos e permissões</li>
                    <li>• Desenho de fluxos de consulta</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8b5cf6] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Implementação (3-4 semanas)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Desenvolvimento da base RAG customizada</li>
                    <li>• Treinamento do modelo com conteúdo</li>
                    <li>• Criação de chatbot especializado</li>
                    <li>• Integração com Slack/Teams/WhatsApp</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8b5cf6] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Go-Live & Evolução (2 semanas)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Treinamento dos usuários</li>
                    <li>• Ajustes baseados em uso real</li>
                    <li>• Processo de manutenção contínua</li>
                    <li>• Expansão para outras bases</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card bg-purple-50 border-l-4 border-[#8b5cf6]">
              <h3 className="text-2xl font-heading font-bold mb-4">O Que Está Incluído</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#8b5cf6] mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Estruturação completa da base</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#8b5cf6] mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Chatbot com IA treinado no conteúdo</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#8b5cf6] mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integração com ferramentas da empresa</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#8b5cf6] mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Interface de consulta (chat)</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#8b5cf6] mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Processo de atualização contínua</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#8b5cf6] mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Treinamento operacional do time</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#8b5cf6] mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>60 dias de suporte pós-entrega</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Técnico */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Stack Técnico</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-4 text-[#8b5cf6]">IA & RAG</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>LangChain para orquestração</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>OpenAI, Anthropic ou Gemini</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Embeddings para busca semântica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>RAG (Retrieval Augmented Generation)</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-4 text-[#8b5cf6]">Base de Dados</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>PostgreSQL + pgvector</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Pinecone / Weaviate</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-4 text-[#8b5cf6]">Interface</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Chatbot: Slack, Teams, WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Web interface quando necessário</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>APIs para integrações customizadas</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-4 text-[#8b5cf6]">Segurança</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Controle de acesso por base/conteúdo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>Auditoria de consultas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8b5cf6] mr-2">→</span>
                  <span>LGPD compliant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Esperados */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-center mb-12">O Que Você Ganha</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="card bg-white">
                <h3 className="text-xl font-heading font-bold mb-3 text-[#8b5cf6]">Onboarding Acelerado</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#8b5cf6] mr-2">→</span>
                    <span>De 3 meses para 3 semanas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8b5cf6] mr-2">→</span>
                    <span>Novo profissional consulta base ao invés de interromper seniors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8b5cf6] mr-2">→</span>
                    <span>Autonomia desde primeiro dia</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-white">
                <h3 className="text-xl font-heading font-bold mb-3 text-[#8b5cf6]">Zero Dependência de Pessoas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#8b5cf6] mr-2">→</span>
                    <span>Conhecimento permanece mesmo quando profissional sai</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8b5cf6] mr-2">→</span>
                    <span>Não trava projeto esperando quem &quot;sabe&quot;</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8b5cf6] mr-2">→</span>
                    <span>Sucessão facilitada</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-white">
                <h3 className="text-xl font-heading font-bold mb-3 text-[#8b5cf6]">Produtividade Aumentada</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#8b5cf6] mr-2">→</span>
                    <span>60% menos perguntas repetitivas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8b5cf6] mr-2">→</span>
                    <span>Informação encontrada em segundos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8b5cf6] mr-2">→</span>
                    <span>Time foca em trabalho de valor</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-white">
                <h3 className="text-xl font-heading font-bold mb-3 text-[#8b5cf6]">Consistência e Qualidade</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#8b5cf6] mr-2">→</span>
                    <span>Decisões baseadas em contexto histórico</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8b5cf6] mr-2">→</span>
                    <span>Padrões seguidos consistentemente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8b5cf6] mr-2">→</span>
                    <span>Menos erros por falta de informação</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-white md:col-span-2 lg:col-span-2">
                <h3 className="text-xl font-heading font-bold mb-3 text-[#8b5cf6]">ROI Mensurável</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#8b5cf6] mb-1">40-50%</div>
                    <div className="text-gray-600 text-sm">Redução em tempo de busca de informação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#8b5cf6] mb-1">70%</div>
                    <div className="text-gray-600 text-sm">Onboarding mais rápido</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#8b5cf6] mb-1">60%</div>
                    <div className="text-gray-600 text-sm">Menos perguntas repetitivas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Aplicações Práticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card border-l-4 border-[#8b5cf6]">
              <h3 className="text-xl font-heading font-bold text-dark mb-3">Consultoria de TI (50+ desenvolvedores)</h3>
              <p className="text-gray-700 leading-relaxed">
                Base de conhecimento de negócio para 20 clientes simultâneos. Desenvolvedores consultam regras sem 
                interromper analistas. Cliente satisfeito por não repetir explicações.
              </p>
            </div>

            <div className="card border-l-4 border-[#8b5cf6]">
              <h3 className="text-xl font-heading font-bold text-dark mb-3">Software House (produto complexo)</h3>
              <p className="text-gray-700 leading-relaxed">
                Base técnica com 10 anos de decisões de arquitetura. Novos desenvolvedores entendem &quot;por que 
                fizemos assim&quot; sem depender de fundadores.
              </p>
            </div>

            <div className="card border-l-4 border-[#8b5cf6]">
              <h3 className="text-xl font-heading font-bold text-dark mb-3">Empresa SaaS (time distribuído)</h3>
              <p className="text-gray-700 leading-relaxed">
                Base de processos internos. Profissional em qualquer fuso consulta procedimento correto sem esperar resposta.
              </p>
            </div>

            <div className="card border-l-4 border-[#8b5cf6]">
              <h3 className="text-xl font-heading font-bold text-dark mb-3">Consultoria Estratégica</h3>
              <p className="text-gray-700 leading-relaxed">
                Base comercial para vendedores. Conseguem montar proposta técnica sem depender de arquitetos sobrecarregados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Consultor */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Experiência em Gestão de Conhecimento</h2>
            <div className="card bg-gradient-to-br from-purple-50 to-white border-l-4 border-[#8b5cf6]">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Com mais de 20 anos liderando projetos críticos para empresas de referência nos setores de Energia, Financeiro, 
                  Saúde e Logística. Gerenciei operações de <strong className="text-dark">$12M+ anuais</strong>, liderei times de 
                  <strong className="text-dark"> 40+ profissionais</strong> e entreguei resultados como <strong className="text-dark">+43% aumento de margem de lucro</strong> 
                  e <strong className="text-dark">53% redução de chamados</strong> mantendo <strong className="text-dark">100% de SLA</strong> em operações 24x7.
                </p>
                <p>
                  Gerenciei operações onde conhecimento era ativo crítico. Implementei processos de documentação e transferência 
                  de conhecimento que reduziram dependência de pessoas específicas em <strong className="text-[#8b5cf6]">60%</strong>. 
                  Trabalhei com 6 das maiores distribuidoras de energia do Brasil (CPFL, Neoenergia, Cemig, EDP, Energisa, Light).
                </p>
                <p>
                  Especialização técnica em RAG, LangChain e implementação de chatbots inteligentes. Não vendo produto 
                  pronto — implemento solução customizada para seu contexto específico. Entendo tanto a dor de negócio (gestão, 
                  operação, vendas) quanto a implementação técnica. Essa combinação garante que a base será realmente usada, 
                  não só mais uma ferramenta abandonada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="Pronto para Centralizar Conhecimento Crítico?"
        description="Agende uma conversa e descubra qual base de conhecimento resolve suas dores mais urgentes."
        buttonText="Agendar Consultoria no WhatsApp"
        buttonLink="https://wa.me/351932786582?text=Olá, gostaria de agendar uma consultoria sobre Base de Conhecimento Inteligente com IA"
        backgroundColor="bg-[#8b5cf6]"
      />
    </>
  )
}
