"use client"
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';

export default function AddExcelTeacher() {
    const [userData, setUserData] = useState([]);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            const userDataArray = rows.map((row) => ({
                name: row[0],
                email: row[1],
            }));

            setUserData(userDataArray);
        };

        reader.readAsArrayBuffer(file);
    };
 
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: '.xlsx, .xls',
    });

    return (
        <div>
            <h3 className='text-lg my-5'>Excel ile öğretmen eklemek için lütfen <a className='px-2 py-1 bg-blue-600 text-white rounded-lg transition-colors duration-300 hover:bg-blue-700' href={"/file/teachers.xlsx"} download>örnek dosyayı</a> inceleyin</h3>
            <div {...getRootProps()} className='border-2 border-dashed border-[#cccccc] rounded-lg cursor-pointer text-center py-12 px-10 ' >
                <input {...getInputProps()} />
                <p>Excel dosyanızı buraya bırakın veya dosya seçmek için tıklayın</p>
            </div>
            <div className='my-2 flex justify-center w-full'>

            </div>
            <div>
                <h2>User Data:</h2>
                <ul>
                    {userData.map((user, index) => (
                        <div key={index} className='flex flex-col my-5'>
                            <li>
                                Name: {user.name}
                            </li>
                            <li>
                                Email: {user.email}
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

