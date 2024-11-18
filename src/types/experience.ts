import type { DateTime } from 'luxon'

const SKILLS = [
  'AWS',
  'Ansible',
  'Bash',
  'Build Tools',
  'C',
  'C++',
  'C++11',
  'C++14',
  'CI/CD',
  'CyanScript',
  'Design',
  'Docker',
  'Drake',
  'Electronics',
  'Express',
  'GCP',
  'GitHub',
  'GitLab',
  'Hiring',
  'JavaScript',
  'Jest',
  'KiCad',
  'Linux',
  'Management',
  'MongoDB',
  'monorepo',
  'NestJS',
  'Node.js',
  'Processes',
  'Prisma',
  'Python3',
  'Qt',
  'REST',
  'Signal Analysis',
  'Terraform',
  'Tooling',
  'Turborepo',
  'TypeScript',
  'Vue3'
] as const;
export type Skill = typeof SKILLS[number];

export type Stage = {
  hide: boolean
  name: string
  dates: [DateTime, DateTime]
  skills: Skill[]
  description?: string
  tasks: string[]
}

export type Experience = {
  company: string
  title: string
  location: string
  description?: string
  dates: [DateTime, DateTime]
  about: string
  stages: Stage[]
}
