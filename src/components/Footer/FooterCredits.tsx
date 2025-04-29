import CopyrightSvg from './copyright.svg'


export default function FooterCredits() {
  return (
    <div className="space-y-[12px] md:space-y-[16px]">
      <p className="font-medium tracking-40 text-[7px] md:text-[8px]">Illustration by Icons 8 from Ouch!</p>
      <Copyright />
    </div>
  )
}

function Copyright() {
  return (
    <div className="flex items-center justify-center lg:justify-start space-x-[4px]">
      <CopyrightSvg className="size-[12px] translate-y-px" />
      <p className="text-[10px] md:text-[12px]">camelia inc.</p>
    </div>
  )
}
