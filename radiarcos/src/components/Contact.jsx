import { contact, address, fullAddress, mapsUrl } from '../config/site.js'
import { quoteUrl, secondaryUrl } from '../lib/whatsapp.js'
import { ButtonLink, Container, Eyebrow } from './ui.jsx'
import { Icon, WhatsAppIcon } from './icons.jsx'

function ContactRow({ icon, label, children }) {
  return (
    <div className="flex gap-4 border-b border-white/10 py-5 last:border-0">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-white/5 text-snow">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-fog">{label}</p>
        <div className="mt-1 text-snow">{children}</div>
      </div>
    </div>
  )
}

const linkCls =
  'inline-flex min-h-11 items-center break-words font-display text-[1.6rem] font-semibold tracking-wide text-snow underline decoration-white/25 decoration-2 underline-offset-4 hover:decoration-brand'

export default function Contact() {
  return (
    <section id="contato" aria-labelledby="titulo-contato" className="relative isolate overflow-hidden bg-graphite py-20 text-snow sm:py-28">
      <div aria-hidden="true" className="absolute -right-32 top-0 -z-10 h-full w-80 -skew-x-[22deg] bg-ink/50" />
      <div aria-hidden="true" className="absolute right-36 top-0 -z-10 hidden h-full w-2 -skew-x-[22deg] bg-brand lg:block" />
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>Contato e localização</Eyebrow>
          <h2 id="titulo-contato" className="mt-4 text-[clamp(2.5rem,7vw,4.5rem)] font-bold uppercase leading-[0.92]">
            Fale com a Radiarcos
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-fog">
            Conte o que você precisa e consulte nossa equipe.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={quoteUrl} external>
              <WhatsAppIcon className="size-5" />
              Solicitar orçamento
            </ButtonLink>
            <ButtonLink href={mapsUrl} external variant="ghostDark">
              <Icon name="route" className="size-5" />
              Como chegar
            </ButtonLink>
          </div>
        </div>

        <address className="rounded-lg border border-white/10 bg-surface px-6 py-2 not-italic sm:px-8">
          <ContactRow icon={<WhatsAppIcon className="size-5" />} label={contact.primary.label}>
            <a href={quoteUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
              {contact.primary.display}
              <span className="sr-only"> – abrir WhatsApp (nova aba)</span>
            </a>
          </ContactRow>
          <ContactRow icon={<Icon name="phone" className="size-5" />} label={contact.secondary.label}>
            <div className="flex flex-wrap items-center gap-x-4">
              <a href={secondaryUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
                {contact.secondary.display}
                <span className="sr-only"> – abrir WhatsApp (nova aba)</span>
              </a>
              <a
                href={`tel:+${contact.secondary.phone}`}
                className="inline-flex min-h-11 items-center text-sm font-medium text-fog underline underline-offset-4 hover:text-white"
              >
                Ligar
                <span className="sr-only"> para {contact.secondary.display}</span>
              </a>
            </div>
          </ContactRow>
          <ContactRow icon={<Icon name="pin" className="size-5" />} label="Endereço">
            <p className="leading-relaxed">
              {address.street}
              <br />
              {address.district}
              <br />
              {address.city}–{address.state} · CEP {address.cep}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-fog underline underline-offset-4 hover:text-white"
            >
              Abrir no Google Maps
              <span className="sr-only"> (nova aba): {fullAddress}</span>
            </a>
          </ContactRow>
          <ContactRow icon={<Icon name="instagram" className="size-5" />} label="Instagram">
            <a
              href={contact.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center break-all text-lg font-medium text-snow underline decoration-white/25 decoration-2 underline-offset-4 hover:decoration-brand"
            >
              {contact.instagram.handle}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </ContactRow>
        </address>
      </Container>
    </section>
  )
}
