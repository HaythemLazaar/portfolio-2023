import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center py-10 px-24 justify-between sticky top-0 z-50">
      <div className="flex gap-5 items-center">
        <Image
          src="/icon.png"
          width={40}
          height={30}
          alt="Haythem Lazaar Logo"
        />
        <h1 className="font-heading font-light text-lg">Haythem Lazaar</h1>
      </div>
      <div className="flex gap-8">
        <Link href="/work">
          <p className="font-par font-extralight">Work</p>
        </Link>
        <Link href="/contact">
          <p className="font-par font-extralight">Contact</p>
        </Link>
        <Link href="" target="_blank">
          <div className="flex items-center gap-1">
            <p className="font-par font-extralight">Resume</p>
            <FiArrowUpRight />
          </div>
        </Link>
        <div className="flex items-center gap-1">
          <Link href="https://twitter.com/HaythemLaz" target="_blank">
            <Image
              src="/TwitterX.svg"
              width={26}
              height={26}
              alt="Haythem's X profile"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/haythem-lazaar/"
            target="_blank"
          >
            <Image
              src="/LinkedIn.svg"
              width={26}
              height={26}
              alt="Haythem's LinkedIn profile"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
