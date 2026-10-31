import { useState } from 'react'
import Ph from '../shared/Ph.jsx'
import DemoBar from '../shared/DemoBar.jsx'
import { CountUp, Reveal, ScrollProgress } from '../shared/hooks.jsx'
import { goTo } from '../shared/scroll.js'

const channels = [
  { n: 'Instagram', h: '@amara.creates', f: 182, hue: 330 }, { n: 'TikTok', h: '@amaramakes', f: 540, hue: 190 },
  { n: 'YouTube', h: 'Amara Creates', f: 96, hue: 8 }, { n: 'X', h: '@amaracreates', f: 38, hue: 220 },
]
const posts = [
  { c: 'Instagram', t: 'Behind the scenes of the new collection', l: '4.2K', hue: 330 }, { c: 'TikTok', t: '30-second tutorial: styling kitenge', l: '21K', hue: 190 },
  { c: 'YouTube', t: 'A day in my studio (vlog)', l: '6.8K', hue: 8 }, { c: 'Instagram', t: 'Market day haul', l: '3.1K', hue: 40 },
  { c: 'TikTok', t: 'Thrift flip challenge', l: '35K', hue: 280 }, { c: 'X', t: 'Thread: five lessons from year one', l: '1.9K', hue: 220 },
]
const work = [['Sample Fashion Week', 'Host and stylist', 120], ['EcoWear campaign', 'Brand ambassador', 40], ['Nairobi Maker Fair', 'Panel speaker', 200], ['Fresh Threads series', 'Creator and presenter', 300]]

export default function Creator() {
  const [f, setF] = useState('All')
  const shown = posts.filter((p) => f === 'All' || p.c === f)
  return (
    <div className="t-cre page-fade">
      <ScrollProgress />
      <DemoBar label="Single page · creator portfolio" />
      <header className="v-nav">
        <a href="#top" onClick={goTo('top')} className="v-logo">amara<i>.</i></a>
        <nav><a href="#feed" onClick={goTo('feed')}>Feed</a><a href="#work" onClick={goTo('work')}>Work</a><a href="#book" onClick={goTo('book')} className="v-btn sm">Collaborate</a></nav>
      </header>
      <section id="top" className="v-hero">
        <i className="v-orb o1" aria-hidden="true" /><i className="v-orb o2" aria-hidden="true" />
        <div className="v-wrap v-hero-in">
          <div>
            <span className="v-kicker v-up">Sample content creator · Nairobi</span>
            <h1 className="v-up" style={{ animationDelay: '.12s' }}>Hi, I am Amara. <em>I make things people share.</em></h1>
            <p className="v-up" style={{ animationDelay: '.24s' }}>Fashion, thrift and studio life, across four platforms. Placeholder text for a creator portfolio.</p>
          </div>
          <div className="v-avatar"><Ph hue={330} seed={7} ratio="1 / 1" portrait label="Portrait" showLabel={false} /></div>
        </div>
      </section>
      <section className="v-sec">
        <div className="v-wrap v-chan">
          {channels.map((c, i) => (
            <Reveal key={c.n} delay={i * 80}><div className="v-ch" style={{ '--h': c.hue }}><b>{c.n.slice(0, 2)}</b><span>{c.n}<small>{c.h}</small></span><strong><CountUp to={c.f} suffix="K" /></strong></div></Reveal>
          ))}
        </div>
      </section>
      <section id="feed" className="v-sec v-tint">
        <div className="v-wrap">
          <Reveal><span className="v-kicker dark">Latest posts</span><h2>The feed</h2></Reveal>
          <div className="v-tabs">{['All', ...channels.map((c) => c.n)].map((c) => <button key={c} className={f === c ? 'on' : ''} onClick={() => setF(c)}>{c}</button>)}</div>
          <div className="v-feed" key={f}>
            {shown.map((p, i) => (
              <article key={p.t} className="v-post" style={{ animationDelay: `${i * 70}ms` }}>
                <Ph hue={p.hue} seed={i + 12} ratio="4 / 5" label={p.t} showLabel={false} />
                <div><span>{p.c}</span><h3>{p.t}</h3><b>♥ {p.l}</b></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="work" className="v-sec">
        <div className="v-wrap">
          <Reveal><span className="v-kicker dark">Collaborations</span><h2>Brands I have worked with</h2></Reveal>
          <div className="v-work">{work.map(([n, r, k], i) => <Reveal key={n} delay={i * 80}><div><h3>{n}</h3><p>{r}</p><b>{k}K reach</b></div></Reveal>)}</div>
        </div>
      </section>
      <section id="book" className="v-sec v-dark">
        <div className="v-wrap v-cta"><Reveal><h2>Let us make something together</h2><p>hello@example.com (sample address)</p></Reveal></div>
      </section>
      <footer className="v-foot">
        <div className="v-wrap v-foot-in"><span>© Amara Creates (sample site, fictional) · Built by SpenceTec and Logistics Limited</span></div>
        <div className="v-wrap v-social" aria-label="Social links">
          {channels.map((c) => <a key={c.n} href="#top" onClick={(e) => e.preventDefault()} title="Sample link"><b>{c.n.slice(0, 2)}</b><span>{c.n}<small>{c.h}</small></span></a>)}
        </div>
      </footer>
    </div>
  )
}
