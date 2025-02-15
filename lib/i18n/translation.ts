import { en } from './en'
import { fr } from './fr'
import { es } from './es'
import { cn } from './cn'
import { ja } from './ja'
import { de } from './de'
import { ro } from './ro'
import type { I18n } from './i18n'
import type { SupportedLanguages } from './supportedLanguages'
import { ptBr } from './pt-br'

export const translations: Record<SupportedLanguages, I18n> = {
  en,
  fr,
  es,
  cn,
  ja,
  de,
  ro,
  'pt-br': ptBr,
}
