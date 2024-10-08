import React, { createContext, ReactNode, useState } from 'react'

interface MenuContextTypes {
  menuOpen: boolean
  toggleMenu: () => void
}

interface MenuContextProviderProps {
  children: ReactNode
}

export const MenuContext = createContext({} as MenuContextTypes)

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
