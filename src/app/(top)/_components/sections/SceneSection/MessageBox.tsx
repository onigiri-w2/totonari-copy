import clsx from "clsx"

export default function MessageBox() {
  const classNames = {
    container: clsx(
      "rounded-2xl border border-accent",
      "px-[32px] py-[37px] space-y-[25px]",
      "md:px-[52px] md:py-[30px] md:space-y-[20px] md:max-w-[590px]",
      "lg:px-[32px] lg:py-[37px] lg:space-y-[13px] lg:max-w-[810px] lg:text-center"
    ),
    sentences: clsx(
      "text-[13px] leading-[22px] space-y-[16px]",
      "md:text-[13px] md:leading-[24px] md:space-y-[8px]",
      "lg:text-[14px] md:leading-[33px] md:space-y-[0px]",
      "tracking-40"
    )
  }

  return (
    <div className={classNames.container}>
      <p className="text-center font-cabin text-[13px] font-bold tracking-100 text-accent md:text-[17px]">
        Message
      </p>
      <div className={classNames.sentences}>
        <p>恋に気づける共同生活totonariは、あたらしい気づきと出会いを提供します。</p>
        <p>恋に迷い、いつからか分からなくなってしまった自分の気持ちにしっかりと向き合うきっかけにしてほしい。</p>
        <p>向き合った先に、素敵な気づきと出会いがありますように。</p>
        <p>恋愛の楽しさを思い出すような非日常な日常を、体験してみませんか？</p>
      </div>
    </div>
  )
}
