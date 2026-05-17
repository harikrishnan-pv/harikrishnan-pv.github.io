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
})
