import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
  icon?: ReactNode
  href?: string
  target?: string
  rel?: string
  onClick?: (e: React.MouseEvent) => void
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-accent-indigo to-accent-violet text-white shadow-lg shadow-accent-indigo/20 hover:shadow-accent-indigo/40 hover:brightness-110',
  secondary:
    'glass border border-glass-border text-text-primary hover:bg-glass-hover hover:border-white/10',
  ghost:
    'text-text-secondary hover:text-text-primary hover:bg-white/5',
}

export default function Button({ variant = 'primary', children, className = '', icon, href, target, rel, onClick }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 cursor-pointer select-none ${variantClasses[variant]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.15 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        onClick={onClick}
        {...motionProps}
      >
        {icon}
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      {...motionProps}
    >
      {icon}
      {children}
    </motion.button>
  )
}
