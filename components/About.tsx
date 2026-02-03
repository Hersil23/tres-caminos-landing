'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Users, FileText } from 'lucide-react'

export default function About() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { icon: FileText, value: '173', label: t('about.pages') },
    { icon: BookOpen, value: '+70', label: t('about.chapters') },
    { icon: Users, value: '+70', label: t('about.characters') },
  ]

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
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-600 via-dark-500 to-dark-600" />
      <div className="absolute inset-0 bg-pattern" />
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          {/* Section Label */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block font-accent text-gold-500 tracking-[0.3em] text-sm uppercase border border-gold-500/30 px-4 py-2 rounded-full">
              {t('about.label')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-responsive-lg font-bold text-white mb-6"
          >
            {t('about.title')}
          </motion.h2>

          {/* Decorative Divider */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
            <div className="w-2 h-2 bg-gold-500 rounded-full" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual Side */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-gold-500/20 rounded-lg" />
              <div className="absolute inset-8 border border-gold-500/10 rounded-lg" />
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-gold-500/20 to-burgundy-500/20 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <BookOpen className="w-16 h-16 text-gold-500" />
                </motion.div>
              </div>

              {/* Orbiting Elements */}
              {['Predestinados', 'Libre Albedrío', 'Desobediencia'].map((path, index) => (
                <motion.div
                  key={path}
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * (20 / 3),
                  }}
                >
                  <div
                    className="absolute w-3 h-3 bg-gold-500/50 rounded-full"
                    style={{
                      transform: `translateX(${120 + index * 20}px) translateY(-50%)`,
                    }}
                  />
                </motion.div>
              ))}

              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-500/30 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold-500/30 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold-500/30 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-500/30 rounded-br-lg" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.p
              variants={itemVariants}
              className="font-body text-xl text-gray-300 leading-relaxed mb-6"
            >
              {t('about.description1')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-body text-xl text-gray-400 leading-relaxed mb-10"
            >
              {t('about.description2')}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-dark-400/30 rounded-lg border border-gold-500/10 hover:border-gold-500/30 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                  <div className="font-display text-3xl font-bold text-gold-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-gray-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
