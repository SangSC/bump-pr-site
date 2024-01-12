import React, { useContext } from "react";
import { NavContext } from "@/context/NavContext";

import { RiCloseLine } from "react-icons/ri";
import Nav from "./Nav";
import Socials from "./Socials";
import ClickOutside from "./ClickOutside";

const NavMobile = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);
  return (
    <>
      <div
        className={`${
          isOpen ? "opacity-50 blur-xl" : "hidden opacity-0 blur-0"
        } fixed inset-0 bg-black transition-all duration-500`}
      ></div>
      <ClickOutside
        onClickOutside={() => {
          setIsOpen(false);
        }}
      >
        <nav
          className={`${isOpen ? "right-0" : "-right-full"} 
      xl:hidden fixed bg-primary w-[75vw] border-l-2 border-accent top-0 z-20 bottom-0 transition-all duration-500`}
        >
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-4 cursor-pointer"
          >
            <RiCloseLine className="text-5xl" />
          </div>
          <Nav containerStyles="flex flex-col text-[25px] uppercase font-semibold bg-primary h-[80vh] items-center justify-center gap-y-8" />

          <Socials
            containerStyles="flex text-[24px] gap-x-4 justify-center"
            iconStyles="hover:text-accent transition-all"
          />
        </nav>
      </ClickOutside>
    </>
  );
};

export default NavMobile;
