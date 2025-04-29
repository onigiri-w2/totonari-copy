import { sectionIds } from '@/const'
import Section from '../template'
import MessageBox from './MessageBox'
import Scenes from './Scenes'

export default function SceneSection() {
  return (
    <Section
      id={sectionIds.scene}
      label={{ text: 'Scene', color: 'accent' }}
      heading={{ text: 'totonariは、こんな人におすすめのサービスです。', color: "secondary" }}
      containerClassName='pt-[72px] md:pt-[44px] lg:pt-[136px] bg-transparent'
      isContentWrapped
    >
      <div className="pt-[14px] text-secondary md:pt-[24px] lg:pt-[20px]">
        <Scenes />
        <div className="mt-[62px] md:mt-[80px] lg:mt-[72px] flex justify-center">
          <MessageBox />
        </div>
      </div>
    </Section>
  )
}


