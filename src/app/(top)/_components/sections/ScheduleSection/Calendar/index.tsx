"use client"

import CalendarList from './CalendarList'
import type { DayState } from './types'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import React from 'react'
import type { EventDay } from "@shared/types";
import { useEventSchedule } from '../hooks/useEventSchedule'

dayjs.extend(timezone)
dayjs.extend(utc)


const CalendarContainer = () => {
  const { eventDays, isLoading, error } = useEventSchedule();

  return (
    <div className='w-full h-full'>
      <CalendarList calendarList={displayMonths.map((target) => createCalendarData(target, eventDays))} />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <p className="text-[14px] text-white font-medium">読み込み中...</p>
        </div>
      )}

      {/* オーバーレイ - エラー時 */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <p className="text-[14px] text-white font-medium">読み込みに失敗しました</p>
        </div>
      )}
    </div>
  )
}


const displayMonths = [
  dayjs().tz('Asia/Tokyo').startOf('month'),
  dayjs().tz('Asia/Tokyo').startOf('month').add(1, 'month'),
  dayjs().tz('Asia/Tokyo').startOf('month').add(2, 'month'),
];
function createCalendarData(target: dayjs.Dayjs, eventDays: EventDay[]) {
  return {
    yearMonth: { year: target.year(), month: target.month() + 1 },
    days: createCalendarDays(target),
    eventDays: eventDays ?? [],
  }
}
/**
 * カレンダーの月表示に必要な日付データを生成する
 * @param targetDate 対象月を含む日付
 * @returns 月表示に必要な日付データの配列
 */
function createCalendarDays(targetDate: dayjs.Dayjs): DayState[] {
  const calendar_grid_size = 42 // 6行 × 7列 (6週間分の表示)

  const monthStart = targetDate.startOf('month')
  const monthEnd = targetDate.endOf('month')
  const prevMonthEnd = monthStart.subtract(1, 'day')
  const currentMonth = targetDate.month() + 1

  // 当月の日付データを生成
  const currentMonthDays = Array.from({ length: monthEnd.date() }, (_, i) => {
    const day = i + 1
    return { month: currentMonth, day, isThisMonth: true, joinable: true }
  })

  // 月曜始まりのカレンダー用に前月の日付を計算
  const prevMonthDaysCount = (monthStart.day() + 6) % 7
  const prevMonthDays = Array.from({ length: prevMonthDaysCount }, (_, i) => {
    const day = prevMonthEnd.date() - prevMonthDaysCount + i + 1
    return { month: currentMonth, day, isThisMonth: false, joinable: false }
  })

  // グリッドを埋めるために必要な翌月の日付数を計算
  const nextMonthDaysCount = calendar_grid_size - currentMonthDays.length - prevMonthDaysCount
  const nextMonthDays = Array.from({ length: nextMonthDaysCount }, (_, i) => {
    const day = i + 1
    return { month: currentMonth, day, isThisMonth: false, joinable: false }
  })

  // 日付データを連結して返す
  return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays]
}

export default CalendarContainer
