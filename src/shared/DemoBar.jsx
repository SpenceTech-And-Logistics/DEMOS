import { Link } from 'react-router-dom'
import { isSolo } from './solo.js'

// Small floating control shown on every demo so the presenter can get back to the list.
// In solo (share) mode the link back is hidden and only the "sample content" label remains.
export default function DemoBar({ label }) {
  const solo = isSolo()
  return (
    <div className={`demobar ${solo ? 'solo' : ''}`} role="complementary" aria-label="Demo controls">
      {!solo && <Link to="/">← All demos</Link>}
      <span>{label} · sample content</span>
    </div>
  )
}
