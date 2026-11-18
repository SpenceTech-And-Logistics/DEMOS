// Sample events company. Every name, price and figure is fictional.
export const events = {
  key: 'events', base: '/mpa/events', label: 'Multi-page · events company', name: 'Tukio Events', initials: 'TE', hue: 350,
  vars: { '--x-ink': '#26171a', '--x-main': '#be123c', '--x-deep': '#1f0d13', '--x-accent': '#fbbf24', '--x-bg': '#fffaf6', '--x-tint': '#fde8e1', '--x-head': 'DM Serif Display', '--x-body': 'Figtree' },
  social: [['Instagram', '@tukio.events'], ['Facebook', 'Tukio Events'], ['TikTok', '@tukioevents'], ['YouTube', 'Tukio Events'], ['X', '@tukioevents']],
  nav: [['', 'Home'], ['services', 'Services'], ['portfolio', 'Portfolio'], ['packages', 'Packages'], ['team', 'Team'], ['contact', 'Get a quote']],
  home: {
    kicker: 'Sample events company · Nairobi', lead: 'Moments worth', em: 'gathering for.',
    text: 'Weddings, corporate launches, concerts and private parties, planned from first idea to last guest. Placeholder text for an events company.',
    cta: [['contact', 'Get a quote'], ['portfolio', 'See our events']], float: ['350+ events', 'Planned end to end'],
    stats: [{ n: 350, s: '+', l: 'Events delivered' }, { n: 12, s: '', l: 'Years in business' }, { n: 40, s: 'K', l: 'Guests hosted' }, { n: 98, s: '%', l: 'Clients who rebook' }],
    featKicker: 'What we plan', featTitle: 'Events of every size',
    features: [{ t: 'Weddings', d: 'Venue, décor, catering and the run of the day, handled by one team.', hue: 345 }, { t: 'Corporate', d: 'Product launches, conferences, retreats and award nights.', hue: 215 }, { t: 'Concerts and festivals', d: 'Stages, sound, ticketing and crowd flow for large audiences.', hue: 285 }],
    bandTitle: 'Planning something?', bandText: 'Tell us the date, the guest count and the mood. We reply with a plan and a quote within two working days.', bandTo: 'contact', bandBtn: 'Get a quote',
  },
  pages: {
    services: { kicker: 'Services', title: 'Everything under one roof', intro: 'Choose one service or the full planning package.', blocks: [
      { type: 'cards', items: [
        { t: 'Event planning', d: 'Concept, budget, timeline and supplier management.', tag: 'Full service', hue: 350 },
        { t: 'Décor and styling', d: 'Florals, lighting, draping and table design.', tag: 'Design', hue: 30 },
        { t: 'Catering and bar', d: 'Menus from plated dinners to street-food stations.', tag: 'Food', hue: 20 },
        { t: 'Sound, lighting and stage', d: 'Technical crew, screens and live streaming.', tag: 'Production', hue: 260 },
        { t: 'Entertainment booking', d: 'MCs, DJs, bands and cultural performers.', tag: 'Talent', hue: 300 },
        { t: 'Guest management', d: 'Invitations, RSVPs, ushers and check-in.', tag: 'Guests', hue: 190 },
      ] },
      { type: 'steps', title: 'How we work', items: [{ t: 'Brief', d: 'We listen to the date, budget and vision.' }, { t: 'Plan', d: 'You approve a concept, floor plan and timeline.' }, { t: 'Build', d: 'Our crew sets up and rehearses on site.' }, { t: 'Host', d: 'A coordinator runs the day so you can enjoy it.' }] },
    ] },
    portfolio: { kicker: 'Portfolio', title: 'Recent events', intro: 'Placeholder pictures; real event photos replace them.', blocks: [{ type: 'gallery', items: [
      { t: 'Garden wedding, Karen', hue: 345, wide: true }, { t: 'Product launch', hue: 215 }, { t: 'Music festival', hue: 285 }, { t: 'Gala dinner', hue: 40 }, { t: 'Birthday party', hue: 320 }, { t: 'Team retreat', hue: 150 }, { t: 'Conference', hue: 230 }, { t: 'Beach wedding', hue: 190 },
    ] }] },
    packages: { kicker: 'Packages', title: 'Pick a starting point', intro: 'Sample prices. Every event is quoted to its own needs.', blocks: [
      { type: 'table', head: ['Package', 'Guests', 'Includes', 'From'], rows: [['Intimate', 'Up to 50', 'Coordinator, décor, sound', 'KSh 180,000'], ['Classic', 'Up to 150', 'Planning, décor, catering liaison, MC', 'KSh 450,000'], ['Grand', 'Up to 400', 'Full planning, stage, lighting, entertainment', 'KSh 1,200,000'], ['Corporate day', 'Up to 200', 'Venue, AV, branding, registration desk', 'KSh 600,000']] },
      { type: 'faq', title: 'Questions we hear', items: [{ t: 'How far ahead should we book?', d: 'Three to six months for weddings and large events. Smaller events can be arranged in a few weeks.' }, { t: 'Can you work with our own venue?', d: 'Yes. We plan at your venue or recommend one that fits your guest list.' }, { t: 'Do you travel outside Nairobi?', d: 'Yes, to the coast, the lake region and the Rift Valley. Travel is quoted separately.' }, { t: 'How do payments work?', d: 'A deposit secures the date, with the balance in two instalments before the event.' }] },
    ] },
    team: { kicker: 'Team', title: 'The people behind the day', blocks: [{ type: 'people', items: [{ t: 'Njeri Sample', d: 'Founder and lead planner', hue: 350 }, { t: 'Omar Sample', d: 'Production manager', hue: 215 }, { t: 'Achieng Sample', d: 'Décor director', hue: 40 }, { t: 'Brian Sample', d: 'Client relations', hue: 150 }] }, { type: 'bars', title: 'Where our events happen', items: [['Weddings', 45], ['Corporate', 30], ['Concerts and festivals', 15], ['Private parties', 10]] }] },
    contact: { kicker: 'Get a quote', title: 'Tell us about your event', blocks: [
      { type: 'contact', rows: [['Studio', 'Sample Road, Nairobi'], ['Email', 'hello@example.com'], ['Phone', '+254 700 000 000'], ['Reply time', 'Within two working days']] },
      { type: 'form', button: 'Request a quote', fields: [['Name', 'text', 'Your name'], ['Email', 'email', 'you@example.com'], ['Event type', 'select', ['Wedding', 'Corporate', 'Concert or festival', 'Private party']], ['Event date', 'date', ''], ['Guests', 'text', 'About how many?'], ['Details', 'textarea', 'Venue, mood, budget, anything else']] },
    ] },
  },
}
