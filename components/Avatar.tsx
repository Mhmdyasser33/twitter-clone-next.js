import React, { useCallback } from 'react'
import useUser from '@/Hooks/useUser'
import { Router, useRouter } from 'next/router';
import Image from 'next/image';
import { fetchData } from 'next-auth/client/_utils';

interface AvatarProps{
 userId : string ,
 isLarge ?: boolean ,
 hasBorder ?: boolean
}

const Avatar = ({userId , isLarge , hasBorder} : AvatarProps) => {
    const {data : users} = useUser(userId) ;
    const router = useRouter() ;
    const handleClick = useCallback((event : any) =>{
     event.stopPropagation() ;

     const url = `users/${userId}` ;
     router.push(url) ;

    } , [router , userId]) ;

  return (
    <div className={`
       ${hasBorder ? 'border-4 border-black' : ''} ;
       ${isLarge ? 'h-32' : 'h-12'} ;
       ${isLarge ? 'w-32' : 'w-12'} ;
       rounded-full
       hover:opacity-60
       transition
       relative
       cursor-pointer

    `}>
    <Image src={fetchData ?.profileImage || './images/placeholder.png'} fill style={{objectFit :'cover', borderRadius : '100%'}} alt='Avatar'/>


    </div>
  )
}

export default Avatar