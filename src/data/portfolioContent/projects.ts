import { contentAssets } from './assets'
import type { ProjectItem } from './types'

export function getProjects(isPt: boolean): readonly ProjectItem[] {
  return [
    {
      img: contentAssets.wordmint,
      title: 'WordMint',
      description: isPt
        ? 'Jogo de adivinhação de palavras no navegador, inspirado nos clássicos de cinco letras, com modo offline e compartilhamento do resultado em emojis.'
        : 'Browser word-guessing game inspired by classic five-letter puzzles, with offline play and shareable emoji results.',
      stack: [
        { title: 'Vite', img: contentAssets.vite },
        { title: 'React', img: contentAssets.reactLogo },
        { title: 'TypeScript', img: contentAssets.typescript },
        { title: 'CSS', img: contentAssets.css }
      ],
      links: [
        { href: 'https://github.com/williamalmeidadev/WordMint', label: 'GitHub', primary: false },
        { href: 'https://williamalmeidadev.github.io/WordMint/', label: isPt ? 'Testar' : 'Live', primary: true }
      ]
    },
    {
      img: contentAssets.filealchemist,
      title: 'FileAlchemist',
      description: isPt
        ? 'Conversor de imagens 100% client-side no navegador, com processamento em lote via Web Worker, ajuste de qualidade, redimensionamento opcional e download em ZIP.'
        : 'A 100% client-side browser image converter with batch processing via Web Worker, quality control, optional resize, and ZIP download.',
      stack: [
        { title: 'Vite', img: contentAssets.vite },
        { title: 'React', img: contentAssets.reactLogo },
        { title: 'TypeScript', img: contentAssets.typescript },
        { title: 'JavaScript', img: contentAssets.javascript },
        { title: 'CSS', img: contentAssets.css }
      ],
      links: [
        { href: 'https://github.com/williamalmeidadev/FileAlchemist', label: 'GitHub', primary: false },
        { href: 'https://williamalmeidadev.github.io/FileAlchemist/', label: isPt ? 'Testar' : 'Live', primary: true }
      ]
    },
    {
      img: contentAssets.portfolioreact,
      title: 'Portfolio React',
      description: isPt
        ? 'Portfolio pessoal desenvolvido com React para apresentar meus projetos e habilidades.'
        : 'Personal portfolio built with React to showcase my projects and skills.',
      stack: [
        { title: 'React', img: contentAssets.reactLogo },
        { title: 'TypeScript', img: contentAssets.typescript },
        { title: 'Vite', img: contentAssets.vite },
        { title: 'CSS', img: contentAssets.css }
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
      img: contentAssets.ecoacao,
      title: isPt ? 'Projeto EcoAção' : 'EcoAção Project',
      description: isPt
        ? 'Projeto premiado na OBT 2025, focado em sustentabilidade e conscientização ambiental.'
        : 'Award-winning project at OBT 2025, focused on sustainability and environmental awareness.',
      stack: [
        { title: 'React', img: contentAssets.reactLogo },
        { title: 'JavaScript', img: contentAssets.javascript },
        { title: 'HTML', img: contentAssets.html },
        { title: 'CSS', img: contentAssets.css }
      ],
      links: [{ href: 'https://projetoecoacao.vercel.app/', label: isPt ? 'Testar' : 'Live', primary: true }]
    },
    {
      img: contentAssets.placas,
      title: isPt ? 'Projeto Placas' : 'Plates Project',
      description: isPt
        ? 'Site para divulgar venda de placas personalizadas em acrílico, funcionando como catálogo.'
        : 'Website to showcase custom acrylic plates, working as a product catalog.',
      stack: [
        { title: 'HTML', img: contentAssets.html },
        { title: 'CSS', img: contentAssets.css },
        { title: 'JavaScript', img: contentAssets.javascript }
      ],
      links: [{ href: 'https://siteplacas.vercel.app/', label: isPt ? 'Testar' : 'Live', primary: true }]
    }
  ] as const
}