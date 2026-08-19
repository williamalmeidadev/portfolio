import { useEffect } from 'react'

export function useNavUnderline(activeId: string, dependencyKey: string) {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>('.nav-pill')
    if (!nav) return

    const updateUnderline = () => {
      const links = nav.querySelector<HTMLElement>('.nav-links')
      const underline = nav.querySelector<HTMLElement>('.nav-underline')
      if (!links || !underline) return

      const active = links.querySelector<HTMLElement>('.is-active')
      if (!active) {
        underline.style.opacity = '0'
        return
      }

      const linksRect = links.getBoundingClientRect()
      const linkRect = active.getBoundingClientRect()
      const left = linkRect.left - linksRect.left
      const lineWidth = Math.round(linkRect.width * 0.7)
      underline.style.width = `${lineWidth}px`
      underline.style.transform = `translateX(${left + (linkRect.width - lineWidth) / 2}px)`
      underline.style.opacity = '1'
    }

    updateUnderline()

    const handleResize = () => updateUnderline()
    window.addEventListener('resize', handleResize)

    const observer = new ResizeObserver(() => updateUnderline())
    observer.observe(nav)

    return () => {
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
    }
  }, [activeId, dependencyKey])
}