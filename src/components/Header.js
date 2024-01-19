"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// components
import NavMobile from "./NavMobile";
import Nav from "./Nav";
import MenuBtn from "./MenuBtn";
import Socials from "./Socials";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActive(window.scrollY > 100);
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // clear event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-all ${
        active ? "bg-primary/90 py-4 " : "bg-transparent py-4 "
      }`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        {/* logo */}
        <Link
          href={"#"}
          className="relative flex w-[70px] h-[70px] transition-all xl:mb-0"
        >
          <Image
            src={"/assets/header/logo.png"}
            fill
            className="object-contain"
            alt=""
          />
        </Link>
        {/* nav */}
        <Nav containerStyles="hidden xl:flex items-center gap-x-8" />
        {/* nav mobile */}
        <NavMobile />
        {/* menu btn */}
        <div className="absolute right-7 top-9 z-10 xl:hidden">
          <MenuBtn />
        </div>
        {/* socials */}
        <Socials
          containerStyles="hidden xl:flex text-[24px] gap-x-4"
          iconStyles="hover:text-accent transition-all"
        />
      </div>
    </header>
  );
};

export default Header;
