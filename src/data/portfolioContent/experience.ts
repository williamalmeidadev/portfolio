import type { ExperienceItem } from './types'

export function getExperience(isPt: boolean): readonly ExperienceItem[] {
  return [
    {
      title: isPt ? 'Aspirante à Desenvolvedor - Alpha Edtech' : 'Aspiring Developer - Alpha Edtech',
      period: '2025',
      description: isPt
        ? 'Atualmente em estudo focado em desenvolvimento web full stack, aprimorando habilidades em front-end e back-end.'
        : 'Currently studying full stack web development, improving front-end and back-end skills.'
    },
    {
      title: isPt
        ? 'Estágio em Desenvolvimento Web - Ouvidoria do Estado do Ceará'
        : 'Web Development Internship - Ceará State Ombudsman',
      period: isPt ? 'Ago 2025 - Dez 2025' : 'Aug 2025 - Dec 2025',
      description: isPt
        ? 'Desenvolvimento de aplicações front-end e back-end, criação de APIs e manutenção de sistemas internos. Utilização de Java e Angular.'
        : 'Front-end and back-end development, API creation, and maintenance of internal systems. Using Java and Angular.'
    }
  ] as const
}