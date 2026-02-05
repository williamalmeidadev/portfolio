import { useEffect, useState } from 'react'

const NAV_THRESHOLD = 0.5

export function useActiveSection() {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const sections = document.querySelectorAll('main section')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const id = entry.target.id
          if (id) setActiveId(id)
        })
      },
      { threshold: NAV_THRESHOLD }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return activeId
}
