import type { StaticImageData } from 'next/image'
import Hero1 from '../assets/hero-1.jpeg'
import Hero2 from '../assets/hero-2.jpeg'
import Hero3 from '../assets/hero-3.webp'
import Hall1 from '../assets/projects/residential/Hall1.png'
import Shop3 from '../assets/projects/commercial/Shop3.jpg'
import Kitchen1 from '../assets/projects/residential/Kitchen1.png'

export type Service = {
  slug: string
  title: string
  summary: string
  points: string[]
  image: StaticImageData
}

export const services: Service[] = [
  {
    slug: 'architecture',
    title: 'Architectural Design',
    summary:
      'Innovative, functional and beautiful buildings shaped around your site, your budget and the way you want to live or work.',
    points: [
      'Concept & massing studies',
      'Elevation & facade design',
      'Working drawings & approvals',
    ],
    image: Hero1,
  },
  {
    slug: 'interior',
    title: 'Interior Design',
    summary:
      'Personal, functional and visually captivating interiors, carefully composed from layout and lighting to material and furniture.',
    points: [
      'Mood boards & 3D visualisation',
      'Material, finish & lighting palettes',
      'Custom furniture & joinery',
    ],
    image: Hero3,
  },
  {
    slug: 'renovation',
    title: 'Renovation & Restoration',
    summary:
      'Thoughtful renovation and restoration that breathes new life into existing structures while respecting what makes them special.',
    points: ['Condition assessment', 'Layout re-planning', 'Upgrades to finishes & services'],
    image: Hero2,
  },
  {
    slug: 'residential',
    title: 'Residential Interiors',
    summary:
      'Bespoke residential interiors that turn houses and apartments into warm, personal and easy-to-live-in homes.',
    points: [
      'Living, dining & bedrooms',
      'Modular kitchens & wardrobes',
      'Kids’ rooms & study spaces',
    ],
    image: Hall1,
  },
  {
    slug: 'commercial',
    title: 'Commercial Interiors',
    summary:
      'Retail, office and hospitality interiors that strengthen brand identity, work hard every day and leave a lasting impression.',
    points: ['Retail stores & showrooms', 'Offices & workspaces', 'Salons, spas & studios'],
    image: Shop3,
  },
  {
    slug: 'space-planning',
    title: 'Space Planning',
    summary:
      'Strategic planning that organises every square foot for flow, storage and comfort, the foundation of every project we do.',
    points: [
      'Furniture & circulation layouts',
      'Zoning & storage strategy',
      'Ergonomics & daylight studies',
    ],
    image: Kitchen1,
  },
]
