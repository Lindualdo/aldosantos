import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre | Aldo Santos',
  description: 'Conheça minha trajetória de 20+ anos liderando projetos críticos em Energia, Financeiro, Saúde e Logística. Especialização em IA e gestão de operações complexas.',
}

export default function Sobre() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark to-gray-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-heading font-bold mb-6">
              Sobre Mim
            </h1>
            <p className="text-xl md:text-2xl opacity-95">
              20 anos gerenciando projetos críticos que não podem falhar
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Minha Trajetória */}
            <div className="mb-16">
              <h2 className="text-3xl font-heading font-bold mb-6">Minha Trajetória</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Comecei minha carreira em 2004 e passei 20 anos liderando projetos críticos 
                que não podem falhar. Trabalhei em empresas como Stefanini, Vincit, Meta IT, 
                Cadmus, Tecmach e, mais recentemente, Codex/Grupo Imagem, onde gerenciei a 
                operação de sustentação para as maiores distribuidoras de energia do Brasil.
              </p>
            </div>

            {/* Operações de Alta Escala */}
            <div className="mb-16">
              <h3 className="text-2xl font-heading font-semibold mb-4">Operações de Alta Escala</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Na Codex, liderei uma operação de R$ 12M+ anuais com 40+ profissionais, 
                atendendo CPFL, Neoenergia, Cemig, EDP, Energisa e Light. Gerenciava 9 frentes 
                de serviço diferentes: sustentação 24x7, melhorias, treinamentos, consultorias, 
                integrações e projetos. Entregamos <strong className="text-primary">+43% de aumento na margem de lucro</strong>, 
                <strong className="text-primary"> -45% redução em chamados</strong> e <strong className="text-primary">100% de cumprimento de SLA</strong>.
              </p>
            </div>

            {/* Projetos Críticos */}
            <div className="mb-16">
              <h3 className="text-2xl font-heading font-semibold mb-4">Projetos Críticos em Múltiplos Setores</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Antes disso, gerenciei projetos para Banco Rendimento (core bancário e 
                sistemas de pagamento), JSL Logística (workflows integrados ao SAP), 
                Magazine Luiza, Amil Saúde, Hospital Sírio Libanês e outros. Atuei em 
                6 praças simultâneas na Stefanini e participei do processo de certificação 
                CMMI Nível 5.
              </p>
            </div>

            {/* Especialização em IA */}
            <div className="mb-16">
              <h3 className="text-2xl font-heading font-semibold mb-4">Especialização em IA (2022-2024)</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Em 2022, fiz uma pausa estratégica para me especializar profundamente em 
                Inteligência Artificial. Não quis apenas entender teoria - queria implementar 
                em produção. Estudei LangChain, RAG, multi-agentes, N8N, integração de LLMs 
                (OpenAI, Anthropic, Google), e construí projetos reais.
              </p>
            </div>

            {/* Perfil Híbrido */}
            <div className="mb-16">
              <h3 className="text-2xl font-heading font-semibold mb-4">Perfil Híbrido Raro</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hoje combino 20 anos de gestão sênior de projetos com expertise técnica 
                hands-on em IA. Falo tanto com CTOs sobre estratégia quanto com desenvolvedores 
                sobre arquitetura técnica. Entendo negócio E tecnologia. Este é um perfil 
                raro no mercado.
              </p>
            </div>

            {/* Como Posso Ajudar */}
            <div className="bg-blue-50 border-l-4 border-primary p-8 rounded-r-lg mb-16">
              <h3 className="text-2xl font-heading font-semibold mb-4">Como Posso Ajudar</h3>
              <p className="text-gray-700 mb-4">Atuo em três frentes principais:</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-dark">Gestão Temporária:</strong> Assumo projetos críticos travados como gerente temporário (3-6 meses)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-dark">Arquitetura & Implementação:</strong> Desenho e implemento soluções de IA customizadas
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-dark">Consultoria Estratégica:</strong> Diagnóstico, roadmap e mentoria de times
                  </div>
                </li>
              </ul>
            </div>

            {/* Formação */}
            <div className="mb-16">
              <h3 className="text-2xl font-heading font-semibold mb-4">Formação</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>MBA em Gestão de Projetos - FGV (2013-2015)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Graduação em Tecnologia da Informação - IBTA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Formação IA Makers - Promovaweb (2025)</span>
                </li>
              </ul>
            </div>

            {/* Localização */}
            <div className="card bg-gray-50">
              <h3 className="text-2xl font-heading font-semibold mb-4">Localização</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Baseado em Lisboa, Portugal. Atendo clientes remotamente no Brasil e Europa. 
                Trabalho em formato PJ, adaptável à necessidade do projeto.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Vamos Conversar?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Entre em contato para discutir como posso ajudar em seu projeto ou operação.
            </p>
            <a 
              href="https://wa.me/351932786582?text=Olá, gostaria de agendar uma conversa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
