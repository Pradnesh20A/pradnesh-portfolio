import { motion } from 'framer-motion'
import {
  FileText, Scissors, Hash, Database, Search,
  Brain, Bot, Wrench, Building2, ArrowDown
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'

const flowSteps = [
  { icon: <FileText size={20} />, label: 'Documents', color: 'from-blue-500 to-blue-600' },
  { icon: <Scissors size={20} />, label: 'Document Processing', color: 'from-blue-500 to-indigo-600' },
  { icon: <Hash size={20} />, label: 'Chunking & Metadata', color: 'from-indigo-500 to-indigo-600' },
  { icon: <Database size={20} />, label: 'Embeddings', color: 'from-indigo-500 to-violet-600' },
  { icon: <Search size={20} />, label: 'Vector Database', color: 'from-violet-500 to-violet-600' },
  { icon: <Search size={20} />, label: 'RAG', color: 'from-violet-500 to-purple-600' },
  { icon: <Brain size={20} />, label: 'LLM', color: 'from-purple-500 to-purple-600' },
  { icon: <Bot size={20} />, label: 'Agents', color: 'from-purple-500 to-fuchsia-600' },
  { icon: <Wrench size={20} />, label: 'Tools / Function Calling', color: 'from-fuchsia-500 to-pink-600' },
  { icon: <Building2 size={20} />, label: 'Enterprise AI Applications', color: 'from-pink-500 to-cyan-600' },
]

export default function AIFlow() {
  return (
    <SectionWrapper id="ai-flow">
      <SectionHeading
        title="Things I'm Building"
        subtitle="How I think about modern AI systems — from raw documents to enterprise applications"
      />

      {/* Desktop: Horizontal flow with wrapping */}
      <div className="hidden md:block">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {flowSteps.map((step, i) => (
            <motion.div
              key={step.label}
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <motion.div
                className="group relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`flex items-center gap-2.5 rounded-xl border border-glass-border bg-glass-bg px-4 py-3 backdrop-blur-sm transition-all group-hover:border-white/10 group-hover:shadow-lg`}>
                  <div className={`rounded-lg bg-gradient-to-br ${step.color} p-1.5 text-white`}>
                    {step.icon}
                  </div>
                  <span className="text-sm font-medium text-text-primary whitespace-nowrap">{step.label}</span>
                </div>
              </motion.div>

              {i < flowSteps.length - 1 && (
                <motion.div
                  className="text-text-muted"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + 0.05 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: Vertical flow */}
      <div className="md:hidden">
        <div className="relative mx-auto flex max-w-sm flex-col items-center gap-2">
          {flowSteps.map((step, i) => (
            <motion.div
              key={step.label}
              className="flex w-full flex-col items-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <div className="flex w-full items-center gap-3 rounded-xl border border-glass-border bg-glass-bg px-4 py-3 backdrop-blur-sm">
                <div className={`rounded-lg bg-gradient-to-br ${step.color} p-1.5 text-white`}>
                  {step.icon}
                </div>
                <span className="text-sm font-medium text-text-primary">{step.label}</span>
              </div>
              {i < flowSteps.length - 1 && (
                <ArrowDown size={16} className="my-1 text-text-muted" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
