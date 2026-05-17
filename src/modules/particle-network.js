const COLORS = ['#6366f1', '#8b5cf6', '#818cf8', '#a78bfa', '#c4b5fd']
const NODE_COUNT = 62
const MAX_DIST = 130
const MOUSE_RADIUS = 115
const MOUSE_FORCE = 32
const BASE_SPEED = 0.38

export function initParticleNetwork() {
  const canvas = document.getElementById('particle-canvas')
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  let nodes = []
  let mouseX = -999
  let mouseY = -999
  let animId = null

  function isDark() {
    return document.documentElement.classList.contains('dark')
  }

  function init() {
    const { width, height } = canvas
    nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * BASE_SPEED * 2,
      vy: (Math.random() - 0.5) * BASE_SPEED * 2,
      r: Math.random() * 1.8 + 1.2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      ox: 0,
      oy: 0,
    }))
  }

  function setSize() {
    canvas.width = canvas.offsetWidth || window.innerWidth
    canvas.height = canvas.offsetHeight || window.innerHeight
    init()
  }

  function loop() {
    const { width, height } = canvas
    const dark = isDark()

    ctx.clearRect(0, 0, width, height)

    // Update nodes
    for (const n of nodes) {
      const dx = n.x - mouseX
      const dy = n.y - mouseY
      const dist = Math.hypot(dx, dy)

      if (dist < MOUSE_RADIUS && dist > 1) {
        const t = 1 - dist / MOUSE_RADIUS
        n.ox += (dx / dist) * t * MOUSE_FORCE * 0.07
        n.oy += (dy / dist) * t * MOUSE_FORCE * 0.07
      }
      n.ox *= 0.87
      n.oy *= 0.87

      n.x += n.vx
      n.y += n.vy

      if (n.x < -20) n.x = width + 20
      else if (n.x > width + 20) n.x = -20
      if (n.y < -20) n.y = height + 20
      else if (n.y > height + 20) n.y = -20
    }

    // Draw connections
    const lineAlphaMax = dark ? 0.5 : 0.22
    for (let i = 0; i < nodes.length - 1; i++) {
      const a = nodes[i]
      const ax = a.x + a.ox
      const ay = a.y + a.oy
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j]
        const bx = b.x + b.ox
        const by = b.y + b.oy
        const d = Math.hypot(ax - bx, ay - by)
        if (d < MAX_DIST) {
          ctx.beginPath()
          ctx.moveTo(ax, ay)
          ctx.lineTo(bx, by)
          ctx.strokeStyle = `rgba(99,102,241,${((1 - d / MAX_DIST) * lineAlphaMax).toFixed(3)})`
          ctx.lineWidth = 0.75
          ctx.stroke()
        }
      }
    }

    // Draw nodes
    ctx.globalAlpha = dark ? 1 : 0.55
    for (const n of nodes) {
      ctx.beginPath()
      ctx.arc(n.x + n.ox, n.y + n.oy, n.r, 0, Math.PI * 2)
      ctx.fillStyle = n.color
      ctx.fill()
    }
    ctx.globalAlpha = 1

    animId = requestAnimationFrame(loop)
  }

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect()
    mouseX = e.clientX - rect.left
    mouseY = e.clientY - rect.top
  }, { passive: true })

  canvas.addEventListener('mouseleave', () => {
    mouseX = -999
    mouseY = -999
  })

  const ro = new ResizeObserver(() => {
    cancelAnimationFrame(animId)
    setSize()
    animId = requestAnimationFrame(loop)
  })
  ro.observe(canvas)

  setSize()
  animId = requestAnimationFrame(loop)
}
