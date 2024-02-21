"use client"
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { useDropzone } from 'react-dropzone';
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import axios from "axios"

export default function AddLessons({ t }) {
    const [schedule, setSchedule] = useState(null);
    const [selFac, setSelFac] = useState("")
    const [selDep, setSelDep] = useState("")
    
    const fac = [
        {
            name: "Faculty of Engineering-Architecture"
        },
        {
            name: "Faculty of Medicine"
        }
    ]
    const dep = [
        {
            name: "Computer Engineering"
        }
    ]


    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const excelData = XLSX.utils.sheet_to_json(worksheet);

            // Veriyi state'e kaydet
            setSchedule(excelData);
        };

        reader.readAsArrayBuffer(file);
    };

    // const handleSubmit = () => {
    //     if (schedule) {
    //         axios.post("http://localhost:5000/university/add-lesson", { data: schedule }).then((res) => {
    //             console.log(res);
    //         }).catch((err) => {
    //             console.log(err);
    //         })
    //     }
    // }

    // useEffect(() => {
    //     let findFac = fac?.find(({ name }) => name === selFac)
    //     let result = findFac?.department
    //     setDep(result);
    //     console.log(dep);
    //     console.log(selFac);
    // }, [selFac])


    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    return (
        <div className='my-6'>
            <div>
                <Autocomplete
                    color='#ffffff'
                    defaultItems={fac}
                    placeholder={t.fakultesec}
                    className="mb-4"
                    onSelectionChange={(e) => setSelFac(e)}
                >
                    {(item) => <AutocompleteItem className='capitalize' key={item.name}>{item.name}</AutocompleteItem>}
                </Autocomplete>
            </div>
            <div>
                <Autocomplete
                    color='#ffffff'
                    defaultItems={dep}
                    className="mb-4"
                    placeholder={t.bolumsec}
                    isDisabled={selFac ? false : true}
                >
                    {(item) => <AutocompleteItem className='capitalize' key={item?.name}>{item?.name}</AutocompleteItem>}
                </Autocomplete>
            </div>
            <div>
                <h3 className='text-sm my-5'>{t.excelileekle} <a className='px-2 py-1 bg-blue-600 text-white rounded-lg transition-colors duration-300 hover:bg-blue-700' href={"/file/exampleLessons.xlsx"} download>{t.ornekdosya}</a> {t.inceleyin}</h3>
                <div {...getRootProps()} className='border-2 border-dashed border-[#cccccc] rounded-lg cursor-pointer text-center py-12 px-10 ' >
                    <input {...getInputProps()} />
                    <p>{t.exceldosyasınıekle}</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='btn-primary my-3'>{t.kaydet}</button>
            </div>
        </div>
    )
}

