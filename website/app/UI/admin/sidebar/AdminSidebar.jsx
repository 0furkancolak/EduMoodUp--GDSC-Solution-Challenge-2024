"use client"
import React from "react";
import Lang from "../../layout/navbar/Lang";
import Link from "next/link";
import { HiAcademicCap } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { usePathname } from "next/navigation";

export default function AdminSidebar({ lang }) {
  const params = usePathname()
  const links = [
    {
      id: 1,
      name: "Universities",
      icon: <HiAcademicCap />,
      url: `/${lang}/admin/universities`,
    },
    {
      id: 2,
      name: "Settings",
      icon: <IoMdSettings />,
      url: `/${lang}/admin/settings`,
    },
  ];
  return (
    <div className="bg-gray-800 flex flex-col justify-between gap-6 h-screen z-50 w-[20%] text-white fixed top-0 left-0 p-8 ">
      <div className="flex flex-col h-[15%]">
        <Link href={`/${lang}/admin`} className="text-3xl">EduMoodUp</Link>
        <p className="text-sm opacity-50">Admin Panel</p>
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
