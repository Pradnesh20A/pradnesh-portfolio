import { motion } from 'framer-motion'
import { Brain, FileSearch, Server, Sparkles } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { services } from '../data/services'

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain size={28} />,
  'file-search': <FileSearch size={28} />,
  server: <Server size={28} />,
  sparkles: <Sparkles size={28} />,
}

export default function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeading title="What I Do" subtitle="Core capabilities and areas of focus" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ delay: i * 0.08 }}
          >
            <GlassCard className="h-full">
              <div className="mb-4 inline-flex rounded-xl bg-accent-indigo/10 p-3 text-accent-indigo">
                {iconMap[service.icon]}
              </div>
              <h3 className="mb-2 text-base font-semibold text-text-primary">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {service.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
