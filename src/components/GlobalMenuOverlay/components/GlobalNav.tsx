import clsx from "clsx";
import Link from "next/link";
import { useMenuContext } from "../context";

export default function GlobalNav() {
  const classNames = {
    container: clsx(
      "flex flex-col justify-between",
      "space-y-[16px] md:space-y-[30px]",
    ),
    link: clsx(
      "tracking-40 text-secondary text-center",
      "text-[10px] md:text-[13px] lg:text-[11px]",
    )
  }
  const { closeMenuOverlay } = useMenuContext();

  const handleClick = () => {
    // 画面が移り変わった感を見せないために、少しだけ待つ。
    setTimeout(() => {
      closeMenuOverlay();

      // 遷移後のスクロール位置が前ページを基準にしているため、強制的に0にする。
      window.scrollTo(0, 0);
    }, 30);
  }

  return (
    <div className={classNames.container} >
      <Link key="company" href="/company" className={classNames.link} onClick={handleClick}>会社概要 </Link>
      <Link key="policy" href="/policy" className={classNames.link} onClick={handleClick}>プライバシーポリシー </Link>
      <Link key="sctl" href="/sctl" className={classNames.link} onClick={handleClick}>特定商取引法に基づく表示 </Link>
    </div>
  )
}
