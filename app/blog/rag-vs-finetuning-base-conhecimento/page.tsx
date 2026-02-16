import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RAG vs Fine-Tuning: Qual Usar Para Sua Base de Conhecimento? | Aldo Santos Group',
  description: 'Comparação técnica e prática entre RAG e Fine-tuning para base de conhecimento corporativa. Decisão baseada em casos reais.',
}

export default function BlogPost() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-white hover:text-gray-200 mb-6 inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar ao Blog
            </Link>
            <h1 className="font-heading font-bold mb-6">
              RAG vs Fine-Tuning: Qual Usar Para Sua Base de Conhecimento?
            </h1>
            <div className="flex items-center text-white opacity-90">
              <span>Aldo Santos</span>
              <span className="mx-3">•</span>
              <span>5 Fev 2026</span>
              <span className="mx-3">•</span>
              <span>18 min de leitura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              
              <p className="text-xl text-gray-600 mb-8">
                Se você está considerando implementar uma base de conhecimento com IA na sua empresa, provavelmente já esbarrou nesses dois termos: RAG e Fine-tuning. A resposta curta: <strong>RAG em 95% dos casos</strong>. A resposta longa: depende.
              </p>

              <h2>O Que São (De Verdade)</h2>

              <h3>RAG (Retrieval Augmented Generation)</h3>
              <p>
                Imagine que você tem um assistente super inteligente (o LLM) mas com memória de curto prazo. Ele não sabe nada sobre sua empresa.
              </p>
              <p>
                RAG é como dar para ele uma biblioteca completa da sua empresa + um sistema de busca excelente. Quando você faz uma pergunta:
              </p>
              <ol>
                <li>Sistema busca documentos relevantes na biblioteca</li>
                <li>Envia documentos + sua pergunta para o assistente</li>
                <li>Assistente responde baseado nos documentos que recebeu</li>
              </ol>
              <p><strong>Analogia:</strong> Como contratar consultor externo (LLM) e dar acesso à wiki da empresa antes de cada reunião.</p>

              <h3>Fine-Tuning</h3>
              <p>
                Pegar o LLM base e "retreiná-lo" com seus dados específicos para que ele "aprenda" sobre sua empresa.
              </p>
              <p><strong>Analogia:</strong> Como contratar funcionário e fazer onboarding completo de 6 meses para ele internalizar toda empresa.</p>

              <h2>Comparação Direta</h2>

              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="text-2xl font-bold mb-4">Custo</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-2">RAG</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Custo inicial: Baixo (R$ 5-15k)</li>
                      <li>• Custo recorrente: Médio (APIs + hospedagem)</li>
                      <li>• Custo de atualização: Zero</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-600 mb-2">Fine-Tuning</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Custo inicial: Alto (R$ 30-80k)</li>
                      <li>• Custo recorrente: Médio a Alto</li>
                      <li>• Custo de atualização: Alto (retreinar)</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 font-semibold text-secondary">✓ Vencedor: RAG (90% mais barato para começar)</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="text-2xl font-bold mb-4">Tempo de Implementação</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-2">RAG</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Tempo: 2-4 semanas</li>
                      <li>• MVP: 1 semana</li>
                      <li>• Iteração rápida</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-600 mb-2">Fine-Tuning</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Tempo: 2-3 meses</li>
                      <li>• MVP: difícil</li>
                      <li>• Iteração lenta</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 font-semibold text-secondary">✓ Vencedor: RAG (5x mais rápido)</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="text-2xl font-bold mb-4">Atualização de Conteúdo</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-2">RAG</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Nova doc → upload → imediato</li>
                      <li>• Atualização → reupload → imediato</li>
                      <li>• Zero custo, zero complexidade</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-600 mb-2">Fine-Tuning</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Nova info → retreinar completo</li>
                      <li>• Custo: milhares de reais</li>
                      <li>• Tempo: dias ou semanas</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 font-semibold text-secondary">✓ Vencedor: RAG (infinitamente mais simples)</p>
              </div>

              <h2>Quando Usar Cada Um</h2>

              <div className="bg-green-50 border-l-4 border-secondary p-6 my-8">
                <h3 className="text-xl font-bold mb-4">✓ Use RAG quando:</h3>
                <ul className="space-y-2">
                  <li><strong>Conteúdo muda frequentemente</strong> - Documentação técnica atualizada constantemente</li>
                  <li><strong>Precisa de transparência</strong> - Respostas citando fonte e auditabilidade</li>
                  <li><strong>Orçamento limitado</strong> - Startups e PMEs, MVP/PoC</li>
                  <li><strong>Time técnico pequeno</strong> - Precisa de solução mantível</li>
                  <li><strong>Múltiplas bases de conhecimento</strong> - Diferentes áreas da empresa</li>
                </ul>
                <p className="mt-4 font-bold text-secondary">→ Use RAG em 95% dos casos de base de conhecimento corporativa</p>
              </div>

              <div className="bg-orange-50 border-l-4 border-accent p-6 my-8">
                <h3 className="text-xl font-bold mb-4">⚠ Use Fine-Tuning quando:</h3>
                <ul className="space-y-2">
                  <li><strong>Conhecimento estável e duradouro</strong> - Política da empresa que não muda</li>
                  <li><strong>Volume altíssimo de consultas</strong> - 100k+ consultas por dia</li>
                  <li><strong>Comportamento específico</strong> - Tom de voz único e consistente</li>
                  <li><strong>Informação sensível</strong> - Não pode enviar docs para API externa</li>
                </ul>
                <p className="mt-4 font-bold text-accent">→ Use fine-tuning apenas se tem orçamento, tempo e casos de uso muito específicos</p>
              </div>

              <h2>Implementação de RAG na Prática</h2>
              <p>Já implementei RAG para várias empresas. Este é o processo que funciona:</p>

              <h3>Fase 1: Preparação (Semana 1)</h3>
              <p><strong>1. Coleta de Documentos</strong></p>
              <ul>
                <li>Confluence, Google Docs, wikis, etc</li>
                <li>PDFs, Word docs, planilhas</li>
                <li>Conversas importantes do Slack/Teams</li>
              </ul>

              <p><strong>2. Limpeza e Estruturação</strong></p>
              <ul>
                <li>Remove duplicatas</li>
                <li>Padroniza formato</li>
                <li>Organiza hierarquicamente</li>
              </ul>

              <p><strong>3. Chunking Estratégico</strong></p>
              <ul>
                <li>Divide docs em pedaços de 500-1000 tokens</li>
                <li>Mantém contexto (não corta no meio de parágrafo)</li>
                <li>Adiciona metadados (autor, data, categoria)</li>
              </ul>

              <h3>Fase 2: Implementação Técnica (Semana 2)</h3>
              <p><strong>Stack recomendado:</strong></p>
              <ul>
                <li>LangChain (orquestração)</li>
                <li>OpenAI text-embedding-3-large (embeddings)</li>
                <li>Pinecone ou Weaviate (vector database)</li>
                <li>GPT-4 ou Claude 3.5 Sonnet (geração)</li>
                <li>Python (backend)</li>
                <li>Interface web ou integração Slack/Teams</li>
              </ul>

              <h3>Fase 3: Otimização (Semana 3-4)</h3>
              <p><strong>1. Qualidade de Respostas</strong></p>
              <ul>
                <li>Testa com 50-100 perguntas reais</li>
                <li>Ajusta chunking se necessário</li>
                <li>Refina prompts</li>
                <li>Adiciona exemplos few-shot</li>
              </ul>

              <p><strong>2. Performance</strong></p>
              <ul>
                <li>Implementa cache para perguntas comuns</li>
                <li>Otimiza tamanho de chunks</li>
                <li>Balanceia qualidade vs custo</li>
              </ul>

              <h2>Resultados Reais</h2>
              <p>Empresa de software com 80 pessoas:</p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-accent mb-4">ANTES:</h4>
                  <ul className="space-y-2">
                    <li>• Onboarding: 3 meses</li>
                    <li>• 60+ perguntas/semana para seniores</li>
                    <li>• Conhecimento preso em "pessoas-chave"</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-secondary mb-4">DEPOIS (com RAG):</h4>
                  <ul className="space-y-2">
                    <li>• Onboarding: 3 semanas (10x mais rápido)</li>
                    <li>• 10 perguntas/semana (redução de 83%)</li>
                    <li>• Conhecimento acessível 24/7 para todos</li>
                  </ul>
                </div>
              </div>

              <p><strong>Investimento:</strong> R$ 12k (implementação) + R$ 800/mês (APIs)<br/>
              <strong>ROI:</strong> Payback em 2 meses</p>

              <h2>Armadilhas Comuns</h2>

              <h3>Armadilha #1: Chunks Muito Grandes ou Pequenos</h3>
              <p><strong>Errado:</strong></p>
              <ul>
                <li>Chunks de 100 tokens → perde contexto</li>
                <li>Chunks de 5000 tokens → busca imprecisa</li>
              </ul>
              <p><strong>Certo:</strong></p>
              <ul>
                <li>Chunks de 500-1000 tokens</li>
                <li>Overlap de 50-100 tokens entre chunks</li>
                <li>Testa e ajusta baseado em qualidade de resposta</li>
              </ul>

              <h3>Armadilha #2: Embeddings Ruins</h3>
              <p><strong>Certo:</strong></p>
              <ul>
                <li>Use text-embedding-3-large (OpenAI) ou equivalente de qualidade</li>
                <li>Teste busca antes de implementar geração</li>
                <li>90% da qualidade vem da busca, não da geração</li>
              </ul>

              <h3>Armadilha #3: Prompts Genéricos</h3>
              <p><strong>Certo:</strong></p>
              <ul>
                <li>Prompt detalhado com tom de voz</li>
                <li>Formato esperado</li>
                <li>Instruções de quando dizer "não sei"</li>
                <li>Exemplos práticos</li>
              </ul>

              <h3>Armadilha #4: Não Citar Fontes</h3>
              <p><strong>Certo:</strong></p>
              <ul>
                <li>Sempre mostrar quais documentos foram usados</li>
                <li>Links para documentos originais</li>
                <li>Permite verificação e aumenta confiança</li>
              </ul>

              <h2>Próximos Passos</h2>
              <p>Se você quer implementar base de conhecimento com IA na sua empresa:</p>
              <ol>
                <li><strong>Comece com RAG</strong> (a não ser que tenha motivo muito específico para fine-tuning)</li>
                <li><strong>Faça MVP em 1-2 semanas</strong> com um subset de documentos</li>
                <li><strong>Valide com usuários reais</strong> antes de escalar</li>
                <li><strong>Meça impacto real</strong>: tempo economizado, satisfação, adoção</li>
              </ol>

            </article>

            {/* Author Bio */}
            <div className="mt-16 p-8 bg-blue-50 rounded-lg border-l-4 border-primary">
              <div className="flex items-start">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                  AS
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">Aldo Santos</h3>
                  <p className="text-gray-700 mb-4">
                    Especialista em implementação prática de IA para empresas de TI. 
                    Já implementei RAG para empresas de 30 a 200 pessoas com resultados comprovados.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com/in/lindualdo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      LinkedIn
                    </a>
                    <a href="mailto:lindualdo@hotmail.com" className="text-primary hover:underline">
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-secondary text-white rounded-lg text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">Precisa de Ajuda Para Implementar RAG?</h3>
              <p className="text-lg mb-6 opacity-95">
                Agende consultoria gratuita para discutirmos seu caso específico e desenharmos arquitetura adequada
              </p>
              <a 
                href="https://wa.me/351932786582?text=Olá, vi o artigo sobre RAG e gostaria de agendar uma consultoria gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-4"
              >
                Agendar Consultoria Gratuita
              </a>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link href="/blog" className="text-primary hover:underline text-lg font-semibold">
                ← Ver todos os artigos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
