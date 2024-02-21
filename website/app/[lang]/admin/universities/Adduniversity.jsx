"use client"
import React from 'react'
import { Accordion, AccordionItem, Input } from "@nextui-org/react";

export default function Adduniversity() {
    return (
        <div className='flex justify-center w-full my-10'>
            <Accordion className='rounded-lg bg-gray-200 px-8'>
                <AccordionItem key="1" aria-label="Accordion 1" title="Üniversite ekle" >
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-col gap-3 w-full'>
                            <Input size={"md"} type="text" label="Adı" />
                            <Input size={"md"} type="email" label="e-postası" />
                            <Input size={"md"} type="password" label="şifre" />
                        </div>
                        {/* {error && (<p className='text-sm text-red-500'>Lütfn girdiğiniz verileri kontrol edin</p>)} */}
                        <button className='btn-primary flex mt-3'>Ekle</button>
                    </div>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
