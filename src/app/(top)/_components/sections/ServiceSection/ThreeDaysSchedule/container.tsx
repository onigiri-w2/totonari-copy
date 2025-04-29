'use client'
import { HtmlBodyScrollLocker } from "@/functions/scrollLocker";
import React, { useContext, createContext, useCallback, useRef } from "react";


type ContextType = {
  isOpen: boolean
  close: () => void
  open: () => void
}
const ThreeDaysScheduleContext = createContext<ContextType>({
  isOpen: false,
  close: () => { },
  open: () => { }
});

type ProviderProps = { children: React.ReactNode }
export const ThreeDaysScheduleProvider = ({ children }: ProviderProps) => {
  const lockerRef = useRef(new HtmlBodyScrollLocker())
  const [isOpen, setIsOpen] = React.useState(false);
  const close = useCallback(() => {
    lockerRef.current.unlock()
    setIsOpen(false)
  }, [isOpen]);
  const open = useCallback(() => {
    lockerRef.current.lock()
    setIsOpen(true)
  }, [isOpen]);

  return (
    <ThreeDaysScheduleContext.Provider value={{
      isOpen,
      close,
      open
    }}>
      {children}
    </ThreeDaysScheduleContext.Provider>
  )
}
export const useThreeDaysScheduleContext = () => useContext(ThreeDaysScheduleContext)


