import { motion } from 'framer-motion'
import { useState } from 'react'

const ICON_HEIGHT = 32
const ICON_WIDTH = 40
const BAR_Y = 16
const STROKE_WIDTH = 1.5
const OPENED_DEGREE = 13
const HOVERED_DEGREE = 26

const Close = () => {
  const transition = { duration: 0.25 }
  const [isHover, setIsHover] = useState(false)

  return (
    <svg
      width={ICON_WIDTH}
      height={ICON_HEIGHT}
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer stroke-primary"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      // モバイルでのクリック時のhover効果を無効化
      onMouseUp={() => setIsHover(false)}
    >
      <motion.line
        x1="0"
        y1={BAR_Y}
        x2={ICON_WIDTH}
        y2={BAR_Y}
        strokeWidth={STROKE_WIDTH}
        animate={
          isHover ? { rotate: HOVERED_DEGREE } : { rotate: OPENED_DEGREE }
        }
        transition={transition}
      />
      <motion.line
        x1="0"
        y1={BAR_Y}
        x2={ICON_WIDTH}
        y2={BAR_Y}
        strokeWidth={STROKE_WIDTH}
        animate={
          isHover ? { rotate: -HOVERED_DEGREE } : { rotate: -OPENED_DEGREE }
        }
        transition={transition}
      />
    </svg>
  )
}

export default Close
