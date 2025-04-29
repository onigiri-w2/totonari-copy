"use client";

import { sectionIds } from '@/const';
import { scrollTo } from "../../../functions";
import { useCallback } from 'react';
import styles from './styles/ScrollButton.module.css';

export default function ScrollButton() {
  const scrollToSection = useCallback(() => {
    scrollTo(sectionIds.concept)
  }, [])

  return (
    <div onClick={scrollToSection} className="cursor-pointer">
      <span className="pb-[4px] font-cabin text-[8px] font-medium tracking-100 md:text-[12px] lg:text-[13px]">
        scroll down
      </span>
      <div className="h-[0.5px] w-full overflow-hidden">
        <div className={styles.scrollLine} />
      </div>
    </div>
  )
}

