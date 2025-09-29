import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import nl from "./public/locales/nl/common.json";
import en from "./public/locales/en/common.json";

i18n.use(initReactI18next).init({
  resources: {
    nl: { common: nl },
    en: { common: en },
  },
  lng: "nl", // Dutch default content
  fallbackLng: "en", // fallback to English
  ns: ["common"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
