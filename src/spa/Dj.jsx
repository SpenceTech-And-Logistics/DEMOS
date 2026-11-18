import { useState } from 'react'
import Ph from '../shared/Ph.jsx'
import DemoBar from '../shared/DemoBar.jsx'
import { CountUp, Reveal, ScrollProgress } from '../shared/hooks.jsx'
import { goTo } from '../shared/scroll.js'

const social = [['Instagram', '@djkito.live'], ['TikTok', '@djkito'], ['YouTube', 'DJ Kito Live'], ['Mixcloud', 'djkito'], ['Spotify', 'DJ Kito']]
const genres = ['All', 'Afrobeats', 'Amapiano', 'House', 'Gengetone']
const mixes = [
  { t: 'Friday Rooftop Vol. 12', g: 'Afrobeats', len: '58:20', hue: 320 }, { t: 'Piano Sundays', g: 'Amapiano', len: '1:12:05', hue: 190 },
  { t: 'Sunset Deep House', g: 'House', len: '47:40', hue: 260 }, { t: 'Nairobi Nights', g: 'Gengetone', len: '39:15', hue: 20 },
  { t: 'Wedding Reception Set', g: 'Afrobeats', len: '1:05:30', hue: 345 }, { t: 'Log Drum Session', g: 'Amapiano', len: '52:10', hue: 160 },
]
const gigs = [['21 Nov', 'Skyline Rooftop', 'Nairobi', 'Tickets'], ['28 Nov', 'Palm Beach Festival', 'Diani', 'Tickets'], ['05 Dec', 'Corporate year-end party', 'Westlands', 'Private'], ['12 Dec', 'Neon Warehouse Night', 'Nairobi', 'Tickets'], ['31 Dec', 'New Year’s Eve Countdown', 'Mombasa', 'Tickets']]
const packages = [
  { n: 'Club or bar night', p: 'KSh 40,000', l: ['4-hour set', 'Own controller and music library', 'Light show add-on'] },
  { n: 'Wedding', p: 'KSh 85,000', l: ['Ceremony, cocktail and reception', 'Full PA and two speakers', 'MC on request'], hot: true },
  { n: 'Corporate and festival', p: 'From KSh 120,000', l: ['Stage, sound and lighting crew', 'Custom playlist brief', 'Branded visuals'] },
]
const bars = Array.from({ length: 28 }, (_, i) => i)

export default function Dj() {
  const [g, setG] = useState('All')
  const [on, setOn] = useState(null)
  const [sent, setSent] = useState(false)
  const shown = mixes.filter((m) => g === 'All' || m.g === g)
  return (
    <div className="t-dj page-fade">
      <ScrollProgress />
      <DemoBar label="Single page · DJ" />
      <header className="d-nav">
        <a href="#top" onClick={goTo('top')} className="d-logo">DJ KITO<i>.</i></a>
        <nav><a href="#mixes" onClick={goTo('mixes')}>Mixes</a><a href="#gigs" onClick={goTo('gigs')}>Gigs</a><a href="#book" onClick={goTo('book')} className="d-btn sm">Book Kito</a></nav>
      </header>
      <section id="top" className="d-hero">
        <i className="d-glow g1" aria-hidden="true" /><i className="d-glow g2" aria-hidden="true" />
        <div className="d-wrap d-hero-in">
          <div>
            <span className="d-kicker d-up">Sample DJ · Nairobi</span>
            <h1 className="d-up" style={{ animationDelay: '.12s' }}>Music that keeps <em>the floor full.</em></h1>
            <p className="d-up" style={{ animationDelay: '.24s' }}>Afrobeats, amapiano and house for clubs, weddings and festivals. Placeholder text for a DJ website.</p>
            <div className="d-row d-up" style={{ animationDelay: '.36s' }}>
              <a href="#book" onClick={goTo('book')} className="d-btn">Book for your event</a>
              <a href="#mixes" onClick={goTo('mixes')} className="d-btn out">Listen to mixes</a>
            </div>
          </div>
          <div className="d-disc" aria-hidden="true"><div className="d-vinyl"><Ph hue={320} seed={9} ratio="1 / 1" portrait showLabel={false} /></div></div>
        </div>
        <div className="d-eq" aria-hidden="true">{bars.map((b) => <i key={b} style={{ '--i': b, '--s': `${0.7 + ((b * 7) % 11) / 10}s` }} />)}</div>
      </section>
      <section className="d-stats">
        <div className="d-wrap d-stat-in">
          {[[400, '+', 'Gigs played'], [9, '', 'Years on the decks'], [220, 'K', 'Monthly listens (sample)'], [35, '', 'Weddings booked this year']].map(([n, s, l], i) => (
            <Reveal key={l} delay={i * 80}><div><b><CountUp to={n} suffix={s} /></b><span>{l}</span></div></Reveal>
          ))}
        </div>
      </section>
      <section id="mixes" className="d-sec">
        <div className="d-wrap">
          <Reveal><span className="d-kicker">Latest mixes</span><h2>Press play</h2></Reveal>
          <div className="d-tabs">{genres.map((x) => <button key={x} className={g === x ? 'on' : ''} onClick={() => setG(x)}>{x}</button>)}</div>
          <div className="d-mixes" key={g}>
            {shown.map((m, i) => (
              <article key={m.t} className={`d-mix ${on === m.t ? 'playing' : ''}`} style={{ animationDelay: `${i * 70}ms` }}>
                <Ph hue={m.hue} seed={i + 4} ratio="1 / 1" label={m.t} showLabel={false} />
                <div>
                  <span>{m.g}</span><h3>{m.t}</h3>
                  <div className="d-wave" aria-hidden="true">{Array.from({ length: 22 }, (_, k) => <i key={k} style={{ '--i': k }} />)}</div>
                  <button className="d-play" aria-pressed={on === m.t} onClick={() => setOn(on === m.t ? null : m.t)}>{on === m.t ? 'Pause' : 'Play'}<small>{m.len}</small></button>
                </div>
              </article>
            ))}
          </div>
          <p className="d-note">Sample player: no audio plays in this demo.</p>
        </div>
      </section>
      <section id="gigs" className="d-sec d-alt">
        <div className="d-wrap">
          <Reveal><span className="d-kicker">On tour</span><h2>Upcoming gigs</h2></Reveal>
          <div className="d-gigs">
            {gigs.map(([d, v, c, t], i) => (
              <Reveal key={d} delay={i * 70}><div className="d-gig"><b>{d}</b><span><strong>{v}</strong><small>{c}</small></span><a href="#book" onClick={goTo('book')} className={t === 'Private' ? 'tag' : 'btn'}>{t}</a></div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="d-sec">
        <div className="d-wrap">
          <Reveal><span className="d-kicker">Book the decks</span><h2>Packages</h2></Reveal>
          <div className="d-pack">
            {packages.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}><div className={`d-pk ${p.hot ? 'hot' : ''}`}>{p.hot && <em>Most booked</em>}<h3>{p.n}</h3><b>{p.p}</b><ul>{p.l.map((x) => <li key={x}>{x}</li>)}</ul><a href="#book" onClick={goTo('book')} className="d-btn sm">Ask about this</a></div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section id="book" className="d-sec d-alt">
        <div className="d-wrap d-book">
          <Reveal><span className="d-kicker">Booking</span><h2>Tell Kito about your night</h2><p>Share the date, the venue and the crowd. A reply comes within a day. Sample email: bookings@example.com</p></Reveal>
          <Reveal delay={100}>
            {sent ? <div className="d-thanks" role="status"><b>Thank you.</b> This is a sample, so nothing was sent.</div> : (
              <form className="d-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <label>Name<input required placeholder="Your name" /></label>
                <label>Email<input type="email" required placeholder="you@example.com" /></label>
                <label>Event<select><option>Club or bar night</option><option>Wedding</option><option>Corporate</option><option>Festival</option></select></label>
                <label>Date<input type="date" /></label>
                <label className="wide">Details<textarea rows="3" placeholder="Venue, crowd, music you love" /></label>
                <button className="d-btn">Send request</button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
      <footer className="d-foot">
        <div className="d-wrap"><span>© DJ Kito (sample site, fictional) · Built by SpenceTec and Logistics Limited</span></div>
        <div className="d-wrap d-social" aria-label="Social links">
          {social.map(([n, h]) => <a key={n} href="#top" onClick={(e) => e.preventDefault()} title="Sample link"><b>{n.slice(0, 2)}</b><span>{n}<small>{h}</small></span></a>)}
        </div>
      </footer>
    </div>
  )
}
