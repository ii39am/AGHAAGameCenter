"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionaries, Language, Dictionary } from '@/locales/dictionaries';

type LanguageContextType = {
    lang: Language;
    setLang: (lang: Language) => void;
    t: Dictionary;
    dir: 'rtl' | 'ltr';
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    // Default to Arabic
    const [lang, setLang] = useState<Language>('ar');

    useEffect(() => {
        // Optionally persist language preference in localStorage
        const savedLang = localStorage.getItem('site_lang') as Language;
        if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
            setLang(savedLang);
        }
    }, []);

    const handleSetLang = (newLang: Language) => {
        setLang(newLang);
        localStorage.setItem('site_lang', newLang);
    };

    const value = {
        lang,
        setLang: handleSetLang,
        t: dictionaries[lang],
        dir: (lang === 'ar' ? 'rtl' : 'ltr') as 'rtl' | 'ltr'
    };

    return (
        <LanguageContext.Provider value={value}>
            <div dir={value.dir} className={`lang-${lang}`}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
