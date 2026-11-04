import { contentAssets } from './assets'
import type { ProjectItem } from './types'

export function getProjects(isPt: boolean): readonly ProjectItem[] {
  return [
    {
      img: contentAssets.driveconnect,
      title: isPt ? 'DriveConnect' : 'DriveConnect',
      description: isPt
        ? 'Plataforma de locação de veículos com agente de IA conversacional no WhatsApp para atendimento 24/7, automação completa de cotações em tempo real e liquidação de pagamentos instantâneos integrada a um backend robusto em TypeScript/Node.js e app Flutter.'
        : 'Car rental platform powered by a conversational WhatsApp AI agent for 24/7 self-service, end-to-end automated real-time quoting, and instant payment settlement backed by a robust TypeScript/Node.js backend and Flutter mobile app.',
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
      img: contentAssets.alphacuts,
      title: 'AlphaCuts',
      description: isPt
        ? 'Sistema completo de gestão para salões e barbearias, desenvolvido com uma API REST escalável em TypeScript/Node.js e interface moderna e responsiva. Centraliza agendamentos em tempo real, controle financeiro e retenção de clientes.'
        : 'Full-featured barbershop and salon management platform powered by a scalable TypeScript and Node.js REST API and a responsive modern interface, streamlining real-time appointments, financial control, and client retention.',
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
    },
    {
      img: contentAssets.ecoacao,
      title: isPt ? 'Projeto EcoAção' : 'EcoAção Project',
      description: isPt
        ? 'Projeto premiado na OBT 2025 focado em sustentabilidade e conscientização ambiental. Plataforma interativa com gamificação e métricas de impacto comunitário para mobilizar escolas e cidadãos na separação e destinação correta de resíduos.'
        : 'Award-winning project at OBT 2025 promoting sustainability and environmental awareness. An interactive platform featuring gamification and community impact metrics to mobilize schools and citizens in waste sorting and eco-friendly practices.',
      stack: [
        { title: 'React', img: contentAssets.reactLogo },
        { title: 'JavaScript', img: contentAssets.javascript },
        { title: 'HTML', img: contentAssets.html },
        { title: 'CSS', img: contentAssets.css }
      ],
      links: [{ href: 'https://projetoecoacao.vercel.app/', label: isPt ? 'Testar' : 'Live', primary: true }]
    },
    {
      img: contentAssets.filealchemist,
      title: 'FileAlchemist',
      description: isPt
        ? 'Conversor e otimizador de imagens com processamento em lote 100% client-side via Web Workers multithread. Proporciona máxima velocidade e total privacidade com zero envio de arquivos ao servidor, além de controle fino de compressão, redimensionamento e exportação em ZIP.'
        : 'Image converter and optimizer featuring 100% client-side batch processing via multithreaded Web Workers. Delivers maximum processing speed and complete privacy with zero server uploads, offering fine-grained compression control, resizing, and ZIP packaging.',
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
      img: contentAssets.deepfake,
      title: isPt ? 'Pesquisa de Detecção de Deepfake' : 'Deepfake Detection Research',
      description: isPt
        ? 'Pesquisa científica aplicada para detecção de deepfakes faciais, integrando modelos de Machine Learning supervisionado, análise exploratória com redução de dimensionalidade, visualizações interativas em Streamlit e pipeline automatizado de CI via GitHub Actions.'
        : 'Applied scientific research for facial deepfake detection, combining supervised Machine Learning models, dimensionality reduction techniques, interactive data visualizations built with Streamlit, and automated CI pipelines with GitHub Actions.',
      stack: [
        { title: 'Python', img: contentAssets.python },
        { title: 'Pandas', img: contentAssets.pandas },
        { title: 'NumPy', img: contentAssets.numpy },
        { title: 'Streamlit', img: contentAssets.streamlit },
        { title: 'Plotly', img: contentAssets.plotly },
        { title: 'GitHub Actions', img: contentAssets.githubactions }
      ],
      links: [{ href: 'https://github.com/williamalmeidadev/deepfake-detection-research', label: 'GitHub', primary: true }]
    }
  ] as const
}