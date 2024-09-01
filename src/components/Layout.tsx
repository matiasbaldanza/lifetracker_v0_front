import React from 'react'
import BottomNav from './BottomNav'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen">
      <main className="pb-16 overflow-auto">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}

export default Layout