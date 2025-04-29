import { scroller } from "react-scroll"
import { topPageHeaderId } from "../../const"

export const scrollTo = (targetElementId: string) => {
  const header = document.getElementById(topPageHeaderId)
  const headerHeight = header?.clientHeight || 0
  scroller.scrollTo(targetElementId, {
    duration: 1000,
    delay: 0,
    smooth: 'easeInOutSine',
    offset: -headerHeight + 1, // +1は微調整：ヘッダーと高さちょうどだと期待通りの挙動しない
  })
}

