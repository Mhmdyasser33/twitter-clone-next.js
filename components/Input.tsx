import React from 'react'
interface InputProps{
    placeholder?: string ,
    value ?: string ,
    disabled : boolean ,
    type ?: string ,
    onChange : (event : React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({placeholder , value , disabled , type , onChange} : InputProps)  => {
  return (
      <input
      className='w-full text-lg p-4 bg-black border-2 border-neutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-900 disabled-opacity-70 disabled:cursor-not-allowed'
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
       />
  )
}

export default Input

