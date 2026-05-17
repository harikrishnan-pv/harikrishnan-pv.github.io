export function initTypewriter() {
  const el = document.getElementById('typewriter-text')
  const cursor = document.getElementById('typewriter-cursor')
  if (!el) return

  const text = 'Founding Engineer & Full Stack Developer'
  let i = 0

  const interval = setInterval(() => {
    if (i < text.length) {
      el.textContent += text[i]
      i++
    } else {
      clearInterval(interval)
      cursor?.classList.add('blink')
    }
  }, 40)
}
