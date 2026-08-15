import { motion } from 'framer-motion'

interface StatusBadgeProps {
  text: string
}

export default function StatusBadge({ text }: StatusBadgeProps) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass-bg px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      {text}
    </motion.div>
  )
}
