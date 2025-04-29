import Steps from './Steps'
import Section from '../template'
import ThreeDaysScheduleButton from './ThreeDaysSchedule/Button'

import BgSp from './bg.sp.webp';
import BgTb from './bg.tb.webp';
import BgPc from './bg.pc.webp';
import { sectionIds } from '@/const';
import { breakpoints } from '@/styles/themes';
import { ThreeDaysScheduleProvider } from './ThreeDaysSchedule/container';
import ThreeDaysScheduleModal from './ThreeDaysSchedule/Modal';


export default function ServiceSection() {
  return (
    <div className="relative">
      <ThreeDaysScheduleProvider>
        <Section
          id={sectionIds.service}
          label={{ text: 'Service', color: 'accent' }}
          heading={{ text: <p>審査を通った8人のメンバーで、<br className="md:hidden" />2泊3日の日常を過ごす</p>, color: 'secondary' }}
          description={{
            text: "totonari（トトナリ）は、審査によって選ばれた男女8人による2泊3日の共同生活を提供する共同生活型恋愛サービスです。", color: 'secondary',
          }}
          containerClassName="pt-[72px] md:pt-[92px] lg:pt-[90px] pb-[80px] md:pb-[92px] lg:pb-[100px]"
          isContentWrapped
        >
          <div className='text-secondary'>
            <div className="mx-auto mt-[52px] max-w-[480px] px-[20px] md:mt-[74px] md:max-w-[520px] lg:max-w-none">
              <Steps />
            </div>
            <div className="mt-[40px] flex justify-center md:mt-[72px] lg:mt-[60px]">
              <ThreeDaysScheduleButton title='3 days Schedule' subtitle='2泊3日のスケジュールはこちら' />
            </div>
          </div>
        </Section>
        <ThreeDaysScheduleModal />
      </ThreeDaysScheduleProvider>

      {/* 背景画像 */}
      <div className='absolute inset-0 -z-10'>
        <picture>
          <source media={`(min-width: ${breakpoints.pc}px)`} srcSet={BgPc.src} />
          <source media={`(min-width: ${breakpoints.tb}px) and (max-width: ${breakpoints.pc - 1}px)`} srcSet={BgTb.src} />
          <source media={`(max-width: ${breakpoints.tb - 1}px)`} srcSet={BgSp.src} />
          <img src={BgPc.src} alt="background" className="w-full h-full object-cover" loading='lazy' />
        </picture>
      </div>
    </div>
  )
}

