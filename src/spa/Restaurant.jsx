import { useState } from 'react'
import Ph from '../shared/Ph.jsx'
import DemoBar from '../shared/DemoBar.jsx'
import { CountUp, Reveal, ScrollProgress } from '../shared/hooks.jsx'
import { goTo } from '../shared/scroll.js'

const menu = {
  Starters: [
    { n: 'Smoked sukuma bruschetta', d: 'Charred greens, tomato, garlic oil', p: 650, hue: 95, tag: 'Veg' },
    { n: 'Chilli samosa trio', d: 'Beef, lentil and spinach, mint chutney', p: 700, hue: 30 },
    { n: 'Coconut bean soup', d: 'Slow-cooked beans, coconut milk, lime', p: 600, hue: 50, tag: 'Veg' },
  ],
  Mains: [
    { n: 'Fire-grilled tilapia', d: 'Whole fish, tamarind glaze, kachumbari', p: 1650, hue: 190, tag: 'Chef pick' },
    { n: 'Nyama choma platter', d: 'Goat ribs, ugali, sukuma, pili pili', p: 1950, hue: 12 },
    { n: 'Coastal coconut curry', d: 'Prawns or jackfruit, rice, chapati', p: 1450, hue: 40 },
  ],
  Desserts: [
    { n: 'Mandazi with spiced cream', d: 'Warm doughnuts, cardamom custard', p: 550, hue: 35 },
    { n: 'Passion fruit tart', d: 'Buttery crust, burnt meringue', p: 600, hue: 55, tag: 'Chef pick' },
  ],
  Drinks: [
    { n: 'Dawa cocktail', d: 'Vodka, honey, lime, ginger', p: 750, hue: 140 },
    { n: 'Tamarind cooler', d: 'Fresh tamarind, mint, soda', p: 350, hue: 20, tag: 'Zero alcohol' },
    { n: 'Kenyan filter coffee', d: 'Single-origin, brewed to order', p: 300, hue: 25 },
  ],
}
const stats = [{ n: 12, s: '', l: 'years cooking' }, { n: 40, s: '+', l: 'local farms' }, { n: 18000, s: '+', l: 'plates a year' }, { n: 5, s: '', l: 'chefs' }]
const quotes = [
  { q: 'The grilled fish alone is worth the drive. Sample review.', w: 'A. Mwangi' },
  { q: 'Warm, loud and generous. We booked again before we left. Sample review.', w: 'S. Njeri' },
  { q: 'Finally, a kitchen that cooks Kenyan food with real care. Sample review.', w: 'D. Otieno' },
]
const hours = [['Mon to Thu', '12:00 to 22:00'], ['Fri and Sat', '12:00 to 00:00'], ['Sunday brunch', '10:00 to 16:00']]

export default function Restaurant() {
  const [cat, setCat] = useState('Mains')
  const [sent, setSent] = useState(false)
  const [qi, setQi] = useState(0)
  return (
    <div className="t-rest page-fade">
      <ScrollProgress />
      <DemoBar label="Single page · restaurant" />
      <header className="r-nav">
        <a href="#top" onClick={goTo('top')} className="r-logo">Moto <i>&amp;</i> Moshi</a>
        <nav>
          <a href="#menu" onClick={goTo('menu')}>Menu</a>
          <a href="#story" onClick={goTo('story')}>Story</a>
          <a href="#visit" onClick={goTo('visit')}>Visit</a>
          <a href="#book" onClick={goTo('book')} className="r-btn sm">Book a table</a>
        </nav>
      </header>

      <section id="top" className="r-hero">
        <i className="r-glow" aria-hidden="true" />
        <div className="r-wrap r-hero-in">
          <div>
            <span className="r-kicker rise-in">Kenyan kitchen · sample restaurant</span>
            <h1 className="rise-in" style={{ animationDelay: '.15s' }}>Smoke, spice <em>and slow fire.</em></h1>
            <p className="rise-in" style={{ animationDelay: '.3s' }}>Wood-fired grills, coastal curries and desserts that make you stay for one more round. Every plate is made from scratch.</p>
            <div className="r-row rise-in" style={{ animationDelay: '.45s' }}>
              <a href="#book" onClick={goTo('book')} className="r-btn">Reserve a table</a>
              <a href="#menu" onClick={goTo('menu')} className="r-btn out">See the menu</a>
            </div>
          </div>
          <div className="r-plate">
            <div className="r-ring" aria-hidden="true" />
            <Ph hue={25} seed={9} ratio="1 / 1" label="Signature dish" showLabel={false} className="r-dish" />
            <span className="r-tag t1">Fire-grilled tilapia</span>
            <span className="r-tag t2">KSh 1,650</span>
          </div>
        </div>
      </section>

      <div className="r-marq" aria-hidden="true"><div>{[0, 1].map((k) => <span key={k}>Wood-fired ✦ Seasonal ✦ From local farms ✦ Made from scratch ✦ Brunch on Sundays ✦ </span>)}</div></div>

      <section id="menu" className="r-sec">
        <div className="r-wrap">
          <Reveal><span className="r-kicker dark">The menu</span><h2>Plates worth sharing</h2></Reveal>
          <div className="r-tabs" role="tablist">
            {Object.keys(menu).map((c) => <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}
          </div>
          <div className="r-menu" key={cat}>
            {menu[cat].map((m, i) => (
              <article key={m.n} className="r-item" style={{ animationDelay: `${i * 80}ms` }}>
                <Ph hue={m.hue} seed={i + 4} ratio="4 / 3" label={m.n} showLabel={false} />
                <div className="r-item-b">
                  <div className="r-item-h"><h3>{m.n}</h3><b>KSh {m.p.toLocaleString()}</b></div>
                  <p>{m.d}</p>
                  {m.tag && <span className="r-chip">{m.tag}</span>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="r-sec r-dark">
        <div className="r-wrap r-story">
          <Reveal><Ph hue={20} seed={21} ratio="4 / 5" label="Kitchen" showLabel={false} className="r-pic" /></Reveal>
          <Reveal delay={120}>
            <span className="r-kicker">Our story</span>
            <h2>Cooked the way we were raised</h2>
            <p>This sample restaurant began as a weekend grill in a family garden. Today the fire is bigger, but the rules are the same: buy from people you know, cook slowly, and never rush a plate.</p>
            <div className="r-stats">{stats.map((s) => <div key={s.l}><b><CountUp to={s.n} suffix={s.s} /></b><span>{s.l}</span></div>)}</div>
          </Reveal>
        </div>
      </section>

      <section className="r-sec">
        <div className="r-wrap r-quote">
          <p key={qi}>“{quotes[qi].q}”</p>
          <span>{quotes[qi].w}</span>
          <div className="r-dots">{quotes.map((_, i) => <button key={i} aria-label={`Review ${i + 1}`} className={i === qi ? 'on' : ''} onClick={() => setQi(i)} />)}</div>
        </div>
      </section>

      <section id="visit" className="r-sec r-tint">
        <div className="r-wrap r-visit">
          <Reveal>
            <span className="r-kicker dark">Visit us</span>
            <h2>Come hungry</h2>
            <table className="r-hours"><tbody>{hours.map(([d, t]) => <tr key={d}><td>{d}</td><td>{t}</td></tr>)}</tbody></table>
            <p className="r-addr">Sample address, Nairobi · +254 700 000 000</p>
          </Reveal>
          <Reveal delay={120}><Ph hue={140} seed={30} ratio="16 / 11" label="Map placeholder" /></Reveal>
        </div>
      </section>

      <section id="book" className="r-sec r-dark">
        <div className="r-wrap r-book">
          <Reveal><span className="r-kicker">Reservations</span><h2>Book a table</h2><p>Demo form: nothing is sent.</p></Reveal>
          {sent ? (
            <div className="r-thanks" role="status"><b>Thank you.</b> This is a sample, so no booking was made.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <label>Name<input required placeholder="Your name" /></label>
              <label>Phone<input required placeholder="+254" /></label>
              <label>Date<input type="date" required /></label>
              <label>Guests<select defaultValue="2">{[1, 2, 3, 4, 5, 6, 8].map((n) => <option key={n}>{n}</option>)}</select></label>
              <button className="r-btn">Request booking</button>
            </form>
          )}
        </div>
      </section>
      <footer className="r-foot">© Moto &amp; Moshi (sample site, fictional restaurant) · Built by SpenceTec and Logistics Limited</footer>
    </div>
  )
}
