import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code2, Database, Brain, GitBranch, BarChart3,
  FileCode, Globe, Server, Cpu, Workflow,
  Bot, Layers, HardDrive, Terminal, Monitor,
  LayoutDashboard
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { skillCategories } from '../data/skills'

const skillIconMap: Record<string, React.ReactNode> = {
  Python: <FileCode size={14} />,
  JavaScript: <Globe size={14} />,
  HTML: <Code2 size={14} />,
  CSS: <Code2 size={14} />,
  SQL: <Database size={14} />,
  FastAPI: <Server size={14} />,
  'REST APIs': <Globe size={14} />,
  SQLAlchemy: <Database size={14} />,
  PostgreSQL: <Database size={14} />,
  MySQL: <Database size={14} />,
  'Machine Learning': <Brain size={14} />,
  'Generative AI': <Cpu size={14} />,
  RAG: <Layers size={14} />,
  'LLM Applications': <Bot size={14} />,
  'Agentic AI': <Bot size={14} />,
  Embeddings: <Workflow size={14} />,
  'Vector Databases': <HardDrive size={14} />,
  'Document Intelligence': <Layers size={14} />,
  Git: <GitBranch size={14} />,
  GitHub: <GitBranch size={14} />,
  Docker: <HardDrive size={14} />,
  Linux: <Terminal size={14} />,
  'VS Code': <Monitor size={14} />,
  'Power BI': <BarChart3 size={14} />,
  Tableau: <LayoutDashboard size={14} />,
}

const categoryColorMap: Record<string, string> = {
  programming: 'from-blue-500/20 to-blue-600/5 border-blue-500/20',
  backend: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/20',
  'ai-ml': 'from-violet-500/20 to-violet-600/5 border-violet-500/20',
  tools: 'from-amber-500/20 to-amber-600/5 border-amber-500/20',
  'data-viz': 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/20',
}

const categoryAccent: Record<string, string> = {
  programming: 'text-blue-400',
  backend: 'text-emerald-400',
  'ai-ml': 'text-violet-400',
  tools: 'text-amber-400',
  'data-viz': 'text-cyan-400',
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <SectionWrapper id="skills" className="bg-gradient-radial-center">
      <SectionHeading title="Skills & Technologies" subtitle="Technologies and tools I work with" />

      {/* Category filters */}
      <motion.div
        className="mb-10 flex flex-wrap justify-center gap-2"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        <button
          onClick={() => setActiveCategory(null)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
            activeCategory === null
              ? 'bg-accent-indigo/20 text-accent-indigo'
              : 'text-text-muted hover:bg-white/5 hover:text-text-secondary'
          }`}
        >
          All
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? 'bg-accent-indigo/20 text-accent-indigo'
                : 'text-text-muted hover:bg-white/5 hover:text-text-secondary'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories
          .filter((cat) => !activeCategory || cat.id === activeCategory)
          .map((category, i) => (
            <motion.div
              key={category.id}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ delay: i * 0.08 }}
              layout
            >
              <GlassCard className="h-full">
                <h3 className={`mb-4 text-sm font-semibold uppercase tracking-wider ${categoryAccent[category.id] || 'text-text-muted'}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className={`inline-flex items-center gap-1.5 rounded-lg border bg-gradient-to-br px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:text-text-primary ${
                        categoryColorMap[category.id] || 'from-gray-500/20 to-gray-600/5 border-gray-500/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.15 }}
                    >
                      {skillIconMap[skill] || <Code2 size={14} />}
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
      </div>
    </SectionWrapper>
  )
}
