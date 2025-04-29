export default function Caption() {
  return (
    <div className="flex space-x-[36px]">
      <div className="flex items-center">
        <div className="size-[20px] bg-accent lg:size-[28px]" />
        <div className="ml-[12px] text-[11px] font-bold leading-none md:text-[12px] lg:text-[13px]">
          <span className="tracking-[-42%]">・・・</span>
          <span className="ml-[8px] tracking-40">実施日</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="size-[20px] bg-gray lg:size-[28px]" />
        <div className="ml-[12px] text-[11px] font-bold leading-none md:text-[12px] lg:text-[13px]">
          <span className="tracking-[-42%]">・・・</span>
          <span className="ml-[8px] tracking-40">満員</span>
        </div>
      </div>
    </div>
  )
}

