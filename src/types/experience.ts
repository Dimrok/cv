import type { DateTime } from 'luxon'

export type Stage = {
  hide: boolean
  name: string
  dates: [DateTime, DateTime]
  tags: string[]
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
