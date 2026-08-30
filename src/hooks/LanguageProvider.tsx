import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { getInitialLang, getStrings, LanguageContext } from './useLanguage'
import type { Lang } from '../i18n'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)
  const strings = useMemo(() => getStrings(lang), [lang])

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('lang', lang)
    window.localStorage.setItem('lang', lang)

    // Dynamic SEO Title
    document.title = lang === 'pt-BR' ? 'William Almeida | Portfólio' : 'William Almeida | Portfolio'

    // Dynamic SEO Description
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        lang === 'pt-BR'
          ? 'Portfólio de William Almeida com projetos, experiência, tecnologias, certificados e formas de contato.'
          : "William Almeida's portfolio featuring projects, experience, technologies, certificates, and contact info."
      )
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, strings }), [lang, strings])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
