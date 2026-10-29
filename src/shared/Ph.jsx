import { useId } from 'react'

function rng(seed) {
  let s = seed * 9301 + 49297
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

// Placeholder picture: a soft landscape (or portrait silhouette) drawn in SVG.
// Swap for a real <img> when real photos arrive.
export default function Ph({
  seed = 1,
  hue = 150,
  ratio = '16 / 10',
  label = 'Placeholder image',
  portrait = false,
  showLabel = true,
  className = '',
  style,
}) {
  const id = useId().replace(/:/g, '')
  const r = rng(seed + hue)
  const h2 = (hue + 28 + Math.round(r() * 20)) % 360
  const sunX = 120 + r() * 560
  const sunY = 90 + r() * 90
  const hill = (base, amp, fill) => {
    const p1 = base - amp * (0.4 + r())
    const p2 = base - amp * (0.4 + r())
    return <path d={`M0 500 L0 ${base} C 200 ${p1}, 360 ${p2}, 520 ${base - amp * 0.3} S 760 ${p1}, 800 ${base} L800 500 Z`} fill={fill} />
  }
  return (
    <div className={`ph ${className}`} style={{ aspectRatio: ratio, ...style }} role="img" aria-label={label}>
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={`g${id}`} x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor={`hsl(${hue} 55% 88%)`} />
            <stop offset="1" stopColor={`hsl(${h2} 50% 70%)`} />
          </linearGradient>
        </defs>
        <rect width="800" height="500" fill={`url(#g${id})`} />
        {portrait ? (
          <>
            <circle cx="400" cy="190" r="86" fill={`hsl(${hue} 35% 38%)`} opacity=".85" />
            <path d="M170 520 C 180 360, 300 310, 400 310 S 620 360, 630 520 Z" fill={`hsl(${hue} 38% 30%)`} opacity=".9" />
          </>
        ) : (
          <>
            <circle cx={sunX} cy={sunY} r={46 + r() * 20} fill="#fff" opacity=".75" />
            {hill(330, 120, `hsl(${hue} 38% 58%)`)}
            {hill(400, 90, `hsl(${hue} 40% 44%)`)}
            {hill(460, 60, `hsl(${hue} 42% 32%)`)}
          </>
        )}
      </svg>
      {showLabel && <span className="ph-tag">{label}</span>}
    </div>
  )
}
