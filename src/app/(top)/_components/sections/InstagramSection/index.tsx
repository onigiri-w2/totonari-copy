import { sectionIds } from '@/const'
import Section from '../template'
import GalleryContainer from './GalleryContainer'
import InstagramLogo from './instagram_logo.svg'

const InstagramSection = () => {
  return (
    <Section
      id={sectionIds.instagram}
      containerClassName='pb-[12px] md:pb-0 bg-secondary text-primary'
      isContentWrapped
    >
      <div className="mx-auto max-w-section md:max-w-[540px] lg:max-w-[800px]">
        <InstagramHeader />
        <p className="mt-[16px] text-[12px] leading-[21px] md:text-[13px] lg:text-[14px]">
          今後の実施スケジュールなど、最新情報は公式instagramにて発信しています。
        </p>
        <div className="mt-[24px]">
          <GalleryContainer />
        </div>
        <InstagramAccount />
      </div>
    </Section>
  )
}

// Header component
const InstagramHeader = () => (
  <div className="flex items-center">
    <InstagramLogo />
    <p className="ml-[12px] font-cabin text-[15px] font-bold leading-none tracking-100">
      Instagram
    </p>
  </div>
)

// Instagram account component
const InstagramAccount = () => (
  <p className="mt-[10px] text-right font-cabin text-[10px] leading-none tracking-100 md:text-[13px] lg:mt-[15px] lg:text-[15px]">
    @totonari_official
  </p>
)

export default InstagramSection
