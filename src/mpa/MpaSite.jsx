import { useState } from 'react'
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import Ph from '../shared/Ph.jsx'
import DemoBar from '../shared/DemoBar.jsx'
import { CountUp, Reveal, ScrollProgress } from '../shared/hooks.jsx'

const to = (site, p) => (p ? `${site.base}/${p}` : site.base)

function Head({ kicker, title, intro }) {
  return (
    <section className="m-head">
      <div className="m-wrap">
        <Reveal><span className="m-kicker">{kicker}</span><h1>{title}</h1>{intro && <p>{intro}</p>}</Reveal>
      </div>
    </section>
  )
}

function Header({ site }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="m-bar">
      <div className="m-bar-in">
        <Link to={site.base} className="m-brand" onClick={() => setOpen(false)}><b>{site.initials}</b><span>{site.name}</span></Link>
        <button className="m-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
        <nav className={open ? 'open' : ''}>
          {site.nav.map(([p, l]) => (
            <NavLink key={p} end={p === ''} to={to(site, p)} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'on' : '')}>{l}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Footer({ site }) {
  return (
    <footer className="m-foot">
      <div className="m-wrap m-foot-in">
        <div><b>{site.name}</b><p>{site.title}</p></div>
        <ul>{site.nav.slice(1, 6).map(([p, l]) => <li key={p}><Link to={to(site, p)}>{l}</Link></li>)}</ul>
      </div>
      <div className="m-foot-base"><div className="m-wrap"><span>© {site.name} (sample site, fictional person)</span><span>Built by SpenceTec and Logistics Limited</span></div></div>
    </footer>
  )
}

function ProjectCard({ site, p, i = 0 }) {
  return (
    <Reveal delay={i * 70}>
      <Link to={to(site, `projects/${p.id}`)} className="m-card">
        <Ph hue={p.hue} seed={i + 2} ratio="16 / 10" label="Project photo" />
        <div className="m-card-b"><span className="m-tag">{p.cat}</span><h3>{p.title}</h3><p>{p.summary}</p><small>{p.place} · {p.year}</small></div>
      </Link>
    </Reveal>
  )
}

function NewsCard({ n, i = 0 }) {
  return (
    <Reveal delay={i * 70} className="m-news">
      <Ph hue={n.hue} seed={i + 40} ratio="4 / 3" label="News photo" />
      <div><span className="m-tag">{n.tag}</span><h3>{n.title}</h3><p>{n.summary}</p><small>{n.date}</small></div>
    </Reveal>
  )
}

function Stats({ site }) {
  return (
    <section className="m-stats">
      <div className="m-wrap m-stat-grid">
        {site.stats.map((s) => (
          <Reveal key={s.l} className="m-stat"><b><CountUp to={s.n} suffix={s.s} /></b><span>{s.l}</span></Reveal>
        ))}
      </div>
    </section>
  )
}

function Home({ site }) {
  return (
    <>
      <section className="m-hero">
        <div className="m-wrap m-hero-in">
          <div className="m-hero-t">
            <span className="m-kicker">{site.title}</span>
            <h1>{site.heroLead} <em>{site.heroEm}</em></h1>
            <p>{site.tagline}</p>
            <div className="m-row">
              <Link to={to(site, 'about')} className="m-btn">About {site.short.split(' ')[0]}</Link>
              <Link to={to(site, 'projects')} className="m-btn ghost">See projects</Link>
            </div>
          </div>
          <div className="m-hero-p">
            <div className="m-blob" aria-hidden="true" />
            <Ph portrait hue={site.layout === 'mp' ? 40 : 172} seed={9} ratio="4 / 5" label="Portrait placeholder" className="m-portrait" />
            <div className="m-float"><b>{site.stats[1].n}{site.stats[1].s}</b><span>{site.stats[1].l}</span></div>
            <div className="m-spin" aria-hidden="true">{site.layout === 'mp' ? 'serving the people' : 'service delivery'}</div>
          </div>
        </div>
      </section>
      <div className="m-marquee" aria-hidden="true"><div>{[0, 1].map((k) => <span key={k}>{site.ticker.join(' ✦ ')} ✦ </span>)}</div></div>
      <Stats site={site} />
      <section className="m-sec">
        <div className="m-wrap">
          <Reveal><span className="m-kicker">{site.focusTitle}</span><h2>{site.focusIntro.split('.')[0]}.</h2></Reveal>
          <div className="m-focus">
            {site.focus.slice(0, 4).map((f, i) => (
              <Reveal key={f.t} delay={i * 80} className="m-fcard"><span>{String(i + 1).padStart(2, '0')}</span><h3>{f.t}</h3><p>{f.d}</p></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="m-sec alt">
        <div className="m-wrap">
          <div className="m-row-h"><Reveal><span className="m-kicker">Projects</span><h2>Recent work</h2></Reveal><Link to={to(site, 'projects')} className="m-link">All projects →</Link></div>
          <div className="m-grid">{site.projects.slice(0, 3).map((p, i) => <ProjectCard key={p.id} site={site} p={p} i={i} />)}</div>
        </div>
      </section>
      <section className="m-sec">
        <div className="m-wrap">
          <div className="m-row-h"><Reveal><span className="m-kicker">News</span><h2>Latest updates</h2></Reveal><Link to={to(site, 'news')} className="m-link">All news →</Link></div>
          <div className="m-newsgrid">{site.news.slice(0, 2).map((n, i) => <NewsCard key={n.id} n={n} i={i} />)}</div>
        </div>
      </section>
      <section className="m-cta">
        <div className="m-wrap"><Reveal><h2>Have a question or an invitation?</h2><Link to={to(site, 'contact')} className="m-btn light">Contact the office</Link></Reveal></div>
      </section>
    </>
  )
}

function About({ site }) {
  const a = site.about
  return (
    <>
      <Head kicker="About" title={a.heading} />
      <section className="m-sec"><div className="m-wrap m-about">
        <Reveal><Ph portrait hue={site.layout === 'mp' ? 40 : 172} seed={4} ratio="4 / 5" label="Portrait placeholder" className="m-portrait flat" />
          <dl className="m-facts">{a.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></Reveal>
        <Reveal delay={100}>
          {a.bio.map((b) => <p key={b} className="m-lead">{b}</p>)}
          <h2>Career and education</h2>
          <ol className="m-time">{a.timeline.map((t) => <li key={t.t}><small>{t.y}</small><b>{t.t}</b><span>{t.d}</span></li>)}</ol>
        </Reveal>
      </div></section>
    </>
  )
}

function Focus({ site }) {
  return (
    <>
      <Head kicker={site.focusTitle} title={site.focusTitle === 'Mandate' ? 'What the department is here to do' : 'The Member’s work in Parliament'} intro={site.focusIntro} />
      <section className="m-sec"><div className="m-wrap">
        <div className="m-focus big">{site.focus.map((f, i) => <Reveal key={f.t} delay={i * 70} className="m-fcard"><span>{String(i + 1).padStart(2, '0')}</span><h3>{f.t}</h3><p>{f.d}</p></Reveal>)}</div>
        <Reveal><h2 className="m-h2">{site.layout === 'mp' ? 'Recent record' : 'Vision and mission'}</h2>
          <ul className="m-record">{site.record.map((r) => <li key={r.t}><small>{r.d}</small><b>{r.t}</b>{r.s && <em>{r.s}</em>}</li>)}</ul></Reveal>
      </div></section>
    </>
  )
}

function Projects({ site }) {
  const [cat, setCat] = useState('All')
  const list = site.projects.filter((p) => cat === 'All' || p.cat === cat)
  return (
    <>
      <Head kicker="Projects" title="Work on the ground" intro="Filter by area. Each project opens to a page with more detail and photos." />
      <section className="m-sec"><div className="m-wrap">
        <div className="m-filters" role="group" aria-label="Filter projects">{site.projectCats.map((c) => <button key={c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}</div>
        <div className="m-grid">{list.map((p, i) => <ProjectCard key={p.id} site={site} p={p} i={i} />)}</div>
      </div></section>
    </>
  )
}

function ProjectDetail({ site }) {
  const { id } = useParams()
  const p = site.projects.find((x) => x.id === id)
  if (!p) return <Head kicker="Projects" title="Project not found" />
  return (
    <>
      <Head kicker={`${p.cat} · ${p.place} · ${p.year}`} title={p.title} intro={p.summary} />
      <section className="m-sec"><div className="m-wrap m-detail">
        <Reveal>{p.body.map((b) => <p key={b} className="m-lead">{b}</p>)}<Link to={to(site, 'projects')} className="m-link">← Back to projects</Link></Reveal>
        <div className="m-shots">{[0, 1, 2].map((k) => <Reveal key={k} delay={k * 90}><Ph hue={(p.hue + k * 24) % 360} seed={k + 60} ratio={k === 0 ? '16 / 10' : '4 / 3'} label={`Photo ${k + 1}`} /></Reveal>)}</div>
      </div></section>
    </>
  )
}

function News({ site }) {
  return (
    <>
      <Head kicker="News" title="News and updates" />
      <section className="m-sec"><div className="m-wrap">
        <div className="m-newsgrid">{site.news.map((n, i) => <NewsCard key={n.id} n={n} i={i} />)}</div>
        {site.events && (
          <Reveal><h2 className="m-h2">Upcoming events</h2>
            <ul className="m-events">{site.events.map((e) => <li key={e.t}><div><b>{e.d}</b><span>{e.m}</span></div><p><b>{e.t}</b><small>{e.p}</small></p></li>)}</ul></Reveal>
        )}
      </div></section>
    </>
  )
}

function Awards({ site }) {
  return (
    <>
      <Head kicker="Awards" title="Recognition" intro="Sample awards for the demo. On a live site these come from the dashboard." />
      <section className="m-sec"><div className="m-wrap m-awards">
        {site.awards.map((a, i) => (
          <Reveal key={a.t} delay={i * 90} className="m-award"><Ph hue={a.hue} seed={i + 70} ratio="3 / 2" label="Award photo" /><div><span className="m-tag">{a.y}</span><h3>{a.t}</h3><b>{a.b}</b><p>{a.d}</p></div></Reveal>
        ))}
      </div></section>
    </>
  )
}

function Gallery({ site }) {
  const [cat, setCat] = useState('All')
  const [big, setBig] = useState(null)
  const list = site.gallery.filter((g) => cat === 'All' || g.cat === cat)
  const g = big !== null ? list[big] : null
  return (
    <>
      <Head kicker="Gallery" title="Photos from the work" />
      <section className="m-sec"><div className="m-wrap">
        <div className="m-filters">{site.galleryCats.map((c) => <button key={c} className={cat === c ? 'on' : ''} onClick={() => { setCat(c); setBig(null) }}>{c}</button>)}</div>
        <div className="m-gal">{list.map((x, i) => (
          <button key={x.cap} className="m-gal-i" onClick={() => setBig(i)} aria-label={`Open ${x.cap}`}><Ph hue={x.hue} seed={i + 80} ratio={i % 4 === 0 ? '4 / 5' : '1 / 1'} label={x.cap} /></button>
        ))}</div>
      </div></section>
      {g && (
        <div className="m-lb" role="dialog" aria-modal="true" aria-label={g.cap} onClick={() => setBig(null)}>
          <button className="m-lb-x" aria-label="Close" onClick={() => setBig(null)}>×</button>
          <button className="m-lb-n l" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setBig((big - 1 + list.length) % list.length) }}>‹</button>
          <div onClick={(e) => e.stopPropagation()}><Ph hue={g.hue} seed={big + 80} ratio="4 / 3" label={g.cap} /><p>{g.cap} · {g.cat}</p></div>
          <button className="m-lb-n r" aria-label="Next" onClick={(e) => { e.stopPropagation(); setBig((big + 1) % list.length) }}>›</button>
        </div>
      )}
    </>
  )
}

function Contact({ site }) {
  const c = site.contact
  const [sent, setSent] = useState(false)
  return (
    <>
      <Head kicker="Contact" title={c.heading} intro={c.intro} />
      <section className="m-sec"><div className="m-wrap m-contact">
        <Reveal>
          <dl className="m-facts">{c.rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          <div className="m-social">{c.social.map((s) => <span key={s}>{s}</span>)}</div>
        </Reveal>
        <Reveal delay={100}>
          {sent ? (
            <div className="m-ok"><b>Thank you.</b> This is a demo form, so nothing was sent. On a live site, messages appear in the office dashboard.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <label>Name<input required /></label>
              <label>Email<input type="email" required /></label>
              <label>Subject<select>{c.subjects.map((s) => <option key={s}>{s}</option>)}</select></label>
              <label>Message<textarea rows="5" required /></label>
              <button className="m-btn">Send message</button>
            </form>
          )}
        </Reveal>
      </div></section>
    </>
  )
}

export default function MpaSite({ site }) {
  const focusPath = site.nav.find(([p]) => p === 'parliament' || p === 'mandate')[0]
  return (
    <div className={`mpa t-${site.key}`}>
      <ScrollProgress />
      <DemoBar label={site.label} />
      <Header site={site} />
      <main className="page-fade" key={site.key}>
        <Routes>
          <Route index element={<Home site={site} />} />
          <Route path="about" element={<About site={site} />} />
          <Route path={focusPath} element={<Focus site={site} />} />
          <Route path="projects" element={<Projects site={site} />} />
          <Route path="projects/:id" element={<ProjectDetail site={site} />} />
          <Route path="news" element={<News site={site} />} />
          {site.awards && <Route path="awards" element={<Awards site={site} />} />}
          <Route path="gallery" element={<Gallery site={site} />} />
          <Route path="contact" element={<Contact site={site} />} />
          <Route path="*" element={<Head kicker="404" title="Page not found" />} />
        </Routes>
      </main>
      <Footer site={site} />
    </div>
  )
}
