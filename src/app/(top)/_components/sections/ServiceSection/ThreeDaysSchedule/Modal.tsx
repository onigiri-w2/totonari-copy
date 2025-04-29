"use client";

import { AnimatePresence, motion } from "framer-motion";
import Content from "./Content/";
import { useThreeDaysScheduleContext } from "./container";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ThreeDaysScheduleModal() {
  const { isOpen, close } = useThreeDaysScheduleContext();
  const [domReady, setDomReady] = useState(false)

  useEffect(() => {
    setDomReady(true)
  }, [])

  return (
    <>
      {domReady && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="flex h-dvh items-center justify-center bg-[rgba(0,0,0,0.5)]"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              onClick={close}
            >
              <div
                className="max-h-[84%] w-[95%] min-w-[345px] max-w-[440px] overflow-auto overscroll-contain rounded-[20px] lg:max-w-[1100px]"
                onClick={(e) => e.stopPropagation()}
              >
                <Content onClose={close} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.getElementById('modal') as HTMLElement,
      )}
    </>
  )
}
