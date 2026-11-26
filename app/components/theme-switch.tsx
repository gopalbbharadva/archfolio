'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function ThemeSwitch({ className = '' }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border transition-colors duration-300 ${className}`}
    >
      <HiOutlineSun
        aria-hidden
        className={`absolute h-[18px] w-[18px] transition-all duration-500 ease-out-expo ${
          isDark ? 'translate-y-0 rotate-0 opacity-100' : 'translate-y-6 -rotate-90 opacity-0'
        }`}
      />
      <HiOutlineMoon
        aria-hidden
        className={`absolute h-[18px] w-[18px] transition-all duration-500 ease-out-expo ${
          isDark ? '-translate-y-6 rotate-90 opacity-0' : 'translate-y-0 rotate-0 opacity-100'
        }`}
      />
    </button>
  )
}
