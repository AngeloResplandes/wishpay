# Wishpay

Landing page de uma plataforma de pagamentos fictícia, desenvolvida com React 19, TypeScript e Vite. O projeto é totalmente estático, focado em apresentação visual e experiência do usuário com animações de scroll e design responsivo de 320px até desktop.

## Stack

- **React 19** — componentes funcionais com hooks
- **TypeScript 5.9** — tipagem estrita
- **Vite 8** — build e HMR
- **CSS Modules** — estilos com escopo por componente
- **General Sans** (Fontshare) — tipografia

## Estrutura

```
src/
├── components/
│   ├── Navbar/          # Header sticky com drawer mobile
│   ├── Hero/            # Banner principal
│   ├── Strategic/       # Seção de segurança
│   ├── Features/        # Cards de funcionalidades
│   ├── Integrations/    # Grid de integrações
│   ├── Pricing/         # Planos de preço
│   ├── FAQ/             # Accordion de perguntas
│   ├── CTABanner/       # Call to action
│   └── Footer/          # Rodapé
├── hooks/
│   ├── useIntersectionObserver.ts  # Animações fade-in no scroll
│   └── useScrolled.ts              # Detecta scroll da navbar
├── icons/               # Componentes SVG
├── styles/
│   ├── globals.css      # Design tokens e reset
│   ├── animations.css   # Keyframes e fade-in-up
│   └── components.css   # Botões e pricing card
└── utils/
    └── smoothScroll.ts  # Scroll suave para seções
```

## Instalação

```bash
npm install
```

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run preview` | Visualiza o build localmente |
| `npm run lint` | Executa o ESLint |

## Design Tokens

As variáveis CSS estão definidas em `src/styles/globals.css`:

```css
--color-purple-deep:  #5B2D8E   /* cor primária */
--color-purple-mid:   #7B3FB5
--color-purple-light: #9B59B6
--font-family:        'General Sans', sans-serif
--container-max:      1200px
--nav-height:         72px
```

## Responsividade

| Breakpoint | Layout |
|---|---|
| 320px | Mobile mínimo — itens em coluna única |
| 375px | iPhone padrão |
| 480px | Mobile — grid de 2 colunas em integrações |
| 640px | Intermediário — grid de 3 colunas |
| 768px | Menu hambúrguer, drawer lateral roxo |
| 1024px | Tablet — visuais decorativos ocultados |
| 1280px | Desktop completo |
