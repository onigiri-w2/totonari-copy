import { Metadata } from "next";
import SiteDocsLayout from "../_components/DocsLayout"


export const metadata: Metadata = {
  title: "会社概要 | totonari",
  description: "totonariの会社概要ページです",
};
export default function Company() {
  return (
    <SiteDocsLayout title="会社概要">
      <CompanyInfoTable />
    </SiteDocsLayout>
  )
}

const CompanyInfoTable = () => {
  return (
    <div className="w-full space-y-[36px]">
      {CAMPANY_DATA.map((item) => (
        <div key={item.label} className="flex">
          <p className="w-[120px] text-[17px] leading-none">{item.label}</p>
          <div className="flex-col">
            {item.values.map((value, index) => (
              <p
                key={index}
                className={`${index !== 0 && 'mt-[12px]'} whitespace-pre-wrap text-[15px] leading-[17px]`}
              >
                {value}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const CAMPANY_DATA = [
  { label: '会社名', values: ['株式会社camelia'] },
  { label: '設立', values: ['2024年4月30日'] },
  { label: '所在地', values: ['東京都渋谷区'] },
  {
    label: '代表者',
    values: ['代表取締役　伊東 実咲', '共同創業者/取締役　関 円香'],
  },
  {
    label: '事業内容',
    values: [
      '・共同生活型恋愛サービス「totonari」\n・住宅宿泊事業法に基づく住宅宿泊事業',
    ],
  },
]
