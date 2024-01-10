"use client";

import Link from "next/link";
import Socials from "./Socials";
import Nav from "./Nav";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Footer = () => {
  return (
    <footer className="bg-accent/70 section h-[500px] xl:h-auto">
      <div className="container mx-auto h-full flex flex-col items-center gap-y-8">
        {/* email link */}
        {/* <div>
          <Link href="#">
            <h2 className="text-[24px] lg:text-[38px] font-semibold leading-tight">
              bethere@bumpofchicken.com
            </h2>
          </Link>
        </div> */}

        {/* nav */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Nav
            containerStyles="flex flex-col xl:flex-row justify-center items-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold"
            linkStyles="hover:text-primary/80 transition-all"
          />
        </motion.div>

        {/* socials */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Socials
            containerStyles="flex text-[24px] gap-x-8 justify-center"
            iconStyles="hover:text-primary/80 transition-all"
          />
        </motion.div>

        {/* logo */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Link
            href="/"
            className="relative w-[80px] h-[80px] flex transition-all"
          >
            <Image
              src={"/assets/hero/logo.svg"}
              fill
              className="object-contain"
              alt=""
            />
          </Link>
        </motion.div>

        {/* copyright */}
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="text-muted-foreground"
        >
          Copyright &copy; Sang.C. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
