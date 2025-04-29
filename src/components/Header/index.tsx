import Logo from "./Logo";
import EntryButton from "./EntryButton";
import clsx from "clsx";
import Menu from "./MenuIcon";
import styles from "./styles.module.css";
import Link from "next/link";


type Props = {
  color?: "primary" | "secondary";
  hasBottomBorder?: boolean;
  hasBg?: boolean;
  menuIconIsOpen?: boolean;
  onClickMenu?: () => void;
  className?: string;
}
export default function Header({ color = "primary", hasBottomBorder = false, hasBg = false, menuIconIsOpen = false, onClickMenu, className }: Props) {
  const classNames = {
    container: clsx(
      "transition",
      "flex justify-start items-center site-container",
      "space-x-[12px] md:space-x-[32px]",
      styles["page-header-height"],
      {
        "border-b border-solid": hasBottomBorder,
        "border-b-0": !hasBottomBorder,
        "border-b-primary": color === "primary",
        "border-b-secondary": color === "secondary",
      },
      {
        "bg-secondary/90": color === "primary" && hasBg,
        "bg-primary/90": color === "secondary" && hasBg,
        "bg-transparent": !hasBg,
      },
      className,
    )
  }

  return (
    <div className={classNames.container}>
      <Link href="/" className="mr-auto">
        <Logo color={color} />
      </Link>
      <EntryButton color={color} />
      <Menu variant={color} isOpen={menuIconIsOpen} onClick={onClickMenu} />
    </div>
  )
}
