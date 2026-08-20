import { contentAssets } from './assets'
import type { AboutGalleryItem } from './types'

export function getAboutGallery(isPt: boolean): readonly AboutGalleryItem[] {
  return [
    {
      src: contentAssets.obt,
      alt: 'OBT 2025',
      badge: isPt ? 'Prata Nacional' : 'National Silver',
      year: '2025',
      description: isPt
        ? 'Medalha de prata nacional e 3º lugar na modalidade júri especialista na Olimpíada Brasileira de Tecnologia (OBT)'
        : 'National silver medal and 3rd place in the expert jury category at the Brazilian Technology Olympiad (OBT)',
      link:
        'https://www.ceara.gov.br/2025/07/16/escolas-da-rede-estadual-obtem-ouro-prata-e-bronze-na-olimpiada-brasileira-de-tecnologia-2025/'
    },
    {
      src: contentAssets.maratonatech,
      alt: 'Maratona Tech',
      badge: isPt ? 'Bronze Nacional' : 'National Bronze',
      year: '2025',
      description: isPt
        ? 'Duas vezes medalhista de bronze na Maratona Tech, competição nacional de tecnologia, trazendo também premiação de destaque nordeste para a escola'
        : 'Two-time bronze medalist at Maratona Tech, a national tech competition, also bringing a Northeast highlight award to the school',
      link:
        'https://al.ce.gov.br/noticias/48491-solenidade-na-alece-entrega-medalhas-a-74-alunos-do-ce-premiados-na-maratona-tech'
    }
  ] as const
}