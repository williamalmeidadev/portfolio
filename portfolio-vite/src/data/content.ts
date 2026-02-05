import bd from '../assets/galeria/bd.png'
import ecoacao from '../assets/galeria/ecoacao.png'
import google from '../assets/galeria/google.png'
import maratonatech from '../assets/galeria/maratonatech.jpg'
import obt from '../assets/galeria/obt.jpeg'
import placas from '../assets/galeria/placas.png'
import portfolioreact from '../assets/galeria/portfolioreact.png'
import solyd from '../assets/galeria/solyd.png'
import tecnico from '../assets/galeria/tecnico.png'
import java from '../assets/java.svg'
import javascript from '../assets/javascript.svg'
import postgresql from '../assets/postgresql.svg'
import python from '../assets/python.svg'
import reactLogo from '../assets/react.svg'
import spring from '../assets/spring.svg'

export const sobreGaleria = [
  {
    src: obt,
    alt: 'OBT',
    descricao:
      'Medalha de prata nacional e 3º lugar na modalidade júri especialista na Olimpíada Brasileira de Tecnologia (OBT)',
    link:
      'https://www.ceara.gov.br/2025/07/16/escolas-da-rede-estadual-obtem-ouro-prata-e-bronze-na-olimpiada-brasileira-de-tecnologia-2025/'
  },
  {
    src: maratonatech,
    alt: 'Maratona Tech',
    descricao:
      'Duas vezes medalhista de bronze na Maratona Tech, competição nacional de tecnologia, trazendo também premiação de destaque nordeste para a escola',
    link:
      'https://al.ce.gov.br/noticias/48491-solenidade-na-alece-entrega-medalhas-a-74-alunos-do-ce-premiados-na-maratona-tech'
  }
] as const

export const tecnologias = [
  {
    titulo: 'Python',
    texto:
      'Utilizo Python para automações, lógica de backend, scripts e estudos em inteligência artificial e machine learning.',
    img: python
  },
  {
    titulo: 'JavaScript',
    texto:
      'Uso JavaScript para criar interfaces interativas, consumir APIs e desenvolver aplicações web modernas.',
    img: javascript
  },
  {
    titulo: 'React',
    texto:
      'React é minha principal ferramenta no frontend, permitindo criar interfaces componentizadas, performáticas e escaláveis.',
    img: reactLogo
  },
  {
    titulo: 'Java',
    texto:
      'Utilizo Java para aplicações robustas, orientação a objetos e projetos acadêmicos com foco em backend.',
    img: java
  },
  {
    titulo: 'PostgreSQL',
    texto:
      'Uso PostgreSQL para modelagem e gerenciamento de bancos de dados relacionais em sistemas reais.',
    img: postgresql
  },
  {
    titulo: 'Spring',
    texto:
      'Spring Framework é utilizado para construção de APIs REST seguras e organizadas no ecossistema Java.',
    img: spring
  }
] as const

export const projetos = [
  {
    img: portfolioreact,
    titulo: 'Portfolio React',
    descricao: 'Portfolio pessoal desenvolvido com React para apresentar meus projetos e habilidades.',
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
    titulo: 'Projeto EcoAção',
    descricao: 'Projeto premiado na OBT 2025, focado em sustentabilidade e conscientização ambiental.',
    links: [{ href: 'https://projetoecoacao.vercel.app/', label: 'Testar', primary: true }]
  },
  {
    img: placas,
    titulo: 'Projeto Placas',
    descricao: 'Site para divulgar venda de placas personalizadas em acrílico, funcionando como catálogo.',
    links: [{ href: 'https://siteplacas.vercel.app/', label: 'Testar', primary: true }]
  }
] as const

export const certificados = [
  { img: google, desc: 'Certificação Suporte de TI Google - 2025' },
  { img: bd, desc: 'Administrador de Banco de Dados - 2025' },
  { img: solyd, desc: 'Introdução ao Pentest - 2024' },
  { img: tecnico, desc: 'Técnico em Desenvolvimento de Sistemas - 2023/2025' }
] as const

export const experiencias = [
  {
    titulo: 'Aspirante à Desenvolvedor - Alpha Edtech',
    periodo: '2025',
    descricao:
      'Atualmente em estudo focado em desenvolvimento web full stack, aprimorando habilidades em front-end e back-end.'
  },
  {
    titulo: 'Estágio em Desenvolvimento Web - Ouvidoria do Estado do Ceará',
    periodo: 'Ago 2025 - Dez 2025',
    descricao:
      'Desenvolvimento de aplicações front-end e back-end, criação de APIs e manutenção de sistemas internos. Utilização de Java e Angular.'
  }
] as const
