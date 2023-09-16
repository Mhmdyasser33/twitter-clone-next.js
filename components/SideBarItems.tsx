import React from 'react'
import { IconType } from 'react-icons'
interface SideBarItemsProps {
    label : string ,
    icon : IconType ,
    href ?: string,
    onClick ?: () => void ,
}
const SideBarItems = ({label , icon : Icon , href , onClick } : SideBarItemsProps) => {
  return (
    <div className='flex flex-row items-center'>
    <div className='relative rounded-full h-14 w-14flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden'>
        {/* this icon will show in small screen  */}
    <Icon size={28} color='white'/>
        </div>
        <div className='relative hidden lg:flex items-row gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer items-center'>
     {/* this icons will show in the large screen */}
     <Icon size={24} color='white'/>
    <p className="hidden lg:block text-white text-xl">
            {label}
    </p>
        </div>
    </div>
  )
}

export default SideBarItems