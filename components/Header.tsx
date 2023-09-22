import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { BiArrowBack } from 'react-icons/bi';

interface HeaderProps {
    label : string ,
    showBackArrow ?: boolean
}
const Header = ({label , showBackArrow} : HeaderProps) => {
  const router = useRouter() ;
  //!I use useCallback to memoize a function which will goBack
    const handleBack = useCallback(() =>{
        router.back() ;
    } ,[router])
  return (
    <div className='border-b-[1px] border-neutral-800 p-1'>
    <div className='flex flex-row items-center gap-2'>
      {/* check if showBack True ? show the icon */}
      {showBackArrow && (
        <BiArrowBack
        className='hover-opacity-70 cursor-pointer transition'
         onClick={handleBack}
         color='white'
         size={21}
        />
      )}
     <h1 className='text-xl text-white font-semibold'>{label}</h1>
    </div>
    </div>
  )
}

export default Header