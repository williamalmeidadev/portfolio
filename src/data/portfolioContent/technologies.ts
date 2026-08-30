import { contentAssets } from './assets'
import type { TechnologyItem } from './types'

export function getTechnologies(isPt: boolean): readonly TechnologyItem[] {
  return [
    {
      title: 'Python',
      description: isPt
        ? 'Utilizo Python para automações, lógica de backend, scripts e estudos em inteligência artificial e machine learning.'
        : 'I use Python for automation, backend logic, scripts, and studies in AI and machine learning.',
      img: contentAssets.python
    },
    {
      title: 'JavaScript',
      description: isPt
        ? 'Uso JavaScript para criar interfaces interativas, consumir APIs e desenvolver aplicações web modernas.'
        : 'I use JavaScript to build interactive interfaces, consume APIs, and develop modern web apps.',
      img: contentAssets.javascript
    },
    {
      title: 'HTML',
      description: isPt
        ? 'HTML é a base estrutural das interfaces web, garantindo semântica e acessibilidade.'
        : 'HTML is the structural foundation of web interfaces, ensuring semantics and accessibility.',
      img: contentAssets.html
    },
    {
      title: 'CSS',
      description: isPt
        ? 'Com CSS crio layouts responsivos, animações e identidade visual consistente.'
        : 'With CSS I create responsive layouts, animations, and a consistent visual identity.',
      img: contentAssets.css
    },
    {
      title: 'TypeScript',
      description: isPt
        ? 'Com TypeScript ganho tipagem, previsibilidade e mais segurança ao escalar projetos web.'
        : 'With TypeScript I gain typing, predictability, and more safety when scaling web projects.',
      img: contentAssets.typescript
    },
    {
      title: 'React',
      description: isPt
        ? 'React é minha principal ferramenta no frontend, permitindo criar interfaces componentizadas, performáticas e escaláveis.'
        : 'React is my main frontend tool, enabling componentized, performant, and scalable interfaces.',
      img: contentAssets.reactLogo
    },
    {
      title: 'Node.js',
      description: isPt
        ? 'Uso Node.js para construir APIs, integrações e serviços backend com JavaScript.'
        : 'I use Node.js to build APIs, integrations, and backend services with JavaScript.',
      img: contentAssets.nodejs
    },
    {
      title: 'Express.js',
      description: isPt
        ? 'Express.js me permite criar APIs e rotas leves e rápidas no ecossistema Node.'
        : 'Express.js lets me build fast, lightweight APIs and routes in the Node ecosystem.',
      img: contentAssets.express
    },
    {
      title: 'Vite',
      description: isPt
        ? 'Vite acelera meu desenvolvimento frontend com build rápido e HMR eficiente.'
        : 'Vite speeds up my frontend development with fast builds and efficient HMR.',
      img: contentAssets.vite
    },
    {
      title: 'Java',
      description: isPt
        ? 'Utilizo Java para aplicações robustas, orientação a objetos e projetos acadêmicos com foco em backend.'
        : 'I use Java for robust applications, OOP, and academic projects focused on backend.',
      img: contentAssets.java
    },
    {
      title: 'PostgreSQL',
      description: isPt
        ? 'Uso PostgreSQL para modelagem e gerenciamento de bancos de dados relacionais em sistemas reais.'
        : 'I use PostgreSQL for modeling and managing relational databases in real systems.',
      img: contentAssets.postgresql
    },
    {
      title: 'Spring',
      description: isPt
        ? 'Spring Framework é utilizado para construção de APIs REST seguras e organizadas no ecossistema Java.'
        : 'Spring Framework is used to build secure, organized REST APIs in the Java ecosystem.',
      img: contentAssets.spring
    },
    {
      title: 'Docker',
      description: isPt
        ? 'Utilizo Docker para containerizar aplicações, garantindo consistência entre ambientes de desenvolvimento e produção.'
        : 'I use Docker to containerize applications, ensuring consistency between development and production environments.',
      img: contentAssets.docker
    }
  ] as const
}