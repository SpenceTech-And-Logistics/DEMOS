// Sample beach resort. Every name, price and figure is fictional.
export const resort = {
  key: 'resort', base: '/mpa/resort', label: 'Multi-page · resort', name: 'Palm Ridge Resort', initials: 'PR', hue: 190,
  vars: { '--x-ink': '#0b2a33', '--x-main': '#0e7c86', '--x-deep': '#08323a', '--x-accent': '#f4a261', '--x-bg': '#f7fbfa', '--x-tint': '#d9eeee', '--x-head': 'Newsreader', '--x-body': 'Figtree' },
  social: [['Instagram', '@palmridge.resort'], ['Facebook', 'Palm Ridge Resort'], ['TikTok', '@palmridgeresort'], ['YouTube', 'Palm Ridge Resort'], ['TripAdvisor', 'Palm Ridge Resort']],
  nav: [['', 'Home'], ['rooms', 'Rooms'], ['dining', 'Dining'], ['experiences', 'Experiences'], ['gallery', 'Gallery'], ['book', 'Book a stay']],
  home: {
    kicker: 'Sample beach resort · Kenyan coast', lead: 'Slow days by the', em: 'Indian Ocean.',
    text: 'Eighty rooms between palms and white sand, three restaurants, a spa and a reef a short swim away. Placeholder text for a resort.',
    cta: [['book', 'Book a stay'], ['rooms', 'See the rooms']], float: ['Beachfront', 'Breakfast included'],
    stats: [{ n: 80, s: '', l: 'Rooms and villas' }, { n: 3, s: '', l: 'Restaurants' }, { n: 4, s: '.8', l: 'Guest rating (sample)' }, { n: 2, s: 'km', l: 'Of private beach' }],
    featKicker: 'Stay with us', featTitle: 'Everything for a good holiday',
    features: [{ t: 'Rooms and villas', d: 'Sea-view rooms, garden suites and private pool villas.', hue: 190 }, { t: 'Dining', d: 'Seafood on the sand, a Swahili kitchen and a rooftop bar.', hue: 25 }, { t: 'Spa and wellness', d: 'Massage, yoga at sunrise and a quiet lap pool.', hue: 160 }],
    bandTitle: 'Early-booking offer', bandText: 'Book 60 days ahead and save 15% on any room, with breakfast included. Sample offer.', bandTo: 'book', bandBtn: 'Check dates',
  },
  pages: {
    rooms: { kicker: 'Rooms', title: 'Where you will sleep', intro: 'All rooms have air conditioning, a balcony or terrace and free Wi-Fi.', blocks: [
      { type: 'cards', items: [{ t: 'Garden room', d: 'Quiet and shaded, five minutes from the beach.', tag: 'Sleeps 2', hue: 140 }, { t: 'Ocean-view suite', d: 'A sea-facing terrace and a separate sitting room.', tag: 'Sleeps 3', hue: 195 }, { t: 'Private pool villa', d: 'Two bedrooms, a plunge pool and a butler on request.', tag: 'Sleeps 5', hue: 210 }] },
      { type: 'table', title: 'Nightly rates (per room, breakfast included)', head: ['Room', 'Low season', 'High season'], rows: [['Garden room', 'KSh 14,000', 'KSh 21,000'], ['Ocean-view suite', 'KSh 24,000', 'KSh 36,000'], ['Private pool villa', 'KSh 55,000', 'KSh 82,000']] },
    ] },
    dining: { kicker: 'Dining', title: 'Three places to eat', blocks: [
      { type: 'cards', items: [{ t: 'Mkoko Grill', d: 'Fresh catch, lobster and charcoal grills, with tables on the sand.', tag: 'Dinner', hue: 25 }, { t: 'Pwani Kitchen', d: 'Swahili classics: coconut curries, pilau and mahamri.', tag: 'All day', hue: 40 }, { t: 'Skyline Bar', d: 'Cocktails and light plates on the rooftop at sunset.', tag: 'Evenings', hue: 330 }] },
      { type: 'text', paras: ['Breakfast is served from 6:30 to 10:30 every morning. Children eat free under the age of six. Dietary needs are welcome with notice.'] },
    ] },
    experiences: { kicker: 'Experiences', title: 'Things to do', intro: 'Included activities are marked. Others are bookable at the front desk.', blocks: [
      { type: 'cards', items: [{ t: 'Snorkelling trip', d: 'A half-day boat trip to the reef with a guide.', tag: 'From KSh 4,500', hue: 195 }, { t: 'Dhow sunset cruise', d: 'Sail the lagoon with drinks and snacks.', tag: 'From KSh 6,000', hue: 20 }, { t: 'Sunrise yoga', d: 'On the beach every morning.', tag: 'Included', hue: 150 }, { t: 'Spa treatments', d: 'Massage, scrubs and facials.', tag: 'From KSh 5,000', hue: 170 }, { t: 'Kids club', d: 'Games, crafts and beach play for ages 4 to 12.', tag: 'Included', hue: 50 }, { t: 'Wedding and events', d: 'Beach ceremonies and conference space for 200.', tag: 'Enquire', hue: 345 }] },
      { type: 'faq', title: 'Good to know', items: [{ t: 'What time are check-in and check-out?', d: 'Check-in from 2:00 pm, check-out by 11:00 am. Late check-out can be arranged.' }, { t: 'Is there an airport transfer?', d: 'Yes. A shared shuttle from the nearest airport is KSh 3,500 per person each way.' }, { t: 'Are children welcome?', d: 'Very much. Cots and family rooms are available on request.' }] },
    ] },
    gallery: { kicker: 'Gallery', title: 'A look around', intro: 'Placeholder pictures; real resort photos replace them.', blocks: [{ type: 'gallery', items: [
      { t: 'The beach at dawn', hue: 195, wide: true }, { t: 'Pool terrace', hue: 205 }, { t: 'Garden suite', hue: 140 }, { t: 'Seafood grill', hue: 25 }, { t: 'Dhow at sunset', hue: 15 }, { t: 'Spa room', hue: 170 }, { t: 'Rooftop bar', hue: 300 }, { t: 'Reef snorkelling', hue: 210 },
    ] }] },
    book: { kicker: 'Book a stay', title: 'Check dates and request a room', blocks: [
      { type: 'contact', rows: [['Reservations', 'reservations@example.com'], ['Phone', '+254 700 000 000'], ['Address', 'Sample Beach Road, Kenyan coast'], ['Reply time', 'Within one working day']] },
      { type: 'form', button: 'Request booking', fields: [['Name', 'text', 'Your name'], ['Email', 'email', 'you@example.com'], ['Check-in', 'date', ''], ['Check-out', 'date', ''], ['Room', 'select', ['Garden room', 'Ocean-view suite', 'Private pool villa']], ['Guests', 'select', ['1', '2', '3', '4', '5']], ['Notes', 'textarea', 'Anniversary, dietary needs, transfers']] },
    ] },
  },
}
