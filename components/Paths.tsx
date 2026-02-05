'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { Crown, Scale, Skull } from 'lucide-react'

export default function Paths() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredPath, setHoveredPath] = useState<number | null>(null)

  const paths = [
    {
      id: 1,
      icon: Crown,
      title: t('path1.title'),
      description: t('path1.description'),
      characters: t('path1.characters'),
      color: 'gold',
      bgGradient: 'from-gold-500/10 to-gold-700/5',
      borderColor: 'border-gold-500/30',
      iconColor: 'text-gold-500',
      hoverBorder: 'hover:border-gold-500/60',
      numberColor: 'text-gold-500/20',
    },
    {
      id: 2,
      icon: Scale,
      title: t('path2.title'),
      description: t('path2.description'),
      characters: t('path2.characters'),
      color: 'gray',
      bgGradient: 'from-gray-500/10 to-gray-700/5',
      borderColor: 'border-gray-500/30',
      iconColor: 'text-gray-400',
      hoverBorder: 'hover:border-gray-400/60',
      numberColor: 'text-gray-500/20',
    },
    {
      id: 3,
      icon: Skull,
      title: t('path3.title'),
      description: t('path3.description'),
      characters: t('path3.characters'),
      color: 'burgundy',
      bgGradient: 'from-burgundy-500/10 to-burgundy-700/5',
      borderColor: 'border-burgundy-500/30',
      iconColor: 'text-burgundy-500',
      hoverBorder: 'hover:border-burgundy-500/60',
      numberColor: 'text-burgundy-500/20',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="paths" className="section-full relative bg-dark-700 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grain" />
      
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-burgundy-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block font-accent text-gold-500 tracking-widest text-sm uppercase border border-gold-500/30 px-4 py-2 rounded-full">
              {t('paths.label')}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-display text-responsive-lg font-bold text-white mb-4"
          >
            {t('paths.title')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-body text-xl text-gray-400 max-w-2xl mx-auto"
          >
            {t('paths.subtitle')}
          </motion.p>

          {/* Decorative Divider */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mt-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              <div className="w-2 h-2 bg-gray-500 rounded-full" />
              <div className="w-2 h-2 bg-burgundy-500 rounded-full" />
            </div>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
          </motion.div>
        </motion.div>

        {/* Path Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {paths.map((path) => (
            <motion.div
              key={path.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredPath(path.id)}
              onMouseLeave={() => setHoveredPath(null)}
              className={`relative p-8 rounded-xl border bg-gradient-to-br ${path.bgGradient} ${path.borderColor} ${path.hoverBorder} transition-all duration-500 card-hover overflow-hidden`}
            >
              {/* Large number background */}
              <span className={`absolute top-4 right-4 font-display text-8xl font-bold ${path.numberColor} select-none`}>
                {path.id}
              </span>

              {/* Icon */}
              <div className={`relative z-10 w-16 h-16 rounded-full bg-dark-800/50 flex items-center justify-center mb-6 border ${path.borderColor}`}>
                <path.icon className={`w-8 h-8 ${path.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className={`relative z-10 font-display text-2xl font-bold mb-4 ${
                path.color === 'gold' ? 'text-gold-500' : 
                path.color === 'burgundy' ? 'text-burgundy-500' : 'text-gray-300'
              }`}>
                {path.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 font-body text-gray-400 leading-relaxed mb-6">
                {path.description}
              </p>

              {/* Characters */}
              <div className="relative z-10">
                <p className="font-accent text-xs tracking-widest uppercase text-gray-500 mb-2">
                  Personajes
                </p>
                <p className="font-body text-sm text-gray-500 italic">
                  {path.characters}
                </p>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 ${
                  path.color === 'gold' ? 'bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600' :
                  path.color === 'burgundy' ? 'bg-gradient-to-r from-burgundy-600 via-burgundy-400 to-burgundy-600' :
                  'bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600'
                }`}
                initial={{ scaleX: 0 }}
                animate={hoveredPath === path.id ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mt-16"
        >
          <blockquote className="font-display italic text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            {t('paths.quote')}
          </blockquote>
          <p className="font-accent text-gold-500 tracking-wider mt-4">
            {t('paths.quoteRef')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
