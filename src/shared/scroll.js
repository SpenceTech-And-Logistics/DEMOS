export function goTo(id) {
  return (e) => {
    e.preventDefault()
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById(id)?.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'start' })
  }
}
