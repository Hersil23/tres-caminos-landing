'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import Image from 'next/image'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="section-full relative overflow-hidden bg-gradient-to-b from-dark-800 via-dark-700 to-dark-600">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient opacity-50" 
        style={{ background: 'radial-gradient(ellipse at center, rgba(35,29,23,0.8) 0%, rgba(15,12,9,1) 70%)' }} 
      />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-burgundy-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Title Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Image
                src="/images/titulo-dorado.png"
                alt="Tres Caminos Un Solo Dios"
                width={600}
                height={200}
                className="w-full max-w-lg mx-auto lg:mx-0 animate-shimmer"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(236, 213, 110, 0.3))' }}
              />
            </motion.div>

            {/* Verse */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <p className="font-body text-xl md:text-2xl italic text-gray-400 mb-2 pl-4 border-l-2 border-gold-500">
                {t('hero.verse')}
              </p>
              <p className="font-accent text-sm tracking-widest text-gold-500 pl-4">
                {t('hero.verseRef')}
              </p>
            </motion.div>

            {/* Author */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-accent text-lg tracking-widest text-gray-300 mb-8"
            >
              {t('hero.author')}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="https://www.amazon.com/dp/B0DRY9YN2L"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-800 font-accent font-bold text-sm tracking-widest uppercase rounded glow-gold hover:scale-105 transition-transform"
              >
                {t('hero.cta')}
              </a>
            </motion.div>
          </motion.div>

          {/* Book Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative">
              <Image
                src="/images/mockup-libro.png"
                alt="Libro Tres Caminos Un Solo Dios"
                width={450}
                height={550}
                className="w-full max-w-sm lg:max-w-md animate-float"
                style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))' }}
              />
              {/* Glow effect behind book */}
              <div className="absolute inset-0 -z-10 bg-gold-500/10 blur-3xl rounded-full scale-75" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold-500/50 rounded-full flex justify-center"
        >
          <motion.div className="w-1.5 h-3 bg-gold-500 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}
