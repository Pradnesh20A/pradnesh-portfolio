import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hoverGlow?: boolean
}

export default function GlassCard({ children, className = '', hoverGlow = true }: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 transition-all duration-300 ${hoverGlow ? 'gradient-border glass-hover' : ''} ${className}`}
      variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
      whileHover={hoverGlow ? { y: -4, transition: { duration: 0.2 } } : undefined}
    >
      {children}
    </motion.div>
  )
}
