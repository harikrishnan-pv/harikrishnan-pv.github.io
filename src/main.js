import './styles/main.css'
import './styles/components.css'
import './styles/animations.css'

import { initTheme } from './modules/theme.js'
import { initNavigation } from './modules/navigation.js'
import { initTypewriter } from './modules/typewriter.js'
import { initAnimations } from './modules/animations.js'
import { initModal } from './modules/modal.js'
import { initTilt } from './modules/tilt.js'
import { initCursor } from './modules/cursor.js'
import { initMagnetic } from './modules/magnetic.js'
import { initParticleNetwork } from './modules/particle-network.js'

// The 3D lanyard chunk (~1.2 MB over the wire: three + rapier + card code)
// plus the ~0.5 MB model used to gate the entire hero — measured at ~30s on
// a slow mobile link. Now the static poster inside #lanyard-root paints
// instantly and the 3D scene only *upgrades* it afterwards: after first
// paint (window load), and never on data-saver / 2G links. The model fetch
// still starts at script-eval time so it is warm when the chunk arrives.
import cardModelUrl from './assets/lanyard/card.glb?url'
fetch(cardModelUrl).catch(() => {})

let lanyardStarted = false
function loadLanyard() {
  if (lanyardStarted) return
  lanyardStarted = true
  import('./react/hero-lanyard.jsx')
    .then(m => m.mountLanyard())
    .catch(err => console.warn('Lanyard failed to load:', err))
}

function scheduleLanyard() {
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  if (conn && (conn.saveData || /^(slow-2g|2g)$/.test(conn.effectiveType || ''))) return // poster stays
  if (document.readyState === 'complete') loadLanyard()
  else {
    window.addEventListener('load', loadLanyard, { once: true })
    setTimeout(loadLanyard, 4000) // safety net if load hangs on a stalled asset
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme()
  initNavigation()
  initTypewriter()
  initAnimations()
  initModal()
  initTilt()
  initCursor()
  initMagnetic()
  initParticleNetwork()

  const yearEl = document.getElementById('year')
  if (yearEl) yearEl.textContent = new Date().getFullYear()

  // The chunk import starts after first paint; the static poster covers the gap.
  scheduleLanyard()
})
