import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageHero } from '../components/page-hero'
import { ProjectGallery } from './project-gallery'
import Salon3 from '../assets/projects/salon/Salon3.png'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Residential, commercial and salon interiors designed by Vinayak Studio, Surat.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Projects &amp; <em className="text-bronze-200">places</em>
          </>
        }
        intro="A selection of homes, stores, offices and salons we have designed. Tap any image to view it full screen."
        image={Salon3}
        imageAlt="Salon interior with sage-green chairs and arched mirrors"
      />

      <section>
        <Suspense fallback={<div className="h-96" />}>
          <ProjectGallery />
        </Suspense>
      </section>
    </>
  )
}
