import React, { useContext } from "react";
import { NavContext } from "@/context/NavContext";

import { RiCloseLine } from "react-icons/ri";
import Nav from "./Nav";
import Socials from "./Socials";

const NavMobile = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);
  return (
    <nav
      className={`${isOpen ? "right-0" : "-right-full"} 
      xl:hidden fixed bg-primary w-full top-0 z-20 bottom-0 transition-all duration-500`}
    >
      <div
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-4 cursor-pointer"
      >
        <RiCloseLine className="text-5xl" />
      </div>
      <Nav containerStyles="flex flex-col text-[30px] uppercase font-bold bg-primary h-[80vh] items-center justify-center gap-y-8" />

      <Socials
        containerStyles="flex text-[24px] gap-x-4 justify-center"
        iconStyles="hover:text-accent transition-all"
      />
    </nav>
  );
};

export default NavMobile;
