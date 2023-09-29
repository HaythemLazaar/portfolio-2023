"use client";
import Link from "next/link";
import { FiAlertCircle, FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import InternBadge from "./intern-badge";
import EmailBadge from "./email-badge";

export default function Hero() {
  const [isBtnHover, setIsBtnHover] = useState(false);
  return (
    <motion.div className="z-20 lg:pt-16 3xl:pt-28 relative">
      <div className="absolute lg:bottom-[-200px] 3xl:bottom-[-260px] lg:right-[-240px] 3xl:right-[-180px] z-0">
        <LineSVG />
      </div>
      <div className="flex flex-col gap-3 py-8 ">
        <EmailBadge />
        <InternBadge />
      </div>

      <h1 className="font-heading font-black max-w-8xl lg:text-7xl 3xl:text-8xl text-text z-30">
        <span
          className="gradient-heading-small"
          style={{
            color: "#CF7761",
          }}
        >
          Building Products
        </span>{" "}
        <br />
        for early-stage teams
      </h1>
      <div className="flex gap-5 py-10 z-20">
        <Link href="/contact">
          {" "}
          <motion.button
            initial={{ scale: 1, background: "#cf7761" }}
            whileHover={{ scale: 1, background: "#D7CDCB" }}
            transition={{ type: "tween", duration: 0.5 }}
            className="bg-brand px-8 py-3 rounded-3xl font-light text-[black] flex gap-3 items-center"
          >
            <div className="w-2 h-2 rounded-full bg-[green]" />
            Reach Out
          </motion.button>
        </Link>

        <Link href="resume.pdf" target="_blank">
          <motion.button
            onMouseEnter={() => setIsBtnHover(true)}
            onMouseLeave={() => setIsBtnHover(false)}
            className="border border-brand  rounded-3xl font-light overflow-hidden"
          >
            <div className="flex items-center gap-1 relative pr-8 py-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isBtnHover ? 1 : 0 }}
                transition={{ type: "tween", duration: 0.5 }}
                className="w-full h-full bg-brand absolute z-0"
              ></motion.div>
              <p className="pl-8 font-par font-extralight z-10">View Resume</p>
              <FiArrowUpRight className="text-[20px] z-10" />
            </div>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

export const LineSVG = () => {
  return (
    <motion.svg
      width="800"
      height="400"
      viewBox="-10 -10 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, strokeWidth: 20 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 3,
        }}
        d="M776 31.7788C718 87.7788 524.001 -71.2213 397.5 55.279C270.999 181.779 333 196.954 299 175.954C265 154.954 267.73 117.683 242.476 136.954C222.141 152.472 242.476 181.954 242.476 202.454C242.476 222.954 226.195 158.735 187.976 196.954C149.756 235.174 117.976 248.454 61.9756 254.954C5.97563 261.454 -11.5244 202.454 21.9756 175.954C55.4756 149.454 152.976 148.954 149.976 248.454C146.976 347.954 149.976 353.454 149.976 353.454"
        stroke="#CF7761"
      />
    </motion.svg>
  );
};
