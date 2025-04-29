import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


//Importa tus traducciones
import translationEN from './locales/en/translation.json'
import translationES from './locales/es/translation.json'

//Defini las traducciones
const resources = {
    en: { translation: translationEN },
    es: { translation: translationES },
};

i18n
    .use(initReactI18next)
    .init ({
        resources,
        fallbackLng: 'es',

        interpolation: {
            escapeValue: false,
        }
});

export default i18n;


