"use client"
import { useState } from 'react'
import Component from './components/Component'

const page = () => {
  const [Name, setName] = useState('Nobody')
  return (
    <>
      <div className='flex flex-col gap-3 items-center justify-center h-screen text-3xl font-mono font-semibold text-green-200'>
       <h1> Hey!! {Name}</h1>
      <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name..' className='px-6 py-3  bg-transparent border-2 border-zinc-200'/>
      <Component/>
      </div>
      </>

      )
}

      export default page