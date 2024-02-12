import React, { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { motion } from "framer-motion";
import Modal from "./Modal";

const IntroVideo = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
      <button
        className="btn btn-sm btn-white gap-x-2"
        onClick={() => (modalOpen ? close() : open())}
      >
        Intro Video <FaCirclePlay />
      </button>
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}

      {/* <video width="w-dvw" height="h-dvh" controls preload="none" autoplay>
        <source src="/assets/intro.mp4" type="video/mp4" />
      </video> */}
    </div>
  );
};

export default IntroVideo;
