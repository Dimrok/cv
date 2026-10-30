import { DateTime } from 'luxon'

const INTEREST = [
  'software_engineering',
  'process_optimization',
  'project_management',
  'team_management',
  'hiking',
  'role_playing_games',
  'woodworking',
  'handcraft',
] as const
export type Interrest = (typeof INTEREST)[number]

export type Link = {
  label: string
  href: string
}

export type SkillLevel = {
  name: string
  /** Self-assessed level, from 0 to 5. */
  level: number
  /** Not used professionally recently. */
  stale?: boolean
}

export type Language = {
  name: string
  level: string
}

export type Self = {
  firstName: string
  lastName: string
  headline: string
  summary: string
  locations: string[]
  birth: DateTime
  countryOfOrigin: 'France'
  phone: Link
  email: Link
  links: Link[]
  languages: Language[]
  skills: SkillLevel[]
  professionalInterests: Interrest[]
  personalInterests: Interrest[]
}
