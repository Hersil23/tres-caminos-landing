'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import Image from 'next/image'

interface CounterProps {
  target: number
  duration?: number
  inView: boolean
}

function Counter({ target, duration = 2000, inView }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      setCount(Math.floor(progress * target))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [target, duration, inView])

  return <span>{count}</span>
}

export default function About() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { number: 173, label: t('about.pages') },
    { number: 70, label: t('about.devotionals') },
    { number: 70, label: t('about.prayers') },
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
    <section id="about" className="section-full relative bg-dark-800 overflow-hidden" ref={ref}>
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-grain" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - Libro abierto */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-black/50">
              <Image
                src="/images/libro-abierto.png"
                alt="Devocional sobre David"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-800/50 to-transparent" />
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gold-500/5 rounded-xl blur-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-center lg:text-left"
          >
            {/* Label */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block font-accent text-gold-500 tracking-widest text-sm uppercase border border-gold-500/30 px-4 py-2 rounded-full">
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

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="font-body text-xl text-gray-400 leading-relaxed mb-12"
            >
              {t('about.description')}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-4 sm:p-6 bg-gold-500/5 border border-gold-500/10 rounded-lg card-hover"
                >
                  <div className="font-display text-4xl md:text-5xl font-bold text-gold-500 mb-2">
                    <Counter target={stat.number} inView={isInView} />
                  </div>
                  <div className="font-accent text-xs md:text-sm text-gray-400 tracking-wider uppercase">
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