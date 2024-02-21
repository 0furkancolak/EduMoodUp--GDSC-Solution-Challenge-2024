import React from 'react'
import { HiAcademicCap } from 'react-icons/hi'
import Adduniversity from './Adduniversity'
import ListUniversity from './ListUniversity'
import AdminPageLayout from '@/app/UI/admin/layout/AdminPageLayout'

export default function page({params}) {
  const lang = params.lang
  const universities = [
    {
      id: 1,
      name: "Deneme",
      url: "uni url"
    },
    {
      id: 2,
      name: "Deneme",
      url: "uni url"
    },
    {
      id: 3,
      name: "Deneme",
      url: "uni url"
    },
    {
      id: 4,
      name: "Deneme",
      url: "uni url"
    },
  ]
  return (
    <AdminPageLayout>
      <div className='flex gap-2 text-3xl items-center font-bold justify-center mb-3'>
        <HiAcademicCap />
        <h1>Üniversiteler</h1>
      </div>
      <Adduniversity />
      <div className='flex flex-col gap-4 mt-6'>
        {universities.map((uni) => (
          <ListUniversity key={uni.key} lang={lang} uni={uni} />
        ))}
      </div>
    </AdminPageLayout>
  )
}
