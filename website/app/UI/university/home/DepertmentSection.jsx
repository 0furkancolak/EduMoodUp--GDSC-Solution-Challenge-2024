import React from 'react'
import UniHomeSectionProvider from './UniHomeSectionProvider'
import Link from 'next/link'

export default function DepertmentSection({ lang,t }) {
  return (
    <UniHomeSectionProvider>
      <Link href={`/${lang}/university/depertment`} className='flex w-full flex-col items-center justify-center h-full'>
        <h3 className='font-bold text-3xl'>{t.bolumsayisi}:62</h3>
      </Link>
    </UniHomeSectionProvider>
  )
}
