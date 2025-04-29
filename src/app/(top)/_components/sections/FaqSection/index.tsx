import { sectionIds } from '@/const'
import Section from '../template'
import Faq from './Faq'

const FaqSection = () => {
  return (
    <Section
      id={sectionIds.faq}
      label={{ text: 'FAQ', color: 'primary' }}
      heading={{ text: 'よくあるご質問', 'color': 'primary' }}
      containerClassName="pb-[120px] md:pb-[140px] lg:pb-[180px] bg-secondary text-primary"
      isContentWrapped
    >
      <div className="mt-[44px] md:mt-[40px] lg:mt-[60px]">
        <Faq />
      </div>
    </Section>
  )
}

export default FaqSection
