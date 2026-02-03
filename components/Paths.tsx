'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Crown, Scale, Skull, ChevronRight } from 'lucide-react'

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
      gradient: 'from-gold-500/20 to-gold-700/10',
      borderColor: 'border-gold-500/30',
      iconColor: 'text-gold-500',
      pages: '16-66',
    },
    {
      id: 2,
      icon: Scale,
      title: t('path2.title'),
      description: t('path2.description'),
      characters: t('path2.characters'),
      color: 'gray',
      gradient: 'from-gray-500/20 to-gray-700/10',
      borderColor: 'border-gray-500/30',
      iconColor: 'text-gray-400',
      pages: '68-118',
    },
    {
      id: 3,
      icon: Skull,
      title: t('path3.title'),
      description: t('path3.description'),
      characters: t('path3.characters'),
      color: 'burgundy',
      gradient: 'from-burgundy-500/20 to-burgundy-700/10',
      borderColor: 'border-burgundy-500/30',
      iconColor: 'text-burgundy-400',
      pages: '120-170',
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
    <section id="paths" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-dark-600" />
      <div className="absolute inset-0 bg-grain opacity-30" />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-burgundy-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block font-accent text-gold-500 tracking-[0.3em] text-sm uppercase border border-gold-500/30 px-4 py-2 rounded-full">
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
          className="grid md:grid-cols-3 gap-8"
        >
          {paths.map((path, index) => (
            <motion.div
              key={path.id}
              variants={itemVariants}
              className={`relative group`}
              onMouseEnter={() => setHoveredPath(path.id)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              <motion.div
                className={`relative h-full p-8 rounded-2xl bg-gradient-to-b ${path.gradient} border ${path.borderColor} backdrop-blur-sm overflow-hidden transition-all duration-500`}
                whileHover={{ 
                  y: -10,
                  borderColor: path.color === 'gold' ? 'rgba(201, 162, 39, 0.6)' : 
                               path.color === 'burgundy' ? 'rgba(139, 35, 35, 0.6)' : 
                               'rgba(156, 163, 175, 0.6)'
                }}
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b ${path.gradient}`} />
                
                {/* Path Number */}
                <div className="absolute top-4 right-4 font-display text-6xl font-bold opacity-10">
                  {path.id}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-dark-500/50 flex items-center justify-center mb-6 border ${path.borderColor}`}
                    animate={hoveredPath === path.id ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path.icon className={`w-8 h-8 ${path.iconColor}`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className={`font-display text-2xl font-bold mb-4 ${path.iconColor}`}>
                    {path.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-gray-400 leading-relaxed mb-6">
                    {path.description}
                  </p>

                  {/* Characters */}
                  <div className="mb-6">
                    <p className="font-accent text-xs tracking-wider text-gray-500 uppercase mb-2">
                      Personajes
                    </p>
                    <p className="font-body text-sm text-gray-500 italic">
                      {path.characters}
                    </p>
                  </div>

                  {/* Pages Badge */}
                  <div className="flex items-center justify-between">
                    <span className="font-accent text-xs tracking-wider text-gray-600">
                      Páginas {path.pages}
                    </span>
                    <motion.div
                      className={`w-8 h-8 rounded-full ${path.borderColor} border flex items-center justify-center`}
                      animate={hoveredPath === path.id ? { x: 5 } : { x: 0 }}
                    >
                      <ChevronRight className={`w-4 h-4 ${path.iconColor}`} />
                    </motion.div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
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
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mt-20"
        >
          <blockquote className="font-display italic text-2xl text-gray-400 max-w-3xl mx-auto">
            "Hay camino que al hombre le parece derecho, pero su fin es camino de muerte"
          </blockquote>
          <p className="font-accent text-gold-500 tracking-wider mt-4">
            Proverbios 14:12
          </p>
        </motion.div>
      </div>
    </section>
  )
}
