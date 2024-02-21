import React from 'react'

export default function AdminHomeSectionProvider({children}) {
  return (
    <section className='w-full h-full rounded-xl bg-gray-800 hover:bg-gray-900 transition-colors duration-300 text-white '>
        {children}
    </section>
  )
}
