import { useEffect, type RefObject } from 'react'

export function useIntersectionObserver(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const targets = ref.current?.querySelectorAll('.fade-in-up') ?? []
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [ref])
}
