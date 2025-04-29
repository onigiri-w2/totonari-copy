import { sectionIds } from "@/const"
import Section from "../template"

export default function PriceSection() {
  return (
    <Section
      id={sectionIds.price}
      label={{ text: "Price", color: "primary" }}
      heading={{ text: "料金について", color: "primary" }}
      containerClassName="bg-secondary text-primary"
      isContentWrapped
    >
      <div className="mt-[20px] md:mx-auto md:mt-[36px] md:flex md:max-w-[680px] md:space-x-[40px] lg:mt-[52px] lg:max-w-[880px] lg:space-x-[100px]">
        <div className="flex-1">
          <p className="text-[12px] leading-[22px] tracking-40 md:block md:text-[13px] md:leading-[24px] lg:text-[14px] lg:leading-[29px]">
            男性、女性それぞれの金額は以下になります。
            <br />
            男女双方の料金共に、サービス料、宿泊料、期間中のフォローアップ料を含んだ金額になります。
          </p>
          <div className="mt-[16px] hidden text-[10px] leading-[22px] tracking-40 md:block lg:mt-[13px]">
            <p>※お支払い方法は前払いになります</p>
            <p>※宿泊する上での交通費、飲食料金等は含まれておりません。</p>
          </div>
        </div>
        <div className="mt-[28px] flex justify-center md:mt-0 md:block md:flex-1">
          <PriceMenu />
        </div>
      </div>
      <div className="mt-[28px] text-[10px] leading-[22px] tracking-40 md:hidden">
        <p>※お支払い方法は前払いになります</p>
        <p>※宿泊する上での交通費、飲食料金等は含まれておりません。</p>
      </div>
    </Section>
  )
}

const PriceMenu = () => {
  const menu = [
    { sex: '女性', price: '25,000' },
    { sex: '男性', price: '35,000' },
  ]
  return (
    <div className="space-y-[4px] rounded-[12px] border-1 px-[40px] py-[28px]">
      {menu.map((m) => (
        <div
          key={m.sex}
          className="flex items-baseline font-medium leading-[29px] tracking-40 md:leading-[33px]"
        >
          <span className="ml-auto text-[12px] md:text-[14px] lg:text-[15px]">
            {m.sex} ・・・{' '}
          </span>
          <span className="text-[15px] md:text-[18px] lg:text-[22px]">
            {m.price}円
          </span>
          <span className="mr-auto text-[8px] md:text-[10px] lg:text-[11px]">
            （税込）
          </span>
        </div>
      ))}
    </div>
  )
}

