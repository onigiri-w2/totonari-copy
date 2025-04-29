import clsx from 'clsx'
import type { ColorVariant } from './types'

const ENTRY_LINK = "https://lin.ee/Cj3FNMI"

export default function EntryButton({ color }: { color: ColorVariant }) {
  const classNames = {
    button: clsx(
      "cursor-pointer",
      "rounded-full border-[1.5px]",
      "transition hover:opacity-60 active:opacity-60",
      "w-[72px] py-[4px] md:w-[90px] md:py-[6px]",
      {
        "border-primary": color === "primary",
        "border-secondary": color === "secondary",
      }

    ),
    text: clsx(
      "font-cabin font-bold tracking-200",
      "text-[12px] leading-[12px] md:text-[13px] md:leading-[13px]",
      "translate-x-[1px] translate-y-[0.5px]",
      {
        "text-primary": color === "primary",
        "text-secondary": color === "secondary",
      }
    )
  }

  return (
    <a href={ENTRY_LINK} target="_blank" >
      <button className={classNames.button} >
        <p className={classNames.text} >ENTRY</p>
      </button>
    </a>
  )
}

