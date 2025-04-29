import { useState, useEffect } from "react";

export function useScrollPastElement(
  targetElementId: string,
  headerRef: React.RefObject<HTMLDivElement | null>
) {
  const [isPastTarget, setIsPastTarget] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById(targetElementId);

      if (targetElement && headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        // 要素上端からビューポート上端までの距離を取得
        const elementTopOffset = targetElement.getBoundingClientRect().top;

        // 要素の上端位置がヘッダーの下端位置以上に達したらtrueに
        setIsPastTarget(elementTopOffset <= headerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // 初期状態を設定するために一度実行
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetElementId, headerRef]);

  return isPastTarget;
}

