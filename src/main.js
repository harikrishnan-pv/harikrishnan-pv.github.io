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

// Start fetching the hero-card assets at script-eval time, not after init:
// the lazy chunk (~1.2 MB over the wire: three + rapier + card code) and the
// 2.4 MB card.glb otherwise download strictly back-to-back, which on a slow
// connection leaves the hero blank for many seconds. The model fetch warms the
// HTTP cache so useGLTF's later request resolves instantly.
import cardModelUrl from './assets/lanyard/card.glb?url'
const lanyardChunk = import('./react/hero-lanyard.jsx')
fetch(cardModelUrl).catch(() => {})

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

  // The chunk import already started above; mount as soon as it arrives.
  lanyardChunk
    .then(m => m.mountLanyard())
    .catch(err => console.warn('Lanyard failed to load:', err))
})
