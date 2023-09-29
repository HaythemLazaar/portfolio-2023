"use client";
import Image from "next/image";
import { ProjectLink } from "../projects/project-link";
import EmailBadge from "../Hero/email-badge";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      className="relative w-full back-card p-[2px] overflow-hidden mt-20 lg:mt-32 rounded-xl"
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
      <div className="flex flex-col-reverse md:flex-row w-full p-5 justify-between gap-5 bg-[#222] rounded-xl">
        <div className="flex flex-col sm:flex-row sm:items-end gap-5 md:gap-10">
          <motion.div initial={{ opacity: 0.6 }} whileHover={{ opacity: 1 }}>
            <Image
              src="/pro-shot.jpg"
              height={300}
              width={450}
              alt="Haythem Lazaar Software Engineer/Product Designer/Front-end Engineer"
              className="rounded-2xl"
            />
          </motion.div>

          <div className="flex flex-col justify-between gap-5 h-full">
            <Image
              src="/icon.png"
              height={80}
              width={80}
              alt="Haythem Lazaar Logo"
              className="h-fit w-[20%] md:w-[80px]"
            />

            <div className="flex flex-col gap-2 lg:justify-end">
              <EmailBadge />

              <p className="font-extralight text-text">
                © 2023 Haythem Lazaar. All rights reserved
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-end gap-10 justify-between max-w-[450px] sm:max-w-none px-5">
          <div className="flex gap-10 ">
            <div className="flex flex-col gap-5 justify-end lg:items-end">
              <Link href="/">
                <h1 className="text-text font-extralight">Work</h1>
              </Link>
              <Link href="/contact">
                <h1 className="text-text font-extralight">Reach Out</h1>
              </Link>
              <h1 className="text-xl lg:text-3xl text-[white] font-heading font-black">
                Main
              </h1>
            </div>
          </div>

          <div className="flex gap-10 ">
            <div className="flex flex-col gap-5 justify-end lg:items-end">
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
              <h1 className="text-xl lg:text-3xl text-[white] font-heading font-black">
                Socials
              </h1>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
