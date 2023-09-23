"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function AboutCard(
  props: PropsWithChildren<{ title: string; text?: string }>
) {
  return (
    <motion.div className="py-48">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        className="gradient-heading-faded font-heading font-black text-2xl pb-10 w-fit"
      >
        {props.title}
      </motion.h1>
      {props.text ? (
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 1.5 }}
          className="gradient-heading text-5xl font-bold font-heading max-w-[1400px] leading-tight"
        >
          {props.text}
        </motion.h1>
      ) : (
        props.children
      )}
    </motion.div>
  );
}
