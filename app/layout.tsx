import type { Metadata } from 'next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tres Caminos Un Solo Dios | Angel Morel',
  description: 'Un devocional de 173 páginas con 70 devocionales y 70 oraciones. Clama a mí, y yo te responderé... Jeremías 33:3',
  keywords: 'devocional, cristiano, libro, Angel Morel, tres caminos, Biblia, fe, espiritualidad',
  authors: [{ name: 'Angel Morel' }],
  openGraph: {
    title: 'Tres Caminos Un Solo Dios',
    description: 'Un viaje espiritual a través de las Escrituras por Angel Morel',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
