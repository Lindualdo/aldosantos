import Link from 'next/link'

export default function Sobre() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="pt-24 pb-16 px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-8">
          Especialista em Transformação Digital e Otimização de Processos.
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-12">
          Com mais de 20 anos conduzindo mudanças estruturais, minha missão é fazer a ponte entre as expectativas isoladas do C-level e a realidade da execução técnica, eliminando o desgaste operacional no meio do caminho.
        </p>
      </section>

      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">

            <h3 className="text-2xl font-bold text-slate-900 mb-6">Uma anomalia de mercado: Visão de Negócio + Execução Hands-on</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Minha atuação combina competências que raramente coexistem no mesmo profissional: gestão de projetos e portfólios em larga escala, análise implacável de processos de negócio, e a capacidade técnica (hands-on) para desenhar arquiteturas envolto ao moderno (como automação inteligente e IA aplicada).
            </p>
            <p className="text-slate-600 mb-12 leading-relaxed">
              Não sou o consultor que deixa um PowerPoint na sua mesa e vai embora. Eu entro na operação, diagnostico o sangramento de margem, projeto o workflow correto (descartando burocracia viciada) e lidero a implementação até que o resultado final repouse pacificamente na demonstração de resultados (P&L).
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-6">Da Gestão de Crise ao Turnaround</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Durante as duas décadas que compõem meu histórico, atendi clientes colossais (Grupo Imagem, Vincit, CPFL, Neoenergia, Stefanini, Magalu). Vi operações derreterem por excesso de trabalho braçal e vi portfólios sangrarem por desconexão entre "Quem vende o projeto" e "Quem precisa entregá-lo (Delivery)".
            </p>
            <p className="text-slate-600 mb-12 leading-relaxed">
              Como Delivery Manager e head de operações, já geri diretamente carteiras de <strong>R$ 12M+ por ano</strong>, controlando margens, processos em CMMI/ITIL/Ágil, governança rigorosa e liderando um exército de mais de 50 profissionais técnicos e de negócio espalhados.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-6">O Movimento Independente (Europa x América)</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Em 2024 finalizei minha migração para Portugal e destravei um novo passo: <strong>O modelo de atuação independente e sênior.</strong>
            </p>
            <p className="text-slate-600 mb-12 leading-relaxed">
              Atendendo prioritariamente o eixo Portugal e Brasil (Remoto), expus meus métodos sob medida e o uso de IA corporativa sob o guarda-chuva de consultor independente, abraçando projetos vitais de estruturação e assumindo operações interinas (Interim Management). O objetivo continua central: Resolver dor crônica B2B.
            </p>

          </div>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Como formato minha liderança (Stack Funcional)</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl text-slate-300">
            <h3 className="text-white font-bold text-xl mb-6">Governança & Delivery</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span>•</span> Gestão de Projetos e PMO as a Service</li>
              <li className="flex gap-2"><span>•</span> ITIL (AMS / Monitoria N1-N3)</li>
              <li className="flex gap-2"><span>•</span> Business e Requirements Analysis</li>
              <li className="flex gap-2"><span>•</span> PMI / Scrum / Kanban em Times Críticos</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-2xl text-slate-600 shadow-sm">
            <h3 className="text-slate-900 font-bold text-xl mb-6">IA & Otimização</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span className="text-blue-500">•</span> Mapeamento de Valor e Gargalos</li>
              <li className="flex gap-2"><span className="text-blue-500">•</span> Automação de Workflows Avançados (RPA)</li>
              <li className="flex gap-2"><span className="text-blue-500">•</span> Bases Integradas (RAG) Inteligentes</li>
              <li className="flex gap-2"><span className="text-blue-500">•</span> Agentes Especialistas Integrados a ERPs</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-2xl text-slate-600 shadow-sm">
            <h3 className="text-slate-900 font-bold text-xl mb-6">Viabilidade & Tech</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span className="text-blue-500">•</span> Arquitetura de Solução entre Áreas</li>
              <li className="flex gap-2"><span className="text-blue-500">•</span> Pontes entre Comercial (Venda) e Tech (Handover)</li>
              <li className="flex gap-2"><span className="text-blue-500">•</span> Integração de Sistemas Siloados (APIs)</li>
              <li className="flex gap-2"><span className="text-blue-500">•</span> Mentoria Técnica para Devs e Analistas</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-32 px-6 lg:px-8 text-center max-w-3xl mx-auto">
        <Link
          href="https://wa.me/351932786582?text=Olá Aldo, estava no seu site e gostaria de conversar sobre a possibilidade de trabalharmos juntos na operação."
          target="_blank"
          className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-xl shadow-blue-500/20 text-lg"
        >
          Agendar uma Conversa de Trabalho
        </Link>
      </section>
    </div>
  )
}
