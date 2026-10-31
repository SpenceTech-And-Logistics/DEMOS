export const calm = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function goTo(id) {
  return (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: calm() ? 'auto' : 'smooth', block: 'start' })
  }
}
