import { motion } from 'framer-motion'
import { Trophy, Crown, Target, Swords, Puzzle } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import Button from '../components/Button'
import { chess } from '../data/chess'

const statIcons: Record<string, React.ReactNode> = {
  'FIDE Rating': <Crown size={18} />,
  'Lichess Rapid': <Target size={18} />,
  'Lichess Classical': <Swords size={18} />,
  'Puzzle Rating': <Puzzle size={18} />,
}

function ChessIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16" />
      <path d="M8.5 14h7" />
      <path d="M9 6.38A3.001 3.001 0 0 1 12 2a3 3 0 0 1 3 4.38" />
      <path d="M9 6.38L8 8l2 2-1 4h6l-1-4 2-2-1-1.62" />
    </svg>
  )
}

export default function Chess() {
  return (
    <SectionWrapper id="chess" className="bg-gradient-radial-center">
      <SectionHeading
        title="Beyond the Code"
        subtitle="FIDE-rated chess player bringing strategic thinking to AI engineering"
      />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Chess story + journey */}
        <motion.div
          className="lg:col-span-3"
          variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
        >
          <GlassCard hoverGlow={false} className="h-full">
            {/* FIDE badge */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                <Trophy size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">FIDE Rated Player</p>
                <p className="text-2xl font-bold text-text-primary">{chess.fideRating}</p>
              </div>
            </div>

            <p className="mb-6 text-base leading-relaxed text-text-secondary">
              {chess.summary}
            </p>

            {/* Chess journey timeline */}
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Chess Journey
            </h4>
            <div className="relative space-y-4">
              <div className="absolute bottom-0 left-[7px] top-1 w-px bg-gradient-to-b from-amber-500 via-amber-400 to-transparent" />
              {chess.journey.map((step, i) => (
                <motion.div
                  key={step.label}
                  className="relative flex items-start gap-4 pl-6"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-amber-500 bg-dark-900" />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{step.label}</p>
                    <p className="text-xs text-text-muted">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Profile links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                variant="secondary"
                href={chess.profiles.chesscom.url}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ChessIcon size={16} />}
                className="!px-4 !py-2 !text-xs"
              >
                Chess.com
              </Button>
              <Button
                variant="secondary"
                href={chess.profiles.lichess.url}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ChessIcon size={16} />}
                className="!px-4 !py-2 !text-xs"
              >
                Lichess
              </Button>
            </div>
          </GlassCard>
        </motion.div>

        {/* Rating cards */}
        <motion.div
          className="lg:col-span-2"
          variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
        >
          <div className="grid grid-cols-2 gap-4">
            {chess.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <GlassCard className="text-center">
                  <div className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.accent} text-white`}>
                    {statIcons[stat.label] || <ChessIcon size={18} />}
                  </div>
                  <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs text-text-muted">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Game count card */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <GlassCard className="text-center">
              <div className="flex items-center justify-center gap-3">
                <Swords size={20} className="text-amber-400" />
                <div>
                  <p className="text-xl font-bold text-text-primary">4,100+</p>
                  <p className="text-xs text-text-muted">Games Played Online</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Chess + AI connection */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <GlassCard className="text-center">
              <p className="text-sm leading-relaxed text-text-muted">
                My love for chess directly inspired building a{' '}
                <a
                  href="https://github.com/Pradnesh20A/Chess_AI_Python"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-amber-400 transition-colors hover:text-amber-300"
                >
                  Chess AI Engine
                </a>{' '}
                with Minimax, Alpha-Beta pruning & position evaluation.
              </p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
