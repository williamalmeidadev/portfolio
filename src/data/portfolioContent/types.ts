import type { Lang } from '../../i18n'

export type AboutGalleryItem = {
  src: string
  alt: string
  badge: string
  year: string
  description: string
  link?: string
}

export type TechnologyItem = {
  title: string
  description: string
  img: string
}

export type ProjectLink = {
  href: string
  label: string
  primary: boolean
}

export type ProjectStackItem = {
  title: string
  img: string
}

export type ProjectItem = {
  img: string
  title: string
  description: string
  stack: ProjectStackItem[]
  links: ProjectLink[]
}

export type CertificateItem = {
  img: string
  description: string
}

export type ExperienceItem = {
  title: string
  period: string
  description: string
}

export type PortfolioContent = {
  aboutGallery: readonly AboutGalleryItem[]
  technologies: readonly TechnologyItem[]
  projects: readonly ProjectItem[]
  certificates: readonly CertificateItem[]
  experience: readonly ExperienceItem[]
}

export type ContentBuilder = (lang: Lang) => PortfolioContent