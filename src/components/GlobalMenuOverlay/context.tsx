"use client";

import React, { createContext, useState, useContext, useRef } from 'react';
import { HtmlBodyScrollLocker } from "@/functions/scrollLocker";

type MenuContextType = {
  menuOverlayIsOpen: boolean;
  openMenuOverlay: () => void;
  closeMenuOverlay: () => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const pagelocker = useRef(new HtmlBodyScrollLocker());
  const [menuOverlayIsOpen, setMenuOverlayIsOpen] = useState(false);

  const closeMenuOverlay = () => {
    pagelocker.current.unlock();
    setMenuOverlayIsOpen(false);
  };

  const openMenuOverlay = () => {
    pagelocker.current.lock();
    setMenuOverlayIsOpen(true);
  };

  return (
    <MenuContext.Provider
      value={{
        menuOverlayIsOpen,
        openMenuOverlay,
        closeMenuOverlay,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}

