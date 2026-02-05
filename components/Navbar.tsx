'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { Menu, X, Globe } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: t('nav.home') },
    { href: '#about', label: t('nav.book') },
    { href: '#paths', label: t('nav.paths') },
    { href: '#author', label: t('nav.author') },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark-800/95 backdrop-blur-md shadow-lg shadow-black/20' 
          : 'bg-gradient-to-b from-dark-800/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo pequeño */}
          <a href="#hero" className="flex items-center">
            <Image
              src="/images/logo-ministerio.png"
              alt="Alimento a tu Espíritu"
              width={50}
              height={50}
              className="h-20 w-auto transition-transform hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-accent text-sm tracking-widest uppercase text-gray-300 hover:text-gold-500 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-500/30 text-gold-500 hover:bg-gold-500/10 transition-all"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-accent tracking-wider">
                {language.toUpperCase()}
              </span>
            </button>

            {/* CTA Button */}
            <a
              href="https://www.amazon.com/dp/B0DRY9YN2L"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-800 font-accent font-semibold text-sm tracking-wider uppercase rounded hover:shadow-lg hover:shadow-gold-500/30 transition-all"
            >
              {t('nav.buy')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gold-500"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-800/98 backdrop-blur-md border-t border-gold-500/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-accent text-lg tracking-wider text-gray-300 hover:text-gold-500 transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="flex items-center justify-between pt-4 border-t border-gold-500/10">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 text-gold-500"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-accent tracking-wider">
                    {language === 'es' ? 'Español' : 'English'}
                  </span>
                </button>

                <a
                  href="https://www.amazon.com/dp/B0DRY9YN2L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-800 font-accent font-semibold text-sm tracking-wider uppercase rounded"
                >
                  {t('nav.buy')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
