"use client"
import React from 'react'
import { FaEdit } from "react-icons/fa";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Input } from "@nextui-org/react";
import { IoClose } from "react-icons/io5";


export default function DepertmentEdit({dep,t}) {
    let [isEditOpen, setIsEditOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsEditOpen(true)} className='cursor-pointer text-white p-2 bg-green-600 transition-colors duration-300 hover:bg-green-700 rounded-lg'><FaEdit /></button>
            <Transition appear show={isEditOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setIsEditOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className='flex items-center justify-between text-lg'>
                                        <Dialog.Title
                                            as="h3"
                                            className=" font-medium leading-6 text-gray-900"
                                        >
                                            Fakülte Düzenleme
                                        </Dialog.Title>
                                        <button onClick={() => setIsEditOpen(false)} ><IoClose size={28} /></button>
                                    </div>

                                    <div className="mt-5">
                                        <Input size={"md"} type="text" placeholder={dep.name} />
                                    </div>

                                    <div className="mt-5 flex justify-end ">
                                        <button
                                            type="button"
                                            className="cursor-pointer text-white px-5 py-2 font-bold bg-green-600 transition-colors duration-300 hover:bg-green-700 rounded-lg"
                                            onClick={() => setIsEditOpen(false)}
                                        >
                                            {t.duzenle}
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            </>
    )
}
