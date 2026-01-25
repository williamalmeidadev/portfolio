// Migração das animações GSAP do projeto JS puro para Vite/React
// Este arquivo deve ser importado e adaptado nos componentes React conforme necessário
// Algumas funções e seletores precisarão ser convertidos para hooks e refs

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Exemplo de função para animação do Hero (deve ser chamada em useEffect do componente Hero)
export function heroAnimation(heroRef: React.RefObject<HTMLElement>) {
  if (!heroRef.current) return;
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 1 }
    });
    tl.set('.hero-foto img', { y: 50, opacity: 0 })
      .set('.hero-texto .eyebrow', { y: 30, opacity: 0 })
      .set('.hero-texto h1', { y: 40, opacity: 0 })
      .set('.hero-texto p', { y: 30, opacity: 0 })
      .set('.hero-botoes .btn-primary, .hero-botoes .btn-outline', { y: 10, opacity: 0 })
      .to('.hero-foto img', { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' })
      .to('.hero-texto .eyebrow', { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
      .to('.hero-texto h1', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.5')
      .to('.hero-texto p', { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
      .to('.hero-botoes .btn-primary, .hero-botoes .btn-outline', { y: 0, opacity: 1, duration: 0.3, stagger: 0.12 }, '-=0.7');
  }, heroRef);
  return () => ctx.revert();
}

// Outras animações podem ser migradas de forma semelhante, usando hooks e refs
// Recomenda-se criar um arquivo por seção ou um hook customizado para cada animação

// TODO: Migrar as demais animações e utilitários para hooks e funções reutilizáveis
