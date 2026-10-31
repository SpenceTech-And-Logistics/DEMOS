import { Link } from 'react-router-dom'
import Ph from './shared/Ph.jsx'
import { Reveal } from './shared/hooks.jsx'

const demos = [
  { to: '/spa/consultant', kind: 'Single page', name: 'Personal brand', who: 'Amani Wekesa, leadership coach', note: 'Hero, services, work, numbers, testimonials, FAQ, enquiry form.', hue: 18 },
  { to: '/spa/logistics', kind: 'Single page', name: 'Business', who: 'Northway Freight, logistics company', note: 'Shipment tracker, coverage route, services, quote form.', hue: 200 },
  { to: '/mpa/mp', kind: 'Multi-page', name: 'Member of Parliament', who: 'Hon. Grace Wanjiru Sample', note: '7 pages: About, Parliament, Projects, News, Gallery, Contact.', hue: 40 },
  { to: '/mpa/ps', kind: 'Multi-page', name: 'Principal Secretary', who: 'PS Daniel Kiprop Sample', note: '8 pages: Mandate, Projects, Awards, News and events, Gallery.', hue: 172 },
  { to: '/mpa/ngo', kind: 'Multi-page', name: 'Foundation or NGO', who: 'Hope Bridge Foundation (sample)', note: '12 pages: About, Programmes, Impact, Stories, Team, Gallery, Events, FAQ, Get involved.', hue: 190 },
]

export default function Hub() {
  return (
    <div className="hub">
      <header className="hub-head">
        <span className="hub-badge">Demo sites</span>
        <h1>
          Five sample websites, <em>ready to present</em>
        </h1>
        <p>
          Two single-page sites and three multi-page sites. Names, numbers and pictures are placeholders, so they can be shown to any client. Open one, click around, then use the “All demos” button to come back.
        </p>
      </header>
      <div className="hub-grid">
        {demos.map((d, i) => (
          <Reveal key={d.to} delay={i * 80}>
            <Link to={d.to} className="hub-card">
              <Ph seed={i + 3} hue={d.hue} ratio="16 / 9" showLabel={false} />
              <div className="hub-body">
                <span className={`hub-kind ${d.kind === 'Single page' ? 'k-spa' : 'k-mpa'}`}>{d.kind}</span>
                <h2>{d.name}</h2>
                <p className="hub-who">{d.who}</p>
                <p>{d.note}</p>
                <span className="hub-open">Open demo →</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <footer className="hub-foot">Built by SpenceTec and Logistics Limited · All names and figures are fictional</footer>
    </div>
  )
}
