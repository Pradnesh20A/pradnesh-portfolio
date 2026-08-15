import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-gradient-radial-center">
      <SectionHeading title="Experience" subtitle="Professional experience and contributions" />

      <div className="mx-auto max-w-3xl space-y-6">
        {experience.map((entry, i) => (
          <motion.div
            key={entry.id}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="relative overflow-hidden">
              {/* Accent bar */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent-indigo to-accent-violet" />

              <div className="pl-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-indigo/10 text-accent-indigo">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary">{entry.company}</h3>
                    <p className="text-sm text-accent-violet">{entry.role}</p>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-text-muted">
                  {entry.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {entry.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-lg border border-glass-border bg-dark-700/50 px-2.5 py-1 text-xs text-text-secondary"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
