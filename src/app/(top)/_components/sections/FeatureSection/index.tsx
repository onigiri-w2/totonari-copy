import Card from './Card'
import Section from '../template'
import { data } from './data/data'
import clsx from 'clsx'
import { sectionIds } from '@/const'

const FeatureSection = () => {

  const classNames = {
    cards: clsx(
      "mx-auto",
      "mt-[52px] space-y-[24px] max-w-[400px]",
      "md:mt-[60px] md:max-w-none",
      "lg:mt-[80px] lg:space-y-0 lg:space-x-[20px] lg:flex",
    )
  }


  return (
    <Section
      id={sectionIds.feature}
      label={{ text: 'Feature', color: "accent" }}
      heading={{ text: "これまでにない、全く新しい共同生活型マッチングサービス", color: "secondary" }}
      containerClassName='pt-[72px] md:pt-[92px] lg:pt-[90px] pb-[80px] md:pb-[92px] lg:pb-[88px] bg-primary'
      isContentWrapped
    >
      <div className={classNames.cards}>
        {data.map((v, index) => (
          <Card
            key={index}
            index={index + 1}
            title={v.title}
            description={v.description}
            img={{
              sp: v.img.sp.src,
              tb: v.img.tb.src,
              pc: v.img.pc.src,
            }}
          />
        ))}
      </div>
    </Section>
  )
}

export default FeatureSection
