# Portfólio — Thiago Garcia

Portfólio profissional bilíngue e acessível em React, Vite e TypeScript.

## Como rodar

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run preview
npm run check:placeholders
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e configure as variáveis localmente. `VITE_CONTACT_ACCESS_KEY` é usada pelo formulário Web3Forms e `VITE_WHATSAPP_NUMBER` tem fallback em `src/data/site.ts`. A chave do Web3Forms é pública por desenho; configure também o domínio permitido no painel do serviço. O `.env` local é ignorado pelo Git e não deve ser commitado.

## Como adicionar um projeto

Adicione um objeto ao array `projects` em `src/data/projects.ts`. Os textos bilíngues e metadados são validados pelo tipo `Project`.

## Preencha antes de publicar

- LinkedIn, e-mail e WhatsApp já estão configurados
- Currículo PT: preencher os links de GitHub e Portfólio no PDF e usar Tecnólogo em Marketing; atualizar o PDF em inglês com o link do portfólio após o deploy
- Imagens e mockups reais
- Links dos repositórios e demos
- Textos detalhados da experiência
- Imagem OG em `public/og-image.png`

## Decisões e premissas

- Dados não informados foram centralizados como placeholders; nenhuma métrica ou experiência não confirmada foi inventada.
- Mockups atuais são ilustrativos e devem ser substituídos por imagens reais.
- Os PDFs dos currículos são mantidos manualmente em `public/`; revise os links e os dados antes de publicar.
- O tema acompanha o sistema até haver uma escolha manual.
- O modal é lazy-loaded e inclui focus trap, bloqueio de scroll e retorno de foco.

## Roteiro manual de acessibilidade

1. Navegue com Tab, Shift+Tab, Enter, Espaço e Escape.
2. Confira o anel de foco em todos os controles.
3. Teste menu mobile, modal e formulário apenas pelo teclado.
4. Teste erros, leitura por VoiceOver/NVDA e zoom de 200%.
5. Teste larguras de 360, 768 e 1280 px.
6. Ative movimento reduzido e confirme a ausência de animações persistentes.

## Deploy no Cloudflare Workers (Static Assets)

O projeto é hospedado no Cloudflare Workers com static assets, configurados em `wrangler.jsonc`.

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Build variables:** `VITE_CONTACT_ACCESS_KEY` e `VITE_WHATSAPP_NUMBER`

Cadastre `VITE_CONTACT_ACCESS_KEY` e `VITE_WHATSAPP_NUMBER` como Build variables nas configurações do projeto no Cloudflare Workers. As variáveis com prefixo `VITE_` são incluídas no bundle do navegador; a chave Web3Forms é pública por desenho e não deve ser tratada como segredo.
