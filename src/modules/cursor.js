export function initCursor() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

  const dot = document.createElement('div')
  dot.id = 'cursor-dot'
  const ring = document.createElement('div')
  ring.id = 'cursor-ring'
  document.body.appendChild(dot)
  document.body.appendChild(ring)

  let mouseX = -200, mouseY = -200
  let ringX = -200, ringY = -200
  let rafId

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }, { passive: true })

  // Expand ring on interactive elements
  document.querySelectorAll('a, button, .card, .btn-cta').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('expanded'))
    el.addEventListener('mouseleave', () => ring.classList.remove('expanded'))
  })

  function loop() {
    ringX += (mouseX - ringX) * 0.12
    ringY += (mouseY - ringY) * 0.12

    dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`
    ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`

    rafId = requestAnimationFrame(loop)
  }

  rafId = requestAnimationFrame(loop)
}
