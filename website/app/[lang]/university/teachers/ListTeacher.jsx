"use client"
import TeacherDelete from '@/app/UI/university/teacher/TeacherDelete'
import TeacherEdit from '@/app/UI/university/teacher/TeacherEdit'
import React from 'react'
import { HiCheck } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function ListTeacher({ teac, appTeac,t }) {
    return (
        <div className='rounded-lg hover:text-white hover:bg-gray-800 transition-colors duration-300 flex justify-between items-center w-full bg-gray-100 px-4 py-6'>
            <div>
                <h1 className='font-bold text-xl'>{appTeac ? appTeac.fullName : teac.fullName}</h1>
                <p className='text-sm opacity-70'>{appTeac ? appTeac.email : teac.email}</p>
            </div>
            <div className='flex gap-4 text-2xl items-center'>
                {appTeac ? (
                    <>
                        <button className='text-2xl bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white p-2 rounded-lg font-bold'><IoClose /></button>
                        <button className='text-2xl bg-green-600 hover:bg-green-700 transition-colors duration-300 text-white p-2 rounded-lg font-bold'><HiCheck /></button>
                    </>
                ) : (
                    <>
                        <TeacherEdit t={t} teac={teac} />
                        <TeacherDelete t={t} teac={teac} />
                    </>
                )}
            </div>
        </div>
    )
}
