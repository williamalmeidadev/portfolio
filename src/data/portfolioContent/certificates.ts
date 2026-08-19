import { contentAssets } from './assets'
import type { CertificateItem } from './types'

export function getCertificates(isPt: boolean): readonly CertificateItem[] {
  return [
    {
      img: contentAssets.quixadaufc,
      description: isPt
        ? 'Bacharelado em IA (UFC) • 2026–2029 • Cursando'
        : 'B.Sc. in AI (UFC) • 2026–2029 • In progress'
    },
    {
      img: contentAssets.google,
      description: isPt ? 'Certificação Suporte de TI Google - 2025' : 'Google IT Support Certificate - 2025'
    },
    {
      img: contentAssets.bd,
      description: isPt ? 'Administrador de Banco de Dados - 2025' : 'Database Administrator - 2025'
    },
    {
      img: contentAssets.solyd,
      description: isPt ? 'Introdução ao Pentest - 2024' : 'Intro to Pentest - 2024'
    },
    {
      img: contentAssets.tecnico,
      description: isPt
        ? 'Técnico em Desenvolvimento de Sistemas - 2023/2025'
        : 'Systems Development Technician - 2023/2025'
    }
  ] as const
}