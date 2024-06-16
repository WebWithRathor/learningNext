import React from 'react'

const page = ({params}) => {
    return (
        <div className='flex flex-col gap-4 items-center justify-center h-screen w-full'>
            <h1 className='font-semibold text-3xl'> Hey!! {params.someone}</h1>
        </div>
    )
}

export default page