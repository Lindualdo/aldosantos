# PROMPT CORREÇÃO FINAL - ALDOSANTOS.COM

## CONTEXTO
O site atual tem problemas críticos que precisam ser corrigidos:
1. Posicionado como "Aldo Santos Group" (não existe grupo, é consultor solo)
2. Texto em terceira pessoa (deve ser primeira pessoa, autêntico)
3. "Soluções proprietárias" que não existem (mentira)
4. Blog mal formatado e sem CMS para gerenciar
5. Público muito restrito (só empresas de TI)

## OBJETIVO
Reposicionar como consultor sênior de TI que fala diretamente (primeira pessoa), sem promessas falsas, sem blog, foco em serviços reais.

---

## MUDANÇAS ESTRUTURAIS

### REMOVER COMPLETAMENTE
- ❌ Página /blog (e todos os posts)
- ❌ Página /solucoes (produtos fictícios)
- ❌ Seção "Soluções Proprietárias" da home
- ❌ Links para blog no menu e footer
- ❌ Qualquer menção a "Aldo Santos Group"
- ❌ Textos em terceira pessoa

### MANTER
- ✅ Home
- ✅ /transformacao-processos
- ✅ /arquitetura-solucoes-ia
- ✅ /pmo-as-service
- ✅ /sobre
- ✅ /contato

---

## CORREÇÕES DETALHADAS

### 1. METADATA / SEO

**MUDAR EM TODOS OS ARQUIVOS:**

```typescript
// De:
title: "Aldo Santos Group | ..."
// Para:
title: "Aldo Santos | Consultoria de TI & Gestão de Projetos"

// De:
"Aldo Santos Group é uma consultoria..."
// Para:
"Consultor de TI com 20 anos..."
```

---

### 2. HEADER (components/Header.tsx)

**ATUAL:**
```
Logo: "Aldo Santos Group"
Menu: Home | Serviços | Soluções | Blog | Sobre | Contato
```

**CORRIGIR PARA:**
```
Logo: "Aldo Santos"
Menu: Home | Serviços | Sobre | Contato
```

**REMOVER:**
- Link "Soluções"
- Link "Blog"
- Dropdown "Serviços" continua com as 3 linhas

---

### 3. HOME - HERO SECTION

**SUBSTITUIR COMPLETAMENTE POR:**

```html
<section class="hero bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
  <div class="container mx-auto px-4 max-w-4xl">
    <h1 class="text-5xl font-bold mb-6">Aldo Santos</h1>
    <p class="text-2xl font-semibold mb-4">Consultoria de TI & Gestão de Projetos</p>
    <p class="text-xl mb-8 text-gray-300">
      Consultor de TI com 20 anos liderando projetos críticos que não podem falhar. 
      Especialista em gestão de operações complexas, arquitetura de soluções e 
      implementação de IA em ambientes corporativos.
    </p>
    <p class="text-lg mb-8 text-gray-300">
      Ajudo empresas com área de TI interna e empresas de tecnologia a resolver 
      projetos travados, eliminar processos manuais e implementar IA sem queimar orçamento.
    </p>
    <div class="flex gap-4">
      <a href="https://wa.me/351932786582?text=Olá, gostaria de agendar uma conversa" 
         class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded font-semibold">
        Agendar Conversa
      </a>
      <a href="#servicos" 
         class="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded font-semibold">
        Ver Serviços
      </a>
    </div>
  </div>
</section>
```

---

### 4. HOME - SEÇÃO "QUEM SOU" (substitui "Sobre o Grupo")

**SUBSTITUIR COMPLETAMENTE POR:**

```html
<section class="py-16">
  <div class="container mx-auto px-4 max-w-4xl">
    <h2 class="text-3xl font-bold mb-8">Quem Sou</h2>
    
    <div class="prose prose-lg max-w-none">
      <p class="text-lg text-gray-700 mb-6">
        Passei 20 anos liderando projetos críticos para empresas de referência nos setores 
        de Energia, Financeiro, Saúde e Logística. Gerenciei operações de <strong>R$ 12M+ anuais</strong>, 
        liderei times de <strong>40+ profissionais</strong> e entreguei resultados como 
        <strong>+43% aumento de margem de lucro</strong> e <strong>-45% redução de chamados</strong> 
        mantendo <strong>100% de SLA</strong> em operações 24x7.
      </p>

      <p class="text-lg text-gray-700 mb-6">
        Em 2022-2024, fiz uma pausa estratégica para me especializar profundamente em 
        Inteligência Artificial prática - não teoria acadêmica, mas implementação real 
        com LLMs, automação e agentes inteligentes em produção.
      </p>

      <p class="text-lg text-gray-700 mb-8">
        Hoje combino gestão sênior de projetos com expertise técnica hands-on em IA. 
        Um perfil raro no mercado: falo tanto com C-level sobre estratégia quanto com 
        desenvolvedores sobre arquitetura técnica.
      </p>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6">
        <p class="font-semibold text-gray-900 mb-2">Atuo para:</p>
        <ul class="space-y-1 text-gray-700">
          <li>→ Empresas médias e grandes com área de TI interna</li>
          <li>→ Consultorias de TI e fábricas de software</li>
          <li>→ Empresas em transformação digital</li>
          <li>→ Setores: Tecnologia, Energia, Financeiro, Saúde, Logística, Indústria, Varejo</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

### 5. HOME - NOVA SEÇÃO "COMO TRABALHO"

**ADICIONAR:**

```html
<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4 max-w-5xl">
    <h2 class="text-3xl font-bold text-center mb-4">Como Trabalho</h2>
    <p class="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
      Não entrego apenas PowerPoint. Posso atuar como gerente temporário, 
      arquiteto de soluções ou consultor estratégico - você decide o modelo 
      que faz mais sentido para seu contexto.
    </p>
    
    <div class="grid md:grid-cols-4 gap-8">
      <div class="text-center">
        <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
        <h3 class="font-semibold text-lg mb-2">Conversa Inicial</h3>
        <p class="text-gray-600">30-60 minutos. Você conta a dor, eu digo se posso ajudar e como.</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
        <h3 class="font-semibold text-lg mb-2">Diagnóstico</h3>
        <p class="text-gray-600">1-2 semanas entendendo contexto, processos e oportunidades reais.</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
        <h3 class="font-semibold text-lg mb-2">Proposta Clara</h3>
        <p class="text-gray-600">Escopo, prazo, investimento e resultados esperados mensuráveis.</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
        <h3 class="font-semibold text-lg mb-2">Execução</h3>
        <p class="text-gray-600">Implemento direto, mentoro seu time ou atuo temporariamente.</p>
      </div>
    </div>
  </div>
</section>
```

---

### 6. HOME - SEÇÃO SERVIÇOS (ajustar textos)

**MANTER estrutura dos 3 cards, AJUSTAR descrições:**

**Card 1: Transformação de Processos**
```
Identifico gargalos operacionais e implemento automação com IA e integrações inteligentes. 
Elimino trabalho manual, reduzo custos e aumento produtividade com ROI demonstrado.
```

**Card 2: Arquitetura de Soluções IA**
```
Desenho e implemento soluções de IA adaptadas à sua realidade. Do levantamento de 
requisitos à entrega técnica, garantindo que tecnologia gere resultado financeiro real.
```

**Card 3: PMO as a Service**
```
Atuo como gerente temporário de projetos críticos ou estruturo processos de entrega. 
Assumo projetos travados, reestruturo entregas e capacito times para autonomia.
```

---

### 7. HOME - REMOVER SEÇÃO "SOLUÇÕES PROPRIETÁRIAS"

**DELETAR COMPLETAMENTE** a seção que lista:
- Base de Conhecimento RAG
- Chatbots Especializados
- Automações N8N
- Hub Produtividade

**SUBSTITUIR POR SEÇÃO "EXPERTISE TÉCNICA":**

```html
<section class="py-16">
  <div class="container mx-auto px-4 max-w-4xl">
    <h2 class="text-3xl font-bold mb-8 text-center">Expertise Técnica</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-xl font-semibold mb-4">Gestão & Metodologias</h3>
        <ul class="space-y-2 text-gray-700">
          <li>→ PMI, Scrum, Kanban, SAFe</li>
          <li>→ ITIL (Service Management)</li>
          <li>→ Product Ownership</li>
          <li>→ Business Analysis</li>
          <li>→ Gestão de Riscos e Crises</li>
          <li>→ Liderança de Times</li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-xl font-semibold mb-4">Inteligência Artificial</h3>
        <ul class="space-y-2 text-gray-700">
          <li>→ LangChain, RAG, Multi-Agentes</li>
          <li>→ OpenAI, Anthropic, Google Gemini</li>
          <li>→ N8N (automação de workflows)</li>
          <li>→ Python, APIs, Integrações</li>
          <li>→ Implementação em produção</li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-xl font-semibold mb-4">Desenvolvimento</h3>
        <ul class="space-y-2 text-gray-700">
          <li>→ Backend: Python, C#, .NET, Java</li>
          <li>→ Frontend: React, TypeScript</li>
          <li>→ Bancos: PostgreSQL, SQL Server, Oracle</li>
          <li>→ DevOps: Docker, Git, CI/CD</li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-xl font-semibold mb-4">Setores de Experiência</h3>
        <ul class="space-y-2 text-gray-700">
          <li>→ Energia (8 anos)</li>
          <li>→ Financeiro (4 anos)</li>
          <li>→ Saúde (3 anos)</li>
          <li>→ Logística (2 anos)</li>
          <li>→ Varejo, Tecnologia</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

### 8. HOME - REMOVER SEÇÃO BLOG

**DELETAR COMPLETAMENTE:**
- Seção "Últimos Artigos"
- Cards de posts
- Link "Ver todos os artigos"

---

### 9. HOME - ORDEM FINAL DAS SEÇÕES

```
1. Hero
2. Quem Sou
3. Como Trabalho
4. Serviços (3 cards)
5. Resultados Entregues
6. Experiência com Empresas
7. Expertise Técnica
8. CTA Final
```

---

### 10. PÁGINAS DE SERVIÇO - AJUSTES PRIMEIRA PESSOA

#### TRANSFORMAÇÃO DE PROCESSOS

**Hero - substituir:**
```html
<h1>Processos Manuais Custando Milhares por Mês?</h1>
<p class="text-xl">Implemento automação com IA que elimina trabalho manual e gera ROI demonstrado em 90 dias.</p>
```

**Seção "Sobre o Consultor" - MUDAR PARA:**
```html
<div class="bg-gray-50 p-8 rounded-lg">
  <h3 class="text-2xl font-bold mb-4">Por Que Confiar em Mim</h3>
  <p class="text-gray-700 mb-4">
    Gerenciei operações de R$ 12M+ anuais para 6 das maiores distribuidoras de energia 
    do Brasil (CPFL, Neoenergia, Cemig, EDP, Energisa, Light), com 40+ profissionais 
    sob gestão e 100% de SLA cumprido em operações 24x7.
  </p>
  <p class="text-gray-700">
    Resultados comprovados: +43% aumento de margem de lucro através de otimização de 
    processos, -45% redução de chamados. Conheço as dores porque já resolvi todas.
  </p>
</div>
```

**REMOVER qualquer menção a:**
- "Templates prontos"
- "Soluções proprietárias"
- "Produtos desenvolvidos"

**SUBSTITUIR POR:**
- "Implemento automações customizadas"
- "Desenvolvo soluções sob medida"
- "Utilizo stack moderno: N8N, Python, LangChain, APIs"

#### ARQUITETURA DE SOLUÇÕES IA

**Mesma abordagem:**
- Primeira pessoa
- Sem promessas de produtos prontos
- Foco em capacidade de implementar

#### PMO AS A SERVICE

**Mesma abordagem:**
- Primeira pessoa
- "Atuo como gerente temporário" (não "oferecemos")

---

### 11. PÁGINA SOBRE (/sobre)

**REESCREVER COMPLETAMENTE EM PRIMEIRA PESSOA:**

```html
<section class="py-16">
  <div class="container mx-auto px-4 max-w-4xl">
    <h1 class="text-4xl font-bold mb-8">Sobre Mim</h1>
    
    <div class="prose prose-lg max-w-none">
      <h2 class="text-2xl font-bold mb-4">Minha Trajetória</h2>
      
      <p class="text-lg text-gray-700 mb-6">
        Comecei minha carreira em 2004 e passei 20 anos liderando projetos críticos 
        que não podem falhar. Trabalhei em empresas como Stefanini, Vincit, Meta IT, 
        Cadmus, Tecmach e, mais recentemente, Codex/Grupo Imagem, onde gerenciei a 
        operação de sustentação para as maiores distribuidoras de energia do Brasil.
      </p>

      <h3 class="text-xl font-semibold mb-3">Operações de Alta Escala</h3>
      <p class="text-lg text-gray-700 mb-6">
        Na Codex, liderei uma operação de R$ 12M+ anuais com 40+ profissionais, 
        atendendo CPFL, Neoenergia, Cemig, EDP, Energisa e Light. Gerenciava 9 frentes 
        de serviço diferentes: sustentação 24x7, melhorias, treinamentos, consultorias, 
        integrações e projetos. Entregamos +43% de aumento na margem de lucro, -45% 
        redução em chamados e 100% de cumprimento de SLA.
      </p>

      <h3 class="text-xl font-semibold mb-3">Projetos Críticos em Múltiplos Setores</h3>
      <p class="text-lg text-gray-700 mb-6">
        Antes disso, gerenciei projetos para Banco Rendimento (core bancário e 
        sistemas de pagamento), JSL Logística (workflows integrados ao SAP), 
        Magazine Luiza, Amil Saúde, Hospital Sírio Libanês e outros. Atuei em 
        6 praças simultâneas na Stefanini e participei do processo de certificação 
        CMMI Nível 5.
      </p>

      <h3 class="text-xl font-semibold mb-3">Especialização em IA (2022-2024)</h3>
      <p class="text-lg text-gray-700 mb-6">
        Em 2022, fiz uma pausa estratégica para me especializar profundamente em 
        Inteligência Artificial. Não quis apenas entender teoria - queria implementar 
        em produção. Estudei LangChain, RAG, multi-agentes, N8N, integração de LLMs 
        (OpenAI, Anthropic, Google), e construí projetos reais.
      </p>

      <h3 class="text-xl font-semibold mb-3">Perfil Híbrido Raro</h3>
      <p class="text-lg text-gray-700 mb-8">
        Hoje combino 20 anos de gestão sênior de projetos com expertise técnica 
        hands-on em IA. Falo tanto com CTOs sobre estratégia quanto com desenvolvedores 
        sobre arquitetura técnica. Entendo negócio E tecnologia. Este é um perfil 
        raro no mercado.
      </p>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 class="text-xl font-semibold mb-3">Como Posso Ajudar</h3>
        <p class="text-gray-700 mb-3">Atuo em três frentes principais:</p>
        <ul class="space-y-2 text-gray-700">
          <li><strong>Gestão Temporária:</strong> Assumo projetos críticos travados como gerente temporário (3-6 meses)</li>
          <li><strong>Arquitetura & Implementação:</strong> Desenho e implemento soluções de IA customizadas</li>
          <li><strong>Consultoria Estratégica:</strong> Diagnóstico, roadmap e mentoria de times</li>
        </ul>
      </div>

      <h3 class="text-xl font-semibold mb-3">Formação</h3>
      <ul class="space-y-2 text-gray-700 mb-8">
        <li>→ MBA em Gestão de Projetos - FGV (2013-2015)</li>
        <li>→ Graduação em Tecnologia da Informação - IBTA</li>
        <li>→ Formação IA Makers - Promovaweb (2025)</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">Localização</h3>
      <p class="text-lg text-gray-700">
        Baseado em Lisboa, Portugal. Atendo clientes remotamente no Brasil e Europa. 
        Trabalho em formato PJ, adaptável à necessidade do projeto.
      </p>
    </div>
  </div>
</section>
```

---

### 12. FOOTER

**REMOVER:**
- Links para Blog
- Links para Soluções

**SIMPLIFICAR PARA:**

```html
<footer class="bg-gray-900 text-gray-300 py-12">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      
      <div>
        <h3 class="text-white font-semibold text-lg mb-4">Aldo Santos</h3>
        <p class="text-sm">
          Consultoria de TI & Gestão de Projetos<br/>
          20+ anos de experiência<br/>
          Especialista em IA & Automação
        </p>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-4">Serviços</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/transformacao-processos">Transformação de Processos</a></li>
          <li><a href="/arquitetura-solucoes-ia">Arquitetura de Soluções IA</a></li>
          <li><a href="/pmo-as-service">PMO as a Service</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-4">Contato</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="mailto:lindualdo@hotmail.com">lindualdo@hotmail.com</a></li>
          <li><a href="https://wa.me/351932786582">+351 932 786 582</a></li>
          <li><a href="https://linkedin.com/in/lindualdo">LinkedIn</a></li>
          <li class="pt-2">Lisboa, Portugal<br/>Atendimento: Brasil e Europa</li>
        </ul>
      </div>
      
    </div>
    
    <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
      <p>© 2026 Aldo Santos. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>
```

---

## ARQUIVOS A DELETAR

```
/app/blog/
/app/blog/[slug]/
/app/solucoes/
/content/blog/
```

---

## ARQUIVOS A EDITAR

```
1. app/layout.tsx (metadata)
2. app/page.tsx (home completa)
3. components/Header.tsx (logo + menu)
4. components/Footer.tsx (simplificar)
5. app/transformacao-processos/page.tsx (primeira pessoa)
6. app/arquitetura-solucoes-ia/page.tsx (primeira pessoa)
7. app/pmo-as-service/page.tsx (primeira pessoa)
8. app/sobre/page.tsx (reescrever completo)
9. app/contato/page.tsx (ajustar textos se necessário)
```

---

## INSTRUÇÕES PARA O CURSOR

```
IMPLEMENTE TODAS AS CORREÇÕES DESTE DOCUMENTO:

1. DELETAR:
   - Todas as pastas e arquivos de /blog
   - Pasta /solucoes
   - Pasta /content/blog

2. SUBSTITUIR TEXTOS:
   - Todos "Aldo Santos Group" → "Aldo Santos"
   - Todos textos terceira pessoa → primeira pessoa
   - Remover menções a produtos/templates prontos

3. REESCREVER SEÇÕES:
   - Home: Hero, Quem Sou, Como Trabalho, Expertise Técnica
   - Sobre: Completamente em primeira pessoa
   - Serviços: Ajustar para primeira pessoa

4. SIMPLIFICAR:
   - Header: remover links Blog e Soluções
   - Footer: remover links Blog e Soluções

5. MANTER:
   - Design visual atual
   - Estilos Tailwind
   - Responsividade
   - CTAs WhatsApp
   - Estrutura das 3 páginas de serviço

IMPORTANTE:
- Primeira pessoa em TODO o site
- Zero menções a produtos prontos
- Honesto sobre capacidades reais
- Público ampliado (não só empresas de TI)
```

---

## RESULTADO FINAL

Site comunica:
✅ Consultor sênior honesto
✅ 20 anos experiência real
✅ Capacidade técnica em IA
✅ Sem promessas falsas
✅ Autêntico (primeira pessoa)
✅ Sem blog mal feito
✅ Público ampliado