import React from 'react'
import UniHomeSectionProvider from './UniHomeSectionProvider'
import Link from 'next/link'

export default function UniTeacherSection({ lang,t }) {
  return (
    <UniHomeSectionProvider>
      <Link href={`/${lang}/university/teachers`} className='flex w-full flex-col items-center justify-center h-full'>
        <h3 className='font-bold text-3xl'>{t.ogretmensayisi}: 1200</h3>
      </Link>
    </UniHomeSectionProvider>
  )
}
