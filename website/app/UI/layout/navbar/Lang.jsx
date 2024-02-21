"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function Lang({ scrolled }) {
  const params = usePathname(); 
  const conLink = params.split("/").slice(2);
  return (
    <Popover placement="bottom-end" showArrow={true}>
      <PopoverTrigger>
        <Button
          className={`${
            scrolled
              ? "bg-gray-800 text-white hover:bg-white hover:text-black"
              : "hover:text-white bg-white hover:bg-gray-800"
          }
        " transition-colors "
        `}
        >
          <Image
            src={
              params.split("/")[1] == "en"
                ? "https://flagcdn.com/gb.svg"
                : "https://flagcdn.com/tr.svg"
            }
            alt=""
            width={20}
            height={30}
            className="rounded-sm"
          />
          {params.split("/")[1] == "en" ? "English" : "Türkçe"}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-3 px-1 py-2">
          <Link
            href={`/tr/${conLink}`}
            className="flex items-center justify-start hover:bg-slate-800 transition-colors duration-300 px-3 py-2 rounded-lg hover:text-white gap-2" 
          >
            <Image
              src={"https://flagcdn.com/tr.svg"}
              alt=""
              width={20}
              height={30}
            />
            Türkçe
          </Link>
          <Link
            href={`/en/${conLink}`}
            className="flex items-center justify-start hover:bg-slate-800 transition-colors duration-300 px-3 py-2 rounded-lg hover:text-white gap-2"
          >
            <Image
              src={"https://flagcdn.com/gb.svg"}
              alt=""
              width={20}
              height={30}
            />
            English
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
