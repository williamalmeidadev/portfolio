import bd from '../assets/galeria/bd.webp'
import css from '../assets/css.svg'
import ecoacao from '../assets/galeria/ecoacao.webp'
import filealchemist from '../assets/galeria/filealchemist.webp'
import express from '../assets/express.svg'
import google from '../assets/galeria/google.webp'
import html from '../assets/html.svg'
import maratonatech from '../assets/galeria/maratonatech.webp'
import obt from '../assets/galeria/obt.webp'
import placas from '../assets/galeria/placas.webp'
import portfolioreact from '../assets/galeria/portfolioreact.webp'
import solyd from '../assets/galeria/solyd.webp'
import tecnico from '../assets/galeria/tecnico.webp'
import wordmint from '../assets/galeria/wordmint.webp'
import java from '../assets/java.svg'
import javascript from '../assets/javascript.svg'
import nodejs from '../assets/nodejs.svg'
import postgresql from '../assets/postgresql.svg'
import python from '../assets/python.svg'
import reactLogo from '../assets/react.svg'
import spring from '../assets/spring.svg'
import typescript from '../assets/typescript.svg'
import vite from '../assets/vite.svg'
import type { Lang } from '../i18n'

export function getContent(lang: Lang) {
  const isPt = lang === 'pt-BR'

  const aboutGallery = [
    {
      src: obt,
      alt: isPt ? 'OBT 2025' : 'OBT 2025',
      badge: isPt ? 'Prata Nacional' : 'National Silver',
      year: '2025',
      description: isPt
        ? 'Medalha de prata nacional e 3º lugar na modalidade júri especialista na Olimpíada Brasileira de Tecnologia (OBT)'
        : 'National silver medal and 3rd place in the expert jury category at the Brazilian Technology Olympiad (OBT)',
      link:
        'https://www.ceara.gov.br/2025/07/16/escolas-da-rede-estadual-obtem-ouro-prata-e-bronze-na-olimpiada-brasileira-de-tecnologia-2025/'
    },
    {
      src: maratonatech,
      alt: isPt ? 'Maratona Tech' : 'Maratona Tech',
      badge: isPt ? 'Bronze Nacional' : 'National Bronze',
      year: '2025',
      description: isPt
        ? 'Duas vezes medalhista de bronze na Maratona Tech, competição nacional de tecnologia, trazendo também premiação de destaque nordeste para a escola'
        : 'Two-time bronze medalist at Maratona Tech, a national tech competition, also bringing a Northeast highlight award to the school',
      link:
        'https://al.ce.gov.br/noticias/48491-solenidade-na-alece-entrega-medalhas-a-74-alunos-do-ce-premiados-na-maratona-tech'
    }
  ] as const

  const technologies = [
    {
      title: 'Python',
      description: isPt
        ? 'Utilizo Python para automações, lógica de backend, scripts e estudos em inteligência artificial e machine learning.'
        : 'I use Python for automation, backend logic, scripts, and studies in AI and machine learning.',
      img: python
    },
    {
      title: 'JavaScript',
      description: isPt
        ? 'Uso JavaScript para criar interfaces interativas, consumir APIs e desenvolver aplicações web modernas.'
        : 'I use JavaScript to build interactive interfaces, consume APIs, and develop modern web apps.',
      img: javascript
    },
    {
      title: 'HTML',
      description: isPt
        ? 'HTML é a base estrutural das interfaces web, garantindo semântica e acessibilidade.'
        : 'HTML is the structural foundation of web interfaces, ensuring semantics and accessibility.',
      img: html
    },
    {
      title: 'CSS',
      description: isPt
        ? 'Com CSS crio layouts responsivos, animações e identidade visual consistente.'
        : 'With CSS I create responsive layouts, animations, and a consistent visual identity.',
      img: css
    },
    {
      title: 'TypeScript',
      description: isPt
        ? 'Com TypeScript ganho tipagem, previsibilidade e mais segurança ao escalar projetos web.'
        : 'With TypeScript I gain typing, predictability, and more safety when scaling web projects.',
      img: typescript
    },
    {
      title: 'React',
      description: isPt
        ? 'React é minha principal ferramenta no frontend, permitindo criar interfaces componentizadas, performáticas e escaláveis.'
        : 'React is my main frontend tool, enabling componentized, performant, and scalable interfaces.',
      img: reactLogo
    },
    {
      title: 'Node.js',
      description: isPt
        ? 'Uso Node.js para construir APIs, integrações e serviços backend com JavaScript.'
        : 'I use Node.js to build APIs, integrations, and backend services with JavaScript.',
      img: nodejs
    },
    {
      title: 'Express.js',
      description: isPt
        ? 'Express.js me permite criar APIs e rotas leves e rápidas no ecossistema Node.'
        : 'Express.js lets me build fast, lightweight APIs and routes in the Node ecosystem.',
      img: express
    },
    {
      title: 'Vite',
      description: isPt
        ? 'Vite acelera meu desenvolvimento frontend com build rápido e HMR eficiente.'
        : 'Vite speeds up my frontend development with fast builds and efficient HMR.',
      img: vite
    },
    {
      title: 'Java',
      description: isPt
        ? 'Utilizo Java para aplicações robustas, orientação a objetos e projetos acadêmicos com foco em backend.'
        : 'I use Java for robust applications, OOP, and academic projects focused on backend.',
      img: java
    },
    {
      title: 'PostgreSQL',
      description: isPt
        ? 'Uso PostgreSQL para modelagem e gerenciamento de bancos de dados relacionais em sistemas reais.'
        : 'I use PostgreSQL for modeling and managing relational databases in real systems.',
      img: postgresql
    },
    {
      title: 'Spring',
      description: isPt
        ? 'Spring Framework é utilizado para construção de APIs REST seguras e organizadas no ecossistema Java.'
        : 'Spring Framework is used to build secure, organized REST APIs in the Java ecosystem.',
      img: spring
    }
  ] as const

  const projects = [
    {
      img: wordmint,
      title: 'WordMint',
      description: isPt
        ? 'Jogo de adivinhação de palavras no navegador, inspirado nos clássicos de cinco letras, com modo offline, estatísticas persistentes e compartilhamento do resultado em grade de emojis.'
        : 'Browser-based word guessing game inspired by classic five-letter puzzles, with offline play, persistent stats, and shareable emoji-grid results.',
      stack: [
        { title: 'Vite', img: vite },
        { title: 'React', img: reactLogo },
        { title: 'TypeScript', img: typescript },
        { title: 'CSS', img: css }
      ],
      links: [
        { href: 'https://github.com/williamalmeidadev/WordMint', label: 'GitHub', primary: false },
        { href: 'https://williamalmeidadev.github.io/WordMint/', label: isPt ? 'Testar' : 'Live', primary: true }
      ]
    },
    {
      img: filealchemist,
      title: 'FileAlchemist',
      description: isPt
        ? 'Conversor de imagens 100% client-side no navegador, com processamento em lote via Web Worker, ajuste de qualidade, redimensionamento opcional e download em ZIP.'
        : 'A 100% client-side browser image converter with batch processing via Web Worker, quality control, optional resize, and ZIP download.',
      stack: [
        { title: 'Vite', img: vite },
        { title: 'React', img: reactLogo },
        { title: 'TypeScript', img: typescript },
        { title: 'JavaScript', img: javascript },
        { title: 'CSS', img: css }
      ],
      links: [
        { href: 'https://github.com/williamalmeidadev/FileAlchemist', label: 'GitHub', primary: false },
        { href: 'https://williamalmeidadev.github.io/FileAlchemist/', label: isPt ? 'Testar' : 'Live', primary: true }
      ]
    },
    {
      img: portfolioreact,
      title: 'Portfolio React',
      description: isPt
        ? 'Portfolio pessoal desenvolvido com React para apresentar meus projetos e habilidades.'
        : 'Personal portfolio built with React to showcase my projects and skills.',
      stack: [
        { title: 'React', img: reactLogo },
        { title: 'TypeScript', img: typescript },
        { title: 'Vite', img: vite },
        { title: 'CSS', img: css }
      ],
      links: [
        {
          href: 'https://github.com/williamalmeidadev/williamalmeidadev.github.io',
          label: 'GitHub',
          primary: false
        },
        { href: 'https://williamalmeidadev.github.io/', label: isPt ? 'Testar' : 'Live', primary: true }
      ]
    },
    {
      img: ecoacao,
      title: isPt ? 'Projeto EcoAção' : 'EcoAção Project',
      description: isPt
        ? 'Projeto premiado na OBT 2025, focado em sustentabilidade e conscientização ambiental.'
        : 'Award-winning project at OBT 2025, focused on sustainability and environmental awareness.',
      stack: [
        { title: 'React', img: reactLogo },
        { title: 'JavaScript', img: javascript },
        { title: 'HTML', img: html },
        { title: 'CSS', img: css }
      ],
      links: [{ href: 'https://projetoecoacao.vercel.app/', label: isPt ? 'Testar' : 'Live', primary: true }]
    },
    {
      img: placas,
      title: isPt ? 'Projeto Placas' : 'Plates Project',
      description: isPt
        ? 'Site para divulgar venda de placas personalizadas em acrílico, funcionando como catálogo.'
        : 'Website to showcase custom acrylic plates, working as a product catalog.',
      stack: [
        { title: 'HTML', img: html },
        { title: 'CSS', img: css },
        { title: 'JavaScript', img: javascript }
      ],
      links: [{ href: 'https://siteplacas.vercel.app/', label: isPt ? 'Testar' : 'Live', primary: true }]
    }
  ] as const

  const certificates = [
    {
      img: google,
      description: isPt ? 'Certificação Suporte de TI Google - 2025' : 'Google IT Support Certificate - 2025'
    },
    {
      img: bd,
      description: isPt ? 'Administrador de Banco de Dados - 2025' : 'Database Administrator - 2025'
    },
    {
      img: solyd,
      description: isPt ? 'Introdução ao Pentest - 2024' : 'Intro to Pentest - 2024'
    },
    {
      img: tecnico,
      description: isPt
        ? 'Técnico em Desenvolvimento de Sistemas - 2023/2025'
        : 'Systems Development Technician - 2023/2025'
    }
  ] as const

  const experience = [
    {
      title: isPt ? 'Aspirante à Desenvolvedor - Alpha Edtech' : 'Aspiring Developer - Alpha Edtech',
      period: isPt ? '2025' : '2025',
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

  return { aboutGallery, technologies, projects, certificates, experience }
}
