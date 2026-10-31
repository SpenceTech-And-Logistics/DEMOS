import Icon from './icons.jsx'
import { Reveal } from './motion.jsx'
import { Link } from './nav.jsx'
import Ph from '../shared/Ph.jsx'

export function Head({ kicker, title, em, children, center = false, light = false }) {
  return (
    <Reveal className={`head ${center ? 'center' : ''} ${light ? 'light' : ''}`}>
      {kicker && <span className="pill">{kicker}</span>}
      <h2>{title} {em && <em>{em}</em>}</h2>
      {children && <p className="lede">{children}</p>}
    </Reveal>
  )
}

// A placeholder picture in a round frame with a ring and a dot grid.
export function Frame({ hue = 190, seed = 3, portrait = false, label = 'Photo placeholder', className = '' }) {
  return (
    <div className={`frame ${className}`}>
      <i className="f-ring" aria-hidden="true" />
      <i className="f-dots" aria-hidden="true" />
      <i className="f-disc" aria-hidden="true" />
      <Ph hue={hue} seed={seed} ratio="1 / 1" portrait={portrait} label={label} showLabel={false} className="f-img" />
    </div>
  )
}

export function Btn({ to, href, children, ghost = false, light = false }) {
  const cls = `btn ${ghost ? 'ghost' : ''} ${light ? 'light' : ''}`
  const inner = <>{children}<Icon name="arrow" size={18} /></>
  if (href) return <a className={cls} href={href}>{inner}</a>
  return <Link className={cls} to={to}>{inner}</Link>
}

export function Cards({ items }) {
  return (
    <div className="cards c3">
      {items.map((c, i) => (
        <Reveal key={c.tag} delay={i * 90} className="card-wrap">
          <article className="card">
            <span className="ico"><Icon name={c.icon} /></span>
            <h3>{c.tag}</h3>
            <p>{c.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
