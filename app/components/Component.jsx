import Link from 'next/link'
import React from 'react'

const Component = () => {
    return (
        <>
        <div className='flex flex-col gap-4 items-center justify-center h-screen w-full'>
            <h1 className='font-semibold text-3xl'> Hey!! ContactPage</h1>
            <Link href='/contact/help'>Next</Link>
        </div>
        </>
  
        )
}

export default Component