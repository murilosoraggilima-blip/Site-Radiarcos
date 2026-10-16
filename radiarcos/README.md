# Site Radiarcos – Radiadores e Escapamentos

Site institucional da Radiarcos (Arcos–MG) em React + Tailwind CSS (Vite).

## Como executar

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
npm run build     # gera a versão de produção em dist/
npm run preview   # visualiza a versão de produção
```

Para publicar, envie o conteúdo da pasta `dist/` para qualquer hospedagem de sites estáticos.

## Onde editar

- **`src/config/site.js`** – todos os dados da empresa: contatos, endereço, Instagram, textos das seções, serviços, perguntas frequentes, mensagens do WhatsApp e SEO. Título, metadados e dados estruturados do `index.html` são gerados a partir desse arquivo.
- **Logo oficial** – salve o arquivo em `public/images/` e preencha `company.logo` em `site.js`.
- **Fotos da empresa** – salve em `public/images/` e adicione à lista `gallery` em `site.js`. A seção de fotos aparece automaticamente com 2 ou mais imagens. Use apenas fotos reais da Radiarcos.
- **Domínio** – preencha `seo.siteUrl` em `site.js` para gerar URLs absolutas de compartilhamento.

## Estrutura

```
src/
  config/site.js        dados e textos centralizados
  lib/whatsapp.js       links do WhatsApp com mensagens codificadas
  components/           Header, Hero, Services, About, HowTo, Gallery,
                        Faq, Contact, Footer, FloatingWhatsApp, ui, icons
public/images/          fachada otimizada (WebP/JPG) e imagem de compartilhamento
```

As fontes (Barlow Condensed e Inter) são hospedadas no próprio site via `@fontsource`, com fontes do sistema como alternativa.
