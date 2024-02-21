"use client"
import React, { useState } from 'react'
import { Accordion, AccordionItem } from "@nextui-org/react";
import ListTeacher from './ListTeacher';

export default function AddTeacher({ appTeacs, t }) {

    return (
        <div className='flex justify-center w-full my-10'>
            <Accordion className='rounded-lg bg-gray-200 px-8'>
                {/* <AccordionItem key="1" aria-label="Accordion 1" title="Öğretmen Ekle" >
                    <div className='flex flex-col items-center'>
                        <AddExcelTeacher />
                    </div>
                </AccordionItem > */}
                <AccordionItem key="2" aria-label="Accordion 2" subtitle={`${appTeacs.length} ${t.basvurdu}`} title={t.onaylancakogr}  >
                    <div className='w-full flex justify-end'>
                        <button className='btn-primary my-4'>{t.hepsiniekle}</button>
                    </div>
                    <div className='flex flex-col items-center gap-4 w-full mb-4'>
                        {appTeacs.map((teac) => (<ListTeacher key={teac.id} appTeac={teac} />))}
                    </div>
                </AccordionItem>
            </Accordion >
        </div >
    )
}
