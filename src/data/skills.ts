export interface SkillCategory {
  id: string
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: ['FastAPI', 'REST APIs', 'SQLAlchemy', 'PostgreSQL', 'MySQL'],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    skills: [
      'Machine Learning',
      'Generative AI',
      'RAG',
      'LLM Applications',
      'Agentic AI',
      'Embeddings',
      'Vector Databases',
      'Document Intelligence',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Infrastructure',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code'],
  },
  {
    id: 'data-viz',
    title: 'Data & Visualization',
    skills: ['Power BI', 'Tableau'],
  },
]
