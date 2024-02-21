"use client"
import React, { useState } from 'react'
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Disclosure, Transition } from '@headlessui/react'
import { IoIosArrowDown } from "react-icons/io";

export default function AddDepertment({ fac, t }) {
    const [selFac, setSelFac] = useState()
    const [error, setError] = useState(false)
    const [dep, setDep] = useState("")
    const [data, setData] = useState([])

    const handleChange = (e) => {
        setDep(e.target.value);
        setError(false)
    }

    const handleClick = () => {
        if (dep === "") {
            setError(true)
        } else {
            setData(dep.split(",")
                .map(de => de.trim())
                .filter(de => de))
        }
        let newData = {
            selFac, dep
        }
        console.log(newData);
    }
    return (
        <div className='flex flex-col gap-10 justify-center w-full my-10'>
            <Disclosure as={"div"} className={"rounded-lg bg-gray-200 px-8"} >
                {({ open }) => (
                    <>
                        <Disclosure.Button className={"my-4 w-full flex justify-between text-xl items-center "}><h2>{t.bolumekle}</h2><IoIosArrowDown className={!open && "rotate-90"} /></Disclosure.Button>

                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel>
                                <div className='flex flex-col items-center z-40 mb-6'>
                                    <Autocomplete
                                        color='#ffffff'
                                        defaultItems={fac}
                                        placeholder={t.fakultesecin}
                                        className="mb-4"
                                        onSelectionChange={(e) => setSelFac(e)}
                                    >
                                        {(item) => <AutocompleteItem className='capitalize' key={item.name}>{item.name}</AutocompleteItem>}
                                    </Autocomplete>
                                    <textarea type="textarea" name='faculty' onChange={handleChange} className='bg-white outline-none  w-full  rounded-lg h-36 px-3 py-2' placeholder={t.bolumgiriniz}></textarea>
                                    {error && (<p className='text-sm text-red-500'>{t.lutfenkontrol}</p>)}
                                    <p className='mt-1 mb-3 ps-1'>{t.virgulbolum}<b>{t.virgul}(,)</b> {t.koyun} </p>
                                    <button onClick={handleClick} className='btn-primary flex'>{t.ekle}</button>
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>

        </div>
    )
}
