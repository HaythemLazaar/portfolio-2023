"use client";
import Link from "next/link";
import { FiAlertCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col gap-3 py-8 z-20">
        <div className="py-1 px-2 rounded-3xl bg-background flex gap-2 w-fit items-center">
          <div className="w-2 h-2 rounded-full bg-[green]" />
          <p className="text-[white] font-light">haythem.lazaar1@gmail.com</p>
        </div>
        <div className="py-1 px-2 rounded-3xl bg-badge flex gap-2 w-fit items-center relative overflow-hidden">
          <FiAlertCircle style={{ color: "black" }} className="z-10 bg-badge" />
          <motion.p
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 3,
            }}
            className="text-[black] font-light"
          >
            Currently looking for a 6-month end-of-studies internship.
          </motion.p>
          <motion.p
            initial={{ x: 20 }}
            animate={{ x: 600 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 3,
            }}
            className="text-[black] font-light absolute w-max"
          >
            Currently looking for a 6-month end-of-studies internship.
          </motion.p>
          {/* <motion.p
            initial={{ x: -200 }}
            animate={{ x: 100 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 2,
            }}
            className="text-[black] font-light"
          >
            Currently looking for a 6-month end-of-studies internship.
          </motion.p> */}
        </div>
      </div>

      <h1 className="font-heading font-black max-w-7xl text-8xl text-text z-20">
        I desgin & create{" "}
        <span
          style={{
            color: "#CF7761",
          }}
        >
          Software Products
        </span>
      </h1>
      <div className="flex gap-5 py-10 z-20">
        <Link href="">
          {" "}
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            className="bg-brand px-8 py-3 rounded-3xl font-light text-[black] flex gap-3 items-center"
          >
            <div className="w-2 h-2 rounded-full bg-[green]" />
            Reach Out
          </motion.button>
        </Link>

        <Link href="/work">
          <button className="border border-brand px-8 py-3 rounded-3xl font-light">
            View Work
          </button>
        </Link>
      </div>
    </>
  );
}
