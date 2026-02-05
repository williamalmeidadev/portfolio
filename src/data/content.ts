import bd from '../assets/galeria/bd.webp'
import ecoacao from '../assets/galeria/ecoacao.webp'
import google from '../assets/galeria/google.webp'
import maratonatech from '../assets/galeria/maratonatech.webp'
import obt from '../assets/galeria/obt.webp'
import placas from '../assets/galeria/placas.webp'
import portfolioreact from '../assets/galeria/portfolioreact.webp'
import solyd from '../assets/galeria/solyd.webp'
import tecnico from '../assets/galeria/tecnico.webp'
import java from '../assets/java.svg'
import javascript from '../assets/javascript.svg'
import postgresql from '../assets/postgresql.svg'
import python from '../assets/python.svg'
import reactLogo from '../assets/react.svg'
import spring from '../assets/spring.svg'

export const aboutGallery = [
  {
    src: obt,
    alt: 'OBT',
    description:
      'Medalha de prata nacional e 3º lugar na modalidade júri especialista na Olimpíada Brasileira de Tecnologia (OBT)',
    link:
      'https://www.ceara.gov.br/2025/07/16/escolas-da-rede-estadual-obtem-ouro-prata-e-bronze-na-olimpiada-brasileira-de-tecnologia-2025/'
  },
  {
    src: maratonatech,
    alt: 'Maratona Tech',
    description:
      'Duas vezes medalhista de bronze na Maratona Tech, competição nacional de tecnologia, trazendo também premiação de destaque nordeste para a escola',
    link:
      'https://al.ce.gov.br/noticias/48491-solenidade-na-alece-entrega-medalhas-a-74-alunos-do-ce-premiados-na-maratona-tech'
  }
] as const

export const technologies = [
  {
    title: 'Python',
    description:
      'Utilizo Python para automações, lógica de backend, scripts e estudos em inteligência artificial e machine learning.',
    img: python
  },
  {
    title: 'JavaScript',
    description:
      'Uso JavaScript para criar interfaces interativas, consumir APIs e desenvolver aplicações web modernas.',
    img: javascript
  },
  {
    title: 'React',
    description:
      'React é minha principal ferramenta no frontend, permitindo criar interfaces componentizadas, performáticas e escaláveis.',
    img: reactLogo
  },
  {
    title: 'Java',
    description:
      'Utilizo Java para aplicações robustas, orientação a objetos e projetos acadêmicos com foco em backend.',
    img: java
  },
  {
    title: 'PostgreSQL',
    description:
      'Uso PostgreSQL para modelagem e gerenciamento de bancos de dados relacionais em sistemas reais.',
    img: postgresql
  },
  {
    title: 'Spring',
    description:
      'Spring Framework é utilizado para construção de APIs REST seguras e organizadas no ecossistema Java.',
    img: spring
  }
] as const

export const projects = [
  {
    img: portfolioreact,
    title: 'Portfolio React',
    description: 'Portfolio pessoal desenvolvido com React para apresentar meus projetos e habilidades.',
    links: [
      {
        href: 'https://github.com/williamalmeidadev/williamalmeidadev.github.io',
        label: 'GitHub',
        primary: false
      },
      { href: 'https://williamalmeidadev.github.io/', label: 'Testar', primary: true }
    ]
  },
  {
    img: ecoacao,
    title: 'Projeto EcoAção',
    description: 'Projeto premiado na OBT 2025, focado em sustentabilidade e conscientização ambiental.',
    links: [{ href: 'https://projetoecoacao.vercel.app/', label: 'Testar', primary: true }]
  },
  {
    img: placas,
    title: 'Projeto Placas',
    description: 'Site para divulgar venda de placas personalizadas em acrílico, funcionando como catálogo.',
    links: [{ href: 'https://siteplacas.vercel.app/', label: 'Testar', primary: true }]
  }
] as const

export const certificates = [
  { img: google, description: 'Certificação Suporte de TI Google - 2025' },
  { img: bd, description: 'Administrador de Banco de Dados - 2025' },
  { img: solyd, description: 'Introdução ao Pentest - 2024' },
  { img: tecnico, description: 'Técnico em Desenvolvimento de Sistemas - 2023/2025' }
] as const

export const experience = [
  {
    title: 'Aspirante à Desenvolvedor - Alpha Edtech',
    period: '2025',
    description:
      'Atualmente em estudo focado em desenvolvimento web full stack, aprimorando habilidades em front-end e back-end.'
  },
  {
    title: 'Estágio em Desenvolvimento Web - Ouvidoria do Estado do Ceará',
    period: 'Ago 2025 - Dez 2025',
    description:
      'Desenvolvimento de aplicações front-end e back-end, criação de APIs e manutenção de sistemas internos. Utilização de Java e Angular.'
  }
] as const
