/**
 * Locales Index
 * Export all localization utilities
 */

export { default as vi } from "./vi";
export { default as en } from "./en";
export {
  default as CommonFunction,
  t,
  tf,
  setLanguage,
  getLanguage,
  getSection,
  hasTranslation,
  getAvailableLanguages,
  formatNumber,
  formatCurrency,
  formatDate,
  formatDateTime,
} from "./CommonFunction";
