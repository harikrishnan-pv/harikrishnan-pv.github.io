const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/hero-lanyard-q1-MYcpo.js","assets/hero-lanyard-D83VCvhA.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}})();const M="modulepreload",F=function(e){return"/"+e},L={},B=function(t,i,n){let s=Promise.resolve();if(i&&i.length>0){let c=function(a){return Promise.all(a.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),m=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=c(i.map(a=>{if(a=F(a),a in L)return;L[a]=!0;const u=a.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${d}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":M,u||(g.as="script"),g.crossOrigin="",g.href=a,m&&g.setAttribute("nonce",m),document.head.appendChild(g),u)return new Promise((f,p)=>{g.addEventListener("load",f),g.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}function l(c){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=c,window.dispatchEvent(o),!o.defaultPrevented)throw c}return s.then(c=>{for(const o of c||[])o.status==="rejected"&&l(o.reason);return t().catch(l)})};function O(){const e=document.documentElement,t=document.getElementById("themeToggle");localStorage.theme==="light"?e.classList.remove("dark"):e.classList.add("dark"),t==null||t.addEventListener("click",()=>{e.classList.contains("dark")?(e.classList.remove("dark"),localStorage.theme="light"):(e.classList.add("dark"),localStorage.theme="dark")})}function T(){const e=document.getElementById("scroll-progress"),t=document.querySelector(".parallax-hero"),i=document.querySelectorAll('.pill-link[href^="#"]');let n=!1;window.addEventListener("scroll",()=>{n||(n=!0,requestAnimationFrame(()=>{const c=window.scrollY,o=document.documentElement.scrollHeight-window.innerHeight,m=o>0?c/o:0;e&&(e.style.width=`${m*100}%`),t&&c<window.innerHeight*1.2&&(t.style.transform=`translateY(${c*.22}px)`),n=!1}))},{passive:!0});const s=document.querySelectorAll("section[id], footer[id]"),l=new IntersectionObserver(c=>{c.forEach(o=>{if(o.isIntersecting){const m=o.target.getAttribute("id");i.forEach(a=>{a.classList.toggle("active",a.getAttribute("href")===`#${m}`)})}})},{threshold:.4});s.forEach(c=>l.observe(c))}function $(){const e=document.getElementById("typewriter-text"),t=document.getElementById("typewriter-cursor");if(!e)return;const i="Lead Product & Platform Engineer | AI-Native Systems";let n=0;const s=setInterval(()=>{n<i.length?(e.textContent+=i[n],n++):(clearInterval(s),t==null||t.classList.add("blink"))},40)}function D(){const e=new IntersectionObserver(i=>{i.forEach(n=>{n.isIntersecting&&(n.target.classList.add("is-visible"),e.unobserve(n.target))})},{threshold:.08});document.querySelectorAll("[data-reveal]").forEach(i=>e.observe(i));const t=document.querySelector(".timeline-container");if(t){const i=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),i.unobserve(s.target))})},{threshold:.05});i.observe(t)}}const k={officekit:{title:"OfficeKit HRMS — Enterprise Platform Revamp",tags:["Enterprise SaaS","Microservices","AI","Java Spring Boot","GCP","Claude Code / Cursor"],description:"Architected the enterprise modernization of OfficeKit HRMS on GCP — migrating monolithic workflows to decoupled Spring Boot microservices, an automated shift scheduling engine, and an AI-driven LMS with multimodal evaluation pipelines.",images:["images/officekit/entity-settings.png","images/officekit/shift-management.png","images/officekit/sentinel-insight.png"],content:`
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
    `}};function q(){const e=document.getElementById("projectModal"),t=document.getElementById("modalBody"),i=document.getElementById("closeModalBtn");let n=0,s="";function l(){const m=document.getElementById("carouselImages");m&&(m.style.transform=`translateX(-${n*100}%)`,document.querySelectorAll(".carousel-indicator").forEach((a,u)=>{const d=u===n;a.classList.toggle("bg-accent",d),a.classList.toggle("opacity-100",d),a.classList.toggle("bg-white/40",!d),a.classList.toggle("opacity-60",!d)}))}function c(m){var g,f;s=m;const a=k[m];if(!a)return;const u=a.images.length?`
      <div class="relative mb-8 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800/50 aspect-video border border-black/5 dark:border-white/5">
        <div id="carouselImages" class="h-full flex transition-transform duration-500 ease-out">
          ${a.images.map(p=>`
            <div class="min-w-full h-full flex items-center justify-center">
              <img src="${p}" loading="lazy" class="max-w-full max-h-full object-contain" alt="${a.title} screenshot">
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
          ${a.images.map((p,r)=>`<button class="carousel-indicator w-2 h-2 rounded-full transition-all" data-index="${r}"></button>`).join("")}
        </div>
      </div>`:"",d=`
      <div class="mb-6">
        <div class="flex flex-wrap gap-2 mb-4">
          ${a.tags.map(p=>`<span class="text-xs font-mono bg-accent/10 dark:bg-accent/20 text-accent px-2 py-1 rounded">${p}</span>`).join("")}
        </div>
        <h2 class="text-2xl font-bold mb-2 text-slate-900 dark:text-white">${a.title}</h2>
        <p class="text-slate-600 dark:text-slate-400">${a.description}</p>
        ${a.link?`<a href="${a.link.url}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-sm font-medium text-accent mt-3 hover:underline underline-offset-2 transition-colors">${a.link.label} <i class="bi bi-arrow-up-right"></i></a>`:""}
      </div>

      ${u}

      <div class="prose dark:prose-invert max-w-none">
        ${a.content}
      </div>
    `;t.innerHTML=d,e.classList.remove("hidden"),document.body.style.overflow="hidden",n=0,l(),(g=document.getElementById("prevSlideBtn"))==null||g.addEventListener("click",()=>{const p=k[s].images.length;n=(n-1+p)%p,l()}),(f=document.getElementById("nextSlideBtn"))==null||f.addEventListener("click",()=>{const p=k[s].images.length;n=(n+1)%p,l()}),document.querySelectorAll(".carousel-indicator").forEach(p=>{p.addEventListener("click",()=>{n=parseInt(p.dataset.index,10),l()})})}function o(){e.classList.add("hidden"),document.body.style.overflow=""}i==null||i.addEventListener("click",o),e==null||e.addEventListener("click",m=>{m.target===e&&o()}),document.addEventListener("keydown",m=>{m.key==="Escape"&&!(e!=null&&e.classList.contains("hidden"))&&o()}),window.openProjectModal=c}function H(){window.innerWidth<768||document.querySelectorAll(".card").forEach(e=>{e.addEventListener("mousemove",t=>{const i=e.getBoundingClientRect(),n=(t.clientX-i.left)/i.width-.5,s=(t.clientY-i.top)/i.height-.5;e.style.transform=`perspective(800px) rotateX(${-s*10}deg) rotateY(${n*10}deg) translateY(-4px)`,e.style.transition="transform 0.05s ease"}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.transition="transform 0.5s ease, box-shadow 0.3s ease"})})}function j(){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const e=document.createElement("div");e.id="cursor-dot";const t=document.createElement("div");t.id="cursor-ring",document.body.appendChild(e),document.body.appendChild(t);let i=-200,n=-200,s=-200,l=-200;window.addEventListener("mousemove",o=>{i=o.clientX,n=o.clientY},{passive:!0}),document.querySelectorAll("a, button, .card, .btn-cta").forEach(o=>{o.addEventListener("mouseenter",()=>t.classList.add("expanded")),o.addEventListener("mouseleave",()=>t.classList.remove("expanded"))});function c(){s+=(i-s)*.12,l+=(n-l)*.12,e.style.transform=`translate(${i-3}px, ${n-3}px)`,t.style.transform=`translate(${s-16}px, ${l-16}px)`,requestAnimationFrame(c)}requestAnimationFrame(c)}function N(){window.matchMedia("(hover: hover)").matches&&document.querySelectorAll(".btn-cta").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transition="none"}),e.addEventListener("mousemove",t=>{const i=e.getBoundingClientRect(),n=i.left+i.width/2,s=i.top+i.height/2,l=(t.clientX-n)*.28,c=(t.clientY-s)*.28;e.style.transform=`translate(${l}px, ${c}px)`}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.transition="transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)"})})}const A=["#ef4444","#dc2626","#e11d48","#f43f5e","#fca5a5"],_=62,P=130,I=115,C=32,R=.38;function Y(){const e=document.getElementById("particle-canvas");if(!e)return;const t=e.getContext("2d");let i=[],n=-999,s=-999,l=null;function c(){return document.documentElement.classList.contains("dark")}function o(){const{width:d,height:g}=e;i=Array.from({length:_},()=>({x:Math.random()*d,y:Math.random()*g,vx:(Math.random()-.5)*R*2,vy:(Math.random()-.5)*R*2,r:Math.random()*1.8+1.2,color:A[Math.floor(Math.random()*A.length)],ox:0,oy:0}))}function m(){e.width=e.offsetWidth||window.innerWidth,e.height=e.offsetHeight||window.innerHeight,o()}function a(){const{width:d,height:g}=e,f=c();t.clearRect(0,0,d,g);for(const r of i){const x=r.x-n,v=r.y-s,h=Math.hypot(x,v);if(h<I&&h>1){const b=1-h/I;r.ox+=x/h*b*C*.07,r.oy+=v/h*b*C*.07}r.ox*=.87,r.oy*=.87,r.x+=r.vx,r.y+=r.vy,r.x<-20?r.x=d+20:r.x>d+20&&(r.x=-20),r.y<-20?r.y=g+20:r.y>g+20&&(r.y=-20)}const p=f?.5:.22;for(let r=0;r<i.length-1;r++){const x=i[r],v=x.x+x.ox,h=x.y+x.oy;for(let b=r+1;b<i.length;b++){const y=i[b],w=y.x+y.ox,S=y.y+y.oy,E=Math.hypot(v-w,h-S);E<P&&(t.beginPath(),t.moveTo(v,h),t.lineTo(w,S),t.strokeStyle=`rgba(239,68,68,${((1-E/P)*p).toFixed(3)})`,t.lineWidth=.75,t.stroke())}}t.globalAlpha=f?1:.55;for(const r of i)t.beginPath(),t.arc(r.x+r.ox,r.y+r.oy,r.r,0,Math.PI*2),t.fillStyle=r.color,t.fill();t.globalAlpha=1,l=requestAnimationFrame(a)}e.addEventListener("mousemove",d=>{const g=e.getBoundingClientRect();n=d.clientX-g.left,s=d.clientY-g.top},{passive:!0}),e.addEventListener("mouseleave",()=>{n=-999,s=-999}),new ResizeObserver(()=>{cancelAnimationFrame(l),m(),l=requestAnimationFrame(a)}).observe(e),m(),l=requestAnimationFrame(a)}document.addEventListener("DOMContentLoaded",()=>{O(),T(),$(),D(),q(),H(),j(),N(),Y();const e=document.getElementById("year");e&&(e.textContent=new Date().getFullYear()),B(()=>import("./hero-lanyard-q1-MYcpo.js"),__vite__mapDeps([0,1])).then(t=>t.mountLanyard()).catch(t=>console.warn("Lanyard failed to load:",t))});export{B as _};
