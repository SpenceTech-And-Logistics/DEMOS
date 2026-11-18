// "Solo" mode: a demo opened with ?solo hides the link back to the list of demos,
// so one demo can be sent to a client without exposing the others.
// The choice is remembered for the browser tab. Open /?all to switch it off again.
const KEY = 'demo-solo'

export function isSolo() {
  const q = new URLSearchParams(window.location.search)
  try {
    if (q.has('all')) sessionStorage.removeItem(KEY)
    else if (q.has('solo')) sessionStorage.setItem(KEY, '1')
    return sessionStorage.getItem(KEY) === '1'
  } catch {
    return q.has('solo')
  }
}

export const shareUrl = (path) => `${window.location.origin}${path}?solo`
