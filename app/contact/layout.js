import React from 'react'

const layout = ({ children }) => {
    return (
        <div>
            <h1 className='text-7xl font-semibold text-green-100 absolute bottom-10 left-1/2 -translate-x-1/2 uppercase'>Contact</h1>
            {children}
        </div>
    )
}

export default layout