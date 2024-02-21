import DepertmentSection from '@/app/UI/university/home/DepertmentSection'
import FacultySection from '@/app/UI/university/home/FacultySection'
import UniSettingSection from '@/app/UI/university/home/UniSettingSection'
import UniTeacherSection from '@/app/UI/university/home/UniTeacherSection'
import { getDictionary } from '@/get-dictionary'
import React from 'react'

export default async function Page({ params }) {
  const intl = await getDictionary(params.lang);
  return (
    <div className='flex flex-col w-full h-screen'>
      <div className='flex justify-center'>
        <h1 className='text-center my-3 text-4xl font-bold px-5 py-4 rounded-2xl bg-gray-800 text-white'>Erzincan Binali Yıldırım Üniversitesi</h1>
      </div>
      <div className='grid grid-cols-2 w-full h-full gap-5 p-4'>
        <FacultySection t={intl} lang={params.lang} />
        <DepertmentSection t={intl} lang={params.lang} />
        <UniTeacherSection t={intl} lang={params.lang} />
        <UniSettingSection t={intl} lang={params.lang} />
      </div>
    </div>
  )
}
