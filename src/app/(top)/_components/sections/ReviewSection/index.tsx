import { sectionIds } from '@/const'
import Section from '../template'
import Reviews from './Reviews'

const ReviewSection = () => {
  return (
    <Section
      id={sectionIds.review}
      label={{ text: "Review", color: "primary" }}
      heading={{ text: "参加者の声", color: "primary" }}
      description={{ text: <p>満足度は毎回95%を超えており、過去全ての参加者から「友達にもぜひ紹介したい」というお声をいただきました。<br className="hidden md:block" />過去参加者のほとんどが紹介での参加となっております。</p>, color: "primary" }}
      containerClassName='pb-[80px] md:pb-[92px] lg:pb-[108px] bg-secondary'
    >
      <div className="mt-[44px] text-primary md:mt-[72px] lg:mx-auto">
        <Reviews />
      </div>
    </Section >
  )
}

export default ReviewSection
