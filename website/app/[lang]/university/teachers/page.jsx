import React from 'react'
import { GiTeacher } from 'react-icons/gi'
import AddTeacher from './AddTeacher'
import Search from '@/app/UI/layout/search/Search'
import ListTeacher from './ListTeacher'
import { getDictionary } from '@/get-dictionary'

export default async function page({ searchParams,params }) {
  const query = searchParams?.query || null
  const intl = await getDictionary(params.lang);

  let teachers = [
    {
      id: 1,
      email: "ahmet.yilmaz@example.com",
      fullName: "Ahmet Yılmaz",
    },
    {
      id: 2,
      email: "fatma.gul@example.com",
      fullName: "Fatma Gül",
    },
    {
      id: 3,
      email: "mehmet.kaya@example.com",
      fullName: "Mehmet Kaya",
    },
    {
      id: 4,
      email: "ayse.yildiz@example.com",
      fullName: "Ayşe Yıldız",
    },
    {
      id: 5,
      email: "murat.celik@example.com",
      fullName: "Murat Çelik",
    },
    {
      id: 6,
      email: "elif.dogan@example.com",
      fullName: "Elif Doğan",
    },
    {
      id: 7,
      email: "burak.aksoy@example.com",
      fullName: "Burak Aksoy",
    },
    {
      id: 8,
      email: "selin.ozcan@example.com",
      fullName: "Selin Özcan",
    },
    {
      id: 9,
      email: "cem.karaca@example.com",
      fullName: "Cem Karaca",
    },
    {
      id: 10,
      email: "sena.yilmaz@example.com",
      fullName: "Sena Yılmaz",
    }
  ];

  if (query) {
    teachers = teachers.filter((teac) => {
      return teac.fullName.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || teac.email.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    })
  }

  let appTeacs = [
    {
      id: 12,
      email: "veli.yilmaz@example.com",
      fullName: "Veli Yılmaz",
    },
    {
      id: 13,
      email: "ayse.yilmaz@example.com",
      fullName: "Ayşe Yılmaz",
    },
    {
      id: 14,
      email: "fatma.yilmaz@example.com",
      fullName: "Fatma Yılmaz",
    },
    {
      id: 15,
      email: "mehmet.yilmaz@example.com",
      fullName: "Mehmet Yılmaz",
    },
    {
      id: 16,
      email: "ahmet.yilmaz@example.com",
      fullName: "Ahmet Yılmaz",
    },
  ]


  return (
    <div className='flex justify-center w-full py-8 '>
      <div className='max-w-[70%] w-full'>
        <div className='font-bold text-4xl flex items-center justify-center gap-2'>
          <GiTeacher />
          <h1>{intl.ogretmenler}</h1>
        </div>
        <AddTeacher t={intl} appTeacs={appTeacs} />
        <Search placeholder={intl.ogretmenara} />
        <div className='flex flex-col gap-3 mt-3'>
          {teachers.map((teac) => (<ListTeacher t={intl} key={teac.id} teac={teac} />))}
        </div>
      </div>
    </div>
  )
}
