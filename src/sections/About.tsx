import { motion } from 'framer-motion'
import { Lightbulb, Cpu, Database, Code2, Workflow } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { personal } from '../data/personal'

const interestIcons: Record<string, React.ReactNode> = {
  'Artificial Intelligence': <Cpu size={16} />,
  'Machine Learning': <Workflow size={16} />,
  'Generative AI': <Lightbulb size={16} />,
  'RAG Systems': <Database size={16} />,
  'Agentic AI': <Cpu size={16} />,
  'Backend Engineering': <Code2 size={16} />,
  'Enterprise Applications': <Database size={16} />,
}

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-gradient-radial-center">
      <SectionHeading title="About Me" subtitle="My journey in building intelligent systems" />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Summary */}
        <motion.div
          className="lg:col-span-3"
          variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
        >
          <GlassCard hoverGlow={false} className="h-full">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex-1">
                <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                  {personal.aboutSummary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {personal.aboutInterests.map((interest) => (
                    <span
                      key={interest}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-glass-border bg-dark-700/50 px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent-indigo/30 hover:text-text-primary"
                    >
                      {interestIcons[interest]}
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="shrink-0 md:w-48 lg:w-56">
                <div className="relative overflow-hidden rounded-2xl border border-glass-border bg-dark-800 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-indigo/20 to-transparent" />
                  <img 
                    src="/pradnesh-portfolio/images/profile.jpg" 
                    alt="Pradnesh Arul Sahaya Raj" 
                    className="relative z-10 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          className="lg:col-span-2"
          variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
        >
          <GlassCard hoverGlow={false} className="h-full">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-text-muted">
              My Journey
            </h3>
            <div className="relative space-y-5">
              {/* Vertical line */}
              <div className="absolute bottom-0 left-[7px] top-1 w-px bg-gradient-to-b from-accent-indigo via-accent-violet to-transparent" />

              {personal.journey.map((step, i) => (
                <motion.div
                  key={step.label}
                  className="relative flex items-start gap-4 pl-6"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent-indigo bg-dark-900" />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{step.label}</p>
                    <p className="text-xs text-text-muted">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
