import type { DateTime } from 'luxon'

export type Education = {
  institution: string
  degree: string
  dates: [DateTime, DateTime]
  activities: string[]
  description?: string
  logo?: string
}
