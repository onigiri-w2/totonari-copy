import Calendar from './Calendar'
import ChevronLeft from './chevron-left.svg'
import ChevronRight from './chevron-right.svg'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import type { CalendarDataType } from './types'

type Props = {
  calendarList: CalendarDataType[]
}
export default function CalendarList({ calendarList }: Props) {
  const [selectedSnap, setSelectedSnap] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    startIndex: 0,
    watchDrag: false,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }, [emblaApi])
  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => {
      setSelectedSnap(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  return (
    <div>
      <Header
        {...{
          scrollNext,
          scrollPrev,
          selectedSnap,
        }}
        yearMonths={calendarList.map((c) => c.yearMonth)}
      />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {calendarList.map((calendar, index) => (
            <div
              key={index}
              className="w-full min-w-0 max-w-full flex-auto shrink-0 grow-0"
            >
              <Calendar calendar={calendar} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

type HeaderProps = {
  scrollPrev: () => void
  scrollNext: () => void
  yearMonths: { year: number; month: number }[]
  selectedSnap: number
}
function Header({
  scrollPrev,
  scrollNext,
  yearMonths,
  selectedSnap,
}: HeaderProps) {
  return (
    <div className="flex items-center justify-between bg-calendar-head p-[8px]">
      <button
        onClick={scrollPrev}
        className={`${selectedSnap === 0 && 'opacity-30'}`}
      >
        <ChevronLeft className="cursor-pointer" />
      </button>
      <div className="flex flex-col items-center justify-center font-cabin font-semibold leading-none">
        <span className="text-[9px] text-lighterGray">
          {yearMonths[selectedSnap].year}
        </span>
        <span className="text-[26px] text-gray">
          {yearMonths[selectedSnap].month}
        </span>
      </div>
      <button
        onClick={scrollNext}
        className={`${selectedSnap === yearMonths.length - 1 && 'opacity-30'}`}
      >
        <ChevronRight className="cursor-pointer" />
      </button>
    </div>
  )
}
