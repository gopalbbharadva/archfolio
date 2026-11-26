import { Reveal } from './reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: React.ReactNode
  intro?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <Reveal className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      <p className={`eyebrow flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-current" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="heading-lg mt-5">{title}</h2>
      {intro && <p className="body-muted mt-5 text-base leading-relaxed sm:text-lg">{intro}</p>}
    </Reveal>
  )
}
