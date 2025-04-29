import clsx from "clsx"
import InstaLogoSvg from '../icons/instagram_logo.svg'


export default function InstagramText() {
  const classNames = {
    text: clsx(
      "font-cabin font-semibold text-secondary leading-none tracking-100",
      "text-[14px] md:text-[20px]",
      "-translate-y-px",
    )
  }

  return (
    <a href="https://www.instagram.com/totonari_official/" target="_blank" >
      <div className="flex items-center justify-center space-x-[4px] md:space-x-[12px]">
        <InstaLogoSvg className="fill-secondary size-[16px] md:size-[20px]" />
        <p className={classNames.text}>Instagram</p>
      </div>
    </a>
  )
}
