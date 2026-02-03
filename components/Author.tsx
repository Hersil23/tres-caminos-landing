'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram, Mail, Globe, BookOpen } from 'lucide-react'
import Image from 'next/image'

export default function Author() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/alimentoatuespiritu', label: '@alimentoatuespiritu' },
    { icon: Mail, href: 'mailto:info@alimentoatuespiritu.org', label: 'info@alimentoatuespiritu.org' },
    { icon: Globe, href: 'https://www.alimentoatuespiritu.org', label: 'www.AlimentoATuEspiritu.org' },
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
    <section id="author" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-600 via-burgundy-900/20 to-dark-600" />
      <div className="absolute inset-0 bg-grain opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block font-accent text-gold-500 tracking-[0.3em] text-sm uppercase border border-gold-500/30 px-4 py-2 rounded-full">
              {t('author.label')}
            </span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-gold-500/20 rounded-lg transform rotate-3" />
              <div className="absolute -inset-4 border border-gold-500/10 rounded-lg transform -rotate-3" />
              
              {/* Main Image Container */}
              <motion.div
                className="relative aspect-[4/5] rounded-lg overflow-hidden glow-gold"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/book-flyer.jpeg"
                  alt="Angel Morel - Autor"
                  fill
                  className="object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-600/80 via-transparent to-transparent" />
                
                {/* Ministry Logo Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 p-4 bg-dark-600/80 backdrop-blur-sm rounded-lg border border-gold-500/20">
                    <BookOpen className="w-8 h-8 text-gold-500" />
                    <div>
                      <p className="font-display text-gold-500 font-semibold">
                        {t('author.ministry')}
                      </p>
                      <p className="font-body text-sm text-gray-400">Ministerio</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 border border-gold-500/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-gold-500/10 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2"
          >
            {/* Name */}
            <motion.h2
              variants={itemVariants}
              className="font-display text-responsive-md font-bold text-white mb-2"
            >
              {t('author.name')}
            </motion.h2>

            {/* Title */}
            <motion.p
              variants={itemVariants}
              className="font-accent text-gold-500 tracking-wider text-lg mb-8"
            >
              {t('author.title')}
            </motion.p>

            {/* Decorative Line */}
            <motion.div variants={itemVariants} className="w-24 h-px bg-gold-500/50 mb-8" />

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="font-body text-xl text-gray-300 leading-relaxed mb-6"
            >
              {t('author.bio1')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-body text-xl text-gray-400 leading-relaxed mb-10"
            >
              {t('author.bio2')}
            </motion.p>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-dark-400/30 rounded-lg border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                    <link.icon className="w-5 h-5 text-gold-500" />
                  </div>
                  <span className="font-body text-gray-400 group-hover:text-gray-300 transition-colors">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
