"use client";

import clsx from "clsx"
import { useThreeDaysScheduleContext } from "./container";

type Props = {
  title: string
  subtitle?: string
}
export default function ThreeDaysScheduleButton({ title, subtitle }: Props) {
  const { open } = useThreeDaysScheduleContext()

  const classNames = {
    container: clsx(
      "cursor-pointer",
      "transition duration-300",
      "rounded-lg border-1 border-accent",
      "hover:bg-accent hover:text-primary",
      "active:bg-accent active:text-primary",
      "h-[110px] w-[280px] md:h-[120px] md:w-[340px] lg:w-[356px]"
    )
  }

  return (
    <button className={classNames.container} onClick={open}>
      <p className="font-cabin text-[22px] font-medium leading-none tracking-100 md:text-[25px]">
        {title}
      </p>
      {subtitle && (
        <p className="mt-[12px] text-[11px] leading-none tracking-40 md:text-[13px]">
          {subtitle}
        </p>
      )}
    </button>
  )
}

