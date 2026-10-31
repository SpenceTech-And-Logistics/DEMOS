import { useMemo, useState } from 'react'
import Ph from '../shared/Ph.jsx'
import DemoBar from '../shared/DemoBar.jsx'
import { CountUp, Reveal, ScrollProgress } from '../shared/hooks.jsx'
import { goTo } from '../shared/scroll.js'

const homes = [
  { id: 1, n: 'Garden Terrace Villa', area: 'Karen', type: 'House', beds: 4, baths: 4, sqm: 320, price: 48500000, hue: 150, tag: 'New' },
  { id: 2, n: 'Skyline Two-Bed', area: 'Kilimani', type: 'Apartment', beds: 2, baths: 2, sqm: 118, price: 14800000, hue: 205 },
  { id: 3, n: 'Quiet Courtyard Maisonette', area: 'Lavington', type: 'House', beds: 3, baths: 3, sqm: 210, price: 29500000, hue: 30, tag: 'Popular' },
  { id: 4, n: 'Studio Loft', area: 'Westlands', type: 'Apartment', beds: 1, baths: 1, sqm: 54, price: 7200000, hue: 280 },
  { id: 5, n: 'Acre Plot with Water', area: 'Ruiru', type: 'Land', beds: 0, baths: 0, sqm: 4047, price: 9800000, hue: 100 },
  { id: 6, n: 'Lakeview Penthouse', area: 'Riverside', type: 'Apartment', beds: 3, baths: 3, sqm: 190, price: 36000000, hue: 190, tag: 'New' },
]
const agents = [
  { n: 'Wanjiku Sample', r: 'Senior agent', hue: 330 },
  { n: 'Ibrahim Sample', r: 'Lettings lead', hue: 210 },
  { n: 'Achieng Sample', r: 'Land and plots', hue: 120 },
]
const types = ['All', 'House', 'Apartment', 'Land']
const money = (n) => 'KSh ' + n.toLocaleString()

function monthly(price, down, years, rate) {
  const loan = price * (1 - down / 100)
  const r = rate / 100 / 12
  const n = years * 12
  return Math.round((loan * r) / (1 - Math.pow(1 + r, -n)))
}

export default function RealEstate() {
  const [type, setType] = useState('All')
  const [max, setMax] = useState(50000000)
  const [open, setOpen] = useState(null)
  const [price, setPrice] = useState(20000000)
  const [down, setDown] = useState(20)
  const [years, setYears] = useState(20)
  const [sent, setSent] = useState(false)
  const list = useMemo(() => homes.filter((h) => (type === 'All' || h.type === type) && h.price <= max), [type, max])
  const pay = monthly(price, down, years, 13)
  const sel = homes.find((h) => h.id === open)

  return (
    <div className="t-est page-fade">
      <ScrollProgress />
      <DemoBar label="Single page · real estate" />
      <header className="e-nav">
        <a href="#top" onClick={goTo('top')} className="e-logo"><i />Nyumba<b>Hub</b></a>
        <nav>
          <a href="#listings" onClick={goTo('listings')}>Listings</a>
          <a href="#calc" onClick={goTo('calc')}>Mortgage</a>
          <a href="#agents" onClick={goTo('agents')}>Agents</a>
          <a href="#enquire" onClick={goTo('enquire')} className="e-btn sm">Enquire</a>
        </nav>
      </header>

      <section id="top" className="e-hero">
        <div className="e-hero-bg"><Ph hue={210} seed={5} ratio="21 / 9" label="Skyline" showLabel={false} /></div>
        <div className="e-wrap e-hero-in">
          <span className="e-kicker e-up">Sample real estate agency · Nairobi</span>
          <h1 className="e-up" style={{ animationDelay: '.12s' }}>Find a home that <em>fits your life.</em></h1>
          <div className="e-search e-up" style={{ animationDelay: '.26s' }}>
            <label>Type<select value={type} onChange={(e) => setType(e.target.value)}>{types.map((t) => <option key={t}>{t}</option>)}</select></label>
            <label>Budget up to<select value={max} onChange={(e) => setMax(+e.target.value)}>{[10000000, 20000000, 30000000, 50000000].map((n) => <option key={n} value={n}>{money(n)}</option>)}</select></label>
            <a href="#listings" onClick={goTo('listings')} className="e-btn">Show {list.length} {list.length === 1 ? 'home' : 'homes'}</a>
          </div>
        </div>
      </section>

      <section className="e-numbers">
        <div className="e-wrap e-nums">
          {[[420, '+', 'Homes sold'], [15, '', 'Years in Nairobi'], [98, '%', 'Client satisfaction'], [12, '', 'Neighbourhoods']].map(([n, s, l]) => <div key={l}><b><CountUp to={n} suffix={s} /></b><span>{l}</span></div>)}
        </div>
      </section>

      <section id="listings" className="e-sec">
        <div className="e-wrap">
          <Reveal><span className="e-kicker dark">Featured</span><h2>Homes on the market</h2></Reveal>
          {list.length === 0 && <p className="e-empty">No homes match. Try a higher budget.</p>}
          <div className="e-grid">
            {list.map((h, i) => (
              <article key={h.id} className="e-card" style={{ animationDelay: `${i * 70}ms` }}>
                <div className="e-pic">
                  <Ph hue={h.hue} seed={h.id + 2} ratio="4 / 3" label={h.n} showLabel={false} />
                  {h.tag && <span className="e-badge">{h.tag}</span>}
                </div>
                <div className="e-cb">
                  <b className="e-price">{money(h.price)}</b>
                  <h3>{h.n}</h3>
                  <p>{h.area}, Nairobi · {h.type}</p>
                  <ul>{h.beds > 0 ? <><li>{h.beds} beds</li><li>{h.baths} baths</li></> : null}<li>{h.sqm.toLocaleString()} m²</li></ul>
                  <button className="e-link" onClick={() => setOpen(h.id)}>View details →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="calc" className="e-sec e-tint">
        <div className="e-wrap e-calc">
          <Reveal>
            <span className="e-kicker dark">Mortgage calculator</span>
            <h2>What would it cost each month?</h2>
            <p>Sample maths at 13% a year. Real rates depend on the lender.</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="e-panel">
              <label>Home price <b>{money(price)}</b><input type="range" min="5000000" max="60000000" step="500000" value={price} onChange={(e) => setPrice(+e.target.value)} /></label>
              <label>Deposit <b>{down}%</b><input type="range" min="10" max="50" step="5" value={down} onChange={(e) => setDown(+e.target.value)} /></label>
              <label>Term <b>{years} years</b><input type="range" min="5" max="25" step="1" value={years} onChange={(e) => setYears(+e.target.value)} /></label>
              <div className="e-result"><span>Estimated monthly payment</span><b key={pay}>{money(pay)}</b></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="agents" className="e-sec">
        <div className="e-wrap">
          <Reveal><span className="e-kicker dark">Our team</span><h2>People who know the streets</h2></Reveal>
          <div className="e-agents">
            {agents.map((a, i) => (
              <Reveal key={a.n} delay={i * 90}>
                <div className="e-agent"><Ph hue={a.hue} seed={i + 40} ratio="1 / 1" portrait label={a.n} showLabel={false} /><h3>{a.n}</h3><span>{a.r}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="e-sec e-dark">
        <div className="e-wrap e-enq">
          <Reveal><span className="e-kicker">Enquire</span><h2>Tell us what you are looking for</h2><p>Demo form: nothing is sent.</p></Reveal>
          {sent ? <div className="e-thanks" role="status"><b>Thank you.</b> This is a sample, so no enquiry was sent.</div> : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <label>Name<input required placeholder="Your name" /></label>
              <label>Phone<input required placeholder="+254" /></label>
              <label className="wide">Message<textarea rows="4" placeholder="Area, budget, bedrooms" /></label>
              <button className="e-btn">Send enquiry</button>
            </form>
          )}
        </div>
      </section>
      <footer className="e-foot">© NyumbaHub (sample site, fictional agency) · Built by SpenceTec and Logistics Limited</footer>

      {sel && (
        <div className="e-modal" role="dialog" aria-modal="true" aria-label={sel.n} onClick={() => setOpen(null)}>
          <div className="e-box" onClick={(e) => e.stopPropagation()}>
            <button className="e-x" aria-label="Close" onClick={() => setOpen(null)}>×</button>
            <Ph hue={sel.hue} seed={sel.id + 2} ratio="16 / 9" label={sel.n} showLabel={false} />
            <div className="e-box-b">
              <b className="e-price">{money(sel.price)}</b>
              <h3>{sel.n}</h3>
              <p>{sel.area}, Nairobi · {sel.type} · {sel.sqm.toLocaleString()} m²{sel.beds ? ` · ${sel.beds} beds · ${sel.baths} baths` : ''}</p>
              <p>Placeholder description. Bright rooms, secure parking, reliable water and a short drive to schools and shops.</p>
              <a href="#enquire" className="e-btn" onClick={(e) => { setOpen(null); goTo('enquire')(e) }}>Book a viewing</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
