import clsx from "clsx"

export default function Button({ title, href }: { title: string, href: string }) {
  const classNames = clsx(
    "w-full cursor-pointer rounded-full border-[0.7px] py-[12px]",
    "transition duration-300",
    "hover:bg-secondary hover:text-primary",
    "active:bg-secondary active:text-primary",
    "text-[12px] md:text-[13px] leading-none tracking-40 text-center",
    "inline-block no-underline" // リンクの下線を消す
  )

  return (
    <a
      className={classNames}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  )
}
