"use client";
import Hero from "@/components/Hero";
import About from "@/components/about";
import Contact from "@/components/contact";
import Navbar from "@/components/nav/home-navbar";
import Projects from "@/components/projects";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute z-0">
        <Image
          src="/Ellipse.svg"
          width={1600}
          height={500}
          alt="ellipse"
          className="absolute lg:top-32 3xl:top-44 blur-3xl"
        />
        <Image
          src="/noise.svg"
          width={3600}
          height={500}
          alt="ellipse"
          className="relative"
        />
      </div>
      <Navbar />
      <main className="flex min-h-screen flex-col px-36 bg-background">
        <Hero />
        <Projects />
        <About />
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
          <div className="relative w-full h-full rounded-xl flex flex-col main-card pl-20">
            <Contact style="max-w-[1200px]" />
          </div>
        </motion.div>
      </main>
    </>
  );
}
