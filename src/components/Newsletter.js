"use client";

import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function Newsletter() {
  return (
    <section
      className="bg-newsletter bg-fixed h-[600px] w-full section bg-center bg-repeat"
      id="contact"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-center h-full">
          {/* text */}
          <SectionHeader pretitle="BOC Newsletter" title="Subscription" />
          {/* input */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="relative flex items-center w-full max-w-xl"
          >
            <input
              type="text"
              placeholder="Email address"
              className="w-full h-[64px] outline-none rounded-full bg-white/20 backdrop-blur-[15px] px-8"
            />
            <button
              type="submit"
              className="bg-accent absolute right-2 h-[46px] rounded-full text-[15px] hover:bg-accent-hover transition-all px-6"
            >
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
