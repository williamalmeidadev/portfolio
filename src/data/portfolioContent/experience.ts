import type { ExperienceItem } from './types'

export function getExperience(isPt: boolean): readonly ExperienceItem[] {
  return [
    {
      title: isPt
        ? 'Alpha EdTech - Formação de Desenvolvedores'
        : 'Alpha EdTech - Developer Training',
      period: 'Code Academy | 2025 - 2026',
      description: isPt
        ? 'Formação intensiva focada em desenvolvimento de software de alta performance, infraestrutura moderna e Inteligência Artificial.\n\n• Desenvolvimento Full Stack: Criação de serviços escaláveis e APIs REST com Node.js, TypeScript e PostgreSQL.\n• Infraestrutura & DevOps: Administração Linux, servidores via SSH, shell script, redes, DNS e versionamento com Git/GitHub.\n• IA & Análise de Dados: Pré-processamento de datasets, modelagem com Machine Learning supervisionado e pipelines em Python.'
        : 'Intensive training program focused on high-performance software engineering, modern infrastructure, and Artificial Intelligence.\n\n• Full Stack Development: Engineering scalable services and REST APIs using Node.js, TypeScript, and PostgreSQL.\n• Infrastructure & DevOps: Linux administration, server management via SSH, shell scripting, DNS/networking, and Git/GitHub.\n• AI & Data Science: Data preprocessing, supervised Machine Learning modeling, and automated pipelines with Python.'
    },
    {
      title: isPt
        ? 'Estagiário em Desenvolvimento Web'
        : 'Web Development Intern',
      period: isPt
        ? 'Controladoria e Ouvidoria Geral do Estado do Ceará | 08/2025 - 12/2025'
        : 'Controller and Ombudsman General Office of the State of Ceará | 08/2025 - 12/2025',
      description: isPt
        ? 'Desenvolvimento e sustentação de sistemas web governamentais de missão crítica para auditoria e controle social.\n\n• Engenharia Full Stack: Implementação e evolução de aplicações corporativas com Java 17 / Spring Boot no backend e Angular com TypeScript no frontend.\n• APIs & Segurança: Desenvolvimento e integração de APIs RESTful seguras, autenticação JWT e documentação técnica com Swagger/OpenAPI.\n• Qualidade & Entrega: Resolução de bugs críticos, otimização de queries em PostgreSQL, conteinerização com Docker e fluxo colaborativo de code review via Git/GitHub.'
        : 'Development and maintenance of mission-critical governmental web systems for auditing and public oversight.\n\n• Full Stack Engineering: Developing and evolving enterprise applications using Java 17 / Spring Boot on the backend and Angular with TypeScript on the frontend.\n• APIs & Security: Architecting secure RESTful APIs, JWT authentication, and standardized Swagger/OpenAPI documentation.\n• Quality & Delivery: Resolving high-priority bugs, optimizing PostgreSQL queries, Docker containerization, and collaborative Git/GitHub code reviews.'
    }
  ] as const
}
