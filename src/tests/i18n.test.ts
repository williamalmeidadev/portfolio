import { describe, expect, it } from 'vitest'
import { getStrings } from '../i18n'

describe('getStrings', () => {
  it('returns the Portuguese strings', () => {
    const strings = getStrings('pt-BR')

    expect(strings.nav.home).toBe('Início')
    expect(strings.hero.ctaProjects).toBe('Ver projetos')
    expect(strings.projects.liveLabel).toBe('Testar')
  })

  it('returns the English strings', () => {
    const strings = getStrings('en')

    expect(strings.nav.home).toBe('Home')
    expect(strings.hero.ctaProjects).toBe('View projects')
    expect(strings.projects.liveLabel).toBe('Live')
  })
})