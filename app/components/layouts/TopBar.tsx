
import React from 'react'
import Link from 'next/link'


const TopBar = async () => {

    return (
        <nav className='px-4 bg-gray-100 h-14 border-b flex'>
            <div className="grow flex h-full justify-start items-center">
                <button className='text-2xl'>
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            <div className='flex space-x-3 justify-center items-center h-full '>
            
            </div>
        </nav>
    )
}

export default TopBar
