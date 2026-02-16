import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Como Reduzimos 42% dos Custos Operacionais com Automação Inteligente | Aldo Santos Group',
  description: 'Case real de transformação de processos com automação inteligente e ROI comprovado em 90 dias.',
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
              Como Reduzimos 42% dos Custos Operacionais com Automação Inteligente
            </h1>
            <div className="flex items-center text-white opacity-90">
              <span>Aldo Santos</span>
              <span className="mx-3">•</span>
              <span>10 Fev 2026</span>
              <span className="mx-3">•</span>
              <span>15 min de leitura</span>
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
                Este é um case real de empresa B2B de tecnologia que estava sangrando dinheiro em processos manuais. Nomes alterados por questão de confidencialidade, mas números são 100% reais.
              </p>

              <h2>O Cenário Inicial (O Caos)</h2>
              <p><strong>Empresa:</strong> Software house B2B, 45 colaboradores, R$ 8M faturamento anual.</p>
              <p><strong>Problema principal:</strong> Integração manual entre ERP e CRM consumindo 15h/semana de um analista sênior (custo: R$ 12k/mês em tempo desperdiçado).</p>
              
              <p><strong>Dores secundárias:</strong></p>
              <ul>
                <li>25% de erros em transferência manual de dados</li>
                <li>Retrabalho consumindo 8h/semana adicionais</li>
                <li>Falta de visibilidade em tempo real do pipeline comercial</li>
                <li>Relatórios mensais levando 2 dias para serem consolidados</li>
                <li>Aprovações travadas por falta de workflow estruturado</li>
              </ul>

              <p><strong>Custo total estimado:</strong> R$ 18k/mês em ineficiências operacionais.</p>

              <h2>A Resistência Inicial</h2>
              <p>Quando apresentei proposta de automação, a resposta foi:</p>
              <blockquote>
                <p>"Já tentamos automatizar antes e não funcionou. É muito complexo."</p>
              </blockquote>
              
              <p>Escavando mais fundo, descobri que "tentaram automatizar" significava:</p>
              <ol>
                <li>Contrataram estagiário para fazer macros em Excel</li>
                <li>Tentaram Zapier mas integrações quebravam toda semana</li>
                <li>Cogitaram desenvolver sistema próprio mas orçamento assustou</li>
              </ol>
              <p><strong>O problema não era automação. Era abordagem errada.</strong></p>

              <h2>O Diagnóstico (Semana 1)</h2>
              <p>Passei uma semana mapeando processos reais. Não o que estava documentado (porque não estava), mas o que realmente acontecia no dia a dia.</p>

              <h3>Integração ERP → CRM:</h3>
              <ul>
                <li>Analista exportava planilha do ERP toda segunda 9h</li>
                <li>Limpava dados manualmente (2h)</li>
                <li>Importava no CRM (30min)</li>
                <li>Corrigia erros de importação (1h)</li>
                <li>Validava com comercial (30min)</li>
                <li>Total: 4h semanais, só nessa tarefa</li>
              </ul>

              <h3>Aprovação de Propostas:</h3>
              <ul>
                <li>Vendedor criava proposta no Google Docs</li>
                <li>Enviava por email para gerente</li>
                <li>Gerente aprovava (ou não) também por email</li>
                <li>Financeiro recebia cópia, criava entrada no ERP manualmente</li>
                <li>Tempo médio: 2-3 dias para proposta ser aprovada</li>
              </ul>

              <h2>A Solução (Semanas 2-3)</h2>
              <p>Desenhei automação com N8N (workflow automation), integrando via APIs.</p>

              <h3>Automação 1: Integração ERP ↔ CRM</h3>
              <p><strong>Workflow implementado:</strong></p>
              <ol>
                <li>Trigger: Toda segunda 8h + sempre que novo lead entra no CRM</li>
                <li>N8N busca dados novos no ERP via API</li>
                <li>Transforma dados (limpeza, padronização)</li>
                <li>Atualiza CRM via API</li>
                <li>Valida campos obrigatórios</li>
                <li>Envia alerta no Slack se erro detectado</li>
                <li>Loga tudo para auditoria</li>
              </ol>
              <p><strong>Tempo de implementação:</strong> 5 dias<br/>
              <strong>Resultado:</strong> 100% automatizado, zero erros, tempo economizado: 15h/semana</p>

              <h3>Automação 2: Workflow de Aprovação</h3>
              <p><strong>Workflow implementado:</strong></p>
              <ol>
                <li>Vendedor preenche formulário web customizado</li>
                <li>N8N cria proposta PDF automaticamente</li>
                <li>Envia para aprovação via WhatsApp do gerente</li>
                <li>Gerente aprova/rejeita direto no WhatsApp</li>
                <li>Sistema cria entrada no ERP automaticamente</li>
                <li>Notifica vendedor e cliente</li>
                <li>Agenda follow-up automático em 3 dias se sem resposta</li>
              </ol>
              <p><strong>Tempo de implementação:</strong> 4 dias<br/>
              <strong>Resultado:</strong> Aprovação média caiu de 3 dias para 4 horas</p>

              <h2>Os Resultados (90 Dias Depois)</h2>

              <h3>Resultados Quantitativos:</h3>
              <p><strong>Tempo economizado:</strong></p>
              <ul>
                <li>23h/semana liberadas para trabalho estratégico</li>
                <li>Equivalente a contratar 0.6 FTE (mais de meio funcionário)</li>
              </ul>

              <p><strong>Redução de erros:</strong></p>
              <ul>
                <li>Zero erros em transferência de dados (antes: 25%)</li>
                <li>Zero propostas perdidas por falha em follow-up</li>
              </ul>

              <p><strong>Redução de custos:</strong></p>
              <ul>
                <li>R$ 12k/mês em tempo desperdiçado → R$ 7k/mês</li>
                <li><strong>42% de redução em custos operacionais</strong></li>
              </ul>

              <p><strong>ROI:</strong></p>
              <ul>
                <li>Investimento: R$ 28k (consultoria + implementação)</li>
                <li>Economia mensal: R$ 7,5k</li>
                <li>Payback: 3.7 meses</li>
                <li><strong>ROI em 12 meses: 340%</strong></li>
              </ul>

              <h3>Resultados Qualitativos:</h3>
              <p><strong>Time mais feliz:</strong></p>
              <ul>
                <li>Analista sênior finalmente fazendo trabalho estratégico</li>
                <li>Zero estresse com retrabalho</li>
                <li>Vendedores vendendo mais (não perdendo tempo com burocracia)</li>
              </ul>

              <p><strong>Gestão mais confiante:</strong></p>
              <ul>
                <li>Decisões baseadas em dados atualizados</li>
                <li>Visibilidade real do que está acontecendo</li>
                <li>Capacidade de crescer sem contratar mais operação</li>
              </ul>

              <h2>As Lições Aprendidas</h2>

              <h3>1. Automação não precisa ser cara ou complexa</h3>
              <p>Total investido: R$ 28k. Isso incluiu:</p>
              <ul>
                <li>Consultoria e mapeamento de processos</li>
                <li>Implementação de todas automações</li>
                <li>Capacitação do time</li>
                <li>30 dias de suporte</li>
              </ul>
              <p><strong>Não precisa de sistema customizado de R$ 200k.</strong></p>

              <h3>2. N8N é game changer</h3>
              <p>Antes cogitaram desenvolver sistema próprio. Orçamento: R$ 150k, prazo: 6 meses.</p>
              <p>Com N8N:</p>
              <ul>
                <li>Implementação: 7 semanas</li>
                <li>Custo: R$ 28k</li>
                <li>Manutenção: Time consegue fazer internamente</li>
              </ul>
              <p><strong>Workflow automation {'>'} desenvolvimento custom para 90% dos casos.</strong></p>

              <h3>3. Começar pequeno, escalar rápido</h3>
              <p>Não tentamos automatizar tudo de uma vez. Priorizamos por:</p>
              <ol>
                <li>Impacto financeiro</li>
                <li>Facilidade de implementação</li>
                <li>Risco de dar errado</li>
              </ol>
              <p>Começamos com MVP, provamos valor, escalamos.</p>

              <h2>Como Replicar na Sua Empresa</h2>

              <h3>Passo 1: Mapeie processos reais (não ideais)</h3>
              <p>Liste tudo que time faz manualmente e repetitivamente. Pergunte:</p>
              <ul>
                <li>Quanto tempo gasta?</li>
                <li>Qual o custo desse tempo?</li>
                <li>Quantos erros acontecem?</li>
                <li>Qual o impacto se automatizar?</li>
              </ul>

              <h3>Passo 2: Priorize por ROI</h3>
              <p>Crie matriz:</p>
              <ul>
                <li>Eixo X: Facilidade de implementação</li>
                <li>Eixo Y: Impacto financeiro</li>
              </ul>
              <p>Comece pelo quadrante "fácil + alto impacto".</p>

              <h3>Passo 3: Faça MVP em 1-2 semanas</h3>
              <p>Não planeje projeto de 6 meses. Pegue 1 processo, automatize em 1-2 semanas, valide.</p>

              <h3>Passo 4: Meça resultados reais</h3>
              <ul>
                <li>Tempo economizado</li>
                <li>Erros reduzidos</li>
                <li>Custos evitados</li>
                <li>Satisfação do time</li>
              </ul>
              <p>Números reais, não estimativas.</p>

              <h3>Passo 5: Escale baseado em aprendizados</h3>
              <p>Replique o que funcionou. Ajuste o que não funcionou. Expanda para próximos processos.</p>

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
                    Consultor especializado em otimização de operações de TI com IA e automação. 
                    20+ anos liderando projetos críticos, incluindo operações de R$ 12M+ anuais.
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
              <h3 className="text-2xl font-heading font-bold mb-4">Quer Resultados Similares?</h3>
              <p className="text-lg mb-6 opacity-95">
                Agende consultoria gratuita para mapearmos seus processos e identificarmos oportunidades de automação com ROI claro
              </p>
              <a 
                href="https://wa.me/351932786582?text=Olá, vi o case de redução de custos e gostaria de agendar uma consultoria gratuita"
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
