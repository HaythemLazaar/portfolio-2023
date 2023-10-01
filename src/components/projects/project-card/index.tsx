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
      className="w-full rounded-xl back-card p-[2px] overflow-hidden lg:h-[80vh] lg:max-h-[800px]"
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
        <div className="flex w-full justify-between p-6 lg:p-10 pb-0 items-start z-10">
          <div className="flex flex-col gap-4 lg:gap-[4px]">
            <h1 className="text-xl lg:text-4xl font-black text-transparent font-heading text-[white]">
              {props.name}
            </h1>
            <h1 className="text-base lg:text-xl font-regular lg:font-light font-par text-text flex flex-col md:flex-row items-start gap-1 lg:gap-4">
              <span className="inline-block text-base lg:text-xl font-extralight lg:font-light text-text min-w-max">
                {props.period}
              </span>{" "}
              <span className="hide-small md:inline-block w-2 h-2 rounded-xl bg-text mt-[10px]"></span>
              {props.description}
            </h1>
          </div>

          {props.link ? (
            <div className="hide-small sm:flex gap-2 items-center justify-end text-text project-link hover:gap-3 hover:text-brand transition-all">
              <Link href={props.link} target="_blank">
                {props.name}
              </Link>
              <FiArrowUpRight />{" "}
            </div>
          ) : null}
        </div>
        <motion.div
          initial={{ paddingTop: "100px" }}
          whileInView={{ paddingTop: "48px" }}
          transition={{ duration: 1, type: "tween" }}
          className="w-full px-4 lg:px-20 max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-none"
        >
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
        </motion.div>
      </div>
    </motion.div>
  );
}
