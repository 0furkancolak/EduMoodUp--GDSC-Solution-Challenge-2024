
import React from 'react'
import UniHomeSectionProvider from './UniHomeSectionProvider'
import Link from 'next/link'

export default function FacultySection({ lang,t }) {

    return (
        <UniHomeSectionProvider className={"relative"}>
            <Link href={`/${lang}/university/faculty`} className='flex w-full items-center justify-center h-full'>
                <h3 className='font-bold text-3xl'>{t.fakultesayisi}:12</h3>
            </Link>
        </UniHomeSectionProvider>
    )
}
