"use client";
import Image from "next/image";
import { ProjectLink } from "../projects/project-link";
import EmailBadge from "../Hero/email-badge";

export default function Footer() {
  return (
    <div className="flex w-full border-t border-text px-2 py-2 justify-between bg-[#222]">
      <div className="flex flex-col gap-20 px-36 justify-between py-16">
        <Image
          src="/icon.png"
          width={80}
          height={30}
          alt="Haythem Lazaar Logo"
        />

        <p className="font-extralight text-text">
          © 2023 Haythem Lazaar. All rights reserved
        </p>
      </div>
      <div className="flex gap-10 pr-36 py-5">
        <Image
          src="/pro-shot.jpg"
          height={300}
          width={450}
          alt="Haythem Lazaar Software Engineer/Product Designer/Front-end Engineer"
          className="opacity-60 rounded-2xl"
        />
        <div className="flex flex-col gap-5 justify-end">
          {/* <h1 className="font-heading text-2xl">Socials</h1> */}
          <ProjectLink link="resume.pdf" title="Resume" bg="#222" />
          <ProjectLink
            link="https://www.linkedin.com/in/haythem-lazaar/"
            title="LinkedIn"
            bg="#222"
          />
          <ProjectLink
            link="https://twitter.com/HaythemLaz"
            title="X/Twitter"
            bg="#222"
          />
          <EmailBadge />
        </div>
      </div>
    </div>
  );
}
