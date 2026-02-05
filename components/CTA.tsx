'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { ShoppingCart, Star } from 'lucide-react'

export default function CTA() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="section-full relative bg-dark-800 overflow-hidden" ref={ref}>
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-grain" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          {/* Decorative stars */}
          <motion.div variants={itemVariants} className="flex justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
            ))}
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-responsive-lg font-bold text-white mb-4"
          >
            {t('cta.title')}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-body text-xl text-gray-400 mb-10"
          >
            {t('cta.subtitle')}
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <a
              href="https://www.amazon.com/dp/B0DRY9YN2L"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-800 font-accent font-bold text-lg tracking-widest uppercase rounded glow-gold hover:scale-105 transition-transform"
            >
              <ShoppingCart className="w-6 h-6" />
              {t('cta.button')}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mt-10 text-gray-500"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V8.26l7-3.89v8.62z"/>
              </svg>
              <span className="text-sm">Compra segura</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
              </svg>
              <span className="text-sm">Envío rápido</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-sm">Disponible en Amazon</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
