import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5 Sinais de Que Seu Projeto de TI Vai Falhar (E Como Evitar) | Aldo Santos Group',
  description: 'Identifique problemas críticos antes que se tornem fatais. Baseado em 20 anos gerenciando projetos complexos que não podem falhar.',
}

export default function BlogPost() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-red-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-white hover:text-gray-200 mb-6 inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar ao Blog
            </Link>
            <h1 className="font-heading font-bold mb-6">
              5 Sinais de Que Seu Projeto de TI Vai Falhar (E Como Evitar)
            </h1>
            <div className="flex items-center text-white opacity-90">
              <span>Aldo Santos</span>
              <span className="mx-3">•</span>
              <span>1 Fev 2026</span>
              <span className="mx-3">•</span>
              <span>10 min de leitura</span>
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
                Segundo o PMI, <strong>60-70% dos projetos de TI falham</strong>. Depois de 20 anos gerenciando projetos críticos 
                - operações de R$ 12M+ anuais, times de 40+ pessoas, SLAs de 99.9% - aprendi a identificar sinais de fracasso 
                antes que seja tarde demais.
              </p>

              <div className="bg-red-50 border-l-4 border-accent p-6 my-8">
                <p className="font-bold text-lg mb-2">A boa notícia:</p>
                <p>Todos esses sinais aparecem <strong>cedo</strong>. Se você identificar nas primeiras semanas, 
                ainda dá tempo de corrigir antes do projeto implodir.</p>
              </div>

              <h2>Sinal #1: Ninguém Sabe Exatamente O Que Está Sendo Construído</h2>

              <h3>Como Identificar:</h3>
              <ul>
                <li>Pergunte para 3 membros diferentes do time "o que estamos construindo?" - Você vai ouvir 3 respostas diferentes</li>
                <li>Escopo muda toda semana sem controle formal</li>
                <li>Requisitos vagos tipo "sistema intuitivo", "plataforma escalável"</li>
                <li>Stakeholders dizem "vou saber quando ver"</li>
              </ul>

              <h3>Por Que é Fatal:</h3>
              <p>
                Se nem o time sabe o que está construindo, como vão construir certo? Resultado: retrabalho infinito, 
                prazo estourado, orçamento consumido em features que ninguém pediu.
              </p>

              <h3>Como Corrigir:</h3>
              <div className="bg-green-50 p-6 rounded-lg my-4">
                <p className="font-bold mb-2">Ação Imediata:</p>
                <ol>
                  <li><strong>Pare o desenvolvimento</strong> (sim, completamente)</li>
                  <li><strong>Workshop de 2 dias</strong> com stakeholders + time técnico</li>
                  <li><strong>Defina MVP</strong> - as 3-5 features que PRECISAM estar na v1</li>
                  <li><strong>Escreva User Stories</strong> com critérios de aceitação claros</li>
                  <li><strong>Valide com cliente/usuários finais</strong> antes de voltar a desenvolver</li>
                </ol>
                <p className="mt-4 text-sm italic">Tempo perdido agora = semanas economizadas depois</p>
              </div>

              <h2>Sinal #2: Reuniões Improdutivas Que Ninguém Quer Estar</h2>

              <h3>Como Identificar:</h3>
              <ul>
                <li>Daily de 1h (deveria ser 15min)</li>
                <li>Pessoas no celular ou fazendo outra coisa</li>
                <li>Mesmas decisões sendo refeitas toda semana</li>
                <li>Ninguém anota nada, nada é documentado</li>
                <li>Reuniões terminam sem action items claros</li>
              </ul>

              <h3>Por Que é Fatal:</h3>
              <p>
                Reuniões improdutivas são sintoma de falta de clareza, processo ruim ou conflitos não resolvidos. 
                Time desperdiça 40-50% do tempo em reuniões que não geram valor.
              </p>

              <h3>Como Corrigir:</h3>
              <div className="bg-green-50 p-6 rounded-lg my-4">
                <p className="font-bold mb-2">Implemente Rituais Eficientes:</p>
                <p><strong>Daily (15min max):</strong></p>
                <ul>
                  <li>• O que fiz ontem?</li>
                  <li>• O que vou fazer hoje?</li>
                  <li>• Tem impedimento?</li>
                  <li>• Discussões técnicas vão para depois com pessoas relevantes</li>
                </ul>
                <p className="mt-4"><strong>Planning (2h max):</strong></p>
                <ul>
                  <li>• Define sprint goal</li>
                  <li>• Quebra histórias em tasks</li>
                  <li>• Time commita o que consegue entregar</li>
                </ul>
                <p className="mt-4"><strong>Review + Retrospectiva (1h30 total):</strong></p>
                <ul>
                  <li>• Review: mostra o que foi feito (demo)</li>
                  <li>• Retro: o que melhorar no processo</li>
                </ul>
              </div>

              <h2>Sinal #3: "Quase Pronto" Há 3 Semanas</h2>

              <h3>Como Identificar:</h3>
              <ul>
                <li>Tasks em "90% completo" há semanas</li>
                <li>Time diz "só falta uns ajustes finais"</li>
                <li>Nenhuma feature realmente DONE (testada, revisada, deployável)</li>
                <li>Burndown chart parece escada (não desce suavemente)</li>
              </ul>

              <h3>Por Que é Fatal:</h3>
              <p>
                Os últimos 10% levam 50% do tempo. Se nada está realmente pronto, vocês não têm progresso real. 
                Quando chegar no final, vão descobrir montanhas de integração e bugs.
              </p>

              <h3>Como Corrigir:</h3>
              <div className="bg-green-50 p-6 rounded-lg my-4">
                <p className="font-bold mb-2">Definition of Done Clara:</p>
                <p>Uma task só está DONE quando:</p>
                <ol>
                  <li>✓ Código escrito</li>
                  <li>✓ Testes automatizados passando</li>
                  <li>✓ Code review aprovado</li>
                  <li>✓ Testado em ambiente de staging</li>
                  <li>✓ Documentação atualizada</li>
                  <li>✓ Deploy em produção possível</li>
                </ol>
                <p className="mt-4 font-bold">Regra de ouro: Entrega pequena e completa {'>'} grande e incompleta</p>
              </div>

              <h2>Sinal #4: Dependência de "Pessoa Única"</h2>

              <h3>Como Identificar:</h3>
              <ul>
                <li>"Só o João sabe como isso funciona"</li>
                <li>Se pessoa X ficar doente, projeto para</li>
                <li>Código sem documentação, sem testes</li>
                <li>Conhecimento crítico preso em 1-2 pessoas</li>
                <li>Revisões de código sempre da mesma pessoa</li>
              </ul>

              <h3>Por Que é Fatal:</h3>
              <p>
                Projetos não podem depender de indivíduos. Se pessoa chave sair (doença, férias, demissão), 
                projeto trava completamente. Risco altíssimo.
              </p>

              <h3>Como Corrigir:</h3>
              <div className="bg-green-50 p-6 rounded-lg my-4">
                <p className="font-bold mb-2">Distribua Conhecimento:</p>
                <ol>
                  <li><strong>Pair Programming:</strong> Rode pares diferentes toda semana</li>
                  <li><strong>Documentação Mínima:</strong> README em cada módulo explicando "como funciona" e "como testar"</li>
                  <li><strong>Code Review Rotativo:</strong> Todo mundo revisa código de todo mundo</li>
                  <li><strong>Apresentações Técnicas:</strong> 1x por sprint, alguém apresenta parte crítica do sistema</li>
                  <li><strong>Bus Factor {'>'} 1:</strong> Sempre 2+ pessoas que sabem cada área crítica</li>
                </ol>
              </div>

              <h2>Sinal #5: Problemas Sendo Varridos Para Debaixo do Tapete</h2>

              <h3>Como Identificar:</h3>
              <ul>
                <li>Time não fala sobre riscos ou problemas nas reuniões</li>
                <li>Status report sempre verde ("tudo ok")</li>
                <li>Problemas técnicos "vamos resolver depois"</li>
                <li>Conflitos entre pessoas sendo ignorados</li>
                <li>Pressão para "entregar no prazo a qualquer custo"</li>
              </ul>

              <h3>Por Que é Fatal:</h3>
              <p>
                Problemas não desaparecem sozinhos. Eles crescem. Quanto mais tempo escondidos, maiores e mais caros 
                de resolver. Cultura de "fingir que está tudo bem" é garantia de explosão futura.
              </p>

              <h3>Como Corrigir:</h3>
              <div className="bg-green-50 p-6 rounded-lg my-4">
                <p className="font-bold mb-2">Crie Cultura de Transparência:</p>
                <ol>
                  <li><strong>Retrospectivas Honestas:</strong> Espaço seguro para time falar problemas sem medo</li>
                  <li><strong>Risk Board Visível:</strong> Quadro com riscos identificados + plano de mitigação</li>
                  <li><strong>5 Whys:</strong> Quando algo der errado, descubra causa raiz (não culpados)</li>
                  <li><strong>Celebre Transparência:</strong> Agradeça quem traz problemas cedo</li>
                  <li><strong>Gerente acessível:</strong> Time precisa sentir que pode falar verdade sem retaliação</li>
                </ol>
              </div>

              <h2>Checklist de Saúde do Projeto</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg my-8">
                <p className="font-bold text-lg mb-4">Use semanalmente:</p>
                <div className="space-y-2">
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span>Todo time sabe o que está construindo e por quê?</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span>Reuniões são produtivas e respeitam o tempo?</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span>Pelo menos 1 feature foi 100% concluída essa semana?</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span>Conhecimento crítico está distribuído (bus factor {'>'} 1)?</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span>Time está confortável falando sobre problemas e riscos?</span>
                  </label>
                </div>
                <p className="mt-4 font-bold text-accent">Se marcou menos de 4: Projeto em risco. Aja agora.</p>
              </div>

              <h2>O Que Fazer Se Já Está em Crise</h2>
              
              <p>Se identificou 3+ sinais acima, projeto está em zona crítica. Não entre em pânico. Faça:</p>

              <ol className="space-y-4">
                <li>
                  <strong>Pause e Respire:</strong> Melhor perder 1 semana organizando do que 3 meses no caos
                </li>
                <li>
                  <strong>Diagnóstico Honesto:</strong> Reúna time e stakeholders. Liste problemas reais sem filtro
                </li>
                <li>
                  <strong>Priorize Ruthlessly:</strong> Das 20 coisas quebradas, quais 3 matam o projeto se não resolver?
                </li>
                <li>
                  <strong>Quick Wins Primeiro:</strong> Resolva 1-2 problemas rápidos para recuperar moral do time
                </li>
                <li>
                  <strong>Considere Ajuda Externa:</strong> Às vezes precisa de alguém de fora para ver o que está invisível
                </li>
              </ol>

              <h2>Conclusão</h2>
              <p>
                Projetos não falham de repente. Eles dão avisos claros semanas ou meses antes. 
                A diferença entre sucesso e fracasso está em <strong>reconhecer os sinais cedo</strong> e 
                <strong>ter coragem de corrigir</strong> antes que seja tarde.
              </p>
              <p>
                Nos 20 anos que venho gerenciando projetos críticos, nunca tive um cancelado sob minha gestão. 
                Não porque sou perfeito, mas porque aprendi a ver esses sinais e agir rápido.
              </p>

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
                    20 anos gerenciando projetos críticos. Operações de R$ 12M+ anuais, times de 40+ pessoas, 
                    SLA de 99.9% em operações 24x7. Track record: 100% de entrega, nunca tive projeto cancelado.
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
            <div className="mt-12 p-8 bg-accent text-white rounded-lg text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">Projeto em Crise?</h3>
              <p className="text-lg mb-6 opacity-95">
                Consultoria gratuita para analisar situação e propor plano de recuperação. 
                Transparência total, sem letras miúdas.
              </p>
              <a 
                href="https://wa.me/351932786582?text=Olá, meu projeto está em crise e preciso de ajuda urgente"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-accent hover:bg-gray-100 text-lg px-8 py-4"
              >
                Falar com Gerente Sênior Agora
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
