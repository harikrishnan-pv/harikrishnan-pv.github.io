export function initNavigation() {
  const progressBar = document.getElementById('scroll-progress')
  const hero = document.querySelector('.parallax-hero')
  const pillLinks = document.querySelectorAll('.pill-link[href^="#"]')

  // Scroll: progress bar + hero parallax
  let ticking = false
  window.addEventListener('scroll', () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollY / docHeight : 0

      if (progressBar) progressBar.style.width = `${progress * 100}%`

      if (hero && scrollY < window.innerHeight * 1.2) {
        hero.style.transform = `translateY(${scrollY * 0.22}px)`
      }

      ticking = false
    })
  }, { passive: true })

  // Active pill link via IntersectionObserver
  const sections = document.querySelectorAll('section[id], footer[id]')

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id')
        pillLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
        })
      }
    })
  }, { threshold: 0.4 })

  sections.forEach(s => sectionObserver.observe(s))
}
