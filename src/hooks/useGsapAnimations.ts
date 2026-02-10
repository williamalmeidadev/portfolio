import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapAnimations() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!rootRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const cleanups: Array<() => void> = []

    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1 }
      })

      heroTimeline
        .set('.hero-photo img', { y: 50, opacity: 0 })
        .set('.hero-text .eyebrow', { y: 30, opacity: 0 })
        .set('.hero-text h1', { y: 40, opacity: 0 })
        .set('.hero-text p', { y: 30, opacity: 0 })
        .set('.hero-actions .btn-primary, .hero-actions .btn-outline', { y: 10, opacity: 0 })
        .to('.hero-photo img', { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' })
        .to('.hero-text .eyebrow', { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
        .to('.hero-text h1', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.5')
        .to('.hero-text p', { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
        .to(
          '.hero-actions .btn-primary, .hero-actions .btn-outline',
          { y: 0, opacity: 1, duration: 0.3, stagger: 0.12 },
          '-=0.7'
        )

      const isMobile = window.matchMedia('(max-width: 767px)').matches
      const startPrimary = isMobile ? 'top 90%' : 'top 75%'
      const startSecondary = isMobile ? 'top 90%' : 'top 70%'
      const media = gsap.matchMedia()

      media.add('(max-width: 767px)', () => {
        gsap.from('.about-gallery', {
          scrollTrigger: {
            trigger: '#about',
            start: startPrimary,
            toggleActions: 'play reverse play reverse'
          },
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        })

        gsap.from('.about-text', {
          scrollTrigger: {
            trigger: '#about',
            start: startPrimary,
            toggleActions: 'play reverse play reverse'
          },
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        })
      })

      media.add('(min-width: 768px)', () => {
        gsap.from('.about-gallery', {
          scrollTrigger: {
            trigger: '#about',
            start: startPrimary,
            toggleActions: 'play reverse play reverse'
          },
          x: -60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        })

        gsap.from('.about-text', {
          scrollTrigger: {
            trigger: '#about',
            start: startPrimary,
            toggleActions: 'play reverse play reverse'
          },
          x: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        })
      })

      gsap.from('.about-text h2', {
        scrollTrigger: {
          trigger: '#about',
          start: startSecondary,
          toggleActions: 'play reverse play reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })

      gsap.from('.about-text p', {
        scrollTrigger: {
          trigger: '#about',
          start: startSecondary,
          toggleActions: 'play reverse play reverse'
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      })

      gsap.from('#experience h2', {
        scrollTrigger: {
          trigger: '#experience',
          start: startPrimary,
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

      gsap.from('#technologies h2', {
        scrollTrigger: {
          trigger: '#technologies',
          start: startPrimary,
          toggleActions: 'play reverse play reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out'
      })

      gsap.from('.tech-description', {
        scrollTrigger: {
          trigger: '#technologies',
          start: startSecondary,
          toggleActions: 'play reverse play reverse'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })

      gsap.from('.tech-web .tech-node', {
        scrollTrigger: {
          trigger: '#technologies',
          start: startSecondary,
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

      gsap.from('#projects h2', {
        scrollTrigger: {
          trigger: '#projects',
          start: startPrimary,
          toggleActions: 'play reverse play reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out'
      })

      media.add('(max-width: 767px)', () => {
        gsap.from('.projects-grid .project-card', {
          scrollTrigger: {
            trigger: '.projects-grid',
            start: startSecondary,
            toggleActions: 'play reverse play reverse'
          },
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out'
        })

        gsap.from('.certificates-grid .certificate-card', {
          scrollTrigger: {
            trigger: '.certificates-grid',
            start: startSecondary,
            toggleActions: 'play reverse play reverse'
          },
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out'
        })
      })

      media.add('(min-width: 768px)', () => {
        gsap.from('.projects-grid .project-card', {
          scrollTrigger: {
            trigger: '.projects-grid',
            start: startSecondary,
            toggleActions: 'play reverse play reverse'
          },
          y: 50,
          opacity: 0,
          scale: 0.95,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out'
        })

        gsap.from('.certificates-grid .certificate-card', {
          scrollTrigger: {
            trigger: '.certificates-grid',
            start: startSecondary,
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
      })

      gsap.from('#certificates h2', {
        scrollTrigger: {
          trigger: '#certificates',
          start: startPrimary,
          toggleActions: 'play reverse play reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out'
      })

      cleanups.push(() => media.revert())

      gsap.from('#contact h2', {
        scrollTrigger: {
          trigger: '#contact',
          start: startPrimary,
          toggleActions: 'play none none none',
          once: true
        },
        y: 40,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out'
      })

      gsap.from('.contact-text', {
        scrollTrigger: {
          trigger: '#contact',
          start: startSecondary,
          toggleActions: 'play none none none',
          once: true
        },
        y: 20,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.out'
      })

      gsap.from('.contact-actions .contact-button', {
        scrollTrigger: {
          trigger: '#contact',
          start: startSecondary,
          toggleActions: 'play none none none',
          once: true
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

      const heroFoto = document.querySelector<HTMLElement>('.hero-photo img')

      if (heroFoto) {
        const xTo = gsap.quickTo(heroFoto, 'rotationY', { duration: 0.5, ease: 'power1.out' })
        const yTo = gsap.quickTo(heroFoto, 'rotationX', { duration: 0.5, ease: 'power1.out' })
        const scaleTo = gsap.quickTo(heroFoto, 'scale', { duration: 0.5, ease: 'power1.out' })

        gsap.set('.hero-photo', { perspective: 1200 })

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

      document.querySelectorAll<HTMLElement>('.certificate-card').forEach(card => {
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
    }, rootRef)

    return () => {
      cleanups.forEach(cleanup => cleanup())
      ctx.revert()
    }
  }, [])

  return rootRef
}
