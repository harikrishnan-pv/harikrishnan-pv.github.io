const projectsData = {
  brixline: {
    title: 'Brixline - Real Estate Platform Frontend',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'AWS'],
    description:
      'A cutting-edge, production-grade real estate platform built with Next.js 15 and React 19, serving the Indian property market. Brixline helps users discover, finance, and secure properties through an intuitive digital interface.',
    images: [
      'images/brixline/home.png',
      'images/brixline/detail.png',
      'images/brixline/dashboard.png',
    ],
    content: `
      <div class="space-y-8">
        <div>
          <h4 class="text-lg font-bold mb-3 flex items-center gap-2">
            <i class="bi bi-code-square text-accent"></i> Technical Architecture
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-slate-50 dark:bg-white/5 p-4 rounded-lg">
              <span class="block font-semibold text-sm mb-2 text-slate-900 dark:text-white">Core Stack</span>
              <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                <li>Next.js 15 (App Router)</li>
                <li>React 19.1.0</li>
                <li>TypeScript (Strict)</li>
                <li>Tailwind CSS v4</li>
              </ul>
            </div>
            <div class="bg-slate-50 dark:bg-white/5 p-4 rounded-lg">
              <span class="block font-semibold text-sm mb-2 text-slate-900 dark:text-white">Key Libraries</span>
              <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                <li>Framer Motion</li>
                <li>Radix UI + HeroUI</li>
                <li>Embla Carousel</li>
                <li>React Context API</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-3 flex items-center gap-2">
            <i class="bi bi-lightning-charge text-accent"></i> Key Features
          </h4>
          <ul class="space-y-3 text-slate-600 dark:text-slate-400">
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Advanced Property Search:</strong> Multi-criteria filtering, smart debounced API calls, and URL state management with browser history sync.</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Intelligent Lead Gen:</strong> Multi-step modal workflow with OTP verification and smart session-based caching.</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Financial Suite:</strong> Real-time EMI, Eligibility, and Stamp Duty calculators with interactive D3/SVG visualizations.</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Performance:</strong> 90+ Lighthouse scores via code splitting, multi-level caching, and predictive prefetching.</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-3 flex items-center gap-2">
            <i class="bi bi-braces text-accent"></i> Engineering Highlights
          </h4>
          <div class="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <p><strong class="text-slate-900 dark:text-white">Type-Safe Data Layer:</strong> Implemented a comprehensive transformation pipeline that converts raw API responses into frontend-optimized, strictly typed interfaces, eliminating runtime errors.</p>
            <p><strong class="text-slate-900 dark:text-white">Smart Device Detection:</strong> Context-aware navigation logic that adapts behavior (deep links vs. new tabs) based on the user's device type.</p>
            <p><strong class="text-slate-900 dark:text-white">Resilience:</strong> Built-in exponential backoff for image loading retries and graceful degradation patterns for API failures.</p>
          </div>
        </div>
      </div>
    `,
  },
  reflex: {
    title: 'Optical Retail ERP',
    tags: ['Next.js 15', 'Supabase', 'TypeScript', 'Bun', 'Edge Functions'],
    description:
      'A comprehensive optical/eye care business management platform that streamlines operations for optical stores, eye camps, and fitting labs across India. It combines clinical eye care, retail operations, and business management into a unified, scalable solution.',
    images: ['images/reflex/dashboard.png'],
    content: `
      <div class="space-y-8">
        <div>
          <h4 class="text-lg font-bold mb-3 flex items-center gap-2">
            <i class="bi bi-code-square text-accent"></i> Technical Architecture
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-slate-50 dark:bg-white/5 p-4 rounded-lg">
              <span class="block font-semibold text-sm mb-2 text-slate-900 dark:text-white">Core Stack</span>
              <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                <li>Next.js 15 (App Router)</li>
                <li>Supabase (Backend)</li>
                <li>Bun Runtime</li>
                <li>TypeScript (Strict)</li>
              </ul>
            </div>
            <div class="bg-slate-50 dark:bg-white/5 p-4 rounded-lg">
              <span class="block font-semibold text-sm mb-2 text-slate-900 dark:text-white">Key Features</span>
              <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                <li>196+ Edge Functions</li>
                <li>Real-time Subscriptions</li>
                <li>Row-Level Security (RLS)</li>
                <li>shadcn/ui Components</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-3 flex items-center gap-2">
            <i class="bi bi-lightning-charge text-accent"></i> Module Highlights
          </h4>
          <ul class="space-y-3 text-slate-600 dark:text-slate-400">
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Eye Care Management:</strong> Digital eye examinations, prescription tracking, and vision care workflows.</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Multi-Store Operations:</strong> Manage hundreds of optical stores with hierarchical access control and inventory tracking.</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Financial Management:</strong> GST compliance, tax filing, TDS management, and revenue analytics.</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Field Operations:</strong> Mobile eye camp management with agent workflows in remote communities.</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-3 flex items-center gap-2">
            <i class="bi bi-braces text-accent"></i> Engineering Achievements
          </h4>
          <div class="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <p><strong class="text-slate-900 dark:text-white">Scale & Complexity:</strong> Orchestrated 196+ Edge Functions across 10+ business domains, handling complex schemas with 32+ database migrations.</p>
            <p><strong class="text-slate-900 dark:text-white">Enterprise Security:</strong> Implemented a 4-tier role-based access control system with granular permissions and complete data isolation for multi-tenant usage.</p>
            <p><strong class="text-slate-900 dark:text-white">Performance:</strong> Leveraged Bun runtime for 4x faster development and Supabase real-time subscriptions for live updates across all modules.</p>
          </div>
        </div>
      </div>
    `,
  },
}

export function initModal() {
  const projectModal = document.getElementById('projectModal')
  const modalBody = document.getElementById('modalBody')
  const closeModalBtn = document.getElementById('closeModalBtn')

  let currentSlide = 0
  let currentProjectId = ''

  function updateCarousel() {
    const track = document.getElementById('carouselImages')
    if (!track) return
    track.style.transform = `translateX(-${currentSlide * 100}%)`

    document.querySelectorAll('.carousel-indicator').forEach((ind, i) => {
      const isActive = i === currentSlide
      ind.classList.toggle('bg-accent', isActive)
      ind.classList.toggle('opacity-100', isActive)
      ind.classList.toggle('bg-white/40', !isActive)
      ind.classList.toggle('opacity-60', !isActive)
    })
  }

  function openProjectModal(projectId) {
    currentProjectId = projectId
    const project = projectsData[projectId]
    if (!project) return

    const contentHtml = `
      <div class="mb-6">
        <div class="flex flex-wrap gap-2 mb-4">
          ${project.tags
            .map(
              tag =>
                `<span class="text-xs font-mono bg-accent/10 dark:bg-accent/20 text-accent px-2 py-1 rounded">${tag}</span>`
            )
            .join('')}
        </div>
        <h2 class="text-2xl font-bold mb-2 text-slate-900 dark:text-white">${project.title}</h2>
        <p class="text-slate-600 dark:text-slate-400">${project.description}</p>
      </div>

      <div class="relative mb-8 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800/50 aspect-video border border-black/5 dark:border-white/5">
        <div id="carouselImages" class="h-full flex transition-transform duration-500 ease-out">
          ${project.images
            .map(
              img => `
            <div class="min-w-full h-full flex items-center justify-center">
              <img src="${img}" loading="lazy" class="max-w-full max-h-full object-contain" alt="${project.title} screenshot">
            </div>
          `
            )
            .join('')}
        </div>
        <button id="prevSlideBtn" class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black transition-colors shadow-lg backdrop-blur-sm">
          <i class="bi bi-chevron-left text-xl"></i>
        </button>
        <button id="nextSlideBtn" class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black transition-colors shadow-lg backdrop-blur-sm">
          <i class="bi bi-chevron-right text-xl"></i>
        </button>
        <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          ${project.images
            .map(
              (_, i) =>
                `<button class="carousel-indicator w-2 h-2 rounded-full transition-all" data-index="${i}"></button>`
            )
            .join('')}
        </div>
      </div>

      <div class="prose dark:prose-invert max-w-none">
        ${project.content}
      </div>
    `

    modalBody.innerHTML = contentHtml
    projectModal.classList.remove('hidden')
    document.body.style.overflow = 'hidden'

    currentSlide = 0
    updateCarousel()

    // Wire up carousel controls
    document.getElementById('prevSlideBtn')?.addEventListener('click', () => {
      const len = projectsData[currentProjectId].images.length
      currentSlide = (currentSlide - 1 + len) % len
      updateCarousel()
    })
    document.getElementById('nextSlideBtn')?.addEventListener('click', () => {
      const len = projectsData[currentProjectId].images.length
      currentSlide = (currentSlide + 1) % len
      updateCarousel()
    })
    document.querySelectorAll('.carousel-indicator').forEach(btn => {
      btn.addEventListener('click', () => {
        currentSlide = parseInt(btn.dataset.index, 10)
        updateCarousel()
      })
    })
  }

  function closeModal() {
    projectModal.classList.add('hidden')
    document.body.style.overflow = ''
  }

  closeModalBtn?.addEventListener('click', closeModal)
  projectModal?.addEventListener('click', e => {
    if (e.target === projectModal) closeModal()
  })
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !projectModal?.classList.contains('hidden')) closeModal()
  })

  // Expose openProjectModal globally for onclick handlers in HTML
  window.openProjectModal = openProjectModal
}
