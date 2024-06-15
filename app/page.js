import React, { useState } from 'react'

const page = () => {
  const [Name, setName] = useState('')
  return (
    <>
      <div className='flex items-center justify-center h-screen text-3xl font-mono font-semibold text-green-200'>Hey!! NEXT.JS</div>
      <input type='text' className='px-6 py-3 bg-transparent border-3 border-zinc-200'/>
      </>

      )
}

      export default page