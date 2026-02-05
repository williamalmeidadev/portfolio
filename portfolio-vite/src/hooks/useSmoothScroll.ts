import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    const pillLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-pill a, .nav-overlay-links a')

    const handlers: Array<[(e: Event) => void, HTMLAnchorElement]> = []

    pillLinks.forEach(link => {
      const handler = (e: Event) => {
        e.preventDefault()
        const href = link.getAttribute('href')
        if (!href) return
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
      }
      link.addEventListener('click', handler)
      handlers.push([handler, link])
    })

    return () => {
      handlers.forEach(([handler, link]) => link.removeEventListener('click', handler))
    }
  }, [])
}
