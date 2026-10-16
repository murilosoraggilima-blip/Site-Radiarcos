import { hero, services, company, address } from '../config/site.js'
import { quoteUrl } from '../lib/whatsapp.js'
import { ButtonLink, Container, Eyebrow, YearsBadge } from './ui.jsx'
import { Icon, WhatsAppIcon } from './icons.jsx'

// Banner principal: composição tipográfica (não há fotografia de serviço
// disponível; a foto real da fachada é valorizada na seção "Sobre").
export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo-inicio" className="relative isolate overflow-hidden bg-ink text-snow">
      {/* Faixas diagonais vermelhas */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-0 hidden h-full w-[42rem] origin-top -skew-x-[22deg] bg-graphite lg:block" />
        <div className="absolute -right-24 bottom-0 h-1/2 w-72 origin-bottom -skew-x-[22deg] bg-graphite lg:hidden" />
        <div className="absolute right-[34rem] top-0 hidden h-full w-3 origin-top -skew-x-[22deg] bg-brand lg:block" />
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-brand via-brand/40 to-transparent" />
      </div>

      <Container className="grid items-center gap-12 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <div>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1
            id="titulo-inicio"
            className="mt-5 text-[clamp(2.25rem,10.5vw,5.75rem)] [overflow-wrap:anywhere] font-bold uppercase leading-[0.92] tracking-[0.005em]"
          >
            Radiadores e escapamentos <span className="text-brand">em Arcos–MG</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">{hero.description}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={quoteUrl} external>
              <WhatsAppIcon className="size-5" />
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="#servicos" variant="ghostDark">
              {hero.secondaryCta}
              <Icon name="arrowDown" className="size-4" />
            </ButtonLink>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-fog">
            <YearsBadge />
            <span className="inline-flex items-center gap-1.5">
              <Icon name="pin" className="size-4 text-white" />
              {address.city}–{address.state}
            </span>
          </div>
        </div>

        {/* Painel tipográfico: tempo de mercado + áreas de atuação */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-surface/80 p-7 shadow-2xl shadow-black/40 sm:p-9">
            <div aria-hidden="true" className="chevron-stripes absolute -right-10 -top-10 h-24 w-48 rotate-[8deg] opacity-80" />
            <p className="relative font-display font-bold uppercase leading-none">
              <span className="block text-[clamp(5rem,16vw,8.5rem)] italic tracking-tight text-snow">
                +11<span className="sr-only"> anos de mercado</span>
              </span>
              <span aria-hidden="true" className="mt-1 block text-2xl tracking-[0.12em] text-fog">
                anos de mercado
              </span>
            </p>
            <p className="relative mt-4 max-w-xs text-sm leading-relaxed text-fog">{company.yearsSentence}</p>

            <h2 className="sr-only">Áreas de atuação</h2>
            <ul className="relative mt-7 divide-y divide-white/10 border-t border-white/10">
              {services.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#servico-${s.id}`}
                    className="group flex min-h-12 items-center gap-4 py-2.5 text-[0.95rem] font-medium text-snow"
                  >
                    <span aria-hidden="true" className="w-6 font-display text-lg font-semibold text-fog">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1">{s.title}</span>
                    <Icon
                      name="arrowRight"
                      className="size-4 text-fog transition-transform duration-150 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
