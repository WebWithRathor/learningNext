import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between px-20 py-5 absolute top-0 w-full bg-green-900'>
        <h1 className='font-bold text-2xl'>Next.js</h1>
        <div className="headings flex gap-4 font-semibold">
            <Link href='/'>Home</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/about'>About</Link>
        </div>
        </div>
  )
}

export default Nav