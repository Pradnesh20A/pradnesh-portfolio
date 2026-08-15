export interface ExperienceEntry {
  id: string
  company: string
  role: string
  description: string
  focusAreas: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'nissigrid',
    company: 'NissiGrid Technologies',
    role: 'Software / AI Developer',
    description:
      'Working on software development and AI-related engineering, building intelligent solutions for enterprise applications.',
    focusAreas: [
      'Intelligent Document Processing',
      'Enterprise Applications',
      'Backend Development',
      'FastAPI',
      'PostgreSQL',
      'AI/ML Systems',
      'Business Workflow Automation',
    ],
  },
  {
    id: 'vit-united-chess-team',
    company: 'Vit United Chess Team',
    role: 'Active Tournament Player & Trophy Winner',
    description:
      'My chess experience honed my ability to analyze complex situations and make strategic decisions, which I can apply to problem-solving in a corporate setting and I learned to work collaboratively with diverse individuals, fostering strong teamwork and communication skills.',
    focusAreas: ['Strategic Decisions', 'Problem Solving', 'Teamwork', 'Communication', 'Jan 2021 - Present'],
  },
  {
    id: 'board-gamers-club-vit',
    company: 'Board Gamers Club Vit',
    role: 'Director of Logistics',
    description:
      'Successfully managed and operated a four-day indoor games stall during a college club event, overseeing setup, students interactions, and ensuring a smooth gaming experience for attendees.',
    focusAreas: ['Logistics', 'Event Management', 'Student Interaction', 'Jan 2021 - Dec 2021'],
  },
]
