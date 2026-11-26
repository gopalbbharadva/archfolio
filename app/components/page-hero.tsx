import Image, { type StaticImageData } from 'next/image'

type PageHeroProps = {
  eyebrow: string
  title: React.ReactNode
  intro?: string
  image: StaticImageData
  imageAlt: string
}

/** Full-bleed image banner used at the top of inner pages. */
export function PageHero({ eyebrow, title, intro, image, imageAlt }: PageHeroProps) {
  return (
    <section className="grain relative isolate flex min-h-[70svh] items-end overflow-hidden bg-ink text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="-z-10 animate-kenburns object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />

      <div className="container-page pb-16 pt-40 md:pb-24">
        <p className="eyebrow animate-fade-up !text-bronze-200">{eyebrow}</p>
        <h1 className="heading-xl mt-5 max-w-4xl animate-fade-up [animation-delay:120ms]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-white/80 [animation-delay:240ms] sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  )
}
