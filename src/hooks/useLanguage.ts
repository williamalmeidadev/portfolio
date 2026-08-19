import { createContext, useContext } from 'react'
import { getStrings, type Lang, type Strings } from '../i18n'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  strings: Strings
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'pt-BR'
  const saved = window.localStorage.getItem('lang')
  if (saved === 'pt-BR' || saved === 'en') return saved
  const browser = window.navigator.language.toLowerCase()
  return browser.startsWith('pt') ? 'pt-BR' : 'en'
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

export { getStrings }