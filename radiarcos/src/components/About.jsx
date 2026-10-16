import { about, address } from '../config/site.js'
import { quoteUrl } from '../lib/whatsapp.js'
import { ButtonLink, Container, Eyebrow, YearsBadge } from './ui.jsx'
import { Icon, WhatsAppIcon } from './icons.jsx'

export default function About() {
  const { photo } = about
  return (
    <section id="sobre" aria-labelledby="titulo-sobre" className="relative isolate overflow-hidden bg-graphite py-20 text-snow sm:py-28">
      <div aria-hidden="true" className="absolute -left-24 top-0 -z-10 h-full w-48 -skew-x-[22deg] bg-ink/60" />
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Foto real da fachada — exibida inteira, sem cortes nas inscrições */}
        <figure>
          <div className="relative">
          <div aria-hidden="true" className="absolute -bottom-3 -left-3 h-2/3 w-2/3 rounded-lg bg-brand sm:-bottom-4 sm:-left-4" />
          <picture className="relative block overflow-hidden rounded-lg border border-white/10 bg-ink shadow-2xl shadow-black/50">
            <source
              type="image/webp"
              srcSet={photo.webp.map((w) => `${w.src} ${w.width}w`).join(', ')}
              sizes="(min-width: 1024px) 640px, 100vw"
            />
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </picture>
          </div>
          <figcaption className="mt-7 flex items-center gap-2 pl-4 text-sm text-fog sm:pl-6">
            <Icon name="pin" className="size-4 shrink-0 text-white" />
            Fachada da Radiarcos – {address.district}, {address.city}–{address.state}
          </figcaption>
        </figure>

        <div>
          <Eyebrow>Sobre a Radiarcos</Eyebrow>
          <h2 id="titulo-sobre" className="mt-4 text-[clamp(2.25rem,5.5vw,3.5rem)] font-bold uppercase leading-[0.95]">
            {about.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-fog">{about.text}</p>
          <p className="mt-4 leading-relaxed text-fog">{about.complement}</p>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
            <div className="bg-surface p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-fog">Tempo de mercado</dt>
              <dd className="mt-1 font-display text-3xl font-bold uppercase italic text-snow">+11 anos</dd>
            </div>
            <div className="bg-surface p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-fog">Localização</dt>
              <dd className="mt-1 font-display text-3xl font-bold uppercase text-snow">
                {address.city}–{address.state}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href={quoteUrl} external>
              <WhatsAppIcon className="size-5" />
              {about.cta}
            </ButtonLink>
            <YearsBadge />
          </div>
        </div>
      </Container>
    </section>
  )
}
