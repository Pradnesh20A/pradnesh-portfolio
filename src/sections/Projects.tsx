import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import Button from '../components/Button'
import { projects } from '../data/projects'

const categoryColors: Record<string, string> = {
  ai: 'bg-violet-500/15 text-violet-400 border-violet-500/20',
  ml: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
  software: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
}

const categoryLabels: Record<string, string> = {
  ai: 'AI',
  ml: 'ML',
  software: 'Software',
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-gradient-radial-center">
      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of projects I've built — from AI platforms to intelligent applications"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="flex h-full flex-col">
              {/* Category badge */}
              <div className="mb-4">
                <span className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium ${categoryColors[project.category]}`}>
                  {categoryLabels[project.category]}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="mb-2 text-lg font-bold text-text-primary">
                {project.title}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-text-muted">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-dark-600/50 px-2 py-0.5 text-xs text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <Button
                  variant="secondary"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<GithubIcon size={14} />}
                  className="!px-4 !py-2 !text-xs"
                >
                  GitHub
                </Button>
                {project.liveUrl && (
                  <Button
                    variant="ghost"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<ExternalLink size={14} />}
                    className="!px-4 !py-2 !text-xs"
                  >
                    View Project
                  </Button>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
