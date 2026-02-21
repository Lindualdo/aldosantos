# Home v3 — Estratégia e Racional

## O que mudou em relação à v2

| Aspecto | v2 (anterior) | v3 (nova) |
|---|---|---|
| **Serviço** | 4 linhas de serviço separadas | Serviço **único**: Transformação Digital |
| **Dores** | Genéricas no hero, sem detalhe | 12 dores agudas organizadas em **4 camadas** |
| **Solução** | Cards de serviço + link para LPs | Funil **Diagnóstico → Redesenho → Implementação → Resultado** |
| **Decisão do cliente** | Escolher qual serviço quer | Priorizar onde começar (resultado do diagnóstico) |
| **Autoridade** | Implícita nos cards | Secção dedicada "Por que funciona comigo" — 4 competências |
| **CTA principal** | "Falar Comigo" (genérico) | "Agendar Diagnóstico" (específico, próximo passo claro) |

## Estrutura da página

### 1. Hero
- Headline com dor financeira concreta (42% do orçamento)
- CTA primário: "Agendar Diagnóstico"
- CTA secundário: "Ver Resultados"

### 2. Dores — 4 Camadas
Cada camada com 3 dores agudas, curtas, reconhecíveis:

- **Camada 1 — Processos Operacionais** (vermelho): tarefas manuais, retrabalho, sistemas em silos
- **Camada 2 — Gestão e Delivery** (verde): projetos atrasados, sem métricas, stakeholders insatisfeitos
- **Camada 3 — Engenharia de Software** (cinza escuro): esteira caótica, requisitos errados, time sem processo
- **Camada 4 — Conhecimento e Autonomia** (roxo): perda de conhecimento, onboarding lento, perguntas repetidas

### 3. Como Resolvo — Funil de 4 Etapas
1. **Diagnóstico** (1-2 sem) — mapeia as 4 camadas, calcula custo, prioriza
2. **Redesenho** (1-2 sem) — simplifica processos, desenha automação
3. **Implementação** (4-12 sem) — lidera delivery até produção
4. **Resultado e Autonomia** — mede impacto, documenta, equipe assume

O diagnóstico é a porta de entrada. A empresa decide onde priorizar.

### 4. Por Que Funciona Comigo — Autoridade
4 competências que justificam o diferencial:
- Negócio (C-level, P&L, margem)
- Gestão (20 anos, R$12M+, 50+ pessoas)
- Engenharia (analista → arquiteto → líder técnico)
- IA & Automação (hands-on: LangChain, RAG, N8N)

Mensagem-chave: "A maioria dos consultores entende uma camada. Eu transito entre as quatro."

### 5. Resultados — Números Reais
Mesmos KPIs validados: 20+ anos, R$12M+, 50+, +43% margem, -42% custos, 100% SLA

### 6. Empresas que Confiam
Logos reais de clientes anteriores (mantidos da v2)

### 7. CTA Final
"Quer saber onde sua operação está sangrando dinheiro?" → "Agendar Diagnóstico"

## LPs existentes
As landing pages existentes continuam acessíveis como base de conhecimento:
- `/transformacao-processos` — Otimização de Processos
- `/pmo-as-service` — PMO as a Service
- `/consultoria-engenharia-software` — Engenharia de Software
- `/base-conhecimento-ia` — Base de Conhecimento com IA

Não aparecem como "serviços separados" na home. Podem ser usadas futuramente como destino de posts do LinkedIn para testar estratégia de LPs dedicadas.

## Decisão pendente
- Quando promover a v3 para raiz (`app/page.tsx`), o mesmo processo da v2 será seguido: copiar conteúdo e ajustar links.
- Header e Footer v2 podem precisar de ajuste para remover links individuais de serviço e manter apenas "Serviços → #dores" ou similar.

## Rota de teste
Acessar em: `/v3`
