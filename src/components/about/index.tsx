"use client";
import { motion } from "framer-motion";
import AboutCard from "./about-card";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="sticky top-10 flex justify-end items-center w-full ">
        <Image
          src="/profile.png"
          className="z-0 opacity-10"
          width={600}
          height={600}
          alt="Haythem Lazaar"
        />
      </div>
      <AboutCard
        title="Methodology"
        text="I build web apps that align with the product goals & with target
          audience needs while making the design easily comprehensible."
      />

      <AboutCard title="Education">
        <h1 className="text-text text-5xl font-bold font-heading max-w-[1400px] leading-tight">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 1, type: "tween" }}
            className="gradient-heading-small"
          >
            Software engineer{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 1.5, type: "tween" }}
          >
            in the making (final year at school). That doesn{`'`}t hold back my
            curiosity about Product design, Marketing & Sales.
          </motion.span>
        </h1>
      </AboutCard>
      <AboutCard title="Vision & Ambitions">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className="text-text text-5xl font-bold font-heading max-w-[1400px] leading-tight"
        >
          My vision for the coming years is to build up my network and take part
          in making users lives easier through{" "}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 2, type: "tween" }}
            className="gradient-heading-small"
          >
            well-executed products.
          </motion.span>
        </motion.h1>
      </AboutCard>
    </div>
  );
}
