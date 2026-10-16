import { useId, useState } from 'react'
import { faq } from '../config/site.js'
import { Container, Eyebrow } from './ui.jsx'
import { Icon } from './icons.jsx'

function FaqItem({ item, open, onToggle }) {
  const uid = useId()
  const btnId = `${uid}-btn`
  const panelId = `${uid}-panel`
  return (
    <li className="border-b border-graphite/10">
      <h3 className="font-sans">
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left text-lg font-semibold text-graphite"
        >
          {item.q}
          <span
            className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color] duration-200 ${
              open ? 'rotate-180 border-brand bg-brand text-white' : 'border-graphite/20 text-graphite'
            }`}
          >
            <Icon name="chevronDown" className="size-4" />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        inert={!open}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 pr-12 leading-relaxed text-[#475569]">{item.a}</p>
        </div>
      </div>
    </li>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section id="perguntas" aria-labelledby="titulo-perguntas" className="on-light bg-snow py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Eyebrow tone="light">Dúvidas</Eyebrow>
          <h2 id="titulo-perguntas" className="mt-4 text-[clamp(2.25rem,6vw,3.5rem)] font-bold uppercase leading-[0.95] text-graphite">
            Perguntas frequentes
          </h2>
        </div>
        <ul className="border-t border-graphite/10">
          {faq.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
            />
          ))}
        </ul>
      </Container>
    </section>
  )
}
