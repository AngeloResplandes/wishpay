export function smoothScrollTo(hash: string, offset = 88) {
  if (!hash || hash === '#') return
  const target = document.querySelector(hash)
  if (!target) return
  const y = target.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top: y, behavior: 'smooth' })
}
