import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { company, contact, address, seo, services } from './src/config/site.js'

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Injeta título, metadados e dados estruturados a partir da configuração central.
function seoFromConfig() {
  const abs = (path) => (seo.siteUrl ? new URL(path, seo.siteUrl).href : path)
  const structured = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: company.legalName,
    description: seo.description,
    taxID: company.cnpj,
    telephone: [`+${contact.primary.phone}`, `+${contact.secondary.phone}`],
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.cep,
      addressCountry: address.country,
    },
    sameAs: [contact.instagram.url],
    knowsAbout: services.map((s) => s.title),
    image: abs(seo.ogImage),
    ...(seo.siteUrl ? { url: seo.siteUrl } : {}),
  }

  const tags = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    seo.siteUrl ? `<link rel="canonical" href="${esc(seo.siteUrl)}" />` : '',
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:site_name" content="${esc(company.legalName)}" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:image" content="${esc(abs(seo.ogImage))}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Fachada da Radiarcos em Arcos–MG" />`,
    seo.siteUrl ? `<meta property="og:url" content="${esc(seo.siteUrl)}" />` : '',
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${esc(abs(seo.ogImage))}" />`,
    `<script type="application/ld+json">${JSON.stringify(structured).replace(/</g, '\\u003c')}</script>`,
  ].filter(Boolean)

  return {
    name: 'seo-from-config',
    transformIndexHtml(html) {
      return html.replace('<!--SEO-->', tags.join('\n    '))
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoFromConfig()],
})
