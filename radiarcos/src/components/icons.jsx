// Ícones em linha (decorativos: aria-hidden). Sem dependências externas.
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
}

const paths = {
  // Radiador: tanques + colmeia de aletas
  radiator: (
    <>
      <rect x="3" y="4" width="18" height="3" rx="1" />
      <rect x="3" y="17" width="18" height="3" rx="1" />
      <path d="M6 7v10M9 7v10M12 7v10M15 7v10M18 7v10" />
      <path d="M21 5.5h1.5M1.5 18.5H3" />
    </>
  ),
  // Escapamento: tubo com silencioso e ponteira
  exhaust: (
    <>
      <path d="M2 14h4" />
      <rect x="6" y="10.5" width="9" height="7" rx="3.5" />
      <path d="M15 14h3.5a2 2 0 0 0 2-2V8" />
      <path d="M19 6.5c.6-.8 1.4-.8 2 0M17.5 4.5c1.4-1.6 3.6-1.6 5 0" />
    </>
  ),
  // Catalisador: carcaça com colmeia
  catalyst: (
    <>
      <path d="M2 12h3M19 12h3" />
      <path d="M5 8.5 7 6h10l2 2.5v7L17 18H7l-2-2.5z" />
      <path d="M9.5 9.5 11 8.7l1.5.8v1.7l-1.5.8-1.5-.8zM12.5 12.8l1.5-.8 1.5.8v1.7l-1.5.8-1.5-.8zM9.5 12.8l1.5-.8" />
    </>
  ),
  // Teste de intercooler: manômetro
  gauge: (
    <>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 13l4-4" />
      <path d="M7 13h1M16 13h1M12 8V7M8.5 9.5l.7.7" />
      <path d="M9 3h6M12 3v2" />
    </>
  ),
  // Solda TIG: tocha e faísca
  weld: (
    <>
      <path d="M3 21l7-7" />
      <path d="M8.5 12.5l3 3 2-2-3-3z" />
      <path d="M13.5 13.5l2.5 2.5" />
      <path d="M18 10V7M18 18v-2M21 13h-2M15.9 10.9l-1-1M20.1 10.9l1-1M20.1 15.1l1 1" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  pin: (
    <>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  phone: (
    <path d="M5 4h3l1.5 4-2 1.3a11 11 0 0 0 7.2 7.2L16 14.5l4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M8 19h8.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H16" />
    </>
  ),
  car: (
    <>
      <path d="M5 16V12l2-5h10l2 5v4" />
      <path d="M3 12h18v4H3z" />
      <circle cx="7" cy="16.5" r="1.5" />
      <circle cx="17" cy="16.5" r="1.5" />
    </>
  ),
  message: <path d="M4 5h16v11H9l-5 4z" />,
  team: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6M18 14a6 6 0 0 1 3 6" />
    </>
  ),
}

export function Icon({ name, className = 'size-6', ...rest }) {
  return (
    <svg {...base} className={className} {...rest}>
      {paths[name]}
    </svg>
  )
}

// Marca do WhatsApp (preenchida) — decorativa
export function WhatsAppIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.78 9.78 0 0 1-1.5-5.22C2.23 6.58 6.63 2.2 12.05 2.2a9.75 9.75 0 0 1 6.94 2.88 9.73 9.73 0 0 1 2.87 6.93c0 5.42-4.41 9.8-9.82 9.8zm8.35-18.14A11.73 11.73 0 0 0 12.04.2C5.53.2.24 5.48.23 11.98c0 2.08.54 4.1 1.58 5.89L.13 24l6.27-1.64a11.82 11.82 0 0 0 5.64 1.43h.01c6.5 0 11.8-5.28 11.8-11.78 0-3.15-1.23-6.1-3.46-8.33z" />
    </svg>
  )
}
