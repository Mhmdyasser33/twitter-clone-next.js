import useLoginModel from '@/Hooks/useLoginModel'
import Input from '@/components/Input';
import Model from '@/components/Model';
import React, { useCallback, useState } from 'react'

const LoginModel = () => {
    const LoginModel = useLoginModel() ;
   const [email , setEmail] = useState("") ;
   const [password  , setPassword ]= useState("") ;
   const [isLoading , setIsLoading] = useState(false) ;
const handleSubmit = useCallback( async() =>{
    try{
        setIsLoading(true) ;

        // todo ADD LOG IN.....

    }catch(error){
        console.log(error)
    }finally{
     setIsLoading(false)
    }
} , [])

const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} disabled={isLoading}/>
      <Input placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password} disabled={isLoading}/>
    </div>
)
  return (
<Model
isOpen = {LoginModel.isOpen}
onClose = {LoginModel.onClose}
onSubmit = {handleSubmit}
title = "Login"
body = {bodyContent}
actionLabel = "Sign in"
disabled = {isLoading}
/>
  )
}

export default LoginModel