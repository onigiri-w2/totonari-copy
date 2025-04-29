import LowerBgSp from './lowerbg.sp.svg'
import LowerBgTb from './lowerbg.tb.svg'
import LowerBgPc from './lowerbg.pc.svg'
import UpperBgSp from './upperbg.sp.svg'
import UpperBgTb from './upperbg.tb.svg'
import UpperBgPc from './upperbg.pc.svg'
import { heroStyle } from '@/styles/themes'

export default function Bg() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className='absolute inset-x-0 -z-10 translate-y-0.5' style={{ top: `-${heroStyle.extraHeight}`, height: heroStyle.extraHeight }}>
        <UpperBgSp className="w-full h-full md:hidden" preserveAspectRatio="xMidYMax slice" />
        <UpperBgTb className="w-full h-full hidden md:block lg:hidden" preserveAspectRatio="xMidYMax slice" />
        <UpperBgPc className="w-full h-full hidden lg:block" preserveAspectRatio="xMidYMax slice" />
      </div>
      <div className="h-full overflow-hidden">
        <LowerBgSp className="w-full h-full md:hidden" preserveAspectRatio="xMidYMax slice" />
        <LowerBgTb className="w-full h-full hidden md:block lg:hidden" preserveAspectRatio="xMidYMax slice" />
        <LowerBgPc className="w-full h-full hidden lg:block" preserveAspectRatio="xMidYMax slice" />
      </div>
    </div>
  )
}
