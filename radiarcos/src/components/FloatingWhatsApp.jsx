import { useEffect, useState } from 'react'
import { quoteUrl } from '../lib/whatsapp.js'
import { WhatsAppIcon } from './icons.jsx'

// Botão flutuante (telas grandes). Aparece após sair do banner, que já tem
// o CTA, e fica oculto sobre o contato e o rodapé. No celular e no tablet
// ele não é exibido para não cobrir conteúdo: o atalho do WhatsApp fica
// fixo no cabeçalho (veja Header.jsx).
export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('inicio')
    const contact = document.getElementById('contato')
    const footer = document.querySelector('footer')
    const state = { heroVisible: true, contactVisible: false, footerVisible: false }
    const update = () => {
      const menuOpen = document.documentElement.dataset.menuOpen === 'true'
      setVisible(!state.heroVisible && !state.contactVisible && !state.footerVisible && !menuOpen)
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.target === hero) state.heroVisible = e.isIntersecting
          if (e.target === contact) state.contactVisible = e.isIntersecting
          if (e.target === footer) state.footerVisible = e.isIntersecting
        }
        update()
      },
      { threshold: 0, rootMargin: '0px 0px -80px 0px' },
    )
    ;[hero, contact, footer].forEach((el) => el && io.observe(el))
    const mo = new MutationObserver(update)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-menu-open'] })
    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return (
    <a
      href={quoteUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp (abre em nova aba)"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 hidden min-h-14 items-center justify-center gap-2 rounded-full bg-brand px-5 text-white shadow-lg shadow-black/30 transition-[opacity,transform] duration-200 hover:bg-brand-dark lg:inline-flex ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <WhatsAppIcon className="size-6" />
      <span aria-hidden="true" className="text-sm font-semibold">
        Orçamento
      </span>
    </a>
  )
}
