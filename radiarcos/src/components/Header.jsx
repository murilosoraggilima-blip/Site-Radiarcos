import { useEffect, useRef, useState } from 'react'
import { nav, hero } from '../config/site.js'
import { quoteUrl } from '../lib/whatsapp.js'
import { ButtonLink, Container, Wordmark } from './ui.jsx'
import { Icon, WhatsAppIcon } from './icons.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha o menu com Esc e ao voltar para o layout de desktop
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const mq = window.matchMedia('(min-width: 1024px)')
    const onMq = () => mq.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    panelRef.current?.querySelector('a')?.focus()
    document.documentElement.dataset.menuOpen = 'true'
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
      delete document.documentElement.dataset.menuOpen
    }
  }, [open])

  // Fecha o menu antes de rolar, para a posição considerar a altura final do cabeçalho
  const goTo = (e, href) => {
    e.preventDefault()
    setOpen(false)
    requestAnimationFrame(() => {
      const target = document.querySelector(href)
      if (!target) return
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
      history.replaceState(null, '', href)
    })
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open ? 'border-white/10 bg-ink/95 backdrop-blur-md' : 'border-transparent bg-ink'
      }`}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#inicio" className="shrink-0 rounded-sm" aria-label="Radiarcos – voltar ao início">
          <Wordmark />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-4 py-2.5 text-sm font-medium text-fog transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href={quoteUrl} external className="!min-h-11">
              {hero.primaryCta}
            </ButtonLink>
          </div>
          <a
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento pelo WhatsApp (abre em nova aba)"
            className="inline-flex size-12 items-center justify-center rounded-md bg-brand text-white hover:bg-brand-dark sm:hidden"
          >
            <WhatsAppIcon className="size-6" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-12 items-center justify-center rounded-md text-snow hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movel"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </Container>

      <div
        id="menu-movel"
        ref={panelRef}
        hidden={!open}
        className="border-t border-white/10 bg-ink lg:hidden"
      >
        <nav aria-label="Navegação móvel">
          <Container className="py-4">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-white/5 last:border-0">
                  <a
                    href={item.href}
                    onClick={(e) => goTo(e, item.href)}
                    className="flex min-h-14 items-center justify-between font-display text-2xl font-semibold uppercase tracking-wide text-snow"
                  >
                    {item.label}
                    <Icon name="arrowRight" className="size-5 text-fog" />
                  </a>
                </li>
              ))}
            </ul>
            <ButtonLink href={quoteUrl} external className="mt-4 w-full" onClick={() => setOpen(false)}>
              {hero.primaryCta}
            </ButtonLink>
          </Container>
        </nav>
      </div>
    </header>
  )
}
