import AnimationTitle from './AnimationTitle'
import fv1Pc from "./images/fv1.pc.webp"
import fv1Tb from "./images/fv1.tb.webp"
import fv1Sp from "./images/fv1.sp.webp"
import fv2Pc from "./images/fv2.pc.webp"
import fv2Tb from "./images/fv2.tb.webp"
import fv2Sp from "./images/fv2.sp.webp"
import clsx from 'clsx'
import styles from "./styles/HeroImage.module.css"
import { breakpoints, heroStyle } from '@/styles/themes'
import ScrollButton from './ScrollButton'

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: `calc(${heroStyle.baseHeight} + ${heroStyle.extraHeight})` }}>
      <div className="fixed inset-0 z-10 flex flex-col justify-end site-container pb-[68px] md:pb-[80px] lg:pb-[90px]">
        <HeroLine />
      </div>
      <div className={styles.animationContainer}>
        <div className={clsx("absolute inset-0 opacity-0", styles.fadeInScale, styles.delay0)}>
          <HeroImage alt="Hero img1" pc={fv1Pc.src} tb={fv1Tb.src} sp={fv1Sp.src} />
        </div>
        <div className={clsx("absolute inset-0 opacity-0", styles.fadeInScale, styles.delay6000)}>
          <HeroImage alt="Hero img2" pc={fv2Pc.src} tb={fv2Tb.src} sp={fv2Sp.src} />
        </div>
      </div>
    </div>
  )
}


function HeroLine() {
  return (
    <div className='flex items-end justify-between text-secondary'>
      <AnimationTitle />
      <div className="pb-[4px]">
        <ScrollButton />
      </div>
    </div>
  )
}

const HeroImage = ({ alt, pc, tb, sp }: { alt: string, pc: string, tb: string, sp: string }) => (
  <picture>
    <source media={`(max-width: ${breakpoints.tb - 1}px)`} srcSet={sp} />
    <source media={`(min-width: ${breakpoints.tb}px) and (max-width: ${breakpoints.pc - 1}px)`} srcSet={tb} />
    <source media={`(min-width: ${breakpoints.pc}px)`} srcSet={pc} />
    <img src={pc} alt={alt} className="size-full object-cover" fetchPriority="high" />
  </picture>
);
