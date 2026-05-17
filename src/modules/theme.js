export function initTheme() {
  const html = document.documentElement
  const btn = document.getElementById('themeToggle')

  // Default is dark; respect explicit light override only
  if (localStorage.theme === 'light') {
    html.classList.remove('dark')
  } else {
    html.classList.add('dark')
  }

  btn?.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      html.classList.add('dark')
      localStorage.theme = 'dark'
    }
  })
}
