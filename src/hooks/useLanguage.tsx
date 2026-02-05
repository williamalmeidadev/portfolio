import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { getStrings, type Lang, type Strings } from '../i18n'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  strings: Strings
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'pt-BR'
  const saved = window.localStorage.getItem('lang')
  if (saved === 'pt-BR' || saved === 'en') return saved
  const browser = window.navigator.language.toLowerCase()
  return browser.startsWith('pt') ? 'pt-BR' : 'en'
}

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

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
