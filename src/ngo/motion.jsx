import { useEffect, useRef } from 'react'
import { calm } from './scroll.js'

// Fades and lifts its children in when they scroll into view.
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', from = 'up', ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (calm() || !('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`ngo-reveal from-${from} ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

export function CountUp({ to, prefix = '', suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const put = (v) => { el.textContent = `${prefix}${decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString()}${suffix}` }
    if (calm() || !('IntersectionObserver' in window)) { put(to); return }
    put(0)
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / 1500)
        put(to * (1 - Math.pow(1 - p, 3)))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to, prefix, suffix, decimals])
  return <span ref={ref}>{`${prefix}${decimals ? to.toFixed(decimals) : to.toLocaleString()}${suffix}`}</span>
}

// Letters rise one after another.
export function Split({ text, delay = 0 }) {
  let n = 0
  return (
    <span className="split" aria-label={text}>
      {text.split(' ').map((word, wi) => (
        <span key={wi} className="w" aria-hidden="true">
          {[...word].map((c) => <span key={n} className="ch" style={{ animationDelay: `${delay + n++ * 28}ms` }}>{c}</span>)}
        </span>
      ))}
    </span>
  )
}

// Cards lean toward the pointer.
export function Tilt({ children, className = '', ...rest }) {
  const ref = useRef(null)
  const move = (e) => {
    if (calm() || e.pointerType === 'touch') return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(700px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg) translateY(-4px)`
  }
  const leave = () => { if (ref.current) ref.current.style.transform = '' }
  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={move} onPointerLeave={leave} {...rest}>
      {children}
    </div>
  )
}

// A bar that fills to `value` percent when it scrolls into view.
export function Bar({ value }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (calm() || !('IntersectionObserver' in window)) { el.style.width = `${value}%`; return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.width = `${value}%`; io.disconnect() }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [value])
  return <span className="bar"><i ref={ref} /></span>
}
