export interface EducationEntry {
  id: string
  institution: string
  degree: string
  field: string
}

export const education: EducationEntry[] = [
  {
    id: 'vit-vellore',
    institution: 'VIT Vellore',
    degree: 'Integrated M.Tech',
    field: 'Software Engineering',
  },
  {
    id: 'vit-bangalore',
    institution: 'VIT Bangalore',
    degree: 'Post Graduate Program',
    field: 'Artificial Intelligence',
  },
]
