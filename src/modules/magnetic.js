export function initMagnetic() {
  if (!window.matchMedia('(hover: hover)').matches) return

  document.querySelectorAll('.btn-cta').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'none'
    })

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) * 0.28
      const dy = (e.clientY - cy) * 0.28
      btn.style.transform = `translate(${dx}px, ${dy}px)`
    })

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = ''
      btn.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
    })
  })
}
