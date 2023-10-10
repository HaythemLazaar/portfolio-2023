"use client";
import { Divider } from "@/components/divider";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { ProjectLink } from "../project-link";
import { FaGithub } from "react-icons/fa";

export default function ProjectDescription(props: {
  title: string;
  subtitle: string;
  role: string;
  client: string;
  duration: string;
  summary: string[];
  link?: string;
  github?: string;
}) {
  return (
    <>
      {/* sticky top-[130px] */}
      <div className=" bg-background">
        <h1 className="text-[white] font-light font-heading text-2xl 3xl:text-5xl md:text-4xl flex items-center gap-5">
          <span className="text-brand font-black">{props.title} </span>{" "}
          {props.github ? (
            <Link href={props.github} target="_blank">
              <FaGithub className="text-xl md:text-3xl text-badge hover:text-brand transition-all" />
            </Link>
          ) : null}
        </h1>
        <div className="flex flex-col lg:flex-row w-full justify-between gap-10 lg:gap-0 lg:items-end pt-1">
          <h1 className="text-[white] font-light font-heading text-lg 3xl:text-4xl md:text-3xl opacity-80">
            {props.subtitle}
          </h1>
          <div className="flex flex-col gap-2">
            {props.link ? (
              <ProjectLink title={props.title} link={props.link} />
            ) : null}
          </div>
        </div>
      </div>
      <Divider />

      <div
        className="flex flex-col lg:flex-row gap-4 lg:gap-40 3xl:text-[20px] md:text-[16px]
    "
      >
        <div className="flex flex-col gap-4 justify-evenly">
          <div className="flex flex-col gap-2">
            <h1 className="text-[white] font-par font-bold ">Role</h1>
            <h1 className="text-text font-light font-par ">{props.role}</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[white] font-par font-bold ">Client/Team</h1>
            <h1 className="text-text font-light font-par ">{props.client}</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[white] font-par font-bold ">Duration</h1>
            <h1 className="text-text font-light font-par ">{props.duration}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between">
          <h1 className="text-[white] font-par font-bold ">Summary</h1>
          <h1 className="text-text font-light font-par  max-w-5xl leading-6">
            {props.summary.map((line) => (
              <>
                {line}
                <br />
                <br />
              </>
            ))}
          </h1>
        </div>
      </div>
    </>
  );
}
