import { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Ph from '../shared/Ph.jsx'
import Icon from './icons.jsx'
import { Bar, CountUp, Reveal, Split, Tilt } from './motion.jsx'
import { Link } from './nav.jsx'
import { Btn, Cards, Frame, Head } from './ui.jsx'
import { useScrollVars } from './useScrollVars.js'
import { challenge, context, deliver, events, faq, funding, gallery, gap, how, milestones, org, results, solution, stories, team, ticker, vision, ways, why } from './data.js'

function PageHero({ kicker, title, em, text }) {
  return (
    <section className="phero">
      <i className="orb o1" aria-hidden="true" /><i className="orb o2" aria-hidden="true" />
      <div className="wrap">
        <span className="pill gold rise">{kicker}</span>
        <h1 className="rise" style={{ '--d': '120ms' }}>{title} {em && <em>{em}</em>}</h1>
        {text && <p className="rise" style={{ '--d': '260ms' }}>{text}</p>}
      </div>
    </section>
  )
}

function Hero() {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    e.currentTarget.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }
  return (
    <section className="hero" onPointerMove={move}>
      <i className="shape s1" aria-hidden="true" /><i className="shape s2" aria-hidden="true" /><i className="shape s3" aria-hidden="true" />
      <i className="dots d1" aria-hidden="true" />
      <div className="wrap hero-in">
        <div className="hero-text">
          <span className="pill gold rise">{org.name} · {org.place}</span>
          <h1>
            <span className="line"><Split text={org.line1} delay={200} /></span>
            <span className="line em"><Split text={org.line2} delay={650} /></span>
          </h1>
          <p className="lead rise" style={{ '--d': '1300ms' }}>{org.sub}. Sample content for presentations.</p>
          <div className="row rise" style={{ '--d': '1450ms' }}>
            <Btn to="/get-involved">Partner with us</Btn>
            <Btn to="/programmes" ghost light>See our work</Btn>
          </div>
        </div>
        <div className="hero-pic rise" style={{ '--d': '500ms' }}>
          <Frame hue={190} seed={5} portrait label="Hero photo placeholder" className="big" />
          <svg className="spin-text" viewBox="0 0 300 300" aria-hidden="true">
            <defs><path id="ngo-circ" d="M150,150 m-128,0 a128,128 0 1,1 256,0 a128,128 0 1,1 -256,0" /></defs>
            <text><textPath href="#ngo-circ">{org.ring}</textPath></text>
          </svg>
          <span className="chip c1">Health, learning and livelihoods</span>
          <span className="chip c2">Led with the community</span>
        </div>
      </div>
      <a href="#ticker" className="cue" aria-label="Scroll down" onClick={(e) => { e.preventDefault(); document.getElementById('ngo-ticker')?.scrollIntoView({ behavior: 'smooth' }) }}><span /></a>
    </section>
  )
}

function Ticker() {
  return (
    <div id="ngo-ticker" className="ticker" aria-hidden="true">
      <div>{[0, 1].map((k) => <span key={k}>{ticker.join('  ✦  ')}  ✦  </span>)}</div>
    </div>
  )
}

function Numbers() {
  return (
    <div className="numbers">
      {context.map((c, i) => (
        <Reveal key={c.label} delay={i * 100} className="num">
          <b><CountUp to={c.n} suffix={c.s} /></b>
          <span>{c.label}</span>
        </Reveal>
      ))}
    </div>
  )
}

function Challenge() {
  return (
    <section className="sec">
      <div className="wrap cols">
        <div>
          <Head kicker="The challenge" title="Needs are close to home," em="and so is the answer" />
          <div className="pills">
            {challenge.map((c, i) => (
              <Reveal key={c.tag} delay={i * 100} className="pill-row"><span className="pill solid">{c.tag}</span><p>{c.text}</p></Reveal>
            ))}
          </div>
        </div>
        <Reveal from="right" className="pic-col"><Frame hue={30} seed={8} label="Photo placeholder" /></Reveal>
      </div>
    </section>
  )
}

function Gap() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <Head center kicker="The gap" title="Help works best" em="when it joins up" />
        <div className="two">
          {gap.map((g, i) => (
            <Reveal key={g.tag} delay={i * 120}>
              <Tilt className="panel"><span className="ico big"><Icon name={g.icon} size={34} /></span><h3>{g.tag}</h3><p>{g.text}</p></Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Vision() {
  return (
    <section className="sec">
      <div className="wrap cols rev">
        <Reveal from="left" className="pic-col"><Frame hue={150} seed={12} label="Photo placeholder" /></Reveal>
        <div>
          <Head kicker="Our vision" title={vision.title} em={vision.em} />
          <Reveal delay={120}><p className="body">{vision.text}</p></Reveal>
          <Reveal delay={220}><Numbers /></Reveal>
        </div>
      </div>
    </section>
  )
}

function Solution() {
  return (
    <section className="sec dark">
      <div className="wrap">
        <Head center light kicker="Our approach" title="Programmes that fit together," em="led with the community" />
        <div className="two">
          {solution.map((g, i) => (
            <Reveal key={g.tag} delay={i * 120}>
              <Tilt className="panel glass"><span className="ico big"><Icon name={g.icon} size={34} /></span><h3>{g.tag}</h3><p>{g.text}</p></Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Steps() {
  const track = useRef(null)
  const bar = useRef(null)
  useScrollVars(bar, track)
  return (
    <section className="sec how">
      <div className="wrap">
        <Head center kicker="How it works" title="From a conversation" em="to lasting change" />
        <ol className="track" ref={track}>
          <span className="line" aria-hidden="true"><i /></span>
          {how.map((h, i) => (
            <Reveal as="li" key={h.tag} from={i % 2 ? 'left' : 'right'} className="step">
              <span className="dot" aria-hidden="true">{i + 1}</span>
              <div className="step-body"><span className="ico"><Icon name={h.icon} /></span><h3>{h.tag}</h3><p>{h.text}</p></div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Deliver() {
  return (
    <section className="sec leaves">
      <div className="wrap">
        <Head kicker="What we do" title="Three programmes," em="one team" />
        <Cards items={deliver} />
      </div>
    </section>
  )
}

function Milestones() {
  return (
    <section className="sec">
      <div className="wrap cols">
        <div>
          <Head kicker="Impact and milestones" title="Progress you" em="can count" />
          <div className="mile">
            {milestones.map((m, i) => (
              <Reveal key={m.tag} delay={i * 120} className="m">
                <span className="pill solid">{m.tag}</span>
                <p>{m.text}</p>
                <div className="m-fig"><b><CountUp to={m.figure.n} suffix={m.figure.s} /></b><span>{m.figure.label}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal from="right" className="pic-col"><Frame hue={95} seed={15} label="Photo placeholder" /></Reveal>
      </div>
    </section>
  )
}

function Results() {
  return (
    <section className="sec plum">
      <div className="wrap">
        <Head center light kicker="Our targets" title="What success" em="looks like" />
        <div className="cards c3">
          {results.map((r, i) => (
            <Reveal key={r.tag} delay={i * 110} className="card-wrap">
              <article className="card res">
                <h3>{r.tag}</h3>
                <div className="big"><CountUp to={r.big} suffix={r.s} /> <small>{r.unit}</small></div>
                <Bar value={r.big > 100 ? 100 : r.big} />
                <p>{r.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="sec">
      <div className="wrap cols rev">
        <Reveal from="left" className="pic-col"><Frame hue={260} seed={20} label="Photo placeholder" /></Reveal>
        <div>
          <Head kicker="Why us" title="Rooted here," em="open about results" />
          <div className="pills">
            {why.map((c, i) => (
              <Reveal key={c.tag} delay={i * 100} className="pill-row"><span className="pill solid">{c.tag}</span><p>{c.text}</p></Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="cta">
      <i className="orb o1" aria-hidden="true" /><i className="orb o2" aria-hidden="true" />
      <div className="wrap">
        <Reveal>
          <h2>Together for stronger communities</h2>
          <p>Partner, give or volunteer. Every contribution is matched with local knowledge and followed by simple, open reporting.</p>
          <div className="row center"><Btn to="/get-involved">Join us today</Btn><Btn to="/contact" ghost light>Contact us</Btn></div>
        </Reveal>
      </div>
    </section>
  )
}

function Explore() {
  const info = { '/team': ['users', 'Meet the people behind the work'], '/gallery': ['leaf', 'Pictures from our programmes'], '/events': ['pin', 'Clinic days, fairs and briefings'], '/faq': ['chart', 'Short answers to common questions'] }
  return (
    <section className="sec tint">
      <div className="wrap">
        <Head center kicker="Explore more" title="More ways to" em="get to know us" />
        <div className="explore">
          {Object.entries(info).map(([to, [icon, text]], i) => (
            <Reveal key={to} delay={i * 80}>
              <Link to={to} className="ex"><span className="ico big"><Icon name={icon} size={30} /></span><b>{{ '/team': 'Our team', '/gallery': 'Gallery', '/events': 'Events', '/faq': 'FAQ' }[to]}</b><span>{text}</span></Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <section className="sec tight"><div className="wrap"><Head center kicker="At a glance" title="Our reach," em="in numbers" /><Numbers /></div></section>
      <Challenge />
      <Vision />
      <Solution />
      <Deliver />
      <Milestones />
      <Explore />
      <Cta />
    </>
  )
}

export function About() {
  return (<><PageHero kicker="About us" title="Who we are" em="and why we work" text="A sample foundation, showing how an about page can combine vision, challenge and approach." /><Vision /><Challenge /><Gap /><Why /><Cta /></>)
}
export function Programmes() {
  return (<><PageHero kicker="Programmes" title="Health, learning" em="and livelihoods" text="Three programmes delivered by one local team." /><Solution /><Steps /><Deliver /><Cta /></>)
}
export function Impact() {
  return (<><PageHero kicker="Impact" title="Results we" em="can show" text="Simple numbers, published every quarter." /><Milestones /><Results /><section className="sec tight"><div className="wrap"><Head center kicker="Reach" title="The numbers behind" em="our work" /><Numbers /></div></section><Cta /></>)
}

export function GetInvolved() {
  return (
    <>
      <PageHero kicker="Get involved" title="Give, partner" em="or volunteer" text="Every sample section here can be swapped for real giving options." />
      <section className="sec">
        <div className="wrap cols">
          <div>
            <Head kicker="Funding" title="Our annual" em="programme budget" />
            <Reveal delay={120}>
              <ul className="uses">{funding.uses.map((u, i) => <li key={u}><span>{String(i + 1).padStart(2, '0')}</span>{u}</li>)}</ul>
              <p className="body">{funding.text}</p>
            </Reveal>
          </div>
          <Reveal from="right" className="ask">
            <Tilt className="ask-card"><small>Sample goal</small><b>{funding.ask}</b><span>{funding.label}</span><Btn to="/contact" light>Talk to us</Btn></Tilt>
          </Reveal>
        </div>
      </section>
      <section className="sec tint"><div className="wrap"><Head center kicker="Ways to help" title="Partner, donate" em="or volunteer" /><Cards items={ways} /></div></section>
      <Why />
      <Cta />
    </>
  )
}

export function Stories() {
  const [first, ...rest] = stories
  return (
    <>
      <PageHero kicker="Stories" title="Ideas and updates" em="from the field" text="Sample articles. Replace with real stories and photos." />
      <section className="sec tight">
        <div className="wrap">
          <Reveal>
            <Link to={`/stories/${first.slug}`} className="feature">
              <Ph hue={first.hue} seed={31} ratio="4 / 3" label="Story photo" style={{ aspectRatio: 'auto' }} className="feature-img" />
              <div><span className="pill">{first.tag}</span><h2>{first.title}</h2><p>{first.excerpt}</p><small>{first.date} · {first.read}</small><span className="more">Read story <Icon name="arrow" size={18} /></span></div>
            </Link>
          </Reveal>
          <div className="news">
            {rest.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <Link to={`/stories/${s.slug}`} className="news-card">
                  <Ph hue={s.hue} seed={i + 33} ratio="16 / 10" label="Story photo" showLabel={false} />
                  <div><span className="pill">{s.tag}</span><h3>{s.title}</h3><p>{s.excerpt}</p><small>{s.date} · {s.read}</small></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function Story() {
  const { '*': rest } = useParams()
  const slug = rest.split('/').pop()
  const s = stories.find((x) => x.slug === slug) || stories[0]
  return (
    <>
      <PageHero kicker={s.tag} title={s.title} text={`${s.date} · ${s.read}`} />
      <section className="sec tight">
        <article className="wrap article">
          <Reveal><Ph hue={s.hue} seed={41} ratio="16 / 9" label="Story photo" showLabel={false} /></Reveal>
          {s.body.map((p, i) => <Reveal key={i} delay={i * 80}><p>{p}</p></Reveal>)}
          <Reveal className="row"><Btn to="/stories" ghost>All stories</Btn><Btn to="/get-involved">Partner with us</Btn></Reveal>
        </article>
      </section>
    </>
  )
}

export function Team() {
  return (
    <>
      <PageHero kicker="Our team" title="The people behind" em="the work" text="Sample names and roles." />
      <section className="sec tight">
        <div className="wrap team">
          {team.map((m, i) => (
            <Reveal key={m.role} delay={i * 80}>
              <Tilt className="member"><span className="avatar" aria-hidden="true">{m.role.split(' ').map((w) => w[0]).slice(0, 2).join('')}</span><h3>{m.name}</h3><b>{m.role}</b></Tilt>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

export function Gallery() {
  const [open, setOpen] = useState(null)
  return (
    <>
      <PageHero kicker="Gallery" title="Our work," em="in pictures" text="Placeholder pictures. Click one to enlarge." />
      <section className="sec tight">
        <div className="wrap gal">
          {gallery.map((g, i) => (
            <Reveal key={g.cap} delay={(i % 3) * 90} className={i === 0 || i === 5 ? 'tall' : ''}>
              <button className="gal-i" onClick={() => setOpen(i)} aria-label={`Open: ${g.cap}`}>
                <Ph hue={g.hue} seed={i + 50} ratio={i === 0 || i === 5 ? '4 / 5' : '1 / 1'} label={g.cap} showLabel={false} />
                <span>{g.cap}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>
      {open !== null && (
        <div className="lb" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <button className="lb-x" aria-label="Close" onClick={() => setOpen(null)}>×</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <Ph hue={gallery[open].hue} seed={open + 50} ratio="4 / 3" label={gallery[open].cap} showLabel={false} />
            <figcaption>{gallery[open].cap}</figcaption>
          </figure>
        </div>
      )}
    </>
  )
}

export function Events() {
  return (
    <>
      <PageHero kicker="Events" title="Join us" em="on the ground" text="Sample events." />
      <section className="sec tight">
        <div className="wrap events">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 90}>
              <div className="event">
                <div className="date"><b>{e.day}</b><span>{e.mon}</span></div>
                <div><h3>{e.title}</h3><small><Icon name="pin" size={15} /> {e.place}</small><p>{e.text}</p></div>
                <Btn to="/contact" ghost>Ask to join</Btn>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

export function Faq() {
  return (
    <>
      <PageHero kicker="FAQ" title="Questions," em="answered" text="Sample questions and answers." />
      <section className="sec tight">
        <div className="wrap faq">
          {faq.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="qa"><summary>{f.q}<i aria-hidden="true" /></summary><p>{f.a}</p></details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

export function Contact() {
  const rows = [
    { icon: 'phone', k: 'Phone', v: org.phone, href: `tel:${org.phone.replace(/\s/g, '')}` },
    { icon: 'mail', k: 'Email', v: org.email, href: `mailto:${org.email}` },
    { icon: 'pin', k: 'Where we work', v: `Three counties in ${org.place}` },
  ]
  return (
    <>
      <PageHero kicker="Contact" title="Let’s talk" em="about your idea" text="Sample contact details." />
      <section className="sec">
        <div className="wrap cols">
          <div className="contact-list">
            {rows.map((r, i) => (
              <Reveal key={r.k} delay={i * 100}>
                {r.href
                  ? <a className="ngo-row" href={r.href}><span className="ico big"><Icon name={r.icon} size={30} /></span><span><small>{r.k}</small><b>{r.v}</b></span></a>
                  : <div className="ngo-row"><span className="ico big"><Icon name={r.icon} size={30} /></span><span><small>{r.k}</small><b>{r.v}</b></span></div>}
              </Reveal>
            ))}
          </div>
          <Reveal from="right" className="pic-col"><Frame hue={190} seed={60} label="Photo placeholder" /></Reveal>
        </div>
      </section>
    </>
  )
}
