import { steps, hero } from '../config/site.js'
import { quoteUrl } from '../lib/whatsapp.js'
import { ButtonLink, Container, Eyebrow } from './ui.jsx'
import { Icon, WhatsAppIcon } from './icons.jsx'

const stepIcons = ['car', 'message', 'team']

export default function HowTo() {
  return (
    <section id="orcamento" aria-labelledby="titulo-orcamento" className="on-light bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow tone="light">Orçamento</Eyebrow>
          <h2 id="titulo-orcamento" className="mt-4 text-[clamp(2.25rem,6vw,3.5rem)] font-bold uppercase leading-[0.95] text-graphite">
            Como solicitar um orçamento
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="relative rounded-lg border border-graphite/10 bg-snow p-7">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-12 w-14 items-center justify-center bg-brand font-display text-2xl font-bold text-white [clip-path:polygon(18%_0,100%_0,82%_100%,0_100%)]"
                >
                  {i + 1}
                </span>
                <Icon name={stepIcons[i]} className="size-6 text-steel" />
              </div>
              <h3 className="mt-6 text-2xl font-bold uppercase tracking-[0.01em] text-graphite">
                <span className="sr-only">Etapa {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-[#475569]">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-lg bg-ink p-7 text-snow sm:flex-row sm:items-center sm:p-9">
          <p className="max-w-xl font-display text-[1.75rem] font-semibold uppercase leading-tight">
            Envie as informações do seu veículo pelo WhatsApp
          </p>
          <ButtonLink href={quoteUrl} external className="w-full shrink-0 sm:w-auto">
            <WhatsAppIcon className="size-5" />
            {hero.primaryCta}
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
