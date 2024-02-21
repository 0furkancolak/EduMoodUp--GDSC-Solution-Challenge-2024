"use client"
import React from "react";
import Lang from "../../layout/navbar/Lang";
import Link from "next/link";
import { HiAcademicCap } from "react-icons/hi2";
import { TbToolsOff } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { usePathname } from "next/navigation";

export default function UniSidebar({ lang }) {
  const params = usePathname()
 
  const links = [
    {
      id: 1,
      name: "Faculties",
      icon: <HiAcademicCap />,
      url: `/${lang}/university/faculty`,
    },
    {
      id: 2,
      name: "Depertments",
      icon: <TbToolsOff />,
      url: `/${lang}/university/depertment`
    },
    {
      id: 3,
      name: "Teachers",
      icon: <GiTeacher />,
      url: `/${lang}/university/teachers`,
    },
    {
      id: 4,
      name: "Lessons",
      icon: <SiGoogleclassroom />,
      url: `/${lang}/university/lessons`,
    },
    {
      id: 5,
      name: "Setting",
      icon: <IoMdSettings />,
      url: `/${lang}/university/setting`,
    }, 
  ];
  
  return (
    <div className="bg-gray-800 flex flex-col justify-between gap-6 h-screen z-50 w-[20%] text-white fixed top-0 left-0 p-8 ">
      <div className="flex flex-col h-[15%]">
        <Link href={`/${lang}/university`} className="text-3xl">EduMoodUp</Link>
        <p className="text-sm opacity-50">University Panel</p>
      </div>
      <div className="h-full ms-2 flex flex-col gap-6 ">
        {links.map((link) => (
          <Link className={`${params == link.url && "text-blue-600"} hover:text-blue-800 transition-colors duration-300 text-lg flex items-center gap-3`} href={link.url} key={link.id}>{link.icon}{link.name}</Link>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <Link href={"/"}>{"<-EMU"}</Link>
        <Lang />
      </div>
    </div>
  );
}
