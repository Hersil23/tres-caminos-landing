'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { Instagram, Mail, Globe, Phone, Heart } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/alimentoatuespiritu', label: 'Instagram' },
    { icon: Mail, href: 'mailto:info@alimentoatuespiritu.org', label: 'Email' },
    { icon: Globe, href: 'https://www.alimentoatuespiritu.org', label: 'Website' },
  ]

  return (
    <footer className="relative bg-dark-700 border-t border-gold-500/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-display text-2xl font-bold text-gold-gradient mb-4">
              Tres Caminos Un Solo Dios
            </h3>
            <p className="font-body text-gray-400 mb-6 leading-relaxed">
              Un devocional transformador que te guía a través de las Escrituras para descubrir tu camino hacia el único Salvador: Jesucristo.
            </p>
            <div className="flex items-center gap-2 text-gold-500/50">
              <span className="font-accent text-sm tracking-wider">{t('footer.ministry')}</span>
              <span>•</span>
              <span className="font-body italic">Alimento a tu Espíritu</span>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-accent text-gold-500 tracking-wider text-sm uppercase mb-6">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@alimentoatuespiritu.org" 
                  className="flex items-center gap-3 font-body text-gray-400 hover:text-gold-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@alimentoatuespiritu.org
                </a>
              </li>
              <li>
                <a 
                  href="https://www.alimentoatuespiritu.org" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-gray-400 hover:text-gold-500 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  www.AlimentoATuEspiritu.org
                </a>
              </li>
              <li>
                <a 
                  href="tel:689-800-8755" 
                  className="flex items-center gap-3 font-body text-gray-400 hover:text-gold-500 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  689-800-8755
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-accent text-gold-500 tracking-wider text-sm uppercase mb-6">
              {t('footer.follow')}
            </h4>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-500 hover:bg-gold-500/10 hover:border-gold-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Editorial Info */}
            <div className="p-4 bg-dark-600/50 rounded-lg border border-gold-500/10">
              <p className="font-body text-sm text-gray-500">
                {t('footer.editorial')}
              </p>
              <p className="font-accent text-xs text-gray-600 mt-2">
                ISBN: 978-8-9941261-4-1
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-gray-500">
              © {new Date().getFullYear()} Angel Morel. {t('footer.rights')}.
            </p>
            
            <div className="flex items-center gap-2 text-gray-600">
              <span className="font-body text-sm">Creado con</span>
              <Heart className="w-4 h-4 text-burgundy-500 fill-current" />
              <span className="font-body text-sm">por</span>
              <a 
                href="https://herasi.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-accent text-gold-500 hover:text-gold-400 transition-colors"
              >
                @herasi.dev
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
    </footer>
  )
}
