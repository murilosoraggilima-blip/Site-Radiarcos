import { company, contact, nav, address } from '../config/site.js'
import { quoteUrl, secondaryUrl } from '../lib/whatsapp.js'
import { Container, Wordmark } from './ui.jsx'

const linkCls = 'inline-flex min-h-10 items-center text-fog hover:text-white underline-offset-4 hover:underline'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t-4 border-brand bg-ink pb-12 pt-16 text-snow">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fog">{company.shortDescription}</p>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-snow">Navegação</h2>
            <ul className="mt-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkCls}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-snow">Contato</h2>
            <ul className="mt-3 text-sm">
              <li>
                <a href={quoteUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  WhatsApp {contact.primary.display}
                  <span className="sr-only"> (nova aba)</span>
                </a>
              </li>
              <li>
                <a href={secondaryUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  WhatsApp {contact.secondary.display}
                  <span className="sr-only"> (nova aba)</span>
                </a>
              </li>
              <li>
                <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  Instagram {contact.instagram.handle}
                  <span className="sr-only"> (nova aba)</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-snow">Endereço</h2>
            <address className="mt-4 text-sm not-italic leading-relaxed text-fog">
              {address.street}
              <br />
              {address.district}
              <br />
              {address.city}–{address.state} · CEP {address.cep}
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-fog sm:flex-row sm:justify-between">
          <p>
            © {year} {company.legalName}
          </p>
          <p>CNPJ {company.cnpj}</p>
        </div>
      </Container>
    </footer>
  )
}
