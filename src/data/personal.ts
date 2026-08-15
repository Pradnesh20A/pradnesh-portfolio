export const personal = {
  name: 'Pradnesh A',
  fullName: 'Pradnesh Arul Sahaya Raj',
  title: 'AI/ML Developer & Software Engineer',
  tagline: 'AI/ML Developer • Software Engineer • AI Systems Builder',
  heroHeading: "Hi, I'm Pradnesh.",
  heroSubheading: 'AI/ML Developer & Software Engineer',
  heroDescription:
    'I build intelligent applications, AI-powered systems, and scalable software that turn complex problems into practical solutions.',
  statusBadge: 'Building intelligent systems',
  aboutSummary:
    'I am passionate about building practical AI systems and software applications that solve real-world problems. My work sits at the intersection of artificial intelligence, machine learning, and modern software engineering — turning complex ideas into production-ready solutions.',
  aboutInterests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Generative AI',
    'RAG Systems',
    'Agentic AI',
    'Backend Engineering',
    'Enterprise Applications',
  ],
  journey: [
    { label: 'VIT Vellore', description: 'Software Engineering' },
    { label: 'AI Specialization', description: 'Post Graduate Program in AI' },
    { label: 'Professional Development', description: 'Software & AI Engineering' },
    { label: 'Current Focus', description: 'AI/ML & Intelligent Systems' },
  ],
} as const

export const social = {
  github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/Pradnesh20A',
  linkedin:
    import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/pradnesha2002/',
  email: import.meta.env.VITE_EMAIL || 'pradnesharul@gmail.com',
  githubUsername: import.meta.env.VITE_GITHUB_USERNAME || 'Pradnesh20A',
  phone: '9842008998',
  instagram: 'https://instagram.com/pradnesh_arul',
} as const
