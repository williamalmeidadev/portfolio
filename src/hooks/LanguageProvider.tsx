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
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, strings }), [lang, strings])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
