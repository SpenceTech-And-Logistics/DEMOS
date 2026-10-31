// Sample data for the school demo. Every name and figure is fictional.
export const school = {
  key: 'school', base: '/mpa/school', label: 'Multi-page · school', name: 'Mwangaza Academy', initials: 'MA', hue: 255,
  vars: { '--x-ink': '#1d1a3a', '--x-main': '#4b3fd1', '--x-deep': '#241b7a', '--x-accent': '#ffc233', '--x-bg': '#faf9ff', '--x-tint': '#ebe8ff', '--x-head': 'Bricolage Grotesque', '--x-body': 'DM Sans' },
  nav: [['', 'Home'], ['about', 'About'], ['academics', 'Academics'], ['admissions', 'Admissions'], ['life', 'Student life'], ['news', 'News and events'], ['contact', 'Contact']],
  home: {
    kicker: 'Sample day and boarding school', lead: 'Curious minds,', em: 'bright futures.',
    text: 'A warm school where learners are known by name, challenged to think and encouraged to lead. Placeholder text for a school website.',
    cta: [['admissions', 'Apply for a place'], ['about', 'Our story']], float: ['Grades 1 to 12', 'Visit days monthly'],
    stats: [{ n: 1200, s: '', l: 'Learners' }, { n: 85, s: '', l: 'Teachers' }, { n: 96, s: '%', l: 'Pass rate' }, { n: 30, s: '', l: 'Clubs and teams' }],
    featKicker: 'Why Mwangaza', featTitle: 'Learning that goes beyond the classroom',
    features: [
      { t: 'Strong academics', d: 'Small classes and teachers who know every learner.', hue: 255 },
      { t: 'Sports and arts', d: 'Football, athletics, drama, choir and robotics.', hue: 35 },
      { t: 'Safe boarding', d: 'Well-run dorms, healthy meals and caring matrons.', hue: 160 },
    ],
    bandTitle: 'Come and see for yourself', bandText: 'Join a campus tour on the first Saturday of every month.', bandTo: 'contact', bandBtn: 'Book a tour',
  },
  pages: {
    about: { kicker: 'About', title: 'Our story', intro: 'Placeholder history of a fictional school.', blocks: [
      { type: 'text', paras: ['Mwangaza Academy opened in 2005 with 80 learners under a single roof. Today it is a school of over a thousand learners, still guided by the same idea: every child can shine.', 'Our values are honesty, curiosity and service. These are placeholders, to be replaced with the school’s own mission and vision.'] },
      { type: 'people', title: 'Leadership', items: [{ t: 'Mrs. Rose Sample', d: 'Principal', hue: 255 }, { t: 'Mr. Daniel Sample', d: 'Deputy principal', hue: 200 }, { t: 'Ms. Faith Sample', d: 'Director of studies', hue: 330 }] },
    ] },
    academics: { kicker: 'Academics', title: 'What we teach', blocks: [
      { type: 'cards', items: [
        { t: 'Lower primary', d: 'Grades 1 to 3: reading, number sense and play-based learning.', tag: 'Grades 1 to 3', hue: 255 },
        { t: 'Upper primary', d: 'Grades 4 to 6: science, languages and project work.', tag: 'Grades 4 to 6', hue: 200 },
        { t: 'Junior school', d: 'Grades 7 to 9: broad subjects and career exploration.', tag: 'Grades 7 to 9', hue: 160 },
        { t: 'Senior school', d: 'Grades 10 to 12: pathways in STEM, social sciences and arts.', tag: 'Grades 10 to 12', hue: 35 },
      ] },
      { type: 'table', title: 'Sample daily timetable', head: ['Time', 'Activity'], rows: [['7:30', 'Assembly'], ['8:00', 'Morning lessons'], ['12:30', 'Lunch and games'], ['14:00', 'Afternoon lessons'], ['16:00', 'Clubs and sports']] },
    ] },
    admissions: { kicker: 'Admissions', title: 'Joining Mwangaza', intro: 'Demo steps and form. Nothing is sent.', blocks: [
      { type: 'steps', items: [{ t: 'Enquire', d: 'Send the form below or visit us on a tour day.' }, { t: 'Assessment', d: 'A friendly chat and short placement activity.' }, { t: 'Offer', d: 'We send a letter and fee schedule.' }, { t: 'Enrol', d: 'Complete the paperwork and meet your class teacher.' }] },
      { type: 'form', button: 'Send enquiry', fields: [['Parent name', 'text', 'Your name'], ['Phone', 'tel', '+254'], ['Grade applying for', 'select', ['Grade 1', 'Grade 4', 'Grade 7', 'Grade 10']], ['Message', 'textarea', 'Tell us about your child']] },
    ] },
    life: { kicker: 'Student life', title: 'More than lessons', blocks: [
      { type: 'cards', items: [
        { t: 'Football and athletics', d: 'Regular matches and an annual sports day.', hue: 130 },
        { t: 'Drama and music', d: 'A termly play and a choir that tours.', hue: 330 },
        { t: 'Robotics club', d: 'Learners build and code simple machines.', hue: 210 },
        { t: 'Community service', d: 'Clean-up days and support for local charities.', hue: 40 },
      ] },
    ] },
    news: { kicker: 'News and events', title: 'What is happening', blocks: [
      { type: 'news', items: [
        { date: '12 Feb', t: 'Open day for new families', d: 'Placeholder: meet teachers, tour classrooms and ask questions.' },
        { date: '03 Mar', t: 'Inter-school sports day', d: 'Placeholder: our teams host five visiting schools.' },
        { date: '21 Mar', t: 'Science fair', d: 'Placeholder: learners present their experiments.' },
        { date: '10 Apr', t: 'End of term concert', d: 'Placeholder: choir, drama and a student band.' },
      ] },
    ] },
    contact: { kicker: 'Contact', title: 'Talk to us', blocks: [
      { type: 'contact', rows: [['Address', 'Sample Lane, Nairobi'], ['Phone', '+254 700 000 000'], ['Email', 'office@example.com'], ['Office hours', 'Mon to Fri, 8:00 to 16:30']] },
      { type: 'form', button: 'Send message', fields: [['Name', 'text', 'Your name'], ['Email', 'email', 'you@example.com'], ['Message', 'textarea', 'How can we help?']] },
    ] },
  },
}
