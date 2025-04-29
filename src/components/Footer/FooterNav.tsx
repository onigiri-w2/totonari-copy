import Link from "next/link"

export default function FooterNav() {
  const classNames = { text: "text-[12px] tracking-40 lg:text-[13px]" }

  return (
    <nav className="space-y-[24px] md:space-y-[28px] lg:space-y-[30px]">
      <p key="company" className={classNames.text}>
        <Link href="/company">会社概要</Link>
      </p>
      <p key="policy" className={classNames.text}>
        <Link href="/policy">プライバシーポリシー</Link>
      </p>
      <p key="sctl" className={classNames.text}>
        <Link href="/sctl">特定商取引法に基づく表示</Link>
      </p>
    </nav>
  )
}
