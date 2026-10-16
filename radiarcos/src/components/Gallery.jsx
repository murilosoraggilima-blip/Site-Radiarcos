import { gallery } from '../config/site.js'
import { Container, Eyebrow } from './ui.jsx'

// Fotos reais da empresa. Exibida apenas quando houver 2+ fotos em
// `gallery` (src/config/site.js) — evita galeria repetitiva com a fachada.
export default function Gallery() {
  if (gallery.length < 2) return null
  return (
    <section id="fotos" aria-labelledby="titulo-fotos" className="on-light bg-snow py-20 sm:py-28">
      <Container>
        <Eyebrow tone="light">Fotos</Eyebrow>
        <h2 id="titulo-fotos" className="mt-4 text-[clamp(2.25rem,6vw,3.5rem)] font-bold uppercase leading-[0.95] text-graphite">
          Fotos da Radiarcos
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((img) => (
            <li key={img.src} className="overflow-hidden rounded-lg border border-graphite/10 bg-white">
              <img
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
