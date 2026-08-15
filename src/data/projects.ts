export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  category: 'ai' | 'ml' | 'software'
  githubUrl: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'enterprise-ai-platform',
    title: 'Enterprise AI Platform',
    description:
      'Enterprise AI Document Intelligence Platform focused on document processing, intelligent information extraction, RAG pipelines, LLM workflows, and enterprise AI capabilities.',
    tags: ['Python', 'FastAPI', 'RAG', 'LLM', 'Document Intelligence', 'AI'],
    category: 'ai',
    githubUrl: 'https://github.com/Pradnesh20A/enterprise-ai-platform',
    featured: true,
  },
  {
    id: 'chess-ai-python',
    title: 'Chess AI Python',
    description:
      'A modern Chess AI application built with Python and Pygame, featuring a responsive graphical interface, dual timers, move logging, and a highly optimized Minimax AI engine enhanced with Alpha-Beta pruning, Piece-Square Tables, and MVV-LVA move ordering.',
    tags: ['Python', 'Pygame', 'AI', 'Minimax', 'Alpha-Beta Pruning'],
    category: 'ai',
    githubUrl: 'https://github.com/Pradnesh20A/Chess_AI_Python',
    featured: true,
  },
  {
    id: 'anemia-prediction',
    title: 'Anemia Prediction Web App',
    description:
      'A machine-learning based web application for anemia prediction, enabling users to input health parameters and receive AI-driven diagnostic predictions.',
    tags: ['Python', 'Machine Learning', 'Web Application', 'Healthcare AI'],
    category: 'ml',
    githubUrl: 'https://github.com/Pradnesh20A/Anemia-prediction-web-application',
    featured: true,
  },
]
