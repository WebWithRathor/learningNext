import React, { useState } from 'react'

const Component = () => {
    const [Name, setName] = useState('Nobody')
    return (
        <>
            <h1> Hey!! {Name}</h1>
            <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name..' className='px-6 py-3  bg-transparent border-2 border-zinc-200' />
        </>
  
        )
}

export default Component