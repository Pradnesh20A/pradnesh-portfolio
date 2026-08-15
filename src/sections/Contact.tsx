import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/Icons'
import SectionWrapper from '../components/SectionWrapper'
import Button from '../components/Button'
import { social } from '../data/personal'

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-gradient-radial-top">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Let's Build Something{' '}
          <span className="gradient-text">Intelligent.</span>
        </motion.h2>

        <motion.p
          className="mt-5 text-base text-text-muted sm:text-lg"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Have an interesting project, AI idea, or opportunity? Let's connect.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <Button
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            icon={<GithubIcon size={16} />}
          >
            GitHub
          </Button>
          <Button
            variant="secondary"
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            icon={<LinkedinIcon size={16} />}
          >
            LinkedIn
          </Button>
          <Button
            variant="secondary"
            href={`mailto:${social.email}`}
            icon={<Mail size={16} />}
          >
            Email Me
          </Button>
          <Button
            variant="secondary"
            href={`tel:${social.phone}`}
            icon={<Phone size={16} />}
          >
            {social.phone}
          </Button>
          <Button
            variant="secondary"
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            icon={<InstagramIcon size={16} />}
          >
            Instagram
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
