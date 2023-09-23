"use client";
import { Divider } from "@/components/divider";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { ProjectLink } from "../project-link";

export default function ProjectDescription(props: {
  title: string;
  subtitle: string;
  role: string;
  client: string;
  duration: string;
  summary: string[];
  link?: string;
}) {
  return (
    <>
      {/* sticky top-[130px] */}
      <div className=" bg-background">
        <h1 className="text-[white] font-light font-heading 3xl:text-6xl md:text-4xl ">
          <span className="text-brand font-black">{props.title}</span>
        </h1>
        <div className="flex w-full justify-between items-end">
          <h1 className="text-[white] font-light font-heading 3xl:text-6xl md:text-4xl ">
            {props.subtitle}
          </h1>
          {props.link ? (
            <ProjectLink title={props.title} link={props.link} />
          ) : null}
        </div>

        <Divider />
      </div>
      <div
        className="flex gap-40 3xl:text-[20px] md:text-[16px]
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
