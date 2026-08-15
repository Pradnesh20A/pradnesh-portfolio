import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { education } from '../data/education'

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading title="Education" subtitle="Academic background and qualifications" />

      <div className="mx-auto max-w-3xl space-y-6">
        {education.map((entry, i) => (
          <motion.div
            key={entry.id}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="relative overflow-hidden">
              {/* Accent bar */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent-cyan to-accent-blue" />

              <div className="flex items-start gap-4 pl-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-primary">{entry.institution}</h3>
                  <p className="text-sm text-accent-cyan">{entry.degree}</p>
                  <p className="mt-1 text-sm text-text-muted">{entry.field}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}

        {/* IELTS Score */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ delay: 0.3 }}
        >
          <GlassCard className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent-violet to-accent-indigo" />
            
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start pl-5 py-4">
              <div className="flex flex-1 items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-violet/10 text-accent-violet">
                  <Award size={24} />
                </div>
                <div className="w-full">
                  <h3 className="text-base font-bold text-text-primary">IELTS Academic</h3>
                  <p className="text-sm text-accent-violet">Overall Band Score: 6.5</p>
                  <p className="mt-1 text-sm text-text-muted">CEFR Level: B2</p>
                  
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-lg">
                    <div className="rounded-lg bg-dark-700/50 p-2 text-center">
                      <p className="text-xs text-text-muted">Listening</p>
                      <p className="font-semibold text-text-primary">7.0</p>
                    </div>
                    <div className="rounded-lg bg-dark-700/50 p-2 text-center">
                      <p className="text-xs text-text-muted">Reading</p>
                      <p className="font-semibold text-text-primary">6.0</p>
                    </div>
                    <div className="rounded-lg bg-dark-700/50 p-2 text-center">
                      <p className="text-xs text-text-muted">Writing</p>
                      <p className="font-semibold text-text-primary">6.0</p>
                    </div>
                    <div className="rounded-lg bg-dark-700/50 p-2 text-center">
                      <p className="text-xs text-text-muted">Speaking</p>
                      <p className="font-semibold text-text-primary">6.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
