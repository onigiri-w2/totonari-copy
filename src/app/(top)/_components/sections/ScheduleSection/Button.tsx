import clsx from 'clsx'

const ENTRY_LINK = 'https://liff.line.me/1645278921-kWRPP32q/?accountId=961ytjib'

export default function Button() {
  const classNames = {
    container: clsx(
      "cursor-pointer",
      "transition duration-300",
      "rounded-lg border-1 border-accent",
      "hover:bg-accent hover:text-primary",
      "active:bg-accent active:text-primary",
      "h-[110px] w-[280px] md:h-[120px] md:w-[340px] lg:w-[356px]",
      "inline-flex flex-col items-center justify-center"
    )
  }

  return (
    <a
      href={ENTRY_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames.container}
    >
      <p className="font-cabin text-[22px] font-medium leading-none tracking-100 md:text-[25px]">
        Entry
      </p>
      <p className="mt-[12px] text-[11px] leading-none tracking-40 md:text-[13px]">
        エントリーはこちら
      </p>
    </a>
  )
}
