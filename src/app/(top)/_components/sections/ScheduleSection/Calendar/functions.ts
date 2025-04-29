import type { EventDay } from "@shared/types"
import type { DayState } from "./types"

// 7つずつの配列に分割する
export const toChunk = <T>(array: T[], size: number) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size),
  )
}

// 0埋め
export function padZero(num: number) {
  num = parseInt(num.toString(), 10)
  return num < 10 ? `0${num}` : `${num}`
}

// 月と日を "MM/DD" 形式の文字列に変換
export const formatMonthDay = (month: number, day: number): string => {
  const mStr = padZero(month)
  const dStr = padZero(day)
  return `${mStr}/${dStr}`
}

// 日付のテキスト色を決定
export const getDayTextColor = (day: DayState, eventDays: EventDay[]) => {
  if (!day.isThisMonth) return 'text-light-gray'
  const monthDay = formatMonthDay(day.month, day.day)
  const eventDay = eventDays.find(
    (d) => formatMonthDay(d.month, d.day) === monthDay,
  )

  if (eventDay) return 'text-[white]'
  return 'text-black'
}

// 日付の背景色を決定
export const getDayBgColor = (day: DayState, eventDays: EventDay[]) => {
  if (!day.isThisMonth) return 'bg-transparent'
  const monthDay = formatMonthDay(day.month, day.day)
  const eventDay = eventDays.find(
    (d) => formatMonthDay(d.month, d.day) === monthDay,
  )

  if (!eventDay) return 'bg-transparent'
  if (eventDay.isFull) return 'bg-gray'
  return 'bg-accent'
}

// 日付のフォントの太さを決定
export const getDayFontWeight = (day: DayState, eventDays: EventDay[]) => {
  if (!day.isThisMonth) return 'font-regular'
  const monthDay = formatMonthDay(day.month, day.day)
  const eventDay = eventDays.find(
    (d) => formatMonthDay(d.month, d.day) === monthDay,
  )

  if (!eventDay) return 'font-regular'
  return 'font-bold'
}



