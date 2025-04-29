import clsx from 'clsx'
import LogoImg from './logo.svg'
import FooterCredits from './FooterCredits'
import FooterNav from './FooterNav'


// Main Footer component
export default function Footer() {
  const classNames = {
    container: clsx(
      "site-container text-secondary bg-primary", // base
      "pb-[40px] pt-[88px]", // mobile
      "md:pb-[52px] md:pt-[116px]", // tablet
      "lg:pb-[50px] lg:pt-[120px] lg:flex", // desktop
    ),
    main: clsx(
      "text-center leading-none", // base 
      "space-y-[24px]", // mobile
      "md:space-y-[60px]", // tablet
      "lg:space-y-[120px] lg:flex-1 lg:text-left", // desktop
    ),
  }

  return (
    <div className={classNames.container}>
      <div className={classNames.main}>
        <FooterNav />
        <div className='lg:hidden'>
          <LogoImg className="w-full max-w-[330px] mx-auto h-auto" />
        </div>
        <FooterCredits />
      </div>
      <div className="hidden lg:flex-1 lg:flex lg:items-end lg:justify-end">
        <LogoImg className="w-full max-w-[330px] h-auto" />
      </div>
    </div>
  )
}
