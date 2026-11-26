'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="container-page flex min-h-[80vh] flex-col items-start justify-center pb-20 pt-40">
      <p className="eyebrow">Something went wrong</p>
      <h1 className="heading-lg mt-5 max-w-2xl">We couldn’t load this page.</h1>
      <p className="body-muted mt-5 max-w-md text-lg">Please try again in a moment.</p>
      <button type="button" onClick={reset} className="btn-primary mt-10">
        Try again
      </button>
    </section>
  )
}
