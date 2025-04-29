"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import type { ColorVariant } from "@/components/Header/types";
import { topPageHeaderId } from "../../../const";
import { useMenuContext } from "@/components/GlobalMenuOverlay/context";
import { useScrollPastElement } from "./hooks";

type HeaderState = { hasBg: boolean; color: ColorVariant; hasBottomBorder: boolean }
const state = {
  active: { hasBg: true, color: "primary" as ColorVariant, hasBottomBorder: true },
  inactive: { hasBg: false, color: "secondary" as ColorVariant, hasBottomBorder: false },
}

type Props = {
  boundaryId: string;
}
export default function TopPageHeader({ boundaryId }: Props) {
  const { openMenuOverlay } = useMenuContext();
  const [headerState, setHeaderState] = useState<HeaderState>(state.inactive);
  const headerRef = useRef<HTMLDivElement | null>(null);

  // ヘッダーの高さを考慮して要素がスクロールで通過したかを判定
  const isPastTarget = useScrollPastElement(boundaryId, headerRef);

  // スクロール位置に基づいてヘッダーの状態を更新
  useEffect(() => {
    if (isPastTarget) setHeaderState(state.active);
    else setHeaderState(state.inactive);
  }, [isPastTarget]);

  return (
    <div id={topPageHeaderId} ref={headerRef}>
      <Header {...headerState} menuIconIsOpen={false} onClickMenu={openMenuOverlay} />
    </div>
  );
}

