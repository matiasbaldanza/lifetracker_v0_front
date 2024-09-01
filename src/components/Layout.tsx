import React from 'react'
import BottomNav from './BottomNav'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4">
        {children}
      </main>
      <footer>
        <BottomNav />
      </footer>
    </div>
  )
}

export default Layout