import { useRef, useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import DemoBar from '../shared/DemoBar.jsx'
import Icon from './icons.jsx'
import { Btn } from './ui.jsx'
import { Link, NavLink } from './nav.jsx'
import { more, nav, org } from './data.js'
import { useScrollVars } from './useScrollVars.js'
import { About, Contact, Events, Faq, Gallery, GetInvolved, Home, Impact, Programmes, Stories, Story, Team } from './pages.jsx'

function Layout() {
  const [open, setOpen] = useState(false)
  const bar = useRef(null)
  useScrollVars(bar)
  return (
    <>
    <div className="ngo">
      <div className="ngo-progress" ref={bar} aria-hidden="true" />
      <header className="nav solid">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <b className="mark">{org.initials}</b>
          <span><b>{org.name}</b><small>{org.tagline}</small></span>
        </Link>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><b /><b /></button>
        <nav className={open ? 'open' : ''}>
          {nav.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}
        </nav>
      </header>
      <main className="page"><Outlet /></main>
      <footer className="foot">
        <div className="wrap foot-grid">
          <div>
            <div className="foot-brand"><b className="mark">{org.initials}</b><b>{org.name}</b></div>
            <p>{org.tagline} {org.sub}.</p>
          </div>
          <div><h4>Explore</h4>{nav.slice(0, 6).map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}</div>
          <div><h4>More</h4>{more.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}</div>
          <div>
            <h4>Contact</h4>
            <a href={`tel:${org.phone.replace(/\s/g, '')}`}><Icon name="phone" size={16} /> {org.phone}</a>
            <a href={`mailto:${org.email}`}><Icon name="mail" size={16} /> {org.email}</a>
            <span><Icon name="pin" size={16} /> {org.place}</span>
            <div className="foot-cta"><Btn to="/get-involved" light>Join us today</Btn></div>
          </div>
        </div>
        <div className="wrap foot-end"><span>© {org.name} (sample site, fictional organisation)</span><span>Built by SpenceTec and Logistics Limited</span></div>
      </footer>
    </div>
    <DemoBar label="Foundation" />
    </>
  )
}

export default function NgoSite() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="programmes" element={<Programmes />} />
        <Route path="impact" element={<Impact />} />
        <Route path="stories" element={<Stories />} />
        <Route path="stories/*" element={<Story />} />
        <Route path="get-involved" element={<GetInvolved />} />
        <Route path="team" element={<Team />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="events" element={<Events />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
