import { contentAssets } from './assets'
import type { ProjectItem } from './types'

export function getProjects(isPt: boolean): readonly ProjectItem[] {
  return [
    {
      img: contentAssets.filealchemist,
      title: 'FileAlchemist',
      description: isPt
        ? 'Conversor de imagens no navegador executado 100% client-side, com processamento em lote via Web Worker, controle de qualidade, redimensionamento opcional e download em arquivo ZIP.'
        : 'Browser image converter running 100% client-side, featuring batch processing via Web Worker, quality controls, optional resizing, and compressed download in a ZIP file.',
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
        ? 'Projeto premiado na OBT 2025 focado em sustentabilidade e conscientização ambiental, oferecendo uma plataforma interativa para engajar a comunidade escolar em práticas ecológicas.'
        : 'Award-winning project at OBT 2025 focused on sustainability and environmental awareness, offering an interactive platform to engage the school community in ecological practices.',
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
        ? 'Plataforma de aluguel de carros que integra um agente de IA conversacional no WhatsApp com backend estruturado e app móvel para cotações rápidas e confirmações de pagamentos.'
        : 'Car rental platform integrating a conversational WhatsApp AI agent with a structured backend and mobile app for fast quotations and instant secure payment confirmations.',
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
        ? 'Pesquisa aplicada para detecção de deepfakes utilizando técnicas de Machine Learning supervisionado, redução de dimensionalidade e modelagem preditiva de séries temporais.'
        : 'Applied research for deepfake detection using supervised Machine Learning, dimensionality reduction techniques, and predictive modeling for time-series analysis.',
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
      title: 'AlphaCuts',
      description: isPt
        ? 'Sistema completo de gestão para salões e barbearias, integrando uma API REST robusta a um front-end intuitivo para otimizar o fluxo de agendamento e a fidelização de clientes.'
        : 'Complete management system for salons and barbershops, integrating a robust REST API with an intuitive front-end to optimize scheduling flow and boost customer loyalty.',
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