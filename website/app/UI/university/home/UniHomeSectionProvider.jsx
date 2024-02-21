import React from 'react'

export default function UniHomeSectionProvider({ children, className }) {
    return (
        <section className={`${className && className} w-full p-8 h-full rounded-xl bg-gray-800 hover:bg-gray-900 transition-colors duration-300 text-white`}>
            {children}
        </section>
    )
}
