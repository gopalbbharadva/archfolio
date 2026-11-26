'use client'

import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react'

type Variant = 'up' | 'left' | 'right' | 'scale' | 'fade' | 'curtain'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  variant?: Variant
  /** Delay in milliseconds */
  delay?: number
  className?: string
  /** Portion of the element that must be visible before it animates */
  threshold?: number
  /** Curtain only: classes for the inner layer that gets clipped (e.g. borders) */
  innerClassName?: string
}

/**
 * Fades/slides its children in once they scroll into view.
 * Animation styles live in global.css (`.reveal`) and are disabled
 * for users who prefer reduced motion.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  threshold = 0.15,
  innerClassName = '',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <Tag
      ref={ref}
      data-variant={variant}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {variant === 'curtain' ? (
        // The clip lives on an inner layer: Chrome treats a fully clipped
        // element as not intersecting, so the observed element must stay unclipped.
        <div className={`reveal-curtain absolute inset-0 overflow-hidden ${innerClassName}`}>
          {children}
        </div>
      ) : (
        children
      )}
    </Tag>
  )
}
