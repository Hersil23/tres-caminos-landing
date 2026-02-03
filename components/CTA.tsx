'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShoppingCart, ExternalLink } from 'lucide-react'

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-600 via-dark-500 to-dark-600" />
      
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-burgundy-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="absolute inset-0 bg-grain opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          {/* Decorative Top */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
            <div className="w-3 h-3 border border-gold-500/50 rotate-45" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            variants={itemVariants}
            className="font-display italic text-2xl sm:text-3xl text-gray-400 mb-4 max-w-3xl mx-auto"
          >
            {t('cta.quote')}
          </motion.blockquote>

          <motion.p
            variants={itemVariants}
            className="font-accent text-gold-500 tracking-wider mb-12"
          >
            {t('cta.quoteRef')}
          </motion.p>

          {/* Main CTA Content */}
          <motion.div
            variants={itemVariants}
            className="p-8 sm:p-12 bg-gradient-to-b from-dark-400/50 to-dark-500/50 rounded-2xl border border-gold-500/20 backdrop-blur-sm"
          >
            <h2 className="font-display text-responsive-md font-bold text-white mb-4">
              {t('cta.title')}
            </h2>

            <p className="font-body text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>

            {/* CTA Button */}
            <motion.a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-gold font-accent tracking-wider text-lg px-10 py-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-5 h-5" />
              {t('cta.button')}
              <ExternalLink className="w-4 h-4" />
            </motion.a>

            {/* Amazon Badge */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center justify-center gap-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-600/50 rounded-full border border-gold-500/10">
                <svg className="w-24 h-8" viewBox="0 0 120 40" fill="none">
                  <text x="10" y="28" className="fill-[#FF9900] font-bold text-xl" style={{ fontFamily: 'Arial' }}>
                    amazon
                  </text>
                </svg>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-500"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-body text-sm">ISBN: 978-8-9941261-4-1</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="font-body text-sm">173 Páginas</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="font-body text-sm">Academia Editorial USA</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative Bottom */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold-500/30" />
            <span className="font-display text-gold-500/50 text-2xl">✦</span>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold-500/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
