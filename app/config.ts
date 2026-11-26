const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3001')

export const metaData = {
  baseUrl: siteUrl.replace(/\/$/, ''),
  name: 'Vinayak Studio',
  title: 'Vinayak Studio | Interior & Architecture, Surat',
  description:
    'Vinayak Studio is an interior design and architecture practice in Surat, creating timeless residential, commercial and salon spaces.',
}

export const contact = {
  email: 'vinayak.studio.int@gmail.com',
  phone: '+91 91063 37193',
  phoneHref: 'tel:+919106337193',
  whatsappHref: 'https://wa.me/919106337193',
  addressLines: ['131, J9 High Street', 'Opp. Celestial Dream', 'Surat, Gujarat'],
  mapHref: 'https://g.co/kgs/cJUSPUU',
  instagram: 'https://www.instagram.com/vinayak.studio_?igsh=MTdhcTdmcWdrbHQ5Mw==',
  instagramHandle: '@vinayak.studio_',
}

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
]
