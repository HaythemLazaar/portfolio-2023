"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GrainyBg } from "../grainy-bg";
export default function LoadingUI() {
  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", duration: 0.5, repeat: 2 }}
      className="bg-background w-full h-[100vh] flex justify-center items-center"
    >
      <GrainyBg />
      <Image
        src="/icon.png"
        width={200}
        height={30}
        alt="Haythem Lazaar Logo"
        className="z-40 relative"
      />
    </motion.div>
  );
}
