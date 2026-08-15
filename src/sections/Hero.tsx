import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import { personal, social } from '../data/personal'
import AnimatedBackground from '../components/AnimatedBackground'
import StatusBadge from '../components/StatusBadge'
import Button from '../components/Button'

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-radial-top" />
      <div className="absolute inset-0 grid-pattern" />
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-32 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          >
            <StatusBadge text={personal.statusBadge} />
          </motion.div>

          <motion.h1
            className="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            {personal.heroHeading.split('Pradnesh')[0]}
            <span className="gradient-text">Pradnesh</span>
            {personal.heroHeading.split('Pradnesh')[1]}
          </motion.h1>

          <motion.p
            className="mt-4 text-lg font-medium text-text-secondary sm:text-xl md:text-2xl"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            {personal.heroSubheading}
          </motion.p>

          <motion.p
            className="mt-6 max-w-2xl text-base text-text-muted sm:text-lg"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            {personal.heroDescription}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <Button
              href="#projects"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View My Work
            </Button>
            <Button
              variant="secondary"
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              icon={<GithubIcon size={16} />}
            >
              GitHub
            </Button>
          </motion.div>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="mt-6 text-sm text-text-muted transition-colors hover:text-accent-violet"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            Let's Connect →
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={20} className="text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
