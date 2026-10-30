import type { Period, Skill } from './experience'

export type Project = {
  name: string
  dates: Period
  about: string
  url?: string
  skills: Skill[]
  tasks: string[]
}
