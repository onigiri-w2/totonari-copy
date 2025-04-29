"use client"

import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import TopPageNav from './components/TopPageNav'
import GlobalNav from './components/GlobalNav'

import Header from '../Header'
import headerStyles from '../Header/styles.module.css'
import InstagramText from './components/InstagramText'
import Copyright from './components/Copyright'
import { useMenuContext } from './context'


type Props = {
  zIndex: number;
}
export default function FixedMenuOverlay({ zIndex }: Props) {
  const { menuOverlayIsOpen, closeMenuOverlay } = useMenuContext();


  const classNames = {
    body: clsx(
      "site-container",
      "pb-[36px] pt-[88px] md:pb-[52px] md:pt-[160px] lg:pb-[68px] lg:pt-0",
      "space-y-[92px] md:space-y-[120px] lg:space-y-0",
    )
  }

  return (
    <AnimatePresence>
      {menuOverlayIsOpen && (
        <motion.div className='fixed inset-0 bg-primary text-secondary' style={{ zIndex }} initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className='absolute inset-x-0 top-0 z-10'>
            <Header hasBg hasBottomBorder menuIconIsOpen onClickMenu={closeMenuOverlay} color="secondary" />
          </div>
          <div className='absolute inset-0 overflow-auto'>
            <div className={headerStyles["page-header-height"]} /> {/* headerがabsoluteになる分のoffset */}
            <div className={classNames.body}>
              <Content />
              <Copyright />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


function Content() {
  const classNames = {
    container: clsx(
      "mx-auto max-w-[344px] md:max-w-[540px]",
      "lg:flex lg:w-full lg:max-w-[872px] lg:flex-justify-center",
    )
  }
  return (
    <div className='lg:mx-[50px]'> {/* デザイン要求: vwが1024pxでもヘッダーの端より少し内側にする */}
      <div className={classNames.container}>
        <div className="lg:flex-1 lg:pb-[220px] lg:pt-[192px]">
          <TopPageNav />
        </div>
        <div className="lg:my-auto lg:w-[150px]">
          <div className="mt-[116px] md:mt-[120px] lg:mt-0" />
          <InstagramText />
          <div className='mt-[80px] md:mt-[100px] lg:mt-[160px]' />
          <GlobalNav />
        </div>
      </div>
    </div>
  )
}

