import { sectionIds } from '@/const'
import Section, { SectionContainer } from '../template'
import Bg from './Bg'
import SlideShow from './SlideShow'
import clsx from 'clsx'

export default function ConceptSection() {
  return (
    <div className="relative">
      <Section
        id={sectionIds.concept}
        label={{ text: "Concept", color: "primary" }}
        containerClassName="pt-[48px] md:pt-[40px] lg:pt-[28px] pb-[96px] md:pb-[52px] lg:pb-[80px] bg-transparent text-primary"
      >
        <SectionContainer>
          <div className='mt-[48px] md:mt-[60px] lg:mt-[77px]' />
          <Poem className='mx-auto max-w-[288px] md:max-w-[900px]' />
          <div className='mb-[68px] md:mb-[80px] lg:mb-[118px]' />
        </SectionContainer>
        <SlideShow />
      </Section>
      <Bg />
    </div>
  )
}

function Poem({ className }: { className?: string }) {
  return (
    <div className={clsx("md:flex", className)}>
      <div className='md:flex-1 md:flex md:justify-center'>
        <PoemBody />
      </div>
      <div className="h-[33px] w-0 md:w-[24px] lg:w-[48px]" />
      <div className='md:flex-1 md:flex md:items-center'>
        <PoemConclusion />
      </div>
    </div >

  )
}

function PoemBody() {
  const classNames = {
    container: clsx(
      "tracking-40",
      "space-y-[20px] md:space-y-[25px] lg:space-y-[28px]",
      "text-[13px] md:text-[14px] lg:text-[16px]",
      "leading-[23px] md:leading-[25px] lg:leading-[28px]",
    )
  }
  return (
    <div className={classNames.container}>
      <p> 私たちは大人になった。<br />効率的な出会いも知った。<br />でもその中で失ったものも、あるような。</p>
      <p>いつか来る運命のために、<br />ときめきを受け入れられる自分でいたい。</p>
      <p>人となりが、わかる。<br />見えなかった良さが、見えてくる。<br />気づかなかった気持ちに、気づける。<br />そんな新しい出会いを、ここで。</p>
      <p>さあ、好きを迎えにいこう。</p>
    </div>
  )
}

function PoemConclusion() {
  const classNames = {
    text: clsx(
      "text-[23px] md:text-[26px] lg:text-[30px]",
      "leading-[35px] md:leading-[44px] lg:leading-[52px]",
      "tracking-40",
    )
  }
  return (
    <p className={classNames.text}>未来の恋が、見えてきた。</p>
  )
}

