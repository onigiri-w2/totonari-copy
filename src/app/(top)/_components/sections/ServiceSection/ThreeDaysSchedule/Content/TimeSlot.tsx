import Bubble from './Bubble'

type Props = {
  time: string
  description: string
  bubble?: string
  align?: 'start' | 'center'
}
const TimeSlot = ({ time, description, bubble, align = 'start' }: Props) => {
  const splitedDescription = description.split('\\n')
  return (
    <div
      className={`flex ${align === 'start' ? 'items-start' : 'items-center'}`}
    >
      <p
        className="w-[48px] shrink-0 font-cabin text-[10px] font-medium leading-[27px] tracking-wider 
          md:w-[56px] md:text-[13px] md:leading-[33px]
          lg:w-[52px] lg:text-[11px] lg:leading-[27px]"
      >
        {time}
      </p>
      <p
        className={`${bubble && 'shrink-0'} text-[13px] leading-[27px] tracking-wide 
        md:text-[15px]
        md:leading-[33px] lg:leading-[27px]`}
      >
        {splitedDescription.map((desc, i) => (
          <span key={i}>
            {desc}
            {i !== splitedDescription.length - 1 && <br />}
          </span>
        ))}
      </p>
      <div className="relative ml-[12px] max-w-[196px] flex-1 md:max-w-[232px]">
        {bubble && (
          <div className="insets absolute -translate-y-1/2">
            <Bubble text={bubble} />
          </div>
        )}
      </div>
    </div>
  )
}

export default TimeSlot
