"use client";
import { GrainyBg } from "@/app/page";
import { motion } from "framer-motion";
import Image from "next/image";
export default function LoadingUI() {
  return (
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
  );
}
