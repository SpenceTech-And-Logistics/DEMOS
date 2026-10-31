// Sample portfolio data. Every name, handle and figure is fictional.
const contactBlocks = (rows) => [
  { type: 'contact', rows },
  { type: 'form', button: 'Send message', fields: [['Name', 'text', 'Your name'], ['Email', 'email', 'you@example.com'], ['Message', 'textarea', 'Tell me about your project']] },
]

export const photographer = {
  key: 'photo', base: '/mpa/photographer', label: 'Multi-page · photographer portfolio', name: 'Zawadi Studio', initials: 'ZS', hue: 25,
  vars: { '--x-ink': '#1c1917', '--x-main': '#b4532a', '--x-deep': '#161210', '--x-accent': '#f2c14e', '--x-bg': '#faf6f0', '--x-tint': '#f0e4d3', '--x-head': 'DM Serif Display', '--x-body': 'Inter' },
  social: [['Instagram', '@zawadi.studio'], ['Facebook', 'Zawadi Studio'], ['TikTok', '@zawadishoots'], ['YouTube', 'Zawadi Studio'], ['X', '@zawadistudio']],
  nav: [['', 'Home'], ['work', 'Portfolio'], ['services', 'Services'], ['about', 'About'], ['contact', 'Contact']],
  home: {
    kicker: 'Sample photographer · Nairobi', lead: 'Stories told in', em: 'light and colour.',
    text: 'Weddings, portraits and brand photography. Placeholder text for a photographer portfolio.',
    cta: [['work', 'View portfolio'], ['contact', 'Book a shoot']], float: ['120+ weddings', 'Based in Nairobi'],
    stats: [{ n: 120, s: '+', l: 'Weddings shot' }, { n: 9, s: '', l: 'Years behind the lens' }, { n: 48, s: 'K', l: 'Instagram followers' }, { n: 14, s: '', l: 'Magazine features' }],
    featKicker: 'Specialities', featTitle: 'What I shoot',
    features: [{ t: 'Weddings', d: 'Honest, joyful coverage from the first look to the last dance.', hue: 345 }, { t: 'Portraits', d: 'Studio and outdoor sessions that feel like you.', hue: 25 }, { t: 'Brands', d: 'Product and campaign photography for growing businesses.', hue: 200 }],
    bandTitle: 'Follow the latest shoots', bandText: 'New work every week on Instagram and TikTok. Links are at the bottom of the page.', bandTo: 'work', bandBtn: 'See the portfolio',
  },
  pages: {
    work: { kicker: 'Portfolio', title: 'Selected work', intro: 'Placeholder pictures; real photographs replace them.', blocks: [{ type: 'gallery', items: [
      { t: 'Coastal wedding', hue: 190, wide: true }, { t: 'Studio portrait', hue: 25 }, { t: 'Market morning', hue: 40 }, { t: 'Brand campaign', hue: 280 }, { t: 'Family session', hue: 120 }, { t: 'Rooftop engagement', hue: 330 }, { t: 'Product flat lay', hue: 60 }, { t: 'Festival nights', hue: 250 },
    ] }] },
    services: { kicker: 'Services', title: 'Packages', blocks: [
      { type: 'cards', items: [{ t: 'Wedding day', d: 'Full-day coverage, two photographers, online gallery.', tag: 'From KSh 150,000', hue: 345 }, { t: 'Portrait session', d: 'One-hour shoot, 20 edited images.', tag: 'From KSh 15,000', hue: 25 }, { t: 'Brand shoot', d: 'Half-day product and team photography.', tag: 'From KSh 60,000', hue: 200 }] },
      { type: 'steps', title: 'How it works', items: [{ t: 'Say hello', d: 'Tell me the date, place and style you have in mind.' }, { t: 'Plan together', d: 'We agree a shot list and timing.' }, { t: 'Shoot', d: 'Relax. I handle the rest.' }, { t: 'Receive', d: 'Edited gallery in two weeks.' }] },
    ] },
    about: { kicker: 'About', title: 'Hello, I am Zawadi', blocks: [{ type: 'text', paras: ['Placeholder biography. Zawadi Sample started photographing friends’ weddings with a borrowed camera and has not stopped since.', 'Her work has appeared in sample magazines and on sample billboards. Replace this text with the photographer’s own story.'] }, { type: 'bars', title: 'Skills', items: [['Wedding storytelling', 95], ['Portrait lighting', 90], ['Photo editing', 88], ['Video highlights', 70]] }] },
    contact: { kicker: 'Contact', title: 'Book a shoot', blocks: contactBlocks([['Studio', 'Sample Street, Nairobi'], ['Email', 'hello@example.com'], ['Phone', '+254 700 000 000'], ['Response', 'Within one working day']]) },
  },
}

export const developer = {
  key: 'dev', base: '/mpa/developer', label: 'Multi-page · developer portfolio', name: 'Kevin Sample', initials: 'KS', hue: 215,
  vars: { '--x-ink': '#0e1b2e', '--x-main': '#2563eb', '--x-deep': '#0b1426', '--x-accent': '#34d399', '--x-bg': '#f3f6fb', '--x-tint': '#dde7f7', '--x-head': 'Space Grotesk', '--x-body': 'Inter' },
  social: [['GitHub', 'kevin-sample'], ['LinkedIn', 'Kevin Sample'], ['X', '@kevinbuilds'], ['YouTube', 'Kevin Builds'], ['Dev.to', 'kevinsample']],
  nav: [['', 'Home'], ['projects', 'Projects'], ['skills', 'Skills'], ['experience', 'Experience'], ['contact', 'Contact']],
  home: {
    kicker: 'Sample software developer', lead: 'I build fast,', em: 'friendly software.',
    text: 'Web and mobile apps for startups and NGOs. Placeholder text for a developer portfolio.',
    cta: [['projects', 'See my projects'], ['contact', 'Hire me']], float: ['React · Node', 'Open to work'],
    stats: [{ n: 40, s: '+', l: 'Projects shipped' }, { n: 7, s: '', l: 'Years coding' }, { n: 2, s: 'K', l: 'GitHub stars' }, { n: 15, s: '', l: 'Happy clients' }],
    featKicker: 'Focus', featTitle: 'What I do best',
    features: [{ t: 'Web apps', d: 'Dashboards, portals and online shops that load quickly.', hue: 215 }, { t: 'Mobile apps', d: 'Cross-platform apps with offline support.', hue: 160 }, { t: 'Automation', d: 'Scripts and integrations that save hours every week.', hue: 280 }],
    bandTitle: 'Code, talks and tutorials', bandText: 'Find me on GitHub, LinkedIn and YouTube. Links are at the bottom of the page.', bandTo: 'projects', bandBtn: 'Browse projects',
  },
  pages: {
    projects: { kicker: 'Projects', title: 'Things I have built', blocks: [{ type: 'cards', items: [
      { t: 'ShambaPay', d: 'Mobile payments for farmer cooperatives.', tag: 'React Native', hue: 150 }, { t: 'ClinicQueue', d: 'Appointment and queue system for clinics.', tag: 'React · Node', hue: 195 }, { t: 'SchoolHub', d: 'Results and fees portal for schools.', tag: 'Next.js', hue: 260 }, { t: 'RouteWise', d: 'Delivery route planner with live map.', tag: 'TypeScript', hue: 30 }, { t: 'DukaStock', d: 'Inventory tracking for small shops.', tag: 'PWA', hue: 340 }, { t: 'OpenBudget', d: 'Public budget explorer with charts.', tag: 'Data viz', hue: 215 },
    ] }] },
    skills: { kicker: 'Skills', title: 'Tools I use', blocks: [{ type: 'bars', items: [['JavaScript and React', 95], ['Node and APIs', 88], ['Databases', 82], ['Cloud and deployment', 78], ['UI design', 70]] }] },
    experience: { kicker: 'Experience', title: 'Where I have worked', blocks: [{ type: 'news', items: [
      { date: '2024 to now', t: 'Senior developer, Sample Labs', d: 'Lead a team of four building fintech tools.' }, { date: '2021 to 2024', t: 'Full-stack developer, Sample Studio', d: 'Shipped web apps for 12 clients.' }, { date: '2019 to 2021', t: 'Junior developer, Sample Agency', d: 'Built websites and learned the craft.' },
    ] }] },
    contact: { kicker: 'Contact', title: 'Let us work together', blocks: contactBlocks([['Email', 'kevin@example.com'], ['Location', 'Nairobi, remote friendly'], ['Availability', 'From next month'], ['Rate', 'On request']]) },
  },
}
