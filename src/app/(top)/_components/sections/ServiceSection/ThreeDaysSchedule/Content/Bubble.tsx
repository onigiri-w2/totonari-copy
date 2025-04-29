type Props = {
  text: string
}
const Bubble = ({ text }: Props) => {
  const textLine = text.split('\\n')

  return (
    <div className="relative pl-[11px]">
      <div className="rounded-[5px] border-1 border-primary px-[16px] py-[7px]">
        <p
          className="text-[9px] leading-[13px] tracking-wide
        md:text-[11px] md:leading-[16px]
        lg:text-[9px] lg:leading-[13px]
        "
        >
          {textLine.map((line, index) => {
            return (
              <span key={index}>
                {index !== 0 && <br />}
                {line}
              </span>
            )
          })}
        </p>
      </div>
      <div className="absolute left-0 top-[calc(50%_-_6px)]">
        <div className="size-0 border-y-[6px] border-r-[12px] border-y-transparent border-r-primary"></div>
      </div>
      <div className="absolute left-[2px] top-[calc(50%_-_6px)]">
        <div className="size-0 border-y-[6px] border-r-[12px] border-y-transparent border-r-secondary"></div>
      </div>
    </div>
  )
}

export default Bubble
