import React from 'react'
import {BsHouseFill , BsBellFill} from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import SidebarLogo from './SidebarLogo'
import SideBarItems from './SideBarItems'
import {BiLogOut} from 'react-icons/bi'
import SideBarTweetBtn from './SideBarTweetBtn'
const Sidebar = () => {
    const items = [{
        icon :BsHouseFill,
        label : 'Home' ,
        href : '/' ,
    } ,
    {

        icon :BsBellFill,
        label : 'Notifications' ,
        href : '/notifications' ,

    } ,
    {
        icon :FaUser,
        label : 'Profile' ,
        href : '/profile' ,
    }
]
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
        <div className='flex flex-col item-end'>
            <div className='space-y-2 lg:w-[235px]'>
            <SidebarLogo/>
               {items.map((item , index) =>(
                <SideBarItems
                key = {index}
                label = {item.label}
                icon = {item.icon}
                href= {item.href}
                />
               ))}
              <SideBarItems label='Logout' icon={BiLogOut} onClick={()=>{}}/>
              <SideBarTweetBtn/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar