import useUsers from '@/Hooks/useUsers'
import React from 'react'
import Avatar from './Avatar';

const FollowerBar = () => {
  const {data : users = []} = useUsers() ;
  /* if(users.length === 0 ){
    return null
  } */
  return (
    <div className='px-6 py-4 hidden lg:block '>
    <div className='bg-neutral-800 rounded-xl p-4f'>
    <h2 className='text-white text-xl font-semibold flex items-center justify-center h-11'> Who to follow </h2>
    <div className='flex flex-col gap-6 mt-4'>
      {/* */}
       {users.map((user : Record<string , any>) =>{
          <div className='flex flex-col gap-3'>
            <Avatar userId={user.id}/>
            <div  className='flex flex-col'>
           <p className='text-white font-semibold text-sm'>
             {user.name}
           </p>
           <p className='text-sm text-neutral-400'>
             @{user.username}
           </p>
            </div>
          </div>
       })}
    </div>
    </div>
    </div>
  )
}

export default FollowerBar