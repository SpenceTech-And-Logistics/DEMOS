const P = {
  leaf: <><path d="M5 19c0-8 5-14 15-14 0 9-5 15-13 15" /><path d="M5 19c3-5 6-8 10-10" /></>,
  heart: <><path d="M12 20s-8-4.8-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.2 12 20 12 20z" /><path d="M12 10v5M9.5 12.5h5" /></>,
  puzzle: <><path d="M4 9h4a2 2 0 1 1 4 0h4v4a2 2 0 1 1 0 4v3H4z" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" /><circle cx="17" cy="9" r="2.4" /><path d="M16 14.2c3 0 5 2 5 5" /></>,
  clinic: <><path d="M4 21V10l8-6 8 6v11z" /><path d="M12 11v6M9 14h6" /></>,
  chart: <><path d="M4 20V4M4 20h16" /><path d="M8 16l4-5 3 3 5-7" /></>,
  pulse: <><path d="M3 12h4l2-6 4 12 2-6h6" /></>,
  hands: <><path d="M3 14c3-1 5-1 8 1l3 2 6-4" /><path d="M3 18l5 2c2 1 4 0 6-1" /><path d="M12 4c1.5-1.5 4-.5 4 1.6 0 2.4-4 4.4-4 4.4s-4-2-4-4.4C8 3.5 10.5 2.5 12 4z" /></>,
  phone: <><path d="M6 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
}

export default function Icon({ name, size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {P[name]}
    </svg>
  )
}
