import { describe, expect, it } from 'vitest'
import { getContent } from '../data/content'

describe('getContent', () => {
  it('returns localized portfolio content in Portuguese', () => {
    const content = getContent('pt-BR')

    expect(content.projects[0].title).toBe('FileAlchemist')
    expect(content.projects[0].links[1].label).toBe('Testar')
    expect(content.experience[1].period).toBe(
      'Controladoria e Ouvidoria Geral do Estado do Ceará | 08/2025 - 12/2025'
    )
    expect(content.certificates[0].description).toContain('Bacharelado em IA')
  })

  it('returns localized portfolio content in English', () => {
    const content = getContent('en')

    expect(content.projects[0].links[1].label).toBe('Live')
    expect(content.experience[1].period).toBe(
      'Controller and Ombudsman General Office of the State of Ceará | 08/2025 - 12/2025'
    )
    expect(content.technologies[0].description).toContain('automation')
  })
})
