import clsx from "clsx";
import Close from "./Close";
import { data } from "./data";
import DayBlock from "./DayBlock";


type Props = { onClose: () => void }
export default function Content({ onClose }: Props) {
  return (
    <div className="relative rounded-[20px] bg-secondary text-primary">
      <Header onClose={onClose} />
      <Body />
    </div>
  )
}

type HeaderProps = { onClose: () => void }
function Header({ onClose }: HeaderProps) {
  const classNames = {
    container: clsx(
      "sticky top-0 inset-0 z-10",
      "flex items-center justify-between bg-secondary",
      "rounded-t-[20px] border-b-1 border-primary",
      "px-[24px] lg:px-[32px]",
      "py-[12px]"
    ),
    title: clsx(
      "font-cabin",
      "font-semibold leading-none tracking-wider",
      "text-[15px] md:text-[19px]",
    ),
  }

  return (
    <div className={classNames.container}>
      <span className={classNames.title}>
        3 days Schedule
      </span>
      <div className="cursor-pointer" onClick={onClose}>
        <Close />
      </div>
    </div>
  )
}

function Body() {
  const classNames = {
    container: clsx(
      "lg:flex",
      "space-y-[24px] lg:space-y-0 lg:space-x-[24px]",
      "overflow-scroll overscroll-auto",
      "px-[20px] lg:px-[32px]",
      "pb-[40px] pt-[28px] lg:pt-[40px]",
    ),
  }

  return (
    <div className={classNames.container}>
      {data.map((item, i) => (
        <div key={i} className={clsx(
          "lg:flex-1 border-primary lg:border-none pb-[24px] lg:pb-0",
          {
            "border-b-.5": i !== data.length - 1,
          }
        )}>
          <DayBlock day={item.title} slots={item.slots} />
        </div>
      ))
      }
    </div >
  )
}

