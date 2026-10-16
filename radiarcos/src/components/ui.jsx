import { company } from '../config/site.js'

// Botão/link reutilizável. Todos os CTAs são links reais.
const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark shadow-[0_8px_24px_-12px_rgba(198,40,40,.9)]',
  ghostDark: 'border border-white/25 text-snow hover:border-white/60 hover:bg-white/5',
  ghostLight: 'border border-graphite/20 text-graphite hover:border-graphite/50 hover:bg-graphite/5',
  dark: 'bg-graphite text-snow hover:bg-ink',
}

export function ButtonLink({ href, variant = 'primary', external = false, className = '', children, ...rest }) {
  const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a
      href={href}
      {...ext}
      {...rest}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-[0.95rem] font-semibold transition-colors duration-150 ${variants[variant]} ${className}`}
    >
      {children}
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  )
}

export function Eyebrow({ children, tone = 'dark', className = '' }) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] ${
        tone === 'dark' ? 'text-fog' : 'text-steel'
      } ${className}`}
    >
      <span aria-hidden="true" className="h-0.5 w-7 -skew-x-[30deg] bg-brand" />
      {children}
    </p>
  )
}

export function YearsBadge({ className = '', tone = 'dark' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
        tone === 'dark' ? 'border-white/20 bg-white/5 text-snow' : 'border-graphite/15 bg-white text-graphite'
      } ${className}`}
    >
      <span aria-hidden="true" className="size-1.5 rotate-45 bg-brand" />
      {company.yearsLabel}
    </span>
  )
}

export function Wordmark({ className = '' }) {
  if (company.logo) {
    return <img src={company.logo} alt={company.legalName} className={`h-9 w-auto ${className}`} width="160" height="36" />
  }
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className="font-display text-[1.9rem] font-bold italic tracking-[0.04em] text-snow">
        Radi<span className="text-snow">arcos</span>
      </span>
      <span className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-fog">
        {company.tagline}
      </span>
    </span>
  )
}

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>
}
