"use client"
import Link from 'next/link'
import React from 'react'

export default function ListUniversity({ uni, lang }) {
    return (
        <Link href={`/${lang}/universities/${uni.url}`} className='rounded-lg flex justify-between items-center bg-gray-100 px-4 py-6'>
            <h1 className='font-bold text-xl'>{uni.name}</h1>
            <div className='flex gap-4 text-2xl items-center'>
            </div>
        </Link>
    )
}
