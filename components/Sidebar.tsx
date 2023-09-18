import React from 'react'
import {BsHouseFill , BsBellFill} from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import SidebarLogo from './SidebarLogo'
import SideBarItems from './SideBarItems'
import {BiLogOut} from 'react-icons/bi'
import { signOut } from 'next-auth/react'
import SideBarTweetBtn from './SideBarTweetBtn'
import useCurrentUser from '@/Hooks/useCurrentUser'
const Sidebar = () => {

    const {data : currentUser } = useCurrentUser() ;
    const items = [{
        icon :BsHouseFill,
        label : 'Home' ,
        href : '/' ,
    } ,
    {

        icon :BsBellFill,
        label : 'Notifications' ,
        href : '/notifications' ,
        auth : true

    } ,
    {
        icon :FaUser,
        label : 'Profile' ,
        href : '/profile' ,
        auth : true

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
                auth = {item.auth}
                />
               ))}
               {currentUser && (
              <SideBarItems label='Logout' icon={BiLogOut} onClick={()=>signOut()}/>
               )}
              <SideBarTweetBtn/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar