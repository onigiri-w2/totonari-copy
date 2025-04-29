import { sectionIds } from '@/const'
import Section, { SectionContainer } from '../template'
import TbPcGallery, { SpGallery } from './Gallery'

export default function PhotoGallery() {
  return (
    <Section
      id={sectionIds.photoGallery}
      label={{ text: "Photo Gallery", color: "primary" }}
      heading={{ text: "写真で振り返る、最高の思い出", color: "primary" }}
      description={{
        text: "実際にtotonariの参加者の方に撮影していただいた写真をご紹介いたします。共同生活の一部を覗いてみてください！",
        color: "primary",
      }}
      containerClassName='pb-[80px] md:pb-[92px] lg:pb-[88px] bg-secondary'
    >
      {/* スマホ用のギャラリーコンポーネント */}
      <div className="mt-[56px] w-full md:hidden">
        <SpGallery />
      </div>

      {/* PC, Tablet用のギャラリーコンポーネント */}
      <SectionContainer>
        <div className="mt-[40px] hidden w-full md:flex lg:mt-[60px]">
          <TbPcGallery />
        </div>
      </SectionContainer>
    </Section>
  )
}

