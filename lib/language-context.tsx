'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'es' | 'en'

interface Translations {
  [key: string]: {
    es: string
    en: string
  }
}

const translations: Translations = {
  // Navigation
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.about': { es: 'El Libro', en: 'The Book' },
  'nav.paths': { es: 'Los Caminos', en: 'The Paths' },
  'nav.author': { es: 'El Autor', en: 'The Author' },
  'nav.buy': { es: 'Comprar', en: 'Buy Now' },

  // Hero Section
  'hero.subtitle': { es: 'Un devocional que transformará tu vida', en: 'A devotional that will transform your life' },
  'hero.title': { es: 'Tres Caminos Un Solo Dios', en: 'Three Paths One God' },
  'hero.verse': { es: '"Clama a mí, y yo te responderé..."', en: '"Call to me, and I will answer you..."' },
  'hero.verseRef': { es: 'Jeremías 33:3', en: 'Jeremiah 33:3' },
  'hero.cta': { es: 'Obtener mi copia', en: 'Get my copy' },
  'hero.preview': { es: 'Vista previa', en: 'Preview' },
  'hero.available': { es: 'Disponible en', en: 'Available on' },

  // About Book Section
  'about.label': { es: 'Acerca del Libro', en: 'About the Book' },
  'about.title': { es: 'Un viaje a través de las Escrituras', en: 'A journey through the Scriptures' },
  'about.description1': { 
    es: 'Este libro no es un devocional común. Es una revelación que te lleva de la mano por toda la Biblia y te planta frente a una verdad inescapable: solo hay tres caminos... y un solo Salvador: Jesucristo.', 
    en: 'This book is not an ordinary devotional. It is a revelation that takes you by the hand through the entire Bible and places you before an inescapable truth: there are only three paths... and one Savior: Jesus Christ.' 
  },
  'about.description2': { 
    es: 'A través de más de 70 personajes bíblicos, descubrirás las decisiones que marcaron sus destinos eternos y las lecciones que pueden transformar el tuyo.', 
    en: 'Through more than 70 biblical characters, you will discover the decisions that marked their eternal destinies and the lessons that can transform yours.' 
  },
  'about.pages': { es: '173 Páginas', en: '173 Pages' },
  'about.chapters': { es: '+70 Devocionales', en: '+70 Devotionals' },
  'about.characters': { es: '+70 Personajes', en: '+70 Characters' },

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

  // Author Section
  'author.label': { es: 'El Autor', en: 'The Author' },
  'author.name': { es: 'Angel Morel', en: 'Angel Morel' },
  'author.title': { es: 'Autor y Conferencista', en: 'Author and Speaker' },
  'author.bio1': { 
    es: 'Angel Morel es un apasionado de la Palabra de Dios. A través de su ministerio "Alimento a tu Espíritu", ha dedicado su vida a compartir las verdades eternas de las Escrituras de manera clara, profunda y transformadora.', 
    en: 'Angel Morel is passionate about the Word of God. Through his ministry "Food for Your Spirit," he has dedicated his life to sharing the eternal truths of Scripture in a clear, profound, and transformative way.' 
  },
  'author.bio2': { 
    es: 'Este libro nació de un llamado divino durante su tiempo devocional diario con su esposa, y representa años de estudio bíblico y revelación espiritual.', 
    en: 'This book was born from a divine calling during his daily devotional time with his wife, and represents years of biblical study and spiritual revelation.' 
  },
  'author.ministry': { es: 'Alimento a tu Espíritu', en: 'Food for Your Spirit' },

  // CTA Section
  'cta.title': { es: '¿Listo para descubrir tu camino?', en: 'Ready to discover your path?' },
  'cta.subtitle': { es: 'Este libro es la mano que Dios te extiende hoy', en: 'This book is the hand that God extends to you today' },
  'cta.button': { es: 'Comprar en Amazon', en: 'Buy on Amazon' },
  'cta.quote': { 
    es: '"Hay camino que al hombre le parece derecho, pero su fin es camino de muerte"', 
    en: '"There is a way that seems right to a man, but its end is the way of death"' 
  },
  'cta.quoteRef': { es: 'Proverbios 14:12', en: 'Proverbs 14:12' },

  // Testimonials
  'testimonials.label': { es: 'Testimonios', en: 'Testimonials' },
  'testimonials.title': { es: 'Lo que dicen los lectores', en: 'What readers say' },

  // Footer
  'footer.ministry': { es: 'Ministerio', en: 'Ministry' },
  'footer.contact': { es: 'Contacto', en: 'Contact' },
  'footer.follow': { es: 'Síguenos', en: 'Follow Us' },
  'footer.rights': { es: 'Todos los derechos reservados', en: 'All rights reserved' },
  'footer.editorial': { es: 'Publicado por Academia Editorial USA Inc.', en: 'Published by Academia Editorial USA Inc.' },

  // Language
  'lang.switch': { es: 'EN', en: 'ES' },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

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
