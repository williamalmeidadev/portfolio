import type { Lang } from '../i18n'
import { getAboutGallery } from './portfolioContent/about'
import { getCertificates } from './portfolioContent/certificates'
import { getExperience } from './portfolioContent/experience'
import { getProjects } from './portfolioContent/projects'
import { getTechnologies } from './portfolioContent/technologies'
import type { PortfolioContent } from './portfolioContent/types'

export function getContent(lang: Lang): PortfolioContent {
  const isPt = lang === 'pt-BR'

  return {
    aboutGallery: getAboutGallery(isPt),
    technologies: getTechnologies(isPt),
    projects: getProjects(isPt),
    certificates: getCertificates(isPt),
    experience: getExperience(isPt)
  }
}
