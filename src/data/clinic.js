// Sample data for the clinic demo. Every name and figure is fictional.
export const clinic = {
  key: 'clinic', base: '/mpa/clinic', label: 'Multi-page · clinic', name: 'Afya Bora Clinic', initials: 'AB', hue: 175,
  vars: { '--x-ink': '#10302f', '--x-main': '#0f8f86', '--x-deep': '#0a4f55', '--x-accent': '#ff8a5b', '--x-bg': '#f4fbfa', '--x-tint': '#dff3f0', '--x-head': 'Fraunces', '--x-body': 'Figtree' },
  nav: [['', 'Home'], ['services', 'Services'], ['doctors', 'Doctors'], ['appointments', 'Appointments'], ['tips', 'Health tips'], ['faq', 'FAQ'], ['contact', 'Contact']],
  home: {
    kicker: 'Sample family clinic · Nairobi', lead: 'Care that feels', em: 'like family.',
    text: 'Friendly doctors, short waiting times and clear prices. Placeholder text for a neighbourhood clinic website.',
    cta: [['appointments', 'Book an appointment'], ['services', 'Our services']], float: ['Open 7 days', 'Walk-ins welcome'],
    stats: [{ n: 15, s: '', l: 'Doctors and nurses' }, { n: 25000, s: '+', l: 'Patients cared for' }, { n: 12, s: '', l: 'Years open' }, { n: 24, s: '/7', l: 'Emergency line' }],
    featKicker: 'What we do', featTitle: 'Care for the whole family',
    features: [
      { t: 'Family medicine', d: 'Check-ups, chronic care and referrals under one roof.', hue: 175 },
      { t: 'Mother and child', d: 'Antenatal visits, immunisation and growth checks.', hue: 330 },
      { t: 'Laboratory', d: 'Same-day results for common tests.', hue: 210 },
    ],
    bandTitle: 'Feeling unwell today?', bandText: 'Walk in, or book a time that suits you. Our team will see you quickly.', bandTo: 'appointments', bandBtn: 'Book now',
  },
  pages: {
    services: { kicker: 'Services', title: 'What we offer', intro: 'Sample list of clinic services with placeholder descriptions.', blocks: [
      { type: 'cards', items: [
        { t: 'General consultation', d: 'See a doctor for everyday illness and advice.', tag: 'Walk-in', hue: 175 },
        { t: 'Antenatal care', d: 'Regular visits and scans for a healthy pregnancy.', tag: 'Booked', hue: 330 },
        { t: 'Immunisation', d: 'Childhood and travel vaccines.', tag: 'Booked', hue: 40 },
        { t: 'Dental', d: 'Cleaning, fillings and check-ups.', tag: 'Booked', hue: 200 },
        { t: 'Laboratory', d: 'Blood, urine and rapid tests.', tag: 'Walk-in', hue: 260 },
        { t: 'Pharmacy', d: 'Prescriptions filled on site.', tag: 'Walk-in', hue: 120 },
      ] },
      { type: 'table', title: 'Sample price list', head: ['Service', 'Price'], rows: [['Consultation', 'KSh 1,500'], ['Full blood count', 'KSh 800'], ['Child vaccine visit', 'KSh 1,000'], ['Dental cleaning', 'KSh 3,000']] },
    ] },
    doctors: { kicker: 'Our team', title: 'Meet the doctors', intro: 'Fictional staff with placeholder photos.', blocks: [
      { type: 'people', items: [
        { t: 'Dr. Amina Sample', d: 'Family physician', hue: 175 }, { t: 'Dr. Peter Sample', d: 'Paediatrician', hue: 210 },
        { t: 'Dr. Joy Sample', d: 'Obstetrician', hue: 330 }, { t: 'Dr. Samuel Sample', d: 'Dentist', hue: 40 },
      ] },
    ] },
    appointments: { kicker: 'Appointments', title: 'Book a visit', intro: 'Three easy steps. Demo form only.', blocks: [
      { type: 'steps', items: [{ t: 'Choose a service', d: 'Pick what you need and who you would like to see.' }, { t: 'Pick a time', d: 'We will confirm by phone or message.' }, { t: 'Come in', d: 'Bring any previous records and your insurance card.' }] },
      { type: 'form', title: 'Request an appointment', button: 'Request appointment', fields: [['Full name', 'text', 'Your name'], ['Phone', 'tel', '+254'], ['Service', 'select', ['General consultation', 'Antenatal care', 'Immunisation', 'Dental', 'Laboratory']], ['Preferred date', 'date', ''], ['Notes', 'textarea', 'Anything we should know']] },
    ] },
    tips: { kicker: 'Health tips', title: 'Stay well', intro: 'Short, friendly reads (placeholder articles).', blocks: [
      { type: 'news', items: [
        { date: 'Tip 1', t: 'Drink water through the day', d: 'Keep a bottle nearby and sip often, especially in hot weather.' },
        { date: 'Tip 2', t: 'Wash hands before meals', d: 'The simplest way to prevent many common infections.' },
        { date: 'Tip 3', t: 'Sleep seven to eight hours', d: 'Regular sleep supports mood, memory and immunity.' },
        { date: 'Tip 4', t: 'Move a little every day', d: 'A brisk 30-minute walk is a good start.' },
      ] },
    ] },
    faq: { kicker: 'FAQ', title: 'Questions we hear often', blocks: [
      { type: 'faq', items: [
        { t: 'Do you accept insurance?', d: 'Placeholder answer: we work with several major insurers. Please call to confirm yours.' },
        { t: 'Can I walk in without booking?', d: 'Yes for general consultations. Specialist visits are by appointment.' },
        { t: 'What should I bring?', d: 'An ID, your insurance card and any past test results.' },
        { t: 'Do you open on weekends?', d: 'Yes, every day. See the contact page for hours.' },
      ] },
    ] },
    contact: { kicker: 'Contact', title: 'Find us', blocks: [
      { type: 'contact', rows: [['Address', 'Sample Road, Nairobi'], ['Phone', '+254 700 000 000'], ['Emergency', '+254 711 000 000 (24 hours)'], ['Hours', 'Mon to Sun, 7:00 to 21:00']] },
      { type: 'form', button: 'Send message', fields: [['Name', 'text', 'Your name'], ['Email', 'email', 'you@example.com'], ['Message', 'textarea', 'How can we help?']] },
    ] },
  },
}
