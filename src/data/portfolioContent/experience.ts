import type { ExperienceItem } from './types'

export function getExperience(isPt: boolean): readonly ExperienceItem[] {
  return [
    {
      title: isPt
        ? 'Alpha EdTech - Formação de Desenvolvedores'
        : 'Alpha EdTech - Developer Training',
      period: 'Code Academy | 2025 - 2026',
      description: isPt
        ? 'Formação intensiva em desenvolvimento de software, infraestrutura e Inteligência Artificial, abrangendo redes, Linux, servidores, Git, APIs, bancos de dados, Python, análise de dados, Machine Learning e IA. Principais temas: Linux, SSH, Shell, Redes, DNS, Git, GitHub, Node.js, APIs REST, PostgreSQL, Python e Machine Learning.'
        : 'Intensive training in software development, infrastructure, and Artificial Intelligence, covering networking, Linux, servers, Git, APIs, databases, Python, data analysis, Machine Learning, and AI. Main topics: Linux, SSH, Shell, networking, DNS, Git, GitHub, Node.js, REST APIs, PostgreSQL, Python, and Machine Learning.'
    },
    {
      title: isPt
        ? 'Estagiário em Desenvolvimento Web'
        : 'Web Development Intern',
      period: isPt
        ? 'Controladoria e Ouvidoria Geral do Estado do Ceará | 08/2025 - 12/2025'
        : 'Controller and Ombudsman General Office of the State of Ceará | 08/2025 - 12/2025',
      description: isPt
        ? 'Desenvolvimento e manutenção de sistemas web internos, com implementação de funcionalidades, correções de bugs e melhorias em aplicações existentes. Desenvolvimento e integração de APIs REST, autenticação JWT e documentação de serviços com Swagger/OpenAPI. Atuação em frontend e backend, utilizando Git/GitHub, revisão de código e práticas de desenvolvimento colaborativo. Tecnologias: Java 17, Spring Boot, Maven, Angular, TypeScript, PostgreSQL, Docker, Git, GitHub, Swagger/OpenAPI e JWT.'
        : 'Development and maintenance of internal web systems, including feature implementation, bug fixes, and improvements to existing applications. Development and integration of REST APIs, JWT authentication, and service documentation with Swagger/OpenAPI. Work across frontend and backend, using Git/GitHub, code review, and collaborative development practices. Technologies: Java 17, Spring Boot, Maven, Angular, TypeScript, PostgreSQL, Docker, Git, GitHub, Swagger/OpenAPI, and JWT.'
    }
  ] as const
}
