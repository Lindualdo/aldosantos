# PROMPT DE CORREÇÃO - SITE ALDOSANTOS.COM

## CONTEXTO
O site está funcional e com boa estrutura, MAS o posicionamento está invertido: parece "agência de IA e automação" quando deveria ser "consultoria sênior de TI que também domina IA".

## OBJETIVO DA CORREÇÃO
Reposicionar o site para refletir 20 anos de gestão de projetos como base, com IA como diferencial técnico poderoso - não como foco principal.

---

## CORREÇÕES NECESSÁRIAS

### 1. HEADER (components/Header.tsx)

**ATUAL:**
```
Logo: "Aldo Santos Group"
```

**MANTER** - Está correto.

---

### 2. HOME - HERO SECTION (app/page.tsx)

**ATUAL:**
```html
<h1>Aldo Santos Group</h1>
<p>Consultoria Especializada em Otimização de Operações de TI com Inteligência Artificial</p>
<p>Transformamos processos manuais em operações automatizadas e eficientes. Com 20+ anos de experiência liderando projetos críticos para empresas de referência, entregamos resultados mensuráveis desde o primeiro dia.</p>
```

**CORRIGIR PARA:**
```html
<h1>Aldo Santos Group</h1>
<p class="text-xl font-semibold mb-4">Consultoria de TI & Gestão de Projetos</p>
<p class="text-lg mb-6">Projetos Estratégicos Sem Expandir Headcount</p>
<p>Capacidade sênior sob demanda para empresas de TI, consultorias e fábricas de software. Gestão de projetos críticos, arquitetura de soluções e automação com IA. 20+ anos entregando resultados mensuráveis em Energia, Financeiro, Saúde e Logística.</p>
```

**RAZÃO:**
- Estabelece "Consultoria TI" primeiro
- "Gestão de Projetos" no mesmo nível de "IA"
- Headline focada em dor do decisor (headcount, não automação)
- Menciona IA como parte do toolkit, não como identidade

---

### 3. HOME - SEÇÃO "SOBRE O GRUPO"

**ATUAL:**
```
Aldo Santos Group é uma consultoria especializada em otimização de operações de TI através de Inteligência Artificial e automação de processos.
```

**CORRIGIR PARA:**
```
Aldo Santos Group é uma consultoria especializada em gestão de projetos de TI e transformação de operações. Com expertise profunda em IA e automação, resolvemos as dores mais urgentes de empresas de tecnologia: projetos críticos sem liderança sênior, processos manuais insustentáveis e falta de capacidade técnica especializada.
```

**SEGUNDO PARÁGRAFO - ATUAL:**
```
Nossa abordagem combina gestão sênior de projetos com expertise técnica hands-on em IA - um perfil raro no mercado.
```

**MANTER** - Este parágrafo está correto.

**TERCEIRO PARÁGRAFO - ATUAL:**
```
Trabalhamos com empresas de TI, consultorias e fábricas de software que precisam de capacidade sênior sem comprometer orçamento, resolver gargalos operacionais críticos ou implementar IA de forma prática e rentável.
```

**MANTER** - Está correto.

---

### 4. HOME - NOVA SEÇÃO "COMO TRABALHAMOS" (ADICIONAR)

**INSERIR APÓS "SOBRE O GRUPO" E ANTES DE "LINHAS DE SERVIÇO":**

```html
<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Como Trabalhamos</h2>
    <p class="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
      Não somos consultoria genérica que entrega PowerPoint. Atuamos de forma estratégica 
      ou hands-on, dependendo da necessidade. Resultado mensurável é garantia.
    </p>
    
    <div class="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      <div class="text-center">
        <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
        <h3 class="font-semibold text-lg mb-2">Diagnóstico</h3>
        <p class="text-gray-600 text-sm">1-2 semanas entendendo contexto, processos, dores reais e oportunidades de melhoria.</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
        <h3 class="font-semibold text-lg mb-2">Proposta Clara</h3>
        <p class="text-gray-600 text-sm">Plano de ação com escopo, prazo, investimento e resultados esperados mensuráveis.</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
        <h3 class="font-semibold text-lg mb-2">Execução ou Mentoria</h3>
        <p class="text-gray-600 text-sm">Posso executar direto, mentorar seu time ou atuar como gerente temporário. Você decide.</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
        <h3 class="font-semibold text-lg mb-2">Resultados Mensuráveis</h3>
        <p class="text-gray-600 text-sm">Entregas com métricas claras de sucesso. ROI demonstrado, não promessas vazias.</p>
      </div>
    </div>
  </div>
</section>
```

**RAZÃO:**
- Diferencia de agências (execução vs apenas entrega)
- Mostra processo claro e profissional
- Reforça posicionamento consultivo sênior

---

### 5. HOME - SEÇÃO "SOLUÇÕES PROPRIETÁRIAS"

**ATUAL:**
```html
<h2>Nossas Soluções Proprietárias</h2>
<p>Ferramentas e produtos desenvolvidos para acelerar resultados e garantir qualidade desde o primeiro dia</p>
```

**CORRIGIR PARA:**
```html
<h2>Ferramentas Que Usamos</h2>
<p>Soluções proprietárias desenvolvidas ao longo de 20 anos que aceleram a implementação e garantem resultados. Estas ferramentas são utilizadas dentro dos nossos serviços de consultoria, não vendidas separadamente.</p>
```

**RAZÃO:**
- Deixa claro que NÃO são produtos à venda
- São ferramentas DO serviço de consultoria
- Reforça "20 anos" (experiência, não startup nova)

---

### 6. HOME - ORDEM DAS SEÇÕES (REORGANIZAR)

**ORDEM ATUAL:**
1. Hero
2. Sobre o Grupo
3. Linhas de Serviço
4. Soluções Proprietárias
5. Resultados
6. Empresas
7. Blog
8. CTA Final

**ORDEM CORRETA:**
1. Hero
2. Sobre o Grupo
3. **Como Trabalhamos** (NOVA SEÇÃO)
4. Linhas de Serviço
5. Resultados Entregues
6. Empresas/Clientes
7. Ferramentas Que Usamos (ex-Soluções Proprietárias)
8. Blog Recente
9. CTA Final

**RAZÃO:**
- "Como Trabalhamos" estabelece processo profissional logo cedo
- Resultados antes de ferramentas (prova social primeiro)
- Ferramentas por último = complemento, não foco

---

### 7. METADATA / SEO (app/layout.tsx ou page.tsx)

**ATUAL:**
```typescript
title: "Aldo Santos Group | Consultoria Especializada em IA e Automação"
description: "Consultoria especializada em otimização de operações de TI..."
```

**CORRIGIR PARA:**
```typescript
title: "Aldo Santos Group | Consultoria de TI & Gestão de Projetos | Especialista em IA"
description: "Consultoria sênior de TI com 20+ anos em gestão de projetos críticos. Especialista em IA, automação e transformação de operações para empresas de tecnologia. Capacidade sob demanda sem expandir headcount."
```

**RAZÃO:**
- SEO prioriza "Consultoria TI" e "Gestão Projetos"
- IA como especialização, não identidade
- Palavras-chave: capacidade sob demanda, sênior, sem expandir headcount

---

### 8. PÁGINAS DE SERVIÇO (AJUSTES MENORES)

#### TRANSFORMAÇÃO DE PROCESSOS (/transformacao-processos)

**HERO ATUAL:**
```
"Processos Manuais Drenando Produtividade e Orçamento?"
```

**MELHORAR PARA:**
```
"Processos Manuais Custando Milhares por Mês?"
```

**RAZÃO:** Mais direto, foco em dinheiro (dor do decisor)

---

#### ARQUITETURA DE SOLUÇÕES IA (/arquitetura-solucoes-ia)

**HERO ATUAL:**
```
"Time Técnico Excelente, Mas Sem Visão de IA?"
```

**MANTER** - Está bom.

**ADICIONAR NO FINAL DA SOLUÇÃO:**
```
IMPORTANTE: Esta não é uma venda de produto pronto. É consultoria especializada que pode resultar em:
- Solução implementada por nós
- Blueprint completo para seu time executar
- Mentoria técnica durante implementação do seu time

Você escolhe o modelo que faz mais sentido para seu contexto e orçamento.
```

**RAZÃO:** Diferencia de vendors que só vendem produto

---

#### PMO AS A SERVICE (/pmo-as-service)

**MANTER COMO ESTÁ** - Esta página está bem posicionada.

---

### 9. PÁGINA SOLUÇÕES (/solucoes)

**INTRO ATUAL:**
```
"Soluções Proprietárias que Aceleram Resultados"
```

**CORRIGIR PARA:**
```html
<h1>Ferramentas e Soluções Proprietárias</h1>
<p class="text-xl text-gray-600 mb-8">
  Ao longo de 20 anos liderando projetos críticos, desenvolvi um arsenal de ferramentas 
  e soluções que aceleram implementação e garantem qualidade. Estas são utilizadas 
  dentro dos nossos serviços de consultoria, adaptadas para cada contexto específico.
</p>
<div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
  <p class="text-gray-700">
    <strong>Importante:</strong> Estas soluções não são vendidas como produtos separados. 
    Elas fazem parte da nossa metodologia de consultoria e são customizadas para cada cliente 
    durante a execução dos projetos.
  </p>
</div>
```

**RAZÃO:**
- Esclarece que NÃO são produtos SaaS à venda
- Reforça "20 anos" e experiência
- Evita confusão com startups de produto

---

### 10. PÁGINA SOBRE (/sobre)

**ADICIONAR NO INÍCIO (ANTES DO TEXTO ATUAL):**

```html
<div class="bg-gray-50 border-l-4 border-blue-500 p-8 mb-12">
  <h2 class="text-2xl font-bold mb-4">Perfil Híbrido Raro no Mercado</h2>
  <p class="text-lg text-gray-700 mb-4">
    A maioria dos gerentes de projeto não tem capacidade técnica hands-on. 
    A maioria dos especialistas em IA não tem experiência gerenciando operações críticas de milhões.
  </p>
  <p class="text-lg text-gray-700 font-semibold">
    Aldo Santos Group combina os dois mundos: 20 anos de gestão sênior + expertise técnica 
    profunda em IA implementada em produção.
  </p>
</div>
```

**RAZÃO:**
- Estabelece o diferencial logo de cara
- Posiciona como perfil raro e valioso
- Justifica o posicionamento do site

---

## RESUMO DAS MUDANÇAS

### CONCEITUAL
1. **De:** Consultoria de IA e automação
2. **Para:** Consultoria de TI sênior que também domina IA

### TEXTUAL
- Hero reescrito (foco em capacidade sênior, não automação)
- Sobre reposicionado (gestão projetos primeiro, IA depois)
- Nova seção "Como Trabalhamos"
- Soluções renomeadas para "Ferramentas Que Usamos"
- Disclaimers que não são produtos à venda

### ESTRUTURAL
- Reordenação de seções (Como Trabalhamos cedo, Ferramentas tarde)
- Metadata SEO ajustada
- Boxes de esclarecimento em Soluções e Sobre

### TOM DE VOZ
- Menos "transformação digital" e "revolucione"
- Mais "capacidade sênior", "resultados mensuráveis", "sem expandir headcount"
- Decisor como público (não time operacional)

---

## IMPLEMENTAÇÃO NO CURSOR

### ARQUIVOS A EDITAR:

1. **app/page.tsx**
   - Hero section (linhas ~15-30)
   - Sobre o Grupo (linhas ~35-50)
   - Adicionar seção "Como Trabalhamos" (após linha ~50)
   - Renomear "Soluções Proprietárias" para "Ferramentas Que Usamos" (linhas ~80-100)
   - Reordenar seções conforme especificado

2. **app/layout.tsx** (ou metadata em page.tsx)
   - Title tag
   - Meta description

3. **app/transformacao-processos/page.tsx**
   - Hero headline (linha ~10)

4. **app/arquitetura-solucoes-ia/page.tsx**
   - Adicionar disclaimer no final da seção Solução

5. **app/solucoes/page.tsx**
   - Intro completa (linhas ~10-25)
   - Adicionar box de esclarecimento

6. **app/sobre/page.tsx**
   - Adicionar box "Perfil Híbrido" no início

---

## INSTRUÇÕES PARA O CURSOR

Cole este prompt completo no Cursor e peça:

```
Implemente todas as correções especificadas neste documento. 
Mantenha o design e estrutura atual, apenas altere os textos e 
reordene as seções conforme especificado. Preserve todos os 
componentes, estilos Tailwind e funcionalidades existentes.

IMPORTANTE: 
- Não mude o design visual
- Não adicione emojis
- Mantenha todos os links e CTAs WhatsApp funcionando
- Preserve a responsividade mobile
- Apenas corrija posicionamento textual e ordem de seções
```

---

## RESULTADO ESPERADO

Após estas correções, o site comunicará:

✅ "Sou consultor sênior de TI com 20 anos de experiência"
✅ "Gestão de projetos é minha base"
✅ "IA é meu diferencial técnico poderoso"
✅ "Não sou agência junior, sou capacidade sênior sob demanda"
✅ "Falo com decisores (CTOs, diretores), não com operacional"

Ao invés de:

❌ "Somos agência de automação e IA"
❌ "Vendemos chatbots e produtos"
❌ "Transformação digital genérica"