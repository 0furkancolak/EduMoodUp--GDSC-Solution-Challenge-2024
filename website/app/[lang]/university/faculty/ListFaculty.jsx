"use client"
import React from 'react'
import FacultyEdit from '@/app/UI/university/faculty/FacultyEdit';
import FacultyDelete from '@/app/UI/university/faculty/FacultyDelete';
 
export default function ListFaculty({ fac,t }) {

    return (
        <div className='rounded-lg flex justify-between items-center bg-gray-100 hover:text-white hover:bg-gray-800 transition-colors duration-300 px-4 py-6'>
            <h1 className='font-bold text-xl'>{fac.name}</h1>
            <div className='flex gap-4 text-2xl items-center'>
                <FacultyEdit t={t} fac={fac} />
                <FacultyDelete t={t} fac={fac} />
            </div>
        </div>
    )
}
