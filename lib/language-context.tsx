'use client'

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.book': { es: 'El Libro', en: 'The Book' },
  'nav.paths': { es: 'Los Caminos', en: 'The Paths' },
  'nav.author': { es: 'El Autor', en: 'The Author' },
  'nav.buy': { es: 'Comprar', en: 'Buy Now' },

  // Hero Section
  'hero.subtitle': { es: 'Un viaje espiritual a través de las Escrituras', en: 'A spiritual journey through the Scriptures' },
  'hero.verse': { es: '"Clama a mí, y yo te responderé..."', en: '"Call to me, and I will answer you..."' },
  'hero.verseRef': { es: 'Jeremías 33:3', en: 'Jeremiah 33:3' },
  'hero.author': { es: 'Por Angel Morel', en: 'By Angel Morel' },
  'hero.cta': { es: 'Adquirir Ahora', en: 'Get It Now' },

  // About Section
  'about.label': { es: 'El Libro', en: 'The Book' },
  'about.title': { es: 'Un Viaje Espiritual', en: 'A Spiritual Journey' },
  'about.description': { 
    es: 'Descubre un camino de fe a través de reflexiones profundas, devocionales que transforman y oraciones que conectan tu corazón con el propósito divino.',
    en: 'Discover a path of faith through deep reflections, transformative devotionals, and prayers that connect your heart with divine purpose.'
  },
  'about.pages': { es: 'Páginas', en: 'Pages' },
  'about.devotionals': { es: 'Devocionales', en: 'Devotionals' },
  'about.prayers': { es: 'Oraciones', en: 'Prayers' },

  // Paths Section
  'paths.label': { es: 'Los Tres Caminos', en: 'The Three Paths' },
  'paths.title': { es: 'Tres destinos, una decisión', en: 'Three destinies, one decision' },
  'paths.subtitle': { es: '¿En cuál camino te encuentras tú?', en: 'Which path are you on?' },
  
  'path1.title': { es: 'Los Predestinados', en: 'The Predestined' },
  'path1.description': { 
    es: 'Los que Dios conoció, amó y marcó antes de que nacieran. Aunque caigan, Él los levanta. Aunque callen, su vida termina hablando. Porque su nombre ya estaba escrito desde la eternidad.', 
    en: 'Those whom God knew, loved, and marked before they were born. Though they fall, He lifts them up. Though they are silent, their lives end up speaking. Because their name was already written from eternity.' 
  },
  'path1.characters': { es: 'Adán, Enoc, Noé, Abraham, Moisés, David, Juan el Bautista, Pablo...', en: 'Adam, Enoch, Noah, Abraham, Moses, David, John the Baptist, Paul...' },

  'path2.title': { es: 'Los del Libre Albedrío', en: 'Those of Free Will' },
  'path2.description': { 
    es: 'Los que han escuchado el llamado y todavía pueden elegir hoy: entrar por la puerta estrecha o seguir su propio camino. Unos dicen sí y se convierten en testimonios vivos.', 
    en: 'Those who have heard the call and can still choose today: enter through the narrow gate or follow their own path. Some say yes and become living testimonies.' 
  },
  'path2.characters': { es: 'Lot, Rahab, Nicodemo, Zaqueo, María Magdalena, El ladrón en la cruz...', en: 'Lot, Rahab, Nicodemus, Zacchaeus, Mary Magdalene, The thief on the cross...' },

  'path3.title': { es: 'Los Hijos de Desobediencia', en: 'The Children of Disobedience' },
  'path3.description': { 
    es: 'Los que tuvieron la verdad delante y la rechazaron y prefirieron vivir sin Dios. Hoy su fruto los delata. Mañana su destino estará sellado.', 
    en: 'Those who had the truth before them and rejected it, preferring to live without God. Today their fruit betrays them. Tomorrow their destiny will be sealed.' 
  },
  'path3.characters': { es: 'Caín, Faraón, Judas, Pilato, Herodes, El Anticristo...', en: 'Cain, Pharaoh, Judas, Pilate, Herod, The Antichrist...' },

  'paths.quote': { es: '"Hay camino que al hombre le parece derecho, pero su fin es camino de muerte"', en: '"There is a way that seems right to a man, but its end is the way of death"' },
  'paths.quoteRef': { es: 'Proverbios 14:12', en: 'Proverbs 14:12' },

  // Author Section
  'author.label': { es: 'El Autor', en: 'The Author' },
  'author.ministry': { es: 'Ministerio', en: 'Ministry' },
  'author.description': { 
    es: 'Un ministerio dedicado a nutrir el espíritu a través de la Palabra de Dios, llevando esperanza y transformación a cada corazón que busca una conexión más profunda con el Creador.',
    en: 'A ministry dedicated to nurturing the spirit through the Word of God, bringing hope and transformation to every heart seeking a deeper connection with the Creator.'
  },
  'author.name': { es: 'Angel Morel', en: 'Angel Morel' },

  // CTA Section
  'cta.title': { es: 'Comienza Tu Viaje Hoy', en: 'Start Your Journey Today' },
  'cta.subtitle': { es: '70 días de transformación espiritual te esperan', en: '70 days of spiritual transformation await you' },
  'cta.button': { es: 'Obtener Mi Copia', en: 'Get My Copy' },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados', en: 'All rights reserved' },
  'footer.createdBy': { es: 'Creado por', en: 'Created by' },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  const t = useCallback((key: string): string => {
    return translations[key]?.[language] || key
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
