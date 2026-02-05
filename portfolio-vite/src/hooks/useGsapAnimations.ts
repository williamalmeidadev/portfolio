import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapAnimations() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!rootRef.current) return

    const ctx = gsap.context(() => {
      const cleanups: Array<() => void> = []
      const heroTimeline = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1 }
      })

      heroTimeline
        .set('.hero-foto img', { y: 50, opacity: 0 })
        .set('.hero-texto .eyebrow', { y: 30, opacity: 0 })
        .set('.hero-texto h1', { y: 40, opacity: 0 })
        .set('.hero-texto p', { y: 30, opacity: 0 })
        .set('.hero-botoes .btn-primary, .hero-botoes .btn-outline', { y: 10, opacity: 0 })
        .to('.hero-foto img', { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' })
        .to('.hero-texto .eyebrow', { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
        .to('.hero-texto h1', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.5')
        .to('.hero-texto p', { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
        .to(
          '.hero-botoes .btn-primary, .hero-botoes .btn-outline',
          { y: 0, opacity: 1, duration: 0.3, stagger: 0.12 },
          '-=0.7'
        )

      gsap.from('.sobre-galeria-focus', {
        scrollTrigger: {
          trigger: '#sobre',
          start: 'top 75%',
          toggleActions: 'play reverse play reverse'
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      gsap.from('.sobre-texto', {
        scrollTrigger: {
          trigger: '#sobre',
          start: 'top 75%',
          toggleActions: 'play reverse play reverse'
        },
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      gsap.from('.sobre-texto h2', {
        scrollTrigger: {
          trigger: '#sobre',
          start: 'top 70%',
          toggleActions: 'play reverse play reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })

      gsap.from('.sobre-texto p', {
        scrollTrigger: {
          trigger: '#sobre',
          start: 'top 70%',
          toggleActions: 'play reverse play reverse'
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      })

      gsap.from('#experiencia h2', {
        scrollTrigger: {
          trigger: '#experiencia',
          start: 'top 75%',
          toggleActions: 'play reverse play reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out'
      })

      ScrollTrigger.create({
        trigger: '.timeline',
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: 1,
        onUpdate: self => {
          const timeline = document.querySelector<HTMLElement>('.timeline')
          if (!timeline) return
          timeline.style.setProperty('--line-scale', String(self.progress))
        }
      })

      document.querySelectorAll<HTMLElement>('.timeline-dot').forEach((dot, index, dots) => {
        gsap.from(dot, {
          scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: 0.5,
            onUpdate: self => {
              const dotThreshold = index / dots.length
              if (self.progress >= dotThreshold) {
                gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(2)' })
              }
            }
          },
          scale: 0,
          opacity: 0
        })
      })

      document.querySelectorAll<HTMLElement>('.timeline-item').forEach((item, index, items) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: 0.5,
            onUpdate: self => {
              const itemThreshold = index / items.length
              if (self.progress >= itemThreshold + 0.05) {
                gsap.to(item, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' })
              }
            }
          },
          x: -40,
          opacity: 0
        })
      })

      gsap.from('#tecnologias h2', {
        scrollTrigger: {
          trigger: '#tecnologias',
          start: 'top 75%',
          toggleActions: 'play reverse play reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out'
      })

      gsap.from('.tech-descricao', {
        scrollTrigger: {
          trigger: '#tecnologias',
          start: 'top 70%',
          toggleActions: 'play reverse play reverse'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })

      gsap.from('.tech-stack .skill', {
        scrollTrigger: {
          trigger: '#tecnologias',
          start: 'top 70%',
          toggleActions: 'play reverse play reverse'
        },
        y: 40,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.08,
        ease: 'back.out(1.2)',
        clearProps: 'all'
      })

      gsap.from('#projetos h2', {
        scrollTrigger: {
          trigger: '#projetos',
          start: 'top 75%',
          toggleActions: 'play reverse play reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out'
      })

      gsap.from('.projects-grid .project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 70%',
          toggleActions: 'play reverse play reverse'
        },
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out'
      })

      gsap.from('#certificados h2', {
        scrollTrigger: {
          trigger: '#certificados',
          start: 'top 75%',
          toggleActions: 'play reverse play reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out'
      })

      gsap.from('.certificados-grid .certificado-card', {
        scrollTrigger: {
          trigger: '.certificados-grid',
          start: 'top 70%',
          toggleActions: 'play reverse play reverse'
        },
        y: 50,
        opacity: 0,
        scale: 0.9,
        rotation: -3,
        duration: 0.7,
        stagger: {
          amount: 0.6,
          from: 'start',
          ease: 'power1.inOut'
        },
        ease: 'back.out(1.1)'
      })

      gsap.from('#contato h2', {
        scrollTrigger: {
          trigger: '#contato',
          start: 'top 75%',
          toggleActions: 'play reverse play reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out'
      })

      gsap.from('.contato-texto', {
        scrollTrigger: {
          trigger: '#contato',
          start: 'top 70%',
          toggleActions: 'play reverse play reverse'
        },
        y: 20,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.out'
      })

      gsap.from('.contato-botoes .contato-btn', {
        scrollTrigger: {
          trigger: '#contato',
          start: 'top 70%',
          toggleActions: 'play reverse play reverse'
        },
        y: 30,
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        stagger: 0.06,
        ease: 'back.out(1.5)',
        clearProps: 'all'
      })

      const handleRefresh = () => ScrollTrigger.refresh()
      window.addEventListener('load', handleRefresh)
      cleanups.push(() => window.removeEventListener('load', handleRefresh))

      const heroFoto = document.querySelector<HTMLElement>('.hero-foto img')

      if (heroFoto) {
        const xTo = gsap.quickTo(heroFoto, 'rotationY', { duration: 0.5, ease: 'power1.out' })
        const yTo = gsap.quickTo(heroFoto, 'rotationX', { duration: 0.5, ease: 'power1.out' })
        const scaleTo = gsap.quickTo(heroFoto, 'scale', { duration: 0.5, ease: 'power1.out' })

        gsap.set('.hero-foto', { perspective: 1200 })

        const handleMove = (e: MouseEvent) => {
          const rect = heroFoto.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          const rotateX = ((y - centerY) / centerY) * -15
          const rotateY = ((x - centerX) / centerX) * 15
          yTo(rotateX)
          xTo(rotateY)
          scaleTo(1.08)
        }

        const handleLeave = () => {
          yTo(0)
          xTo(0)
          scaleTo(1)
        }

        heroFoto.addEventListener('mousemove', handleMove)
        heroFoto.addEventListener('mouseleave', handleLeave)

        cleanups.push(() => {
          heroFoto.removeEventListener('mousemove', handleMove)
          heroFoto.removeEventListener('mouseleave', handleLeave)
        })
      }

      document.querySelectorAll<HTMLElement>('.certificado-card').forEach(card => {
        const xTo = gsap.quickTo(card, 'rotationY', { duration: 0.6, ease: 'power1.out' })
        const yTo = gsap.quickTo(card, 'rotationX', { duration: 0.6, ease: 'power1.out' })
        const scaleTo = gsap.quickTo(card, 'scale', { duration: 0.6, ease: 'power1.out' })
        const zTo = gsap.quickTo(card, 'z', { duration: 0.6, ease: 'power1.out' })

        if (card.parentElement) gsap.set(card.parentElement, { perspective: 1500 })

        const handleMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          const rotateX = ((y - centerY) / centerY) * -12
          const rotateY = ((x - centerX) / centerX) * 12
          yTo(rotateX)
          xTo(rotateY)
          scaleTo(1.06)
          zTo(30)
        }

        const handleLeave = () => {
          yTo(0)
          xTo(0)
          scaleTo(1)
          zTo(0)
        }

        card.addEventListener('mousemove', handleMove)
        card.addEventListener('mouseleave', handleLeave)

        cleanups.push(() => {
          card.removeEventListener('mousemove', handleMove)
          card.removeEventListener('mouseleave', handleLeave)
        })
      })

      return () => {
        cleanups.forEach(cleanup => cleanup())
      }
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return rootRef
}
