import { Link } from 'react-router-dom'

// Small floating control shown on every demo so the presenter can get back to the list.
export default function DemoBar({ label }) {
  return (
    <div className="demobar" role="complementary" aria-label="Demo controls">
      <Link to="/">← All demos</Link>
      <span>{label} · sample content</span>
    </div>
  )
}
