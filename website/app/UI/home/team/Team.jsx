import React from 'react'
import Member from './Member'

export default function Team({ t }) {
    const team = [
        {
            id: 1,
            fullName: "Furkan Çolak",
            role: "Frontend Developer",
            linkedin: "https://www.linkedin.com/in/furkancolakb/",
            img: "/images/team/Furkan.jpg"
        },
        {
            id: 2,
            fullName: "Atahan Halıcı",
            role: "Mobil Developer",
            linkedin: "https://www.linkedin.com/in/atahan-halici-698194228/",
            img: "/images/team/Atahan.jpg"
        },
        {
            id: 3,
            fullName: "A. Selim Boz",
            role: "Backend Developer",
            linkedin: "https://www.linkedin.com/in/ahmet-selim-boz-216847229/",
            img: "/images/team/Selim.jpg"
        },
        {
            id: 4,
            fullName: "H. Yusuf Ayhan",
            role: "Backend Developer",
            linkedin: "https://www.linkedin.com/in/habil-yusuf-ayhan-92ba39227/",
            img: "/images/team/Habil.jpg"
        },
    ]
    return (
        <div className="w-full min-h-screen bg-cyan-600">
            <div className='min-h-screen flex flex-col items-center py-8 justify-center gap-6 mx-auto max-w-6xl lg:max-w-7xl w-full'>
                <h1 className="font-bold text-5xl text-white mb-8">Takım</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {team.map((t) => <Member key={team.id} member={t} />)}
                </div>
            </div>
        </div>
    )
}
