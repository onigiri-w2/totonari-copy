import TimeSlot from './TimeSlot'

type Props = {
  day: string
  slots: {
    time: string
    description: string
    bubble?: string
  }[]
}
const DayBlock = ({ day, slots }: Props) => {
  return (
    <div>
      <p className="w-[72px] rounded-full border-1 border-primary bg-accent py-[7px] text-center font-cabin text-[11px] font-semibold leading-none tracking-wider md:w-[75px] md:text-[13px] lg:w-[72px] lg:text-[11px]">
        {day}
      </p>
      <div className="pl-[16px] pt-[12px] lg:space-y-[12px] lg:pt-[20px]">
        {slots.map((slot, i) => {
          const hasBubble = slot.bubble !== undefined
          return (
            <TimeSlot
              key={i}
              time={slot.time}
              description={slot.description}
              bubble={slot.bubble}
              align={hasBubble ? 'center' : 'start'}
            />
          )
        })}
      </div>
    </div>
  )
}

export default DayBlock
