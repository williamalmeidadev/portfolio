import { contentAssets } from './assets'
import type { ProjectItem } from './types'

export function getProjects(isPt: boolean): readonly ProjectItem[] {
  return [
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
      img: contentAssets.alphaedtech,
      title: isPt ? 'DriveConnect' : 'DriveConnect',
      description: isPt
        ? 'O DriveConnect é uma plataforma moderna e inteligente de gestão de aluguel de veículos projetada para otimizar operações e melhorar a experiência do cliente. Ao integrar um Agente de IA conversacional baseado no WhatsApp com um sistema de back-end robusto e estruturado e aplicativos móveis dedicados, ele garante despacho de veículos em tempo real, cotações rápidas e confirmação instantânea de pagamento seguro.'
        : 'DriveConnect is a modern, intelligent vehicle rental management platform designed to streamline operations and elevate customer experience. By integrating a WhatsApp-based conversational AI Agent with a robust, structured backend system and dedicated mobile applications, it ensures real-time vehicle dispatching, fast quotations, and instant secure payment confirmation.',
      stack: [
        { title: 'TypeScript', img: contentAssets.typescript },
        { title: 'Node.js', img: contentAssets.nodejs },
        { title: 'PostgreSQL', img: contentAssets.postgresql },
        { title: 'Flutter', img: contentAssets.flutter },
        { title: 'Dart', img: contentAssets.dart },
        { title: 'OpenAI', img: contentAssets.openai },
        { title: 'Jest', img: contentAssets.jest },
        { title: 'Firebase', img: contentAssets.firebase },
        { title: 'Zod', img: contentAssets.zod }
      ],
      links: [{ href: 'https://github.com/DriveConnect-alpha/DriveConnect', label: 'GitHub', primary: true }]
    },
    {
      img: contentAssets.alphaedtech,
      title: isPt ? 'Pesquisa de Detecção de Deepfake' : 'Deepfake Detection Research',
      description: isPt
        ? 'Projeto de pesquisa aplicada para detecção de mídias sintéticas (deepfakes) utilizando técnicas avançadas de Machine Learning supervisionado, redução de dimensionalidade e modelagem preditiva de séries temporais.'
        : 'Applied research project for synthetic media (deepfakes) detection using advanced supervised Machine Learning techniques, dimensionality reduction, and predictive time-series modeling.',
      stack: [
        { title: 'Python', img: contentAssets.python },
        { title: 'Pandas', img: contentAssets.pandas },
        { title: 'NumPy', img: contentAssets.numpy },
        { title: 'Streamlit', img: contentAssets.streamlit },
        { title: 'Plotly', img: contentAssets.plotly },
        { title: 'GitHub Actions', img: contentAssets.githubactions }
      ],
      links: [{ href: 'https://github.com/williamalmeidadev/deepfake-detection-research', label: 'GitHub', primary: true }]
    },
    {
      img: contentAssets.alphaedtech,
      title: isPt ? 'AlphaCuts — Sistema de Gestão de Barbearia' : 'AlphaCuts — Barbershop Management System',
      description: isPt
        ? 'O AlphaCuts é uma solução completa de gestão para barbearias e salões de beleza, integrando uma API REST robusta a um front-end intuitivo para otimizar o fluxo de agendamentos e fidelização de clientes.'
        : 'AlphaCuts is a complete management solution for barbershops and beauty salons, integrating a robust REST API with an intuitive front-end to optimize the flow of scheduling and customer loyalty.',
      stack: [
        { title: 'HTML5', img: contentAssets.html },
        { title: 'CSS3', img: contentAssets.css },
        { title: 'JavaScript', img: contentAssets.javascript },
        { title: 'NodeJS', img: contentAssets.nodejs },
        { title: 'TypeScript', img: contentAssets.typescript },
        { title: 'Express.js', img: contentAssets.express },
        { title: 'Mocha', img: contentAssets.mocha }
      ],
      links: [{ href: 'https://github.com/williamalmeidadev/barbershop-management-api', label: 'GitHub', primary: true }]
    }
  ] as const
}