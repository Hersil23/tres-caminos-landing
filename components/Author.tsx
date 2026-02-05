'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { Instagram, Mail, Globe } from 'lucide-react'
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
    <section id="author" className="section-full relative bg-gradient-to-b from-dark-700 via-dark-800 to-dark-700 overflow-hidden" ref={ref}>
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-grain" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          {/* Label */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block font-accent text-gold-500 tracking-widest text-sm uppercase border border-gold-500/30 px-4 py-2 rounded-full">
              {t('author.ministry')}
            </span>
          </motion.div>

          {/* Logo grande del ministerio */}
          <motion.div
            variants={itemVariants}
            className="mb-10"
          >
            <Image
              src="/images/logo-ministerio.png"
              alt="Alimento a tu Espíritu"
              width={350}
              height={350}
              className="mx-auto"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(236, 213, 110, 0.2))' }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-body text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8"
          >
            {t('author.description')}
          </motion.p>

          {/* Author name */}
          <motion.p
            variants={itemVariants}
            className="font-display text-2xl md:text-3xl text-white tracking-widest mb-10"
          >
            {t('author.name')}
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-dark-800/50 border border-gold-500/20 rounded-lg text-gray-400 hover:text-gold-500 hover:border-gold-500/50 transition-all group"
              >
                <link.icon className="w-5 h-5 group-hover:text-gold-500 transition-colors" />
                <span className="font-accent text-sm tracking-wider">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
