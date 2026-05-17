export function initAnimations() {
  // Scroll reveal with data-reveal attributes
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.08 })

  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el))

  // Timeline line draw animation
  const timeline = document.querySelector('.timeline-container')
  if (timeline) {
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          timelineObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.05 })
    timelineObserver.observe(timeline)
  }
}
