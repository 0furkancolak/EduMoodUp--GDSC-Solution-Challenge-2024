"use client"
import DepertmentDelete from '@/app/UI/university/depertment/DepertmentDelete'
import DepertmentEdit from '@/app/UI/university/depertment/DepertmentEdit'
import React from 'react'

export default function ListDepertment({ dep,t }) {
    return (
        <div className='rounded-lg flex justify-between items-center hover:text-white hover:bg-gray-800 transition-colors duration-300 bg-gray-100 px-4 py-6'>
            <div>
                <h1 className='font-bold text-xl'>{dep.name}</h1>
                <p className='text-sm opacity-70'>{dep.faculty}</p>
            </div>
            <div className='flex gap-4 text-2xl items-center'>
                <DepertmentEdit t={t} dep={dep} />
                <DepertmentDelete t={t} dep={dep} />
            </div>
        </div>
    )
}
