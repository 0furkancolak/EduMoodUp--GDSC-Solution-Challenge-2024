import React from 'react'

export default function AdminPageLayout({ children }) {
    return (
        <div className='flex justify-center w-full py-8'>
            <div className='max-w-[70%] w-full'>{children}</div>
        </div>
    )
}
