import { useState } from 'react'
import Ph from '../shared/Ph.jsx'
import DemoBar from '../shared/DemoBar.jsx'
import { CountUp, Reveal, ScrollProgress } from '../shared/hooks.jsx'
import { goTo } from '../shared/scroll.js'

const services = [
  { n: '01', t: 'One-to-one coaching', d: 'Private sessions to sharpen decisions, communication and confidence. Sample description text for the demo.' },
  { n: '02', t: 'Team workshops', d: 'Half-day and full-day sessions that help teams agree on priorities and work better together.' },
  { n: '03', t: 'Strategy sprints', d: 'A focused two-week process to turn a vague goal into a clear plan with owners and dates.' },
  { n: '04', t: 'Keynote talks', d: 'Practical, story-led talks for conferences, boards and community events.' },
]
const work = [
  { t: 'Leadership programme for a county health team', y: '2025', h: 18 },
  { t: 'Strategy sprint for a youth enterprise fund', y: '2025', h: 160 },
  { t: 'Annual retreat for a regional bank', y: '2024', h: 330 },
]
const quotes = [
  { q: 'Placeholder testimonial. Amani helped our team agree on three priorities in a single afternoon.', n: 'Client Name', r: 'Director, Sample Organisation' },
  { q: 'Placeholder testimonial. Clear, warm and practical. We still use the framework months later.', n: 'Client Name', r: 'Founder, Sample Startup' },
  { q: 'Placeholder testimonial. The best investment we made in our managers this year.', n: 'Client Name', r: 'HR Lead, Sample Company' },
]
const faqs = [
  ['How long is a typical engagement?', 'Coaching usually runs for three months. Workshops are one day. Sprints take two weeks. This answer is placeholder text.'],
  ['Do you work online?', 'Yes. Sessions can be held on video call or in person in Nairobi. Placeholder text.'],
  ['What does it cost?', 'Fees depend on the scope. Send an enquiry and a proposal follows within two working days. Placeholder text.'],
]

export default function Consultant() {
  const [open, setOpen] = useState(0)
  const [sent, setSent] = useState(false)
  const [menu, setMenu] = useState(false)
  const links = [['about', 'About'], ['services', 'Services'], ['work', 'Work'], ['voices', 'Voices'], ['faq', 'FAQ']]
  return (
    <div className="t-consult page-fade">
      <ScrollProgress />
      <DemoBar label="Single page · personal brand" />
      <header className="c-nav">
        <a href="#top" onClick={goTo('top')} className="c-logo"><b>AW</b> Amani Wekesa</a>
        <button className="c-burger" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu(!menu)}><i /><i /></button>
        <nav className={menu ? 'open' : ''}>
          {links.map(([id, l]) => (
            <a key={id} href={`#${id}`} onClick={(e) => { goTo(id)(e); setMenu(false) }}>{l}</a>
          ))}
          <a href="#contact" onClick={(e) => { goTo('contact')(e); setMenu(false) }} className="c-btn small">Book a call</a>
        </nav>
      </header>

      <section id="top" className="c-hero">
        <div className="c-hero-text">
          <span className="c-chip">Leadership and strategy coach</span>
          <h1>Clear thinking for <em>people who lead</em></h1>
          <p>Sample tagline: I help managers, founders and public servants make better decisions and build teams that deliver.</p>
          <div className="c-row">
            <a href="#contact" onClick={goTo('contact')} className="c-btn">Book a free call</a>
            <a href="#work" onClick={goTo('work')} className="c-btn ghost">See recent work</a>
          </div>
        </div>
        <div className="c-hero-pic">
          <div className="c-blob" />
          <Ph portrait hue={18} seed={5} ratio="4 / 5" label="Portrait placeholder" className="c-portrait" />
          <div className="c-float"><b>120+</b><span>sessions delivered</span></div>
          <div className="c-spin" aria-hidden="true"><span>coaching · strategy · workshops · </span></div>
        </div>
      </section>

      <div className="c-marquee" aria-hidden="true"><div>{[0, 1].map((k) => <span key={k}>Coaching ✦ Workshops ✦ Strategy ✦ Keynotes ✦ Facilitation ✦ Mentoring ✦ </span>)}</div></div>

      <section id="about" className="c-sec c-about">
        <Reveal><Ph hue={190} seed={8} ratio="1 / 1" label="Photo placeholder" className="c-round" /></Reveal>
        <Reveal delay={120}>
          <span className="c-kicker">About</span>
          <h2>Twelve years of helping teams find their footing</h2>
          <p>This is placeholder biography text. Replace it with two short paragraphs about background, approach and the kind of clients you enjoy working with. Keep it human and specific.</p>
          <p>Previously led learning programmes at a large organisation, then set up an independent practice in 2019. Holds a Master's degree and two coaching certifications (sample).</p>
          <ul className="c-facts"><li><b>12</b> years</li><li><b>3</b> countries</li><li><b>40+</b> clients</li></ul>
        </Reveal>
      </section>

      <section id="services" className="c-sec c-dark">
        <Reveal><span className="c-kicker">Services</span><h2>How we can work together</h2></Reveal>
        <div className="c-cards">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="c-card"><span>{s.n}</span><h3>{s.t}</h3><p>{s.d}</p></Reveal>
          ))}
        </div>
      </section>

      <section id="work" className="c-sec">
        <Reveal><span className="c-kicker">Selected work</span><h2>Recent projects</h2></Reveal>
        <div className="c-work">
          {work.map((w, i) => (
            <Reveal key={w.t} delay={i * 100} className="c-proj">
              <Ph hue={w.h} seed={i + 12} ratio="4 / 3" label="Project photo" />
              <div><small>{w.y}</small><h3>{w.t}</h3></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="c-sec c-numbers">
        {[[120, '+', 'Sessions'], [40, '+', 'Organisations'], [96, '%', 'Would recommend'], [12, '', 'Years']].map(([n, s, l]) => (
          <Reveal key={l}><strong><CountUp to={n} suffix={s} /></strong><span>{l}</span></Reveal>
        ))}
      </section>

      <section id="voices" className="c-sec">
        <Reveal><span className="c-kicker">Voices</span><h2>What clients say</h2></Reveal>
        <div className="c-quotes">
          {quotes.map((q, i) => (
            <Reveal as="figure" key={i} delay={i * 100} className="c-quote">
              <blockquote>“{q.q}”</blockquote>
              <figcaption><Ph portrait hue={30 + i * 70} seed={i} ratio="1 / 1" showLabel={false} className="c-av" /><span><b>{q.n}</b>{q.r}</span></figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="faq" className="c-sec c-faq">
        <Reveal><span className="c-kicker">FAQ</span><h2>Good questions</h2></Reveal>
        <div>
          {faqs.map(([q, a], i) => (
            <div key={q} className={`c-qa ${open === i ? 'on' : ''}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>{q}<i>+</i></button>
              <div className="c-ans"><p>{a}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="c-sec c-contact">
        <div>
          <span className="c-kicker">Contact</span>
          <h2>Let's talk about what you're building</h2>
          <p>hello@example.com · +254 700 000 000 · Nairobi (sample details)</p>
        </div>
        {sent ? (
          <div className="c-thanks"><b>Thank you!</b> This is a demo form, so nothing was sent. On a real site, this message goes to the owner's inbox.</div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <label>Name<input required placeholder="Your name" /></label>
            <label>Email<input required type="email" placeholder="you@example.com" /></label>
            <label>What do you need help with?<textarea rows="4" placeholder="A few lines is plenty" /></label>
            <button className="c-btn">Send enquiry</button>
          </form>
        )}
      </section>

      <footer className="c-foot"><span>© Amani Wekesa (sample)</span><span>Built by SpenceTec and Logistics Limited</span></footer>
    </div>
  )
}
