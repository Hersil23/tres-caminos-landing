'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { ChevronDown, BookOpen, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dark-600">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-600 via-dark-500/50 to-dark-600" />
        
        {/* Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-burgundy-500/5 rounded-full blur-3xl" />
        
        {/* Grain Texture */}
        <div className="absolute inset-0 bg-grain opacity-50" />
        
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Ministry Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="font-body text-gold-500 tracking-widest text-sm uppercase">
                Alimento a tu Espíritu
              </span>
              <Sparkles className="w-4 h-4 text-gold-500" />
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-responsive-xl font-bold leading-tight mb-6"
            >
              <span className="text-gold-gradient">Tres Caminos</span>
              <br />
              <span className="text-white">Un Solo Dios</span>
            </motion.h1>

            {/* Verse */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="font-display italic text-2xl sm:text-3xl text-gray-300 mb-2">
                {t('hero.verse')}
              </p>
              <p className="font-accent text-gold-500 tracking-wider">
                {t('hero.verseRef')}
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="font-body text-xl text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold font-accent tracking-wider text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5" />
                {t('hero.cta')}
              </motion.a>
              
              <motion.a
                href="https://heyzine.com/flip-book/cf3389a748.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gold-500/30 rounded font-accent tracking-wider text-gold-500 hover:bg-gold-500/10 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, borderColor: 'rgba(201, 162, 39, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.preview')}
              </motion.a>
            </motion.div>

            {/* Available Badge */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="font-body text-gray-500 text-sm">{t('hero.available')}</span>
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-400/50 rounded-full border border-gold-500/20">
                <svg className="w-20 h-6" viewBox="0 0 100 30" fill="none">
                  <text x="5" y="22" className="fill-[#FF9900] font-bold text-lg" style={{ fontFamily: 'Arial' }}>
                    amazon
                  </text>
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Book Image */}
          <motion.div
            variants={itemVariants}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            {/* Glow Effect Behind Book */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
            </div>
            
            {/* Book Container */}
            <motion.div
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Book Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-8 bg-black/40 rounded-full blur-xl" />
              
              {/* Book Image */}
              <div className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4] glow-gold rounded-lg overflow-hidden">
                <Image
                  src="/images/book-flyer.jpeg"
                  alt="Tres Caminos Un Solo Dios - Portada del libro"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-gold-500/50"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-gold-500/50"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-gold-500/50 hover:text-gold-500 transition-colors">
          <span className="font-body text-xs tracking-wider uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  )
}
