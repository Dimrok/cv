import type { DateTime } from 'luxon'

const SKILLS = [
  'AI Agents',
  'AMQP',
  'Ansible',
  'Apache Beam',
  'AWS',
  'Airflow',
  'Balena',
  'Bash',
  'Build Tools',
  'C',
  'C++',
  'C++11',
  'C++14',
  'CI/CD',
  'Clean Architecture',
  'CyanScript',
  'Dataflow',
  'Design',
  'Docker',
  'Drake',
  'Electronics',
  'ESP8266',
  'Event Sourcing',
  'Express',
  'FastAPI',
  'Firebase',
  'GCP',
  'GitHub',
  'GitHub Actions',
  'GitLab',
  'Hiring',
  'Java',
  'JavaScript',
  'Jest',
  'Keycloak',
  'KiCad',
  'Laravel',
  'Linux',
  'M-Bus',
  'Management',
  'MCP',
  'MongoDB',
  'monorepo',
  'MQTT',
  'NestJS',
  'Next.js',
  'Node.js',
  'Nx',
  'OPA',
  'PHP',
  'Playwright',
  'PostgreSQL',
  'Prisma',
  'Processes',
  'Protobuf',
  'Pub/Sub',
  'Python3',
  'Qt',
  'React',
  'Redis',
  'REST',
  'Signal Analysis',
  'SSE',
  'Tailwind CSS',
  'Terraform',
  'TimescaleDB',
  'Tooling',
  'tRPC',
  'Turborepo',
  'TypeScript',
  'Vitest',
  'Vue3',
] as const
export type Skill = (typeof SKILLS)[number]

/** A `null` end date means the period is still ongoing. */
export type Period = [DateTime, DateTime | null]

export type Stage = {
  hide: boolean
  name: string
  dates: Period
  skills: Skill[]
  description?: string
  tasks: string[]
}

export type Experience = {
  company: string
  title: string
  location: string
  description?: string
  dates: Period
  about: string
  stages: Stage[]
}
