import { Duration, type DurationObjectUnits } from 'luxon'
type Unit = keyof DurationObjectUnits

export function toHuman(dur: Duration, smallestUnit: Unit = 'months'): string {
  const units: Unit[] = ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds']
  const smallestIdx = units.indexOf(smallestUnit)
  const entries = Object.entries(
    dur
      .shiftTo(...units)
      .normalize()
      .toObject(),
  ).filter(([_unit, amount], idx) => amount > 0 && idx <= smallestIdx)
  const dur2 = Duration.fromObject(
    entries.length === 0 ? { [smallestUnit]: 0 } : Object.fromEntries(entries),
  )
  return dur2.toHuman()
}
