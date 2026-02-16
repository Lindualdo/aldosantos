import ProblemCard from '@/components/ProblemCard'
import CTASection from '@/components/CTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arquitetura de Soluções IA | Aldo Santos Group',
  description: 'Desenhamos e implementamos soluções de IA que geram resultado real, não POCs que morrem na gaveta. Expertise em LLMs, RAG e agentes inteligentes.',
}

export default function ArquiteturaSolucoesIA() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold mb-6">
              Time Técnico Excelente, Mas Sem Visão de IA?
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Desenhamos e implementamos soluções de IA que geram resultado real, não POCs que morrem na gaveta.
            </p>
            <a 
              href="https://wa.me/351932786582?text=Olá, gostaria de agendar uma consultoria gratuita sobre Arquitetura de Soluções IA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
            >
              Agendar Consultoria Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-4">Desafios Comuns na Implementação de IA</h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Você tem time técnico forte, mas falta experiência específica em IA
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProblemCard
              title="Não Sabe Por Onde Começar com IA"
              description="Tem interesse em implementar IA mas não sabe qual tecnologia usar, que problemas resolver primeiro ou como calcular ROI. Paralisia por excesso de opções e falta de referências práticas."
            />
            <ProblemCard
              title="POCs Que Não Saem do Papel"
              description="Já fizeram testes, protótipos, demos impressionantes. Mas nada vai pra produção. Falta ponte entre experimentação e implementação real, escalável e sustentável."
            />
            <ProblemCard
              title="Soluções Técnicas Sem Resultado de Negócio"
              description="Time desenvolve soluções de IA tecnicamente corretas mas que não resolvem problemas reais. Falta visão de negócio para direcionar esforço técnico para onde gera valor."
            />
            <ProblemCard
              title="Falta de Expertise em LLMs, RAG e Agentes"
              description="Time é bom em desenvolvimento tradicional, mas LLMs, RAG, prompt engineering e agentes inteligentes são mundos novos. Precisa de mentoria técnica sênior nessas tecnologias específicas."
            />
            <ProblemCard
              title="Risco de Queimar Orçamento em Experimentação"
              description="Teme investir meses e milhares de reais em projetos de IA sem garantia de resultado. Precisa de alguém que já passou pelas tentativas e erros, com método comprovado."
            />
            <ProblemCard
              title="Time Técnico Sem Direcionamento em IA"
              description="Desenvolvedores querem aprender e implementar IA, mas falta liderança técnica com experiência prática. Precisa de arquiteto que desenhe a solução e capacite o time."
            />
          </div>
        </div>
      </section>

      {/* Consequências */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">O Custo de Não Implementar IA Corretamente</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6 opacity-95">
              Empresas que implementam IA de forma estratégica estão ganhando <strong>25-40% de vantagem competitiva</strong> em 
              produtividade e qualidade de entrega. Enquanto você experimenta sem direção, a concorrência já está entregando 
              soluções que funcionam.
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              O maior custo não é o investimento em IA - é perder oportunidades de mercado enquanto tenta descobrir sozinho. 
              Cada mês de atraso é participação de mercado que você não recupera.
            </p>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Como Entregamos Soluções de IA Que Funcionam</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-12 leading-relaxed text-center">
              Desenhamos arquitetura de soluções de IA focada em ROI desde o primeiro dia. Combinamos visão de negócio com 
              expertise técnica hands-on em LLMs, RAG e agentes inteligentes.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Levantamento Focado em ROI (1 semana)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Identificação de problemas que IA resolve melhor</li>
                    <li>• Priorização por impacto financeiro vs complexidade</li>
                    <li>• Análise de viabilidade técnica e custo</li>
                    <li>• Definição de métricas de sucesso claras</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Desenho de Arquitetura (1-2 semanas)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Arquitetura técnica completa</li>
                    <li>• Escolha de stack (OpenAI, Anthropic, Google, open-source)</li>
                    <li>• Desenho de RAG, agentes ou fine-tuning conforme necessidade</li>
                    <li>• Plano de implementação em fases</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Implementação ou Mentoria (4-12 semanas)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Opção 1: Implementamos a solução completa</li>
                    <li>• Opção 2: Mentoria técnica do seu time durante implementação</li>
                    <li>• Code review e pair programming</li>
                    <li>• Testes, validação e otimização</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Entrega e Capacitação (2 semanas)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Solução em produção ou blueprint completo para implementação</li>
                    <li>• Documentação técnica detalhada</li>
                    <li>• Capacitação do time em manutenção e evolução</li>
                    <li>• Suporte pós-entrega</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card bg-blue-50 border-l-4 border-primary">
              <h3 className="text-2xl font-heading font-bold mb-4">Stack Técnico</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Python + LangChain para orquestração</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>RAG com vector databases (Pinecone, Weaviate)</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>LLMs: OpenAI GPT-4, Anthropic Claude, Google Gemini</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Agentes inteligentes multi-step</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Prompt engineering e otimização</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fine-tuning quando necessário</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>APIs REST para integração</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Deploy em cloud ou on-premise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-center mb-12">Casos de Uso Reais</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="card bg-white">
                <h4 className="text-xl font-bold mb-3 text-primary">Base de Conhecimento RAG</h4>
                <p className="text-gray-700 mb-4">
                  Sistema que centraliza documentação técnica e permite consultas em linguagem natural. 
                  Onboarding reduzido de 3 meses para 3 semanas.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Stack:</strong> LangChain, OpenAI, Pinecone, Python
                </p>
              </div>
              <div className="card bg-white">
                <h4 className="text-xl font-bold mb-3 text-primary">Agente de Pré-Venda</h4>
                <p className="text-gray-700 mb-4">
                  Chatbot que qualifica leads, responde dúvidas técnicas e agenda reuniões. 
                  40% de redução em tempo de pré-venda.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Stack:</strong> Claude, LangChain, WhatsApp API
                </p>
              </div>
              <div className="card bg-white">
                <h4 className="text-xl font-bold mb-3 text-primary">Code Review Automatizado</h4>
                <p className="text-gray-700 mb-4">
                  IA que analisa pull requests, sugere melhorias e identifica bugs. 
                  30% menos bugs em produção.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Stack:</strong> GPT-4, GitHub API, Python
                </p>
              </div>
            </div>

            <div className="card bg-white">
              <h3 className="text-2xl font-heading font-bold text-center mb-8 text-primary">
                Resultados Típicos de Implementação de IA
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">50-70%</div>
                  <div className="text-gray-600">Redução em tempo de tarefas repetitivas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                  <div className="text-gray-600">Disponibilidade de conhecimento especializado</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">3-6</div>
                  <div className="text-gray-600">Meses para payback do investimento</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">90%</div>
                  <div className="text-gray-600">Satisfação dos usuários finais</div>
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
            <div className="card bg-gradient-to-br from-blue-50 to-white border-l-4 border-primary">
              <h3 className="text-2xl font-heading font-bold mb-6">Expertise Técnica</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-dark">Aldo Santos</strong> combina 20 anos de gestão de projetos críticos com 
                  especialização profunda em IA prática. Não é teoria acadêmica - é implementação real com LLMs, RAG e agentes.
                </p>
                <p>
                  Formação em IA Makers (Promovaweb, 2025) com foco em N8N, LangChain, Multi-Agentes, RAG e DevOps para IA. 
                  Experiência hands-on desenvolvendo soluções de IA em produção para empresas reais.
                </p>
                <p>
                  Background técnico sólido: 15+ anos desenvolvendo em Python, C#, Java. MBA em Gestão de Projetos (FGV). 
                  Único perfil que entende tanto de negócio quanto de implementação técnica de IA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="Vamos Desenhar Sua Solução de IA?"
        description="Consultoria gratuita para entender seu desafio e propor arquitetura de solução com ROI claro. Sem compromisso."
        buttonText="Agendar Consultoria no WhatsApp"
        buttonLink="https://wa.me/351932786582?text=Olá, gostaria de agendar uma consultoria gratuita sobre Arquitetura de Soluções IA"
      />
    </>
  )
}
