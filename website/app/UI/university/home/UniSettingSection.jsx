import React from 'react'
import UniHomeSectionProvider from './UniHomeSectionProvider'
import Link from 'next/link'

export default function UniSettingSection({ lang, t }) {
  return (
    <UniHomeSectionProvider>
      <Link href={`/${lang}/university/lessons`} className='flex w-full flex-col items-center justify-center h-full'>
        <h3 className='font-bold text-3xl'>{t.derssayisi}:46000</h3>
      </Link>
    </UniHomeSectionProvider>
  )
}
