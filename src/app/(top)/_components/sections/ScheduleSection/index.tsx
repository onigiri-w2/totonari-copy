import Caption from './Caption'
import Button from './Button'
import Section from '../template'
import clsx from 'clsx'
import CalendarContainer from './Calendar'
import bgSp from "./bg.sp.webp";
import bgTb from "./bg.tb.webp";
import bgPc from "./bg.pc.webp";
import { sectionIds } from '@/const'
import { breakpoints } from '@/styles/themes'

export default function ScheduleSection() {
  return (
    <div className="relative">
      <Section
        id={sectionIds.schedule}
        label={{ text: 'Schedule', color: 'accent' }}
        heading={{ text: '実施スケジュール', color: 'secondary' }}
        containerClassName='pt-[80px] md:pt-[92px] lg:pt-[90px] pb-[80px] md:pb-[92px] lg:pb-[108px] text-secondary'
        isContentWrapped
      >
        <div className='mt-[20px] md:mt-[48px] lg:mt-[92px]' />
        <Content />
        <div className='mt-[68px]' />
        <Footer />
      </Section>

      {/* 背景画像 */}
      <div className='absolute inset-0 -z-10'>
        <picture>
          <source media={`(min-width: ${breakpoints.pc}px)`} srcSet={bgPc.src} />
          <source media={`(min-width: ${breakpoints.tb}px) and (max-width: ${breakpoints.pc - 1}px)`} srcSet={bgTb.src} />
          <source media={`(max-width: ${breakpoints.tb - 1}px)`} srcSet={bgSp.src} />
          <img src={bgPc.src} alt="background" className="w-full h-full object-cover" loading='lazy' />
        </picture>
      </div>
    </div>
  )
}


function Content() {
  const classNames = {
    description: clsx(
      'tracking-40',
      'text-[12px] leading-[22px]',
      'md:mt-0 md:text-[13px] md:leading-[24px]',
      'lg:text-[14px] lg:leading-[29px]',
    )
  }

  return (
    <div className="md:flex md:items-center mx-auto max-w-[912px]">
      <div className="md:flex-1 md:space-y-[28px]">
        <p className={classNames.description}>
          実施予定日は以下のカレンダーよりご確認ください。<br />原則、金曜日の夜〜日曜日にかけて実施の予定です。
        </p>
        <div className="mt-[36px] md:mt-0" />
        <Caption />
        <div className='hidden md:block'>
          <Notice />
        </div>
      </div>
      <div className="md:flex-1">
        <div className="mx-auto mt-[36px] max-w-[400px] md:mt-0 md:max-w-[320px] lg:max-w-[360px] relative">
          <CalendarContainer />
        </div>
      </div>
      <div className="mt-[24px] md:hidden">
        <Notice />
      </div>
    </div>
  )
}

function Notice() {
  return (
    <div className="text-[10px] leading-[22px] tracking-40">
      <p>※開催日程は決定次第、随時更新いたします。</p>
      <p>※最新情報はInstagramにてご確認ください。</p>
    </div>
  )
}


function Footer() {
  return (
    <div className="flex justify-center">
      <div className="flex-row align-middle">
        <Button />
        <div className="mt-[20px] w-full text-center text-[10px] leading-none text-secondary md:mt-[30px] md:text-[11px]">
          <p>LINE友達追加後、面談申込へ進んでください。</p>
          <p className="mt-[9px]">想定完了時間：2分</p>
        </div>
      </div>
    </div>
  )
}

