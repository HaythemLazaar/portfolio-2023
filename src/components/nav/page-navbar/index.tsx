"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function PageNavbar() {
  return (
    <nav className="flex justify-between py-8 md:py-10 px-5 sm:px-10 lg:px-24 sticky top-0 z-50">
      <Link href="/">
        <motion.button
          initial={{ background: "#020202" }}
          whileHover={{ background: "#cf7761" }}
          transition={{ type: "tween", duration: 0.5 }}
          className="border border-brand bg-background px-6 md:px-8 py-3 rounded-3xl text-sm md:text-base font-light flex items-center gap-4"
        >
          <FiArrowLeft /> Back
        </motion.button>
      </Link>

      <div className="flex gap-2 md:gap-5 items-center">
        <Image
          src="/icon.png"
          width={40}
          height={30}
          alt="Haythem Lazaar Logo"
        />
        <h1 className="hide-small md:inline font-heading font-light text-base lg:text-lg">
          Haythem Lazaar
        </h1>
      </div>
    </nav>
  );
}
