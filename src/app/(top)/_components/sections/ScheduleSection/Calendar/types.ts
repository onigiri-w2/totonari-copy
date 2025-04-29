import type { EventDay } from "@shared/types"

export type DayState = {
  month: number
  day: number
  isThisMonth: boolean
  joinable: boolean
}
export type CalendarDataType = {
  yearMonth: { year: number; month: number }
  days: DayState[]
  eventDays: EventDay[]
}
