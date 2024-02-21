import AddFaculty from './AddFaculty'
import { HiAcademicCap } from 'react-icons/hi'
import ListFaculty from './ListFaculty'
import Search from '@/app/UI/layout/search/Search';
import { getDictionary } from '@/get-dictionary';

export default async function page({ searchParams, params }) {
    const intl = await getDictionary(params.lang);
    const query = searchParams?.query || null

    let faculties = [
        {
            id: 1,
            name: "Faculty of Engineering",
            depertment: [
                {
                    id: 11,
                    name: "Computer Engineering"
                },
                {
                    id: 12,
                    name: "Electronic Engineering"
                },
                {
                    id: 13,
                    name: "Mechanical Engineering"
                }
            ]
        },
        {
            id: 2,
            name: "Faculty of Science",
            depertment: [
                {
                    id: 21,
                    name: "Mathematics"
                },
                {
                    id: 22,
                    name: "Physics"
                },
                {
                    id: 23,
                    name: "Biology"
                }
            ]
        },
        {
            id: 3,
            name: "Faculty of Economics and Administrative Sciences",
            depertment: [
                {
                    id: 31,
                    name: "Economics"
                },
                {
                    id: 32,
                    name: "Business"
                },
                {
                    id: 33,
                    name: "International Relations"
                }
            ]
        },
        {
            id: 4,
            name: "Faculty of Law",
            depertment: [
                {
                    id: 41,
                    name: "Law"
                }
            ]
        },
        {
            id: 5,
            name: "Faculty of Medicine",
            depertment: [
                {
                    id: 51,
                    name: "Medicine"
                }
            ]
        },
        {
            id: 6,
            name: "Faculty of Pharmacy",
            depertment: [
                {
                    id: 61,
                    name: "Pharmacy"
                }
            ]
        },
        {
            id: 7,
            name: "Faculty of Dentistry",
            depertment: [
                {
                    id: 71,
                    name: "Dentistry"
                }
            ]
        },
        {
            id: 8,
            name: "Faculty of Literature",
            depertment: [
                {
                    id: 81,
                    name: "Turkish Language and Literature"
                },
                {
                    id: 82,
                    name: "English Language and Literature"
                }
            ]
        },
        {
            id: 9,
            name: "Faculty of Fine Arts",
            depertment: [
                {
                    id: 91,
                    name: "Image"
                },
                {
                    id: 92,
                    name: "Music"
                }
            ]
        },
        {
            id: 10,
            name: "Faculty of Sport Sciences",
            depertment: [
                {
                    id: 101,
                    name: "Physical Education and Sports Teaching"
                }
            ]
        }
    ];

    //search
    if (query) {
        faculties = faculties.filter((fac) => {
            return fac.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        })
    }
    return (
        <div className='flex justify-center w-full py-8'>
            <div className='max-w-[70%] w-full'>
                <div className='font-bold text-4xl flex items-center justify-center gap-2'>
                    <HiAcademicCap />
                    <h1>{intl.fakulte}</h1>
                </div>
                <AddFaculty t={intl} />
                <Search placeholder={intl.fakulteara} />
                <div className='flex flex-col gap-3 mt-3'>
                    {faculties.map((fac) => (<ListFaculty t={intl} key={fac.id} fac={fac} />))}
                </div>
            </div>
        </div>
    )
}
