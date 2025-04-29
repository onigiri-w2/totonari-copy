import bgSp from "./bg.sp.webp"
import bgTb from "./bg.tb.webp"
import bgPc from "./bg.pc.webp"
import { sectionIds } from '@/const'
import Button from './Button'
import { breakpoints } from "@/styles/themes"

export default function ContactSection() {
  return (
    <div id={sectionIds.contact} className='relative'>
      <div className="text-secondary py-[80px] md:py-[100px] lg:py-[120px]">
        <p className="text-center font-cabin text-[24px] font-medium leading-none tracking-100 md:text-[25px] lg:text-[30px]">
          Contact
        </p>
        <p className="mt-[16px] text-center text-[12px] leading-[22px] tracking-40 md:text-[13px] md:leading-[24px]">
          お問合せはinstagramのDM、
          <br className="md:hidden" />
          もしくはメールにてお願いします
        </p>
        <div className="mx-auto mt-[24px] w-[180px]">
          <Button title="instagramはこちら" href="https://www.instagram.com/totonari_official/" />
        </div>
        <div className="mx-auto mt-[16px] w-[180px]">
          <Button title="メールはこちら" href="mailto:info@camelia-inc.com" />
        </div>

        {/* 背景画像 */}
        <div className='absolute inset-0 -z-10'>
          <picture>
            <source media={`(min-width: ${breakpoints.pc}px)`} srcSet={bgPc.src} />
            <source media={`(min-width: ${breakpoints.tb}px) and (max-width: ${breakpoints.pc - 1}px)`} srcSet={bgTb.src} />
            <source media={`(max-width: ${breakpoints.tb - 1}px)`} srcSet={bgSp.src} />
            <img src={bgPc.src} alt="background" className="w-full h-full object-cover" loading="lazy" />
          </picture>
        </div>
      </div>
    </div>
  )
}

