// =============================================================
// Configuração central da Radiarcos
// Edite aqui contatos, endereço, redes sociais e textos do site.
// Este arquivo também alimenta título, metadados e dados
// estruturados (veja vite.config.js).
// =============================================================

export const company = {
  name: 'Radiarcos',
  legalName: 'Radiarcos Radiadores e Escapamentos',
  tagline: 'Radiadores e Escapamentos',
  cnpj: '24.085.550/0001-19',
  yearsLabel: '+11 anos de mercado',
  yearsSentence: 'Há mais de 11 anos cuidando do seu veículo.',
  shortDescription:
    'Radiadores, escapamentos, limpeza e manutenção de catalisador diesel, teste de intercooler e solda TIG em alumínio em Arcos–MG.',
  // Coloque aqui o caminho do arquivo oficial da logo quando disponível
  // (ex.: '/images/logo-radiarcos.svg'). Enquanto vazio, o nome é exibido em texto.
  logo: '',
}

export const contact = {
  primary: {
    label: 'WhatsApp principal',
    display: '(37) 99117-2533',
    phone: '5537991172533',
  },
  secondary: {
    label: 'Contato alternativo',
    display: '(37) 99813-3869',
    phone: '5537998133869',
  },
  instagram: {
    handle: '@radiarcos_escapamentos',
    url: 'https://www.instagram.com/radiarcos_escapamentos/',
  },
}

export const address = {
  street: 'Rua José Valadão de Melo, 11',
  district: 'Polo BR / Jardim Esplanada',
  city: 'Arcos',
  state: 'MG',
  cep: '35588-000',
  country: 'BR',
}

export const fullAddress = `${address.street} – ${address.district}, ${address.city}–${address.state}`

// Busca no Google Maps pelo nome e endereço (sem coordenadas).
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${company.legalName}, ${address.street}, ${address.district}, ${address.city} - ${address.state}, ${address.cep}`,
)}`

export const messages = {
  quote: 'Olá! Vim pelo site da Radiarcos e gostaria de solicitar um orçamento.',
  service: (serviceName) =>
    `Olá! Vim pelo site da Radiarcos e gostaria de informações sobre ${serviceName}.`,
}

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export const hero = {
  eyebrow: 'Radiarcos • Arcos–MG',
  title: 'Radiadores e escapamentos em Arcos–MG',
  description:
    'Há mais de 11 anos cuidando do seu veículo. Conheça nossos serviços em radiadores, escapamentos, catalisadores diesel, teste de intercooler e solda TIG em alumínio.',
  primaryCta: 'Solicitar orçamento',
  secondaryCta: 'Conhecer os serviços',
}

// `messageName` é usado na mensagem personalizada do WhatsApp.
export const services = [
  {
    id: 'radiadores',
    icon: 'radiator',
    title: 'Radiadores',
    messageName: 'radiadores',
    description: 'Consulte a equipe sobre serviços e soluções em radiadores para seu veículo.',
  },
  {
    id: 'escapamentos',
    icon: 'exhaust',
    title: 'Escapamentos',
    messageName: 'escapamentos',
    description: 'Atendimento para demandas em escapamentos. Consulte aplicações e disponibilidade.',
  },
  {
    id: 'catalisador-diesel',
    icon: 'catalyst',
    title: 'Catalisador diesel',
    messageName: 'limpeza e manutenção de catalisador diesel',
    description:
      'Limpeza e manutenção de catalisador diesel. Fale com a equipe para avaliar sua necessidade.',
  },
  {
    id: 'teste-intercooler',
    icon: 'gauge',
    title: 'Teste de intercooler',
    messageName: 'teste de intercooler',
    description: 'Consulte o teste de intercooler e as condições de atendimento para seu veículo.',
  },
  {
    id: 'solda-tig',
    icon: 'weld',
    title: 'Solda TIG em alumínio',
    messageName: 'solda TIG em alumínio',
    description:
      'Serviço de solda TIG em alumínio. Envie informações ou fotos para consultar a aplicação.',
  },
]

export const about = {
  title: 'Há mais de 11 anos cuidando do seu veículo',
  text: 'A Radiarcos Radiadores e Escapamentos atua em Arcos–MG há mais de 11 anos. A empresa trabalha com radiadores, escapamentos, limpeza e manutenção de catalisador diesel, teste de intercooler e solda TIG em alumínio.',
  complement:
    'Entre em contato, conte o que seu veículo precisa e consulte nossa equipe sobre serviços e disponibilidade.',
  cta: 'Falar com a equipe',
  photo: {
    src: '/images/fachada-radiarcos-1320.jpg',
    webp: [
      { src: '/images/fachada-radiarcos-720.webp', width: 720 },
      { src: '/images/fachada-radiarcos-1320.webp', width: 1320 },
    ],
    width: 1320,
    height: 957,
    alt: 'Fachada da Radiarcos em Arcos–MG, pintada em vermelho e grafite, com o nome da empresa, os telefones de contato e os serviços de radiadores, escapamentos, limpeza e manutenção de catalisador diesel, teste de intercooler e solda TIG em alumínio.',
  },
}

export const steps = [
  { title: 'Informe seu veículo', text: 'Envie o modelo e o ano do veículo.' },
  { title: 'Conte o que precisa', text: 'Descreva sua necessidade e envie fotos, se necessário.' },
  { title: 'Consulte a equipe', text: 'Converse sobre atendimento, disponibilidade e orçamento.' },
]

// Galeria de fotos reais da empresa (instalações e trabalhos).
// A seção só aparece quando houver pelo menos 2 fotos.
// Use apenas fotografias reais da Radiarcos. Exemplo:
// { src: '/images/galeria/oficina-1.jpg', width: 1200, height: 900, alt: 'Descrição da foto' }
export const gallery = []

export const faq = [
  {
    q: 'Como solicitar um orçamento?',
    a: 'Clique no botão de WhatsApp e informe o modelo, o ano do veículo e o serviço que você procura.',
  },
  {
    q: 'Quais serviços a Radiarcos oferece?',
    a: 'Radiadores, escapamentos, limpeza e manutenção de catalisador diesel, teste de intercooler e solda TIG em alumínio. Consulte a equipe sobre sua necessidade.',
  },
  {
    q: 'Posso enviar fotos pelo WhatsApp?',
    a: 'Sim. Envie fotos acompanhadas das informações do veículo e de uma descrição do que você precisa.',
  },
  {
    q: 'Onde fica a Radiarcos?',
    a: 'Na Rua José Valadão de Melo, 11, região Polo BR / Jardim Esplanada, em Arcos–MG.',
  },
  {
    q: 'Como consultar a disponibilidade de atendimento?',
    a: 'Entre em contato pelos números apresentados no site para consultar a disponibilidade com a equipe.',
  },
]

export const seo = {
  title: 'Radiarcos | Radiadores e Escapamentos em Arcos–MG',
  description:
    'Há mais de 11 anos em Arcos–MG. Radiadores, escapamentos, limpeza e manutenção de catalisador diesel, teste de intercooler e solda TIG em alumínio. Solicite um orçamento.',
  // Preencha com o domínio definitivo (ex.: 'https://www.radiarcos.com.br')
  // para gerar URLs absolutas de compartilhamento.
  siteUrl: '',
  ogImage: '/images/og-radiarcos.jpg',
}
