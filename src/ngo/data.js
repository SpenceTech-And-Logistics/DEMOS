// Sample foundation (fictional). Every name, number and story is a placeholder for presentations.

export const org = {
  name: 'Hope Bridge Foundation',
  initials: 'HB',
  tagline: 'Building bridges to brighter futures.',
  line1: 'Building bridges.',
  line2: 'Brighter futures.',
  sub: 'A sample community foundation working on health, learning and livelihoods',
  place: 'Kenya',
  phone: '+254 700 000 000',
  email: 'hello@hopebridge.example',
  ring: 'HEALTH ✦ LEARNING ✦ LIVELIHOODS ✦ HEALTH ✦ LEARNING ✦ LIVELIHOODS ✦',
}

export const nav = [
  ['/', 'Home'], ['/about', 'About'], ['/programmes', 'Programmes'], ['/impact', 'Impact'],
  ['/stories', 'Stories'], ['/get-involved', 'Get involved'], ['/contact', 'Contact'],
]
export const more = [['/team', 'Our team'], ['/gallery', 'Gallery'], ['/events', 'Events'], ['/faq', 'FAQ']]
export const ticker = ['Community health', 'Keeping girls in school', 'Small business grants', 'Clean water', 'Volunteers', 'Partnerships']

export const context = [
  { n: 12400, s: '', label: 'people reached each year' },
  { n: 38, s: '', label: 'partner schools and clinics' },
  { n: 3, s: '', label: 'counties served' },
  { n: 150, s: '+', label: 'trained volunteers' },
]

export const vision = {
  title: 'A community that', em: 'lifts itself',
  text: 'We picture communities where every child can learn, every family can reach a clinic, and every small business can grow. We work alongside residents, schools and county teams so that progress stays long after a project ends.',
}

export const challenge = [
  { tag: 'Access', text: 'Many families live far from clinics and good schools, and the cost of travel keeps them from care and classrooms.' },
  { tag: 'Opportunity', text: 'Young people and women entrepreneurs often lack start-up capital and training to turn skills into steady income.' },
  { tag: 'Coordination', text: 'Good projects run in isolation. Without shared plans, effort is duplicated and gaps remain.' },
]
export const gap = [
  { icon: 'heart', tag: 'Short-term aid', text: 'One-off donations meet urgent needs but rarely change what happens next year. Families need steady support they can plan around.' },
  { icon: 'puzzle', tag: 'Disconnected services', text: 'Health, schooling and income support are usually offered separately, even though a family faces all three at once.' },
]
export const solution = [
  { icon: 'leaf', tag: 'Programmes that fit together', text: 'Our health, learning and livelihoods programmes share one team on the ground, so a family can be helped on several fronts at once.' },
  { icon: 'users', tag: 'Led with the community', text: 'Village committees help choose priorities, track results and care for what we build, so projects belong to the people who use them.' },
]
export const how = [
  { icon: 'users', tag: 'Listen', text: 'We start with community meetings and a simple household survey to learn what matters most.' },
  { icon: 'hands', tag: 'Partner', text: 'We agree plans with schools, clinics and county offices, and split the work so nothing is duplicated.' },
  { icon: 'chart', tag: 'Deliver and learn', text: 'Volunteers and staff deliver the programme, and we publish simple results every quarter.' },
]
export const deliver = [
  { icon: 'pulse', tag: 'Community health', text: 'Mobile clinics, health education and referrals that bring check-ups closer to home.' },
  { icon: 'leaf', tag: 'Learning', text: 'Bursaries, school supplies and mentoring that help children stay in school.' },
  { icon: 'chart', tag: 'Livelihoods', text: 'Training and small grants that help women and youth start or grow a business.' },
]
export const milestones = [
  { tag: 'Health', text: 'Mobile clinics visit remote villages every month, with check-ups, vaccinations and health talks.', figure: { n: 8200, s: '+', label: 'check-ups completed (sample)' } },
  { tag: 'Learning', text: 'Bursaries and mentoring help children and teenagers stay in school and finish the year.', figure: { n: 640, s: '', label: 'learners supported (sample)' } },
]
export const results = [
  { tag: 'Healthier families', big: 30, s: '%', unit: 'more check-ups', text: 'Target for households reached by mobile clinics within two years.' },
  { tag: 'Learners in school', big: 85, s: '%', unit: 'completion', text: 'Target share of supported learners finishing the school year.' },
  { tag: 'New income', big: 120, s: '+', unit: 'small businesses', text: 'Target number of women and youth businesses started or grown.' },
]
export const why = [
  { icon: 'users', tag: 'Local roots', text: 'Our staff and volunteers live in the communities we serve, so we understand the real needs.' },
  { icon: 'chart', tag: 'Open results', text: 'We share what is working and what is not, in plain language, so partners can see their impact.' },
]
export const funding = {
  ask: '$250K', label: 'annual programme budget (sample)',
  uses: ['Mobile clinics and health education', 'Bursaries and school supplies', 'Small business training and grants'],
  text: 'Gifts of any size help. Larger partners can fund a whole programme, a county, or a single clinic day.',
}
export const ways = [
  { icon: 'hands', tag: 'Partner', text: 'Work with us as a school, clinic, company or county office.' },
  { icon: 'heart', tag: 'Donate', text: 'Fund a clinic day, a bursary or a start-up grant.' },
  { icon: 'users', tag: 'Volunteer', text: 'Give your time and skills to a programme near you.' },
]

export const stories = [
  { slug: 'a-clinic-day-in-the-village', tag: 'Health', hue: 170, title: 'A clinic day in the village', date: 'Sample date', read: '3 min read',
    excerpt: 'What happens when a mobile clinic arrives for the first time.',
    body: ['The truck arrives at eight. By nine, a queue has formed under the tree outside the village school.', 'Nurses check blood pressure, weigh children and answer questions. Volunteers keep a list of people who need a follow-up visit.', 'This is a sample story. Replace it with a real account, a photo and a quote from a resident.'] },
  { slug: 'back-to-school-with-a-bursary', tag: 'Learning', hue: 40, title: 'Back to school with a bursary', date: 'Sample date', read: '3 min read',
    excerpt: 'How a small bursary and a mentor kept one learner in class.',
    body: ['A bursary covers fees, a uniform and exercise books. A mentor checks in each month.', 'The aim is simple: no child should leave school because of a missing fee.', 'This is a sample story for presentation purposes.'] },
  { slug: 'from-a-stall-to-a-shop', tag: 'Livelihoods', hue: 18, title: 'From a market stall to a shop', date: 'Sample date', read: '4 min read',
    excerpt: 'A small grant, a short course and a growing business.',
    body: ['After a four-week course on pricing and bookkeeping, a market trader received a small grant to buy stock.', 'Six months later she rented a shop and hired her first assistant.', 'This is a sample story. Use a real participant, with permission.'] },
  { slug: 'how-we-measure-results', tag: 'Results', hue: 200, title: 'How we measure results', date: 'Sample date', read: '2 min read',
    excerpt: 'Simple numbers, shared every quarter.',
    body: ['Each programme tracks a few numbers: people reached, learners in school and businesses started.', 'We publish them every quarter so supporters can see progress.', 'This is a sample article.'] },
]
export const team = [
  { name: 'Name Surname', role: 'Founder and Chair' }, { name: 'Name Surname', role: 'Executive Director' },
  { name: 'Name Surname', role: 'Head of Health' }, { name: 'Name Surname', role: 'Head of Learning' },
  { name: 'Name Surname', role: 'Head of Livelihoods' }, { name: 'Name Surname', role: 'Finance and Operations' },
]
export const gallery = [
  { hue: 170, cap: 'Mobile clinic day' }, { hue: 40, cap: 'Bursary handover' }, { hue: 18, cap: 'Small business training' },
  { hue: 200, cap: 'Volunteers at work' }, { hue: 95, cap: 'Community meeting' }, { hue: 330, cap: 'Mentoring session' },
  { hue: 140, cap: 'Tree planting day' }, { hue: 260, cap: 'School visit' }, { hue: 8, cap: 'Partners roundtable' },
]
export const events = [
  { day: '12', mon: 'Mar', title: 'Community clinic day', place: 'Sample village, Kenya', text: 'Free check-ups, vaccinations and health talks for the whole family.' },
  { day: '28', mon: 'Mar', title: 'Volunteer training', place: 'Sample town hall', text: 'A one-day workshop for new volunteers.' },
  { day: '09', mon: 'Apr', title: 'Small business fair', place: 'Sample market ground', text: 'Grant recipients showcase and sell their products.' },
  { day: '24', mon: 'Apr', title: 'Annual results briefing', place: 'Online', text: 'A public update on what we achieved this year.' },
]
export const faq = [
  { q: 'Who do you work with?', a: 'We work with villages, schools, clinics and county offices in three counties.' },
  { q: 'How are projects chosen?', a: 'Community committees help set priorities after meetings and a household survey.' },
  { q: 'How do you report results?', a: 'We publish simple numbers each quarter, with stories and photos.' },
  { q: 'Can I volunteer?', a: 'Yes. Short and long placements are available. Use the contact page to apply.' },
  { q: 'How much of my gift reaches programmes?', a: 'This sample answer would state the real share, for example 85% to programmes.' },
  { q: 'How do I give?', a: 'This is a sample site. A real foundation would list its payment options here.' },
]
