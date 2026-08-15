import { type ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 },
  },
}

export default function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`relative py-20 md:py-28 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  )
}

export { sectionVariants }
