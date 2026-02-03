import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/language-context'

export const metadata: Metadata = {
  title: 'Tres Caminos Un Solo Dios | Angel Morel',
  description: 'Un devocional transformador que te lleva a través de más de 70 personajes bíblicos para descubrir tu camino hacia Dios. Por Angel Morel.',
  keywords: 'libro cristiano, devocional, biblia, Angel Morel, tres caminos, Jesucristo, fe, espiritualidad',
  authors: [{ name: 'Angel Morel' }],
  openGraph: {
    title: 'Tres Caminos Un Solo Dios',
    description: 'Un devocional transformador con más de 70 personajes bíblicos',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tres Caminos Un Solo Dios',
    description: 'Un devocional transformador por Angel Morel',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
