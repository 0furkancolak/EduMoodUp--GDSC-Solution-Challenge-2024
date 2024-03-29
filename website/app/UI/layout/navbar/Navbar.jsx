"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import Lang from "./Lang";
import MobileNav from "./MobileNav";
import Motion from "../../motion/Motion";
import { usePathname } from "next/navigation";

const dancing = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
  weight: ["400", "500", "600", "700"],
});

export default function Navbar({ t }) {
  const params = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [admin, isAdmin] = useState(false);
  const langParams = params.split("/")[1];

  const links = [
    {
      id: 1,
      name: t.ev,
      icon: "ml",
      url: `/${langParams}`,
    },
    {
      id: 2,
      name: t.iletişim,
      icon: "ml",
      url: `/${langParams}/contact`,
    },
    {
      id: 3,
      name: t.hakkımızda,
      icon: "ml",
      url: `/${langParams}/about`,
    },
  ];

  useEffect(() => {
    const isAdminBool =
      params.split("/")[2] === "admin" || params.split("/")[2] === "university";
    if (isAdminBool) {
      isAdmin(true);
    } else {
      isAdmin(false);
    }
  }, [params])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Motion
      initial={{ opacity: 0, y: +100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.75 }}
      className={`${admin ? "hidden" : "flex"
        } fixed top-0 left-0 right-0 z-50 items-center justify-center `}
    >
      <div
        className={`${scrolled
          ? "rounded-2xl shadow-md m-3 py-4 w-[95%] md:w-[75%] bg-gray-800 "
          : "bg-transparent py-8 w-full container"
          } 
        transition-all duration-300 flex justify-between text-white items-center px-8 md:px-0`}
      >
        <Link
          href={`/${langParams}`}
          className={`flex md:flex-1 md:justify-center font-bold text-4xl ${dancing.className}`}
        >
          EduMoodUp
        </Link>
        <nav
          className="md:flex hidden flex-1 justify-center gap-6"
          role="navigation"
          aria-label="main navigation"
        >
          {links.map((link) => (
            <Link
              className="hover:scale-105 transition-all duration-300 hover:ring-1 ring-white rounded-lg px-3 py-2 "
              key={link.id}
              href={link.url}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex-1 md:flex items-center gap-5 justify-center">
          <Link
            href={`/${langParams}/login`}
            className="hover:scale-105 transition-all duration-300 hover:ring-1 hover:bg-white hover:text-black ring-white rounded-lg px-3 py-2 "
          >
            Üni giriş
          </Link>
          <Lang scrolled={scrolled} />
        </div>

        <MobileNav langParams={langParams} links={links} scrolled={scrolled} />
      </div>
    </Motion>
  );
}
