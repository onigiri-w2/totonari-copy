import Label from './Label'

type Props = {
  step: number
  title: string
  isFirst?: boolean
  isLast?: boolean
  descriptionComponent: React.ReactNode
}
export default function Step({
  step,
  title,
  descriptionComponent,
  isFirst = false,
  isLast = false,
}: Props) {
  return (
    <div className="relative pb-[40px] lg:flex-1 lg:pb-0">
      <div className="flex flex-row lg:flex-col lg:items-center">
        <div className="max-h-[36px] min-w-[36px] lg:max-h-[40px] lg:min-w-[40px]">
          <Label step={step} />
        </div>
        <div className="ml-[20px] lg:ml-0 lg:mt-[36px]">
          <div className="flex h-[36px] flex-col justify-center lg:h-auto">
            <span className="text-[17px] font-medium leading-none tracking-40 lg:text-center">
              {title}
            </span>
          </div>
          <div className="mt-[16px] text-[12px] leading-loose tracking-40 md:text-[13px] lg:max-w-[240px] lg:px-[16px]">
            {descriptionComponent}
          </div>
        </div>
      </div>
      {!isLast && (
        <div className="absolute bottom-0 left-[19px] top-[40px] w-[1.5px] bg-accent lg:hidden" />
      )}
      {!isLast && (
        <div className="absolute left-[calc(50%_+_18px)] right-0 top-[20px] hidden h-[1.5px] bg-accent lg:block" />
      )}
      {!isFirst && (
        <div className="absolute left-0 right-[calc(50%_+_18px)] top-[20px] hidden h-[1.5px] bg-accent lg:block" />
      )}
    </div>
  )
}

