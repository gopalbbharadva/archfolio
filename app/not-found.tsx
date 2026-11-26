import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[80vh] flex-col items-start justify-center pb-20 pt-40">
      <p className="eyebrow animate-fade-up">Error 404</p>
      <h1 className="heading-xl mt-5 max-w-3xl animate-fade-up [animation-delay:120ms]">
        This room hasn’t been <em className="text-bronze-500 dark:text-bronze-300">designed</em>{' '}
        yet.
      </h1>
      <p className="body-muted mt-6 max-w-md animate-fade-up text-lg [animation-delay:240ms]">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <div className="mt-10 flex animate-fade-up flex-wrap gap-3 [animation-delay:360ms]">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/projects" className="btn-outline">
          View projects
        </Link>
      </div>
    </section>
  )
}
