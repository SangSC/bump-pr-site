"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { MdSatelliteAlt } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";

import "../app/globals.css";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Modal from "./Modal";

import IntroVideo from "./IntroVideo";

const locationSequence = [
  "Kanagawa",
  3000,
  "Aichi",
  3000,
  "Osaka",
  3000,
  "Hiroshima",
  3000,
  "Hokkaido",
  3000,
  "Fukuoka",
  3000,
  "Miyagi",
  3000,
  "Tokyo",
  3000,
];

const Hero = () => {
  // const [modalOpen, setModalOpen] = React.useState(false);
  // const close = () => setModalOpen(false);
  // const open = () => setModalOpen(true);
  return (
    <section className="h-[85vh] xl:h-[810px]" id="home">
      <div className="container mx-auto h-full flex justify-center xl:justify-start">
        {/* text */}
        <div className="h-full flex flex-col justify-center items-center xl:items-start z-20 pt-12 xl:ml-5">
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className="relative flex items-center h-[350px] xl:h-max"
          >
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.4}
              className="relative"
            >
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] "
              >
                <Image
                  src={"/assets/hero/logo-stone.svg"}
                  fill
                  alt=""
                  className="object-contain logo-color"
                />
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>

          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="min-h-[60px] flex items-center mt-3 mb-3 gap-x-3"
          >
            <div className="hidden xl:flex items-center xl:gap-x-2 text-[26px]">
              <div>HOMESICKEISEI</div>
              <div className="relative w-2 h-2 mx-2 flex items-center justify-center">
                <Image fill src={"/assets/hero/dot.svg"} />
              </div>
              <div>2024</div>
            </div>
            {/* icon */}
            <div>
              <MdSatelliteAlt className="text-accent" />
            </div>
            {/* animation */}
            <TypeAnimation
              sequence={locationSequence}
              wrapper="div"
              speed={10}
              deletionSpeed={10}
              cursor={false}
              repeat={Infinity}
              style={{ fontSize: "1.5rem" }}
            />
          </motion.div>
          {/* btn */}
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col xl:flex-row gap-x-3 gap-y-2 mb-5 "
          >
            <Link
              href="https://www.bumpofchicken.com/contents/general_articles/1073"
              passHref={true}
              target="_blank"
            >
              <button className="btn btn-sm btn-accent">Event Details</button>
            </Link>
            {/* intro video btn */}
            {/* <div>
              <button className="btn btn-sm btn-white gap-x-2">
                Intro Video <FaCirclePlay />
              </button>
            </div> */}
          </motion.div>
        </div>
        {/* image */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="hidden xl:flex absolute right-0 top-20 before:absolute before:top-0 before:z-10 2xl:right-[100px] "
        >
          <Image
            src={"/assets/hero/bump-3.png"}
            width={648}
            height={810}
            alt=""
            quality={100}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
