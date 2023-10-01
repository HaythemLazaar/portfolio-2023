"use client";
import { motion, useInView } from "framer-motion";
import AboutCard from "./about-card";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 gradient-heading text-3xl lg:text-8xl font-black font-heading max-w-[1400px] leading-tight py-28"
      >
        A little about me
      </motion.h1>
      <div ref={ref}>
        <motion.div
          animate={{ opacity: isInView ? 0.5 : 0, scale: isInView ? 1 : 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
          exit={{ scale: 0, opacity: 0 }}
          className="hide-small sticky top-[72%] ml-24 lg:ml-40 lg:flex justify-end items-center w-full z-[0] h-10"
        >
          <Image
            src="/profile.png"
            className="z-[-2] max-w-[400px] lg:max-w-none"
            width={600}
            height={600}
            alt="Haythem Lazaar"
          />
        </motion.div>
        <AboutCard
          title="Methodology"
          text="I build web apps that align with the product goals & with target
          audience needs while making the design easily comprehensible."
        />

        <AboutCard title="Education">
          <h1 className="text-text text-xl lg:text-5xl font-bold font-heading max-w-[1400px] leading-normal m:leading-tight">
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
              in the making (final year at school). That doesn{`'`}t hold back
              my curiosity about Product design, Marketing & Sales.
            </motion.span>
          </h1>
        </AboutCard>
        <AboutCard title="Vision & Ambitions" style="lg:h-auto lg:pt-80">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 1 }}
            className="text-text text-xl lg:text-5xl font-bold font-heading max-w-[1400px] leading-normal m:leading-tight"
          >
            My vision for the coming years is to build up my network and take
            part in making users lives easier through{" "}
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
    </>
  );
}
