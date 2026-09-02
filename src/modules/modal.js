const projectsData = {
  officekit: {
    title: 'OfficeKit HRMS — Enterprise Platform Revamp',
    tags: ['Enterprise SaaS', 'Microservices', 'AI', 'Java Spring Boot', 'GCP', 'Claude Code / Cursor'],
    description:
      'Architected the enterprise modernization of OfficeKit HRMS on GCP — migrating monolithic workflows to decoupled Spring Boot microservices, an automated shift scheduling engine, and an AI-driven LMS with multimodal evaluation pipelines.',
    images: [
      'images/officekit/entity-settings.png',
      'images/officekit/shift-management.png',
      'images/officekit/sentinel-insight.png',
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
                <li>Java Spring Boot (Microservices)</li>
                <li>PostgreSQL</li>
                <li>React</li>
                <li>Google Cloud Platform (GCP)</li>
              </ul>
            </div>
            <div class="bg-slate-50 dark:bg-white/5 p-4 rounded-lg">
              <span class="block font-semibold text-sm mb-2 text-slate-900 dark:text-white">Platform Modernization</span>
              <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                <li>Monolith → decoupled services</li>
                <li>Real-time shift scheduling engine</li>
                <li>Multimodal AI evaluation pipelines</li>
                <li>Cross-platform Flutter + Patrol testing</li>
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
              <span><strong>Decoupled Microservices:</strong> Migrated monolithic HR workflows to independently deployable Spring Boot services with clear domain boundaries on GCP.</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Automated Shift Scheduling Engine:</strong> Dynamic, real-time rostering engine that plans and adjusts workforce schedules across the organization.</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>AI-Driven LMS:</strong> Learning management system with multimodal evaluation pipelines for automated, multi-format skill assessment.</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Cross-Platform Mobile:</strong> Flutter app architecture with Patrol-automated UI testing for high-fidelity releases.</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-3 flex items-center gap-2">
            <i class="bi bi-braces text-accent"></i> Engineering Highlights
          </h4>
          <div class="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <p><strong class="text-slate-900 dark:text-white">Spec-Driven Development:</strong> Instituted a PRD → System Spec → Test Harness → Code Verification workflow using Cursor and Claude Code, accelerating sprint cycles by 40% with automated test harnesses.</p>
            <p><strong class="text-slate-900 dark:text-white">Enterprise Modernization:</strong> Led the platform revamp end to end — from monolithic workflows to decoupled Spring Boot services and AI-assisted assessment pipelines deployed on GCP.</p>
          </div>
        </div>
      </div>
    `,
  },
  alfapay: {
    title: 'AlfaPay — Digital Remittance Super-App',
    tags: ['Fintech', 'Flutter', 'Cross-Platform (Android / iOS)', 'Firebase', 'Multi-language'],
    description:
      'Cross-platform fintech super-app for Alfardan Exchange — international remittances with live FX rates, AANI instant payments, biometric onboarding with Emirates ID and face verification, branch locator, salary advances, and voucher rewards in a single Flutter codebase.',
    images: [],
    link: { url: 'https://alfardanexchange.com/alfapay', label: 'View product page' },
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
                <li>Flutter (Android &amp; iOS)</li>
                <li>Firebase (Functions, Auth, Analytics)</li>
                <li>Live FX-rate &amp; payment gateway APIs</li>
                <li>XOR-obfuscated multi-environment config</li>
              </ul>
            </div>
            <div class="bg-slate-50 dark:bg-white/5 p-4 rounded-lg">
              <span class="block font-semibold text-sm mb-2 text-slate-900 dark:text-white">Platform Engineering</span>
              <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                <li>Dev / UAT / Prod build flavors</li>
                <li>Generated obfuscated-secrets pipeline</li>
                <li>Localization (multi-language l10n)</li>
                <li>In-app chatbot &amp; NPS feedback modules</li>
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
              <span><strong>International Remittances:</strong> Cross-border transfers with today's rates and multi-country payout corridors.</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>AANI Instant Payments:</strong> Real-time payment rails integrated alongside traditional transfer flows.</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Biometric Onboarding:</strong> Emirates ID scanning, face verification, and OTP + PIN flows for secure KYC.</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Beyond Payments:</strong> Branch locator, salary advance, voucher marketplace, and rate alerts in one app.</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-3 flex items-center gap-2">
            <i class="bi bi-braces text-accent"></i> Engineering Highlights
          </h4>
          <div class="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <p><strong class="text-slate-900 dark:text-white">One Codebase, Two Stores:</strong> A single Flutter codebase ships to the Play Store and App Store through environment-specific build flavors with fully separated sandbox and production keys.</p>
            <p><strong class="text-slate-900 dark:text-white">Security by Default:</strong> Secrets never live in source — they are injected per environment and obfuscated at build time, layered with biometric and PIN authentication.</p>
          </div>
        </div>
      </div>
    `,
  },
  brixline: {
    title: 'Brixline - Real Estate Platform Frontend',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'AWS'],
    description:
      'A cutting-edge, production-grade real estate platform built with Next.js 15 and React 19, serving the Indian property market. Brixline helps users discover, finance, and secure properties through an intuitive digital interface.',
    link: { url: 'https://brixline.com/', label: 'Visit brixline.com' },
    images: [
      'images/brixline/home.png',
      'images/brixline/detail.png',
      'images/brixline/list.png',
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
    tags: ['Next.js (App Router)', 'TypeScript', 'Supabase / PostgreSQL', 'Edge Functions', 'Flutter'],
    description:
      'A multi-tenant B2B optical ERP and point-of-sale platform shipped from 0 to production — 196+ Supabase Edge Functions, strict PostgreSQL Row-Level Security (RLS), and atomic inventory stock operations, reducing query overhead and compute latencies by 35% in production.',
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
            <p><strong class="text-slate-900 dark:text-white">Performance:</strong> RLS-backed multi-tenant schemas and Edge Function architecture reduced query overhead and compute latencies by 35% in production, with Supabase real-time subscriptions driving live updates across all modules.</p>
          </div>
        </div>
      </div>
    `,
  },
  indolens: {
    title: 'Indolens — Optical E-commerce Store',
    tags: ['E-commerce', 'Web Store', 'Flutter', 'Firebase'],
    description:
      'Online storefront for a premium eyewear brand — a browsable catalog of frames, contact lenses, and prescription eyewear with cart and checkout, eye-check consultation booking, store locator, and free health-camp registration.',
    images: [
      'images/indolens/store.png',
      'images/indolens/product.png',
      'images/indolens/book-consultation.png',
      'images/indolens/camp-registration.png',
    ],
    link: { url: 'https://indolens.netlify.app/', label: 'Visit indolens.netlify.app' },
    content: `
      <div class="space-y-8">
        <div>
          <h4 class="text-lg font-bold mb-3 flex items-center gap-2">
            <i class="bi bi-lightning-charge text-accent"></i> Key Features
          </h4>
          <ul class="space-y-3 text-slate-600 dark:text-slate-400">
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Eyewear Catalog &amp; Cart:</strong> Category-driven browsing across frames, contact lenses, reading and blue-light glasses, with prescription lens options and secure checkout.</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Eye-Check Consultation Booking:</strong> Agent-finder flow that schedules in-store eye examinations with the nearest optical team.</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Health-Camp Registration:</strong> Online sign-up for free community eye camps, connecting field outreach with the store network.</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
              <span><strong>Store Locator:</strong> Maps customers to physical Indolens storefronts alongside the online shop.</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-3 flex items-center gap-2">
            <i class="bi bi-braces text-accent"></i> Engineering Highlights
          </h4>
          <div class="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <p><strong class="text-slate-900 dark:text-white">Retail-to-Web Continuity:</strong> The web store extends the same optical retail operation served by the ERP — products, eye camps, and consultations stay connected across channels.</p>
            <p><strong class="text-slate-900 dark:text-white">Commerce Essentials:</strong> Free-shipping thresholds, 1-year warranty messaging, and a 14-day return flow built into the buying experience.</p>
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

    const carouselHtml = project.images.length
      ? `
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
      </div>`
      : ''

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
        ${project.link
          ? `<a href="${project.link.url}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-sm font-medium text-accent mt-3 hover:underline underline-offset-2 transition-colors">${project.link.label} <i class="bi bi-arrow-up-right"></i></a>`
          : ''}
      </div>

      ${carouselHtml}

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
