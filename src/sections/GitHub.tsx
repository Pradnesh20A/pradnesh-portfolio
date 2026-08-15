import { motion } from 'framer-motion'
import { ExternalLink, GitFork, Star } from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import Button from '../components/Button'
import { social } from '../data/personal'
import { projects } from '../data/projects'

export default function GitHubSection() {
  return (
    <SectionWrapper id="github">
      <SectionHeading
        title="Explore My Code"
        subtitle="Open-source projects and repositories on GitHub"
      />

      {/* GitHub Profile Card */}
      <motion.div
        className="mb-10"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      >
        <GlassCard hoverGlow={false} className="flex flex-col items-center gap-5 p-8 text-center sm:flex-row sm:text-left">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent-indigo to-accent-violet text-white">
            <GithubIcon size={32} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-text-primary">@{social.githubUsername}</h3>
            <p className="mt-1 text-sm text-text-muted">
              Exploring AI, machine learning, and software engineering through code.
            </p>
          </div>
          <Button
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            icon={<ExternalLink size={14} />}
          >
            Visit Profile
          </Button>
        </GlassCard>
      </motion.div>

      {/* Repository Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ delay: i * 0.08 }}
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <GlassCard className="h-full">
                <div className="mb-3 flex items-center gap-2 text-accent-indigo">
                  <GitFork size={16} />
                  <span className="text-sm font-medium">{project.githubUrl.split('/').pop()}</span>
                </div>
                <p className="mb-4 text-sm text-text-muted line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                    {project.tags[0]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={12} /> 0
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> 0
                  </span>
                </div>
              </GlassCard>
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
