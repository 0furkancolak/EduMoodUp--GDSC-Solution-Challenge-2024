"use client"
import React, { useState } from 'react'
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AddFaculty({ t }) {
    const [error, setError] = useState(false)
    const [fac, setFac] = useState("")
    const [data, setData] = useState([])

    const handleChange = (e) => {
        setFac(e.target.value);
        setError(false)
    }

    const handleClick = () => {
        if (fac === "") {
            setError(true)
        } else {
            setData(fac.split(",")
                .map(fak => fak.trim())
                .filter(fak => fak))
        }
    }

    return (
        <div className='flex justify-center w-full my-10'>
            <Accordion className='rounded-lg bg-gray-200 px-8'>
                <AccordionItem key="1" aria-label="Accordion 1" title={t.fakulteekle} >
                    <div className='flex flex-col items-center'>
                        <textarea onChange={handleChange} type="textarea" name='faculty' className='bg-white outline-none  w-full  rounded-lg h-36 px-3 py-2' placeholder={t.fakultegir}></textarea>
                        {error && (<p className='text-sm text-red-500'>{t.lutfenkontrol}</p>)}
                        <p className='mt-1 mb-3 ps-1'>{t.fakulteinfo} <b>{t.virgul}(,)</b> {t.koyun} </p>
                        <button onClick={handleClick} className='btn-primary flex'>{t.ekle}</button>
                    </div>
                </AccordionItem>
            </Accordion>
        </div>

    )
}
