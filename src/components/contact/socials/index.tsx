"use client";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="flex items-center gap-5 z-10 relative">
      <h1 className="text-badge font-par font-extralight tracking-widest text-2xl align-text-top">
        socials{" "}
      </h1>
      <Link href="https://github.com/HaythemLazaar" target="_blank">
        <FaGithubSquare
          style={{ color: "#D7CDCB" }}
          className="text-4xl hover:text-6xl transition-all"
        />
      </Link>
      <Link href="https://twitter.com/HaythemLaz" target="_blank">
        {/* <Image
              src="/TwitterX.svg"
              width={26}
              height={26}
              alt="Haythem's X profile"
              className="hover:w-8 transition-all"
            /> */}
        <FaSquareXTwitter
          style={{ color: "#D7CDCB" }}
          className="text-4xl hover:text-6xl transition-all"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/haythem-lazaar/" target="_blank">
        {/* <Image
              src="/LinkedIn.svg"
              width={26}
              height={26}
              alt="Haythem's LinkedIn profile"
              className="hover:w-8 transition-all"
            /> */}
        <FaLinkedin
          style={{ color: "#D7CDCB" }}
          className="text-4xl hover:text-6xl transition-all"
        />
      </Link>
    </div>
  );
}
