import type { MutableRefObject } from 'react'
import { useEffect } from 'react'

export const useOutsideClicks = <T = unknown>(
  ref: MutableRefObject<T>,
  callback: (e: MouseEvent) => void,
) => {
  useEffect(() => {
    document.addEventListener('mousedown', callback)

    return () => {
      document.removeEventListener('mousedown', callback)
    }
  }, [ref])
}
