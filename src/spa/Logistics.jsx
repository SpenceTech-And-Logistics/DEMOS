import { useState } from 'react'
import Ph from '../shared/Ph.jsx'
import DemoBar from '../shared/DemoBar.jsx'
import { CountUp, Reveal, ScrollProgress } from '../shared/hooks.jsx'
import { goTo } from '../shared/scroll.js'

const stops = ['Mombasa', 'Nairobi', 'Kampala', 'Kigali']
const steps = ['Order received', 'Collected from sender', 'In transit', 'Customs cleared', 'Out for delivery', 'Delivered']
const services = [
  { i: '🚛', t: 'Road freight', d: 'Full and part loads across East Africa with GPS-tracked trucks.' },
  { i: '📦', t: 'Warehousing', d: 'Secure storage, picking and packing in Nairobi and Mombasa.' },
  { i: '🛃', t: 'Customs clearing', d: 'Paperwork and port handling done for you, start to finish.' },
  { i: '⚡', t: 'Express courier', d: 'Next-day parcels between major towns. Sample copy only.' },
]

export default function Logistics() {
  const [code, setCode] = useState('')
  const [track, setTrack] = useState(null)
  const [sent, setSent] = useState(false)
  const lookup = (e) => {
    e.preventDefault()
    const c = code.trim().toUpperCase() || 'NW-1042'
    // Demo only: the status is derived from the code so each one looks different.
    const n = [...c].reduce((a, ch) => a + ch.charCodeAt(0), 0)
    setTrack({ code: c, at: 1 + (n % 5), from: stops[n % 2], to: stops[2 + (n % 2)] })
  }
  return (
    <div className="t-log page-fade">
      <ScrollProgress />
      <DemoBar label="Single page · business" />
      <header className="l-nav">
        <a href="#top" onClick={goTo('top')} className="l-logo"><i>N</i>Northway <small>Freight</small></a>
        <nav>
          <a href="#track" onClick={goTo('track')}>Track</a>
          <a href="#services" onClick={goTo('services')}>Services</a>
          <a href="#coverage" onClick={goTo('coverage')}>Coverage</a>
          <a href="#quote" onClick={goTo('quote')} className="l-btn sm">Get a quote</a>
        </nav>
      </header>

      <section id="top" className="l-hero">
        <div className="l-hero-t">
          <span className="l-pill">Mombasa · Nairobi · Kampala · Kigali</span>
          <h1>Goods moved. <span>On time.</span> Every time.</h1>
          <p>Sample company tagline: reliable road freight, warehousing and customs clearing for businesses across East Africa.</p>
          <div className="l-row"><a href="#quote" onClick={goTo('quote')} className="l-btn">Request a quote</a><a href="#track" onClick={goTo('track')} className="l-btn out">Track a shipment</a></div>
        </div>
        <div className="l-hero-p">
          <Ph hue={205} seed={21} ratio="5 / 4" label="Truck photo placeholder" />
          <div className="l-badge"><b>24/7</b> dispatch desk</div>
          <div className="l-truck" aria-hidden="true">🚚</div>
        </div>
      </section>

      <section className="l-stats">
        {[[850, '+', 'Deliveries a month'], [4, '', 'Countries served'], [99, '%', 'On-time rate'], [60, '+', 'Trucks and drivers']].map(([n, s, l]) => (
          <Reveal key={l}><b><CountUp to={n} suffix={s} /></b><span>{l}</span></Reveal>
        ))}
      </section>

      <section id="track" className="l-sec l-track">
        <Reveal>
          <h2>Where is my shipment?</h2>
          <p>Try the demo: type any code, such as NW-1042, or leave it blank and press Track.</p>
          <form onSubmit={lookup}>
            <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter tracking code" aria-label="Tracking code" />
            <button className="l-btn">Track</button>
          </form>
        </Reveal>
        {track && (
          <div className="l-result" key={track.code}>
            <div className="l-res-h"><b>{track.code}</b><span>{track.from} → {track.to}</span><em>{steps[track.at]}</em></div>
            <ol>
              {steps.map((s, i) => (
                <li key={s} className={i < track.at ? 'done' : i === track.at ? 'now' : ''} style={{ animationDelay: `${i * 90}ms` }}><i />{s}</li>
              ))}
            </ol>
          </div>
        )}
      </section>

      <section id="services" className="l-sec">
        <Reveal><h2>What we do</h2></Reveal>
        <div className="l-grid">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 80} className="l-card"><span>{s.i}</span><h3>{s.t}</h3><p>{s.d}</p></Reveal>
          ))}
        </div>
      </section>

      <section id="coverage" className="l-sec l-cov">
        <Reveal>
          <h2>One route, four capitals</h2>
          <p>Our main corridor links the port of Mombasa with Nairobi, Kampala and Kigali. Transit times below are sample figures.</p>
        </Reveal>
        <div className="l-route">
          <div className="l-line"><span /></div>
          {stops.map((s, i) => (
            <Reveal key={s} delay={i * 140} className="l-stop"><i>{i + 1}</i><b>{s}</b><small>{['Port', '+1 day', '+3 days', '+4 days'][i]}</small></Reveal>
          ))}
        </div>
      </section>

      <section className="l-sec l-process">
        <Reveal><h2>How it works</h2></Reveal>
        <div className="l-steps">
          {['Request a quote', 'We collect', 'We move and clear', 'You receive'].map((s, i) => (
            <Reveal key={s} delay={i * 100} className="l-step"><b>{i + 1}</b>{s}</Reveal>
          ))}
        </div>
        <div className="l-fleet">
          {[210, 30, 150].map((h, i) => <Reveal key={h} delay={i * 100}><Ph hue={h} seed={30 + i} ratio="4 / 3" label="Fleet photo" /></Reveal>)}
        </div>
      </section>

      <section id="quote" className="l-sec l-quote">
        <div>
          <h2>Get a quote in one working day</h2>
          <p>Tell us what you are moving and where. Sample contact: ops@example.com · +254 711 000 000</p>
        </div>
        {sent ? (
          <div className="l-ok"><b>Request received (demo).</b> Nothing was sent. On a live site this goes straight to the sales inbox.</div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <label>Company<input required placeholder="Company name" /></label>
            <div className="l-two">
              <label>From<select defaultValue="Mombasa">{stops.map((s) => <option key={s}>{s}</option>)}</select></label>
              <label>To<select defaultValue="Kampala">{stops.map((s) => <option key={s}>{s}</option>)}</select></label>
            </div>
            <label>Cargo<textarea rows="3" placeholder="e.g. 12 pallets of packaged goods" /></label>
            <button className="l-btn">Send request</button>
          </form>
        )}
      </section>

      <footer className="l-foot"><span>© Northway Freight (fictional company)</span><span>Built by SpenceTec and Logistics Limited</span></footer>
    </div>
  )
}
