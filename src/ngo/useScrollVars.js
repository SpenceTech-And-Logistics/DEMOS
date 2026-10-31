import { useEffect } from 'react'

// Scroll progress bar plus a "--p" value (0 to 1) for any element that wants to follow the scroll.
export function useScrollVars(barRef, trackRef) {
  useEffect(() => {
    const on = () => {
      const h = document.documentElement
      const max = Math.max(1, h.scrollHeight - h.clientHeight)
      if (barRef.current) barRef.current.style.transform = `scaleX(${h.scrollTop / max})`
      const t = trackRef?.current
      if (t) {
        const r = t.getBoundingClientRect()
        const p = (window.innerHeight * 0.6 - r.top) / r.height
        t.style.setProperty('--p', Math.min(1, Math.max(0, p)).toFixed(3))
      }
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => {
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
    }
  }, [barRef, trackRef])
}
