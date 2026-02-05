'use client'

import { useLanguage } from '@/lib/language-context'
import Image from 'next/image'

export default function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { href: '#hero', label: t('nav.home') },
    { href: '#about', label: t('nav.book') },
    { href: '#paths', label: t('nav.paths') },
    { href: '#author', label: t('nav.author') },
  ]

  return (
    <footer className="relative bg-dark-800 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo mediano */}
          <a href="#hero">
            <Image
              src="/images/logo-ministerio.png"
              alt="Alimento a tu Espíritu"
              width={150}
              height={150}
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-accent text-sm tracking-wider text-gray-400 hover:text-gold-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

          {/* Copyright & Credits */}
          <div className="text-center space-y-2">
            <p className="font-body text-sm text-gray-500">
              © {new Date().getFullYear()} Alimento a tu Espíritu. {t('footer.rights')}.
            </p>
            <p className="font-body text-sm text-gray-500">
              {t('footer.createdBy')}{' '}
              <a
                href="https://www.herasi.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-500 hover:text-gold-400 transition-colors"
              >
                www.herasi.dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
