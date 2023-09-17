import React from 'react';
import Sidebar from './Sidebar';
import FollowerBar from './FollowerBar';
import LoginModal from '@/Models/LoginModel';
interface LayoutProps {
  children : React.ReactNode
}
const Layout = ({ children } : LayoutProps) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div
            className="
              col-span-3
              lg:col-span-2
              border-x-[1px]
              border-neutral-800
          ">
            {children}
          </div>
          <FollowerBar />
        </div>
     </div>
    </div>
  )
}

export default Layout;