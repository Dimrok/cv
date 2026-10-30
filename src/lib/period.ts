import { DateTime } from 'luxon'
import { toHuman } from './duration-to-human'
import type { Period } from '@/types/experience'

export function periodEnd(period: Period): DateTime {
  return period[1] ?? DateTime.now()
}

export function formatPeriod(period: Period, format = 'LLLL yyyy'): string {
  const end = period[1] ? period[1].toFormat(format) : 'Present'
  return `${period[0].toFormat(format)} - ${end}`
}

export function periodDuration(period: Period): string {
  return toHuman(periodEnd(period).diff(period[0]))
}
