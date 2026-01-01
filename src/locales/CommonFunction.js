/**
 * Common Functions - Utility Functions
 * Các hàm tiện ích chung cho toàn bộ ứng dụng
 */

import vi from "./vi";
import en from "./en";

// Danh sách các ngôn ngữ hỗ trợ
const languages = {
  vi,
  en,
};

// Ngôn ngữ mặc định
let currentLanguage = "vi";

/**
 * Set current language
 * @param {string} lang - Language code (vi, en)
 */
export const setLanguage = (lang) => {
  if (languages[lang]) {
    currentLanguage = lang;
    // Lưu vào localStorage để giữ ngôn ngữ khi reload
    localStorage.setItem("language", lang);
  } else {
    console.warn(`Language "${lang}" is not supported. Using default language.`);
  }
};

/**
 * Get current language
 * @returns {string} Current language code
 */
export const getLanguage = () => {
  // Lấy từ localStorage nếu có
  const savedLang = localStorage.getItem("language");
  if (savedLang && languages[savedLang]) {
    currentLanguage = savedLang;
  }
  return currentLanguage;
};

/**
 * Translate function - Hàm dịch ngôn ngữ
 * @param {string} key - Translation key (e.g., "common.add", "masterData.item.title")
 * @param {object} params - Parameters to replace in translation (e.g., {field: "Name", min: 5})
 * @returns {string} Translated text
 *
 * @example
 * // Simple translation
 * t("common.add") // => "Thêm mới"
 *
 * // Translation with parameters
 * t("validation.required", { field: "Tên" }) // => "Tên là bắt buộc"
 * t("validation.minLength", { field: "Mật khẩu", min: 6 }) // => "Mật khẩu phải có ít nhất 6 ký tự"
 */
export const t = (key, params = {}) => {
  const lang = getLanguage();
  const translations = languages[lang];

  // Split key by dot to navigate nested object
  const keys = key.split(".");
  let translation = translations;

  // Navigate through nested object
  for (const k of keys) {
    if (translation && typeof translation === "object" && k in translation) {
      translation = translation[k];
    } else {
      console.warn(`Translation key "${key}" not found for language "${lang}"`);
      return key; // Return key if translation not found
    }
  }

  // If translation is not a string, return key
  if (typeof translation !== "string") {
    console.warn(`Translation key "${key}" is not a string`);
    return key;
  }

  // Replace parameters in translation
  let result = translation;
  Object.keys(params).forEach((param) => {
    const regex = new RegExp(`{${param}}`, "g");
    result = result.replace(regex, params[param]);
  });

  return result;
};

/**
 * Translate with fallback
 * @param {string} key - Translation key
 * @param {string} fallback - Fallback text if translation not found
 * @param {object} params - Parameters to replace
 * @returns {string} Translated text or fallback
 */
export const tf = (key, fallback, params = {}) => {
  const lang = getLanguage();
  const translations = languages[lang];

  const keys = key.split(".");
  let translation = translations;

  for (const k of keys) {
    if (translation && typeof translation === "object" && k in translation) {
      translation = translation[k];
    } else {
      return fallback;
    }
  }

  if (typeof translation !== "string") {
    return fallback;
  }

  let result = translation;
  Object.keys(params).forEach((param) => {
    const regex = new RegExp(`{${param}}`, "g");
    result = result.replace(regex, params[param]);
  });

  return result;
};

/**
 * Get all translations for a specific section
 * @param {string} section - Section key (e.g., "common", "masterData.item")
 * @returns {object} All translations in that section
 *
 * @example
 * getSection("common") // => { add: "Thêm mới", edit: "Chỉnh sửa", ... }
 */
export const getSection = (section) => {
  const lang = getLanguage();
  const translations = languages[lang];

  const keys = section.split(".");
  let result = translations;

  for (const k of keys) {
    if (result && typeof result === "object" && k in result) {
      result = result[k];
    } else {
      console.warn(`Section "${section}" not found for language "${lang}"`);
      return {};
    }
  }

  return result;
};

/**
 * Check if a translation key exists
 * @param {string} key - Translation key
 * @returns {boolean} True if key exists
 */
export const hasTranslation = (key) => {
  const lang = getLanguage();
  const translations = languages[lang];

  const keys = key.split(".");
  let translation = translations;

  for (const k of keys) {
    if (translation && typeof translation === "object" && k in translation) {
      translation = translation[k];
    } else {
      return false;
    }
  }

  return typeof translation === "string";
};

/**
 * Get available languages
 * @returns {array} Array of language codes
 */
export const getAvailableLanguages = () => {
  return Object.keys(languages);
};

/**
 * Format number with locale
 * @param {number} number - Number to format
 * @param {object} options - Intl.NumberFormat options
 * @returns {string} Formatted number
 */
export const formatNumber = (number, options = {}) => {
  const lang = getLanguage();
  const locale = lang === "vi" ? "vi-VN" : "en-US";
  return new Intl.NumberFormat(locale, options).format(number);
};

/**
 * Format currency
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (VND, USD)
 * @returns {string} Formatted currency
 */
export const formatCurrency = (amount, currency = "VND") => {
  const lang = getLanguage();
  const locale = lang === "vi" ? "vi-VN" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
};

/**
 * Format date
 * @param {Date|string} date - Date to format
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date
 */
export const formatDate = (date, options = {}) => {
  const lang = getLanguage();
  const locale = lang === "vi" ? "vi-VN" : "en-US";
  const dateObj = typeof date === "string" ? new Date(date) : date;

  const defaultOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    ...options,
  };

  return new Intl.DateTimeFormat(locale, defaultOptions).format(dateObj);
};

/**
 * Format date and time
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date and time
 */
export const formatDateTime = (date) => {
  return formatDate(date, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

// Export default object with all functions
const CommonFunction = {
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
};

export default CommonFunction;
