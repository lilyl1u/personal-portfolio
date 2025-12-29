//context provider for theme
'use client'
 
import { createContext } from 'react'
 
export const ThemeContext = createContext({})
 
// create client compoent that accepts children
// then import it into a server component
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}