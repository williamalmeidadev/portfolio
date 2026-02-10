export type Lang = 'pt-BR' | 'en'

export const LANG_OPTIONS: Array<{ code: Lang; label: string }> = [
  { code: 'pt-BR', label: 'PT-BR' },
  { code: 'en', label: 'EN' }
]

const strings = {
  'pt-BR': {
    nav: {
      home: 'Início',
      about: 'Sobre',
      experience: 'Experiência',
      technologies: 'Tecnologias',
      projects: 'Projetos',
      certificates: 'Certificados',
      contact: 'Contato'
    },
    hero: {
      eyebrow: 'Desenvolvedor Full Stack',
      title: 'William Almeida',
      description:
        'Construo interfaces modernas, sistemas eficientes e soluções reais usando tecnologia de forma prática e objetiva.',
      photoAlt: 'Foto de William Almeida',
      ctaProjects: 'Ver projetos',
      ctaAbout: 'Minha trajetória'
    },
    about: {
      title: 'Sobre mim',
      paragraphs: [
        'Sou desenvolvedor de sistemas, tenho 18 anos e sou movido pela curiosidade e pelo interesse constante em tecnologia.',
        'Tenho afinidade com olimpíadas científicas e tecnológicas, já participei de competições nacionais e conquistei medalhas.',
        'Sou autodidata e foco meus estudos no desenvolvimento web full stack, criando interfaces modernas e sistemas bem estruturados com boas práticas e eficiência.',
        'Também tenho grande interesse por Inteligência Artificial, Machine Learning e Visão Computacional, áreas que considero essenciais para o futuro da tecnologia e da inovação.'
      ],
      galleryCta: 'Ver notícia'
    },
    experience: {
      title: 'Experiência'
    },
    technologies: {
      title: 'Tecnologias'
    },
    projects: {
      title: 'Projetos',
      liveLabel: 'Testar'
    },
    certificates: {
      title: 'Estudos & Certificados'
    },
    carousel: {
      prev: 'Anterior',
      next: 'Próximo'
    },
    contact: {
      title: 'Contato',
      description: 'Quer conversar sobre projetos, ideias ou oportunidades?',
      email: 'Email'
    },
    aria: {
      themeToggle: 'Alternar tema',
      langToggle: 'Trocar idioma'
    },
    theme: {
      light: 'Claro',
      dark: 'Escuro'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      technologies: 'Technologies',
      projects: 'Projects',
      certificates: 'Certificates',
      contact: 'Contact'
    },
    hero: {
      eyebrow: 'Full Stack Developer',
      title: 'William Almeida',
      description:
        'I build modern interfaces, efficient systems, and real solutions using technology in a practical, objective way.',
      photoAlt: 'Photo of William Almeida',
      ctaProjects: 'View projects',
      ctaAbout: 'My journey'
    },
    about: {
      title: 'About me',
      paragraphs: [
        'I am a systems developer, 18 years old, driven by curiosity and a constant interest in technology.',
        'I enjoy scientific and tech olympiads, have competed nationally, and earned medals.',
        'I am self-taught and focus my studies on full stack web development, creating modern interfaces and well-structured systems with best practices and efficiency.',
        'I am also very interested in Artificial Intelligence, Machine Learning, and Computer Vision, which I see as essential to the future of technology and innovation.'
      ],
      galleryCta: 'Read article'
    },
    experience: {
      title: 'Experience'
    },
    technologies: {
      title: 'Technologies'
    },
    projects: {
      title: 'Projects',
      liveLabel: 'Live'
    },
    certificates: {
      title: 'Studies & Certificates'
    },
    carousel: {
      prev: 'Previous',
      next: 'Next'
    },
    contact: {
      title: 'Contact',
      description: 'Want to talk about projects, ideas, or opportunities?',
      email: 'Email'
    },
    aria: {
      themeToggle: 'Toggle theme',
      langToggle: 'Switch language'
    },
    theme: {
      light: 'Light',
      dark: 'Dark'
    }
  }
} as const satisfies Record<Lang, unknown>

export type Strings = (typeof strings)[Lang]

export function getStrings(lang: Lang): Strings {
  return strings[lang]
}
