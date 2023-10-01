"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { GrainyBg } from "../grainy-bg";
export default function LoadingUI() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      {show && (
        <>
          <GrainyBg />
          <motion.div
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", duration: 1, repeat: Infinity }}
            className="bg-background w-full h-full flex justify-center items-center"
          >
            <Image
              src="/icon.png"
              width={40}
              height={30}
              alt="Haythem Lazaar Logo"
            />
          </motion.div>
        </>
      )}
    </>
  );
}
