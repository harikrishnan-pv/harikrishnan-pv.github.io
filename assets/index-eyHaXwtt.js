(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}})();function O(){const e=document.documentElement,t=document.getElementById("themeToggle");localStorage.theme==="light"?e.classList.remove("dark"):e.classList.add("dark"),t==null||t.addEventListener("click",()=>{e.classList.contains("dark")?(e.classList.remove("dark"),localStorage.theme="light"):(e.classList.add("dark"),localStorage.theme="dark")})}function R(){const e=document.getElementById("mobileMenuBtn"),t=document.getElementById("closeMenuBtn"),i=document.getElementById("mobileMenu"),n=document.getElementById("scroll-progress"),s=document.querySelector(".parallax-hero");function l(){i==null||i.classList.remove("translate-x-full"),document.body.style.overflow="hidden"}function m(){i==null||i.classList.add("translate-x-full"),document.body.style.overflow=""}e==null||e.addEventListener("click",l),t==null||t.addEventListener("click",m),document.querySelectorAll(".mobile-link").forEach(o=>{o.addEventListener("click",m)});let g=!1;window.addEventListener("scroll",()=>{g||(g=!0,requestAnimationFrame(()=>{const o=window.scrollY,d=document.documentElement.scrollHeight-window.innerHeight,c=d>0?o/d:0;n&&(n.style.width=`${c*100}%`),s&&o<window.innerHeight*1.2&&(s.style.transform=`translateY(${o*.22}px)`),g=!1}))},{passive:!0});const u=document.querySelectorAll("section[id], footer[id]"),r=document.querySelectorAll('.nav-link[href^="#"]'),h=new IntersectionObserver(o=>{o.forEach(d=>{if(d.isIntersecting){const c=d.target.getAttribute("id");r.forEach(x=>{x.classList.toggle("active",x.getAttribute("href")===`#${c}`)})}})},{threshold:.4});u.forEach(o=>h.observe(o))}function C(){const e=document.getElementById("typewriter-text"),t=document.getElementById("typewriter-cursor");if(!e)return;const i="Founding Engineer & Full Stack Developer";let n=0;const s=setInterval(()=>{n<i.length?(e.textContent+=i[n],n++):(clearInterval(s),t==null||t.classList.add("blink"))},40)}function F(){const e=new IntersectionObserver(i=>{i.forEach(n=>{n.isIntersecting&&(n.target.classList.add("is-visible"),e.unobserve(n.target))})},{threshold:.08});document.querySelectorAll("[data-reveal]").forEach(i=>e.observe(i));const t=document.querySelector(".timeline-container");if(t){const i=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),i.unobserve(s.target))})},{threshold:.05});i.observe(t)}}const k={brixline:{title:"Brixline - Real Estate Platform Frontend",tags:["Next.js 15","React 19","TypeScript","Tailwind CSS","AWS"],description:"A cutting-edge, production-grade real estate platform built with Next.js 15 and React 19, serving the Indian property market. Brixline helps users discover, finance, and secure properties through an intuitive digital interface.",images:["images/brixline/home.png","images/brixline/detail.png","images/brixline/dashboard.png"],content:`
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
    `},reflex:{title:"Optical Retail ERP",tags:["Next.js 15","Supabase","TypeScript","Bun","Edge Functions"],description:"A comprehensive optical/eye care business management platform that streamlines operations for optical stores, eye camps, and fitting labs across India. It combines clinical eye care, retail operations, and business management into a unified, scalable solution.",images:["images/reflex/dashboard.png"],content:`
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
    `}};function $(){const e=document.getElementById("projectModal"),t=document.getElementById("modalBody"),i=document.getElementById("closeModalBtn");let n=0,s="";function l(){const u=document.getElementById("carouselImages");u&&(u.style.transform=`translateX(-${n*100}%)`,document.querySelectorAll(".carousel-indicator").forEach((r,h)=>{const o=h===n;r.classList.toggle("bg-accent",o),r.classList.toggle("opacity-100",o),r.classList.toggle("bg-white/40",!o),r.classList.toggle("opacity-60",!o)}))}function m(u){var o,d;s=u;const r=k[u];if(!r)return;const h=`
      <div class="mb-6">
        <div class="flex flex-wrap gap-2 mb-4">
          ${r.tags.map(c=>`<span class="text-xs font-mono bg-accent/10 dark:bg-accent/20 text-accent px-2 py-1 rounded">${c}</span>`).join("")}
        </div>
        <h2 class="text-2xl font-bold mb-2 text-slate-900 dark:text-white">${r.title}</h2>
        <p class="text-slate-600 dark:text-slate-400">${r.description}</p>
      </div>

      <div class="relative mb-8 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800/50 aspect-video border border-black/5 dark:border-white/5">
        <div id="carouselImages" class="h-full flex transition-transform duration-500 ease-out">
          ${r.images.map(c=>`
            <div class="min-w-full h-full flex items-center justify-center">
              <img src="${c}" loading="lazy" class="max-w-full max-h-full object-contain" alt="${r.title} screenshot">
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
          ${r.images.map((c,x)=>`<button class="carousel-indicator w-2 h-2 rounded-full transition-all" data-index="${x}"></button>`).join("")}
        </div>
      </div>

      <div class="prose dark:prose-invert max-w-none">
        ${r.content}
      </div>
    `;t.innerHTML=h,e.classList.remove("hidden"),document.body.style.overflow="hidden",n=0,l(),(o=document.getElementById("prevSlideBtn"))==null||o.addEventListener("click",()=>{const c=k[s].images.length;n=(n-1+c)%c,l()}),(d=document.getElementById("nextSlideBtn"))==null||d.addEventListener("click",()=>{const c=k[s].images.length;n=(n+1)%c,l()}),document.querySelectorAll(".carousel-indicator").forEach(c=>{c.addEventListener("click",()=>{n=parseInt(c.dataset.index,10),l()})})}function g(){e.classList.add("hidden"),document.body.style.overflow=""}i==null||i.addEventListener("click",g),e==null||e.addEventListener("click",u=>{u.target===e&&g()}),document.addEventListener("keydown",u=>{u.key==="Escape"&&!(e!=null&&e.classList.contains("hidden"))&&g()}),window.openProjectModal=m}function P(){window.innerWidth<768||document.querySelectorAll(".card").forEach(e=>{e.addEventListener("mousemove",t=>{const i=e.getBoundingClientRect(),n=(t.clientX-i.left)/i.width-.5,s=(t.clientY-i.top)/i.height-.5;e.style.transform=`perspective(800px) rotateX(${-s*10}deg) rotateY(${n*10}deg) translateY(-4px)`,e.style.transition="transform 0.05s ease"}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.transition="transform 0.5s ease, box-shadow 0.3s ease"})})}function T(){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const e=document.createElement("div");e.id="cursor-dot";const t=document.createElement("div");t.id="cursor-ring",document.body.appendChild(e),document.body.appendChild(t);let i=-200,n=-200,s=-200,l=-200;window.addEventListener("mousemove",g=>{i=g.clientX,n=g.clientY},{passive:!0}),document.querySelectorAll("a, button, .card, .btn-cta").forEach(g=>{g.addEventListener("mouseenter",()=>t.classList.add("expanded")),g.addEventListener("mouseleave",()=>t.classList.remove("expanded"))});function m(){s+=(i-s)*.12,l+=(n-l)*.12,e.style.transform=`translate(${i-3}px, ${n-3}px)`,t.style.transform=`translate(${s-16}px, ${l-16}px)`,requestAnimationFrame(m)}requestAnimationFrame(m)}function q(){window.matchMedia("(hover: hover)").matches&&document.querySelectorAll(".btn-cta").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transition="none"}),e.addEventListener("mousemove",t=>{const i=e.getBoundingClientRect(),n=i.left+i.width/2,s=i.top+i.height/2,l=(t.clientX-n)*.28,m=(t.clientY-s)*.28;e.style.transform=`translate(${l}px, ${m}px)`}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.transition="transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)"})})}const L=["#6366f1","#8b5cf6","#818cf8","#a78bfa","#c4b5fd"],D=62,I=130,A=115,B=32,M=.38;function j(){const e=document.getElementById("particle-canvas");if(!e)return;const t=e.getContext("2d");let i=[],n=-999,s=-999,l=null;function m(){return document.documentElement.classList.contains("dark")}function g(){const{width:o,height:d}=e;i=Array.from({length:D},()=>({x:Math.random()*o,y:Math.random()*d,vx:(Math.random()-.5)*M*2,vy:(Math.random()-.5)*M*2,r:Math.random()*1.8+1.2,color:L[Math.floor(Math.random()*L.length)],ox:0,oy:0}))}function u(){e.width=e.offsetWidth||window.innerWidth,e.height=e.offsetHeight||window.innerHeight,g()}function r(){const{width:o,height:d}=e,c=m();t.clearRect(0,0,o,d);for(const a of i){const f=a.x-n,v=a.y-s,p=Math.hypot(f,v);if(p<A&&p>1){const b=1-p/A;a.ox+=f/p*b*B*.07,a.oy+=v/p*b*B*.07}a.ox*=.87,a.oy*=.87,a.x+=a.vx,a.y+=a.vy,a.x<-20?a.x=o+20:a.x>o+20&&(a.x=-20),a.y<-20?a.y=d+20:a.y>d+20&&(a.y=-20)}const x=c?.5:.22;for(let a=0;a<i.length-1;a++){const f=i[a],v=f.x+f.ox,p=f.y+f.oy;for(let b=a+1;b<i.length;b++){const y=i[b],w=y.x+y.ox,E=y.y+y.oy,S=Math.hypot(v-w,p-E);S<I&&(t.beginPath(),t.moveTo(v,p),t.lineTo(w,E),t.strokeStyle=`rgba(99,102,241,${((1-S/I)*x).toFixed(3)})`,t.lineWidth=.75,t.stroke())}}t.globalAlpha=c?1:.55;for(const a of i)t.beginPath(),t.arc(a.x+a.ox,a.y+a.oy,a.r,0,Math.PI*2),t.fillStyle=a.color,t.fill();t.globalAlpha=1,l=requestAnimationFrame(r)}e.addEventListener("mousemove",o=>{const d=e.getBoundingClientRect();n=o.clientX-d.left,s=o.clientY-d.top},{passive:!0}),e.addEventListener("mouseleave",()=>{n=-999,s=-999}),new ResizeObserver(()=>{cancelAnimationFrame(l),u(),l=requestAnimationFrame(r)}).observe(e),u(),l=requestAnimationFrame(r)}document.addEventListener("DOMContentLoaded",()=>{O(),R(),C(),F(),$(),P(),T(),q(),j();const e=document.getElementById("year");e&&(e.textContent=new Date().getFullYear())});
