export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    id: 'ai-engineering',
    title: 'AI Engineering',
    description:
      'Building practical AI and LLM-powered applications that solve real business problems.',
    icon: 'brain',
  },
  {
    id: 'idp',
    title: 'Intelligent Document Processing',
    description:
      'Turning unstructured documents into structured and actionable information.',
    icon: 'file-search',
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    description:
      'Building APIs, business logic, database systems, and scalable backend services.',
    icon: 'server',
  },
  {
    id: 'ai-apps',
    title: 'AI-Powered Applications',
    description:
      'Combining traditional software engineering with modern AI capabilities.',
    icon: 'sparkles',
  },
]
