
import React from 'react'
import { MdDelete } from "react-icons/md";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function DepertmentDelete({ dep,t }) {
    let [isDeleteOpen, setIsDeleteOpen] = useState(false)
    return (
        <>
            <button onClick={() => setIsDeleteOpen(true)} className='cursor-pointer text-white p-2 bg-red-600 transition-colors duration-300 hover:bg-red-700 rounded-lg'><MdDelete /></button>
            <Transition appear show={isDeleteOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setIsDeleteOpen(false)}>
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
                                            {dep.name} {t.silmekistiyor}
                                        </Dialog.Title>
                                    </div>

                                    <div className="mt-5 flex justify-between">
                                        <button
                                            type="button"
                                            className="cursor-pointer text-white px-5 w-24 py-2 font-bold bg-green-600 transition-colors duration-300 hover:bg-green-700 rounded-lg"
                                            onClick={() => setIsDeleteOpen(false)}
                                        >
                                            {t.iptal}
                                        </button>
                                        <button
                                            type="button"
                                            className="cursor-pointer text-white px-5 w-24 py-2 font-bold bg-red-600 transition-colors duration-300 hover:bg-red-700 rounded-lg"
                                            onClick={() => setIsDeleteOpen(false)}
                                        >
                                            {t.sil}
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
