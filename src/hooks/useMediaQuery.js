import { useCallback, useSyncExternalStore } from 'react'

// True while the CSS media query matches; updates live on resize / rotation.
export default function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    [query]
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  )
}

// Matches the 900px breakpoint the editorial sections use for their single-column layouts
export const MOBILE_QUERY = '(max-width: 900px)'
