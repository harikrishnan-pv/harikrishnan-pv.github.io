export function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn')
  const closeMenuBtn = document.getElementById('closeMenuBtn')
  const mobileMenu = document.getElementById('mobileMenu')
  const progressBar = document.getElementById('scroll-progress')
  const hero = document.querySelector('.parallax-hero')

  // Mobile menu
  function openMenu() {
    mobileMenu?.classList.remove('translate-x-full')
    document.body.style.overflow = 'hidden'
  }

  function closeMenu() {
    mobileMenu?.classList.add('translate-x-full')
    document.body.style.overflow = ''
  }

  mobileMenuBtn?.addEventListener('click', openMenu)
  closeMenuBtn?.addEventListener('click', closeMenu)
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMenu)
  })

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

  // Active nav link highlighting via IntersectionObserver
  const sections = document.querySelectorAll('section[id], footer[id]')
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]')

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id')
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
        })
      }
    })
  }, { threshold: 0.4 })

  sections.forEach(s => sectionObserver.observe(s))
}
