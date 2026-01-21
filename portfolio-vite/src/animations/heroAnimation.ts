import type { RefObject } from 'react'
import { gsap } from 'gsap'

export function heroAnimation(heroRef: RefObject<HTMLElement>) {
  if (!heroRef.current) return

  const tl = gsap.timeline()

  tl.fromTo(
    heroRef.current.querySelector('.hero-foto'),
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  )
  .fromTo(
    heroRef.current.querySelector('.hero-texto'),
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
    '-=0.5'
  )
  .fromTo(
    heroRef.current.querySelectorAll('.hero-botoes a'),
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: 'power2.out' },
    '-=0.4'
  )
}
