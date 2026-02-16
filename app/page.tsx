import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import SolutionCard from '@/components/SolutionCard'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold mb-6">
              Aldo Santos Group
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold opacity-95">
              Consultoria de TI & Gestão de Projetos
            </p>
            <p className="text-xl md:text-2xl mb-8 font-medium opacity-90">
              Projetos Estratégicos Sem Expandir Headcount
            </p>
            <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Capacidade sênior sob demanda para empresas de TI, consultorias e fábricas de software. Gestão de projetos críticos, 
              arquitetura de soluções e automação com IA. 20+ anos entregando resultados mensuráveis em Energia, Financeiro, Saúde e Logística.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/351932786582?text=Olá, gostaria de agendar uma consultoria gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-8 py-4"
              >
                Agendar Consultoria Gratuita
              </a>
              <Link href="#servicos" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                Conheça Nossos Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Grupo */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Sobre o Grupo</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-dark">Aldo Santos Group</strong> é uma consultoria especializada em gestão de projetos de TI 
                e transformação de operações. Com expertise profunda em IA e automação, resolvemos as dores mais urgentes de empresas 
                de tecnologia: projetos críticos sem liderança sênior, processos manuais insustentáveis e falta de capacidade técnica especializada.
              </p>
              <p>
                Nossa abordagem combina gestão sênior de projetos com expertise técnica hands-on em IA - um perfil raro no mercado. 
                Não somos uma agência genérica: somos especialistas que já gerenciaram operações de <strong className="text-primary">R$ 12M+ anuais</strong>, 
                lideraram times de <strong className="text-primary">40+ profissionais</strong> e entregaram projetos com 
                <strong className="text-primary"> ROI de 340%</strong> em menos de 90 dias.
              </p>
              <p>
                Trabalhamos com empresas de TI, consultorias e fábricas de software que precisam de capacidade sênior sem comprometer 
                orçamento, resolver gargalos operacionais críticos ou implementar IA de forma prática e rentável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Trabalhamos */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-center mb-4">Como Trabalhamos</h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Não somos consultoria genérica que entrega PowerPoint. Atuamos de forma estratégica 
            ou hands-on, dependendo da necessidade. Resultado mensurável é garantia.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Diagnóstico</h3>
              <p className="text-gray-600">
                1-2 semanas entendendo contexto, processos, dores reais e oportunidades de melhoria.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Proposta Clara</h3>
              <p className="text-gray-600">
                Plano de ação com escopo, prazo, investimento e resultados esperados mensuráveis.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Execução ou Mentoria</h3>
              <p className="text-gray-600">
                Posso executar direto, mentorar seu time ou atuar como gerente temporário. Você decide.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Resultados Mensuráveis</h3>
              <p className="text-gray-600">
                Entregas com métricas claras de sucesso. ROI demonstrado, não promessas vazias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Linhas de Serviço */}
      <section id="servicos" className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-center mb-4">Linhas de Serviço</h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Soluções especializadas para otimizar operações, implementar IA e estruturar gestão de projetos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Transformação de Processos"
              description="Identificamos gargalos operacionais e automatizamos com IA e integrações inteligentes. Eliminamos trabalho manual, reduzimos custos e aumentamos produtividade com ROI demonstrado em 90 dias."
              link="/transformacao-processos"
            />
            <ServiceCard
              title="Arquitetura de Soluções IA"
              description="Desenhamos e implementamos soluções de IA adaptadas à sua realidade. Desde o levantamento de requisitos até a entrega técnica, garantindo que tecnologia gere resultado financeiro real."
              link="/arquitetura-solucoes-ia"
            />
            <ServiceCard
              title="PMO as a Service"
              description="Gestão temporária de projetos críticos ou estruturação de processos de entrega. Assumimos projetos travados, restruturamos entregas e capacitamos seu time para autonomia."
              link="/pmo-as-service"
            />
          </div>
        </div>
      </section>

      {/* Resultados Entregues */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <h2 className="text-center mb-12 text-white">Resultados Entregues</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">R$ 12M+</div>
              <div className="text-gray-300">Operação Gerenciada</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">40+</div>
              <div className="text-gray-300">Profissionais Liderados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+43%</div>
              <div className="text-gray-300">Aumento Margem Lucro</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">340%</div>
              <div className="text-gray-300">ROI em Projeto IA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-300">SLA Cumprido</div>
            </div>
          </div>
        </div>
      </section>

      {/* Empresas/Clientes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-4">Experiência com Empresas de Referência</h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Projetos críticos entregues para líderes de mercado em diversos setores
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              'CPFL Energia', 'Neoenergia', 'Cemig', 'EDP', 'Energisa',
              'Light', 'Banco Rendimento', 'JSL Logística', 'Amil Saúde', 'Hospital Sírio Libanês',
              'Magazine Luiza', 'Stefanini', 'Vincit', 'Meta IT', 'Cadmus'
            ].map((company) => (
              <div key={company} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-semibold text-dark">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ferramentas Que Usamos */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-center mb-4">Ferramentas Que Usamos</h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Soluções proprietárias desenvolvidas ao longo de 20 anos que aceleram a implementação e garantem resultados. 
            Estas ferramentas são utilizadas dentro dos nossos serviços de consultoria, não vendidas separadamente.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <SolutionCard
              title="Base de Conhecimento RAG"
              description="Sistema inteligente que centraliza toda documentação técnica e operacional da empresa. Sua equipe consulta como se fosse o especialista mais sênior, reduzindo onboarding de meses para semanas."
            />
            <SolutionCard
              title="Chatbots Especializados"
              description="Agentes de IA treinados para diferentes áreas: Negócios (POs, pré-venda), Gestão (diretores, gerentes), Desenvolvimento (times técnicos) e RH (bem-estar, recrutamento). Disponíveis 24/7."
            />
            <SolutionCard
              title="Automações N8N"
              description="Templates prontos de automação para processos críticos de TI: integração de sistemas, workflows de aprovação, dashboards em tempo real, alertas inteligentes. Implementação rápida."
            />
            <SolutionCard
              title="Hub Produtividade Projetos"
              description="Ferramentas e processos para aumentar eficiência de gestão de projetos: templates de documentação, checklists automatizados, métricas em tempo real, rituais otimizados."
            />
          </div>
          <div className="text-center">
            <Link href="/solucoes" className="btn btn-secondary text-lg px-8 py-4">
              Ver Todas as Soluções
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Recente */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Últimos Artigos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: 'Por Que Sua Consultoria de TI Precisa de IA',
                excerpt: 'Entenda como IA pode transformar operações de consultoria de TI e quais erros evitar na implementação.',
                date: '15 Fev 2026',
                slug: 'por-que-consultoria-ti-precisa-ia'
              },
              {
                title: 'Como Reduzir 42% dos Custos Operacionais com Automação',
                excerpt: 'Case real de transformação de processos com automação inteligente e ROI comprovado.',
                date: '10 Fev 2026',
                slug: 'reduzir-custos-operacionais-automacao'
              },
              {
                title: 'RAG vs Fine-Tuning: Qual Usar na Sua Empresa?',
                excerpt: 'Comparação técnica e prática entre RAG e Fine-tuning para base de conhecimento corporativa.',
                date: '5 Fev 2026',
                slug: 'rag-vs-finetuning-base-conhecimento'
              }
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card hover:scale-105 transition-transform">
                <div className="bg-gradient-to-br from-primary to-blue-600 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-heading font-bold text-dark mb-3">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog" className="btn btn-outline text-lg px-8 py-4">
              Ver Todos os Artigos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="Pronto para Otimizar Suas Operações de TI?"
        description="Agende uma consultoria gratuita e descubra como podemos ajudar sua empresa a eliminar gargalos, automatizar processos e aumentar a produtividade com IA."
        buttonText="Falar com Especialista no WhatsApp"
        buttonLink="https://wa.me/351932786582?text=Olá, gostaria de agendar uma consultoria gratuita"
      />
    </>
  )
}
