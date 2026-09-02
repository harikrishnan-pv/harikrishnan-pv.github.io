(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}})();function M(){const e=document.documentElement,t=document.getElementById("themeToggle");localStorage.theme==="light"?e.classList.remove("dark"):e.classList.add("dark"),t==null||t.addEventListener("click",()=>{e.classList.contains("dark")?(e.classList.remove("dark"),localStorage.theme="light"):(e.classList.add("dark"),localStorage.theme="dark")})}function R(){const e=document.getElementById("scroll-progress"),t=document.querySelector(".parallax-hero"),i=document.querySelectorAll('.pill-link[href^="#"]');let a=!1;window.addEventListener("scroll",()=>{a||(a=!0,requestAnimationFrame(()=>{const o=window.scrollY,c=document.documentElement.scrollHeight-window.innerHeight,d=c>0?o/c:0;e&&(e.style.width=`${d*100}%`),t&&o<window.innerHeight*1.2&&(t.style.transform=`translateY(${o*.22}px)`),a=!1}))},{passive:!0});const s=document.querySelectorAll("section[id], footer[id]"),l=new IntersectionObserver(o=>{o.forEach(c=>{if(c.isIntersecting){const d=c.target.getAttribute("id");i.forEach(r=>{r.classList.toggle("active",r.getAttribute("href")===`#${d}`)})}})},{threshold:.4});s.forEach(o=>l.observe(o))}function F(){const e=document.getElementById("typewriter-text"),t=document.getElementById("typewriter-cursor");if(!e)return;const i="Lead Product & Platform Engineer | AI-Native Systems";let a=0;const s=setInterval(()=>{a<i.length?(e.textContent+=i[a],a++):(clearInterval(s),t==null||t.classList.add("blink"))},40)}function B(){const e=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(a.target.classList.add("is-visible"),e.unobserve(a.target))})},{threshold:.08});document.querySelectorAll("[data-reveal]").forEach(i=>e.observe(i));const t=document.querySelector(".timeline-container");if(t){const i=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),i.unobserve(s.target))})},{threshold:.05});i.observe(t)}}const k={officekit:{title:"OfficeKit HRMS — Enterprise Platform Revamp",tags:["Enterprise SaaS","Microservices","AI","Java Spring Boot","GCP","Claude Code / Cursor"],description:"Architected the enterprise modernization of OfficeKit HRMS on GCP — migrating monolithic workflows to decoupled Spring Boot microservices, an automated shift scheduling engine, and an AI-driven LMS with multimodal evaluation pipelines.",images:["images/officekit/entity-settings.png","images/officekit/shift-management.png","images/officekit/sentinel-insight.png"],content:`
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
    `},alfapay:{title:"AlfaPay — Digital Remittance Super-App",tags:["Fintech","Flutter","Cross-Platform (Android / iOS)","Firebase","Multi-language"],description:"Cross-platform fintech super-app for Alfardan Exchange — international remittances with live FX rates, AANI instant payments, biometric onboarding with Emirates ID and face verification, branch locator, salary advances, and voucher rewards in a single Flutter codebase.",images:[],link:{url:"https://alfardanexchange.com/alfapay",label:"View product page"},content:`
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
    `},brixline:{title:"Brixline - Real Estate Platform Frontend",tags:["Next.js 15","React 19","TypeScript","Tailwind CSS","AWS"],description:"A cutting-edge, production-grade real estate platform built with Next.js 15 and React 19, serving the Indian property market. Brixline helps users discover, finance, and secure properties through an intuitive digital interface.",link:{url:"https://brixline.com/",label:"Visit brixline.com"},images:["images/brixline/home.png","images/brixline/detail.png","images/brixline/list.png"],content:`
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
    `},reflex:{title:"Optical Retail ERP",tags:["Next.js (App Router)","TypeScript","Supabase / PostgreSQL","Edge Functions","Flutter"],description:"A multi-tenant B2B optical ERP and point-of-sale platform shipped from 0 to production — 196+ Supabase Edge Functions, strict PostgreSQL Row-Level Security (RLS), and atomic inventory stock operations, reducing query overhead and compute latencies by 35% in production.",images:["images/reflex/dashboard.png"],content:`
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
    `},indolens:{title:"Indolens — Optical E-commerce Store",tags:["E-commerce","Web Store","Flutter","Firebase"],description:"Online storefront for a premium eyewear brand — a browsable catalog of frames, contact lenses, and prescription eyewear with cart and checkout, eye-check consultation booking, store locator, and free health-camp registration.",images:["images/indolens/store.png","images/indolens/product.png","images/indolens/book-consultation.png","images/indolens/camp-registration.png"],link:{url:"https://indolens.netlify.app/",label:"Visit indolens.netlify.app"},content:`
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
    `}};function O(){const e=document.getElementById("projectModal"),t=document.getElementById("modalBody"),i=document.getElementById("closeModalBtn");let a=0,s="";function l(){const d=document.getElementById("carouselImages");d&&(d.style.transform=`translateX(-${a*100}%)`,document.querySelectorAll(".carousel-indicator").forEach((r,v)=>{const g=v===a;r.classList.toggle("bg-accent",g),r.classList.toggle("opacity-100",g),r.classList.toggle("bg-white/40",!g),r.classList.toggle("opacity-60",!g)}))}function o(d){var p,x;s=d;const r=k[d];if(!r)return;const v=r.images.length?`
      <div class="relative mb-8 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800/50 aspect-video border border-black/5 dark:border-white/5">
        <div id="carouselImages" class="h-full flex transition-transform duration-500 ease-out">
          ${r.images.map(m=>`
            <div class="min-w-full h-full flex items-center justify-center">
              <img src="${m}" loading="lazy" class="max-w-full max-h-full object-contain" alt="${r.title} screenshot">
            </div>
          `).join("")}
        </div>
        <button id="prevSlideBtn" class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black transition-colors shadow-lg backdrop-blur-sm">
          <i class="bi bi-chevron-left text-xl"></i>
        </button>
        <button id="nextSlideBtn" class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black transition-colors shadow-lg backdrop-blur-sm">
          <i class="bi bi-chevron-right text-xl"></i>
        </button>
        <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          ${r.images.map((m,n)=>`<button class="carousel-indicator w-2 h-2 rounded-full transition-all" data-index="${n}"></button>`).join("")}
        </div>
      </div>`:"",g=`
      <div class="mb-6">
        <div class="flex flex-wrap gap-2 mb-4">
          ${r.tags.map(m=>`<span class="text-xs font-mono bg-accent/10 dark:bg-accent/20 text-accent px-2 py-1 rounded">${m}</span>`).join("")}
        </div>
        <h2 class="text-2xl font-bold mb-2 text-slate-900 dark:text-white">${r.title}</h2>
        <p class="text-slate-600 dark:text-slate-400">${r.description}</p>
        ${r.link?`<a href="${r.link.url}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-sm font-medium text-accent mt-3 hover:underline underline-offset-2 transition-colors">${r.link.label} <i class="bi bi-arrow-up-right"></i></a>`:""}
      </div>

      ${v}

      <div class="prose dark:prose-invert max-w-none">
        ${r.content}
      </div>
    `;t.innerHTML=g,e.classList.remove("hidden"),document.body.style.overflow="hidden",a=0,l(),(p=document.getElementById("prevSlideBtn"))==null||p.addEventListener("click",()=>{const m=k[s].images.length;a=(a-1+m)%m,l()}),(x=document.getElementById("nextSlideBtn"))==null||x.addEventListener("click",()=>{const m=k[s].images.length;a=(a+1)%m,l()}),document.querySelectorAll(".carousel-indicator").forEach(m=>{m.addEventListener("click",()=>{a=parseInt(m.dataset.index,10),l()})})}function c(){e.classList.add("hidden"),document.body.style.overflow=""}i==null||i.addEventListener("click",c),e==null||e.addEventListener("click",d=>{d.target===e&&c()}),document.addEventListener("keydown",d=>{d.key==="Escape"&&!(e!=null&&e.classList.contains("hidden"))&&c()}),window.openProjectModal=o}function T(){window.innerWidth<768||document.querySelectorAll(".card").forEach(e=>{e.addEventListener("mousemove",t=>{const i=e.getBoundingClientRect(),a=(t.clientX-i.left)/i.width-.5,s=(t.clientY-i.top)/i.height-.5;e.style.transform=`perspective(800px) rotateX(${-s*10}deg) rotateY(${a*10}deg) translateY(-4px)`,e.style.transition="transform 0.05s ease"}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.transition="transform 0.5s ease, box-shadow 0.3s ease"})})}function $(){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const e=document.createElement("div");e.id="cursor-dot";const t=document.createElement("div");t.id="cursor-ring",document.body.appendChild(e),document.body.appendChild(t);let i=-200,a=-200,s=-200,l=-200;window.addEventListener("mousemove",c=>{i=c.clientX,a=c.clientY},{passive:!0}),document.querySelectorAll("a, button, .card, .btn-cta").forEach(c=>{c.addEventListener("mouseenter",()=>t.classList.add("expanded")),c.addEventListener("mouseleave",()=>t.classList.remove("expanded"))});function o(){s+=(i-s)*.12,l+=(a-l)*.12,e.style.transform=`translate(${i-3}px, ${a-3}px)`,t.style.transform=`translate(${s-16}px, ${l-16}px)`,requestAnimationFrame(o)}requestAnimationFrame(o)}function D(){window.matchMedia("(hover: hover)").matches&&document.querySelectorAll(".btn-cta").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transition="none"}),e.addEventListener("mousemove",t=>{const i=e.getBoundingClientRect(),a=i.left+i.width/2,s=i.top+i.height/2,l=(t.clientX-a)*.28,o=(t.clientY-s)*.28;e.style.transform=`translate(${l}px, ${o}px)`}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.transition="transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)"})})}const L=["#ef4444","#dc2626","#e11d48","#f43f5e","#fca5a5"],q=62,A=130,I=115,C=32,P=.38;function H(){const e=document.getElementById("particle-canvas");if(!e)return;const t=e.getContext("2d");let i=[],a=-999,s=-999,l=null;function o(){return document.documentElement.classList.contains("dark")}function c(){const{width:g,height:p}=e;i=Array.from({length:q},()=>({x:Math.random()*g,y:Math.random()*p,vx:(Math.random()-.5)*P*2,vy:(Math.random()-.5)*P*2,r:Math.random()*1.8+1.2,color:L[Math.floor(Math.random()*L.length)],ox:0,oy:0}))}function d(){e.width=e.offsetWidth||window.innerWidth,e.height=e.offsetHeight||window.innerHeight,c()}function r(){const{width:g,height:p}=e,x=o();t.clearRect(0,0,g,p);for(const n of i){const h=n.x-a,b=n.y-s,u=Math.hypot(h,b);if(u<I&&u>1){const f=1-u/I;n.ox+=h/u*f*C*.07,n.oy+=b/u*f*C*.07}n.ox*=.87,n.oy*=.87,n.x+=n.vx,n.y+=n.vy,n.x<-20?n.x=g+20:n.x>g+20&&(n.x=-20),n.y<-20?n.y=p+20:n.y>p+20&&(n.y=-20)}const m=x?.5:.22;for(let n=0;n<i.length-1;n++){const h=i[n],b=h.x+h.ox,u=h.y+h.oy;for(let f=n+1;f<i.length;f++){const y=i[f],w=y.x+y.ox,S=y.y+y.oy,E=Math.hypot(b-w,u-S);E<A&&(t.beginPath(),t.moveTo(b,u),t.lineTo(w,S),t.strokeStyle=`rgba(239,68,68,${((1-E/A)*m).toFixed(3)})`,t.lineWidth=.75,t.stroke())}}t.globalAlpha=x?1:.55;for(const n of i)t.beginPath(),t.arc(n.x+n.ox,n.y+n.oy,n.r,0,Math.PI*2),t.fillStyle=n.color,t.fill();t.globalAlpha=1,l=requestAnimationFrame(r)}e.addEventListener("mousemove",g=>{const p=e.getBoundingClientRect();a=g.clientX-p.left,s=g.clientY-p.top},{passive:!0}),e.addEventListener("mouseleave",()=>{a=-999,s=-999}),new ResizeObserver(()=>{cancelAnimationFrame(l),d(),l=requestAnimationFrame(r)}).observe(e),d(),l=requestAnimationFrame(r)}document.addEventListener("DOMContentLoaded",()=>{M(),R(),F(),B(),O(),T(),$(),D(),H();const e=document.getElementById("year");e&&(e.textContent=new Date().getFullYear())});
