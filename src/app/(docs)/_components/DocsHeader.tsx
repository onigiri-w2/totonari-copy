"use client"

import Header from "@/components/Header"
import { useMenuContext } from "@/components/GlobalMenuOverlay/context"

export default function DocsHeader() {
  const { openMenuOverlay } = useMenuContext();
  return (
    <Header onClickMenu={openMenuOverlay} hasBottomBorder hasBg color="primary" />
  )
}
