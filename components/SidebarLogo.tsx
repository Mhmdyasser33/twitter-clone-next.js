import { useRouter } from 'next/router';
import React from 'react'
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
    const router = useRouter() ;
  return (
    <div className='rounded-full h-14 w-14 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer'>
        <BsTwitter size={28} color='white'onClick={()=> router.push("/")}/>
    </div>
  )
}

export default SidebarLogo