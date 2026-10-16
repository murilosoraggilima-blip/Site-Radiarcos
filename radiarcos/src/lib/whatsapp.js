import { contact, messages } from '../config/site.js'

export function whatsappUrl(phone = contact.primary.phone, text = messages.quote) {
  const base = `https://wa.me/${phone}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

export const quoteUrl = whatsappUrl()
export const serviceUrl = (serviceName) => whatsappUrl(contact.primary.phone, messages.service(serviceName))
export const secondaryUrl = whatsappUrl(contact.secondary.phone, messages.quote)
