"use client";
import { motion } from "framer-motion";
import Contact from "..";

export default function ContactCard() {
  return (
    <motion.div
      className="relative w-full rounded-xl back-card p-[2px] overflow-hidden mt-80"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        background: "linear-gradient(160deg, #bebebe -20%, #050505 55.31%)",
      }}
      whileHover={{
        background: "linear-gradient(160deg, #bebebe 30%, #050505 95.31%)",
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-full rounded-xl flex flex-col main-card px-7 md:px-10 lg:pr-0 lg:pl-20 ">
        <Contact style="lg:max-w-[1000px] 3xl:max-w-[1200px]" />
      </div>
    </motion.div>
  );
}
