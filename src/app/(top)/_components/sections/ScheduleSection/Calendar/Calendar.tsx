import type { EventDay } from '@shared/types'
import { toChunk, getDayBgColor, getDayTextColor, getDayFontWeight } from './functions'
import type { CalendarDataType, DayState } from './types'

type Props = {
  calendar: CalendarDataType
}
const Calendar = ({ calendar }: Props) => {
  return (
    <div className="bg-[white] font-cabin leading-none">
      <Header />
      <Days days={calendar.days} eventDays={calendar.eventDays} />
    </div>
  )
}

const Header = () => {
  const weekLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  return (
    <div className="flex border-b-1 border-lightest-gray text-[11px] tracking-40 text-gray">
      {weekLabels.map((label, index) => {
        const isLast = index === weekLabels.length - 1
        return (
          <div
            key={label}
            className={`flex-1 text-center ${!isLast && 'border-r-1'} border-lightest-gray py-[8px]`}
          >
            {label}
          </div>
        )
      })}
    </div>
  )
}

type DaysProps = {
  days: DayState[]
  eventDays: EventDay[]
}
const Days = ({ days, eventDays }: DaysProps) => {
  return (
    <>
      {toChunk(days, 7).map((week, i) => {
        const isLastRow = i === toChunk(days, 7).length - 1

        return (
          <div
            key={i}
            className={`flex ${!isLastRow && 'border-b-1'} border-lightest-gray`}
          >
            {week.map((day, i2) => {
              const isLastCol = i2 === week.length - 1
              const textColor = getDayTextColor(day, eventDays)
              const bg = getDayBgColor(day, eventDays)
              const weight = getDayFontWeight(day, eventDays)

              return (
                <div
                  key={day.day}
                  className={`flex flex-1 items-center justify-center text-center text-[12px] ${textColor} ${!isLastCol && 'border-r-1'}
                  ${bg} ${weight} aspect-5/4 border-lightest-gray`}
                >
                  {day.day}
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  )
}


export default Calendar
