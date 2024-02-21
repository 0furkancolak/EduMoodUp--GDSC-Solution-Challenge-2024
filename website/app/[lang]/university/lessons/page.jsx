import React from 'react'
import AddLessons from './AddLessons'
import { SiGoogleclassroom } from 'react-icons/si'
import Search from '@/app/UI/layout/search/Search'
import { getDictionary } from '@/get-dictionary';

export default async function page({ params }) {
  const intl = await getDictionary(params.lang);
  return (
    <div className='flex justify-center w-full py-8 '>
      <div className='max-w-[70%] w-full'>
        <div className='font-bold text-4xl flex items-center justify-center gap-2'>
          <SiGoogleclassroom />
          <h1>{intl.dersler}</h1>
        </div>
        <AddLessons t={intl} />
        <Search placeholder={intl.dersara} />
        <div className='flex flex-col gap-3 mt-3'>
          {/* {faculties.map((fac) => (<ListFaculty key={fac.id} fac={fac} />))} */}
        </div>
      </div>
    </div>
  )
}
