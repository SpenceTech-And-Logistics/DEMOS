import { useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import Ph from '../shared/Ph.jsx'
import DemoBar from '../shared/DemoBar.jsx'
import { CountUp, Reveal, ScrollProgress } from '../shared/hooks.jsx'

const to = (site, p) => (p ? `${site.base}/${p}` : site.base)

function Block({ b, site }) {
  const [open, setOpen] = useState(0)
  const [sent, setSent] = useState(false)
  if (b.type === 'cards')
    return (
      <div className="x-grid">
        {b.items.map((c, i) => (
          <Reveal key={c.t} delay={i * 70}>
            <article className="x-card">
              <Ph hue={c.hue ?? site.hue} seed={i + 3} ratio="16 / 10" label={c.t} showLabel={false} />
              <div className="x-cb">{c.tag && <span className="x-chip">{c.tag}</span>}<h3>{c.t}</h3><p>{c.d}</p></div>
            </article>
          </Reveal>
        ))}
      </div>
    )
  if (b.type === 'steps')
    return (
      <ol className="x-steps">
        {b.items.map((s, i) => (
          <Reveal key={s.t} delay={i * 90}><li><span>{i + 1}</span><div><h3>{s.t}</h3><p>{s.d}</p></div></li></Reveal>
        ))}
      </ol>
    )
  if (b.type === 'people')
    return (
      <div className="x-people">
        {b.items.map((p, i) => (
          <Reveal key={p.t} delay={i * 80}>
            <div className="x-person"><Ph hue={p.hue ?? site.hue} seed={i + 30} ratio="1 / 1" portrait label={p.t} showLabel={false} /><h3>{p.t}</h3><span>{p.d}</span></div>
          </Reveal>
        ))}
      </div>
    )
  if (b.type === 'faq')
    return (
      <div className="x-faq">
        {b.items.map((f, i) => (
          <div key={f.t} className={open === i ? 'on' : ''}>
            <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{f.t}<i>{open === i ? '−' : '+'}</i></button>
            <p>{f.d}</p>
          </div>
        ))}
      </div>
    )
  if (b.type === 'news')
    return (
      <div className="x-news">
        {b.items.map((n, i) => (
          <Reveal key={n.t} delay={i * 70}><article><time>{n.date}</time><div><h3>{n.t}</h3><p>{n.d}</p></div></article></Reveal>
        ))}
      </div>
    )
  if (b.type === 'gallery')
    return (
      <div className="x-gal">
        {b.items.map((g, i) => (
          <Reveal key={g.t} delay={(i % 4) * 70}><figure className={g.wide ? 'wide' : ''}><Ph hue={g.hue} seed={i + 50} ratio={g.wide ? '16 / 9' : i % 3 === 1 ? '3 / 4' : '1 / 1'} label={g.t} showLabel={false} /><figcaption>{g.t}</figcaption></figure></Reveal>
        ))}
      </div>
    )
  if (b.type === 'bars')
    return (
      <div className="x-bars">
        {b.items.map(([l, v], i) => (
          <Reveal key={l} delay={i * 60}><div><span>{l}<b>{v}%</b></span><i style={{ '--w': `${v}%` }} /></div></Reveal>
        ))}
      </div>
    )
  if (b.type === 'text')
    return <div className="x-text">{b.paras.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}</div>
  if (b.type === 'table')
    return (
      <div className="x-tablewrap"><table className="x-table"><thead><tr>{b.head.map((h) => <th key={h}>{h}</th>)}</tr></thead><tbody>{b.rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody></table></div>
    )
  if (b.type === 'form')
    return sent ? (
      <div className="x-thanks" role="status"><b>Thank you.</b> This is a sample, so nothing was sent.</div>
    ) : (
      <form className="x-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
        {b.fields.map(([l, t, ph]) => (
          <label key={l} className={t === 'textarea' ? 'wide' : ''}>{l}
            {t === 'textarea' ? <textarea rows="4" placeholder={ph} /> : t === 'select' ? <select>{ph.map((o) => <option key={o}>{o}</option>)}</select> : <input type={t} placeholder={ph} required={t !== 'date'} />}
          </label>
        ))}
        <button className="x-btn">{b.button}</button>
      </form>
    )
  if (b.type === 'contact')
    return (
      <div className="x-contact">
        <div>{b.rows.map(([k, v]) => <p key={k}><b>{k}</b><span>{v}</span></p>)}</div>
        <Ph hue={site.hue} seed={61} ratio="4 / 3" label="Map placeholder" />
      </div>
    )
  return null
}

function Page({ site, page }) {
  return (
    <>
      <section className="x-head"><div className="x-wrap"><Reveal><span className="x-kicker">{page.kicker}</span><h1>{page.title}</h1>{page.intro && <p>{page.intro}</p>}</Reveal></div></section>
      {page.blocks.map((b, i) => <section key={i} className="x-sec"><div className="x-wrap">{b.title && <Reveal><h2>{b.title}</h2></Reveal>}<Block b={b} site={site} /></div></section>)}
    </>
  )
}

function Home({ site }) {
  const h = site.home
  return (
    <>
      <section className="x-hero">
        <i className="x-blob b1" aria-hidden="true" /><i className="x-blob b2" aria-hidden="true" />
        <div className="x-wrap x-hero-in">
          <div>
            <span className="x-kicker x-up">{h.kicker}</span>
            <h1 className="x-up" style={{ animationDelay: '.12s' }}>{h.lead} <em>{h.em}</em></h1>
            <p className="x-up" style={{ animationDelay: '.24s' }}>{h.text}</p>
            <div className="x-row x-up" style={{ animationDelay: '.36s' }}>
              {h.cta.map(([p, l], i) => <Link key={p} to={to(site, p)} className={i ? 'x-btn out' : 'x-btn'}>{l}</Link>)}
            </div>
          </div>
          <div className="x-hero-pic"><Ph hue={site.hue} seed={11} ratio="4 / 5" label="Hero" showLabel={false} /><span className="x-float f1">{h.float[0]}</span><span className="x-float f2">{h.float[1]}</span></div>
        </div>
      </section>
      <section className="x-stats"><div className="x-wrap x-stat-in">{h.stats.map((s) => <div key={s.l}><b><CountUp to={s.n} suffix={s.s} /></b><span>{s.l}</span></div>)}</div></section>
      <section className="x-sec"><div className="x-wrap"><Reveal><span className="x-kicker dark">{h.featKicker}</span><h2>{h.featTitle}</h2></Reveal><Block b={{ type: 'cards', items: h.features }} site={site} /></div></section>
      <section className="x-sec x-tint"><div className="x-wrap x-band"><Reveal><h2>{h.bandTitle}</h2><p>{h.bandText}</p></Reveal><Reveal delay={100}><Link to={to(site, h.bandTo)} className="x-btn">{h.bandBtn}</Link></Reveal></div></section>
    </>
  )
}

export default function MiniSite({ site }) {
  const [open, setOpen] = useState(false)
  const slug = useParams()['*'] || ''
  const page = slug ? site.pages[slug] : null
  return (
    <div className="mini page-fade" style={site.vars}>
      <ScrollProgress />
      <DemoBar label={site.label} />
      <header className="x-bar">
        <div className="x-bar-in">
          <Link to={site.base} className="x-brand" onClick={() => setOpen(false)}><b>{site.initials}</b><span>{site.name}</span></Link>
          <button className="x-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
          <nav className={open ? 'open' : ''}>
            {site.nav.map(([p, l]) => <NavLink key={p} end={p === ''} to={to(site, p)} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'on' : '')}>{l}</NavLink>)}
          </nav>
        </div>
      </header>
      <main key={slug} className="x-main">
        {!slug ? <Home site={site} /> : page ? <Page site={site} page={page} /> : <section className="x-head"><div className="x-wrap"><h1>Page not found</h1><Link to={site.base} className="x-btn">Back to home</Link></div></section>}
      </main>
      <footer className="x-foot"><div className="x-wrap x-foot-in"><span>© {site.name} (sample site, fictional)</span><span>Built by SpenceTec and Logistics Limited</span></div>
        {site.social && <div className="x-wrap x-social" aria-label="Social links">{site.social.map(([n, h]) => <a key={n} href="#top" onClick={(e) => e.preventDefault()} title="Sample link"><b>{n.slice(0, 2)}</b><span>{n}<small>{h}</small></span></a>)}</div>}
      </footer>
    </div>
  )
}
