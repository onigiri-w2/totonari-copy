"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { colors } from '@/styles/themes'
import type { ColorVariant } from './types'

const ICON_HEIGHT = 32
const ICON_WIDTH = 40
const MD_ICON_WIDTH = 50
const BAR_Y = 12.5
const STROKE_WIDTH = 1.5
const OPENED_DEGREE = 12
const HOVERED_DEGREE = 24
const OFFSET_Y = 3.5

type Props = {
  isOpen: boolean
  variant?: ColorVariant,
  onClick?: () => void
}

const Menu = ({ variant = 'primary', isOpen, onClick }: Props) => {
  const color = variant === 'primary' ? colors.primary : colors.secondary
  const hoverTransition = { duration: 0.25 }
  const [isHover, setIsHover] = useState(false)

  const lineProps = (isTop: boolean, isMobile: boolean) => ({
    x1: '0',
    x2: isMobile ? ICON_WIDTH : MD_ICON_WIDTH,
    y1: isTop ? BAR_Y : ICON_HEIGHT - BAR_Y,
    y2: isTop ? BAR_Y : ICON_HEIGHT - BAR_Y,
    strokeWidth: STROKE_WIDTH,
    animate: {
      y: isOpen ? (isTop ? OFFSET_Y : -OFFSET_Y) : 0,
      rotate: isOpen
        ? isHover
          ? isTop
            ? HOVERED_DEGREE
            : -HOVERED_DEGREE
          : isTop
            ? OPENED_DEGREE
            : -OPENED_DEGREE
        : 0,
    },
    transition: hoverTransition,
  })

  return (
    <div onClick={onClick}>
      <motion.svg
        viewBox={`0 0 ${ICON_WIDTH} ${ICON_HEIGHT}`}
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-[40px] cursor-pointer md:hidden"
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        onMouseUp={() => setIsHover(false)}
        initial={{ stroke: color }}
        animate={{ stroke: color }}
      // transition={{ duration: SCROLL_TRASITION_DURATION }}
      >
        {[true, false].map((isTop, index) => (
          <motion.line key={index} {...lineProps(isTop, true)} />
        ))}
      </motion.svg>

      <motion.svg
        viewBox={`0 0 ${MD_ICON_WIDTH} ${ICON_HEIGHT}`}
        xmlns="http://www.w3.org/2000/svg"
        className="hidden h-auto w-[50px] cursor-pointer md:block"
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        onMouseUp={() => setIsHover(false)}
        initial={{ stroke: color }}
        animate={{ stroke: color }}
      // transition={{ duration: SCROLL_TRASITION_DURATION }}
      >
        {[true, false].map((isTop, index) => (
          <motion.line key={index} {...lineProps(isTop, false)} />
        ))}
      </motion.svg>
    </div>
  )
}

export default Menu
