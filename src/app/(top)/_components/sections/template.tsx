import clsx from "clsx"
import styles from "./styles.module.css";

type ColorType = "primary" | "secondary" | "accent";
type Props = {
  id: string,
  label?: {
    text: string,
    color: ColorType;
  },
  heading?: {
    text: string | React.ReactNode,
    color: ColorType;
  },
  description?: {
    text: string | React.ReactNode,
    color: ColorType;
  },
  containerClassName?: string,
  isContentWrapped?: boolean,
  children: React.ReactNode
}
export default function Section({
  id,
  label,
  heading,
  description,
  containerClassName,
  isContentWrapped = false,
  children,
}: Props) {
  const classNames = {
    container: clsx("py-[80px] md:py-[92px] lg:py-0 lg:pb-[120px] lg:pt-[90px]", containerClassName),
  }

  return (
    <section id={id} className={classNames.container}>
      <SectionContainer>
        {label && <Label label={label.text} color={label.color} />}
        {heading && <div className="mt-[14px] md:mt-[24px] lg:mt-[20px]" />}
        {heading && <Heading heading={heading.text} color={heading.color} />}
        {description && <div className="mt-[20px]" />}
        {description && <Description description={description.text} color={description.color} />}
        {isContentWrapped && children}
      </SectionContainer>
      {!isContentWrapped && children}
    </section >
  )
}

export function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles["section-container"]}>
      <div className={styles["section-container_inner"]}>
        {children}
      </div>
    </div>
  )
}

function Label({ label, color }: { label: string, color: ColorType }) {
  const classNames = {
    bar: clsx("h-[11px] w-[1.5px] md:h-[16px]", {
      "bg-primary": color === "primary",
      "bg-secondary": color === "secondary",
      "bg-accent": color === "accent",
    }),
    textWrapper: clsx("pl-[10px] md:pl-[15px] lg:pl-[18px]"),
    text: clsx(
      "font-cabin leading-none tracking-100",
      "font-bold md:font-semibold",
      "text-[15px] md:text-[17px] lg:text-[20px]",
      {
        "text-primary": color === "primary",
        "text-secondary": color === "secondary",
        "text-accent": color === "accent"
      }
    )
  }
  return (
    <div className="flex items-center justify-start">
      <div className={classNames.bar} />
      <div className={classNames.textWrapper}>
        <h2
          className={classNames.text}>
          {label}
        </h2>
      </div>
    </div>
  )
}


function Heading({ heading, color }: { heading: string | React.ReactNode, color: ColorType }) {
  const classNames = {
    heading: clsx(
      "tracking-40 font-medium",
      "text-[21px] leading-[33px]",
      "md:text-[23px] md:leading-[37px]",
      "lg:text-[26px]",
      {
        "text-primary": color === "primary",
        "text-secondary": color === "secondary",
        "text-accent": color === "accent"
      }
    )
  }
  return (
    <h2 className={classNames.heading}>
      {heading}
    </h2>
  )
}

function Description({ description, color }: { description: string | React.ReactNode, color: ColorType }) {
  const classNames = {
    description: clsx(
      "tracking-40",
      "text-[12px] leading-[22px]",
      "md:text-[13px] md:leading-[24px]",
      "lg:text-[14px] lg:leading-[29px]",
      {
        "text-primary": color === "primary",
        "text-secondary": color === "secondary",
        "text-accent": color === "accent"
      }
    )
  }
  return (
    <h2 className={classNames.description}>
      {description}
    </h2>
  )
}


