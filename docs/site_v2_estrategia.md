# SITE aldosantos.com - v2: ESTRATÉGIA E RACIONAL
20/02

---

## O QUE MUDOU (v1 → v2)

### v1 (atual em produção)
- **Posicionamento:** "Consultor de TI que faz gestão, engenharia de software e IA"
- **Tom:** Prestador de serviço
- **Hero:** "Consultoria de TI | Gestão de Projetos | Automação com IA"
- **Problema:** Generalista, não diferencia, não gera autoridade

### v2 (novo)
- **Posicionamento:** "Especialista em Transformação Digital e Otimização de Processos"
- **Tom:** Autoridade que lidera transformação
- **Hero:** Foco em transformação e resultado de negócio
- **AutomateAI:** Card como vertical de soluções de IA para PMEs
- **Objetivo:** Base para content marketing (LinkedIn, posts, artigos → site)

---

## POR QUE ESSA MUDANÇA

1. **Coerência com LinkedIn v3** — O perfil diz "Especialista em Transformação Digital", o site reforça
2. **Autoridade > Serviço** — Site deixa de ser catálogo de serviços e passa a ser hub de autoridade
3. **Funil de conteúdo** — Posts no LinkedIn → artigos → site → conversão (WhatsApp/contato)
4. **AutomateAI SEPARADA** — Não aparece no site. São públicos diferentes. A AutomateAI aponta para o Aldo (credibilidade do fundador), não o contrário

---

## ESTRUTURA DA HOMEPAGE v2

1. **Hero** — Posicionamento de autoridade em transformação digital
2. **Quem Sou** — Reescrito como narrativa de transformação (não de serviços)
3. **Como Entrego Transformação** — Processo de trabalho (mantém os 4 passos, ajusta linguagem)
4. **Resultados** — Números corrigidos e alinhados com LinkedIn
5. **Serviços** — 4 cards focados em transformação (sem AutomateAI)
6. **Empresas** — Logos (mantém, gera prova social)
7. **Expertise** — Corrigido (typo "proessos" → "processos")
8. **CTA** — Ajustado para tom de autoridade

---

## O QUE FOI CORRIGIDO

- Typo: "proessos" → "processos"
- Número: "63% ROI" → "340% ROI em 90 dias" (alinhado com LinkedIn e automateai.pt)
- "40+" profissionais → "50+" (alinhado com LinkedIn v3)
- Subtítulo genérico → posicionamento de transformação
- AutomateAI removida do site (público diferente, dilui autoridade). O fluxo correto é: AutomateAI → perfil do fundador → aldosantos.com e LinkedIn

---

## FICHEIROS DA v2

Todos os ficheiros vivem em pastas separadas para não sobrescrever a v1:

- `app/v2/page.tsx` — Homepage v2
- `app/v2/layout.tsx` — Layout com SEO v2
- `components/v2/HeaderV2.tsx` — Header atualizado
- `components/v2/FooterV2.tsx` — Footer atualizado
- `components/v2/HeroV2.tsx` — Hero com tom de autoridade
- `components/v2/CTASectionV2.tsx` — CTA ajustado

Para testar: aceder a `localhost:3000/v2`
Para publicar: mover conteúdo de `app/v2/page.tsx` para `app/page.tsx` e componentes v2 para componentes principais
