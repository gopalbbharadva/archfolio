import type { StaticImageData } from 'next/image'

// --- Commercial
import Shop1 from '../assets/projects/commercial/Shop1.jpg'
import Shop2 from '../assets/projects/commercial/Shop2.jpg'
import Shop3 from '../assets/projects/commercial/Shop3.jpg'
import Shop4 from '../assets/projects/commercial/Shop4.jpg'
import Shop5 from '../assets/projects/commercial/Shop5.jpg'
import TextileOffice1 from '../assets/projects/commercial/TextileOffice1.png'
import TextileOffice2 from '../assets/projects/commercial/TextTileOffice2.png'

// --- Residential
import BedRoom1 from '../assets/projects/residential/BedRoom1.png'
import BedRoom2 from '../assets/projects/residential/BedRoom2.png'
import BedRoom3 from '../assets/projects/residential/BedRoom3.png'
import Dining1 from '../assets/projects/residential/Dining1.png'
import Dining2 from '../assets/projects/residential/Dining2.png'
import Hall1 from '../assets/projects/residential/Hall1.png'
import Hall2 from '../assets/projects/residential/Hall2.png'
import Hall3 from '../assets/projects/residential/Hall3.png'
import Hall4 from '../assets/projects/residential/Hall4.png'
import Hall5 from '../assets/projects/residential/Hall5.png'
import Hall6 from '../assets/projects/residential/Hall6.png'
import KidsRoom1 from '../assets/projects/residential/KidsRoom1.png'
import KidsRoom2 from '../assets/projects/residential/KidsRoom2.png'
import Kitchen1 from '../assets/projects/residential/Kitchen1.png'
import Kitchen2 from '../assets/projects/residential/Kitchen2.png'

// --- Salon
import Salon1 from '../assets/projects/salon/Salon1.png'
import Salon2 from '../assets/projects/salon/Salon2.png'
import Salon3 from '../assets/projects/salon/Salon3.png'
import Salon4 from '../assets/projects/salon/Salon4.png'
import Salon5 from '../assets/projects/salon/Salon5.png'
import Salon6 from '../assets/projects/salon/Salon6.png'
import Salon7 from '../assets/projects/salon/Salon7.png'
import Salon8 from '../assets/projects/salon/Salon8.png'
import Salon9 from '../assets/projects/salon/Salon9.png'
import Salon10 from '../assets/projects/salon/Salon10.png'

export type Category = 'residential' | 'commercial' | 'salon'

export type ProjectImage = {
  src: StaticImageData
  title: string
  category: Category
}

export const CATEGORIES: {
  id: Category
  label: string
  blurb: string
}[] = [
  {
    id: 'residential',
    label: 'Residential',
    blurb:
      'Living rooms, bedrooms, kitchens and kids’ rooms designed around the way families live.',
  },
  {
    id: 'commercial',
    label: 'Commercial',
    blurb: 'Retail stores and offices that express a brand and work hard every day.',
  },
  {
    id: 'salon',
    label: 'Salon & Wellness',
    blurb: 'Calm, light-filled salons and treatment rooms with a boutique feel.',
  },
]

export const projectImages: ProjectImage[] = [
  // Residential
  { src: Hall1, title: 'Living Room', category: 'residential' },
  { src: BedRoom1, title: 'Master Bedroom', category: 'residential' },
  { src: Kitchen1, title: 'Modular Kitchen', category: 'residential' },
  { src: Dining2, title: 'Dining Area', category: 'residential' },
  { src: Hall5, title: 'Family Lounge', category: 'residential' },
  { src: KidsRoom1, title: 'Kids’ Room', category: 'residential' },
  { src: BedRoom2, title: 'Guest Bedroom', category: 'residential' },
  { src: Hall2, title: 'Living Room', category: 'residential' },
  { src: Kitchen2, title: 'Galley Kitchen', category: 'residential' },
  { src: Hall6, title: 'Family Lounge', category: 'residential' },
  { src: BedRoom3, title: 'Bedroom', category: 'residential' },
  { src: KidsRoom2, title: 'Kids’ Room', category: 'residential' },
  { src: Hall3, title: 'Lounge', category: 'residential' },
  { src: Dining1, title: 'Dining Area', category: 'residential' },
  { src: Hall4, title: 'Lounge', category: 'residential' },

  // Commercial
  { src: Shop3, title: 'Boutique Store', category: 'commercial' },
  { src: Shop1, title: 'Fashion Boutique', category: 'commercial' },
  { src: TextileOffice1, title: 'Textile Office', category: 'commercial' },
  { src: Shop4, title: 'Retail Display', category: 'commercial' },
  { src: TextileOffice2, title: 'Textile Office', category: 'commercial' },
  { src: Shop5, title: 'Apparel Store', category: 'commercial' },
  { src: Shop2, title: 'Store Reception', category: 'commercial' },

  // Salon
  { src: Salon2, title: 'Styling Floor', category: 'salon' },
  { src: Salon1, title: 'Reception & Lounge', category: 'salon' },
  { src: Salon3, title: 'Styling Stations', category: 'salon' },
  { src: Salon10, title: 'Signature Chair', category: 'salon' },
  { src: Salon5, title: 'Treatment Room', category: 'salon' },
  { src: Salon7, title: 'Beauty & Care', category: 'salon' },
  { src: Salon4, title: 'Treatment Room', category: 'salon' },
  { src: Salon6, title: 'Spa Suite', category: 'salon' },
  { src: Salon8, title: 'Wash Station', category: 'salon' },
  { src: Salon9, title: 'Pedicure Lounge', category: 'salon' },
]

/** All images with categories interleaved, so the "All" view feels varied. */
export const interleavedProjectImages: ProjectImage[] = (() => {
  const groups = CATEGORIES.map((c) => projectImages.filter((p) => p.category === c.id))
  const longest = Math.max(...groups.map((g) => g.length))
  const result: ProjectImage[] = []
  for (let i = 0; i < longest; i++) {
    for (const group of groups) if (group[i]) result.push(group[i])
  }
  return result
})()

/** Hand-picked, high-resolution covers for each category. */
export const categoryCovers: Record<Category, StaticImageData> = {
  residential: Hall1,
  commercial: Shop3,
  salon: Salon2,
}

export const isCategory = (value: string | null): value is Category =>
  value === 'residential' || value === 'commercial' || value === 'salon'
