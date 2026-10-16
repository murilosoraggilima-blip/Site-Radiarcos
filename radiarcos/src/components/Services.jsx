import { services } from '../config/site.js'
import { serviceUrl } from '../lib/whatsapp.js'
import { Container, Eyebrow } from './ui.jsx'
import { Icon, WhatsAppIcon } from './icons.jsx'

function ServiceCard({ service, index, wide }) {
  const headingId = `servico-${service.id}-titulo`
  return (
    <li
      id={`servico-${service.id}`}
      className={`group relative flex flex-col overflow-hidden rounded-lg border border-graphite/10 bg-white p-7 transition-[border-color,box-shadow] duration-200 hover:border-graphite/25 hover:shadow-[0_18px_40px_-24px_rgba(11,13,16,.45)] ${
        wide ? 'lg:col-span-3' : 'lg:col-span-2'
      }`}
    >
      <span aria-hidden="true" className="absolute left-0 top-0 h-1 w-16 bg-brand transition-[width] duration-300 group-hover:w-full" />
      <div className="flex items-start justify-between">
        <span className="inline-flex size-14 items-center justify-center rounded-md bg-graphite text-snow">
          <Icon name={service.icon} className="size-7" />
        </span>
        <span aria-hidden="true" className="font-display text-4xl font-bold text-mist">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 id={headingId} className="mt-6 text-[1.75rem] font-bold uppercase leading-tight tracking-[0.01em] text-graphite">
        {service.title}
      </h3>
      <p className="mt-2.5 flex-1 leading-relaxed text-[#475569]">{service.description}</p>
      <a
        href={serviceUrl(service.messageName)}
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby={headingId}
        className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-sm font-semibold text-brand hover:text-brand-dark"
      >
        <WhatsAppIcon className="size-[1.1rem]" />
        <span className="underline decoration-brand/30 decoration-2 underline-offset-4 group-hover:decoration-brand">
          Consultar pelo WhatsApp
        </span>
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    </li>
  )
}

export default function Services() {
  return (
    <section id="servicos" aria-labelledby="titulo-servicos" className="on-light bg-snow py-20 sm:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow tone="light">Serviços</Eyebrow>
            <h2 id="titulo-servicos" className="mt-4 text-[clamp(2.25rem,6vw,3.75rem)] font-bold uppercase leading-[0.95] text-graphite">
              Soluções para o seu veículo
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-[#475569] lg:justify-self-end">
            Conheça nossas áreas de atuação e fale com a equipe para consultar o serviço adequado ao seu veículo.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} wide={i < 2} />
          ))}
        </ul>
      </Container>
    </section>
  )
}
