"use client";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectCard(
  props: PropsWithChildren<{
    link?: string;
    pageUrl: string;
    name: string;
    tags?: string[];
    imageSrc?: string;
    imageAlt?: string;
    description?: string;
    period?: string;
  }>
) {
  const router = useRouter();

  return (
    <motion.div
      className="w-full rounded-xl back-card p-[1px] overflow-hidden h-[80vh] max-h-[800px]"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        background: "linear-gradient(160deg, #bebebe -20%, #050505 55.31%)",
      }}
      whileHover={{
        background: "linear-gradient(160deg, #bebebe 30%, #050505 95.31%)",
        cursor: "pointer",
      }}
      transition={{ duration: 0.5 }}
      onClick={() => router.push(props.pageUrl)}
    >
      <div className="w-full h-full rounded-xl flex flex-col items-center main-card">
        <motion.div className="absolute w-full rounded-xl h-full project-color z-0 opacity-0"></motion.div>
        <div className="flex w-full justify-between p-10 pb-0 items-start z-10">
          <div className="flex flex-col gap-[4px]">
            <h1 className="text-4xl font-black text-transparent font-heading text-[white]">
              {props.name}
            </h1>
            <h1 className="text-xl font-light font-par text-text flex items-start gap-4 ">
              <span className="inline-block text-xl font-light text-text min-w-max">
                {props.period}
              </span>{" "}
              <span className="inline-block w-2 h-2 rounded-xl bg-text mt-[10px]"></span>
              {props.description}
            </h1>
          </div>

          {props.link ? (
            <Link href={props.link} target="_blank">
              <motion.div
                initial={{ borderBottom: "none" }}
                whileHover={{ borderBottom: "1px solid white" }}
                transition={{ duration: 1 }}
                className="flex gap-2 items-center justify-end text-text project-link"
              >
                {props.name}
                <FiArrowUpRight />{" "}
              </motion.div>
            </Link>
          ) : null}
        </div>
        <div className="w-full px-20 pt-12">
          {props.imageSrc && props.imageAlt ? (
            <Image
              src={props.imageSrc!}
              alt={props.imageAlt!}
              width={1700}
              height={1000}
              className="project-img shadow-2xl shadow-[#1a1a1a22]"
            />
          ) : (
            props.children
          )}{" "}
        </div>
      </div>
    </motion.div>
  );
}
