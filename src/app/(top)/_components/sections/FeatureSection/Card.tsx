import { breakpoints } from "@/styles/themes";
import styles from "./styles.module.css";

type Props = {
  index: number
  title: string
  description: string
  img: { sp: string; tb: string; pc: string }
}
export default function Card({ index, title, description, img }: Props) {
  const splitedDescription = description.split('\\n')
  const onelineDescription = splitedDescription.join('')

  return (
    <div className={`${styles.card} relative w-full`}>
      <div className="absolute inset-0 z-30 flex flex-col items-start p-[28px] text-secondary lg:pr-[28px]">
        <div className="flex flex-col items-center leading-none">
          <p className={`${styles.labelSubFont} font-cabin font-medium tracking-100`}>
            Feature
          </p>
          <p className={`${styles.labelNoFont} font-cabin font-bold tracking-40 text-accent`}>
            0{index}
          </p>
        </div>
        <p className={`${styles.titleFont} mt-auto font-medium leading-[33px] tracking-40`}>
          {title}
        </p>
        <p
          className={`whitespace-break-spaces pt-[6px] ${styles.descriptionFont} leading-[22px]
           tracking-40 md:max-w-none
           md:leading-[24px] lg:pt-[3px] lg:leading-[22px]
           `}
        >
          {/* タブレット用の説明文 */}
          <span className="hidden md:inline lg:hidden">
            {splitedDescription.map((desc, i) => (
              <span key={i}>
                {desc}
                {i !== splitedDescription.length - 1 && <br />}
              </span>
            ))}
          </span>
          {/* スマホとPC用の説明文 */}
          <span className="md:hidden lg:inline">{onelineDescription}</span>
        </p>
      </div>

      {/* スマホ用の画像 */}
      <picture className="absolute inset-0 z-10">
        <source media={`(min-width: ${breakpoints.pc}px)`} srcSet={img.pc} />
        <source media={`(min-width: ${breakpoints.tb}px) and (max-width: ${breakpoints.pc - 1}px)`} srcSet={img.tb} />
        <source media={`(max-width: ${breakpoints.tb - 1}px)`} srcSet={img.sp} />
        <img
          src={img.pc}
          alt="feature"
          className="size-full rounded-[20px] border-1 border-primary object-cover"
          loading="lazy"
        />
      </picture>
    </div>
  )
}

