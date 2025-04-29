import CopyrightSvg from '../icons/copyright.svg'

export default function Copyright() {
  return (
    <div className='space-x-[2px] flex items-center justify-center lg:justify-start'>
      <CopyrightSvg className="stroke-secondary size-[12px] translate-y-px" />
      <p className='text-[8px] md:text-[10px] lg:text-[11px] tracking-40'>camelia inc.</p>
    </div>
  )
}
